import { getBuiltGraphSDK } from '../../../.graphclient';
import { DateUtil, getEpochArray } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface VolumeByChainDayIntervalItem {
  subgraphUrl: SubgraphUrl;
  volume: bigint;
  startInterval: Date;
  endInterval: Date;
}

export interface VolumeByChainAndByTokenDayIntervalItem
  extends VolumeByChainDayIntervalItem {
  tokenSymbol: string;
}

export interface VolumeByVAnchorDayIntervalItem {
  vAnchorAddress: string;
  volume: bigint;
}

export interface VolumeVAnchorsDateRangeItem {
  [epoch: string]: bigint;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorVolumeByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<VolumeByChainDayIntervalItem>> => {
  const result = await sdk.GetVAnchorVolumeEveryDays(
    {
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorVolumeEveryDays?.length) {
    return [] as Array<VolumeByChainDayIntervalItem>;
  }

  return result.vanchorVolumeEveryDays.map((item) => {
    return {
      volume: BigInt(item.volume),
      subgraphUrl: subgraphUrl,
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
    };
  });
};

export const GetVAnchorVolumeByChainsDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<VolumeByChainDayIntervalItem>>> => {
  const promises: Array<Promise<Array<VolumeByChainDayIntervalItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorVolumeByChainDayInterval(
        subgraphUrl,
        vAnchorAddress,
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsVolumeByChainDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<VolumeByVAnchorDayIntervalItem>> => {
  const result = await sdk.GetVAnchorsVolumeEveryDays(
    {
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      vAnchorAddresses: vanchorAddresses.map((address) =>
        address.toLowerCase()
      ),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorVolumeEveryDays?.length) {
    return [] as Array<VolumeByVAnchorDayIntervalItem>;
  }

  const volumeMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorVolumeEveryDays?.map((item) => {
    if (!volumeMap[item?.vAnchorAddress]) {
      volumeMap[item?.vAnchorAddress] = BigInt(0);
    }

    volumeMap[item?.vAnchorAddress] += BigInt(item.volume);
  });

  const volumeByVAnchorDayIntervalItems: Array<VolumeByVAnchorDayIntervalItem> =
    [];

  for (const key in volumeMap) {
    volumeByVAnchorDayIntervalItems.push({
      vAnchorAddress: key,
      volume: volumeMap[key],
    });
  }

  return volumeByVAnchorDayIntervalItems;
};

export const GetVAnchorsVolumeByChainsDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<VolumeByVAnchorDayIntervalItem>>> => {
  const promises: Array<Promise<Array<VolumeByVAnchorDayIntervalItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsVolumeByChainDayInterval(
        subgraphUrl,
        vanchorAddresses,
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorVolumeByChainAndByTokenDayInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<VolumeByChainAndByTokenDayIntervalItem>> => {
  const result = await sdk.GetVAnchorVolumeByTokenEveryDays(
    {
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      tokenSymbol: tokenSymbol,
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorVolumeByTokenEveryDays?.length) {
    return [] as Array<VolumeByChainAndByTokenDayIntervalItem>;
  }

  return result.vanchorVolumeByTokenEveryDays?.map((item) => {
    return {
      volume: BigInt(item.volume),
      tokenSymbol,
      subgraphUrl: subgraphUrl,
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorVolumeByChainsAndByTokenDayInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
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
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorVolumeByChainByDateRange = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  epochStart: number,
  numberOfDays: number
): Promise<VolumeVAnchorsDateRangeItem> => {
  const dates = getEpochArray(epochStart, numberOfDays);
  const result = await sdk.GetVanchorVolumeByDateRange(
    {
      dateRange: dates.map((date) => date.toString()),
      vAnchorAddress: vAnchorAddress,
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorVolumeEveryDays?.length) {
    return {} as VolumeVAnchorsDateRangeItem;
  }

  const volumeMapByDate: VolumeVAnchorsDateRangeItem = {};

  for (const date of dates) {
    volumeMapByDate[date.toString()] = BigInt(0);
  }

  result.vanchorVolumeEveryDays.forEach((item) => {
    volumeMapByDate[item.startInterval.toString()] += BigInt(item.volume);
  });

  return volumeMapByDate;
};

export const GetVAnchorVolumeByChainsByDateRange = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddress: string,
  epochStart: number,
  numberOfDays: number
): Promise<Array<VolumeVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<VolumeVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorVolumeByChainByDateRange(
        subgraphUrl,
        vanchorAddress,
        epochStart,
        numberOfDays
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsVolumeByChainByDateRange = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  epochStart: number,
  numberOfDays: number
): Promise<VolumeVAnchorsDateRangeItem> => {
  const dates = getEpochArray(epochStart, numberOfDays);
  const result = await sdk.GetVanchorsVolumeByDateRange(
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

  if (!result.vanchorVolumeEveryDays?.length) {
    return {} as VolumeVAnchorsDateRangeItem;
  }

  const volumeMapByDate: VolumeVAnchorsDateRangeItem = {};

  for (const date of dates) {
    volumeMapByDate[date.toString()] = BigInt(0);
  }

  result.vanchorVolumeEveryDays.forEach((item) => {
    volumeMapByDate[item.startInterval.toString()] += BigInt(item.volume);
  });

  return volumeMapByDate;
};

export const GetVAnchorsVolumeByChainsByDateRange = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  epochStart: number,
  numberOfDays: number
): Promise<Array<VolumeVAnchorsDateRangeItem>> => {
  const promises: Array<Promise<VolumeVAnchorsDateRangeItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsVolumeByChainByDateRange(
        subgraphUrl,
        vanchorAddresses,
        epochStart,
        numberOfDays
      )
    );
  }

  return await Promise.all(promises);
};
