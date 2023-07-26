import { SubstrateEvent } from '@subql/types';
import { DKGProposalsSection, DKGSections } from '../type';
import { DKGProposalsEvent } from './types';
import { EventDecoder } from '../../../utils';
import { createProposalID, getProposalType, updateProposal } from '../../../utils/proposals/getCurrentQueues';
import { Block, ProposalTimelineStatus, ProposalVoteType } from '../../../types';

export async function dkgProposalEventHandler(event: SubstrateEvent) {
  if (event.event.section !== DKGSections.DKGProposals) {
    logger.error(`dkgProposalEventHandler: event.event.section(${event.event.section}) !== DKGSections.DKGProposals`);
    return;
  }

  const method = event.event.method as DKGProposalsSection;

  const eventDecoder = new EventDecoder<DKGProposalsEvent>(event);

  switch (method) {
    case DKGProposalsSection.ProposerThresholdChanged:
      {
        logger.info(`Proposer Threshold Changed at block: ${eventDecoder.blockNumber}`);
      }
      break;
    case DKGProposalsSection.ChainWhitelisted:
      {
        const eventData = eventDecoder.as(DKGProposalsSection.ChainWhitelisted);

        logger.info(`Chain of type ${eventData.chainId.toString()} Whitelisted at block: ${eventDecoder.blockNumber}`);
      }
      break;
    case DKGProposalsSection.VoteFor:
      {
        const eventData = eventDecoder.as(DKGProposalsSection.VoteFor);
        const proposalID = createProposalID(
          eventData.srcChainId,
          eventData.kind.toString().toLowerCase(),
          eventData.proposalNonce.toString()
        );
        const blockNumber = eventDecoder.blockNumber;
        const timestamp = (await Block.get(blockNumber)).timestamp;
        const proposalType = getProposalType(eventData.kind + 'Proposal');
        const proposerWithVote = {
          proposer: eventData.who.toString(),
          vote: ProposalVoteType.For,
        };

        await updateProposal({
          id: proposalID,
          blockNumber: blockNumber,
          timestamp: timestamp,
          type: proposalType,
          proposersWithVotes: [proposerWithVote],
        });

        logger.info(`Vote For Proposal of type: ${proposalType} at block: ${blockNumber}`);
      }
      break;
    case DKGProposalsSection.VoteAgainst:
      {
        const eventData = eventDecoder.as(DKGProposalsSection.VoteAgainst);
        const proposalID = createProposalID(
          eventData.srcChainId,
          eventData.kind.toString().toLowerCase(),
          eventData.proposalNonce.toString()
        );
        const blockNumber = eventDecoder.blockNumber;
        const timestamp = (await Block.get(blockNumber)).timestamp;
        const proposalType = getProposalType(eventData.kind + 'Proposal');
        const proposerWithVote = {
          proposer: eventData.who.toString(),
          vote: ProposalVoteType.Against,
        };

        await updateProposal({
          id: proposalID,
          blockNumber: blockNumber,
          timestamp: timestamp,
          type: proposalType,
          proposersWithVotes: [proposerWithVote],
        });

        logger.info(`Vote Against Proposal of type: ${proposalType} at block: ${blockNumber}`);
      }
      break;
    case DKGProposalsSection.ProposalApproved:
      {
        const eventData = eventDecoder.as(DKGProposalsSection.ProposalApproved);
        const proposalID = createProposalID(
          eventData.srcChainId,
          eventData.kind.toString().toLowerCase(),
          eventData.proposalNonce.toString()
        );
        const blockNumber = eventDecoder.blockNumber;
        const timestamp = (await Block.get(blockNumber)).timestamp;
        const proposalType = getProposalType(eventData.kind + 'Proposal');
        const approvedTimeline = {
          status: ProposalTimelineStatus.Approved,
          timestamp: timestamp,
        };

        await updateProposal({
          id: proposalID,
          blockNumber: blockNumber,
          timestamp: timestamp,
          type: proposalType,
          timeline: [approvedTimeline],
        });

        logger.info(`Proposal Approved of type: ${proposalType} at block: ${blockNumber}`);
      }
      break;
    case DKGProposalsSection.ProposalRejected:
      {
        const eventData = eventDecoder.as(DKGProposalsSection.ProposalRejected);
        const proposalID = createProposalID(
          eventData.srcChainId,
          eventData.kind.toString().toLowerCase(),
          eventData.proposalNonce.toString()
        );
        const blockNumber = eventDecoder.blockNumber;
        const timestamp = (await Block.get(blockNumber)).timestamp;
        const proposalType = getProposalType(eventData.kind + 'Proposal');
        const rejectedTimeline = {
          status: ProposalTimelineStatus.Rejected,
          timestamp: timestamp,
        };

        await updateProposal({
          id: proposalID,
          blockNumber: blockNumber,
          timestamp: timestamp,
          type: proposalType,
          timeline: [rejectedTimeline],
        });

        logger.info(`Proposal Rejected of type: ${proposalType} at block: ${blockNumber}`);
      }
      break;
    case DKGProposalsSection.ProposalSucceeded:
      {
        const eventData = eventDecoder.as(DKGProposalsSection.ProposalSucceeded);
        const proposalID = createProposalID(
          eventData.srcChainId,
          eventData.kind.toString().toLowerCase(),
          eventData.proposalNonce.toString()
        );
        const blockNumber = eventDecoder.blockNumber;
        const timestamp = (await Block.get(blockNumber)).timestamp;
        const proposalType = getProposalType(eventData.kind + 'Proposal');
        const succeededTimeline = {
          status: ProposalTimelineStatus.Succeeded,
          timestamp: timestamp,
        };

        await updateProposal({
          id: proposalID,
          blockNumber: blockNumber,
          timestamp: timestamp,
          type: proposalType,
          timeline: [succeededTimeline],
        });

        logger.info(`Proposal Succeeded of type: ${proposalType} at block: ${blockNumber}`);
      }
      break;
    case DKGProposalsSection.ProposalFailed:
      {
        const eventData = eventDecoder.as(DKGProposalsSection.ProposalFailed);
        const proposalID = createProposalID(
          eventData.srcChainId,
          eventData.kind.toString().toLowerCase(),
          eventData.proposalNonce.toString()
        );
        const blockNumber = eventDecoder.blockNumber;
        const timestamp = (await Block.get(blockNumber)).timestamp;
        const proposalType = getProposalType(eventData.kind + 'Proposal');
        const failedTimeline = {
          status: ProposalTimelineStatus.Failed,
          timestamp: timestamp,
        };

        await updateProposal({
          id: proposalID,
          blockNumber: blockNumber,
          timestamp: timestamp,
          type: proposalType,
          timeline: [failedTimeline],
        });
      }
      break;
    case DKGProposalsSection.ProposersReset:
      {
        logger.info(`Proposers Reset at block: ${eventDecoder.blockNumber}`);
      }
      break;
  }
}
