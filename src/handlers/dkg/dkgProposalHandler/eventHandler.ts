import { SubstrateEvent } from "@subql/types"
import { DKGProposalHandlerSection, DKGSections } from "../type"
import "@webb-tools/types"
import { EventDecoder } from "../../../utils"
import { DKGProposalHandlerEvent } from "./types"
import {
  createProposalId,
  createSignedProposal,
  dkgPayloadKeyToProposalType,
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
        await createSignedProposal({
          proposalId,
          signature,
          data,
          type: proposalType,
          blockId: eventDecoder.metaData.blockNumber,
        })
      }
      break
  }
}
