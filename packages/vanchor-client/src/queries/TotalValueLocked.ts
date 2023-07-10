import { execute } from "../../.graphclient"

export interface TotalValueLockedByChain { chainName: string, totalValueLocked: number }

export interface TotalValueLockedByChainAndByToken extends TotalValueLockedByChain { tokenSymbol: string }

export interface TotalValueLockedByVAnchor { vAnchorAddress: string, totalValueLocked: number }

export const GetVAnchorTotalValueLockedByChain = async (chainName: string, vanchorAddress: string): Promise<TotalValueLockedByChain> => {
  const query = `
  query TotalValueLocked {
  vanchorTotalValueLocked(id: "${vanchorAddress}"){
    totalValueLocked
  }
}
`
  const result = await execute(query, {}, {
    chainName,
  })

  return {
    totalValueLocked: result.data.vanchorTotalValueLocked.totalValueLocked,
    chainName: chainName
  }
}


export const GetVAnchorTotalValueLockedByChains = async (chainNames: Array<string>, vanchorAddress: string): Promise<Array<TotalValueLockedByChain>> => {
  const promises: Array<Promise<TotalValueLockedByChain>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorTotalValueLockedByChain(chainName, vanchorAddress))
  }

  return await Promise.all(promises);
}

export const GetVAnchorsTotalValueLockedByChain = async (chainName: string, vanchorAddresses: Array<string>): Promise<Array<TotalValueLockedByVAnchor>> => {
  const query = `
  query TotalValueLockedByVAnchor {
  vanchorTotalValueLockeds(
    where: {id_in: [${vanchorAddresses.map((address) => '\"' + address + '\"').join(",")}]}
  ) {
    id
    totalValueLocked
  }
}
`
  const result = await execute(query, {}, {
    chainName,
  })

  return result.data.vanchorTotalValueLockeds.map((item) => {
    return {
      totalValueLocked: item.totalValueLocked,
      vAnchorAddress: item.id
    }
  })

}


export const GetVAnchorsTotalValueLockedByChains = async (chainNames: Array<string>, vanchorAddresses: Array<string>): Promise<Array<Array<TotalValueLockedByVAnchor>>> => {
  const promises: Array<Promise<Array<TotalValueLockedByVAnchor>>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorsTotalValueLockedByChain(chainName, vanchorAddresses))
  }

  return await Promise.all(promises);

}


export const GetVAnchorTotalValueLockedByChainAndByToken = async (chainName: string, vanchorAddress: string, tokenSymbol: string): Promise<TotalValueLockedByChainAndByToken> => {
  const query = `
  query MyQuery {
  vanchorTotalValueLockedByTokens(
    first: 1
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vanchorAddress}"}
  ) {
    totalValueLocked
  }
}
`
  const result = await execute(query, {}, {
    chainName,
  })

  return {
    totalValueLocked: result.data.vanchorTotalValueLocked[0]?.totalValueLocked,
    chainName: chainName,
    tokenSymbol: tokenSymbol
  }
}


export const GetVAnchorTotalValueLockedByChainsAndByToken = async (chainNames: Array<string>, vanchorAddress: string, tokenSymbol: string): Promise<Array<TotalValueLockedByChainAndByToken>> => {
  const promises: Array<Promise<TotalValueLockedByChainAndByToken>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorTotalValueLockedByChainAndByToken(chainName, vanchorAddress, tokenSymbol))
  }

  return await Promise.all(promises);
}



