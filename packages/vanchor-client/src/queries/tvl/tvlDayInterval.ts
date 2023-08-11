import { execute } from '../../../.graphclient';
import { DateUtil, getValidDateToQuery } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface TotalValueLockedByChainDayIntervalItem {
  subgraphUrl: SubgraphUrl;
  totalValueLocked: number;
  date: Date;
  vAnchorAddress: string;
}

export interface TotalValueLockedByChainAndByTokenDayIntervalItem
  extends TotalValueLockedByChainDayIntervalItem {
  tokenSymbol: string;
}

export interface TotalValueLockedByVAnchorDayIntervalItem {
  vAnchorAddress: string;
  totalValueLocked: number;
}

export const GetVAnchorTotalValueLockedByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  date: Date
): Promise<TotalValueLockedByChainDayIntervalItem> => {
  const query = `
  query TotalValueLocked {
  vanchorTotalValueLockedEveryDays(
    where: {date: "${DateUtil.fromDateToEpoch(
      getValidDateToQuery(date)
    )}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    id
    totalValueLocked
    vAnchorAddress
    date
  }
}
`;
  const result = await execute(
    query,
    {},
    {
      subgraphUrl,
    }
  );

  return result.data.vanchorTotalValueLockedEveryDay?.map((item: any) => {
    return {
      totalValueLocked: item?.totalValueLocked,
      subgraphUrl: subgraphUrl,
      date: DateUtil.fromEpochToDate(parseInt(item?.date)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorTotalValueLockedByChainsDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  date: Date
): Promise<Array<TotalValueLockedByChainDayIntervalItem>> => {
  const promises: Array<Promise<TotalValueLockedByChainDayIntervalItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalValueLockedByChainDayInterval(
        subgraphUrl,
        vAnchorAddress,
        date
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsTotalValueLockedByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  date: Date
): Promise<Array<TotalValueLockedByVAnchorDayIntervalItem>> => {
  const query = `
  query TotalValueLockedByVAnchor {
  vanchorTotalValueLockedEveryDays(
    where: { date: "${DateUtil.fromDateToEpoch(
      getValidDateToQuery(date)
    )}", vAnchorAddress_in: [${vanchorAddresses
    .map((address) => '"' + address.toLowerCase() + '"')
    .join(',')}]}
  ) {
    id
    totalValueLocked
    vAnchorAddress
    date
  }
}
`;
  const result = await execute(
    query,
    {},
    {
      subgraphUrl,
    }
  );

  const totalValueLockedMap: { [vanchorAddress: string]: number } = {};

  result.data.vanchorTotalValueLockedEveryDay?.map((item: any) => {
    if (!totalValueLockedMap[item?.vAnchorAddress]) {
      totalValueLockedMap[item?.vAnchorAddress] = 0;
    }

    totalValueLockedMap[item?.vAnchorAddress] += item?.totalValueLocked;
  });

  const TotalValueLockedByVAnchorDayIntervalItems: Array<TotalValueLockedByVAnchorDayIntervalItem> =
    [];

  for (const key in totalValueLockedMap) {
    TotalValueLockedByVAnchorDayIntervalItems.push({
      vAnchorAddress: key,
      totalValueLocked: totalValueLockedMap[key],
    });
  }

  return TotalValueLockedByVAnchorDayIntervalItems;
};

export const GetVAnchorsTotalValueLockedByChainsDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  date: Date
): Promise<Array<Array<TotalValueLockedByVAnchorDayIntervalItem>>> => {
  const promises: Array<
    Promise<Array<TotalValueLockedByVAnchorDayIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsTotalValueLockedByChainDayInterval(
        subgraphUrl,
        vanchorAddresses,
        date
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorTotalValueLockedByChainAndByTokenDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  date: Date
): Promise<Array<TotalValueLockedByChainAndByTokenDayIntervalItem>> => {
  const query = `
  query MyQuery {
  vanchorTotalValueLockedByTokenEveryDays(
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}", date: "${DateUtil.fromDateToEpoch(
    getValidDateToQuery(date)
  )}") 
  {
    totalValueLocked,
    startInterval,
    endInterval,
    vAnchorAddress
  }
}
`;
  const result = await execute(
    query,
    {},
    {
      subgraphUrl,
    }
  );

  return result.data.vanchorTotalValueLockedByTokenEveryDay?.map(
    (item: any) => {
      return {
        totalValueLocked: item?.totalValueLocked,
        subgraphUrl: subgraphUrl,
        date: DateUtil.fromEpochToDate(parseInt(item?.date)),
        vAnchorAddress: item?.vAnchorAddress,
      };
    }
  );
};

export const GetVAnchorTotalValueLockedByChainsAndByTokenDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  date: Date
): Promise<Array<Array<TotalValueLockedByChainAndByTokenDayIntervalItem>>> => {
  const promises: Array<
    Promise<Array<TotalValueLockedByChainAndByTokenDayIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalValueLockedByChainAndByTokenDayInterval(
        subgraphUrl,
        vAnchorAddress,
        tokenSymbol,
        date
      )
    );
  }

  return await Promise.all(promises);
};
