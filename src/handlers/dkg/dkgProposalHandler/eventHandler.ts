import { SubstrateEvent } from "@subql/types"
import { DKGProposalHandlerSection, DKGSections } from "../type"
import "@webb-tools/types"
import { EventDecoder } from "../../../utils"
import { DKGProposalHandlerEvent } from "./types"
import {
  createProposalCounter,
  createProposalId,
  dkgPayloadKeyToProposalType,
  ensureProposalItemStorage,
  removeProposal,
  signProposal,
} from "../../../utils/proposals/getCurrentQueues"

export async function dkgProposalHandlerEventHandler(event: SubstrateEvent) {
  if (event.event.section !== DKGSections.DKGProposalHandler) {
    logger.error(
      `dkgProposalHandlerEventHandler: event.event.section(${event.event.section}) !== DKGSections.DKGProposalHandler`
    )
    return
  }
  const method = event.event.method as DKGProposalHandlerSection
  const eventDecoder = new EventDecoder<DKGProposalHandlerEvent>(event)
  switch (method) {
    case DKGProposalHandlerSection.InvalidProposalSignature:
      break
    case DKGProposalHandlerSection.ProposalAdded:
      {
        const eventData = eventDecoder.as(
          DKGProposalHandlerSection.ProposalAdded
        )
        const proposalId = createProposalId(
          eventData.targetChain,
          eventData.key
        )
        const nonce = Number(eventData.key.value.toString())
        const blockNumber = eventDecoder.blockNumber
        // Create a new unsigned proposal
        await ensureProposalItemStorage({
          proposalId,
          blockId: blockNumber,
          data: eventData.data.toString(),
          nonce,
          type: dkgPayloadKeyToProposalType(eventData.key),
        })
        await createProposalCounter(blockNumber)

        logger.info(
          `Unsigned Proposal Added: ${proposalId} data:${eventData.data.toString()}`
        )
      }
      break
    case DKGProposalHandlerSection.ProposalRemoved:
      {
        const eventData = eventDecoder.as(
          DKGProposalHandlerSection.ProposalRemoved
        )
        const proposalId = createProposalId(
          eventData.targetChain,
          eventData.key
        )
        const blockNumber = eventDecoder.blockNumber
        const nonce = String(parseInt(eventData.key.value.toHex()))

        logger.info(`Unsigned Proposal Removed: ${proposalId}`)
        // Create a new removed proposal
        await removeProposal(
          {
            blockId: blockNumber,
            nonce,
          },
          blockNumber
        )
        await createProposalCounter(blockNumber)
      }
      break
    case DKGProposalHandlerSection.ProposalSigned:
      {
        const eventData = eventDecoder.as(
          DKGProposalHandlerSection.ProposalSigned
        )
        const proposalKey = eventData.key
        const signature = eventData.signature.toString()
        const data = eventData.data.toString()
        const targetChainId = eventData.targetChain
        const proposalId = createProposalId(targetChainId, proposalKey)
        const proposalType = dkgPayloadKeyToProposalType(proposalKey)
        const blockNumber = eventDecoder.metaData.blockNumber
        const nonce = Number(proposalKey.value.toString())
        logger.info(`Signed Proposal Added: ${proposalId}`)
        await ensureProposalItemStorage({
          proposalId,
          signature,
          data,
          type: proposalType,
          nonce,
          blockId: blockNumber,
        })
        await signProposal(
          {
            blockId: blockNumber,
            nonce: String(parseInt(eventData.key.value.toHex())),
          },
          signature,
          blockNumber
        )
        await createProposalCounter(blockNumber)
      }
      break
  }
}
