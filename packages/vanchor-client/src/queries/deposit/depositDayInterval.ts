import { execute, getBuiltGraphSDK } from '../../../.graphclient';
import { DateUtil, getEpochArray } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface DepositByChainDayIntervalItem {
  subgraphUrl: SubgraphUrl;
  deposit: bigint;
  date: Date;
  vAnchorAddress: string;
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
  date: Date
): Promise<DepositByChainDayIntervalItem> => {
  const result = await sdk.GetVAnchorDepositEveryDays(
    {
      date: DateUtil.fromDateToEpoch(date),
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorDepositEveryDays.map((item) => {
    return {
      deposit: BigInt(item.deposit),
      subgraphUrl: subgraphUrl,
      date: DateUtil.fromEpochToDate(parseInt(item?.date)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  })?.[0];
};

export const GetVAnchorDepositByChainsDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  date: Date
): Promise<Array<DepositByChainDayIntervalItem>> => {
  const promises: Array<Promise<DepositByChainDayIntervalItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorDepositByChainDayInterval(subgraphUrl, vAnchorAddress, date)
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsDepositByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  date: Date
): Promise<Array<DepositByVAnchorDayIntervalItem>> => {
  const result = await sdk.GetVAnchorsDepositEveryDay(
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
  date: Date
): Promise<Array<Array<DepositByVAnchorDayIntervalItem>>> => {
  const promises: Array<Promise<Array<DepositByVAnchorDayIntervalItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsDepositByChainDayInterval(subgraphUrl, vanchorAddresses, date)
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorDepositByChainAndByTokenDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  date: Date
): Promise<Array<DepositByChainAndByTokenDayIntervalItem>> => {
  const result = await sdk.GetVanchorDepositByTokenEveryDays(
    {
      date: DateUtil.fromDateToEpoch(date),
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      tokenSymbol: tokenSymbol,
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorDepositByTokenEveryDays?.map((item) => {
    return {
      deposit: BigInt(item.deposit),
      tokenSymbol,
      subgraphUrl: subgraphUrl,
      date: DateUtil.fromEpochToDate(parseInt(item?.date)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorDepositByChainsAndByTokenDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  date: Date
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
        date
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsDepositByChainByDateRange = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  dateStart: Date,
  numberOfDays: number
): Promise<DepositVAnchorsDateRangeItem> => {
  const dates = getEpochArray(dateStart, numberOfDays);
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

  if (result?.vanchorDepositEveryDays == null) {
    return {} as DepositVAnchorsDateRangeItem;
  }

  const depositMapByDate: DepositVAnchorsDateRangeItem = {};

  for (const date of dates) {
    depositMapByDate[date.toString()] = BigInt(0);
  }

  result.vanchorDepositEveryDays.forEach((item) => {
    depositMapByDate[+item.date] += BigInt(item.deposit);
  });

  return depositMapByDate;
};

export const GetVAnchorsDepositByChainsByDateRange = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  dateStart: Date,
  numberOfDays: number
): Promise<Array<DepositVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<DepositVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsDepositByChainByDateRange(
        subgraphUrl,
        vanchorAddresses,
        dateStart,
        numberOfDays
      )
    );
  }

  return await Promise.all(promises);
};
