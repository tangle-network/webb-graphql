import { getBuiltGraphSDK } from '../../.graphclient';
import { SubgraphUrl } from '../config';
import { DateUtil } from '../utils/date';

export interface RelayerFeeByChainHistoryItem {
  subgraphUrl: SubgraphUrl;
  relayerFee: bigint;
  startInterval: Date;
  endInterval: Date;
  vAnchorAddress: string;
}

export interface RelayerFeeByChainAndByTokenHistoryItem
  extends RelayerFeeByChainHistoryItem {
  tokenSymbol: string;
}

export interface RelayerFeeByVAnchorHistoryItem {
  vAnchorAddress: string;
  relayerFee: bigint;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorRelayerFeeByChainHistory = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<RelayerFeeByChainHistoryItem> => {
  const result = await sdk.GetVAnchorRelayerFeeEvery15Mins(
    {
      endTimestamp: DateUtil.fromDateToEpoch(endTimestamp),
      startTimestamp: DateUtil.fromDateToEpoch(startTimestamp),
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorTotalRelayerFee15Mins.map((item) => {
    return {
      relayerFee: item.fees,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      vAnchorAddress: item.vAnchorAddress,
    };
  })?.[0];
};

export const GetVAnchorRelayerFeeByChainsHistory = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<RelayerFeeByChainHistoryItem>> => {
  const promises: Array<Promise<RelayerFeeByChainHistoryItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorRelayerFeeByChainHistory(
        subgraphUrl,
        vAnchorAddress,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsRelayerFeeByChainHistory = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<RelayerFeeByVAnchorHistoryItem>> => {
  const result = await sdk.GetVAnchorsRelayerFeeEvery15Mins(
    {
      endTimestamp: DateUtil.fromDateToEpoch(endTimestamp),
      startTimestamp: DateUtil.fromDateToEpoch(startTimestamp),
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
    },
    {
      subgraphUrl,
    }
  );

  const relayerFeeMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorTotalRelayerFeeByTokenEvery15Mins.map((item) => {
    if (!relayerFeeMap[item.vAnchorAddress]) {
      relayerFeeMap[item?.vAnchorAddress] = BigInt(0);
    }

    relayerFeeMap[item.vAnchorAddress] += BigInt(item.fees);
  });

  const relayerFeeByVAnchorHistoryItems: Array<RelayerFeeByVAnchorHistoryItem> =
    [];

  for (const key in relayerFeeMap) {
    relayerFeeByVAnchorHistoryItems.push({
      vAnchorAddress: key,
      relayerFee: relayerFeeMap[key],
    });
  }

  return relayerFeeByVAnchorHistoryItems;
};

export const GetVAnchorsRelayerFeeByChainsHistory = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<RelayerFeeByVAnchorHistoryItem>>> => {
  const promises: Array<Promise<Array<RelayerFeeByVAnchorHistoryItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsRelayerFeeByChainHistory(
        subgraphUrl,
        vanchorAddresses,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorRelayerFeeByChainAndByTokenHistory = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<RelayerFeeByChainAndByTokenHistoryItem>> => {
  const result = await sdk.GetVAnchorRelayerFeeByTokenEvery15Mins(
    {
      endTimestamp: DateUtil.fromDateToEpoch(endTimestamp),
      startTimestamp: DateUtil.fromDateToEpoch(startTimestamp),
      tokenSymbol: tokenSymbol,
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

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

export const GetVAnchorRelayerFeeByChainsAndByTokenHistory = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<RelayerFeeByChainAndByTokenHistoryItem>>> => {
  const promises: Array<
    Promise<Array<RelayerFeeByChainAndByTokenHistoryItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorRelayerFeeByChainAndByTokenHistory(
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
