import { SubstrateEvent } from "@subql/types"
import {
  DKGMetaDataSection,
  DKGProposalHandlerSection,
  DKGProposalsSection,
  DKGSections,
} from "../type"

export async function dkgProposalEventHandler(event: SubstrateEvent) {
  if (event.event.section !== DKGSections.DKGProposals) {
    logger.error(
      `dkgProposalEventHandler: event.event.section(${event.event.section}) !== DKGSections.DKGProposals`
    )
    return
  }
  const method = event.event.method as DKGProposalsSection
  switch (method) {
    case DKGProposalsSection.ProposerThresholdChanged:
      break
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
