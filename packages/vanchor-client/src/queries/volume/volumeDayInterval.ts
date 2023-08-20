import { execute } from '../../../.graphclient';
import { DateUtil, getEpochArray } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface VolumeByChainDayIntervalItem {
  subgraphUrl: SubgraphUrl;
  volume: number;
  date: Date;
  vAnchorAddress: string;
}

export interface VolumeByChainAndByTokenDayIntervalItem
  extends VolumeByChainDayIntervalItem {
  tokenSymbol: string;
}

export interface VolumeByVAnchorDayIntervalItem {
  vAnchorAddress: string;
  volume: number;
}

export interface VolumeVAnchorsDateRangeItem {
  [epoch: string]: number;
}

export const GetVAnchorVolumeByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  date: Date
): Promise<Array<VolumeByChainDayIntervalItem>> => {
  const query = /* GraphQL */ `
    query Volume {
      vanchorVolumeEveryDays(
        where: {
          date: "${DateUtil.fromDateToEpoch(date)}",
          vAnchorAddress: "${vAnchorAddress.toLowerCase()}"
        }
      ) {
        volume
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

  if (result?.data?.vanchorVolumeEveryDays == null) {
    return [] as Array<VolumeByChainDayIntervalItem>;
  }

  return result.data.vanchorVolumeEveryDays?.map((item: any) => {
    return {
      volume: +item?.volume,
      subgraphUrl: subgraphUrl,
      date: DateUtil.fromEpochToDate(parseInt(item?.date)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorVolumeByChainsDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  date: Date
): Promise<Array<Array<VolumeByChainDayIntervalItem>>> => {
  const promises: Array<Promise<Array<VolumeByChainDayIntervalItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorVolumeByChainDayInterval(subgraphUrl, vAnchorAddress, date)
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsVolumeByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  date: Date
): Promise<Array<VolumeByVAnchorDayIntervalItem>> => {
  const query = /* GraphQL */ `
    query VolumeByVAnchor {
      vanchorVolumeEveryDays(
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
        volume
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

  if (result?.data?.vanchorVolumeEveryDays == null) {
    return [] as Array<VolumeByVAnchorDayIntervalItem>;
  }

  const volumeMap: { [vanchorAddress: string]: number } = {};

  result.data.vanchorVolumeEveryDays?.map((item: any) => {
    if (!volumeMap[item?.vAnchorAddress]) {
      volumeMap[item?.vAnchorAddress] = 0;
    }

    volumeMap[item?.vAnchorAddress] += +item?.volume;
  });

  const VolumeByVAnchorDayIntervalItems: Array<VolumeByVAnchorDayIntervalItem> =
    [];

  for (const key in volumeMap) {
    VolumeByVAnchorDayIntervalItems.push({
      vAnchorAddress: key,
      volume: volumeMap[key],
    });
  }

  return VolumeByVAnchorDayIntervalItems;
};

export const GetVAnchorsVolumeByChainsDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  date: Date
): Promise<Array<Array<VolumeByVAnchorDayIntervalItem>>> => {
  const promises: Array<Promise<Array<VolumeByVAnchorDayIntervalItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsVolumeByChainDayInterval(subgraphUrl, vanchorAddresses, date)
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorVolumeByChainAndByTokenDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  date: Date
): Promise<Array<VolumeByChainAndByTokenDayIntervalItem>> => {
  const query = /* GraphQL */ `
    query MyQuery {
      vanchorVolumeByTokenEveryDays(
        where: {
          tokenSymbol: "${tokenSymbol}",
          vAnchorAddress: "${vAnchorAddress.toLowerCase()}",
          date: "${DateUtil.fromDateToEpoch(date)}",
        }
      ) {
        volume
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

  if (result?.data?.vanchorVolumeByTokenEveryDays == null) {
    return [] as Array<VolumeByChainAndByTokenDayIntervalItem>;
  }

  return result.data.vanchorVolumeByTokenEveryDays?.map((item: any) => {
    return {
      volume: +item?.volume,
      subgraphUrl: subgraphUrl,
      date: DateUtil.fromEpochToDate(parseInt(item?.date)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorVolumeByChainsAndByTokenDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  date: Date
): Promise<Array<Array<VolumeByChainAndByTokenDayIntervalItem>>> => {
  const promises: Array<
    Promise<Array<VolumeByChainAndByTokenDayIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorVolumeByChainAndByTokenDayInterval(
        subgraphUrl,
        vAnchorAddress,
        tokenSymbol,
        date
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsVolumeByChainByDateRange = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  dateStart: Date,
  numberOfDays: number
): Promise<VolumeVAnchorsDateRangeItem> => {
  const dates = getEpochArray(dateStart, numberOfDays);
  const query = /* GraphQL */ `
    query Volume {
      vanchorVolumeEveryDays(
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
        volume
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

  if (result?.data?.vanchorVolumeEveryDays == null) {
    return {} as VolumeVAnchorsDateRangeItem;
  }

  const tvlMapByDate: VolumeVAnchorsDateRangeItem = {};

  for (const date of dates) {
    tvlMapByDate[date.toString()] = 0;
  }

  result.data.vanchorVolumeEveryDays.forEach((item: any) => {
    tvlMapByDate[+item.date] += +item.volume;
  });

  return tvlMapByDate;
};

export const GetVAnchorsVolumeByChainsByDateRange = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  dateStart: Date,
  numberOfDays: number
): Promise<Array<VolumeVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<VolumeVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsVolumeByChainByDateRange(
        subgraphUrl,
        vanchorAddresses,
        dateStart,
        numberOfDays
      )
    );
  }

  return await Promise.all(promises);
};
