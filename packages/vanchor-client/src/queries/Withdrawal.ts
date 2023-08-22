import { getBuiltGraphSDK } from '../../.graphclient';
import { SubgraphUrl } from '../config';

export interface WithdrawalByChain {
  subgraphUrl: SubgraphUrl;
  withdrawal: bigint | null;
}

export interface WithdrawalByChainAndByToken extends WithdrawalByChain {
  tokenSymbol: string;
}

export interface WithdrawalByVAnchor {
  vAnchorAddress: string;
  withdrawal: bigint | null;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorWithdrawalByChain = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string
): Promise<WithdrawalByChain> => {
  const result = await sdk.GetVAnchorWithdrawal(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  return {
    withdrawal:
      result.vanchorWithdrawal == null
        ? null
        : BigInt(result.vanchorWithdrawal.withdrawal),
    subgraphUrl: subgraphUrl,
  };
};

export const GetVAnchorWithdrawalByChains = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string
): Promise<Array<WithdrawalByChain>> => {
  const promises: Array<Promise<WithdrawalByChain>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorWithdrawalByChain(subgraphUrl, vAnchorAddress));
  }

  return await Promise.all(promises);
};

export const GetVAnchorsWithdrawalByChain = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>
): Promise<Array<WithdrawalByVAnchor>> => {
  const result = await sdk.GetVAnchorsWithdrawals(
    {
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorWithdrawals.map((item) => {
    return {
      withdrawal: BigInt(item.withdrawal),
      vAnchorAddress: item.id,
    };
  });
};

export const GetVAnchorsWithdrawalByChains = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>
): Promise<Array<Array<WithdrawalByVAnchor>>> => {
  const promises: Array<Promise<Array<WithdrawalByVAnchor>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorsWithdrawalByChain(subgraphUrl, vanchorAddresses));
  }

  return await Promise.all(promises);
};

export const GetVAnchorWithdrawalByChainAndByToken = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<WithdrawalByChainAndByToken> => {
  const result = await sdk.GetVAnchorWithdrawalByTokens(
    {
      tokenSymbol,
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  return {
    withdrawal:
      result.vanchorWithdrawalByTokens &&
      result.vanchorWithdrawalByTokens.length > 0
        ? BigInt(result.vanchorWithdrawalByTokens[0].withdrawal)
        : null,
    subgraphUrl: subgraphUrl,
    tokenSymbol: tokenSymbol,
  };
};

export const GetVAnchorWithdrawalByChainsAndByToken = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<Array<WithdrawalByChainAndByToken>> => {
  const promises: Array<Promise<WithdrawalByChainAndByToken>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWithdrawalByChainAndByToken(
        subgraphUrl,
        vAnchorAddress,
        tokenSymbol
      )
    );
  }

  return await Promise.all(promises);
};
