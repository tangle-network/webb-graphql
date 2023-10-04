import { getBuiltGraphSDK } from '../../../.graphclient';
import { DateUtil } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface TWLByChain15MinsIntervalItem {
  subgraphUrl: SubgraphUrl;
  total: bigint | null;
  startInterval: Date;
  endInterval: Date;
}

export interface TWLByChainAndByToken15MinsIntervalItem
  extends TWLByChain15MinsIntervalItem {
  tokenSymbol: string;
}

export interface TWLByVAnchor15MinsIntervalItem {
  vAnchorAddress: string;
  total: bigint;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorTWLByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<TWLByChain15MinsIntervalItem>> => {
  const result = await sdk.GetVAnchorTWLEvery15Mins(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorTWLEvery15Mins?.length) {
    return [] as Array<TWLByChain15MinsIntervalItem>;
  }

  return result.vanchorTWLEvery15Mins.map((item) => {
    return {
      total: BigInt(item.total),
      subgraphUrl: subgraphUrl,
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
    };
  });
};

export const GetVAnchorTWLByChains15MinsInterval = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<TWLByChain15MinsIntervalItem>>> => {
  const promises: Array<Promise<Array<TWLByChain15MinsIntervalItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTWLByChain15MinsInterval(
        subgraphUrl,
        vAnchorAddress,
        startInterval,
        endInterval
      )
    );
  }

  return Promise.all(promises);
};

export const GetVAnchorsTWLByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<TWLByVAnchor15MinsIntervalItem>> => {
  const result = await sdk.GetVAnchorsTWLEvery15Mins(
    {
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorTWLEvery15Mins?.length) {
    return [] as Array<TWLByVAnchor15MinsIntervalItem>;
  }
  const totalMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorTWLEvery15Mins.map((item: any) => {
    if (!totalMap[item?.vAnchorAddress]) {
      totalMap[item?.vAnchorAddress] = BigInt(0);
    }

    totalMap[item.vAnchorAddress] += BigInt(item.total);
  });

  const TWLByVAnchor15MinsIntervalItems: Array<TWLByVAnchor15MinsIntervalItem> =
    [];

  for (const key in totalMap) {
    TWLByVAnchor15MinsIntervalItems.push({
      vAnchorAddress: key,
      total: totalMap[key],
    });
  }

  return TWLByVAnchor15MinsIntervalItems;
};

export const GetVAnchorsTWLByChains15MinsInterval = (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<TWLByVAnchor15MinsIntervalItem>>> => {
  const promises: Array<Promise<Array<TWLByVAnchor15MinsIntervalItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsTWLByChain15MinsInterval(
        subgraphUrl,
        vanchorAddresses,
        startInterval,
        endInterval
      )
    );
  }

  return Promise.all(promises);
};

export const GetVAnchorTWLByChainAndByToken15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<TWLByChainAndByToken15MinsIntervalItem>> => {
  const result = await sdk.GetVAnchorTWLByTokenEvery15Mins(
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

  if (!result.vanchorTWLByTokenEvery15Mins?.length) {
    return [] as Array<TWLByChainAndByToken15MinsIntervalItem>;
  }

  return result.vanchorTWLByTokenEvery15Mins.map((item) => {
    return {
      total: BigInt(item.total),
      subgraphUrl: subgraphUrl,
      tokenSymbol,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorTWLByChainsAndByToken15MinsInterval = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<TWLByChainAndByToken15MinsIntervalItem>>> => {
  const promises: Array<
    Promise<Array<TWLByChainAndByToken15MinsIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTWLByChainAndByToken15MinsInterval(
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
