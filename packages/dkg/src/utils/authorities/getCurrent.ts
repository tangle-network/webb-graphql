import { AuthoritiesProps } from '.';

/**
 * Get current authorities data on blockchain
 */
export async function getCurrentAuthorities(): Promise<Omit<AuthoritiesProps, 'id'>> {
  const current = await api.query.dkg.authorities();
  const next = await api.query.dkg.nextAuthorities();

  return {
    // _name: 'Authorities',
    current: current.toJSON() as string[],
    next: next.toJSON() as string[],
    blockId: '0',
  };
}
