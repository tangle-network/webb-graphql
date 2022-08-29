import { SubstrateEvent } from "@subql/types"
import { DKGProposalHandlerSection, DKGSections } from "../type"
import "@webb-tools/types"
import { EventDecoder } from "../../../utils"
import { DKGProposalHandlerEvent } from "./types"
import {
  createProposalId,
  createSignedProposal,
  createUnsignedProposal,
  dkgPayloadKeyToProposalType,
  ensureUnsignedQueueProposal,
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

        const blockNumber = eventDecoder.blockNumber
        // Create a new UnsignedProposal Queue
        const queue = await ensureUnsignedQueueProposal(blockNumber)
        // Create a new unsigned proposal
        const proposal = await createUnsignedProposal({
          proposalId,
          removed: false,
          blockId: blockNumber,
          data: eventData.data.toString(),
          unsignedQueueId: queue.id,
          type: dkgPayloadKeyToProposalType(eventData.key),
        })

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
        logger.info(`Unsigned Proposal Added: ${proposalId}`)
        // Create a new UnsignedProposal Queue
        const queue = await ensureUnsignedQueueProposal(blockNumber)
        // Create a new removed proposal
        const proposal = await createUnsignedProposal({
          proposalId,
          removed: true,
          blockId: blockNumber,
          data: "REMOVED",
          unsignedQueueId: queue.id,
          type: dkgPayloadKeyToProposalType(eventData.key),
        })
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
        await createSignedProposal({
          proposalId,
          signature,
          data,
          type: proposalType,
          blockId: blockNumber,
        })
        const queue = await ensureUnsignedQueueProposal(blockNumber)
        await createUnsignedProposal({
          proposalId,
          removed: true,
          blockId: blockNumber,
          data: "REMOVED",
          unsignedQueueId: queue.id,
          type: dkgPayloadKeyToProposalType(eventData.key),
        })
        // Create a new UnsignedProposal Queue
        // Remove the proposal form the queue
      }
      break
  }
}
