import { SubstrateEvent } from "@subql/types"
import { PublicKey } from "../../types"
import { createBlock } from "../block"
import { createExtrinsic } from "../extrinsic"

export async function ensurePublicKey(event: SubstrateEvent) {
  logger.info("ensurePublicKey :Before block")
  const blockData = await createBlock(event.block)
  logger.info("ensurePublicKey :After block")
  logger.info("ensurePublicKey :before createExtrinsic")
  await createExtrinsic(event.extrinsic)
  logger.info("ensurePublicKey :After createExtrinsic")

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
