import { SubstrateEvent } from '@subql/types';

import { Claim, ClaimSource } from '../types';
import { ensureBlock } from './block';

export async function ensureClaim(event: SubstrateEvent) {
  const block = await ensureBlock(event.block.block.header.number.toString());
  const index = event.idx;
  const recordId = `${block.id}-${index}`;
  let claim = await Claim.get(recordId);

  if (claim) return;

  claim = new Claim(recordId);
  claim.recipient = event.event.data[0].toString();
  claim.source = event.event.data[1] as ClaimSource;
  claim.amount = BigInt(event.event.data[2].toString());
  claim.blockNumber = block.number;

  await claim.save();
}
