import { SubstrateEvent } from '@subql/types';

import { Profile, RoleType } from '../types';
import { ensureBlock } from './block';

export async function createProfile(event: SubstrateEvent) {
  await ensureBlock(event.block.block.header.number.toString());

  const identityId = event.event.data[0].toString();

  let profile = await Profile.get(identityId);
  if (profile) return;

  profile = new Profile(identityId);
  const totalProfileResets = BigInt(event.event.data[1].toString());
  const roles: RoleType[] = (event.event.data[2] as any).map((role: any) => role.toString());

  profile.identityId = identityId;
  profile.totalProfileResets = totalProfileResets;
  profile.roles = roles;

  await profile.save();
}

export async function updateProfile(event: SubstrateEvent) {
  await ensureBlock(event.block.block.header.number.toString());

  const identityId = event.event.data[0].toString();
  const profile = await Profile.get(identityId);
  if (!profile) return;

  const totalProfileResets = BigInt(event.event.data[1].toString());
  const roles = (event.event.data[2] as any).map((role: any) => role.toString());
  profile.totalProfileResets = totalProfileResets;
  profile.roles = roles;

  await profile.save();
}

export async function deleteProfile(event: SubstrateEvent) {
  await ensureBlock(event.block.block.header.number.toString());

  const identityId = event.event.data[0].toString();
  const profile = await Profile.get(identityId);
  if (!profile) return;

  await Profile.remove(identityId);
}
