import { ensureBlock } from "../../block"
import { PublicKey } from "../../../types"

export async function ensurePublicKey(input: PublicKeyInput) {
  const blockData = await ensureBlock(input.blockNumber)

  const recordId = `${input.blockNumber}-${input.compressed.replace("0x", "")}`

  const data = new PublicKey(recordId)
  data.blockId = blockData.id

  await data.save()

  return data
}
export type PublicKeyInput = {
  blockNumber: string
  compressed: string
  uncompressed: string
}
export async function createPublicKey(data: PublicKeyInput) {
  const key = await ensurePublicKey(data)
  key.compressed = data.compressed
  key.uncompressed = data.uncompressed

  await key.save()

  return data
}
