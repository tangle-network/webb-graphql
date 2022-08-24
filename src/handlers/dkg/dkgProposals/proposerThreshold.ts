import {SubstrateEvent} from "@subql/types"
import {ensureBlock} from "../../block"
import {ProposerThreshold} from "../../../types"
import {createExtrinsic} from "../../extrinsic"

export async function ensureProposalThreshold(event: SubstrateEvent) {
  const blockData = await ensureBlock(
    event.block.block.header.number.toString()
  )
  await createExtrinsic(event.extrinsic)

  const recordId = `${blockData.id}-${event.idx}`
  const data = new ProposerThreshold(recordId)
  data.blockId = blockData.id

  await data.save()

  return data
}

export async function createProposerThreshold(event: SubstrateEvent) {
  const data = await ensureProposalThreshold(event)
  data.value = parseInt(event.event.data[0].toString())

  await data.save()

  return data
}
