import { getBuiltGraphSDK } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';
import { DateUtil } from '../../utils/date';

export interface VolumeByChain15MinsIntervalItem {
  subgraphUrl: SubgraphUrl;
  volume: bigint;
  startInterval: Date;
  endInterval: Date;
  vAnchorAddress: string;
}

export interface VolumeByChainAndByToken15MinsIntervalItem
  extends VolumeByChain15MinsIntervalItem {
  tokenSymbol: string;
}

export interface VolumeByVAnchor15MinsIntervalItem {
  vAnchorAddress: string;
  volume: bigint;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorVolumeByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<VolumeByChain15MinsIntervalItem | null> => {
  const result = await sdk.GetVAnchorVolumeEvery15Mins(
    {
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  if (result.vanchorVolumeEvery15Mins?.[0]?.volume === undefined) {
    return null;
  }

  const item = result.vanchorVolumeEvery15Mins[0];

  return {
    volume: BigInt(item.volume),
    subgraphUrl: subgraphUrl,
    startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
    endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
    vAnchorAddress: String(item.vAnchorAddress),
  };
};

export const GetVAnchorVolumeByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<VolumeByChain15MinsIntervalItem | null>> => {
  const promises: Array<Promise<VolumeByChain15MinsIntervalItem | null>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorVolumeByChain15MinsInterval(
        subgraphUrl,
        vAnchorAddress,
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsVolumeByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<VolumeByVAnchor15MinsIntervalItem>> => {
  const result = await sdk.GetVAnchorsVolumeEvery15Mins(
    {
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorVolumeEvery15Mins?.length) {
    return [] as Array<VolumeByVAnchor15MinsIntervalItem>;
  }

  const volumeMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorVolumeEvery15Mins.map((item) => {
    const vAnchorAddr = String(item.vAnchorAddress);

    if (!volumeMap[vAnchorAddr]) {
      volumeMap[vAnchorAddr] = BigInt(0);
    }

    volumeMap[vAnchorAddr] += BigInt(item.volume);
  });

  const volumeByVAnchor15MinsIntervalItems: Array<VolumeByVAnchor15MinsIntervalItem> =
    [];

  for (const key in volumeMap) {
    volumeByVAnchor15MinsIntervalItems.push({
      vAnchorAddress: key,
      volume: volumeMap[key],
    });
  }

  return volumeByVAnchor15MinsIntervalItems;
};

export const GetVAnchorsVolumeByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<VolumeByVAnchor15MinsIntervalItem>>> => {
  const promises: Array<Promise<Array<VolumeByVAnchor15MinsIntervalItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsVolumeByChain15MinsInterval(
        subgraphUrl,
        vanchorAddresses,
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorVolumeByChainAndByToken15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<VolumeByChainAndByToken15MinsIntervalItem>> => {
  const result = await sdk.GetVAnchorVolumeByTokenEvery15Mins(
    {
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      tokenSymbol,
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorVolumeByTokenEvery15Mins?.length) {
    return [] as Array<VolumeByChainAndByToken15MinsIntervalItem>;
  }

  return result.vanchorVolumeByTokenEvery15Mins.map((item) => {
    return {
      volume: BigInt(item.volume),
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
      subgraphUrl: subgraphUrl,
      tokenSymbol,
      vAnchorAddress: String(item.vAnchorAddress),
    };
  });
};

export const GetVAnchorVolumeByChainsAndByToken15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<VolumeByChainAndByToken15MinsIntervalItem>>> => {
  const promises: Array<
    Promise<Array<VolumeByChainAndByToken15MinsIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorVolumeByChainAndByToken15MinsInterval(
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
