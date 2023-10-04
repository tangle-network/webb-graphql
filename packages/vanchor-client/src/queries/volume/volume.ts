import { getBuiltGraphSDK } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';

const sdk = getBuiltGraphSDK();

export const GetVAnchorVolumeByChain = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string
): Promise<bigint | null> => {
  const result = await sdk.GetVAnchorVolumeByChain(
    { id: vAnchorAddress.toLowerCase() },
    { subgraphUrl }
  );

  if (result.vanchorVolume?.volume === undefined) {
    return null;
  }

  return BigInt(result.vanchorVolume.volume);
};

export const GetVAnchorVolumeByChains = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string
): Promise<Array<bigint | null>> => {
  const promises: Array<Promise<bigint | null>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorVolumeByChain(subgraphUrl, vAnchorAddress));
  }

  return Promise.all(promises);
};

export const GetVAnchorsVolumeByChain = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>
): Promise<Array<bigint | null>> => {
  const result = await sdk.GetVAnchorsVolumeByChain(
    {
      vanchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorVolumes.map((item) =>
    item?.volume !== undefined ? BigInt(item.volume) : null
  );
};

export const GetVAnchorsVolumeByChains = (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>
): Promise<Array<Array<bigint | null>>> => {
  const promises: Array<Promise<Array<bigint | null>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorsVolumeByChain(subgraphUrl, vanchorAddresses));
  }

  return Promise.all(promises);
};

export const GetVAnchorVolumeByChainAndByToken = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<bigint | null> => {
  const result = await sdk.GetVAnchorVolumeByTokens(
    {
      tokenSymbol,
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  if (
    !result.vanchorVolumeByTokens?.length ||
    result.vanchorVolumeByTokens[0]?.volume === undefined
  ) {
    return null;
  }

  return BigInt(result.vanchorVolumeByTokens[0].volume);
};

export const GetVAnchorVolumeByChainsAndByToken = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<Array<bigint | null>> => {
  const promises: Array<Promise<bigint | null>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorVolumeByChainAndByToken(
        subgraphUrl,
        vAnchorAddress,
        tokenSymbol
      )
    );
  }

  return Promise.all(promises);
};
