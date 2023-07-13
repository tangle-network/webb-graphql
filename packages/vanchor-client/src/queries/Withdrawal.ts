import { execute } from "../../.graphclient"

export interface WithdrawalByChain { chainName: string, withdrawal: number }

export interface WithdrawalByChainAndByToken extends WithdrawalByChain { tokenSymbol: string }

export interface WithdrawalByVAnchor { vAnchorAddress: string, withdrawal: number }

export const GetVAnchorWithdrawalByChain = async (chainName: string, vAnchorAddress: string): Promise<WithdrawalByChain> => {
  const query = `
  query Withdrawal {
  vanchorWithdrawal(id: "${vAnchorAddress.toLowerCase()}"){

    withdrawal
  }
}
`
  const result = await execute(query, {}, {
    chainName,
  })

  return {
    withdrawal: result.data.vanchorWithdrawal?.withdrawal,
    chainName: chainName
  }
}

export const GetVAnchorWithdrawalByChains = async (chainNames: Array<string>, vAnchorAddress: string): Promise<Array<WithdrawalByChain>> => {
  const promises: Array<Promise<WithdrawalByChain>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorWithdrawalByChain(chainName, vAnchorAddress))

  }

  return await Promise.all(promises);
}

export const GetVAnchorsWithdrawalByChain = async (chainName: string, vanchorAddresses: Array<string>): Promise<Array<WithdrawalByVAnchor>> => {
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
    chainName,
  })

  return result.data.vanchorWithdrawals?.map((item: any) => {
    return {
      withdrawal: item?.withdrawal,
      vAnchorAddress: item?.id
    }
  })

}

export const GetVAnchorsWithdrawalByChains = async (chainNames: Array<string>, vanchorAddresses: Array<string>): Promise<Array<Array<WithdrawalByVAnchor>>> => {
  const promises: Array<Promise<Array<WithdrawalByVAnchor>>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorsWithdrawalByChain(chainName, vanchorAddresses))
  }

  return await Promise.all(promises);

}

export const GetVAnchorWithdrawalByChainAndByToken = async (chainName: string, vAnchorAddress: string, tokenSymbol: string): Promise<WithdrawalByChainAndByToken> => {
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
    chainName,
  })


  return {
    withdrawal: result.data.vanchorWithdrawalByTokens && result.data.vanchorWithdrawalByTokens.length > 0 ? result.data.vanchorWithdrawalByTokens[0].withdrawal : undefined,
    chainName: chainName,
    tokenSymbol: tokenSymbol
  }
}

export const GetVAnchorWithdrawalByChainsAndByToken = async (chainNames: Array<string>, vAnchorAddress: string, tokenSymbol: string): Promise<Array<WithdrawalByChainAndByToken>> => {
  const promises: Array<Promise<WithdrawalByChainAndByToken>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorWithdrawalByChainAndByToken(chainName, vAnchorAddress, tokenSymbol))

  }

  return await Promise.all(promises);
}



