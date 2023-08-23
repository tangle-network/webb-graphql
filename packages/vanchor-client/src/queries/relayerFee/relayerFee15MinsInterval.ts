import { execute, getBuiltGraphSDK } from '../../../.graphclient';
import { DateUtil } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface RelayerFeeByChain15MinsIntervalItem {
  subgraphUrl: SubgraphUrl;
  relayerFee: bigint;
  startInterval: Date;
  endInterval: Date;
  vAnchorAddress: string;
}

export interface RelayerFeeByChainAndByToken15MinsIntervalItem
  extends RelayerFeeByChain15MinsIntervalItem {
  tokenSymbol: string;
}

export interface RelayerFeeByVAnchor15MinsIntervalItem {
  vAnchorAddress: string;
  relayerFee: bigint;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorRelayerFeeByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<RelayerFeeByChain15MinsIntervalItem | null> => {
  const result = await sdk.GetVAnchorRelayerFeeEvery15Mins(
    {
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  if (result.vanchorTotalRelayerFee15Mins?.[0]?.fees === undefined) {
    return null;
  }

  const item = result.vanchorTotalRelayerFee15Mins[0];

  return {
    relayerFee: BigInt(item.fees),
    subgraphUrl: subgraphUrl,
    startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
    endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
    vAnchorAddress: String(item.vAnchorAddress),
  };
};

export const GetVAnchorRelayerFeeByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<RelayerFeeByChain15MinsIntervalItem | null>> => {
  const promises: Array<Promise<RelayerFeeByChain15MinsIntervalItem | null>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorRelayerFeeByChain15MinsInterval(
        subgraphUrl,
        vAnchorAddress,
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsRelayerFeeByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<RelayerFeeByVAnchor15MinsIntervalItem>> => {
  const result = await sdk.GetVAnchorsRelayerFeeEvery15Mins(
    {
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorTotalRelayerFeeByTokenEvery15Mins?.length) {
    return [] as Array<RelayerFeeByVAnchor15MinsIntervalItem>;
  }

  const relayerFeeMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorTotalRelayerFeeByTokenEvery15Mins.map((item) => {
    if (!relayerFeeMap[item.vAnchorAddress]) {
      relayerFeeMap[item?.vAnchorAddress] = BigInt(0);
    }

    relayerFeeMap[item.vAnchorAddress] += BigInt(item.fees);
  });

  const relayerFeeByVAnchorHistoryItems: Array<RelayerFeeByVAnchor15MinsIntervalItem> =
    [];

  for (const key in relayerFeeMap) {
    relayerFeeByVAnchorHistoryItems.push({
      vAnchorAddress: key,
      relayerFee: relayerFeeMap[key],
    });
  }

  return relayerFeeByVAnchorHistoryItems;
};

export const GetVAnchorsRelayerFeeByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<RelayerFeeByVAnchor15MinsIntervalItem>>> => {
  const promises: Array<Promise<Array<RelayerFeeByVAnchor15MinsIntervalItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsRelayerFeeByChain15MinsInterval(
        subgraphUrl,
        vanchorAddresses,
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorRelayerFeeByChainAndByToken15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<RelayerFeeByChainAndByToken15MinsIntervalItem>> => {
  const result = await sdk.GetVAnchorRelayerFeeByTokenEvery15Mins(
    {
      endInterval: DateUtil.fromDateToEpoch(endInterval),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      tokenSymbol: tokenSymbol,
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorTotalRelayerFeeByTokenEvery15Mins?.length) {
    return [] as Array<RelayerFeeByChainAndByToken15MinsIntervalItem>;
  }

  return result.vanchorTotalRelayerFeeByTokenEvery15Mins.map((item) => {
    return {
      relayerFee: BigInt(item.fees),
      tokenSymbol,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      vAnchorAddress: item.vAnchorAddress,
    };
  });
};

export const GetVAnchorRelayerFeeByChainsAndByToken15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<RelayerFeeByChainAndByToken15MinsIntervalItem>>> => {
  const promises: Array<
    Promise<Array<RelayerFeeByChainAndByToken15MinsIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorRelayerFeeByChainAndByToken15MinsInterval(
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
