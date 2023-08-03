import { execute } from '../../.graphclient';
import { DateUtil } from '../utils/date';
import { SubgraphUrl } from '../config';

export interface WithdrawalByChainHistoryItem {
  subgraphUrl: SubgraphUrl;
  withdrawal: number;
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
  withdrawal: number;
}

export const GetVAnchorWithdrawalByChainHistory = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<WithdrawalByChainHistoryItem> => {
  const query = `
  query Withdrawal {
  vanchorWithdrawalEvery15Mins(
    where: {endInterval_lte: "${DateUtil.fromDateToEpoch(
      endTimestamp
    )}", startInterval_gte: "${DateUtil.fromDateToEpoch(
    startTimestamp
  )}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    startInterval
    ithdrawal
    vAnchorAddress
    endInterval
  }
}
`;
  const result = await execute(
    query,
    {},
    {
      subgraphUrl,
    }
  );

  return result.data.vanchorWithdrawalEvery15Mins?.map((item: any) => {
    return {
      withdrawal: item?.withdrawal,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
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
  const query = `
  query WithdrawalByVAnchor {
  vanchorWithdrawalEvery15Mins(
    where: { endInterval_lte: "${DateUtil.fromDateToEpoch(
      endTimestamp
    )}", startInterval_gte: "${DateUtil.fromDateToEpoch(
    startTimestamp
  )}", vAnchorAddress_in: [${vanchorAddresses
    .map((address) => '"' + address.toLowerCase() + '"')
    .join(',')}]}
  ) {
    id
    startInterval
    withdrawal
    endInterval,
    vAnchorAddress
  }
}
`;
  const result = await execute(
    query,
    {},
    {
      subgraphUrl,
    }
  );

  const withdrawalMap: { [vanchorAddress: string]: number } = {};

  result.data.vanchorWithdrawalEvery15Mins?.map((item: any) => {
    if (!withdrawalMap[item?.vAnchorAddress]) {
      withdrawalMap[item?.vAnchorAddress] = 0;
    }

    withdrawalMap[item?.vAnchorAddress] += item?.withdrawal;
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
  const query = `
  query MyQuery {
  vanchorWithdrawalByTokenEvery15Mins(
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}", endInterval_lte: "${DateUtil.fromDateToEpoch(
    endTimestamp
  )}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}"}
  ) {
    withdrawal,
    startInterval,
    endInterval,
    vAnchorAddress
  }
}
`;
  const result = await execute(
    query,
    {},
    {
      subgraphUrl,
    }
  );

  return result.data.vanchorWithdrawalByTokenEvery15Mins?.map((item: any) => {
    return {
      withdrawal: item?.withdrawal,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
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
