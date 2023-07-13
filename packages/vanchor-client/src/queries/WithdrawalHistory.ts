import { execute } from "../../.graphclient"
import { DateUtil } from "../utils/date"

export interface WithdrawalByChainHistoryItem { chainName: string, withdrawal: number, startInterval: Date, endInterval: Date, vAnchorAddress: string }

export const GetVAnchorWithdrawalByChain = async (chainName: string, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<WithdrawalByChainHistoryItem> => {

  const query = `
  query Withdrawal {
  vanchorWithdrawalEvery15Mins(
    where: {endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    startInterval
    withdrawal
    vAnchorAddress
    endInterval
  }
}
`
  const result = await execute(query, {}, {
    chainName,
  })

  return result.data.vanchorWithdrawalEvery15Mins?.map((item: any) => {
    return {
      withdrawal: item?.withdrawal,
      chainName: chainName,
      startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
      endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
      vAnchorAddress: item?.vAnchorAddress
    }
  });
}