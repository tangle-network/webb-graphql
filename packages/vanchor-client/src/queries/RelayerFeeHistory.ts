import { execute } from "../../.graphclient"
import { DateUtil } from "../utils/date"

export interface TotalRelayerFeeByChainHistoryItem { chainName: string, totalRelayerFee: number, startInterval: Date, endInterval: Date, vAnchorAddress: string }

export const GetVAnchorTotalRelayerFeeByChain = async (chainName: string, vAnchorAddress: string, startTimestamp: Date, endTimestamp: Date): Promise<TotalRelayerFeeByChainHistoryItem> => {

    const query = `
  query TotalRelayerFee {
  vanchorTotalRelayerFeeEvery15Mins(
    where: {endInterval_lte: "${DateUtil.fromDateToEpoch(endTimestamp)}", startInterval_gte: "${DateUtil.fromDateToEpoch(startTimestamp)}", vAnchorAddress: "${vAnchorAddress.toLowerCase()}"}
  ) {
    startInterval
    totalRelayerFee
    vAnchorAddress
    endInterval
  }
}
`
    const result = await execute(query, {}, {
        chainName,
    })

    return result.data.vanchorTotalRelayerFeeEvery15Mins?.map((item: any) => {
        return {
            totalRelayerFee: item?.totalRelayerFee,
            chainName: chainName,
            startInterval: DateUtil.fromEpochToDate(parseInt(item?.startInterval)),
            endInterval: DateUtil.fromEpochToDate(parseInt(item?.endInterval)),
            vAnchorAddress: item?.vAnchorAddress
        }
    });
}