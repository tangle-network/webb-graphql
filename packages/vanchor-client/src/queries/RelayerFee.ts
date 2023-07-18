import { execute } from "../../.graphclient"

export interface TotalRelayerFeeByChain { subgraphUrl: SubgraphUrl, totalRelayerFee: number }

export interface TotalRelayerFeeByChainAndByToken extends TotalRelayerFeeByChain { tokenSymbol: string }

export interface TotalRelayerFeeByVAnchor { vAnchorAddress: string, totalRelayerFee: number }

export const GetVAnchorTotalRelayerFeeByChain = async (subgraphUrl: SubgraphUrl, vAnchorAddress: string): Promise<TotalRelayerFeeByChain> => {
    const query = `
  query TotalRelayerFee {
  vanchorTotalRelayerFee(id: "${vAnchorAddress.toLowerCase()}"){

    totalRelayerFee
  }
}
`
    const result = await execute(query, {}, {
        subgraphUrl,
    })

    return {
        totalRelayerFee: result.data.vanchorTotalRelayerFee?.totalRelayerFee,
        subgraphUrl: subgraphUrl
    }
}

export const GetVAnchorTotalRelayerFeeByChains = async (subgraphUrls: Array<SubgraphUrl>, vAnchorAddress: string): Promise<Array<TotalRelayerFeeByChain>> => {
    const promises: Array<Promise<TotalRelayerFeeByChain>> = [];

    for (const subgraphUrl of subgraphUrls) {
        promises.push(GetVAnchorTotalRelayerFeeByChain(subgraphUrl, vAnchorAddress))

    }

    return await Promise.all(promises);
}

export const GetVAnchorsTotalRelayerFeeByChain = async (subgraphUrl: SubgraphUrl, vanchorAddresses: Array<string>): Promise<Array<TotalRelayerFeeByVAnchor>> => {
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
        subgraphUrl,
    })

    return result.data.vanchorTotalRelayerFees?.map((item: any) => {
        return {
            totalRelayerFee: item?.totalRelayerFee,
            vAnchorAddress: item?.id
        }
    })

}

export const GetVAnchorsTotalRelayerFeeByChains = async (subgraphUrls: Array<SubgraphUrl>, vanchorAddresses: Array<string>): Promise<Array<Array<TotalRelayerFeeByVAnchor>>> => {
    const promises: Array<Promise<Array<TotalRelayerFeeByVAnchor>>> = [];

    for (const subgraphUrl of subgraphUrls) {
        promises.push(GetVAnchorsTotalRelayerFeeByChain(subgraphUrl, vanchorAddresses))
    }

    return await Promise.all(promises);

}

export const GetVAnchorTotalRelayerFeeByChainAndByToken = async (subgraphUrl: SubgraphUrl, vAnchorAddress: string, tokenSymbol: string): Promise<TotalRelayerFeeByChainAndByToken> => {
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
        subgraphUrl,
    })


    return {
        totalRelayerFee: result.data.vanchorTotalRelayerFeeByTokens && result.data.vanchorTotalRelayerFeeByTokens.length > 0 ? result.data.vanchorTotalRelayerFeeByTokens[0].totalRelayerFee : undefined,
        subgraphUrl: subgraphUrl,
        tokenSymbol: tokenSymbol
    }
}

export const GetVAnchorTotalRelayerFeeByChainsAndByToken = async (subgraphUrls: Array<SubgraphUrl>, vAnchorAddress: string, tokenSymbol: string): Promise<Array<TotalRelayerFeeByChainAndByToken>> => {
    const promises: Array<Promise<TotalRelayerFeeByChainAndByToken>> = [];

    for (const subgraphUrl of subgraphUrls) {
        promises.push(GetVAnchorTotalRelayerFeeByChainAndByToken(subgraphUrl, vAnchorAddress, tokenSymbol))

    }

    return await Promise.all(promises);
}



