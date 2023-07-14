import { execute } from "../../.graphclient"
import { DateUtil } from "../utils/date"

export interface DepositByChainHistoryItem { chainName: string, deposit: number, startInterval: Date, endInterval: Date, vAnchorAddress: string }

export interface DepositByChainAndByTokenHistoryItem extends DepositByChainHistoryItem { tokenSymbol: string }

export interface DepositByVAnchorHistoryItem { vAnchorAddress: string, deposit: number }

export const GetVAnchorDepositByChainHistory = async (chainName: string, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<DepositByChainHistoryItem> => {

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
    chainName,
  })

  return result.data.vanchorDepositEvery15Mins?.map((item: any) => {
    return {
      deposit: item?.deposit,
      chainName: chainName,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress
    }
  });
}


export const GetVAnchorDepositByChainsHistory = async (chainNames: Array<string>, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<DepositByChainHistoryItem>> => {
  const promises: Array<Promise<DepositByChainHistoryItem>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorDepositByChainHistory(chainName, vAnchorAddress, startTimestamp, endTimestamp))
  }

  return await Promise.all(promises);
}


export const GetVAnchorsDepositByChainHistory = async (chainName: string, vanchorAddresses: Array<string>, startTimestamp: Date, endTimestamp: Date): Promise<Array<DepositByVAnchorHistoryItem>> => {

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
    chainName,
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

export const GetVAnchorsDepositByChainsHistory = async (chainNames: Array<string>, vanchorAddresses: Array<string>, startTimestamp: Date, endTimestamp: Date): Promise<Array<Array<DepositByVAnchorHistoryItem>>> => {
  const promises: Array<Promise<Array<DepositByVAnchorHistoryItem>>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorsDepositByChainHistory(chainName, vanchorAddresses, startTimestamp, endTimestamp));
  }

  return await Promise.all(promises);

}



export const GetVAnchorDepositByChainAndByTokenHistory = async (chainName: string, vAnchorAddress: string, tokenSymbol: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<DepositByChainAndByTokenHistoryItem>> => {
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
    chainName,
  })

  return result.data.vanchorDepositByTokenEvery15Mins?.map((item: any) => {
    return {
      deposit: item?.deposit,
      chainName: chainName,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress
    }
  });
}

export const GetVAnchorDepositByChainsAndByTokenHistory = async (chainNames: Array<string>, vAnchorAddress: string, tokenSymbol: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<Array<DepositByChainAndByTokenHistoryItem>>> => {
  const promises: Array<Promise<Array<DepositByChainAndByTokenHistoryItem>>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorDepositByChainAndByTokenHistory(chainName, vAnchorAddress, tokenSymbol, startTimestamp, endTimestamp))
  }

  return await Promise.all(promises);
}