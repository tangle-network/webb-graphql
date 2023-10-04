import { getBuiltGraphSDK } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';

export interface RelayerFeeByChain {
  subgraphUrl: SubgraphUrl;
  totalFees: bigint | null;
  profit: bigint | null;
  txFees: bigint | null;
}

export interface RelayerFeeByChainAndByToken extends RelayerFeeByChain {
  tokenSymbol: string;
}

export interface RelayerFeeByVAnchor {
  vAnchorAddress: string;
  totalFees: bigint | null;
  profit: bigint | null;
  txFees: bigint | null;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorRelayerFeeByChain = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string
): Promise<RelayerFeeByChain> => {
  const result = await sdk.GetVAnchorRelayerFee(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  return {
    totalFees:
      result.vanchorRelayerFee?.totalFees === undefined
        ? null
        : BigInt(result.vanchorRelayerFee.totalFees),
    profit:
      result.vanchorRelayerFee?.profit === undefined
        ? null
        : BigInt(result.vanchorRelayerFee.profit),
    txFees:
      result.vanchorRelayerFee?.txFees === undefined
        ? null
        : BigInt(result.vanchorRelayerFee.txFees),
    subgraphUrl: subgraphUrl,
  };
};

export const GetVAnchorRelayerFeeByChains = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string
): Promise<Array<RelayerFeeByChain>> => {
  const promises: Array<Promise<RelayerFeeByChain>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorRelayerFeeByChain(subgraphUrl, vAnchorAddress));
  }

  return Promise.all(promises);
};

export const GetVAnchorsRelayerFeeByChain = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>
): Promise<Array<RelayerFeeByVAnchor>> => {
  const result = await sdk.GetVAnchorsRelayerFees(
    {
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorRelayerFees?.length) {
    return [] as Array<RelayerFeeByVAnchor>;
  }

  return result.vanchorRelayerFees.map((item) => {
    return {
      totalFees: BigInt(item.totalFees),
      profit: BigInt(item.profit),
      txFees: BigInt(item.txFees),
      vAnchorAddress: item.id,
    };
  });
};

export const GetVAnchorsRelayerFeeByChains = (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>
): Promise<Array<Array<RelayerFeeByVAnchor>>> => {
  const promises: Array<Promise<Array<RelayerFeeByVAnchor>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorsRelayerFeeByChain(subgraphUrl, vanchorAddresses));
  }

  return Promise.all(promises);
};

export const GetVAnchorRelayerFeeByChainAndByToken = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<RelayerFeeByChainAndByToken> => {
  const result = await sdk.GetVAnchorRelayerFeeByTokens(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      tokenSymbol: tokenSymbol,
    },
    {
      subgraphUrl,
    }
  );

  return {
    totalFees: !result.vanchorRelayerFeeByTokens?.length
      ? null
      : BigInt(result.vanchorRelayerFeeByTokens[0].totalFees),
    profit: !result.vanchorRelayerFeeByTokens?.length
      ? null
      : BigInt(result.vanchorRelayerFeeByTokens[0].profit),
    txFees: !result.vanchorRelayerFeeByTokens?.length
      ? null
      : BigInt(result.vanchorRelayerFeeByTokens[0].txFees),
    subgraphUrl: subgraphUrl,
    tokenSymbol: tokenSymbol,
  };
};

export const GetVAnchorRelayerFeeByChainsAndByToken = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<Array<RelayerFeeByChainAndByToken>> => {
  const promises: Array<Promise<RelayerFeeByChainAndByToken>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorRelayerFeeByChainAndByToken(
        subgraphUrl,
        vAnchorAddress,
        tokenSymbol
      )
    );
  }

  return Promise.all(promises);
};
