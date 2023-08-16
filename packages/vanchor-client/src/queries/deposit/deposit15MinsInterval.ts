import { execute } from '../../../.graphclient';
import { DateUtil } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface DepositByChain15MinsIntervalItem {
  subgraphUrl: SubgraphUrl;
  deposit: number;
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
  deposit: number;
}

export const GetVAnchorDepositByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<DepositByChain15MinsIntervalItem> => {
  const query = /* GraphQL */ `
  query Deposit {
  vanchorDepositEvery15Mins(
    where: {endInterval_lte: "${DateUtil.fromDateToEpoch(
      endTimestamp
    )}", startInterval_gte: "${DateUtil.fromDateToEpoch(
    startTimestamp
  )}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    startInterval
    deposit
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

  return result.data.vanchorDepositEvery15Mins?.map((item: any) => {
    return {
      deposit: +item?.deposit,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
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
  const query = /* GraphQL */ `
  query DepositByVAnchor {
  vanchorDepositEvery15Mins(
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
    deposit
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

  const depositMap: { [vanchorAddress: string]: number } = {};

  result.data.vanchorDepositEvery15Mins?.map((item: any) => {
    if (!depositMap[item?.vAnchorAddress]) {
      depositMap[item?.vAnchorAddress] = 0;
    }

    depositMap[item?.vAnchorAddress] += +item?.deposit;
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
  const query = /* GraphQL */ `
  query MyQuery {
  vanchorDepositByTokenEvery15Mins(
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}", endInterval_lte: "${DateUtil.fromDateToEpoch(
    endTimestamp
  )}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}"}
  ) {
    deposit,
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

  return result.data.vanchorDepositByTokenEvery15Mins?.map((item: any) => {
    return {
      deposit: +item?.deposit,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
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
