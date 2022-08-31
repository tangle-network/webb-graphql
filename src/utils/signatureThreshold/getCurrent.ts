import { SignatureThresholdProps } from "."

/**
 * Get current signature threshold data on blockchain
 */
export async function getCurrentSignatureThreshold(): Promise<
  Omit<SignatureThresholdProps, "id">
> {
  const pending = await api.query.dkg.pendingSignatureThreshold()
  const current = await api.query.dkg.signatureThreshold()
  const next = await api.query.dkg.nextSignatureThreshold()

  return {
    current: parseInt(current.toHex()),
    pending: parseInt(pending.toHex()),
    next: parseInt(next.toHex()),
    blockId: "0",
  }
}
