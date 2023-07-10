import { execute } from "../../.graphclient"
import { DateUtil } from "../utils/date"

export interface TotalValueLockedByChainHistoryItem { chainName: string, totalValueLocked: number, startInterval: Date, endInterval: Date, vAnchorAddress: string }

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
            startInterval: new Date(item?.startInterval),
            endInterval: new Date(item?.endInterval),
            vAnchorAddress: item?.vAnchorAddress
        }
    });
}