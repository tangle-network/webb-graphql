import { SubstrateEvent } from "@subql/types"
import { PublicKey } from "../../types"
import { createBlock } from "../block"
import { createExtrinsic } from "../extrinsic"

export async function ensurePublicKey(event: SubstrateEvent) {
  const blockData = await createBlock(event.block)
  await createExtrinsic(event.extrinsic)

  const recordId = `${blockData.id}-${event.idx}`
  const data = new PublicKey(recordId)
  data.blockId = blockData.id

  await data.save()

  return data
}

export async function createPublicKey(event: SubstrateEvent) {
  logger.debug("createPublicKey ", JSON.stringify({ event }, null, 2))
  const data = await ensurePublicKey(event)

  data.compressed = event.event.data[0].toString()
  data.uncompressed = event.event.data[1].toString()

  await data.save()

  return data
}
