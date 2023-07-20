import { execute } from "../../.graphclient"
import { DateUtil } from "../utils/date"
import { SubgraphUrl } from "../config"

export interface WrappingFeeByChainHistoryItem { subgraphUrl: SubgraphUrl, wrappingFee: number, startInterval: Date, endInterval: Date, vAnchorAddress: string }

export interface WrappingFeeByChainAndByTokenHistoryItem extends WrappingFeeByChainHistoryItem { tokenSymbol: string }

export interface WrappingFeeByVAnchorHistoryItem { vAnchorAddress: string, wrappingFee: number }

export const GetVAnchorWrappingFeeByChainHistory = async (subgraphUrl: SubgraphUrl, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<WrappingFeeByChainHistoryItem> => {

  const query = `
  query WrappingFee {
  vanchorWrappingFeeEvery15Mins(
    where: {endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    startInterval
    wrappingFee
    vAnchorAddress
    endInterval
  }
}
`
  const result = await execute(query, {}, {
    subgraphUrl,
  })

  return result.data.vanchorWrappingFeeEvery15Mins?.map((item: any) => {
    return {
      wrappingFee: item?.wrappingFee,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress
    }
  });
}


export const GetVAnchorWrappingFeeByChainsHistory = async (subgraphUrls: Array<SubgraphUrl>, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<WrappingFeeByChainHistoryItem>> => {
  const promises: Array<Promise<WrappingFeeByChainHistoryItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorWrappingFeeByChainHistory(subgraphUrl, vAnchorAddress, startTimestamp, endTimestamp))
  }

  return await Promise.all(promises);
}


export const GetVAnchorsWrappingFeeByChainHistory = async (subgraphUrl: SubgraphUrl, vanchorAddresses: Array<string>, startTimestamp: Date, endTimestamp: Date): Promise<Array<WrappingFeeByVAnchorHistoryItem>> => {

  const query = `
  query WrappingFeeByVAnchor {
  vanchorWrappingFeeEvery15Mins(
    where: { endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}", vAnchorAddress_in: [${vanchorAddresses.map((address) => '"' + address.toLowerCase() + '"').join(",")}]}
  ) {
    id
    startInterval
    wrappingFee
    endInterval,
    vAnchorAddress
  }
}
`
  const result = await execute(query, {}, {
    subgraphUrl,
  })

  const wrappingFeeMap: { [vanchorAddress: string]: number } = {};


  result.data.vanchorWrappingFeeEvery15Mins?.map((item: any) => {
    if (!wrappingFeeMap[item?.vAnchorAddress]) {
      wrappingFeeMap[item?.vAnchorAddress] = 0;
    }

    wrappingFeeMap[item?.vAnchorAddress] += item?.wrappingFee;
  })


  const wrappingFeeByVAnchorHistoryItems: Array<WrappingFeeByVAnchorHistoryItem> = [];

  for (const key in wrappingFeeMap) {
    wrappingFeeByVAnchorHistoryItems.push({
      vAnchorAddress: key,
      wrappingFee: wrappingFeeMap[key]
    })
  }

  return wrappingFeeByVAnchorHistoryItems;

}

export const GetVAnchorsWrappingFeeByChainsHistory = async (subgraphUrls: Array<SubgraphUrl>, vanchorAddresses: Array<string>, startTimestamp: Date, endTimestamp: Date): Promise<Array<Array<WrappingFeeByVAnchorHistoryItem>>> => {
  const promises: Array<Promise<Array<WrappingFeeByVAnchorHistoryItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorsWrappingFeeByChainHistory(subgraphUrl, vanchorAddresses, startTimestamp, endTimestamp));
  }

  return await Promise.all(promises);

}



export const GetVAnchorWrappingFeeByChainAndByTokenHistory = async (subgraphUrl: SubgraphUrl, vAnchorAddress: string, tokenSymbol: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<WrappingFeeByChainAndByTokenHistoryItem>> => {
  const query = `
  query MyQuery {
  vanchorWrappingFeeByTokenEvery15Mins(
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}", endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}"}
  ) {
    wrappingFee,
    startInterval,
    endInterval,
    vAnchorAddress
  }
}
`
  const result = await execute(query, {}, {
    subgraphUrl,
  })

  return result.data.vanchorWrappingFeeByTokenEvery15Mins?.map((item: any) => {
    return {
      wrappingFee: item?.wrappingFee,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress
    }
  });
}

export const GetVAnchorWrappingFeeByChainsAndByTokenHistory = async (subgraphUrls: Array<SubgraphUrl>, vAnchorAddress: string, tokenSymbol: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<Array<WrappingFeeByChainAndByTokenHistoryItem>>> => {
  const promises: Array<Promise<Array<WrappingFeeByChainAndByTokenHistoryItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorWrappingFeeByChainAndByTokenHistory(subgraphUrl, vAnchorAddress, tokenSymbol, startTimestamp, endTimestamp))
  }

  return await Promise.all(promises);
}