import { SubstrateEvent } from "@subql/types"
import { DKGProposalsSection, DKGSections } from "../type"
import { createProposerThreshold } from "./proposerThreshold"
import "@webb-tools/types"

import { PalletDkgProposalsEvent } from "@polkadot/types/lookup"
import { DKGProposalsEvent } from "./types"
import { EventDecoder } from "../../../utils"

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
      break
    case DKGProposalsSection.VoteAgainst:
      break
    case DKGProposalsSection.ProposalApproved:
      break
    case DKGProposalsSection.ProposalRejected:
      break
    case DKGProposalsSection.ProposalSucceeded:
      break
    case DKGProposalsSection.ProposalFailed:
      break
    case DKGProposalsSection.AuthorityProposersReset:
      break
  }
}
