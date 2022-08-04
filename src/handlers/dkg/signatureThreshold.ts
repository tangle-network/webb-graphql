import { SubstrateExtrinsic } from "@subql/types"
import { SignatureThreshold } from "../../types"
import { createBlock } from "../block"

export async function ensureSignatureThreshold(extrinsic: SubstrateExtrinsic) {
  const block = await createBlock(extrinsic.block)

  const args = extrinsic.extrinsic.args.toString()
  const recordId = `${block.id}-${extrinsic.idx}`
  const data = new SignatureThreshold(recordId)

  data.blockId = block.id
  data.arguments = args

  await data.save()

  return data
}

export async function createSignatureThreshold(extrinsic: SubstrateExtrinsic) {
  return ensureSignatureThreshold(extrinsic)
}
