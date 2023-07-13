import { execute } from "../../.graphclient"

export interface DepositByChain { chainName: string, deposit: number }

export interface DepositByChainAndByToken extends DepositByChain { tokenSymbol: string }

export interface DepositByVAnchor { vAnchorAddress: string, deposit: number }

export const GetVAnchorDepositByChain = async (chainName: string, vAnchorAddress: string): Promise<DepositByChain> => {
  const query = `
  query Deposit {
  vanchorDeposit(id: "${vAnchorAddress.toLowerCase()}"){

    deposit
  }
}
`
  const result = await execute(query, {}, {
    chainName,
  })

  return {
    deposit: result.data.vanchorDeposit?.deposit,
    chainName: chainName
  }
}

export const GetVAnchorDepositByChains = async (chainNames: Array<string>, vAnchorAddress: string): Promise<Array<DepositByChain>> => {
  const promises: Array<Promise<DepositByChain>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorDepositByChain(chainName, vAnchorAddress))

  }

  return await Promise.all(promises);
}

export const GetVAnchorsDepositByChain = async (chainName: string, vanchorAddresses: Array<string>): Promise<Array<DepositByVAnchor>> => {
  const query = `
  query DepositByVAnchor {
  vanchorDeposits(
    where: {id_in: [${vanchorAddresses.map((address) => '"' + address.toLowerCase() + '"').join(",")}]}
  ) {
    id
    deposit
  }
}
`
  const result = await execute(query, {}, {
    chainName,
  })

  return result.data.vanchorDeposits?.map((item: any) => {
    return {
      deposit: item?.deposit,
      vAnchorAddress: item?.id
    }
  })

}

export const GetVAnchorsDepositByChains = async (chainNames: Array<string>, vanchorAddresses: Array<string>): Promise<Array<Array<DepositByVAnchor>>> => {
  const promises: Array<Promise<Array<DepositByVAnchor>>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorsDepositByChain(chainName, vanchorAddresses))
  }

  return await Promise.all(promises);

}

export const GetVAnchorDepositByChainAndByToken = async (chainName: string, vAnchorAddress: string, tokenSymbol: string): Promise<DepositByChainAndByToken> => {
  const query = `
  query MyQuery {
  vanchorDepositByTokens(
    first: 1
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    deposit
  }
}
`
  const result = await execute(query, {}, {
    chainName,
  })


  return {
    deposit: result.data.vanchorDepositByTokens && result.data.vanchorDepositByTokens.length > 0 ? result.data.vanchorDepositByTokens[0].deposit : undefined,
    chainName: chainName,
    tokenSymbol: tokenSymbol
  }
}

export const GetVAnchorDepositByChainsAndByToken = async (chainNames: Array<string>, vAnchorAddress: string, tokenSymbol: string): Promise<Array<DepositByChainAndByToken>> => {
  const promises: Array<Promise<DepositByChainAndByToken>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorDepositByChainAndByToken(chainName, vAnchorAddress, tokenSymbol))

  }

  return await Promise.all(promises);
}



