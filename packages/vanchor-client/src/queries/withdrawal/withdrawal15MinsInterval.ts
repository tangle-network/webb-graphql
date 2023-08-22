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

export const GetVAnchorWithdrawalByChainHistory = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<WithdrawalByChainHistoryItem> => {
  const result = await sdk.GetVAnchorWithdrawalEvery15Mins(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      startTimestamp: DateUtil.fromDateToEpoch(startTimestamp),
      endTimestamp: DateUtil.fromDateToEpoch(endTimestamp),
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorWithdrawalEvery15Mins.map((item) => {
    return {
      withdrawal: BigInt(item.withdrawal),
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item.endInterval)),
      vAnchorAddress: item.vAnchorAddress,
    };
  })?.[0];
};

export const GetVAnchorWithdrawalByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<WithdrawalByChain15MinsIntervalItem>>> => {
  const promises: Array<Promise<Array<WithdrawalByChain15MinsIntervalItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWithdrawalByChain15MinsInterval(
        subgraphUrl,
        vAnchorAddress,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsWithdrawalByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<WithdrawalByVAnchorHistoryItem>> => {
  const result = await sdk.GetVAnchorsWithdrawalEvery15Mins(
    {
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
      startTimestamp: DateUtil.fromDateToEpoch(startTimestamp),
      endTimestamp: DateUtil.fromDateToEpoch(endTimestamp),
    },
    {
      subgraphUrl,
    }
  );

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
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<WithdrawalByVAnchor15MinsIntervalItem>>> => {
  const promises: Array<Promise<Array<WithdrawalByVAnchor15MinsIntervalItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsWithdrawalByChain15MinsInterval(
        subgraphUrl,
        vanchorAddresses,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorWithdrawalByChainAndByToken15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<WithdrawalByChainAndByTokenHistoryItem>> => {
  const result = await sdk.GetVAnchorWithdrawalByTokenEvery15Mins(
    {
      tokenSymbol,
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      startTimestamp: DateUtil.fromDateToEpoch(startTimestamp),
      endTimestamp: DateUtil.fromDateToEpoch(endTimestamp),
    },
    {
      subgraphUrl,
    }
  );

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
  startTimestamp: Date,
  endTimestamp: Date
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
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};
