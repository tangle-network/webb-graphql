import { getBuiltGraphSDK } from '../../../.graphclient';
import { DateUtil } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface TotalValueLockedByChain15MinsIntervalItem {
  subgraphUrl: SubgraphUrl;
  totalValueLocked: bigint | null;
  startInterval: Date;
  endInterval: Date;
  vAnchorAddress: string;
}

export interface TotalValueLockedByChainAndByToken15MinsIntervalItem
  extends TotalValueLockedByChain15MinsIntervalItem {
  tokenSymbol: string;
}

export interface TotalValueLockedByVAnchor15MinsIntervalItem {
  vAnchorAddress: string;
  totalValueLocked: bigint;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorTotalValueLockedByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<TotalValueLockedByChain15MinsIntervalItem | null> => {
  const result = await sdk.GetVAnchorTotalValueLockedEvery15Mins(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      startTimestamp: DateUtil.fromDateToEpoch(startTimestamp),
      endTimestamp: DateUtil.fromDateToEpoch(endTimestamp),
    },
    {
      subgraphUrl,
    }
  );

  if (
    result.vanchorTotalValueLockedEvery15Mins?.[0]?.totalValueLocked ===
    undefined
  ) {
    return null;
  }

  const item = result.vanchorTotalValueLockedEvery15Mins[0];

  return {
    totalValueLocked: BigInt(item.totalValueLocked),
    subgraphUrl: subgraphUrl,
    startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
    endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
    vAnchorAddress: String(item.vAnchorAddress),
  };
};

export const GetVAnchorTotalValueLockedByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<TotalValueLockedByChain15MinsIntervalItem | null>> => {
  const promises: Array<
    Promise<TotalValueLockedByChain15MinsIntervalItem | null>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalValueLockedByChain15MinsInterval(
        subgraphUrl,
        vAnchorAddress,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsTotalValueLockedByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<TotalValueLockedByVAnchor15MinsIntervalItem>> => {
  const result = await sdk.GetVAnchorsTotalValueLockedEvery15Mins(
    {
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
      startTimestamp: DateUtil.fromDateToEpoch(startTimestamp),
      endTimestamp: DateUtil.fromDateToEpoch(endTimestamp),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorTotalValueLockedEvery15Mins?.length) {
    return [] as Array<TotalValueLockedByVAnchor15MinsIntervalItem>;
  }
  const totalValueLockedMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorTotalValueLockedEvery15Mins.map((item: any) => {
    if (!totalValueLockedMap[item?.vAnchorAddress]) {
      totalValueLockedMap[item?.vAnchorAddress] = BigInt(0);
    }

    totalValueLockedMap[item.vAnchorAddress] += BigInt(item.totalValueLocked);
  });

  const TotalValueLockedByVAnchor15MinsIntervalItems: Array<TotalValueLockedByVAnchor15MinsIntervalItem> =
    [];

  for (const key in totalValueLockedMap) {
    TotalValueLockedByVAnchor15MinsIntervalItems.push({
      vAnchorAddress: key,
      totalValueLocked: totalValueLockedMap[key],
    });
  }

  return TotalValueLockedByVAnchor15MinsIntervalItems;
};

export const GetVAnchorsTotalValueLockedByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<TotalValueLockedByVAnchor15MinsIntervalItem>>> => {
  const promises: Array<
    Promise<Array<TotalValueLockedByVAnchor15MinsIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsTotalValueLockedByChain15MinsInterval(
        subgraphUrl,
        vanchorAddresses,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorTotalValueLockedByChainAndByToken15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<TotalValueLockedByChainAndByToken15MinsIntervalItem>> => {
  const result = await sdk.GetVAnchorTotalValueLockedByTokenEvery15Mins(
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

  if (!result.vanchorTotalValueLockedByTokenEvery15Mins?.length) {
    return [] as Array<TotalValueLockedByChainAndByToken15MinsIntervalItem>;
  }

  return result.vanchorTotalValueLockedByTokenEvery15Mins.map((item) => {
    return {
      totalValueLocked: BigInt(item.totalValueLocked),
      subgraphUrl: subgraphUrl,
      tokenSymbol,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorTotalValueLockedByChainsAndByToken15MinsInterval =
  async (
    subgraphUrls: Array<SubgraphUrl>,
    vAnchorAddress: string,
    tokenSymbol: string,
    startTimestamp: Date,
    endTimestamp: Date
  ): Promise<
    Array<Array<TotalValueLockedByChainAndByToken15MinsIntervalItem>>
  > => {
    const promises: Array<
      Promise<Array<TotalValueLockedByChainAndByToken15MinsIntervalItem>>
    > = [];

    for (const subgraphUrl of subgraphUrls) {
      promises.push(
        GetVAnchorTotalValueLockedByChainAndByToken15MinsInterval(
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
