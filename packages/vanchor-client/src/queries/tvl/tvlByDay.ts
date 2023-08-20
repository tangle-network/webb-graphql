import { execute } from '../../../.graphclient';
import { DateUtil, getEpochArray } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface TotalValueLockedByChainByDayItem {
  subgraphUrl: SubgraphUrl;
  totalValueLocked: number;
  date: Date;
  vAnchorAddress: string;
}

export interface TotalValueLockedByChainAndByTokenByDayItem
  extends TotalValueLockedByChainByDayItem {
  tokenSymbol: string;
}

export interface TotalValueLockedByVAnchorByDayItem {
  vAnchorAddress: string;
  totalValueLocked: number;
}

export interface TVLVAnchorsDateRangeItem {
  [epoch: string]: number;
}

export const GetVAnchorTotalValueLockedByChainByDay = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  date: Date
): Promise<Array<TotalValueLockedByChainByDayItem>> => {
  const query = /* GraphQL */ `
    query TotalValueLocked {
      vanchorTotalValueLockedByDays(
        where: {
          date: "${DateUtil.fromDateToEpoch(date)}",
          vAnchorAddress: "${vAnchorAddress.toLowerCase()}"
        }
      ) {
        totalValueLocked
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

  if (result?.data?.vanchorTotalValueLockedByDays == null) {
    return [] as Array<TotalValueLockedByChainByDayItem>;
  }

  return result.data.vanchorTotalValueLockedByDays?.map((item: any) => {
    return {
      totalValueLocked: +item?.totalValueLocked,
      subgraphUrl: subgraphUrl,
      date: DateUtil.fromEpochToDate(parseInt(item?.date)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorTotalValueLockedByChainsByDay = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  date: Date
): Promise<Array<Array<TotalValueLockedByChainByDayItem>>> => {
  const promises: Array<Promise<Array<TotalValueLockedByChainByDayItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalValueLockedByChainByDay(subgraphUrl, vAnchorAddress, date)
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsTotalValueLockedByChainByDay = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  date: Date
): Promise<Array<TotalValueLockedByVAnchorByDayItem>> => {
  const query = /* GraphQL */ `
    query TotalValueLockedByVAnchor {
      vanchorTotalValueLockedByDays(
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
        totalValueLocked
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

  if (result?.data?.vanchorTotalValueLockedByDays == null) {
    return [] as Array<TotalValueLockedByVAnchorByDayItem>;
  }

  const totalValueLockedMap: { [vanchorAddress: string]: number } = {};

  result.data.vanchorTotalValueLockedByDays?.map((item: any) => {
    if (!totalValueLockedMap[item?.vAnchorAddress]) {
      totalValueLockedMap[item?.vAnchorAddress] = 0;
    }

    totalValueLockedMap[item?.vAnchorAddress] += +item?.totalValueLocked;
  });

  const TotalValueLockedByVAnchorByDayItems: Array<TotalValueLockedByVAnchorByDayItem> =
    [];

  for (const key in totalValueLockedMap) {
    TotalValueLockedByVAnchorByDayItems.push({
      vAnchorAddress: key,
      totalValueLocked: totalValueLockedMap[key],
    });
  }

  return TotalValueLockedByVAnchorByDayItems;
};

export const GetVAnchorsTotalValueLockedByChainsByDay = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  date: Date
): Promise<Array<Array<TotalValueLockedByVAnchorByDayItem>>> => {
  const promises: Array<Promise<Array<TotalValueLockedByVAnchorByDayItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsTotalValueLockedByChainByDay(
        subgraphUrl,
        vanchorAddresses,
        date
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorTotalValueLockedByChainAndByTokenByDay = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  date: Date
): Promise<Array<TotalValueLockedByChainAndByTokenByDayItem>> => {
  const query = /* GraphQL */ `
    query MyQuery {
      vanchorTotalValueLockedByTokenByDays(
        where: {
          tokenSymbol: "${tokenSymbol}",
          vAnchorAddress: "${vAnchorAddress.toLowerCase()}",
          date: "${DateUtil.fromDateToEpoch(date)}",
        }
      ) {
        totalValueLocked
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

  if (result?.data?.vanchorTotalValueLockedByTokenByDays == null) {
    return [] as Array<TotalValueLockedByChainAndByTokenByDayItem>;
  }

  return result.data.vanchorTotalValueLockedByTokenByDays?.map((item: any) => {
    return {
      totalValueLocked: +item?.totalValueLocked,
      subgraphUrl: subgraphUrl,
      date: DateUtil.fromEpochToDate(parseInt(item?.date)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorTotalValueLockedByChainsAndByTokenByDay = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  date: Date
): Promise<Array<Array<TotalValueLockedByChainAndByTokenByDayItem>>> => {
  const promises: Array<
    Promise<Array<TotalValueLockedByChainAndByTokenByDayItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalValueLockedByChainAndByTokenByDay(
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
  const query = /* GraphQL */ `
    query TotalValueLocked {
      vanchorTotalValueLockedByDays(
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
        totalValueLocked
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

  if (result?.data?.vanchorTotalValueLockedByDays == null) {
    return {} as TVLVAnchorsDateRangeItem;
  }

  const tvlMapByDate: TVLVAnchorsDateRangeItem = {};

  for (const date of dates) {
    tvlMapByDate[date.toString()] = 0;
  }

  result.data.vanchorTotalValueLockedByDays.forEach((item: any) => {
    tvlMapByDate[+item.date] += +item.totalValueLocked;
  });

  // if no tvl update in a day, it will be equal to the previous day
  for (let i = 1; i < dates.length; i++) {
    if (tvlMapByDate[dates[i]] === 0) {
      tvlMapByDate[dates[i]] = tvlMapByDate[dates[i - 1]];
    }
  }

  return tvlMapByDate;
};

export const GetVAnchorsTVLByChainsByDateRange = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  dateStart: Date,
  numberOfDays: number
): Promise<Array<TVLVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<TVLVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsTVLByChainByDateRange(
        subgraphUrl,
        vanchorAddresses,
        dateStart,
        numberOfDays
      )
    );
  }

  return await Promise.all(promises);
};
