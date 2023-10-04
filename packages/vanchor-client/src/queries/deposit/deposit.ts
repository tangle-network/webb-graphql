import { getBuiltGraphSDK } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';

const sdk = getBuiltGraphSDK();

export const GetVAnchorDepositByChain = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string
): Promise<bigint | null> => {
  const result = await sdk.GetVAnchorDepositByChain(
    { id: vAnchorAddress.toLowerCase() },
    { subgraphUrl }
  );

  if (result.vanchorDeposit?.deposit === undefined) {
    return null;
  }

  return BigInt(result.vanchorDeposit.deposit);
};

export const GetVAnchorDepositByChains = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string
): Promise<Array<bigint | null>> => {
  const promises: Array<Promise<bigint | null>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorDepositByChain(subgraphUrl, vAnchorAddress));
  }

  return Promise.all(promises);
};

export const GetVAnchorsDepositByChain = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>
): Promise<Array<bigint | null>> => {
  const result = await sdk.GetVAnchorsDepositByChain(
    {
      vanchorAddresses: vanchorAddresses.map((item) => item.toLowerCase()),
    },
    {
      subgraphUrl,
    }
  );

  return result.vanchorDeposits.map((item) =>
    item?.deposit !== undefined ? BigInt(item.deposit) : null
  );
};

export const GetVAnchorsDepositByChains = (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>
): Promise<Array<Array<bigint | null>>> => {
  const promises: Array<Promise<Array<bigint | null>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorsDepositByChain(subgraphUrl, vanchorAddresses));
  }

  return Promise.all(promises);
};

export const GetVAnchorDepositByChainAndByToken = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<bigint | null> => {
  const result = await sdk.GetVAnchorDepositByTokens(
    {
      tokenSymbol,
      vAnchorAddress: vAnchorAddress.toLowerCase(),
    },
    {
      subgraphUrl,
    }
  );

  if (
    !result.vanchorDepositByTokens?.length ||
    result.vanchorDepositByTokens[0]?.deposit === undefined
  ) {
    return null;
  }

  return BigInt(result.vanchorDepositByTokens[0].deposit);
};

export const GetVAnchorDepositByChainsAndByToken = (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<Array<bigint | null>> => {
  const promises: Array<Promise<bigint | null>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorDepositByChainAndByToken(
        subgraphUrl,
        vAnchorAddress,
        tokenSymbol
      )
    );
  }

  return Promise.all(promises);
};
