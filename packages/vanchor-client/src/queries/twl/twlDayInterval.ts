import { getBuiltGraphSDK } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';
import { DateUtil, getEpochArray } from '../../utils/date';

export interface TWLByChainDayIntervalItem {
  subgraphUrl: SubgraphUrl;
  total: bigint;
  startInterval: Date;
  endInterval: Date;
}

export interface TWLByChainAndByTokenDayIntervalItem
  extends TWLByChainDayIntervalItem {
  tokenSymbol: string;
}

export interface TWLByVAnchorDayIntervalItem {
  vAnchorAddress: string;
  total: bigint;
}

export interface TWLVAnchorsDateRangeItem {
  [epoch: string]: bigint;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorTWLByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<TWLByChainDayIntervalItem>> => {
  const result = await sdk.GetVAnchorTWLEveryDays(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorTWLEveryDays?.length) {
    return [] as Array<TWLByChainDayIntervalItem>;
  }

  return result.vanchorTWLEveryDays.map((item) => {
    return {
      total: BigInt(item.total),
      subgraphUrl: subgraphUrl,
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
    };
  });
};

export const GetVAnchorTWLByChainsDayInterval = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<TWLByChainDayIntervalItem>>> => {
  const promises: Array<Promise<Array<TWLByChainDayIntervalItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTWLByChainDayInterval(
        subgraphUrl,
        vAnchorAddress,
        startInterval,
        endInterval
      )
    );
  }

  return Promise.all(promises);
};

export const GetVAnchorsTWLByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<TWLByVAnchorDayIntervalItem>> => {
  const result = await sdk.GetVAnchorsTWLEveryDays(
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

  if (!result.vanchorTWLEveryDays?.length) {
    return [] as Array<TWLByVAnchorDayIntervalItem>;
  }

  const totalMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorTWLEveryDays.map((item) => {
    if (!totalMap[item?.vAnchorAddress]) {
      totalMap[item?.vAnchorAddress] = BigInt(0);
    }

    totalMap[item.vAnchorAddress] += BigInt(item.total);
  });

  const TWLByVAnchorDayIntervalItems: Array<TWLByVAnchorDayIntervalItem> = [];

  for (const key in totalMap) {
    TWLByVAnchorDayIntervalItems.push({
      vAnchorAddress: key,
      total: totalMap[key],
    });
  }

  return TWLByVAnchorDayIntervalItems;
};

export const GetVAnchorsTWLByChainsDayInterval = (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<TWLByVAnchorDayIntervalItem>>> => {
  const promises: Array<Promise<Array<TWLByVAnchorDayIntervalItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsTWLByChainDayInterval(
        subgraphUrl,
        vanchorAddresses,
        startInterval,
        endInterval
      )
    );
  }

  return Promise.all(promises);
};

export const GetVAnchorTWLByChainAndByTokenDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<TWLByChainAndByTokenDayIntervalItem>> => {
  const result = await sdk.GetVAnchorTWLByTokenEveryDays(
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

  if (!result.vanchorTWLByTokenEveryDays?.length) {
    return [] as Array<TWLByChainAndByTokenDayIntervalItem>;
  }

  return result.vanchorTWLByTokenEveryDays.map((item) => {
    return {
      total: BigInt(item.total),
      tokenSymbol,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item.vAnchorAddress,
    };
  });
};

export const GetVAnchorTWLByChainsAndByTokenDayInterval = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<TWLByChainAndByTokenDayIntervalItem>>> => {
  const promises: Array<Promise<Array<TWLByChainAndByTokenDayIntervalItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTWLByChainAndByTokenDayInterval(
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

export const GetVAnchorTWLByChainByDateRange = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  epochStart: number,
  numberOfDays: number
): Promise<TWLVAnchorsDateRangeItem> => {
  const dates = getEpochArray(epochStart, numberOfDays);
  const result = await sdk.GetVAnchorTWLByDateRange(
    {
      vAnchorAddress: vAnchorAddress,
      dateRange: dates.map((date) => date.toString()),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorTWLEveryDays?.length) {
    return {} as TWLVAnchorsDateRangeItem;
  }

  const twlMapByDate: TWLVAnchorsDateRangeItem = {};

  for (const date of dates) {
    twlMapByDate[date.toString()] = BigInt(0);
  }

  result.vanchorTWLEveryDays.forEach((item) => {
    twlMapByDate[item.startInterval.toString()] += BigInt(item.total);
  });

  // if no twl update in a day, it will be equal to the previous day
  for (let i = 1; i < dates.length; i++) {
    if (twlMapByDate[dates[i]] === BigInt(0)) {
      twlMapByDate[dates[i]] = twlMapByDate[dates[i - 1]];
    }
  }

  return twlMapByDate;
};

export const GetVAnchorTWLByChainsByDateRange = (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddress: string,
  epochStart: number,
  numberOfDays: number
): Promise<Array<TWLVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<TWLVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTWLByChainByDateRange(
        subgraphUrl,
        vanchorAddress,
        epochStart,
        numberOfDays
      )
    );
  }

  return Promise.all(promises);
};

export const GetVAnchorsTWLByChainByDateRange = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  epochStart: number,
  numberOfDays: number
): Promise<TWLVAnchorsDateRangeItem> => {
  const dates = getEpochArray(epochStart, numberOfDays);
  const result = await sdk.GetVAnchorsTWLByDateRange(
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

  if (!result.vanchorTWLEveryDays?.length) {
    return {} as TWLVAnchorsDateRangeItem;
  }

  const twlMapByDate: TWLVAnchorsDateRangeItem = {};

  for (const date of dates) {
    twlMapByDate[date.toString()] = BigInt(0);
  }

  result.vanchorTWLEveryDays.forEach((item) => {
    twlMapByDate[item.startInterval.toString()] += BigInt(item.total);
  });

  // if no twl update in a day, it will be equal to the previous day
  for (let i = 1; i < dates.length; i++) {
    if (twlMapByDate[dates[i]] === BigInt(0)) {
      twlMapByDate[dates[i]] = twlMapByDate[dates[i - 1]];
    }
  }

  return twlMapByDate;
};

export const GetVAnchorsTWLByChainsByDateRange = (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  epochStart: number,
  numberOfDays: number
): Promise<Array<TWLVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<TWLVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsTWLByChainByDateRange(
        subgraphUrl,
        vanchorAddresses,
        epochStart,
        numberOfDays
      )
    );
  }

  return Promise.all(promises);
};
