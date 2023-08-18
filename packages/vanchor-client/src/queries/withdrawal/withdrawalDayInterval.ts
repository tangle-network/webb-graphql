import { execute } from '../../../.graphclient';
import { DateUtil, getEpochArray } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface WithdrawalByChainDayIntervalItem {
  subgraphUrl: SubgraphUrl;
  withdrawal: number;
  date: Date;
  vAnchorAddress: string;
}

export interface WithdrawalByChainAndByTokenDayIntervalItem
  extends WithdrawalByChainDayIntervalItem {
  tokenSymbol: string;
}

export interface WithdrawalByVAnchorDayIntervalItem {
  vAnchorAddress: string;
  withdrawal: number;
}

export interface WithdrawalVAnchorsDateRangeItem {
  [epoch: string]: number;
}

export const GetVAnchorWithdrawalByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  date: Date
): Promise<WithdrawalByChainDayIntervalItem> => {
  const query = /* GraphQL */ `
    query TotalValueLocked {
      vanchorWithdrawalEveryDays(
        where: {
          date: "${DateUtil.fromDateToEpoch(date)}",
          vAnchorAddress: "${vAnchorAddress.toLowerCase()}"
        }
      ) {
        withdrawal
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

  return result.data.vanchorWithdrawalEveryDays?.map((item: any) => {
    return {
      withdrawal: +item?.withdrawal,
      subgraphUrl: subgraphUrl,
      date: DateUtil.fromEpochToDate(parseInt(item?.date)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorWithdrawalByChainsDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  date: Date
): Promise<Array<WithdrawalByChainDayIntervalItem>> => {
  const promises: Array<Promise<WithdrawalByChainDayIntervalItem>> = [];

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
  const query = /* GraphQL */ `
    query TotalValueLockedByVAnchor {
      vanchorWithdrawalEveryDays(
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
        withdrawal
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

  const withdrawalMap: { [vanchorAddress: string]: number } = {};

  result.data.vanchorWithdrawalEveryDays?.map((item: any) => {
    if (!withdrawalMap[item?.vAnchorAddress]) {
      withdrawalMap[item?.vAnchorAddress] = 0;
    }

    withdrawalMap[item?.vAnchorAddress] += +item?.withdrawal;
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
  const query = /* GraphQL */ `
    query MyQuery {
      vanchorWithdrawalByTokenEveryDays(
        where: {
          tokenSymbol: "${tokenSymbol}",
          vAnchorAddress: "${vAnchorAddress.toLowerCase()}",
          date: "${DateUtil.fromDateToEpoch(date)}",
        }
      ) {
        withdrawal
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

  return result.data.vanchorWithdrawalByTokenEveryDays?.map((item: any) => {
    return {
      withdrawal: +item?.withdrawal,
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
  const query = /* GraphQL */ `
    query MyQuery {
      vanchorWithdrawalEveryDays(
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
        withdrawal
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

  const withdrawalMapByDate: WithdrawalVAnchorsDateRangeItem = {};

  for (const date of dates) {
    withdrawalMapByDate[date.toString()] = 0;
  }

  result.data.vanchorWithdrawalEveryDays.forEach((item: any) => {
    withdrawalMapByDate[+item.date] += +item.withdrawal;
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
