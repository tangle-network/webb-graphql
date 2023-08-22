import { execute, getBuiltGraphSDK } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';

export interface TotalValueLockedByChain {
  totalValueLocked: bigint | undefined;
  subgraphUrl: SubgraphUrl;
}

export interface TotalValueLockedByChainAndByToken
  extends TotalValueLockedByChain {
  tokenSymbol: string;
}

export interface TotalValueLockedByVAnchor {
  vAnchorAddress: string;
  totalValueLocked: bigint | undefined;
}

export interface TotalValueLockedByVAnchorByChain {
  vAnchorAddress: string;
  totalValueLocked: bigint | undefined;
  subgraphUrl: SubgraphUrl;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorTotalValueLockedByChain = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string
): Promise<TotalValueLockedByChain> => {
  const result = await sdk.GetVAnchorTotalValueLocked(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  return {
    totalValueLocked:
      result.vanchorTotalValueLocked?.totalValueLocked == null
        ? undefined
        : BigInt(result.vanchorTotalValueLocked.totalValueLocked),
    subgraphUrl: subgraphUrl,
  };
};

export const GetVAnchorTotalValueLockedByChains = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string
): Promise<Array<TotalValueLockedByChain>> => {
  const promises: Array<Promise<TotalValueLockedByChain>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalValueLockedByChain(subgraphUrl, vAnchorAddress)
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsTotalValueLockedByChain = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>
): Promise<Array<TotalValueLockedByVAnchor>> => {
  const result = await sdk.GetVAnchorTotalValueLockeds(
    {
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorTotalValueLockeds.map((item) => {
    return {
      totalValueLocked: BigInt(item.totalValueLocked),
      vAnchorAddress: item.id,
    };
  });
};

export const GetVAnchorsTotalValueLockedByChains = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>
): Promise<Array<Array<TotalValueLockedByVAnchor>>> => {
  const promises: Array<Promise<Array<TotalValueLockedByVAnchor>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsTotalValueLockedByChain(subgraphUrl, vanchorAddresses)
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorTotalValueLockedByChainAndByToken = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<TotalValueLockedByChainAndByToken> => {
  const result = await sdk.GetVAnchorTotalValueLockedByTokens(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      tokenSymbol: tokenSymbol.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  return {
    totalValueLocked:
      result.vanchorTotalValueLockedByTokens &&
      result.vanchorTotalValueLockedByTokens.length > 0
        ? BigInt(result.vanchorTotalValueLockedByTokens[0].totalValueLocked)
        : undefined,
    subgraphUrl: subgraphUrl,
    tokenSymbol: tokenSymbol,
  };
};

export const GetVAnchorTotalValueLockedByChainsAndByToken = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<Array<TotalValueLockedByChainAndByToken>> => {
  const promises: Array<Promise<TotalValueLockedByChainAndByToken>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalValueLockedByChainAndByToken(
        subgraphUrl,
        vAnchorAddress,
        tokenSymbol
      )
    );
  }

  return await Promise.all(promises);
};
