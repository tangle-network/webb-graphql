import { execute } from "../../.graphclient"
import { DateUtil } from "../utils/date"

export interface TotalValueLockedByChainHistoryItem { chainName: string, totalValueLocked: number, startInterval: Date, endInterval: Date, vAnchorAddress: string }

export interface TotalValueLockedByChainAndByTokenHistoryItem extends TotalValueLockedByChainHistoryItem { tokenSymbol: string }

export interface TotalValueLockedByVAnchorHistoryItem { vAnchorAddress: string, totalValueLocked: number }

export const GetVAnchorTotalValueLockedByChain = async (chainName: string, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<TotalValueLockedByChainHistoryItem> => {

  const query = `
  query TotalValueLocked {
  vanchorTotalValueLockedEvery15Mins(
    where: {endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    startInterval
    totalValueLocked
    vAnchorAddress
    endInterval
  }
}
`
  const result = await execute(query, {}, {
    chainName,
  })

  return result.data.vanchorTotalValueLockedEvery15Mins?.map((item: any) => {
    return {
      totalValueLocked: item?.totalValueLocked,
      chainName: chainName,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress
    }
  });
}


export const GetVAnchorTotalValueLockedByChains = async (chainNames: Array<string>, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<TotalValueLockedByChainHistoryItem>> => {
  const promises: Array<Promise<TotalValueLockedByChainHistoryItem>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorTotalValueLockedByChain(chainName, vAnchorAddress, startTimestamp, endTimestamp))

  }

  return await Promise.all(promises);
}


export const GetVAnchorsTotalValueLockedByChain = async (chainName: string, vanchorAddresses: Array<string>, startTimestamp: Date, endTimestamp: Date): Promise<Array<TotalValueLockedByVAnchorHistoryItem>> => {

  const query = `
  query TotalValueLockedByVAnchor {
  vanchorTotalValueLockedsEvery15Mins(
    where: { endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}", vAnchorAddress_in: [${vanchorAddresses.map((address) => '"' + address.toLowerCase() + '"').join(",")}]}
  ) {
    id
    startInterval
    totalValueLocked
    endInterval,
    vAnchorAddress
  }
}
`
  const result = await execute(query, {}, {
    chainName,
  })

  const totalValueLockedMap = {};


  result.data.vanchorTotalValueLockedsEvery15Mins?.map((item: any) => {
    if (!totalValueLockedMap[item?.vAnchorAddress]) {
      totalValueLockedMap[item?.vAnchorAddress] = 0;
    }

    totalValueLockedMap[item?.vAnchorAddress] += item?.totalValueLocked;
  })


  const totalValueLockedByVAnchorHistoryItems: Array<TotalValueLockedByVAnchorHistoryItem> = [];

  for (const key in totalValueLockedMap) {
    totalValueLockedByVAnchorHistoryItems.push({
      vAnchorAddress: key,
      totalValueLocked: totalValueLockedMap[key]
    })
  }

  return totalValueLockedByVAnchorHistoryItems;

}

export const GetVAnchorsTotalValueLockedByChains = async (chainNames: Array<string>, vanchorAddresses: Array<string>, startTimestamp: Date, endTimestamp: Date): Promise<Array<Array<TotalValueLockedByVAnchorHistoryItem>>> => {
  const promises: Array<Promise<Array<TotalValueLockedByVAnchorHistoryItem>>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorsTotalValueLockedByChain(chainName, vanchorAddresses, startTimestamp, endTimestamp));
  }

  return await Promise.all(promises);

}



export const GetVAnchorTotalValueLockedByChainAndByToken = async (chainName: string, vAnchorAddress: string, tokenSymbol: string, startTimestamp: Date, endTimestamp: Date): Promise<TotalValueLockedByChainAndByTokenHistoryItem> => {
  const query = `
  query MyQuery {
  vanchorTotalValueLockedByTokensEvery15Mins(
    first: 1
    where: {tokenSymbol: "${tokenSymbol}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}", endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}"}
  ) {
    totalValueLocked
  }
}
`
  const result = await execute(query, {}, {
    chainName,
  })

  return result.data.vanchorTotalValueLockedEvery15Mins?.map((item: any) => {
    return {
      totalValueLocked: item?.totalValueLocked,
      chainName: chainName,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress
    }
  });
}

export const GetVAnchorTotalValueLockedByChainsAndByToken = async (chainNames: Array<string>, vAnchorAddress: string, tokenSymbol: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<TotalValueLockedByChainAndByTokenHistoryItem>> => {
  const promises: Array<Promise<TotalValueLockedByChainAndByTokenHistoryItem>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorTotalValueLockedByChainAndByToken(chainName, vAnchorAddress, tokenSymbol, startTimestamp, endTimestamp))
  }

  return await Promise.all(promises);
}