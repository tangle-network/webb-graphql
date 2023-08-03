import { execute } from '../../.graphclient';
import { DateUtil } from '../utils/date';
import { SubgraphUrl } from '../config';

export interface TotalValueLockedByChainHistoryItem {
  subgraphUrl: SubgraphUrl;
  totalValueLocked: number;
  startInterval: Date;
  endInterval: Date;
  vAnchorAddress: string;
}

export interface TotalValueLockedByChainAndByTokenHistoryItem
  extends TotalValueLockedByChainHistoryItem {
  tokenSymbol: string;
}

export interface TotalValueLockedByVAnchorHistoryItem {
  vAnchorAddress: string;
  totalValueLocked: number;
}

export const GetVAnchorTotalValueLockedByChainHistory = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<TotalValueLockedByChainHistoryItem> => {
  const query = `
  query TotalValueLocked {
  vanchorTotalValueLockedEvery15Mins(
    where: {endInterval_lte: "${DateUtil.fromDateToEpoch(
      endTimestamp
    )}", startInterval_gte: "${DateUtil.fromDateToEpoch(
    startTimestamp
  )}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    startInterval
    totalValueLocked
    vAnchorAddress
    endInterval
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

  return result.data.vanchorTotalValueLockedEvery15Mins?.map((item: any) => {
    return {
      totalValueLocked: item?.totalValueLocked,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorTotalValueLockedByChainsHistory = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<TotalValueLockedByChainHistoryItem>> => {
  const promises: Array<Promise<TotalValueLockedByChainHistoryItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalValueLockedByChainHistory(
        subgraphUrl,
        vAnchorAddress,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsTotalValueLockedByChainHistory = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<TotalValueLockedByVAnchorHistoryItem>> => {
  const query = `
  query TotalValueLockedByVAnchor {
  vanchorTotalValueLockedEvery15Mins(
    where: { endInterval_lte: "${DateUtil.fromDateToEpoch(
      endTimestamp
    )}", startInterval_gte: "${DateUtil.fromDateToEpoch(
    startTimestamp
  )}", vAnchorAddress_in: [${vanchorAddresses
    .map((address) => '"' + address.toLowerCase() + '"')
    .join(',')}]}
  ) {
    id
    startInterval
    totalValueLocked
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

  const totalValueLockedMap: { [vanchorAddress: string]: number } = {};

  result.data.vanchorTotalValueLockedEvery15Mins?.map((item: any) => {
    if (!totalValueLockedMap[item?.vAnchorAddress]) {
      totalValueLockedMap[item?.vAnchorAddress] = 0;
    }

    totalValueLockedMap[item?.vAnchorAddress] += item?.totalValueLocked;
  });

  const totalValueLockedByVAnchorHistoryItems: Array<TotalValueLockedByVAnchorHistoryItem> =
    [];

  for (const key in totalValueLockedMap) {
    totalValueLockedByVAnchorHistoryItems.push({
      vAnchorAddress: key,
      totalValueLocked: totalValueLockedMap[key],
    });
  }

  return totalValueLockedByVAnchorHistoryItems;
};

export const GetVAnchorsTotalValueLockedByChainsHistory = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<TotalValueLockedByVAnchorHistoryItem>>> => {
  const promises: Array<Promise<Array<TotalValueLockedByVAnchorHistoryItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsTotalValueLockedByChainHistory(
        subgraphUrl,
        vanchorAddresses,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorTotalValueLockedByChainAndByTokenHistory = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<TotalValueLockedByChainAndByTokenHistoryItem>> => {
  const query = `
  query MyQuery {
  vanchorTotalValueLockedByTokenEvery15Mins(
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}", endInterval_lte: "${DateUtil.fromDateToEpoch(
    endTimestamp
  )}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}"}
  ) {
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

  return result.data.vanchorTotalValueLockedByTokenEvery15Mins?.map(
    (item: any) => {
      return {
        totalValueLocked: item?.totalValueLocked,
        subgraphUrl: subgraphUrl,
        startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
        endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
        vAnchorAddress: item?.vAnchorAddress,
      };
    }
  );
};

export const GetVAnchorTotalValueLockedByChainsAndByTokenHistory = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<TotalValueLockedByChainAndByTokenHistoryItem>>> => {
  const promises: Array<
    Promise<Array<TotalValueLockedByChainAndByTokenHistoryItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalValueLockedByChainAndByTokenHistory(
        subgraphUrl,
        vAnchorAddress,
        tokenSymbol,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};
