import { execute } from "../../.graphclient"
import { DateUtil } from "../utils/date"
import { SubgraphUrl } from "../../config"

export interface RelayerFeeByChainHistoryItem { subgraphUrl: SubgraphUrl, relayerFee: number, startInterval: Date, endInterval: Date, vAnchorAddress: string }

export interface RelayerFeeByChainAndByTokenHistoryItem extends RelayerFeeByChainHistoryItem { tokenSymbol: string }

export interface RelayerFeeByVAnchorHistoryItem { vAnchorAddress: string, relayerFee: number }

export const GetVAnchorRelayerFeeByChainHistory = async (subgraphUrl: SubgraphUrl, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<RelayerFeeByChainHistoryItem> => {

  const query = `
  query RelayerFee {
  vanchorRelayerFeeEvery15Mins(
    where: {endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    startInterval
    relayerFee
    vAnchorAddress
    endInterval
  }
}
`
  const result = await execute(query, {}, {
    subgraphUrl,
  })

  return result.data.vanchorRelayerFeeEvery15Mins?.map((item: any) => {
    return {
      relayerFee: item?.relayerFee,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress
    }
  });
}


export const GetVAnchorRelayerFeeByChainsHistory = async (subgraphUrls: Array<SubgraphUrl>, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<RelayerFeeByChainHistoryItem>> => {
  const promises: Array<Promise<RelayerFeeByChainHistoryItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorRelayerFeeByChainHistory(subgraphUrl, vAnchorAddress, startTimestamp, endTimestamp))
  }

  return await Promise.all(promises);
}


export const GetVAnchorsRelayerFeeByChainHistory = async (subgraphUrl: SubgraphUrl, vanchorAddresses: Array<string>, startTimestamp: Date, endTimestamp: Date): Promise<Array<RelayerFeeByVAnchorHistoryItem>> => {

  const query = `
  query RelayerFeeByVAnchor {
  vanchorRelayerFeeEvery15Mins(
    where: { endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}", vAnchorAddress_in: [${vanchorAddresses.map((address) => '"' + address.toLowerCase() + '"').join(",")}]}
  ) {
    id
    startInterval
    relayerFee
    endInterval,
    vAnchorAddress
  }
}
`
  const result = await execute(query, {}, {
    subgraphUrl,
  })

  const relayerFeeMap: { [vanchorAddress: string]: number } = {};


  result.data.vanchorRelayerFeeEvery15Mins?.map((item: any) => {
    if (!relayerFeeMap[item?.vAnchorAddress]) {
      relayerFeeMap[item?.vAnchorAddress] = 0;
    }

    relayerFeeMap[item?.vAnchorAddress] += item?.relayerFee;
  })


  const relayerFeeByVAnchorHistoryItems: Array<RelayerFeeByVAnchorHistoryItem> = [];

  for (const key in relayerFeeMap) {
    relayerFeeByVAnchorHistoryItems.push({
      vAnchorAddress: key,
      relayerFee: relayerFeeMap[key]
    })
  }

  return relayerFeeByVAnchorHistoryItems;

}

export const GetVAnchorsRelayerFeeByChainsHistory = async (subgraphUrls: Array<SubgraphUrl>, vanchorAddresses: Array<string>, startTimestamp: Date, endTimestamp: Date): Promise<Array<Array<RelayerFeeByVAnchorHistoryItem>>> => {
  const promises: Array<Promise<Array<RelayerFeeByVAnchorHistoryItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorsRelayerFeeByChainHistory(subgraphUrl, vanchorAddresses, startTimestamp, endTimestamp));
  }

  return await Promise.all(promises);

}



export const GetVAnchorRelayerFeeByChainAndByTokenHistory = async (subgraphUrl: SubgraphUrl, vAnchorAddress: string, tokenSymbol: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<RelayerFeeByChainAndByTokenHistoryItem>> => {
  const query = `
  query MyQuery {
  vanchorRelayerFeeByTokenEvery15Mins(
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}", endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}"}
  ) {
    relayerFee,
    startInterval,
    endInterval,
    vAnchorAddress
  }
}
`
  const result = await execute(query, {}, {
    subgraphUrl,
  })

  return result.data.vanchorRelayerFeeByTokenEvery15Mins?.map((item: any) => {
    return {
      relayerFee: item?.relayerFee,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress
    }
  });
}

export const GetVAnchorRelayerFeeByChainsAndByTokenHistory = async (subgraphUrls: Array<SubgraphUrl>, vAnchorAddress: string, tokenSymbol: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<Array<RelayerFeeByChainAndByTokenHistoryItem>>> => {
  const promises: Array<Promise<Array<RelayerFeeByChainAndByTokenHistoryItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorRelayerFeeByChainAndByTokenHistory(subgraphUrl, vAnchorAddress, tokenSymbol, startTimestamp, endTimestamp))
  }

  return await Promise.all(promises);
}