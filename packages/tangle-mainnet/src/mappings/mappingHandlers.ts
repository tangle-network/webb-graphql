import { SubstrateBlock, SubstrateEvent, SubstrateExtrinsic } from '@subql/types';
import {
  createBlock,
  createEvent,
  createExtrinsic,
  createSudoCall,
  ensureAccount,
  removeAccount,
  recordAuthorityUptime,
  recordHeartbeat,
  updateOrSetAccount,
  ensureJob,
  ensureJobResultSubmittedLog,
  ensureValidatorRewardLog,
  createProfile,
  updateProfile,
  deleteProfile,
  ensureClaim,
} from '../handlers';
import { ensureSession } from '../handlers/session';

export async function handleBlock(block: SubstrateBlock): Promise<void> {
  await createBlock(block);
}

export async function handleEvent(event: SubstrateEvent): Promise<void> {
  const block = `${event.block.block.header.number} => ${event.block.block.header.hash}`;
  logger.info(
    `EventHandler:
     	path: ${event.event.section}:${event.event.method}
     	data: ${JSON.stringify(event.event.data)}
		block:${block}
     	`
  );
  await createEvent(event);
}

export async function handleCall(extrinsic: SubstrateExtrinsic): Promise<void> {
  const path = `${extrinsic.extrinsic.method.section}:${extrinsic.extrinsic.method.method}`;
  const block = `${extrinsic.block.block.header.number} => ${extrinsic.block.block.hash}`;

  logger.info(`ExtrinsicHandler:
    path: ${path}
    data: ${JSON.stringify(extrinsic.extrinsic.args)}
    block: ${block}
  `);
  await createExtrinsic(extrinsic);
}

export async function handleSudoCall(extrinsic: SubstrateExtrinsic): Promise<void> {
  const path = `${extrinsic.extrinsic.method.section}:${extrinsic.extrinsic.method.method}`;
  const block = `${extrinsic.block.block.header.number} => ${extrinsic.block.block.hash}`;
  logger.info(`SudoCallHandler:
    path: ${path}
    data: ${JSON.stringify(extrinsic.extrinsic.args)}
    block: ${block}
  `);
  await createSudoCall(extrinsic);
}

export async function handleNewSession(event: SubstrateEvent): Promise<void> {
  const session = event.event.data[0].toString();
  logger.info(`NewSessionHandler: ${session}`);
  await ensureSession(session, event.block.block.header.number.toString());
}

export async function handleHeartbeats(event: SubstrateEvent) {
  const authorityId = event.event.data[0].toString();
  const blockNumber = event.block.block.header.number.toString();
  logger.info(`HeartBeat authorityId: ${authorityId}`);
  await recordAuthorityUptime(authorityId, blockNumber);
  await recordHeartbeat(authorityId, blockNumber);
}

export async function handleJobSubmitted(event: SubstrateEvent): Promise<void> {
  logger.info(`JobSubmittedHandler: ${JSON.stringify(event)}`);
  await ensureJob(event);
}

export async function handleJobResultSubmitted(event: SubstrateEvent): Promise<void> {
  logger.info(`JobResultSubmittedHandler: ${JSON.stringify(event)}`);
  await ensureJobResultSubmittedLog(event);
}

export async function handleValidatorRewardedForJobs(event: SubstrateEvent): Promise<void> {
  logger.info(`ValidatorRewardedForJobsHandler: ${JSON.stringify(event)}`);
  await ensureValidatorRewardLog(event);
}

export async function handleIdentitySet(event: SubstrateEvent): Promise<void> {
  logger.info(`IdentitySetHandler: ${JSON.stringify(event)}`);
  const account = event.event.data[0].toString();
  const acc = await ensureAccount(account);
  await updateOrSetAccount(acc);
}

export async function handleIdentityCleared(event: SubstrateEvent): Promise<void> {
  logger.info(`IdentityClearedHandler: ${JSON.stringify(event)}`);
  await removeAccount(event);
}

export async function handleIdentityKilled(event: SubstrateEvent): Promise<void> {
  logger.info(`IdentityKilledHandler: ${JSON.stringify(event)}`);
  await removeAccount(event);
}

export async function handleProfileCreated(event: SubstrateEvent): Promise<void> {
  logger.info(`ProfileCreatedHandler: ${JSON.stringify(event)}`);
  await createProfile(event);
}

export async function handleProfileUpdated(event: SubstrateEvent): Promise<void> {
  logger.info(`ProfileUpdatedHandler: ${JSON.stringify(event)}`);
  await updateProfile(event);
}

export async function handleProfileDeleted(event: SubstrateEvent): Promise<void> {
  logger.info(`ProfileDeletedHandler: ${JSON.stringify(event)}`);
  await deleteProfile(event);
}

export async function handleClaim(event: SubstrateEvent): Promise<void> {
  logger.info(`ClaimHandler: ${JSON.stringify(event)}`);
  await ensureClaim(event);
}
