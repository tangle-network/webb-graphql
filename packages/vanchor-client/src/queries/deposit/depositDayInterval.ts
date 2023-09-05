import { getBuiltGraphSDK } from '../../../.graphclient';
import { DateUtil, getEpochArray } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface DepositByChainDayIntervalItem {
  subgraphUrl: SubgraphUrl;
  deposit: bigint;
  startInterval: Date;
  endInterval: Date;
}

export interface DepositByChainAndByTokenDayIntervalItem
  extends DepositByChainDayIntervalItem {
  tokenSymbol: string;
}

export interface DepositByVAnchorDayIntervalItem {
  vAnchorAddress: string;
  deposit: bigint;
}

export interface DepositVAnchorsDateRangeItem {
  [epoch: string]: bigint;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorDepositByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<DepositByChainDayIntervalItem>> => {
  const result = await sdk.GetVAnchorDepositEveryDays(
    {
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorDepositEveryDays?.length) {
    return [] as Array<DepositByChainDayIntervalItem>;
  }

  return result.vanchorDepositEveryDays.map((item) => {
    return {
      deposit: BigInt(item.deposit),
      subgraphUrl: subgraphUrl,
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
    };
  });
};

export const GetVAnchorDepositByChainsDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<DepositByChainDayIntervalItem>>> => {
  const promises: Array<Promise<Array<DepositByChainDayIntervalItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorDepositByChainDayInterval(
        subgraphUrl,
        vAnchorAddress,
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsDepositByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<DepositByVAnchorDayIntervalItem>> => {
  const result = await sdk.GetVAnchorsDepositEveryDays(
    {
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      vAnchorAddresses: vanchorAddresses.map((address) =>
        address.toLowerCase()
      ),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorDepositEveryDays?.length) {
    return [] as Array<DepositByVAnchorDayIntervalItem>;
  }

  const depositMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorDepositEveryDays?.map((item) => {
    if (!depositMap[item?.vAnchorAddress]) {
      depositMap[item?.vAnchorAddress] = BigInt(0);
    }

    depositMap[item?.vAnchorAddress] += BigInt(item.deposit);
  });

  const depositByVAnchorDayIntervalItems: Array<DepositByVAnchorDayIntervalItem> =
    [];

  for (const key in depositMap) {
    depositByVAnchorDayIntervalItems.push({
      vAnchorAddress: key,
      deposit: depositMap[key],
    });
  }

  return depositByVAnchorDayIntervalItems;
};

export const GetVAnchorsDepositByChainsDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<DepositByVAnchorDayIntervalItem>>> => {
  const promises: Array<Promise<Array<DepositByVAnchorDayIntervalItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsDepositByChainDayInterval(
        subgraphUrl,
        vanchorAddresses,
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorDepositByChainAndByTokenDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<DepositByChainAndByTokenDayIntervalItem>> => {
  const result = await sdk.GetVAnchorDepositByTokenEveryDays(
    {
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      tokenSymbol: tokenSymbol,
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorDepositByTokenEveryDays?.length) {
    return [] as Array<DepositByChainAndByTokenDayIntervalItem>;
  }

  return result.vanchorDepositByTokenEveryDays?.map((item) => {
    return {
      deposit: BigInt(item.deposit),
      tokenSymbol,
      subgraphUrl: subgraphUrl,
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorDepositByChainsAndByTokenDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<DepositByChainAndByTokenDayIntervalItem>>> => {
  const promises: Array<
    Promise<Array<DepositByChainAndByTokenDayIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorDepositByChainAndByTokenDayInterval(
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

export const GetVAnchorsDepositByChainByDateRange = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  epochStart: number,
  numberOfDays: number
): Promise<DepositVAnchorsDateRangeItem> => {
  const dates = getEpochArray(epochStart, numberOfDays);
  const result = await sdk.GetVanchorsDepositByDateRange(
    {
      dateRange: dates.map((date) => date.toString()),
      vAnchorAddresses: vanchorAddresses.map((address) =>
        address.toLowerCase()
      ),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorDepositEveryDays?.length) {
    return {} as DepositVAnchorsDateRangeItem;
  }

  const depositMapByDate: DepositVAnchorsDateRangeItem = {};

  for (const date of dates) {
    depositMapByDate[date.toString()] = BigInt(0);
  }

  result.vanchorDepositEveryDays.forEach((item) => {
    depositMapByDate[item.startInterval.toString()] += BigInt(item.deposit);
  });

  return depositMapByDate;
};

export const GetVAnchorsDepositByChainsByDateRange = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  epochStart: number,
  numberOfDays: number
): Promise<Array<DepositVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<DepositVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsDepositByChainByDateRange(
        subgraphUrl,
        vanchorAddresses,
        epochStart,
        numberOfDays
      )
    );
  }

  return await Promise.all(promises);
};
