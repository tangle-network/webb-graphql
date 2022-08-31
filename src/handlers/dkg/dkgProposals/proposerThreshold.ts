import { ensureBlock } from "../../block"
import { ProposerThreshold } from "../../../types"
import { EventMetaData } from "../../../utils"

export async function ensureProposalThreshold(
  blockNumber: string,
  idx: number
) {
  const blockData = await ensureBlock(blockNumber)

  const recordId = `${blockData.id}-${idx}`
  const data = new ProposerThreshold(recordId)
  data.blockId = blockData.id

  await data.save()

  return data
}

export async function createProposerThreshold(
  thresholdValue: string,
  { blockNumber, idx }: EventMetaData
) {
  const data = await ensureProposalThreshold(blockNumber, idx)
  data.value = parseInt(thresholdValue)

  await data.save()

  return data
}
