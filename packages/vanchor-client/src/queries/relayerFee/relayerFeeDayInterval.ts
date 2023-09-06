import { getBuiltGraphSDK } from '../../../.graphclient';
import { DateUtil, getEpochArray } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface RelayerFeeByChainDayIntervalItem {
  totalFees: bigint;
  profit: bigint;
  txFees: bigint;
  subgraphUrl: SubgraphUrl;
  startInterval: Date;
  endInterval: Date;
}

export interface RelayerFeeByChainAndByTokenDayIntervalItem
  extends RelayerFeeByChainDayIntervalItem {
  tokenSymbol: string;
}

export interface RelayerFeeByVAnchorDayIntervalItem {
  vAnchorAddress: string;
  totalFees: bigint;
  profit: bigint;
  txFees: bigint;
}

export interface RelayerFeeVAnchorsDateRangeItem {
  [epoch: string]: {
    totalFees: bigint;
    profit: bigint;
    txFees: bigint;
  };
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorRelayerFeeByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<RelayerFeeByChainDayIntervalItem>> => {
  const result = await sdk.GetVAnchorRelayerFeeEveryDays(
    {
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorRelayerFeeEveryDays?.length) {
    return [] as Array<RelayerFeeByChainDayIntervalItem>;
  }

  return result.vanchorRelayerFeeEveryDays.map((item) => {
    return {
      totalFees: BigInt(item.totalFees),
      profit: BigInt(item.profit),
      txFees: BigInt(item.txFees),
      subgraphUrl: subgraphUrl,
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
    };
  });
};

export const GetVAnchorRelayerFeeByChainsDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<RelayerFeeByChainDayIntervalItem>>> => {
  const promises: Array<Promise<Array<RelayerFeeByChainDayIntervalItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorRelayerFeeByChainDayInterval(
        subgraphUrl,
        vAnchorAddress,
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsRelayerFeeByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<RelayerFeeByVAnchorDayIntervalItem>> => {
  const result = await sdk.GetVAnchorsRelayerFeeEveryDays(
    {
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorRelayerFeeByTokenEveryDays?.length) {
    return [] as Array<RelayerFeeByVAnchorDayIntervalItem>;
  }

  const totalFeesMap: { [vanchorAddress: string]: bigint } = {};
  const profitMap: { [vanchorAddress: string]: bigint } = {};
  const txFeesMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorRelayerFeeByTokenEveryDays.map((item) => {
    if (!totalFeesMap[item.vAnchorAddress]) {
      totalFeesMap[item?.vAnchorAddress] = BigInt(0);
      profitMap[item?.vAnchorAddress] = BigInt(0);
      txFeesMap[item?.vAnchorAddress] = BigInt(0);
    }

    totalFeesMap[item.vAnchorAddress] += BigInt(item.totalFees);
    profitMap[item.vAnchorAddress] += BigInt(item.profit);
    txFeesMap[item.vAnchorAddress] += BigInt(item.txFees);
  });

  const totalFeesByVAnchorHistoryItems: Array<RelayerFeeByVAnchorDayIntervalItem> =
    [];

  for (const key in totalFeesMap) {
    totalFeesByVAnchorHistoryItems.push({
      vAnchorAddress: key,
      totalFees: totalFeesMap[key],
      profit: profitMap[key],
      txFees: txFeesMap[key],
    });
  }

  return totalFeesByVAnchorHistoryItems;
};

export const GetVAnchorsRelayerFeeByChainsDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<RelayerFeeByVAnchorDayIntervalItem>>> => {
  const promises: Array<Promise<Array<RelayerFeeByVAnchorDayIntervalItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsRelayerFeeByChainDayInterval(
        subgraphUrl,
        vanchorAddresses,
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorRelayerFeeByChainAndByTokenDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<RelayerFeeByChainAndByTokenDayIntervalItem>> => {
  const result = await sdk.GetVAnchorRelayerFeeByTokenEveryDays(
    {
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      tokenSymbol: tokenSymbol,
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorRelayerFeeByTokenEveryDays?.length) {
    return [] as Array<RelayerFeeByChainAndByTokenDayIntervalItem>;
  }

  return result.vanchorRelayerFeeByTokenEveryDays.map((item) => {
    return {
      totalFees: BigInt(item.totalFees),
      profit: BigInt(item.profit),
      txFees: BigInt(item.txFees),
      tokenSymbol,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      vAnchorAddress: item.vAnchorAddress,
    };
  });
};

export const GetVAnchorRelayerFeeByChainsAndByTokenDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<RelayerFeeByChainAndByTokenDayIntervalItem>>> => {
  const promises: Array<
    Promise<Array<RelayerFeeByChainAndByTokenDayIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorRelayerFeeByChainAndByTokenDayInterval(
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

export const GetVAnchorRelayerFeeByChainByDateRange = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddress: string,
  epochStart: number,
  numberOfDays: number
): Promise<RelayerFeeVAnchorsDateRangeItem> => {
  const dates = getEpochArray(epochStart, numberOfDays);
  const result = await sdk.GetVAnchorRelayerFeeByDateRange(
    {
      dateRange: dates.map((date) => date.toString()),
      vAnchorAddress: vanchorAddress,
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorRelayerFeeEveryDays?.length) {
    return {} as RelayerFeeVAnchorsDateRangeItem;
  }

  const relayerFeeMapByDate: RelayerFeeVAnchorsDateRangeItem = {};

  for (const date of dates) {
    relayerFeeMapByDate[date.toString()] = {
      totalFees: BigInt(0),
      profit: BigInt(0),
      txFees: BigInt(0),
    };
  }

  result.vanchorRelayerFeeEveryDays.forEach((item) => {
    relayerFeeMapByDate[item.startInterval.toString()].totalFees += BigInt(
      item.totalFees
    );
    relayerFeeMapByDate[item.startInterval.toString()].profit += BigInt(
      item.profit
    );
    relayerFeeMapByDate[item.startInterval.toString()].txFees += BigInt(
      item.txFees
    );
  });

  return relayerFeeMapByDate;
};

export const GetVAnchorRelayerFeeByChainsByDateRange = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddress: string,
  epochStart: number,
  numberOfDays: number
): Promise<Array<RelayerFeeVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<RelayerFeeVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorRelayerFeeByChainByDateRange(
        subgraphUrl,
        vanchorAddress,
        epochStart,
        numberOfDays
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsRelayerFeeByChainByDateRange = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  epochStart: number,
  numberOfDays: number
): Promise<RelayerFeeVAnchorsDateRangeItem> => {
  const dates = getEpochArray(epochStart, numberOfDays);
  const result = await sdk.GetVanchorsRelayerFeeByDateRange(
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

  if (!result.vanchorRelayerFeeEveryDays?.length) {
    return {} as RelayerFeeVAnchorsDateRangeItem;
  }

  const relayerFeeMapByDate: RelayerFeeVAnchorsDateRangeItem = {};

  for (const date of dates) {
    relayerFeeMapByDate[date.toString()] = {
      totalFees: BigInt(0),
      profit: BigInt(0),
      txFees: BigInt(0),
    };
  }

  result.vanchorRelayerFeeEveryDays.forEach((item) => {
    relayerFeeMapByDate[item.startInterval.toString()].totalFees += BigInt(
      item.totalFees
    );
    relayerFeeMapByDate[item.startInterval.toString()].profit += BigInt(
      item.profit
    );
    relayerFeeMapByDate[item.startInterval.toString()].txFees += BigInt(
      item.txFees
    );
  });

  return relayerFeeMapByDate;
};

export const GetVAnchorsRelayerFeeByChainsByDateRange = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  epochStart: number,
  numberOfDays: number
): Promise<Array<RelayerFeeVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<RelayerFeeVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsRelayerFeeByChainByDateRange(
        subgraphUrl,
        vanchorAddresses,
        epochStart,
        numberOfDays
      )
    );
  }

  return await Promise.all(promises);
};
