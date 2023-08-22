import { getBuiltGraphSDK } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';
import { DateUtil, getEpochArray } from '../../utils/date';

export interface TotalValueLockedByChainByDayItem {
  subgraphUrl: SubgraphUrl;
  totalValueLocked: bigint;
  date: Date;
  vAnchorAddress: string;
}

export interface TotalValueLockedByChainAndByTokenByDayItem
  extends TotalValueLockedByChainByDayItem {
  tokenSymbol: string;
}

export interface TotalValueLockedByVAnchorByDayItem {
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
  date: Date
): Promise<TotalValueLockedByChainDayIntervalItem> => {
  const result = await sdk.GetVAnchorTotalValueLockedEveryDays(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      date: DateUtil.fromDateToEpoch(date),
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorTotalValueLockedEveryDays.map((item) => {
    return {
      totalValueLocked: BigInt(item.totalValueLocked),
      subgraphUrl: subgraphUrl,
      date: DateUtil.fromEpochToDate(parseInt(item.date)),
      vAnchorAddress: item.vAnchorAddress,
    };
  })?.[0];
};

export const GetVAnchorTotalValueLockedByChainsByDay = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  date: Date
): Promise<Array<Array<TotalValueLockedByChainByDayItem>>> => {
  const promises: Array<Promise<Array<TotalValueLockedByChainByDayItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalValueLockedByChainByDay(subgraphUrl, vAnchorAddress, date)
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsTotalValueLockedByChainByDay = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  date: Date
): Promise<Array<TotalValueLockedByVAnchorDayIntervalItem>> => {
  const result = await sdk.GetVAnchorsTotalValueLockedEveryDays(
    {
      vAnchorAddresses: vanchorAddresses.map((address) =>
        address.toLowerCase()
      ),
      date: DateUtil.fromDateToEpoch(date),
    },
    {
      subgraphUrl,
    }
  );

  const totalValueLockedMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorTotalValueLockedEveryDays.map((item) => {
    if (!totalValueLockedMap[item?.vAnchorAddress]) {
      totalValueLockedMap[item?.vAnchorAddress] = BigInt(0);
    }

    totalValueLockedMap[item.vAnchorAddress] += BigInt(item.totalValueLocked);
  });

  const TotalValueLockedByVAnchorByDayItems: Array<TotalValueLockedByVAnchorByDayItem> =
    [];

  for (const key in totalValueLockedMap) {
    TotalValueLockedByVAnchorByDayItems.push({
      vAnchorAddress: key,
      totalValueLocked: totalValueLockedMap[key],
    });
  }

  return TotalValueLockedByVAnchorByDayItems;
};

export const GetVAnchorsTotalValueLockedByChainsByDay = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  date: Date
): Promise<Array<Array<TotalValueLockedByVAnchorByDayItem>>> => {
  const promises: Array<Promise<Array<TotalValueLockedByVAnchorByDayItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsTotalValueLockedByChainByDay(
        subgraphUrl,
        vanchorAddresses,
        date
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorTotalValueLockedByChainAndByTokenByDay = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  date: Date
): Promise<Array<TotalValueLockedByChainAndByTokenDayIntervalItem>> => {
  const result = await sdk.GetVAnchorTotalValueLockedByTokenEveryDays(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      tokenSymbol: tokenSymbol,
      date: DateUtil.fromDateToEpoch(date),
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorTotalValueLockedByTokenEveryDays.map((item) => {
    return {
      totalValueLocked: BigInt(item.totalValueLocked),
      tokenSymbol,
      subgraphUrl: subgraphUrl,
      date: DateUtil.fromEpochToDate(parseInt(item.date)),
      vAnchorAddress: item.vAnchorAddress,
    };
  });
};

export const GetVAnchorTotalValueLockedByChainsAndByTokenByDay = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  date: Date
): Promise<Array<Array<TotalValueLockedByChainAndByTokenByDayItem>>> => {
  const promises: Array<
    Promise<Array<TotalValueLockedByChainAndByTokenByDayItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalValueLockedByChainAndByTokenByDay(
        subgraphUrl,
        vAnchorAddress,
        tokenSymbol,
        date
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsTVLByChainByDateRange = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  dateStart: Date,
  numberOfDays: number
): Promise<TVLVAnchorsDateRangeItem> => {
  const dates = getEpochArray(dateStart, numberOfDays);
  const result = await sdk.GetVAnchorsTotalValueLockedByDateRangeEveryDays(
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

  if (result?.data?.vanchorTotalValueLockedByDays == null) {
    return {} as TVLVAnchorsDateRangeItem;
  }

  const tvlMapByDate: TVLVAnchorsDateRangeItem = {};

  for (const date of dates) {
    tvlMapByDate[date.toString()] = BigInt(0);
  }

  result.vanchorTotalValueLockedEveryDays.forEach((item) => {
    tvlMapByDate[item.date.toString()] += BigInt(item.totalValueLocked);
  });

  // if no tvl update in a day, it will be equal to the previous day
  for (let i = 1; i < dates.length; i++) {
    if (tvlMapByDate[dates[i]] === 0) {
      tvlMapByDate[dates[i]] = tvlMapByDate[dates[i - 1]];
    }
  }

  return tvlMapByDate;
};

export const GetVAnchorsTVLByChainsByDateRange = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  dateStart: Date,
  numberOfDays: number
): Promise<Array<TVLVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<TVLVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsTVLByChainByDateRange(
        subgraphUrl,
        vanchorAddresses,
        dateStart,
        numberOfDays
      )
    );
  }

  return await Promise.all(promises);
};
