import { getBuiltGraphSDK } from '../../../.graphclient';
import { DateUtil } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface RelayerFeeByChain15MinsIntervalItem {
  totalFees: bigint;
  profit: bigint;
  txFees: bigint;
  subgraphUrl: SubgraphUrl;
  startInterval: Date;
  endInterval: Date;
}

export interface RelayerFeeByChainAndByToken15MinsIntervalItem
  extends RelayerFeeByChain15MinsIntervalItem {
  tokenSymbol: string;
}

export interface RelayerFeeByVAnchor15MinsIntervalItem {
  vAnchorAddress: string;
  totalFees: bigint;
  profit: bigint;
  txFees: bigint;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorRelayerFeeByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<RelayerFeeByChain15MinsIntervalItem>> => {
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

  if (!result.vanchorRelayerFeeEvery15Mins?.length) {
    return [] as Array<RelayerFeeByChain15MinsIntervalItem>;
  }

  return result.vanchorRelayerFeeEvery15Mins.map((item) => {
    return {
      totalFees: BigInt(item.totalFees),
      profit: BigInt(item.profit),
      txFees: BigInt(item.txFees),
      subgraphUrl: subgraphUrl,
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
    };
  });
};

export const GetVAnchorRelayerFeeByChains15MinsInterval = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<RelayerFeeByChain15MinsIntervalItem>>> => {
  const promises: Array<Promise<Array<RelayerFeeByChain15MinsIntervalItem>>> =
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

  return Promise.all(promises);
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

  if (!result.vanchorRelayerFeeByTokenEvery15Mins?.length) {
    return [] as Array<RelayerFeeByVAnchor15MinsIntervalItem>;
  }

  const totalFeesMap: { [vanchorAddress: string]: bigint } = {};
  const profitMap: { [vanchorAddress: string]: bigint } = {};
  const txFeesMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorRelayerFeeByTokenEvery15Mins.map((item) => {
    if (!totalFeesMap[item.vAnchorAddress]) {
      totalFeesMap[item?.vAnchorAddress] = BigInt(0);
      profitMap[item?.vAnchorAddress] = BigInt(0);
      txFeesMap[item?.vAnchorAddress] = BigInt(0);
    }

    totalFeesMap[item.vAnchorAddress] += BigInt(item.totalFees);
    profitMap[item.vAnchorAddress] += BigInt(item.profit);
    txFeesMap[item.vAnchorAddress] += BigInt(item.txFees);
  });

  const totalFeesByVAnchorHistoryItems: Array<RelayerFeeByVAnchor15MinsIntervalItem> =
    [];

  for (const key in totalFeesMap) {
    totalFeesByVAnchorHistoryItems.push({
      vAnchorAddress: key,
      totalFees: totalFeesMap[key],
      profit: profitMap[key],
      txFees: txFeesMap[key],
    });
  }

  return totalFeesByVAnchorHistoryItems;
};

export const GetVAnchorsRelayerFeeByChains15MinsInterval = (
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

  return Promise.all(promises);
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

  if (!result.vanchorRelayerFeeByTokenEvery15Mins?.length) {
    return [] as Array<RelayerFeeByChainAndByToken15MinsIntervalItem>;
  }

  return result.vanchorRelayerFeeByTokenEvery15Mins.map((item) => {
    return {
      totalFees: BigInt(item.totalFees),
      profit: BigInt(item.profit),
      txFees: BigInt(item.txFees),
      tokenSymbol,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      vAnchorAddress: item.vAnchorAddress,
    };
  });
};

export const GetVAnchorRelayerFeeByChainsAndByToken15MinsInterval = (
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

  return Promise.all(promises);
};
