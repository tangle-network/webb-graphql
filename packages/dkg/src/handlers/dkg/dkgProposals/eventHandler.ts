import { SubstrateEvent } from '@subql/types';
import { DKGProposalsSection, DKGSections } from '../type';
import { createProposerThreshold } from './proposerThreshold';
import { DKGProposalsEvent } from './types';
import { EventDecoder } from '../../../utils';
import { createOrUpdateSession, currentSessionId } from '../../session';

export async function dkgProposalEventHandler(event: SubstrateEvent) {
  if (event.event.section !== DKGSections.DKGProposals) {
    logger.error(`dkgProposalEventHandler: event.event.section(${event.event.section}) !== DKGSections.DKGProposals`);
    return;
  }

  const method = event.event.method as DKGProposalsSection;

  const eventDecoded = new EventDecoder<DKGProposalsEvent>(event);

  switch (method) {
    case DKGProposalsSection.ProposerThresholdChanged:
      break;
    case DKGProposalsSection.ChainWhitelisted:
      break;
    case DKGProposalsSection.VoteFor:
      break;
    case DKGProposalsSection.VoteAgainst:
      break;
    case DKGProposalsSection.ProposalApproved:
      break;
    case DKGProposalsSection.ProposalRejected:
      break;
    case DKGProposalsSection.ProposalSucceeded:
      break;
    case DKGProposalsSection.ProposalFailed:
      break;
    case DKGProposalsSection.ProposersReset:
      break;
  }
}
