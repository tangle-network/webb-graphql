import { execute } from '../../../.graphclient';
import { SubgraphUrl } from '../../config';

export interface DepositByChain {
  subgraphUrl: SubgraphUrl;
  deposit: number | undefined;
}

export interface DepositByChainAndByToken extends DepositByChain {
  tokenSymbol: string;
}

export interface DepositByVAnchor {
  vAnchorAddress: string;
  deposit: number | undefined;
}

export const GetVAnchorDepositByChain = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string
): Promise<DepositByChain> => {
  const query = `
    query Deposit {
      vanchorDeposit(id: "${vAnchorAddress.toLowerCase()}") {
        deposit
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
    deposit:
      result.data.vanchorDeposit?.deposit == null
        ? undefined
        : +result.data.vanchorDeposit.deposit,
    subgraphUrl: subgraphUrl,
  };
};

export const GetVAnchorDepositByChains = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string
): Promise<Array<DepositByChain>> => {
  const promises: Array<Promise<DepositByChain>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorDepositByChain(subgraphUrl, vAnchorAddress));
  }

  return await Promise.all(promises);
};

export const GetVAnchorsDepositByChain = async (
  subgraphUrl: SubgraphUrl,
  vanchorAddresses: Array<string>
): Promise<Array<DepositByVAnchor>> => {
  const query = `
  query DepositByVAnchor {
  vanchorDeposits(
    where: {id_in: [${vanchorAddresses
      .map((address) => '"' + address.toLowerCase() + '"')
      .join(',')}]}
  ) {
    id
    deposit
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

  return result.data.vanchorDeposits?.map((item: any) => {
    return {
      deposit: +item.deposit,
      vAnchorAddress: item?.id,
    };
  });
};

export const GetVAnchorsDepositByChains = async (
  subgraphUrls: Array<SubgraphUrl>,
  vanchorAddresses: Array<string>
): Promise<Array<Array<DepositByVAnchor>>> => {
  const promises: Array<Promise<Array<DepositByVAnchor>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorsDepositByChain(subgraphUrl, vanchorAddresses));
  }

  return await Promise.all(promises);
};

export const GetVAnchorDepositByChainAndByToken = async (
  subgraphUrl: SubgraphUrl,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<DepositByChainAndByToken> => {
  const query = `
  query MyQuery {
  vanchorDepositByTokens(
    first: 1
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    deposit
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
    deposit:
      result.data.vanchorDepositByTokens &&
      result.data.vanchorDepositByTokens.length > 0
        ? +result.data.vanchorDepositByTokens[0].deposit
        : undefined,
    subgraphUrl: subgraphUrl,
    tokenSymbol: tokenSymbol,
  };
};

export const GetVAnchorDepositByChainsAndByToken = async (
  subgraphUrls: Array<SubgraphUrl>,
  vAnchorAddress: string,
  tokenSymbol: string
): Promise<Array<DepositByChainAndByToken>> => {
  const promises: Array<Promise<DepositByChainAndByToken>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(
      GetVAnchorDepositByChainAndByToken(
        subgraphUrl,
        vAnchorAddress,
        tokenSymbol
      )
    );
  }

  return await Promise.all(promises);
};
