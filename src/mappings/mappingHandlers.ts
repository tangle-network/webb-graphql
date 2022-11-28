import { SubstrateBlock, SubstrateEvent, SubstrateExtrinsic } from '@subql/types';
import { BLOCK_INTERVAL } from '../constants';
import {
  createBlock,
  createEvent,
  createExtrinsic,
  createSudoCall,
  ensureAccount,
  RecordHeartbeat,
  UpdateOrSetIdentity,
} from '../handlers';
import { checkAndAddAuthorities } from '../utils/authorities';
import { checkAndAddKeygenThreshold } from '../utils/keygenThreshold';
import { checkAndAddSignatureThreshold } from '../utils/signatureThreshold';
import { handleDkgEvents } from '../handlers/dkg';

export async function handleBlock(block: SubstrateBlock): Promise<void> {
  const blockRecord = await createBlock(block);
  // Perform the checking for update each `BLOCK_INTERVAL`
  if ((blockRecord.number - BigInt(1)) % BigInt(BLOCK_INTERVAL) === BigInt(0)) {
    await Promise.all([
      checkAndAddSignatureThreshold(blockRecord),
      checkAndAddKeygenThreshold(blockRecord),
      checkAndAddAuthorities(blockRecord),
    ]);
  }
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
export async function handleAllDKG(event: SubstrateEvent) {
  const block = `${event.block.block.header.number} => ${event.block.block.header.hash}`;
  logger.info(
    `AllDKGChangedHandler:
     	path: ${event.event.section}:${event.event.method}
     	data: ${JSON.stringify(event.event.data.toJSON())}
		block:${block}
		full: ${JSON.stringify(event, null, 2)}
     	`
  );
  return handleDkgEvents(event);
}
export function handlePublicKeyChanged(event: SubstrateEvent) {
  const block = `${event.block.block.header.number} => ${event.block.block.header.hash}`;
  logger.info(
    `PublicKeyChangedHandler:
     	path: ${event.event.section}:${event.event.method}
     	data: ${JSON.stringify(event.event.data.toJSON())}
		block:${block}
     	`
  );
}

export async function handleIdentity(event: SubstrateEvent) {
  const account = event.event.data[0].toString();
  logger.info(`IdentityHandler: ${account}`);
  const acc = await ensureAccount(account);
  return UpdateOrSetIdentity(acc);
}
export async function handleHeartbeats(event: SubstrateEvent) {
  const authorityId = event.event.data[0].toString();
  const blockNumber = event.block.block.header.number.toString();
  logger.info(`HeartBeast authorityId: ${authorityId}`);
  return RecordHeartbeat(authorityId, blockNumber);
}
