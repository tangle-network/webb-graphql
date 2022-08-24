import { SubstrateExtrinsic } from "@subql/types"
import { SignatureThresholdArgs } from "./types"
import { createBlock } from "../../block"
import { SignatureThreshold } from "../../../types"

export async function ensureSignatureThreshold(extrinsic: SubstrateExtrinsic) {
  const block = await createBlock(extrinsic.block)

  const recordId = `${block.id}-${extrinsic.idx}`
  const data = new SignatureThreshold(recordId)

  data.blockId = block.id

  await data.save()

  return data
}

export async function createSignatureThreshold(
  extrinsic: SubstrateExtrinsic,
  args: SignatureThresholdArgs
) {
  const data = await ensureSignatureThreshold(extrinsic)

  const pendingThreshold = args.newThreshold
  const currentThreshold = await api.query.dkg.signatureThreshold()
  const nextThreshold = await api.query.dkg.nextSignatureThreshold()

  data.pending = parseInt(pendingThreshold.toString())
  data.current = parseInt(currentThreshold.toString())
  data.next = parseInt(nextThreshold.toString())

  await data.save()

  return data
}
