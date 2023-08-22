import { execute, getBuiltGraphSDK } from '../../.graphclient';
import { SubgraphUrl } from '../config';

export interface TotalRelayerFeeByChain {
  subgraphUrl: SubgraphUrl;
  totalRelayerFee: bigint | null;
}

export interface TotalRelayerFeeByChainAndByToken
  extends TotalRelayerFeeByChain {
  tokenSymbol: string;
}

export interface TotalRelayerFeeByVAnchor {
  vAnchorAddress: string;
  totalRelayerFee: bigint | null;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorTotalRelayerFeeByChain = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string
): Promise<TotalRelayerFeeByChain> => {
  const result = await sdk.GetVAnchorTotalRelayerFee(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  return {
    totalRelayerFee:
      result.vanchorTotalRelayerFee == null
        ? null
        : BigInt(result.vanchorTotalRelayerFee.fees),
    subgraphUrl: subgraphUrl,
  };
};

export const GetVAnchorTotalRelayerFeeByChains = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string
): Promise<Array<TotalRelayerFeeByChain>> => {
  const promises: Array<Promise<TotalRelayerFeeByChain>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalRelayerFeeByChain(subgraphUrl, vAnchorAddress)
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsTotalRelayerFeeByChain = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>
): Promise<Array<TotalRelayerFeeByVAnchor>> => {
  const result = await sdk.GetVAnchorsTotalRelayerFees(
    {
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorTotalRelayerFees.map((item) => {
    return {
      totalRelayerFee: item.fees,
      vAnchorAddress: item.id,
    };
  });
};

export const GetVAnchorsTotalRelayerFeeByChains = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>
): Promise<Array<Array<TotalRelayerFeeByVAnchor>>> => {
  const promises: Array<Promise<Array<TotalRelayerFeeByVAnchor>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsTotalRelayerFeeByChain(subgraphUrl, vanchorAddresses)
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorTotalRelayerFeeByChainAndByToken = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<TotalRelayerFeeByChainAndByToken> => {
  const result = await sdk.GetVAnchorTotalRelayerFeeByTokens(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      tokenSymbol: tokenSymbol,
    },
    {
      subgraphUrl,
    }
  );

  return {
    totalRelayerFee:
      result.vanchorTotalRelayerFeeByTokens &&
      result.vanchorTotalRelayerFeeByTokens.length > 0
        ? result.vanchorTotalRelayerFeeByTokens[0].fees
        : undefined,
    subgraphUrl: subgraphUrl,
    tokenSymbol: tokenSymbol,
  };
};

export const GetVAnchorTotalRelayerFeeByChainsAndByToken = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<Array<TotalRelayerFeeByChainAndByToken>> => {
  const promises: Array<Promise<TotalRelayerFeeByChainAndByToken>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalRelayerFeeByChainAndByToken(
        subgraphUrl,
        vAnchorAddress,
        tokenSymbol
      )
    );
  }

  return await Promise.all(promises);
};
