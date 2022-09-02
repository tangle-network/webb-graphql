import {SubstrateEvent} from "@subql/types"
import {DKGProposalsSection, DKGSections} from "../type"
import {createProposerThreshold} from "./proposerThreshold"
import "@webb-tools/types"

import {DKGProposalsEvent} from "./types"
import {EventDecoder} from "../../../utils"
import {createProposers} from "./index"
import {createOrUpdateSession} from "../../session"

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
      await createProposerThreshold(thresholdValue, eventDecoded.metaData)
      const pendingThreshold = eventData.newThreshold.toString()
      await createOrUpdateSession({
        blockId: eventDecoded.blockNumber,
        ProposerThreshold: {
          current: Number(pendingThreshold.toString()),
          pending: Number(pendingThreshold),
          next: Number(pendingThreshold.toString()),
        },
      })
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
    case DKGProposalsSection.ProposalRejected:
    case DKGProposalsSection.ProposalSucceeded:
    case DKGProposalsSection.ProposalFailed:
      {
      }
      break
    case DKGProposalsSection.AuthorityProposersReset:
      {
        const eventData = eventDecoded.as(
          DKGProposalsSection.AuthorityProposersReset
        )
        const proposers = eventData.proposers.map((i) => i.toString())
        await createProposers(eventDecoded.blockNumber, proposers)
        await createOrUpdateSession({
          blockId: eventDecoded.blockNumber,
          proposers,
          proposersCount: proposers.length,
        })
      }
      break
  }
}
