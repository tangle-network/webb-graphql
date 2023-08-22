import { DateUtil } from '../../utils/date';
import { SubgraphUrl } from '../../config';
import { getBuiltGraphSDK } from '../../../.graphclient';

export interface WrappingFeeByChain15MinsIntervalItem {
  subgraphUrl: SubgraphUrl;
  wrappingFee: bigint | null;
  startInterval: Date;
  endInterval: Date;
  vAnchorAddress: string;
}

export interface WrappingFeeByChainAndByToken15MinsIntervalItem
  extends WrappingFeeByChain15MinsIntervalItem {
  tokenSymbol: string;
}

export interface WrappingFeeByVAnchor15MinsIntervalItem {
  vAnchorAddress: string;
  wrappingFee: bigint | null;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorWrappingFeeByChainHistory = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<WrappingFeeByChainHistoryItem> => {
  const result = await sdk.GetVAnchorWrappingFeeEvery15Mins(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      startTimestamp: DateUtil.fromDateToEpoch(startTimestamp),
      endTimestamp: DateUtil.fromDateToEpoch(endTimestamp),
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorTotalWrappingFeeByTokenEvery15Mins.map((item) => {
    return {
      wrappingFee: item.fees,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      vAnchorAddress: item.vAnchorAddress,
    };
  })?.[0];
};

export const GetVAnchorWrappingFeeByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<WrappingFeeByChain15MinsIntervalItem>>> => {
  const promises: Array<Promise<Array<WrappingFeeByChain15MinsIntervalItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWrappingFeeByChain15MinsInterval(
        subgraphUrl,
        vAnchorAddress,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsWrappingFeeByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<WrappingFeeByVAnchorHistoryItem>> => {
  const result = await sdk.GetVAnchorsWrappingFeeEvery15Mins(
    {
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
      startTimestamp: DateUtil.fromDateToEpoch(startTimestamp),
      endTimestamp: DateUtil.fromDateToEpoch(endTimestamp),
    },
    {
      subgraphUrl,
    }
  );

  const wrappingFeeMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorTotalWrappingFeeByTokenEvery15Mins.map((item) => {
    if (!wrappingFeeMap[item.vAnchorAddress]) {
      wrappingFeeMap[item.vAnchorAddress] = BigInt(0);
    }

    wrappingFeeMap[item.vAnchorAddress] += item.fees;
  });

  const wrappingFeeByVAnchor15MinsIntervalItems: Array<WrappingFeeByVAnchor15MinsIntervalItem> =
    [];

  for (const key in wrappingFeeMap) {
    wrappingFeeByVAnchor15MinsIntervalItems.push({
      vAnchorAddress: key,
      wrappingFee: wrappingFeeMap[key],
    });
  }

  return wrappingFeeByVAnchor15MinsIntervalItems;
};

export const GetVAnchorsWrappingFeeByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<WrappingFeeByVAnchor15MinsIntervalItem>>> => {
  const promises: Array<
    Promise<Array<WrappingFeeByVAnchor15MinsIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsWrappingFeeByChain15MinsInterval(
        subgraphUrl,
        vanchorAddresses,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorWrappingFeeByChainAndByToken15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<WrappingFeeByChainAndByTokenHistoryItem>> => {
  const result = await sdk.GetVAnchorWrappingFeeByTokenEvery15Mins(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      tokenSymbol: tokenSymbol,
      startTimestamp: DateUtil.fromDateToEpoch(startTimestamp),
      endTimestamp: DateUtil.fromDateToEpoch(endTimestamp),
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorTotalWrappingFeeByTokenEvery15Mins.map((item) => {
    return {
      wrappingFee: item.fees,
      subgraphUrl: subgraphUrl,
      tokenSymbol,
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      vAnchorAddress: item.vAnchorAddress,
    };
  });
};

export const GetVAnchorWrappingFeeByChainsAndByToken15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<WrappingFeeByChainAndByToken15MinsIntervalItem>>> => {
  const promises: Array<
    Promise<Array<WrappingFeeByChainAndByToken15MinsIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWrappingFeeByChainAndByToken15MinsInterval(
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
