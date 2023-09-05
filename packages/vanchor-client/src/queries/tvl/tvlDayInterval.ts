import { getBuiltGraphSDK } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';
import { DateUtil, getEpochArray } from '../../utils/date';

export interface TotalValueLockedByChainDayIntervalItem {
  subgraphUrl: SubgraphUrl;
  totalValueLocked: bigint;
  startInterval: Date;
  endInterval: Date;
}

export interface TotalValueLockedByChainAndByTokenDayIntervalItem
  extends TotalValueLockedByChainDayIntervalItem {
  tokenSymbol: string;
}

export interface TotalValueLockedByVAnchorDayIntervalItem {
  vAnchorAddress: string;
  totalValueLocked: bigint;
}

export interface TVLVAnchorsDateRangeItem {
  [epoch: string]: bigint;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorTotalValueLockedByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<TotalValueLockedByChainDayIntervalItem>> => {
  const result = await sdk.GetVAnchorTotalValueLockedEveryDays(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorTotalValueLockedEveryDays?.length) {
    return [] as Array<TotalValueLockedByChainDayIntervalItem>;
  }

  return result.vanchorTotalValueLockedEveryDays.map((item) => {
    return {
      totalValueLocked: BigInt(item.totalValueLocked),
      subgraphUrl: subgraphUrl,
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
    };
  });
};

export const GetVAnchorTotalValueLockedByChainsDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<TotalValueLockedByChainDayIntervalItem>>> => {
  const promises: Array<
    Promise<Array<TotalValueLockedByChainDayIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalValueLockedByChainDayInterval(
        subgraphUrl,
        vAnchorAddress,
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsTotalValueLockedByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<TotalValueLockedByVAnchorDayIntervalItem>> => {
  const result = await sdk.GetVAnchorsTotalValueLockedEveryDays(
    {
      vAnchorAddresses: vanchorAddresses.map((address) =>
        address.toLowerCase()
      ),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorTotalValueLockedEveryDays?.length) {
    return [] as Array<TotalValueLockedByVAnchorDayIntervalItem>;
  }

  const totalValueLockedMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorTotalValueLockedEveryDays.map((item) => {
    if (!totalValueLockedMap[item?.vAnchorAddress]) {
      totalValueLockedMap[item?.vAnchorAddress] = BigInt(0);
    }

    totalValueLockedMap[item.vAnchorAddress] += BigInt(item.totalValueLocked);
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
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<TotalValueLockedByVAnchorDayIntervalItem>>> => {
  const promises: Array<
    Promise<Array<TotalValueLockedByVAnchorDayIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsTotalValueLockedByChainDayInterval(
        subgraphUrl,
        vanchorAddresses,
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorTotalValueLockedByChainAndByTokenDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<TotalValueLockedByChainAndByTokenDayIntervalItem>> => {
  const result = await sdk.GetVAnchorTotalValueLockedByTokenEveryDays(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      tokenSymbol: tokenSymbol,
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorTotalValueLockedByTokenEveryDays?.length) {
    return [] as Array<TotalValueLockedByChainAndByTokenDayIntervalItem>;
  }

  return result.vanchorTotalValueLockedByTokenEveryDays.map((item) => {
    return {
      totalValueLocked: BigInt(item.totalValueLocked),
      tokenSymbol,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item.vAnchorAddress,
    };
  });
};

export const GetVAnchorTotalValueLockedByChainsAndByTokenDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
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
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorTVLByChainByDateRange = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  epochStart: number,
  numberOfDays: number
): Promise<TVLVAnchorsDateRangeItem> => {
  const dates = getEpochArray(epochStart, numberOfDays);
  const result = await sdk.GetVAnchorTotalValueLockedByDateRange(
    {
      dateRange: dates.map((date) => date.toString()),
      vAnchorAddress: vAnchorAddress,
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorTotalValueLockedEveryDays?.length) {
    return {} as TVLVAnchorsDateRangeItem;
  }

  const tvlMapByDate: TVLVAnchorsDateRangeItem = {};

  for (const date of dates) {
    tvlMapByDate[date.toString()] = BigInt(0);
  }

  result.vanchorTotalValueLockedEveryDays.forEach((item) => {
    tvlMapByDate[item.startInterval.toString()] += BigInt(
      item.totalValueLocked
    );
  });

  // if no tvl update in a day, it will be equal to the previous day
  for (let i = 1; i < dates.length; i++) {
    if (tvlMapByDate[dates[i]] === BigInt(0)) {
      tvlMapByDate[dates[i]] = tvlMapByDate[dates[i - 1]];
    }
  }

  return tvlMapByDate;
};

export const GetVAnchorTVLByChainsByDateRange = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  epochStart: number,
  numberOfDays: number
): Promise<Array<TVLVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<TVLVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTVLByChainByDateRange(
        subgraphUrl,
        vAnchorAddress,
        epochStart,
        numberOfDays
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsTVLByChainByDateRange = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  epochStart: number,
  numberOfDays: number
): Promise<TVLVAnchorsDateRangeItem> => {
  const dates = getEpochArray(epochStart, numberOfDays);
  const result = await sdk.GetVAnchorsTotalValueLockedByDateRange(
    {
      vAnchorAddresses: vanchorAddresses.map((address) =>
        address.toLowerCase()
      ),
      dateRange: dates.map((date) => date.toString()),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorTotalValueLockedEveryDays?.length) {
    return {} as TVLVAnchorsDateRangeItem;
  }

  const tvlMapByDate: TVLVAnchorsDateRangeItem = {};

  for (const date of dates) {
    tvlMapByDate[date.toString()] = BigInt(0);
  }

  result.vanchorTotalValueLockedEveryDays.forEach((item) => {
    tvlMapByDate[item.startInterval.toString()] += BigInt(
      item.totalValueLocked
    );
  });

  // if no tvl update in a day, it will be equal to the previous day
  for (let i = 1; i < dates.length; i++) {
    if (tvlMapByDate[dates[i]] === BigInt(0)) {
      tvlMapByDate[dates[i]] = tvlMapByDate[dates[i - 1]];
    }
  }

  return tvlMapByDate;
};

export const GetVAnchorsTVLByChainsByDateRange = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  epochStart: number,
  numberOfDays: number
): Promise<Array<TVLVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<TVLVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsTVLByChainByDateRange(
        subgraphUrl,
        vanchorAddresses,
        epochStart,
        numberOfDays
      )
    );
  }

  return await Promise.all(promises);
};
