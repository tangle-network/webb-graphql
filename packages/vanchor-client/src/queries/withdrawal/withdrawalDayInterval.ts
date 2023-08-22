import { getBuiltGraphSDK } from '../../../.graphclient';
import { DateUtil, getEpochArray } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface WithdrawalByChainDayIntervalItem {
  subgraphUrl: SubgraphUrl;
  withdrawal: bigint;
  date: Date;
  vAnchorAddress: string;
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
  date: Date
): Promise<WithdrawalByChainDayIntervalItem | null> => {
  const result = await sdk.GetVAnchorWithdrawalEveryDays(
    {
      date: DateUtil.fromDateToEpoch(date),
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  if (result.vanchorWithdrawalEveryDays?.[0]?.withdrawal === undefined) {
    return null;
  }

  const item = result.vanchorWithdrawalEveryDays[0];

  return {
    withdrawal: BigInt(item.withdrawal),
    subgraphUrl: subgraphUrl,
    date: DateUtil.fromEpochToDate(parseInt(item?.date)),
    vAnchorAddress: String(item.vAnchorAddress),
  };
};

export const GetVAnchorWithdrawalByChainsDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  date: Date
): Promise<Array<WithdrawalByChainDayIntervalItem | null>> => {
  const promises: Array<Promise<WithdrawalByChainDayIntervalItem | null>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWithdrawalByChainDayInterval(subgraphUrl, vAnchorAddress, date)
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsWithdrawalByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  date: Date
): Promise<Array<WithdrawalByVAnchorDayIntervalItem>> => {
  const result = await sdk.GetVAnchorsWithdrawalEveryDay(
    {
      date: DateUtil.fromDateToEpoch(date),
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
  date: Date
): Promise<Array<Array<WithdrawalByVAnchorDayIntervalItem>>> => {
  const promises: Array<Promise<Array<WithdrawalByVAnchorDayIntervalItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsWithdrawalByChainDayInterval(
        subgraphUrl,
        vanchorAddresses,
        date
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorWithdrawalByChainAndByTokenDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  date: Date
): Promise<Array<WithdrawalByChainAndByTokenDayIntervalItem>> => {
  const result = await sdk.GetVanchorWithdrawalByTokenEveryDays(
    {
      date: DateUtil.fromDateToEpoch(date),
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
      date: DateUtil.fromEpochToDate(parseInt(item?.date)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorWithdrawalByChainsAndByTokenDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  date: Date
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
        date
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsWithdrawalByChainByDateRange = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  dateStart: Date,
  numberOfDays: number
): Promise<WithdrawalVAnchorsDateRangeItem> => {
  const dates = getEpochArray(dateStart, numberOfDays);
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
    withdrawalMapByDate[+item.date] += BigInt(item.withdrawal);
  });

  return withdrawalMapByDate;
};

export const GetVAnchorsWithdrawalByChainsByDateRange = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  dateStart: Date,
  numberOfDays: number
): Promise<Array<WithdrawalVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<WithdrawalVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsWithdrawalByChainByDateRange(
        subgraphUrl,
        vanchorAddresses,
        dateStart,
        numberOfDays
      )
    );
  }

  return await Promise.all(promises);
};
