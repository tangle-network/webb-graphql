import { SubstrateEvent } from "@subql/types"
import { DKGProposalsSection, DKGSections } from "../type"
import { createProposerThreshold } from "./proposerThreshold"
import "@webb-tools/types"

import { DKGProposalsEvent } from "./types"
import { EventDecoder } from "../../../utils"
import { syncUnsignedProposals } from "../../../utils/proposals/getCurrentQueues"

export async function dkgProposalEventHandler(event: SubstrateEvent) {
  if (event.event.section !== DKGSections.DKGProposals) {
    logger.error(
      `dkgProposalEventHandler: event.event.section(${event.event.section}) !== DKGSections.DKGProposals`
    )
    return
  }
  const method = event.event.method as DKGProposalsSection
  const eventDecoded = new EventDecoder<DKGProposalsEvent>(event)
  switch (method) {
    case DKGProposalsSection.ProposerThresholdChanged: {
      const eventData = eventDecoded.as(
        DKGProposalsSection.ProposerThresholdChanged
      )
      const thresholdValue = eventData.newThreshold.toString()
      return createProposerThreshold(thresholdValue, eventDecoded.metaData)
    }
    case DKGProposalsSection.ChainWhitelisted:
      break
    case DKGProposalsSection.ProposerAdded:
      break
    case DKGProposalsSection.ProposerRemoved:
      break
    case DKGProposalsSection.VoteFor:
    case DKGProposalsSection.VoteAgainst:
    case DKGProposalsSection.ProposalApproved:
    case DKGProposalsSection.ProposalSucceeded:
    case DKGProposalsSection.ProposalFailed:
      {
        const blockNumber = eventDecoded.blockNumber
        await syncUnsignedProposals(blockNumber)
      }
      break
    case DKGProposalsSection.AuthorityProposersReset:
      {
        const eventData = eventDecoded.as(
          DKGProposalsSection.AuthorityProposersReset
        )
        logger.info(
          `AuthorityProposersReset Proposers: ${eventData.proposers.map((i) =>
            i.toString()
          )}`
        )
      }
      break
  }
}
