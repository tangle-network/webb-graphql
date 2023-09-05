import { getBuiltGraphSDK } from '../../../.graphclient';
import { DateUtil, getEpochArray } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface WithdrawalByChainDayIntervalItem {
  subgraphUrl: SubgraphUrl;
  withdrawal: bigint;
  startInterval: Date;
  endInterval: Date;
}

export interface WithdrawalByChainAndByTokenDayIntervalItem
  extends WithdrawalByChainDayIntervalItem {
  tokenSymbol: string;
}

export interface WithdrawalByVAnchorDayIntervalItem {
  vAnchorAddress: string;
  withdrawal: bigint;
}

export interface WithdrawalVAnchorsDateRangeItem {
  [epoch: string]: bigint;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorWithdrawalByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<WithdrawalByChainDayIntervalItem>> => {
  const result = await sdk.GetVAnchorWithdrawalEveryDays(
    {
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorWithdrawalEveryDays?.length) {
    return [] as Array<WithdrawalByChainDayIntervalItem>;
  }

  return result.vanchorWithdrawalEveryDays.map((item) => {
    return {
      withdrawal: BigInt(item.withdrawal),
      subgraphUrl: subgraphUrl,
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
    };
  });
};

export const GetVAnchorWithdrawalByChainsDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<WithdrawalByChainDayIntervalItem>>> => {
  const promises: Array<Promise<Array<WithdrawalByChainDayIntervalItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWithdrawalByChainDayInterval(
        subgraphUrl,
        vAnchorAddress,
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsWithdrawalByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<WithdrawalByVAnchorDayIntervalItem>> => {
  const result = await sdk.GetVAnchorsWithdrawalEveryDays(
    {
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      vAnchorAddresses: vanchorAddresses.map((address) =>
        address.toLowerCase()
      ),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorWithdrawalEveryDays?.length) {
    return [] as Array<WithdrawalByVAnchorDayIntervalItem>;
  }

  const withdrawalMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorWithdrawalEveryDays?.map((item) => {
    if (!withdrawalMap[item?.vAnchorAddress]) {
      withdrawalMap[item?.vAnchorAddress] = BigInt(0);
    }

    withdrawalMap[item?.vAnchorAddress] += BigInt(item.withdrawal);
  });

  const withdrawalByVAnchorDayIntervalItems: Array<WithdrawalByVAnchorDayIntervalItem> =
    [];

  for (const key in withdrawalMap) {
    withdrawalByVAnchorDayIntervalItems.push({
      vAnchorAddress: key,
      withdrawal: withdrawalMap[key],
    });
  }

  return withdrawalByVAnchorDayIntervalItems;
};

export const GetVAnchorsWithdrawalByChainsDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<WithdrawalByVAnchorDayIntervalItem>>> => {
  const promises: Array<Promise<Array<WithdrawalByVAnchorDayIntervalItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsWithdrawalByChainDayInterval(
        subgraphUrl,
        vanchorAddresses,
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorWithdrawalByChainAndByTokenDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<WithdrawalByChainAndByTokenDayIntervalItem>> => {
  const result = await sdk.GetVAnchorWithdrawalByTokenEveryDays(
    {
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      tokenSymbol: tokenSymbol,
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorWithdrawalByTokenEveryDays?.length) {
    return [] as Array<WithdrawalByChainAndByTokenDayIntervalItem>;
  }

  return result.vanchorWithdrawalByTokenEveryDays?.map((item) => {
    return {
      withdrawal: BigInt(item.withdrawal),
      tokenSymbol,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorWithdrawalByChainsAndByTokenDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<WithdrawalByChainAndByTokenDayIntervalItem>>> => {
  const promises: Array<
    Promise<Array<WithdrawalByChainAndByTokenDayIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWithdrawalByChainAndByTokenDayInterval(
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

export const GetVAnchorsWithdrawalByChainByDateRange = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  epochStart: number,
  numberOfDays: number
): Promise<WithdrawalVAnchorsDateRangeItem> => {
  const dates = getEpochArray(epochStart, numberOfDays);
  const result = await sdk.GetVanchorsWithdrawalByDateRange(
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

  if (!result.vanchorWithdrawalEveryDays?.length) {
    return {} as WithdrawalVAnchorsDateRangeItem;
  }

  const withdrawalMapByDate: WithdrawalVAnchorsDateRangeItem = {};

  for (const date of dates) {
    withdrawalMapByDate[date.toString()] = BigInt(0);
  }

  result.vanchorWithdrawalEveryDays.forEach((item) => {
    withdrawalMapByDate[item.startInterval.toString()] += BigInt(
      item.withdrawal
    );
  });

  return withdrawalMapByDate;
};

export const GetVAnchorsWithdrawalByChainsByDateRange = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  epochStart: number,
  numberOfDays: number
): Promise<Array<WithdrawalVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<WithdrawalVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsWithdrawalByChainByDateRange(
        subgraphUrl,
        vanchorAddresses,
        epochStart,
        numberOfDays
      )
    );
  }

  return await Promise.all(promises);
};
