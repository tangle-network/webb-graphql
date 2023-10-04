import { getBuiltGraphSDK } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';

export interface WrappingFeeByChain {
  subgraphUrl: SubgraphUrl;
  wrappingFee: bigint | null;
}

export interface WrappingFeeByChainAndByToken extends WrappingFeeByChain {
  tokenSymbol: string;
}

export interface WrappingFeeByVAnchor {
  vAnchorAddress: string;
  wrappingFee: bigint | null;
}

const sdk = getBuiltGraphSDK();

export const GetVAnchorWrappingFeeByChain = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string
): Promise<WrappingFeeByChain> => {
  const result = await sdk.GetVAnchorWrappingFee(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  return {
    wrappingFee:
      result.vanchorWrappingFee?.fees !== undefined
        ? BigInt(result.vanchorWrappingFee.fees)
        : null,
    subgraphUrl: subgraphUrl,
  };
};

export const GetVAnchorWrappingFeeByChains = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string
): Promise<Array<WrappingFeeByChain>> => {
  const promises: Array<Promise<WrappingFeeByChain>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorWrappingFeeByChain(subgraphUrl, vAnchorAddress));
  }

  return Promise.all(promises);
};

export const GetVAnchorsWrappingFeeByChain = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>
): Promise<Array<WrappingFeeByVAnchor>> => {
  const result = await sdk.GetVAnchorsWrappingFees(
    {
      vAnchorAddresses: vanchorAddresses.map((vanchorAddress) =>
        vanchorAddress.toLowerCase()
      ),
    },
    {
      subgraphUrl,
    }
  );

  if (!result.vanchorWrappingFees?.length) {
    return [] as Array<WrappingFeeByVAnchor>;
  }

  return result.vanchorWrappingFees.map((item) => {
    return {
      wrappingFee: BigInt(item.fees),
      vAnchorAddress: item?.id,
    };
  });
};

export const GetVAnchorsWrappingFeeByChains = (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>
): Promise<Array<Array<WrappingFeeByVAnchor>>> => {
  const promises: Array<Promise<Array<WrappingFeeByVAnchor>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorsWrappingFeeByChain(subgraphUrl, vanchorAddresses));
  }

  return Promise.all(promises);
};

export const GetVAnchorWrappingFeeByChainAndByToken = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<WrappingFeeByChainAndByToken> => {
  const result = await sdk.GetVAnchorWrappingFeeByTokens(
    {
      vAnchorAddress: vAnchorAddress.toLowerCase(),
      tokenSymbol: tokenSymbol,
    },
    {
      subgraphUrl,
    }
  );

  return {
    wrappingFee:
      result.vanchorWrappingFeeByTokens?.[0]?.fees !== undefined
        ? BigInt(result.vanchorWrappingFeeByTokens[0].fees)
        : null,
    subgraphUrl: subgraphUrl,
    tokenSymbol: tokenSymbol,
  };
};

export const GetVAnchorWrappingFeeByChainsAndByToken = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<Array<WrappingFeeByChainAndByToken>> => {
  const promises: Array<Promise<WrappingFeeByChainAndByToken>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorWrappingFeeByChainAndByToken(
        subgraphUrl,
        vAnchorAddress,
        tokenSymbol
      )
    );
  }

  return Promise.all(promises);
};
