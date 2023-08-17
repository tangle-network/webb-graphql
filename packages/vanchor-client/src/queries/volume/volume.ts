import { execute } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';

export interface VolumeByChain {
  volume: number | undefined;
  subgraphUrl: SubgraphUrl;
}

export interface VolumeByChainAndByToken extends VolumeByChain {
  tokenSymbol: string;
}

export interface VolumeByVAnchor {
  vAnchorAddress: string;
  volume: number | undefined;
}

export interface VolumeByVAnchorByChain {
  vAnchorAddress: string;
  volume: number | undefined;
  subgraphUrl: SubgraphUrl;
}

export const GetVAnchorVolumeByChain = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string
): Promise<VolumeByChain> => {
  const query = /* GraphQL */ `
  query Volume {
  vanchorVolume(id: "${vAnchorAddress.toLowerCase()}"){

    volume
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
    volume:
      result.data.vanchorVolume?.volume == null
        ? undefined
        : +result.data.vanchorVolume.volume,
    subgraphUrl: subgraphUrl,
  };
};

export const GetVAnchorVolumeByChains = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string
): Promise<Array<VolumeByChain>> => {
  const promises: Array<Promise<VolumeByChain>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorVolumeByChain(subgraphUrl, vAnchorAddress));
  }

  return await Promise.all(promises);
};

export const GetVAnchorsVolumeByChain = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>
): Promise<Array<VolumeByVAnchor>> => {
  const query = /* GraphQL */ `
  query VolumeByVAnchor {
  vanchorVolumes(
    where: {id_in: [${vanchorAddresses
      .map((address) => '"' + address.toLowerCase() + '"')
      .join(',')}]}
  ) {
    id
    volume
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

  return result.data.vanchorVolumes?.map((item: any) => {
    return {
      volume: +item?.volume,
      vAnchorAddress: item?.id,
    };
  });
};

export const GetVAnchorsVolumeByChains = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>
): Promise<Array<Array<VolumeByVAnchor>>> => {
  const promises: Array<Promise<Array<VolumeByVAnchor>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorsVolumeByChain(subgraphUrl, vanchorAddresses));
  }

  return await Promise.all(promises);
};

export const GetVAnchorVolumeByChainAndByToken = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<VolumeByChainAndByToken> => {
  const query = /* GraphQL */ `
  query MyQuery {
  vanchorVolumeByTokens(
    first: 1
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    volume
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
    volume:
      result.data.vanchorVolumeByTokens &&
      result.data.vanchorVolumeByTokens.length > 0
        ? +result.data.vanchorVolumeByTokens[0].volume
        : undefined,
    subgraphUrl: subgraphUrl,
    tokenSymbol: tokenSymbol,
  };
};

export const GetVAnchorVolumeByChainsAndByToken = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<Array<VolumeByChainAndByToken>> => {
  const promises: Array<Promise<VolumeByChainAndByToken>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorVolumeByChainAndByToken(
        subgraphUrl,
        vAnchorAddress,
        tokenSymbol
      )
    );
  }

  return await Promise.all(promises);
};
