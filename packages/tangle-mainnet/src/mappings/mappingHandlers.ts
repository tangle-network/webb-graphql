import { SubstrateBlock, SubstrateEvent, SubstrateExtrinsic } from '@subql/types';
import {
  createBlock,
  createEvent,
  createExtrinsic,
  createSudoCall,
  ensureAccount,
  RecordAuthorityUptime,
  RecordHeartbeat,
  UpdateOrSetIdentity,
} from '../handlers';
import { ensureSession } from '../handlers/session';

export async function handleBlock(block: SubstrateBlock): Promise<void> {
  const blockRecord = await createBlock(block);
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

  logger.info(
    `ExtrinsicHandler:
     	     	path: ${path}
     	     	data: ${JSON.stringify(extrinsic.extrinsic.args)}}
     	     	block:${block}

     	     	`
  );
  await createExtrinsic(extrinsic);
}

export async function handleSudoCall(extrinsic: SubstrateExtrinsic): Promise<void> {
  const path = `${extrinsic.extrinsic.method.section}:${extrinsic.extrinsic.method.method}`;
  const block = `${extrinsic.block.block.header.number} => ${extrinsic.block.block.hash}`;
  logger.info(
    `SudoCallHandler:
     	     	path: ${path}
     	     	data: ${JSON.stringify(extrinsic.extrinsic.args)}
     	     	block:${block}

     	`
  );
  await createSudoCall(extrinsic);
}

export async function handleNewSession(event: SubstrateEvent): Promise<void> {
  const session = event.event.data[0].toString();
  logger.info(`NewSessionHandler: ${session}`);
  const newSession = await ensureSession(session, event.block.block.header.number.toString());
  return UpdateOrSetSession(newSession);
}

export async function handleJobSubmitted(event: SubstrateEvent): Promise<void> {
  // Your implementation here
}

export async function handleJobResultSubmitted(event: SubstrateEvent): Promise<void> {
  // Your implementation here
}

export async function handleValidatorRewardedForJobs(event: SubstrateEvent): Promise<void> {
  // Your implementation here
}

export async function handleIdentitySet(event: SubstrateEvent): Promise<void> {
  const account = event.event.data[0].toString();
  logger.info(`IdentityHandler: ${account}`);
  const acc = await ensureAccount(account);
  return UpdateOrSetIdentity(acc);
}

export async function handleIdentityCleared(event: SubstrateEvent): Promise<void> {
  // Your implementation here
}

export async function handleIdentityKilled(event: SubstrateEvent): Promise<void> {
  // Your implementation here
}

export async function handleJudgementRequested(event: SubstrateEvent): Promise<void> {
  // Your implementation here
}

export async function handleJudgementUnrequested(event: SubstrateEvent): Promise<void> {
  // Your implementation here
}

export async function handleJudgementGiven(event: SubstrateEvent): Promise<void> {
  // Your implementation here
}

export async function handleRoleAssigned(event: SubstrateEvent): Promise<void> {
  // Your implementation here
}

export async function handleRoleRemoved(event: SubstrateEvent): Promise<void> {
  // Your implementation here
}

export async function handleSlashed(event: SubstrateEvent): Promise<void> {
  // Your implementation here
}

export async function handlePendingJobs(event: SubstrateEvent): Promise<void> {
  // Your implementation here
}

export async function handleHeartbeats(event: SubstrateEvent) {
  const authorityId = event.event.data[0].toString();
  const blockNumber = event.block.block.header.number.toString();
  logger.info(`HeartBeat authorityId: ${authorityId}`);
  await RecordAuthorityUptime(authorityId, blockNumber);
  return RecordHeartbeat(authorityId, blockNumber);
}
