import { execute } from "../../.graphclient"

export interface TotalRelayerFeeByChain { chainName: string, totalRelayerFee: number }

export interface TotalRelayerFeeByChainAndByToken extends TotalRelayerFeeByChain { tokenSymbol: string }

export interface TotalRelayerFeeByVAnchor { vAnchorAddress: string, totalRelayerFee: number }

export const GetVAnchorTotalRelayerFeeByChain = async (chainName: string, vAnchorAddress: string): Promise<TotalRelayerFeeByChain> => {
    const query = `
  query TotalRelayerFee {
  vanchorTotalRelayerFee(id: "${vAnchorAddress.toLowerCase()}"){

    totalRelayerFee
  }
}
`
    const result = await execute(query, {}, {
        chainName,
    })

    return {
        totalRelayerFee: result.data.vanchorTotalRelayerFee?.totalRelayerFee,
        chainName: chainName
    }
}

export const GetVAnchorTotalRelayerFeeByChains = async (chainNames: Array<string>, vAnchorAddress: string): Promise<Array<TotalRelayerFeeByChain>> => {
    const promises: Array<Promise<TotalRelayerFeeByChain>> = [];

    for (const chainName of chainNames) {
        promises.push(GetVAnchorTotalRelayerFeeByChain(chainName, vAnchorAddress))

    }

    return await Promise.all(promises);
}

export const GetVAnchorsTotalRelayerFeeByChain = async (chainName: string, vanchorAddresses: Array<string>): Promise<Array<TotalRelayerFeeByVAnchor>> => {
    const query = `
  query TotalRelayerFeeByVAnchor {
  vanchorTotalRelayerFees(
    where: {id_in: [${vanchorAddresses.map((address) => '"' + address.toLowerCase() + '"').join(",")}]}
  ) {
    id
    totalRelayerFee
  }
}
`
    const result = await execute(query, {}, {
        chainName,
    })

    return result.data.vanchorTotalRelayerFees?.map((item: any) => {
        return {
            totalRelayerFee: item?.totalRelayerFee,
            vAnchorAddress: item?.id
        }
    })

}

export const GetVAnchorsTotalRelayerFeeByChains = async (chainNames: Array<string>, vanchorAddresses: Array<string>): Promise<Array<Array<TotalRelayerFeeByVAnchor>>> => {
    const promises: Array<Promise<Array<TotalRelayerFeeByVAnchor>>> = [];

    for (const chainName of chainNames) {
        promises.push(GetVAnchorsTotalRelayerFeeByChain(chainName, vanchorAddresses))
    }

    return await Promise.all(promises);

}

export const GetVAnchorTotalRelayerFeeByChainAndByToken = async (chainName: string, vAnchorAddress: string, tokenSymbol: string): Promise<TotalRelayerFeeByChainAndByToken> => {
    const query = `
  query MyQuery {
  vanchorTotalRelayerFeeByTokens(
    first: 1
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    totalRelayerFee
  }
}
`
    const result = await execute(query, {}, {
        chainName,
    })


    return {
        totalRelayerFee: result.data.vanchorTotalRelayerFeeByTokens && result.data.vanchorTotalRelayerFeeByTokens.length > 0 ? result.data.vanchorTotalRelayerFeeByTokens[0].totalRelayerFee : undefined,
        chainName: chainName,
        tokenSymbol: tokenSymbol
    }
}

export const GetVAnchorTotalRelayerFeeByChainsAndByToken = async (chainNames: Array<string>, vAnchorAddress: string, tokenSymbol: string): Promise<Array<TotalRelayerFeeByChainAndByToken>> => {
    const promises: Array<Promise<TotalRelayerFeeByChainAndByToken>> = [];

    for (const chainName of chainNames) {
        promises.push(GetVAnchorTotalRelayerFeeByChainAndByToken(chainName, vAnchorAddress, tokenSymbol))

    }

    return await Promise.all(promises);
}



