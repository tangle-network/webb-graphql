import { getBuiltGraphSDK } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';
import { DateUtil, getEpochArray } from '../../utils/date';

export interface TotalValueLockedByChainDayIntervalItem {
  subgraphUrl: SubgraphUrl;
  totalValueLocked: bigint;
  date: Date;
  vAnchorAddress: string;
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

  const tvlMapByDate: TVLVAnchorsDateRangeItem = {};

  for (const date of dates) {
    tvlMapByDate[date.toString()] = BigInt(0);
  }

  result.vanchorTotalValueLockedEveryDays.forEach((item) => {
    tvlMapByDate[item.date.toString()] += BigInt(item.totalValueLocked);
  });

  return tvlMapByDate;
};
