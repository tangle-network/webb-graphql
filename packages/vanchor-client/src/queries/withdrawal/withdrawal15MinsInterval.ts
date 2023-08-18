import { execute } from '../../../.graphclient';
import { DateUtil } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface WithdrawalByChain15MinsIntervalItem {
  subgraphUrl: SubgraphUrl;
  withdrawal: number;
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
  withdrawal: number;
}

export const GetVAnchorWithdrawalByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<WithdrawalByChain15MinsIntervalItem> => {
  const query = /* GraphQL */ `
  query Withdrawal {
  vanchorWithdrawalEvery15Mins(
    where: {endInterval_lte: "${DateUtil.fromDateToEpoch(
      endTimestamp
    )}", startInterval_gte: "${DateUtil.fromDateToEpoch(
    startTimestamp
  )}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    startInterval
    withdrawal
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
      withdrawal: +item?.withdrawal,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorWithdrawalByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<WithdrawalByChain15MinsIntervalItem>> => {
  const promises: Array<Promise<WithdrawalByChain15MinsIntervalItem>> = [];

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
): Promise<Array<WithdrawalByVAnchor15MinsIntervalItem>> => {
  const query = /* GraphQL */ `
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

    withdrawalMap[item?.vAnchorAddress] += +item?.withdrawal;
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
): Promise<Array<WithdrawalByChainAndByToken15MinsIntervalItem>> => {
  const query = /* GraphQL */ `
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
      withdrawal: +item?.withdrawal,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
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
