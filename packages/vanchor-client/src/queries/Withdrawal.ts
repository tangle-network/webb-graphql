import { execute } from "../../.graphclient"
import { SubgraphUrl } from "../config"

export interface WithdrawalByChain { subgraphUrl: SubgraphUrl, withdrawal: number }

export interface WithdrawalByChainAndByToken extends WithdrawalByChain { tokenSymbol: string }

export interface WithdrawalByVAnchor { vAnchorAddress: string, withdrawal: number }

export const GetVAnchorWithdrawalByChain = async (subgraphUrl: SubgraphUrl, vAnchorAddress: string): Promise<WithdrawalByChain> => {
  const query = `
  query Withdrawal {
  vanchorWithdrawal(id: "${vAnchorAddress.toLowerCase()}"){

    withdrawal
  }
}
`
  const result = await execute(query, {}, {
    subgraphUrl,
  })

  return {
    withdrawal: result.data.vanchorWithdrawal?.withdrawal,
    subgraphUrl: subgraphUrl
  }
}

export const GetVAnchorWithdrawalByChains = async (subgraphUrls: Array<SubgraphUrl>, vAnchorAddress: string): Promise<Array<WithdrawalByChain>> => {
  const promises: Array<Promise<WithdrawalByChain>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorWithdrawalByChain(subgraphUrl, vAnchorAddress))

  }

  return await Promise.all(promises);
}

export const GetVAnchorsWithdrawalByChain = async (subgraphUrl: SubgraphUrl, vanchorAddresses: Array<string>): Promise<Array<WithdrawalByVAnchor>> => {
  const query = `
  query WithdrawalByVAnchor {
  vanchorWithdrawals(
    where: {id_in: [${vanchorAddresses.map((address) => '"' + address.toLowerCase() + '"').join(",")}]}
  ) {
    id
    withdrawal
  }
}
`
  const result = await execute(query, {}, {
    subgraphUrl,
  })

  return result.data.vanchorWithdrawals?.map((item: any) => {
    return {
      withdrawal: item?.withdrawal,
      vAnchorAddress: item?.id
    }
  })

}

export const GetVAnchorsWithdrawalByChains = async (subgraphUrls: Array<SubgraphUrl>, vanchorAddresses: Array<string>): Promise<Array<Array<WithdrawalByVAnchor>>> => {
  const promises: Array<Promise<Array<WithdrawalByVAnchor>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorsWithdrawalByChain(subgraphUrl, vanchorAddresses))
  }

  return await Promise.all(promises);

}

export const GetVAnchorWithdrawalByChainAndByToken = async (subgraphUrl: SubgraphUrl, vAnchorAddress: string, tokenSymbol: string): Promise<WithdrawalByChainAndByToken> => {
  const query = `
  query MyQuery {
  vanchorWithdrawalByTokens(
    first: 1
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    withdrawal
  }
}
`
  const result = await execute(query, {}, {
    subgraphUrl,
  })


  return {
    withdrawal: result.data.vanchorWithdrawalByTokens && result.data.vanchorWithdrawalByTokens.length > 0 ? result.data.vanchorWithdrawalByTokens[0].withdrawal : undefined,
    subgraphUrl: subgraphUrl,
    tokenSymbol: tokenSymbol
  }
}

export const GetVAnchorWithdrawalByChainsAndByToken = async (subgraphUrls: Array<SubgraphUrl>, vAnchorAddress: string, tokenSymbol: string): Promise<Array<WithdrawalByChainAndByToken>> => {
  const promises: Array<Promise<WithdrawalByChainAndByToken>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorWithdrawalByChainAndByToken(subgraphUrl, vAnchorAddress, tokenSymbol))

  }

  return await Promise.all(promises);
}



