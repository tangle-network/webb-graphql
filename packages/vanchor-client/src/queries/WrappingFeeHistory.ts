import { DateUtil } from '../utils/date';
import { SubgraphUrl } from '../config';
import { getBuiltGraphSDK } from '../../.graphclient';

export interface WrappingFeeByChainHistoryItem {
  subgraphUrl: SubgraphUrl;
  wrappingFee: bigint | null;
  startInterval: Date;
  endInterval: Date;
  vAnchorAddress: string;
}

export interface WrappingFeeByChainAndByTokenHistoryItem
  extends WrappingFeeByChainHistoryItem {
  tokenSymbol: string;
}

export interface WrappingFeeByVAnchorHistoryItem {
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

export const GetVAnchorWrappingFeeByChainsHistory = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<WrappingFeeByChainHistoryItem>> => {
  const promises: Array<Promise<WrappingFeeByChainHistoryItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWrappingFeeByChainHistory(
        subgraphUrl,
        vAnchorAddress,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsWrappingFeeByChainHistory = async (
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

  const wrappingFeeByVAnchorHistoryItems: Array<WrappingFeeByVAnchorHistoryItem> =
    [];

  for (const key in wrappingFeeMap) {
    wrappingFeeByVAnchorHistoryItems.push({
      vAnchorAddress: key,
      wrappingFee: wrappingFeeMap[key],
    });
  }

  return wrappingFeeByVAnchorHistoryItems;
};

export const GetVAnchorsWrappingFeeByChainsHistory = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<WrappingFeeByVAnchorHistoryItem>>> => {
  const promises: Array<Promise<Array<WrappingFeeByVAnchorHistoryItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsWrappingFeeByChainHistory(
        subgraphUrl,
        vanchorAddresses,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorWrappingFeeByChainAndByTokenHistory = async (
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

export const GetVAnchorWrappingFeeByChainsAndByTokenHistory = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<WrappingFeeByChainAndByTokenHistoryItem>>> => {
  const promises: Array<
    Promise<Array<WrappingFeeByChainAndByTokenHistoryItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWrappingFeeByChainAndByTokenHistory(
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
