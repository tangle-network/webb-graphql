import { KeygenThresholdProps } from '.';

/**
 * Get current keygen threshold data on blockchain
 */
export async function getCurrentKeygenThreshold(): Promise<Omit<KeygenThresholdProps, 'id'>> {
  const pending = await api.query.dkg.pendingKeygenThreshold();
  const current = await api.query.dkg.keygenThreshold();
  const next = await api.query.dkg.nextKeygenThreshold();

  return {
    current: parseInt(current.toHex()),
    pending: parseInt(pending.toHex()),
    next: parseInt(next.toHex()),
    blockId: '0',
  };
}
