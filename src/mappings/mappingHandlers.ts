import {
  SubstrateBlock,
  SubstrateEvent,
  SubstrateExtrinsic,
} from "@subql/types"
import { BLOCK_INTERVAL } from "../constants"
import {
  createBlock,
  createEvent,
  createExtrinsic,
  createSudoCall,
} from "../handlers"
import { checkAndAddAuthorities } from "../utils/authorities"
import { checkAndAddKeygenThreshold } from "../utils/keygenThreshold"
import { checkAndAddSignatureThreshold } from "../utils/signatureThreshold"
import { createPublicKey } from "../handlers/dkg/dkgMetaData/publicKey"
import { createProposerThreshold } from "../handlers/dkg/dkgProposals/proposerThreshold"

export async function handleBlock(block: SubstrateBlock): Promise<void> {
  const blockRecord = await createBlock(block)

  // Perform the checking for update each `BLOCK_INTERVAL`
  if ((blockRecord.number - BigInt(1)) % BigInt(BLOCK_INTERVAL) === BigInt(0)) {
    await checkAndAddSignatureThreshold(blockRecord)
    await checkAndAddKeygenThreshold(blockRecord)
    await checkAndAddAuthorities(blockRecord)
  }
}

export async function handleEvent(event: SubstrateEvent): Promise<void> {
  const block = `${event.block.block.header.number} => ${event.block.block.header.hash}`
  logger.info(
    `EventHandler:
     	path: ${event.event.section}:${event.event.method}
     	data: ${JSON.stringify(event.event.data)}
		block:${block}
     	`
  )
  await createEvent(event)
}

export async function handleCall(extrinsic: SubstrateExtrinsic): Promise<void> {
  const path = `${extrinsic.extrinsic.method.section}:${extrinsic.extrinsic.method.method}`
  const block = `${extrinsic.block.block.header.number} => ${extrinsic.block.block.hash}`

  logger.info(
    `ExtrinsicHandler:
     	     	path: ${path}
     	     	data: ${JSON.stringify(extrinsic.extrinsic.args)}}
     	     	block:${block}

     	     	`
  )
  await createExtrinsic(extrinsic)
}

export async function handleSudoCall(
  extrinsic: SubstrateExtrinsic
): Promise<void> {
  const path = `${extrinsic.extrinsic.method.section}:${extrinsic.extrinsic.method.method}`
  const block = `${extrinsic.block.block.header.number} => ${extrinsic.block.block.hash}`
  logger.info(
    `SudoCallHandler:
     	     	path: ${path}
     	     	data: ${JSON.stringify(extrinsic.extrinsic.args)}
     	     	block:${block}

     	`
  )
  await createSudoCall(extrinsic)
}
export async function handleAllDKG(event: SubstrateEvent) {
  const block = `${event.block.block.header.number} => ${event.block.block.header.hash}`
  logger.info(
    `AllDKGChangedHandler:
     	path: ${event.event.section}:${event.event.method}
     	data: ${JSON.stringify(event.event.data)}
		block:${block}
		full: ${JSON.stringify(event, null, 2)}
     	`
  )
}
export async function handlePublicKeyChanged(event: SubstrateEvent) {
  const block = `${event.block.block.header.number} => ${event.block.block.header.hash}`
  logger.info(
    `PublicKeyChangedHandler:
     	path: ${event.event.section}:${event.event.method}
     	data: ${JSON.stringify(event.event.data.toJSON())}
		block:${block}
     	`
  )
  await createPublicKey(event)
}

export async function handleProposerThresholdChanged(event: SubstrateEvent) {
  await createProposerThreshold(event)
}
