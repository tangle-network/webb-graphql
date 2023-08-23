import { getBuiltGraphSDK } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';
import { DateUtil } from '../../utils/date';

export interface WithdrawalByChain15MinsIntervalItem {
  subgraphUrl: SubgraphUrl;
  withdrawal: bigint | null;
  startInterval: Date;
  endInterval: Date;
  vAnchorAddress: string;
}

export interface WithdrawalByChainAndByToken15MinsIntervalItem
  extends WithdrawalByChain15MinsIntervalItem {
  tokenSymbol: string;
}

export interface WithdrawalByVAnchor15MinsIntervalItem {
  vAnchorAddress: string;
  withdrawal: bigint | null;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorWithdrawalByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<WithdrawalByChain15MinsIntervalItem | null> => {
  const result = await sdk.GetVAnchorWithdrawalEvery15Mins(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
    },
    {
      subgraphUrl,
    }
  );

  if (result.vanchorWithdrawalEvery15Mins?.[0]?.withdrawal === undefined) {
    return null;
  }

  const item = result.vanchorWithdrawalEvery15Mins[0];

  return {
    withdrawal: BigInt(item.withdrawal),
    subgraphUrl: subgraphUrl,
    startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
    endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
    vAnchorAddress: String(item.vAnchorAddress),
  };
};

export const GetVAnchorWithdrawalByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<WithdrawalByChain15MinsIntervalItem | null>> => {
  const promises: Array<Promise<WithdrawalByChain15MinsIntervalItem | null>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWithdrawalByChain15MinsInterval(
        subgraphUrl,
        vAnchorAddress,
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsWithdrawalByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<WithdrawalByVAnchor15MinsIntervalItem>> => {
  const result = await sdk.GetVAnchorsWithdrawalEvery15Mins(
    {
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorWithdrawalEvery15Mins?.length) {
    return [] as Array<WithdrawalByVAnchor15MinsIntervalItem>;
  }

  const withdrawalMap: { [vanchorAddress: string]: bigint } = {};

  result.vanchorWithdrawalEvery15Mins.map((item) => {
    if (!withdrawalMap[item?.vAnchorAddress]) {
      withdrawalMap[item.vAnchorAddress] = BigInt(0);
    }

    withdrawalMap[item?.vAnchorAddress] += BigInt(item.withdrawal);
  });

  const withdrawalByVAnchor15MinsIntervalItems: Array<WithdrawalByVAnchor15MinsIntervalItem> =
    [];

  for (const key in withdrawalMap) {
    withdrawalByVAnchor15MinsIntervalItems.push({
      vAnchorAddress: key,
      withdrawal: withdrawalMap[key],
    });
  }

  return withdrawalByVAnchor15MinsIntervalItems;
};

export const GetVAnchorsWithdrawalByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<WithdrawalByVAnchor15MinsIntervalItem>>> => {
  const promises: Array<Promise<Array<WithdrawalByVAnchor15MinsIntervalItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsWithdrawalByChain15MinsInterval(
        subgraphUrl,
        vanchorAddresses,
        startInterval,
        endInterval
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorWithdrawalByChainAndByToken15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<WithdrawalByChainAndByToken15MinsIntervalItem>> => {
  const result = await sdk.GetVAnchorWithdrawalByTokenEvery15Mins(
    {
      tokenSymbol,
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      startInterval: DateUtil.fromDateToEpoch(startInterval),
      endInterval: DateUtil.fromDateToEpoch(endInterval),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorWithdrawalByTokenEvery15Mins?.length) {
    return [] as Array<WithdrawalByChainAndByToken15MinsIntervalItem>;
  }

  return result.vanchorWithdrawalByTokenEvery15Mins.map((item) => {
    return {
      withdrawal: item.withdrawal,
      tokenSymbol,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      vAnchorAddress: item.vAnchorAddress,
    };
  });
};

export const GetVAnchorWithdrawalByChainsAndByToken15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startInterval: Date,
  endInterval: Date
): Promise<Array<Array<WithdrawalByChainAndByToken15MinsIntervalItem>>> => {
  const promises: Array<
    Promise<Array<WithdrawalByChainAndByToken15MinsIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWithdrawalByChainAndByToken15MinsInterval(
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
