import { getBuiltGraphSDK } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';
import { DateUtil } from '../../utils/date';

export interface DepositByChain15MinsIntervalItem {
  subgraphUrl: SubgraphUrl;
  deposit: bigint;
  startInterval: Date;
  endInterval: Date;
  vAnchorAddress: string;
}

export interface DepositByChainAndByToken15MinsIntervalItem
  extends DepositByChain15MinsIntervalItem {
  tokenSymbol: string;
}

export interface DepositByVAnchor15MinsIntervalItem {
  vAnchorAddress: string;
  deposit: bigint;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorDepositByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<DepositByChain15MinsIntervalItem> => {
  const result = await sdk.GetVAnchorDepositEvery15Mins(
    {
      startInterval: DateUtil.fromDateToEpoch(startTimestamp),
      endInterval: DateUtil.fromDateToEpoch(endTimestamp),
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorDepositEvery15Mins?.map((item) => {
    return {
      deposit: BigInt(item.deposit),
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      vAnchorAddress: String(item.vAnchorAddress),
    };
  })?.[0];
};

export const GetVAnchorDepositByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<DepositByChain15MinsIntervalItem>> => {
  const promises: Array<Promise<DepositByChain15MinsIntervalItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorDepositByChain15MinsInterval(
        subgraphUrl,
        vAnchorAddress,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsDepositByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<DepositByVAnchor15MinsIntervalItem>> => {
  const result = await sdk.GetVAnchorsDepositEvery15Mins(
    {
      endInterval: DateUtil.fromDateToEpoch(endTimestamp),
      startInterval: DateUtil.fromDateToEpoch(startTimestamp),
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
    },
    {
      subgraphUrl,
    }
  );

  const depositMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorDepositEvery15Mins?.map((item) => {
    const vAnchorAddr = String(item.vAnchorAddress);

    if (!depositMap[vAnchorAddr]) {
      depositMap[vAnchorAddr] = BigInt(0);
    }

    depositMap[vAnchorAddr] += BigInt(item.deposit);
  });

  const depositByVAnchor15MinsIntervalItems: Array<DepositByVAnchor15MinsIntervalItem> =
    [];

  for (const key in depositMap) {
    depositByVAnchor15MinsIntervalItems.push({
      vAnchorAddress: key,
      deposit: depositMap[key],
    });
  }

  return depositByVAnchor15MinsIntervalItems;
};

export const GetVAnchorsDepositByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<DepositByVAnchor15MinsIntervalItem>>> => {
  const promises: Array<Promise<Array<DepositByVAnchor15MinsIntervalItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsDepositByChain15MinsInterval(
        subgraphUrl,
        vanchorAddresses,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorDepositByChainAndByToken15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<DepositByChainAndByToken15MinsIntervalItem>> => {
  const result = await sdk.GetVAnchorDepositByTokenEvery15Mins(
    {
      endInterval: DateUtil.fromDateToEpoch(endTimestamp),
      startInterval: DateUtil.fromDateToEpoch(startTimestamp),
      tokenSymbol,
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorDepositByTokenEvery15Mins.map((item) => {
    return {
      deposit: BigInt(item.deposit),
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
      subgraphUrl: subgraphUrl,
      tokenSymbol,
      vAnchorAddress: String(item.vAnchorAddress),
    };
  });
};

export const GetVAnchorDepositByChainsAndByToken15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<DepositByChainAndByToken15MinsIntervalItem>>> => {
  const promises: Array<
    Promise<Array<DepositByChainAndByToken15MinsIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorDepositByChainAndByToken15MinsInterval(
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
