import { SubstrateEvent } from '@subql/types';

import { IdentityClearedLog, IdentityKilledLog } from '../types';
import { ensureBlock } from './block';

export async function createIdentityClearedLog(event: SubstrateEvent) {
  const block = await ensureBlock(event.block.block.header.number.toString());
  const index = event.idx;
  const recordId = `${block.id}-${index}`;
  const identityClearedLog = new IdentityClearedLog(recordId);

  if (identityClearedLog) return;

  const account = event.event.data[0].toString();
  const deposit = BigInt(event.event.data[1].toString());
  identityClearedLog.accountId = account;
  identityClearedLog.deposit = deposit;
  await identityClearedLog.save();
}

export async function createIdentityKilledLog(event: SubstrateEvent) {
  const block = await ensureBlock(event.block.block.header.number.toString());
  const index = event.idx;
  const recordId = `${block.id}-${index}`;
  const identityKilledLog = new IdentityKilledLog(recordId);

  if (identityKilledLog) return;

  const account = event.event.data[0].toString();
  const deposit = BigInt(event.event.data[1].toString());
  identityKilledLog.accountId = account;
  identityKilledLog.deposit = deposit;
  await identityKilledLog.save();
}
