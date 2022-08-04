import { SubstrateExtrinsic } from "@subql/types"
import { KeygenThresholdArgs } from "."
import { KeygenThreshold } from "../../types"
import { createBlock } from "../block"

export async function ensureKeygenThreshold(extrinsic: SubstrateExtrinsic) {
  const block = await createBlock(extrinsic.block)

  const recordId = `${block.id}-${extrinsic.idx}`
  const data = new KeygenThreshold(recordId)

  data.blockId = block.id

  await data.save()

  return data
}

export async function createKeygenThreshold(
  extrinsic: SubstrateExtrinsic,
  args: KeygenThresholdArgs
) {
  const data = await ensureKeygenThreshold(extrinsic)

  const pendingThreshold = args.newThreshold
  const currentThreshold = await api.query.dkg.keygenThreshold()
  const nextThreshold = await api.query.dkg.nextKeygenThreshold()

  data.pendingKeygenThreshold = parseInt(pendingThreshold.toString())
  data.currentKeygenThreshold = parseInt(currentThreshold.toString())
  data.nextKeygenThreshold = parseInt(nextThreshold.toString())

  await data.save()

  return data
}
