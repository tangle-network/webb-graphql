import { execute } from "../../.graphclient"
import { DateUtil } from "../utils/date"

export interface DepositByChainHistoryItem { chainName: string, deposit: number, startInterval: Date, endInterval: Date, vAnchorAddress: string }

export const GetVAnchorDepositByChain = async (chainName: string, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<DepositByChainHistoryItem> => {

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