import { execute } from '../../../.graphclient';
import { DateUtil } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface TotalValueLockedByChain15MinsIntervalItem {
  subgraphUrl: SubgraphUrl;
  totalValueLocked: number;
  startInterval: Date;
  endInterval: Date;
  vAnchorAddress: string;
}

export interface TotalValueLockedByChainAndByToken15MinsIntervalItem
  extends TotalValueLockedByChain15MinsIntervalItem {
  tokenSymbol: string;
}

export interface TotalValueLockedByVAnchor15MinsIntervalItem {
  vAnchorAddress: string;
  totalValueLocked: number;
}

export const GetVAnchorTotalValueLockedByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<TotalValueLockedByChain15MinsIntervalItem> => {
  const query = `
    query TotalValueLocked {
      vanchorTotalValueLockedEvery15Mins(
        where: {
          endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}",
          startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}",
          vAnchorAddress: "${vAnchorAddress.toLowerCase()}"
        }
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
      totalValueLocked: +item?.totalValueLocked,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorTotalValueLockedByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<TotalValueLockedByChain15MinsIntervalItem>> => {
  const promises: Array<Promise<TotalValueLockedByChain15MinsIntervalItem>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalValueLockedByChain15MinsInterval(
        subgraphUrl,
        vAnchorAddress,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsTotalValueLockedByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<TotalValueLockedByVAnchor15MinsIntervalItem>> => {
  const query = `
    query TotalValueLockedByVAnchor {
      vanchorTotalValueLockedEvery15Mins(
        where: {
          endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}",
          startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}",
          vAnchorAddress_in: [
            ${vanchorAddresses
              .map((address) => '"' + address.toLowerCase() + '"')
              .join(',')}
          ]
        }
      ) {
        id
        startInterval
        totalValueLocked
        endInterval
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

    totalValueLockedMap[item?.vAnchorAddress] += +item?.totalValueLocked;
  });

  const TotalValueLockedByVAnchor15MinsIntervalItems: Array<TotalValueLockedByVAnchor15MinsIntervalItem> =
    [];

  for (const key in totalValueLockedMap) {
    TotalValueLockedByVAnchor15MinsIntervalItems.push({
      vAnchorAddress: key,
      totalValueLocked: totalValueLockedMap[key],
    });
  }

  return TotalValueLockedByVAnchor15MinsIntervalItems;
};

export const GetVAnchorsTotalValueLockedByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<TotalValueLockedByVAnchor15MinsIntervalItem>>> => {
  const promises: Array<
    Promise<Array<TotalValueLockedByVAnchor15MinsIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsTotalValueLockedByChain15MinsInterval(
        subgraphUrl,
        vanchorAddresses,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorTotalValueLockedByChainAndByToken15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<TotalValueLockedByChainAndByToken15MinsIntervalItem>> => {
  const query = `
    query MyQuery {
      vanchorTotalValueLockedByTokenEvery15Mins(
        where: {
          tokenSymbol: "${tokenSymbol}",
          vAnchorAddress: "${vAnchorAddress.toLowerCase()}",
          endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}",
          startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}"
        }
      ) {
        totalValueLocked
        startInterval
        endInterval
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
        totalValueLocked: +item?.totalValueLocked,
        subgraphUrl: subgraphUrl,
        startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
        endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
        vAnchorAddress: item?.vAnchorAddress,
      };
    }
  );
};

export const GetVAnchorTotalValueLockedByChainsAndByToken15MinsInterval =
  async (
    subgraphUrls: Array<SubgraphUrl>,
    vAnchorAddress: string,
    tokenSymbol: string,
    startTimestamp: Date,
    endTimestamp: Date
  ): Promise<
    Array<Array<TotalValueLockedByChainAndByToken15MinsIntervalItem>>
  > => {
    const promises: Array<
      Promise<Array<TotalValueLockedByChainAndByToken15MinsIntervalItem>>
    > = [];

    for (const subgraphUrl of subgraphUrls) {
      promises.push(
        GetVAnchorTotalValueLockedByChainAndByToken15MinsInterval(
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
