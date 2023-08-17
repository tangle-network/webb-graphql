import { execute } from '../../../.graphclient';
import { DateUtil } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface VolumeByChain15MinsIntervalItem {
  subgraphUrl: SubgraphUrl;
  volume: number;
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
  volume: number;
}

export const GetVAnchorVolumeByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<VolumeByChain15MinsIntervalItem> => {
  const query = /* GraphQL */ `
    query Volume {
      vanchorVolumeEvery15Mins(
        where: {
          endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}",
          startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}",
          vAnchorAddress: "${vAnchorAddress.toLowerCase()}"
        }
      ) {
        startInterval
        volume
        vAnchorAddress
        endInterval
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

  return result.data.vanchorVolumeEvery15Mins?.map((item: any) => {
    return {
      volume: +item?.volume,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorVolumeByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<VolumeByChain15MinsIntervalItem>> => {
  const promises: Array<Promise<VolumeByChain15MinsIntervalItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorVolumeByChain15MinsInterval(
        subgraphUrl,
        vAnchorAddress,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsVolumeByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<VolumeByVAnchor15MinsIntervalItem>> => {
  const query = /* GraphQL */ `
    query VolumeByVAnchor {
      vanchorVolumeEvery15Mins(
        where: {
          endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}",
          startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}",
          vAnchorAddress_in: [
            ${vanchorAddresses
              .map((address) => '"' + address.toLowerCase() + '"')
              .join(',')}
          ]
        }
      ) {
        id
        startInterval
        volume
        endInterval
        vAnchorAddress
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

  const volumeMap: { [vanchorAddress: string]: number } = {};

  result.data.vanchorVolumeEvery15Mins?.map((item: any) => {
    if (!volumeMap[item?.vAnchorAddress]) {
      volumeMap[item?.vAnchorAddress] = 0;
    }

    volumeMap[item?.vAnchorAddress] += +item?.volume;
  });

  const VolumeByVAnchor15MinsIntervalItems: Array<VolumeByVAnchor15MinsIntervalItem> =
    [];

  for (const key in volumeMap) {
    VolumeByVAnchor15MinsIntervalItems.push({
      vAnchorAddress: key,
      volume: volumeMap[key],
    });
  }

  return VolumeByVAnchor15MinsIntervalItems;
};

export const GetVAnchorsVolumeByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<VolumeByVAnchor15MinsIntervalItem>>> => {
  const promises: Array<Promise<Array<VolumeByVAnchor15MinsIntervalItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsVolumeByChain15MinsInterval(
        subgraphUrl,
        vanchorAddresses,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorVolumeByChainAndByToken15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<VolumeByChainAndByToken15MinsIntervalItem>> => {
  const query = /* GraphQL */ `
    query MyQuery {
      vanchorVolumeByTokenEvery15Mins(
        where: {
          tokenSymbol: "${tokenSymbol}",
          vAnchorAddress: "${vAnchorAddress.toLowerCase()}",
          endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}",
          startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}"
        }
      ) {
        volume
        startInterval
        endInterval
        vAnchorAddress
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

  return result.data.vanchorVolumeByTokenEvery15Mins?.map((item: any) => {
    return {
      volume: +item?.volume,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorVolumeByChainsAndByToken15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
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
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};
