import { execute } from "../../.graphclient"

export interface TotalValueLockedByChain { chainName: string, totalValueLocked: number }

export interface TotalValueLockedByChainAndByToken extends TotalValueLockedByChain { tokenSymbol: string }

export interface TotalValueLockedByVAnchor { vAnchorAddress: string, totalValueLocked: number }

export const GetVAnchorTotalValueLockedByChain = async (chainName: string, vAnchorAddress: string): Promise<TotalValueLockedByChain> => {
  const query = `
  query TotalValueLocked {
  vanchorTotalValueLocked(id: "${vAnchorAddress.toLowerCase()}"){
    totalValueLocked
  }
}
`
  const result = await execute(query, {}, {
    chainName,
  })

  return {
    totalValueLocked: result.data.vanchorTotalValueLocked?.totalValueLocked,
    chainName: chainName
  }
}

export const GetVAnchorTotalValueLockedByChains = async (chainNames: Array<string>, vAnchorAddress: string): Promise<Array<TotalValueLockedByChain>> => {
  const promises: Array<Promise<TotalValueLockedByChain>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorTotalValueLockedByChain(chainName, vAnchorAddress))
  }

  return await Promise.all(promises);
}

export const GetVAnchorsTotalValueLockedByChain = async (chainName: string, vanchorAddresses: Array<string>): Promise<Array<TotalValueLockedByVAnchor>> => {
  const query = `
  query TotalValueLockedByVAnchor {
  vanchorTotalValueLockeds(
    where: {id_in: [${vanchorAddresses.map((address) => '\"' + address.toLowerCase() + '\"').join(",")}]}
  ) {
    id
    totalValueLocked
  }
}
`
  const result = await execute(query, {}, {
    chainName,
  })

  return result.data.vanchorTotalValueLockeds?.map((item: any) => {
    return {
      totalValueLocked: item?.totalValueLocked,
      vAnchorAddress: item?.id
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

export const GetVAnchorTotalValueLockedByChainAndByToken = async (chainName: string, vAnchorAddress: string, tokenSymbol: string): Promise<TotalValueLockedByChainAndByToken> => {
  const query = `
  query MyQuery {
  vanchorTotalValueLockedByTokens(
    first: 1
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    totalValueLocked
  }
}
`
  const result = await execute(query, {}, {
    chainName,
  })


  return {
    totalValueLocked: result.data.vanchorTotalValueLockedByTokens && result.data.vanchorTotalValueLockedByTokens.length > 0 ? result.data.vanchorTotalValueLockedByTokens[0].totalValueLocked : undefined,
    chainName: chainName,
    tokenSymbol: tokenSymbol
  }
}

export const GetVAnchorTotalValueLockedByChainsAndByToken = async (chainNames: Array<string>, vAnchorAddress: string, tokenSymbol: string): Promise<Array<TotalValueLockedByChainAndByToken>> => {
  const promises: Array<Promise<TotalValueLockedByChainAndByToken>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorTotalValueLockedByChainAndByToken(chainName, vAnchorAddress, tokenSymbol))
  }

  return await Promise.all(promises);
}



