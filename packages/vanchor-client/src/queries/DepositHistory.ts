// @ts-ignore
import { execute } from "../../.graphclient"
import { DateUtil } from "../utils/date"
import { SubgraphUrl } from "../config"

export interface DepositByChainHistoryItem { subgraphUrl: SubgraphUrl, deposit: number, startInterval: Date, endInterval: Date, vAnchorAddress: string }

export interface DepositByChainAndByTokenHistoryItem extends DepositByChainHistoryItem { tokenSymbol: string }

export interface DepositByVAnchorHistoryItem { vAnchorAddress: string, deposit: number }

export const GetVAnchorDepositByChainHistory = async (subgraphUrl: SubgraphUrl, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<DepositByChainHistoryItem> => {

  const query = `
  query Deposit {
  vanchorDepositEvery15Mins(
    where: {endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    startInterval
    deposit
    vAnchorAddress
    endInterval
  }
}
`
  const result = await execute(query, {}, {
    subgraphUrl,
  })

  return result.data.vanchorDepositEvery15Mins?.map((item: any) => {
    return {
      deposit: item?.deposit,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress
    }
  });
}


export const GetVAnchorDepositByChainsHistory = async (subgraphUrls: Array<SubgraphUrl>, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<DepositByChainHistoryItem>> => {
  const promises: Array<Promise<DepositByChainHistoryItem>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorDepositByChainHistory(subgraphUrl, vAnchorAddress, startTimestamp, endTimestamp))
  }

  return await Promise.all(promises);
}


export const GetVAnchorsDepositByChainHistory = async (subgraphUrl: SubgraphUrl, vanchorAddresses: Array<string>, startTimestamp: Date, endTimestamp: Date): Promise<Array<DepositByVAnchorHistoryItem>> => {

  const query = `
  query DepositByVAnchor {
  vanchorDepositEvery15Mins(
    where: { endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}", vAnchorAddress_in: [${vanchorAddresses.map((address) => '"' + address.toLowerCase() + '"').join(",")}]}
  ) {
    id
    startInterval
    deposit
    endInterval,
    vAnchorAddress
  }
}
`
  const result = await execute(query, {}, {
    subgraphUrl,
  })

  const depositMap: { [vanchorAddress: string]: number } = {};


  result.data.vanchorDepositEvery15Mins?.map((item: any) => {
    if (!depositMap[item?.vAnchorAddress]) {
      depositMap[item?.vAnchorAddress] = 0;
    }

    depositMap[item?.vAnchorAddress] += item?.deposit;
  })


  const depositByVAnchorHistoryItems: Array<DepositByVAnchorHistoryItem> = [];

  for (const key in depositMap) {
    depositByVAnchorHistoryItems.push({
      vAnchorAddress: key,
      deposit: depositMap[key]
    })
  }

  return depositByVAnchorHistoryItems;

}

export const GetVAnchorsDepositByChainsHistory = async (subgraphUrls: Array<SubgraphUrl>, vanchorAddresses: Array<string>, startTimestamp: Date, endTimestamp: Date): Promise<Array<Array<DepositByVAnchorHistoryItem>>> => {
  const promises: Array<Promise<Array<DepositByVAnchorHistoryItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorsDepositByChainHistory(subgraphUrl, vanchorAddresses, startTimestamp, endTimestamp));
  }

  return await Promise.all(promises);

}



export const GetVAnchorDepositByChainAndByTokenHistory = async (subgraphUrl: SubgraphUrl, vAnchorAddress: string, tokenSymbol: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<DepositByChainAndByTokenHistoryItem>> => {
  const query = `
  query MyQuery {
  vanchorDepositByTokenEvery15Mins(
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}", endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}"}
  ) {
    deposit,
    startInterval,
    endInterval,
    vAnchorAddress
  }
}
`
  const result = await execute(query, {}, {
    subgraphUrl,
  })

  return result.data.vanchorDepositByTokenEvery15Mins?.map((item: any) => {
    return {
      deposit: item?.deposit,
      subgraphUrl: subgraphUrl,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress
    }
  });
}

export const GetVAnchorDepositByChainsAndByTokenHistory = async (subgraphUrls: Array<SubgraphUrl>, vAnchorAddress: string, tokenSymbol: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<Array<DepositByChainAndByTokenHistoryItem>>> => {
  const promises: Array<Promise<Array<DepositByChainAndByTokenHistoryItem>>> = [];

  for (const subgraphUrl of subgraphUrls) {
    promises.push(GetVAnchorDepositByChainAndByTokenHistory(subgraphUrl, vAnchorAddress, tokenSymbol, startTimestamp, endTimestamp))
  }

  return await Promise.all(promises);
}