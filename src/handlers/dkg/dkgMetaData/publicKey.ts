import { SubstrateEvent } from "@subql/types"
import { createExtrinsic } from "../../extrinsic"
import { createBlock } from "../../block"
import { PublicKey } from "../../../types"

export async function ensurePublicKey(event: SubstrateEvent) {
  const blockData = await createBlock(event.block)

  if (event.extrinsic) {
    await createExtrinsic(undefined)
  }

  const recordId = `${blockData.id}-${event.idx}`
  const data = new PublicKey(recordId)
  data.blockId = blockData.id

  await data.save()

  return data
}

export async function createPublicKey(event: SubstrateEvent) {
  const data = await ensurePublicKey(event)
  data.compressed = event.event.data[0].toString()
  data.uncompressed = event.event.data[1].toString()

  await data.save()

  return data
}
