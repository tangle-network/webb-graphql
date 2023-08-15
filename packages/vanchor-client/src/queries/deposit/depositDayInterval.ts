import { execute } from '../../../.graphclient';
import { DateUtil, getEpochArray } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface DepositByChainDayIntervalItem {
  subgraphUrl: SubgraphUrl;
  deposit: number;
  date: Date;
  vAnchorAddress: string;
}

export interface DepositByChainAndByTokenDayIntervalItem
  extends DepositByChainDayIntervalItem {
  tokenSymbol: string;
}

export interface DepositByVAnchorDayIntervalItem {
  vAnchorAddress: string;
  deposit: number;
}

export interface DepositVAnchorsDateRangeItem {
  [epoch: number]: number;
}

export const GetVAnchorDepositByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  date: Date
): Promise<DepositByChainDayIntervalItem> => {
  const query = `
    query TotalValueLocked {
      vanchorDepositEveryDays(
        where: {
          date: "${DateUtil.fromDateToEpoch(date)}",
          vAnchorAddress: "${vAnchorAddress.toLowerCase()}"
        }
      ) {
        deposit
        vAnchorAddress
        date
      }
    }
  `;
  const result = await execute(
    query,
    {},
    {
      subgraphUrl,
    }
  );

  return result.data.vanchorDepositEveryDays?.map((item: any) => {
    return {
      deposit: +item?.deposit,
      subgraphUrl: subgraphUrl,
      date: DateUtil.fromEpochToDate(parseInt(item?.date)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
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
  const query = `
    query TotalValueLockedByVAnchor {
      vanchorDepositEveryDays(
        where: {
          date: "${DateUtil.fromDateToEpoch(date)}",
          vAnchorAddress_in: [
            ${vanchorAddresses
              .map((address) => '"' + address.toLowerCase() + '"')
              .join(',')}
          ]
        }
      ) {
        id
        deposit
        vAnchorAddress
        date
      }
    }
  `;
  const result = await execute(
    query,
    {},
    {
      subgraphUrl,
    }
  );

  const depositMap: { [vanchorAddress: string]: number } = {};

  result.data.vanchorDepositEveryDays?.map((item: any) => {
    if (!depositMap[item?.vAnchorAddress]) {
      depositMap[item?.vAnchorAddress] = 0;
    }

    depositMap[item?.vAnchorAddress] += +item?.deposit;
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
  const query = `
    query MyQuery {
      vanchorDepositByTokenEveryDays(
        where: {
          tokenSymbol: "${tokenSymbol}",
          vAnchorAddress: "${vAnchorAddress.toLowerCase()}",
          date: "${DateUtil.fromDateToEpoch(date)}",
        }
      ) {
        deposit
        vAnchorAddress
        date
      }
    }
  `;
  const result = await execute(
    query,
    {},
    {
      subgraphUrl,
    }
  );

  return result.data.vanchorDepositByTokenEveryDays?.map((item: any) => {
    return {
      deposit: +item?.deposit,
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
  const query = `
    query MyQuery {
      vanchorDepositEveryDays(
        where: {
          date_in: [
            ${dates.map((epochTime) => '"' + epochTime + '"').join(',')}
          ],
          vAnchorAddress_in: [
            ${vanchorAddresses
              .map((address) => '"' + address.toLowerCase() + '"')
              .join(',')}
          ]
        }
        orderBy: date
      ) {
        deposit
        vAnchorAddress
        date
      }
    }
  `;

  const result = await execute(
    query,
    {},
    {
      subgraphUrl,
    }
  );

  const depositMapByDate: { [date: number]: number } = {};

  for (const date of dates) {
    depositMapByDate[date] = 0;
  }

  result.data.vanchorDepositEveryDays.forEach((item: any) => {
    depositMapByDate[+item.date] += +item.deposit;
  });

  return depositMapByDate;
};
