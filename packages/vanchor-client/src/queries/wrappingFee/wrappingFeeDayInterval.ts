import { getBuiltGraphSDK } from '../../../.graphclient';
import { DateUtil, getEpochArray } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface WrappingFeeByChainDayIntervalItem {
  subgraphUrl: SubgraphUrl;
  wrappingFee: bigint | null;
  startInterval: Date;
  endInterval: Date;
}

export interface WrappingFeeByChainAndByTokenDayIntervalItem
  extends WrappingFeeByChainDayIntervalItem {
  tokenSymbol: string;
}

export interface WrappingFeeByVAnchorDayIntervalItem {
  vAnchorAddress: string;
  wrappingFee: bigint | null;
}

export interface WrappingFeeVAnchorsDateRangeItem {
  [epoch: string]: bigint;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorWrappingFeeByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<WrappingFeeByChainDayIntervalItem>> => {
  const result = await sdk.GetVAnchorWrappingFeeEveryDays(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorWrappingFeeEveryDays?.length) {
    return [] as Array<WrappingFeeByChainDayIntervalItem>;
  }

  return result.vanchorWrappingFeeEveryDays.map((item) => {
    return {
      wrappingFee: BigInt(item.fees),
      subgraphUrl: subgraphUrl,
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
    };
  });
};

export const GetVAnchorWrappingFeeByChainsDayInterval = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<WrappingFeeByChainDayIntervalItem>>> => {
  const promises: Array<Promise<Array<WrappingFeeByChainDayIntervalItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWrappingFeeByChainDayInterval(
        subgraphUrl,
        vAnchorAddress,
        startInterval,
        endInterval
      )
    );
  }

  return Promise.all(promises);
};

export const GetVAnchorsWrappingFeeByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<WrappingFeeByVAnchorDayIntervalItem>> => {
  const result = await sdk.GetVAnchorsWrappingFeeEveryDays(
    {
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorWrappingFeeEveryDays?.length) {
    return [] as Array<WrappingFeeByVAnchorDayIntervalItem>;
  }

  const wrappingFeeMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorWrappingFeeEveryDays.map((item) => {
    if (!wrappingFeeMap[item.vAnchorAddress]) {
      wrappingFeeMap[item.vAnchorAddress] = BigInt(0);
    }

    wrappingFeeMap[item.vAnchorAddress] += BigInt(item.fees);
  });

  const wrappingFeeByVAnchorDayIntervalItems: Array<WrappingFeeByVAnchorDayIntervalItem> =
    [];

  for (const key in wrappingFeeMap) {
    wrappingFeeByVAnchorDayIntervalItems.push({
      vAnchorAddress: key,
      wrappingFee: wrappingFeeMap[key],
    });
  }

  return wrappingFeeByVAnchorDayIntervalItems;
};

export const GetVAnchorsWrappingFeeByChainsDayInterval = (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<WrappingFeeByVAnchorDayIntervalItem>>> => {
  const promises: Array<Promise<Array<WrappingFeeByVAnchorDayIntervalItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsWrappingFeeByChainDayInterval(
        subgraphUrl,
        vanchorAddresses,
        startInterval,
        endInterval
      )
    );
  }

  return Promise.all(promises);
};

export const GetVAnchorWrappingFeeByChainAndByTokenDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<WrappingFeeByChainAndByTokenDayIntervalItem>> => {
  const result = await sdk.GetVAnchorWrappingFeeByTokenEveryDays(
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

  return result.vanchorWrappingFeeByTokenEveryDays.map((item) => {
    return {
      wrappingFee: BigInt(item.fees),
      subgraphUrl: subgraphUrl,
      tokenSymbol,
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      vAnchorAddress: item.vAnchorAddress,
    };
  });
};

export const GetVAnchorWrappingFeeByChainsAndByTokenDayInterval = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<WrappingFeeByChainAndByTokenDayIntervalItem>>> => {
  const promises: Array<
    Promise<Array<WrappingFeeByChainAndByTokenDayIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWrappingFeeByChainAndByTokenDayInterval(
        subgraphUrl,
        vAnchorAddress,
        tokenSymbol,
        startInterval,
        endInterval
      )
    );
  }

  return Promise.all(promises);
};

export const GetVAnchorWrappingFeeByChainByDateRange = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  epochStart: number,
  numberOfDays: number
): Promise<WrappingFeeVAnchorsDateRangeItem> => {
  const dates = getEpochArray(epochStart, numberOfDays);
  const result = await sdk.GetVanchorWrappingFeeByDateRange(
    {
      dateRange: dates.map((date) => date.toString()),
      vAnchorAddress: vAnchorAddress,
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorWrappingFeeEveryDays?.length) {
    return {} as WrappingFeeVAnchorsDateRangeItem;
  }

  const wrappingFeeMapByDate: WrappingFeeVAnchorsDateRangeItem = {};

  for (const date of dates) {
    wrappingFeeMapByDate[date.toString()] = BigInt(0);
  }

  result.vanchorWrappingFeeEveryDays.forEach((item) => {
    wrappingFeeMapByDate[item.startInterval.toString()] += BigInt(item.fees);
  });

  return wrappingFeeMapByDate;
};

export const GetVAnchorWrappingFeeByChainsByDateRange = (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddress: string,
  epochStart: number,
  numberOfDays: number
): Promise<Array<WrappingFeeVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<WrappingFeeVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWrappingFeeByChainByDateRange(
        subgraphUrl,
        vanchorAddress,
        epochStart,
        numberOfDays
      )
    );
  }

  return Promise.all(promises);
};

export const GetVAnchorsWrappingFeeByChainByDateRange = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  epochStart: number,
  numberOfDays: number
): Promise<WrappingFeeVAnchorsDateRangeItem> => {
  const dates = getEpochArray(epochStart, numberOfDays);
  const result = await sdk.GetVanchorsWrappingFeeByDateRange(
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

  if (!result.vanchorWrappingFeeEveryDays?.length) {
    return {} as WrappingFeeVAnchorsDateRangeItem;
  }

  const wrappingFeeMapByDate: WrappingFeeVAnchorsDateRangeItem = {};

  for (const date of dates) {
    wrappingFeeMapByDate[date.toString()] = BigInt(0);
  }

  result.vanchorWrappingFeeEveryDays.forEach((item) => {
    wrappingFeeMapByDate[item.startInterval.toString()] += BigInt(item.fees);
  });

  return wrappingFeeMapByDate;
};

export const GetVAnchorsWrappingFeeByChainsByDateRange = (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  epochStart: number,
  numberOfDays: number
): Promise<Array<WrappingFeeVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<WrappingFeeVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsWrappingFeeByChainByDateRange(
        subgraphUrl,
        vanchorAddresses,
        epochStart,
        numberOfDays
      )
    );
  }

  return Promise.all(promises);
};
