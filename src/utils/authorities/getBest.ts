import { AuthoritiesProps } from "."

/**
 * Get current authorities data on blockchain
 */
export async function getBestAuthorities(): Promise<
  Omit<AuthoritiesProps, "id">
> {
  const current = await api.query.dkg.bestAuthorities()
  const next = await api.query.dkg.nextBestAuthorities()

  return {
    current: current.toJSON() as string[],
    next: next.toJSON() as string[],
    blockId: "0",
  }
}
