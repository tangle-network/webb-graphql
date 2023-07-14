import { execute } from "../../.graphclient"
import { DateUtil } from "../utils/date"

export interface WrappingFeeByChainHistoryItem { chainName: string, wrappingFee: number, startInterval: Date, endInterval: Date, vAnchorAddress: string }

export interface WrappingFeeByChainAndByTokenHistoryItem extends WrappingFeeByChainHistoryItem { tokenSymbol: string }

export interface WrappingFeeByVAnchorHistoryItem { vAnchorAddress: string, wrappingFee: number }

export const GetVAnchorWrappingFeeByChainHistory = async (chainName: string, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<WrappingFeeByChainHistoryItem> => {

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
    chainName,
  })

  return result.data.vanchorWrappingFeeEvery15Mins?.map((item: any) => {
    return {
      wrappingFee: item?.wrappingFee,
      chainName: chainName,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress
    }
  });
}


export const GetVAnchorWrappingFeeByChainsHistory = async (chainNames: Array<string>, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<WrappingFeeByChainHistoryItem>> => {
  const promises: Array<Promise<WrappingFeeByChainHistoryItem>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorWrappingFeeByChainHistory(chainName, vAnchorAddress, startTimestamp, endTimestamp))
  }

  return await Promise.all(promises);
}


export const GetVAnchorsWrappingFeeByChainHistory = async (chainName: string, vanchorAddresses: Array<string>, startTimestamp: Date, endTimestamp: Date): Promise<Array<WrappingFeeByVAnchorHistoryItem>> => {

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
    chainName,
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

export const GetVAnchorsWrappingFeeByChainsHistory = async (chainNames: Array<string>, vanchorAddresses: Array<string>, startTimestamp: Date, endTimestamp: Date): Promise<Array<Array<WrappingFeeByVAnchorHistoryItem>>> => {
  const promises: Array<Promise<Array<WrappingFeeByVAnchorHistoryItem>>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorsWrappingFeeByChainHistory(chainName, vanchorAddresses, startTimestamp, endTimestamp));
  }

  return await Promise.all(promises);

}



export const GetVAnchorWrappingFeeByChainAndByTokenHistory = async (chainName: string, vAnchorAddress: string, tokenSymbol: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<WrappingFeeByChainAndByTokenHistoryItem>> => {
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
    chainName,
  })

  return result.data.vanchorWrappingFeeByTokenEvery15Mins?.map((item: any) => {
    return {
      wrappingFee: item?.wrappingFee,
      chainName: chainName,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress
    }
  });
}

export const GetVAnchorWrappingFeeByChainsAndByTokenHistory = async (chainNames: Array<string>, vAnchorAddress: string, tokenSymbol: string, startTimestamp: Date, endTimestamp: Date): Promise<Array<Array<WrappingFeeByChainAndByTokenHistoryItem>>> => {
  const promises: Array<Promise<Array<WrappingFeeByChainAndByTokenHistoryItem>>> = [];

  for (const chainName of chainNames) {
    promises.push(GetVAnchorWrappingFeeByChainAndByTokenHistory(chainName, vAnchorAddress, tokenSymbol, startTimestamp, endTimestamp))
  }

  return await Promise.all(promises);
}