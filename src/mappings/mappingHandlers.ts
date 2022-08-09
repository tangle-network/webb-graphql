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
  createProposerThreshold,
  createPublicKey,
  createSudoCall,
} from "../handlers"
import { checkAndAddAuthorities } from "../utils/authorities"
import { checkAndAddKeygenThreshold } from "../utils/keygenThreshold"
import { checkAndAddSignatureThreshold } from "../utils/signatureThreshold"

export async function handleBlock(block: SubstrateBlock): Promise<void> {
  const blockRecord = await createBlock(block)

  // Perform the checking for update each `BLOCK_INTERVAL`
  if ((blockRecord.number - BigInt(1)) % BigInt(BLOCK_INTERVAL) === BigInt(0)) {
    checkAndAddSignatureThreshold(blockRecord)
    checkAndAddKeygenThreshold(blockRecord)
    checkAndAddAuthorities(blockRecord)
  }
}

export async function handleEvent(event: SubstrateEvent): Promise<void> {
  await createEvent(event)
}

export async function handleCall(extrinsic: SubstrateExtrinsic): Promise<void> {
  await createExtrinsic(extrinsic)
}

export async function handleSudoCall(
  extrinsic: SubstrateExtrinsic
): Promise<void> {
  await createSudoCall(extrinsic)
}

export async function handlePublicKeyChanged(event: SubstrateEvent) {
  await createPublicKey(event)
}

export async function handleProposerThresholdChanged(event: SubstrateEvent) {
  await createProposerThreshold(event)
}
