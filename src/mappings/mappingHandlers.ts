import {
  SubstrateBlock,
  SubstrateEvent,
  SubstrateExtrinsic,
} from "@subql/types"
import {
  createBlock,
  createEvent,
  createExtrinsic,
  createSudoCall,
} from "../handlers"

export async function handleBlock(block: SubstrateBlock): Promise<void> {
  await createBlock(block)
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
