import { SubstrateEvent } from '@subql/types';
import { DKGProposalHandlerSection, DKGSections } from '../type';
import { EventDecoder } from '../../../utils';
import { DKGProposalHandlerEvent } from './types';
import {
  createProposalID,
  getProposalType,
  createProposal,
  getProposalIDs,
  createProposalBatch,
} from '../../../utils/proposals/getCurrentQueues';
import { Block, ProposalTimelineStatus, ProposalBatchStatus, ProposalVoteType } from '../../../types';

export async function dkgProposalHandlerEventHandler(event: SubstrateEvent) {
  if (event.event.section !== DKGSections.DKGProposalHandler) {
    logger.error(
      `dkgProposalHandlerEventHandler: event.event.section(${event.event.section}) !== DKGSections.DKGProposalHandler`
    );
    return;
  }

  const method = event.event.method as DKGProposalHandlerSection;

  const eventDecoder = new EventDecoder<DKGProposalHandlerEvent>(event);

  switch (method) {
    case DKGProposalHandlerSection.InvalidProposalBatchSignature:
      break;
    case DKGProposalHandlerSection.ProposalAdded:
      {
        const eventData = eventDecoder.as(DKGProposalHandlerSection.ProposalAdded);
        const proposalID = createProposalID(eventData.targetChain, eventData.data.toString());
        const blockNumber = eventDecoder.blockNumber;
        const timestamp = (await Block.get(blockNumber)).timestamp;
        const proposaType = getProposalType(eventData.key);
        const data = eventData.data.toString();
        const acceptedProposalTimeline = {
          status: ProposalTimelineStatus.Accepted,
          timestamp: timestamp,
        };

        await createProposal({
          id: proposalID,
          blockNumber: blockNumber,
          timestamp: timestamp,
          type: proposaType,
          data: data,
          timeline: [acceptedProposalTimeline],
        });

        logger.info(`New Proposal Added of type: ${proposaType} at block: ${blockNumber}`);
      }
      break;
    case DKGProposalHandlerSection.ProposalBatchRemoved:
      break;
    case DKGProposalHandlerSection.ProposalBatchExpired:
      break;
    case DKGProposalHandlerSection.ProposalBatchSigned:
      {
        const eventData = eventDecoder.as(DKGProposalHandlerSection.ProposalBatchSigned);
        const proposalBatchId = eventData.batchId.toString();
        const proposalBatchStatus = ProposalBatchStatus.Signed;
        const blockNumber = eventDecoder.blockNumber;
        const proposals = await getProposalIDs(eventData.proposals, eventData.targetChain);
        const proposers = await api.query.dkgProposals.proposers();
        const proposersWithVotes = proposers.map((proposer) => {
          return {
            proposer: proposer.toString(),
            voteType: ProposalVoteType.For,
          };
        });
        const chain = eventData.targetChain.toString();

        await createProposalBatch({
          id: proposalBatchId,
          status: proposalBatchStatus,
          blockNumber: blockNumber,
          proposals: proposals,
          proposersWithVotes: proposersWithVotes,
          chain: chain,
        });
      }
      break;
  }
}
