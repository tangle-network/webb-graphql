import { execute } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';

export interface TotalValueLockedByChain {
  subgraphUrl: SubgraphUrl;
  totalValueLocked: number;
}

export interface TotalValueLockedByChainAndByToken
  extends TotalValueLockedByChain {
  tokenSymbol: string;
}

export interface TotalValueLockedByVAnchor {
  vAnchorAddress: string;
  totalValueLocked: number;
}

export interface TotalValueLockedByVAnchorByChain {
  vAnchorAddress: string;
  totalValueLocked: number;
  subgraphUrl: SubgraphUrl;
}

export const GetVAnchorTotalValueLockedByChain = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string
): Promise<TotalValueLockedByChain> => {
  const query = `
  query TotalValueLocked {
  vanchorTotalValueLocked(id: "${vAnchorAddress.toLowerCase()}"){

    totalValueLocked
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

  return {
    totalValueLocked: result.data.vanchorTotalValueLocked?.totalValueLocked,
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
  const query = `
  query TotalValueLockedByVAnchor {
  vanchorTotalValueLockeds(
    where: {id_in: [${vanchorAddresses
      .map((address) => '"' + address.toLowerCase() + '"')
      .join(',')}]}
  ) {
    id
    totalValueLocked
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

  return result.data.vanchorTotalValueLockeds?.map((item: any) => {
    return {
      totalValueLocked: item?.totalValueLocked,
      vAnchorAddress: item?.id,
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
  const query = `
  query MyQuery {
  vanchorTotalValueLockedByTokens(
    first: 1
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    totalValueLocked
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

  return {
    totalValueLocked:
      result.data.vanchorTotalValueLockedByTokens &&
      result.data.vanchorTotalValueLockedByTokens.length > 0
        ? result.data.vanchorTotalValueLockedByTokens[0].totalValueLocked
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
