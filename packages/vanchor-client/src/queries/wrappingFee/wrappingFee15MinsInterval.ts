import { execute } from '../../../.graphclient';
import { DateUtil } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface WrappingFeeByChain15MinsIntervalItem {
  subgraphUrl: SubgraphUrl;
  wrappingFee: number;
  startInterval: Date;
  endInterval: Date;
  vAnchorAddress: string;
}

export interface WrappingFeeByChainAndByToken15MinsIntervalItem
  extends WrappingFeeByChain15MinsIntervalItem {
  tokenSymbol: string;
}

export interface WrappingFeeByVAnchor15MinsIntervalItem {
  vAnchorAddress: string;
  wrappingFee: number;
}

export const GetVAnchorWrappingFeeByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<WrappingFeeByChain15MinsIntervalItem>> => {
  const query = /* GraphQL */ `
  query WrappingFee {
  vanchorWrappingFeeEvery15Mins(
    where: {endInterval_lte: "${DateUtil.fromDateToEpoch(
      endTimestamp
    )}", startInterval_gte: "${DateUtil.fromDateToEpoch(
    startTimestamp
  )}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    startInterval
    fees
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

  if (result?.data?.vanchorWrappingFeeEvery15Mins == null) {
    return [] as Array<WrappingFeeByChain15MinsIntervalItem>;
  }

  return result.data.vanchorWrappingFeeEvery15Mins?.map((item: any) => {
    return {
      wrappingFee: +item?.fees,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorWrappingFeeByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<WrappingFeeByChain15MinsIntervalItem>>> => {
  const promises: Array<Promise<Array<WrappingFeeByChain15MinsIntervalItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWrappingFeeByChain15MinsInterval(
        subgraphUrl,
        vAnchorAddress,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsWrappingFeeByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<WrappingFeeByVAnchor15MinsIntervalItem>> => {
  const query = /* GraphQL */ `
  query WrappingFeeByVAnchor {
  vanchorWrappingFeeEvery15Mins(
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
    fees
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

  if (result?.data?.vanchorWrappingFeeEvery15Mins == null) {
    return [] as Array<WrappingFeeByVAnchor15MinsIntervalItem>;
  }

  const wrappingFeeMap: { [vanchorAddress: string]: number } = {};

  result.data.vanchorWrappingFeeEvery15Mins?.map((item: any) => {
    if (!wrappingFeeMap[item?.vAnchorAddress]) {
      wrappingFeeMap[item?.vAnchorAddress] = 0;
    }

    wrappingFeeMap[item?.vAnchorAddress] += +item?.fees;
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

export const GetVAnchorsWrappingFeeByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<WrappingFeeByVAnchor15MinsIntervalItem>>> => {
  const promises: Array<
    Promise<Array<WrappingFeeByVAnchor15MinsIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsWrappingFeeByChain15MinsInterval(
        subgraphUrl,
        vanchorAddresses,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorWrappingFeeByChainAndByToken15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<WrappingFeeByChainAndByToken15MinsIntervalItem>> => {
  const query = /* GraphQL */ `
  query MyQuery {
  vanchorWrappingFeeByTokenEvery15Mins(
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}", endInterval_lte: "${DateUtil.fromDateToEpoch(
    endTimestamp
  )}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}"}
  ) {
    fees,
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

  if (result?.data?.vanchorWrappingFeeByTokenEvery15Mins == null) {
    return [] as Array<WrappingFeeByChainAndByToken15MinsIntervalItem>;
  }

  return result.data.vanchorWrappingFeeByTokenEvery15Mins?.map((item: any) => {
    return {
      wrappingFee: +item?.fees,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorWrappingFeeByChainsAndByToken15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
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
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};
