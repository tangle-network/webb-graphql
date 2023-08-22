import { execute, getBuiltGraphSDK } from '../../.graphclient';
import { DateUtil } from '../utils/date';
import { SubgraphUrl } from '../config';

export interface WithdrawalByChainHistoryItem {
  subgraphUrl: SubgraphUrl;
  withdrawal: bigint | null;
  startInterval: Date;
  endInterval: Date;
  vAnchorAddress: string;
}

export interface WithdrawalByChainAndByTokenHistoryItem
  extends WithdrawalByChainHistoryItem {
  tokenSymbol: string;
}

export interface WithdrawalByVAnchorHistoryItem {
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

export const GetVAnchorWithdrawalByChainsHistory = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<WithdrawalByChainHistoryItem>> => {
  const promises: Array<Promise<WithdrawalByChainHistoryItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWithdrawalByChainHistory(
        subgraphUrl,
        vAnchorAddress,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsWithdrawalByChainHistory = async (
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

  const withdrawalByVAnchorHistoryItems: Array<WithdrawalByVAnchorHistoryItem> =
    [];

  for (const key in withdrawalMap) {
    withdrawalByVAnchorHistoryItems.push({
      vAnchorAddress: key,
      withdrawal: withdrawalMap[key],
    });
  }

  return withdrawalByVAnchorHistoryItems;
};

export const GetVAnchorsWithdrawalByChainsHistory = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<WithdrawalByVAnchorHistoryItem>>> => {
  const promises: Array<Promise<Array<WithdrawalByVAnchorHistoryItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsWithdrawalByChainHistory(
        subgraphUrl,
        vanchorAddresses,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorWithdrawalByChainAndByTokenHistory = async (
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

export const GetVAnchorWithdrawalByChainsAndByTokenHistory = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<WithdrawalByChainAndByTokenHistoryItem>>> => {
  const promises: Array<
    Promise<Array<WithdrawalByChainAndByTokenHistoryItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWithdrawalByChainAndByTokenHistory(
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
