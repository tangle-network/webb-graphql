import { SubstrateEvent } from "@subql/types"
import { ProposerThreshold } from "../../types"
import { createBlock } from "../block"
import { createExtrinsic } from "../extrinsic"

export async function ensureProposalThreshold(event: SubstrateEvent) {
  const blockData = await createBlock(event.block)
  await createExtrinsic(event.extrinsic)

  const recordId = `${blockData.id}-${event.idx}`
  const data = new ProposerThreshold(recordId)
  data.blockId = blockData.id

  await data.save()

  return data
}

export async function createProposerThreshold(event: SubstrateEvent) {
  const data = await ensureProposalThreshold(event)
  logger.debug("createProposerThreshold" + JSON.stringify({ data }, null, 2))
  logger.info("createProposerThreshold" + JSON.stringify({ data }, null, 2))
  data.value = parseInt(event.event.data[0].toString())

  await data.save()

  return data
}
