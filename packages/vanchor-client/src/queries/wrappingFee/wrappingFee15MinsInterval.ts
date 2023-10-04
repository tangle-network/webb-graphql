import { getBuiltGraphSDK } from '../../../.graphclient';
import { DateUtil } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface WrappingFeeByChain15MinsIntervalItem {
  subgraphUrl: SubgraphUrl;
  wrappingFee: bigint | null;
  startInterval: Date;
  endInterval: Date;
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

export const GetVAnchorWrappingFeeByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<WrappingFeeByChain15MinsIntervalItem>> => {
  const result = await sdk.GetVAnchorWrappingFeeEvery15Mins(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorWrappingFeeEvery15Mins?.length) {
    return [] as Array<WrappingFeeByChain15MinsIntervalItem>;
  }

  return result.vanchorWrappingFeeEvery15Mins.map((item) => {
    return {
      wrappingFee: BigInt(item.fees),
      subgraphUrl: subgraphUrl,
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
    };
  });
};

export const GetVAnchorWrappingFeeByChains15MinsInterval = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<WrappingFeeByChain15MinsIntervalItem>>> => {
  const promises: Array<Promise<Array<WrappingFeeByChain15MinsIntervalItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWrappingFeeByChain15MinsInterval(
        subgraphUrl,
        vAnchorAddress,
        startInterval,
        endInterval
      )
    );
  }

  return Promise.all(promises);
};

export const GetVAnchorsWrappingFeeByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<WrappingFeeByVAnchor15MinsIntervalItem>> => {
  const result = await sdk.GetVAnchorsWrappingFeeEvery15Mins(
    {
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorWrappingFeeEvery15Mins?.length) {
    return [] as Array<WrappingFeeByVAnchor15MinsIntervalItem>;
  }

  const wrappingFeeMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorWrappingFeeEvery15Mins.map((item) => {
    if (!wrappingFeeMap[item.vAnchorAddress]) {
      wrappingFeeMap[item.vAnchorAddress] = BigInt(0);
    }

    wrappingFeeMap[item.vAnchorAddress] += BigInt(item.fees);
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

export const GetVAnchorsWrappingFeeByChains15MinsInterval = (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<WrappingFeeByVAnchor15MinsIntervalItem>>> => {
  const promises: Array<
    Promise<Array<WrappingFeeByVAnchor15MinsIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsWrappingFeeByChain15MinsInterval(
        subgraphUrl,
        vanchorAddresses,
        startInterval,
        endInterval
      )
    );
  }

  return Promise.all(promises);
};

export const GetVAnchorWrappingFeeByChainAndByToken15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<WrappingFeeByChainAndByToken15MinsIntervalItem>> => {
  const result = await sdk.GetVAnchorWrappingFeeByTokenEvery15Mins(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      tokenSymbol: tokenSymbol,
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorWrappingFeeByTokenEvery15Mins.map((item) => {
    return {
      wrappingFee: BigInt(item.fees),
      subgraphUrl: subgraphUrl,
      tokenSymbol,
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      vAnchorAddress: item.vAnchorAddress,
    };
  });
};

export const GetVAnchorWrappingFeeByChainsAndByToken15MinsInterval = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
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
        startInterval,
        endInterval
      )
    );
  }

  return Promise.all(promises);
};
