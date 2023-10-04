import { getBuiltGraphSDK } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';

export interface TWLByChain {
  total: bigint | null;
  subgraphUrl: SubgraphUrl;
}

export interface TWLByChainAndByToken extends TWLByChain {
  tokenSymbol: string;
}

export interface TWLByVAnchor {
  vAnchorAddress: string;
  total: bigint | undefined;
}

export interface TWLByVAnchorByChain {
  vAnchorAddress: string;
  total: bigint | undefined;
  subgraphUrl: SubgraphUrl;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorTWLByChain = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string
): Promise<TWLByChain> => {
  const result = await sdk.GetVAnchorTWL(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  return {
    total:
      result.vanchorTWL?.total === undefined
        ? null
        : BigInt(result.vanchorTWL.total),
    subgraphUrl: subgraphUrl,
  };
};

export const GetVAnchorTWLByChains = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string
): Promise<Array<TWLByChain>> => {
  const promises: Array<Promise<TWLByChain>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorTWLByChain(subgraphUrl, vAnchorAddress));
  }

  return Promise.all(promises);
};

export const GetVAnchorsTWLByChain = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>
): Promise<Array<TWLByVAnchor>> => {
  const result = await sdk.GetVAnchorTWLs(
    {
      vAnchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
    },
    {
      subgraphUrl,
    }
  );

  if (result.vanchorTWLs?.length === undefined) {
    return [] as Array<TWLByVAnchor>;
  }

  return result.vanchorTWLs.map((item) => {
    return {
      total: BigInt(item.total),
      vAnchorAddress: item.id,
    };
  });
};

export const GetVAnchorsTWLByChains = (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>
): Promise<Array<Array<TWLByVAnchor>>> => {
  const promises: Array<Promise<Array<TWLByVAnchor>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorsTWLByChain(subgraphUrl, vanchorAddresses));
  }

  return Promise.all(promises);
};

export const GetVAnchorTWLByChainAndByToken = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<TWLByChainAndByToken> => {
  const result = await sdk.GetVAnchorTWLByTokens(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      tokenSymbol: tokenSymbol,
    },
    {
      subgraphUrl,
    }
  );

  return {
    total:
      result.vanchorTWLByTokens?.[0]?.total !== undefined
        ? BigInt(result.vanchorTWLByTokens[0].total)
        : null,
    subgraphUrl: subgraphUrl,
    tokenSymbol: tokenSymbol,
  };
};

export const GetVAnchorTWLByChainsAndByToken = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<Array<TWLByChainAndByToken>> => {
  const promises: Array<Promise<TWLByChainAndByToken>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTWLByChainAndByToken(subgraphUrl, vAnchorAddress, tokenSymbol)
    );
  }

  return Promise.all(promises);
};
