import { execute } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';

export interface TotalWrappingFeeByChain {
  subgraphUrl: SubgraphUrl;
  totalWrappingFee: number | undefined;
}

export interface TotalWrappingFeeByChainAndByToken
  extends TotalWrappingFeeByChain {
  tokenSymbol: string;
}

export interface TotalWrappingFeeByVAnchor {
  vAnchorAddress: string;
  totalWrappingFee: number;
}

export const GetVAnchorTotalWrappingFeeByChain = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string
): Promise<TotalWrappingFeeByChain> => {
  const query = /* GraphQL */ `
  query TotalWrappingFee {
    vanchorTotalWrappingFee(id: "${vAnchorAddress.toLowerCase()}"){
      fees
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
    totalWrappingFee:
      result.data.vanchorTotalWrappingFee?.fees == null
        ? undefined
        : +result.data.vanchorTotalWrappingFee?.fees,
    subgraphUrl: subgraphUrl,
  };
};

export const GetVAnchorTotalWrappingFeeByChains = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string
): Promise<Array<TotalWrappingFeeByChain>> => {
  const promises: Array<Promise<TotalWrappingFeeByChain>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalWrappingFeeByChain(subgraphUrl, vAnchorAddress)
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorsTotalWrappingFeeByChain = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>
): Promise<Array<TotalWrappingFeeByVAnchor>> => {
  const query = /* GraphQL */ `
  query TotalWrappingFeeByVAnchor {
  vanchorTotalWrappingFees(
    where: {id_in: [${vanchorAddresses
      .map((address) => '"' + address.toLowerCase() + '"')
      .join(',')}]}
  ) {
    id
    fees
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

  if (result.data.vanchorTotalWrappingFees == null) {
    return [] as Array<TotalWrappingFeeByVAnchor>;
  }

  return result.data.vanchorTotalWrappingFees?.map((item: any) => {
    return {
      totalWrappingFee: +item?.fees,
      vAnchorAddress: item?.id,
    };
  });
};

export const GetVAnchorsTotalWrappingFeeByChains = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>
): Promise<Array<Array<TotalWrappingFeeByVAnchor>>> => {
  const promises: Array<Promise<Array<TotalWrappingFeeByVAnchor>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorsTotalWrappingFeeByChain(subgraphUrl, vanchorAddresses)
    );
  }

  return await Promise.all(promises);
};

export const GetVAnchorTotalWrappingFeeByChainAndByToken = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<TotalWrappingFeeByChainAndByToken> => {
  const query = /* GraphQL */ `
  query MyQuery {
  vanchorTotalWrappingFeeByTokens(
    first: 1
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    fees
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
    totalWrappingFee:
      result?.data?.vanchorTotalWrappingFeeByTokens != null &&
      result.data.vanchorTotalWrappingFeeByTokens.length > 0
        ? +result.data.vanchorTotalWrappingFeeByTokens[0].fees
        : undefined,
    subgraphUrl: subgraphUrl,
    tokenSymbol: tokenSymbol,
  };
};

export const GetVAnchorTotalWrappingFeeByChainsAndByToken = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<Array<TotalWrappingFeeByChainAndByToken>> => {
  const promises: Array<Promise<TotalWrappingFeeByChainAndByToken>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorTotalWrappingFeeByChainAndByToken(
        subgraphUrl,
        vAnchorAddress,
        tokenSymbol
      )
    );
  }

  return await Promise.all(promises);
};
