import { SubstrateEvent } from '@subql/types';

import { Profile, RoleType, PendingJobsLog } from '../types';
import { ensureBlock } from './block';

export async function createProfile(event: SubstrateEvent) {
  await ensureBlock(event.block.block.header.number.toString());

  const accountId = event.event.data[0].toString();

  let profile = await Profile.get(accountId);
  if (profile) return;

  profile = new Profile(accountId);
  const totalProfileResets = BigInt(event.event.data[1].toString());
  const roles: RoleType[] = (event.event.data[2] as any).map((role: any) => role.toString());

  profile.accountId = accountId;
  profile.totalProfileResets = totalProfileResets;
  profile.roles = roles;

  await profile.save();
}

export async function updateProfile(event: SubstrateEvent) {
  await ensureBlock(event.block.block.header.number.toString());

  const accountId = event.event.data[0].toString();
  const profile = await Profile.get(accountId);
  if (!profile) return;

  const totalProfileResets = BigInt(event.event.data[1].toString());
  const roles = (event.event.data[2] as any).map((role: any) => role.toString());
  profile.totalProfileResets = totalProfileResets;
  profile.roles = roles;

  await profile.save();
}

export async function deleteProfile(event: SubstrateEvent) {
  await ensureBlock(event.block.block.header.number.toString());

  const accountId = event.event.data[0].toString();
  const profile = await Profile.get(accountId);
  if (!profile) return;

  await Profile.remove(accountId);
}

export async function ensurePendingJobsLog(event: SubstrateEvent) {
  const block = await ensureBlock(event.block.block.header.number.toString());
  const index = event.idx;
  const recordId = `${block.id}-${index}`;

  let pendingJobsLog = await PendingJobsLog.get(recordId);

  if (pendingJobsLog) return;
  pendingJobsLog = new PendingJobsLog(recordId);
  pendingJobsLog.blockNumber = block.number;
  // TODO: update pending jobs

  await pendingJobsLog.save();
}
