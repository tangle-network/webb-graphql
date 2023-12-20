import { SubstrateEvent } from '@subql/types';

import { IdentitySetLog, IdentityClearedLog, IdentityKilledLog } from '../types';
import { ensureBlock } from './block';

export async function createIdentitySetLog(event: SubstrateEvent) {
  const block = await ensureBlock(event.block.block.header.number.toString());
  const index = event.idx;
  const recordId = `${block.id}-${index}`;
  let identitySetLog = await IdentitySetLog.get(recordId);

  if (identitySetLog) return;

  identitySetLog = new IdentitySetLog(recordId);
  const accountId = event.event.data[0].toString();
  identitySetLog.accountId = accountId;
  identitySetLog.blockNumber = block.number;
  await identitySetLog.save();
}

export async function createIdentityClearedLog(event: SubstrateEvent) {
  const block = await ensureBlock(event.block.block.header.number.toString());
  const index = event.idx;
  const recordId = `${block.id}-${index}`;
  let identityClearedLog = await IdentityClearedLog.get(recordId);

  if (identityClearedLog) return;

  identityClearedLog = new IdentityClearedLog(recordId);
  const accountId = event.event.data[0].toString();
  const deposit = BigInt(event.event.data[1].toString());
  identityClearedLog.accountId = accountId;
  identityClearedLog.deposit = deposit;
  identityClearedLog.blockNumber = block.number;
  await identityClearedLog.save();
}

export async function createIdentityKilledLog(event: SubstrateEvent) {
  const block = await ensureBlock(event.block.block.header.number.toString());
  const index = event.idx;
  const recordId = `${block.id}-${index}`;
  let identityKilledLog = await IdentityKilledLog.get(recordId);

  if (identityKilledLog) return;

  identityKilledLog = new IdentityKilledLog(recordId);
  const accountId = event.event.data[0].toString();
  const deposit = BigInt(event.event.data[1].toString());
  identityKilledLog.accountId = accountId;
  identityKilledLog.deposit = deposit;
  identityKilledLog.blockNumber = block.number;
  await identityKilledLog.save();
}
