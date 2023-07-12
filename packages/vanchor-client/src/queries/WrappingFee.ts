import { execute } from "../../.graphclient"

export interface TotalWrappingFeeByChain { chainName: string, totalWrappingFee: number }

export interface TotalWrappingFeeByChainAndByToken extends TotalWrappingFeeByChain { tokenSymbol: string }

export interface TotalWrappingFeeByVAnchor { vAnchorAddress: string, totalWrappingFee: number }

export const GetVAnchorTotalWrappingFeeByChain = async (chainName: string, vAnchorAddress: string): Promise<TotalWrappingFeeByChain> => {
    const query = `
  query TotalWrappingFee {
  vanchorTotalWrappingFee(id: "${vAnchorAddress.toLowerCase()}"){

    totalWrappingFee
  }
}
`
    const result = await execute(query, {}, {
        chainName,
    })

    return {
        totalWrappingFee: result.data.vanchorTotalWrappingFee?.totalWrappingFee,
        chainName: chainName
    }
}

export const GetVAnchorTotalWrappingFeeByChains = async (chainNames: Array<string>, vAnchorAddress: string): Promise<Array<TotalWrappingFeeByChain>> => {
    const promises: Array<Promise<TotalWrappingFeeByChain>> = [];

    for (const chainName of chainNames) {
        promises.push(GetVAnchorTotalWrappingFeeByChain(chainName, vAnchorAddress))

    }

    return await Promise.all(promises);
}

export const GetVAnchorsTotalWrappingFeeByChain = async (chainName: string, vanchorAddresses: Array<string>): Promise<Array<TotalWrappingFeeByVAnchor>> => {
    const query = `
  query TotalWrappingFeeByVAnchor {
  vanchorTotalWrappingFees(
    where: {id_in: [${vanchorAddresses.map((address) => '"' + address.toLowerCase() + '"').join(",")}]}
  ) {
    id
    totalWrappingFee
  }
}
`
    const result = await execute(query, {}, {
        chainName,
    })

    return result.data.vanchorTotalWrappingFees?.map((item: any) => {
        return {
            totalWrappingFee: item?.totalWrappingFee,
            vAnchorAddress: item?.id
        }
    })

}

export const GetVAnchorsTotalWrappingFeeByChains = async (chainNames: Array<string>, vanchorAddresses: Array<string>): Promise<Array<Array<TotalWrappingFeeByVAnchor>>> => {
    const promises: Array<Promise<Array<TotalWrappingFeeByVAnchor>>> = [];

    for (const chainName of chainNames) {
        promises.push(GetVAnchorsTotalWrappingFeeByChain(chainName, vanchorAddresses))
    }

    return await Promise.all(promises);

}

export const GetVAnchorTotalWrappingFeeByChainAndByToken = async (chainName: string, vAnchorAddress: string, tokenSymbol: string): Promise<TotalWrappingFeeByChainAndByToken> => {
    const query = `
  query MyQuery {
  vanchorTotalWrappingFeeByTokens(
    first: 1
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    totalWrappingFee
  }
}
`
    const result = await execute(query, {}, {
        chainName,
    })


    return {
        totalWrappingFee: result.data.vanchorTotalWrappingFeeByTokens && result.data.vanchorTotalWrappingFeeByTokens.length > 0 ? result.data.vanchorTotalWrappingFeeByTokens[0].totalWrappingFee : undefined,
        chainName: chainName,
        tokenSymbol: tokenSymbol
    }
}

export const GetVAnchorTotalWrappingFeeByChainsAndByToken = async (chainNames: Array<string>, vAnchorAddress: string, tokenSymbol: string): Promise<Array<TotalWrappingFeeByChainAndByToken>> => {
    const promises: Array<Promise<TotalWrappingFeeByChainAndByToken>> = [];

    for (const chainName of chainNames) {
        promises.push(GetVAnchorTotalWrappingFeeByChainAndByToken(chainName, vAnchorAddress, tokenSymbol))

    }

    return await Promise.all(promises);
}



