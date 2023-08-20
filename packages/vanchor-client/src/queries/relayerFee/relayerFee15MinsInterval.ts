import { execute } from '../../../.graphclient';
import { DateUtil } from '../../utils/date';
import { SubgraphUrl } from '../../config';

export interface RelayerFeeByChain15MinsIntervalItem {
  subgraphUrl: SubgraphUrl;
  relayerFee: number;
  startInterval: Date;
  endInterval: Date;
  vAnchorAddress: string;
}

export interface RelayerFeeByChainAndByToken15MinsIntervalItem
  extends RelayerFeeByChain15MinsIntervalItem {
  tokenSymbol: string;
}

export interface RelayerFeeByVAnchor15MinsIntervalItem {
  vAnchorAddress: string;
  relayerFee: number;
}

export const GetVAnchorRelayerFeeByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<RelayerFeeByChain15MinsIntervalItem> => {
  const query = /* GraphQL */ `
    query RelayerFee {
      vanchorRelayerFeeEvery15Mins(
        where: {
          endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}",
          startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}",
          vAnchorAddress: "${vAnchorAddress.toLowerCase()}"
        }
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

  return result.data.vanchorRelayerFeeEvery15Mins?.map((item: any) => {
    return {
      relayerFee: +item?.fees,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorRelayerFeeByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<RelayerFeeByChain15MinsIntervalItem>> => {
  const promises: Array<Promise<RelayerFeeByChain15MinsIntervalItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorRelayerFeeByChain15MinsInterval(
        subgraphUrl,
        vAnchorAddress,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsRelayerFeeByChain15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<RelayerFeeByVAnchor15MinsIntervalItem>> => {
  const query = /* GraphQL */ `
    query RelayerFeeByVAnchor {
      vanchorRelayerFeeEvery15Mins(
        where: {
          endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}",
          startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}",
          vAnchorAddress_in: [
            ${vanchorAddresses
              .map((address) => `"${address.toLowerCase()}"`)
              .join(',')}
          ]
        }
      ) {
        id
        startInterval
        fees
        endInterval
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

  const relayerFeeMap: { [vanchorAddress: string]: number } = {};

  result.data.vanchorRelayerFeeEvery15Mins?.map((item: any) => {
    if (!relayerFeeMap[item?.vAnchorAddress]) {
      relayerFeeMap[item?.vAnchorAddress] = 0;
    }

    relayerFeeMap[item?.vAnchorAddress] += +item?.fees;
  });

  const relayerFeeByVAnchor15MinsIntervalItems: Array<RelayerFeeByVAnchor15MinsIntervalItem> =
    [];

  for (const key in relayerFeeMap) {
    relayerFeeByVAnchor15MinsIntervalItems.push({
      vAnchorAddress: key,
      relayerFee: relayerFeeMap[key],
    });
  }

  return relayerFeeByVAnchor15MinsIntervalItems;
};

export const GetVAnchorsRelayerFeeByChains15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<RelayerFeeByVAnchor15MinsIntervalItem>>> => {
  const promises: Array<Promise<Array<RelayerFeeByVAnchor15MinsIntervalItem>>> =
    [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsRelayerFeeByChain15MinsInterval(
        subgraphUrl,
        vanchorAddresses,
        startTimestamp,
        endTimestamp
      )
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorRelayerFeeByChainAndByToken15MinsInterval = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<RelayerFeeByChainAndByToken15MinsIntervalItem>> => {
  const query = /* GraphQL */ `
    query MyQuery {
      vanchorRelayerFeeByTokenEvery15Mins(
        where: {
          tokenSymbol: "${tokenSymbol}",
          vAnchorAddress: "${vAnchorAddress.toLowerCase()}",
          endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}",
          startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}"
        }
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

  return result.data.vanchorRelayerFeeByTokenEvery15Mins?.map((item: any) => {
    return {
      relayerFee: +item?.fees,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress,
    };
  });
};

export const GetVAnchorRelayerFeeByChainsAndByToken15MinsInterval = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string,
  startTimestamp: Date,
  endTimestamp: Date
): Promise<Array<Array<RelayerFeeByChainAndByToken15MinsIntervalItem>>> => {
  const promises: Array<
    Promise<Array<RelayerFeeByChainAndByToken15MinsIntervalItem>>
  > = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorRelayerFeeByChainAndByToken15MinsInterval(
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
