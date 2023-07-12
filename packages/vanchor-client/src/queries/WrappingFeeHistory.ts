import { execute } from "../../.graphclient"
import { DateUtil } from "../utils/date"

export interface TotalWrappingFeeByChainHistoryItem { chainName: string, totalWrappingFee: number, startInterval: Date, endInterval: Date, vAnchorAddress: string }

export const GetVAnchorTotalWrappingFeeByChain = async (chainName: string, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<TotalWrappingFeeByChainHistoryItem> => {

    const query = `
  query TotalWrappingFee {
  vanchorTotalWrappingFeeEvery15Mins(
    where: {endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    startInterval
    totalWrappingFee
    vAnchorAddress
    endInterval
  }
}
`
    const result = await execute(query, {}, {
        chainName,
    })

    return result.data.vanchorTotalWrappingFeeEvery15Mins?.map((item: any) => {
        return {
            totalWrappingFee: item?.totalWrappingFee,
            chainName: chainName,
            startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
            endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
            vAnchorAddress: item?.vAnchorAddress
        }
    });
}