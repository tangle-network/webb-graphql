import { execute } from "../../.graphclient"
import { DateUtil } from "../utils/date"

export interface RelayerFeeByChainHistoryItem { chainName: string, relayerFee: number, startInterval: Date, endInterval: Date, vAnchorAddress: string }

export interface RelayerFeeByChainAndByTokenHistoryItem extends RelayerFeeByChainHistoryItem { tokenSymbol: string }

export interface RelayerFeeByVAnchorHistoryItem { vAnchorAddress: string, relayerFee: number }

export const GetVAnchorRelayerFeeByChainHistory = async (chainName: string, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<RelayerFeeByChainHistoryItem> => {

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
    chainName,
  })

  return result.data.vanchorRelayerFeeEvery15Mins?.map((item: any) => {
    return {
      relayerFee: item?.relayerFee,
      chainName: chainName,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress
    }
  });
}


export const GetVAnchorRelayerFeeByChainsHistory = async (chainNames: Array<string>, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<RelayerFeeByChainHistoryItem>> => {
  const promises: Array<Promise<RelayerFeeByChainHistoryItem>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorRelayerFeeByChainHistory(chainName, vAnchorAddress, startTimestamp, endTimestamp))
  }

  return await Promise.all(promises);
}


export const GetVAnchorsRelayerFeeByChainHistory = async (chainName: string, vanchorAddresses: Array<string>, startTimestamp: Date, endTimestamp: Date): Promise<Array<RelayerFeeByVAnchorHistoryItem>> => {

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
    chainName,
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

export const GetVAnchorsRelayerFeeByChainsHistory = async (chainNames: Array<string>, vanchorAddresses: Array<string>, startTimestamp: Date, endTimestamp: Date): Promise<Array<Array<RelayerFeeByVAnchorHistoryItem>>> => {
  const promises: Array<Promise<Array<RelayerFeeByVAnchorHistoryItem>>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorsRelayerFeeByChainHistory(chainName, vanchorAddresses, startTimestamp, endTimestamp));
  }

  return await Promise.all(promises);

}



export const GetVAnchorRelayerFeeByChainAndByTokenHistory = async (chainName: string, vAnchorAddress: string, tokenSymbol: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<RelayerFeeByChainAndByTokenHistoryItem>> => {
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
    chainName,
  })

  return result.data.vanchorRelayerFeeByTokenEvery15Mins?.map((item: any) => {
    return {
      relayerFee: item?.relayerFee,
      chainName: chainName,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress
    }
  });
}

export const GetVAnchorRelayerFeeByChainsAndByTokenHistory = async (chainNames: Array<string>, vAnchorAddress: string, tokenSymbol: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<Array<RelayerFeeByChainAndByTokenHistoryItem>>> => {
  const promises: Array<Promise<Array<RelayerFeeByChainAndByTokenHistoryItem>>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorRelayerFeeByChainAndByTokenHistory(chainName, vAnchorAddress, tokenSymbol, startTimestamp, endTimestamp))
  }

  return await Promise.all(promises);
}