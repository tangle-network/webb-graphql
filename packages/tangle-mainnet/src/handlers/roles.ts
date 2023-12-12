import { SubstrateEvent } from '@subql/types';

import { SlashedLog } from '../types';
import { ensureBlock } from './block';

export async function createSlashedLog(event: SubstrateEvent) {
  const block = await ensureBlock(event.block.block.header.number.toString());
  const index = event.idx;
  const recordId = `${block.id}-${index}`;
  const slashedLog = new SlashedLog(recordId);

  if (slashedLog) return;

  slashedLog.accountId = event.event.data[0].toString();
  slashedLog.amount = BigInt(event.event.data[1].toString());
  slashedLog.blockNumber = block.number;
  await slashedLog.save();
}
