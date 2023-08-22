import { getBuiltGraphSDK } from '../../.graphclient';
import { SubgraphUrl } from '../config';

export interface TotalWrappingFeeByChain {
  subgraphUrl: SubgraphUrl;
  totalWrappingFee: bigint | null;
}

export interface TotalWrappingFeeByChainAndByToken
  extends TotalWrappingFeeByChain {
  tokenSymbol: string;
}

export interface TotalWrappingFeeByVAnchor {
  vAnchorAddress: string;
  totalWrappingFee: bigint | null;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorTotalWrappingFeeByChain = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string
): Promise<TotalWrappingFeeByChain> => {
  const result = await sdk.GetVAnchorTotalWrappingFee(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  return {
    totalWrappingFee: result.vanchorTotalWrappingFee
      ? BigInt(result.vanchorTotalWrappingFee.fees)
      : null,
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
  const result = await sdk.GetVAnchorsTotalWrappingFees(
    {
      vAnchorAddresses: vanchorAddresses.map((vanchorAddress) =>
        vanchorAddress.toLowerCase()
      ),
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorTotalWrappingFees.map((item) => {
    return {
      totalWrappingFee: item.fees,
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
  const result = await sdk.GetVAnchorTotalWrappingFeeByTokens(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      tokenSymbol: tokenSymbol.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  return {
    totalWrappingFee:
      result.vanchorTotalWrappingFeeByTokens &&
      result.vanchorTotalWrappingFeeByTokens.length > 0
        ? result.vanchorTotalWrappingFeeByTokens[0].fees
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
