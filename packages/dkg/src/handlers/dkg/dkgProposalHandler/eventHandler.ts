import { SubstrateEvent } from '@subql/types';
import { DKGProposalHandlerSection, DKGSections } from '../type';
import { EventDecoder } from '../../../utils';
import { DKGProposalHandlerEvent } from './types';
import {
  createProposalID,
  getProposalType,
  updateProposal,
  getChain,
  updateProposalBatch,
} from '../../../utils/proposals/getCurrentQueues';
import { Block, ProposalBatchStatus, ProposalTimelineStatus } from '../../../types';

/**
 *
 * DKG Proposal Handler event sequence - Includes all the events related to dkgProposalHandler which are emmited when the following events occur:
 * - Invalid proposal batch signature is submitted
 * - A proposal is added
 * - A proposal batch is signed, removed or expired
 */
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
      {
        logger.info(`Invalid Proposal Batch Signature at block: ${eventDecoder.blockNumber}`);
      }
      break;
    case DKGProposalHandlerSection.ProposalAdded:
      {
        const eventData = eventDecoder.as(DKGProposalHandlerSection.ProposalAdded);
        const proposalNonce = eventData.key.value.toString();
        const proposalID = createProposalID(
          eventData.targetChain,
          eventData.key.type.toString().toLowerCase().replace('proposal', ''),
          proposalNonce
        );
        const blockNumber = eventDecoder.blockNumber;
        const timestamp = (await Block.get(blockNumber)).timestamp;
        const proposaType = getProposalType(eventData.key);
        const data = eventData.data.toString();
        const addedTimeline = {
          status: ProposalTimelineStatus.Added,
          timestamp: timestamp,
        };

        await updateProposal({
          id: proposalID,
          blockNumber: blockNumber,
          timestamp: timestamp,
          type: proposaType,
          data: data,
          timeline: [addedTimeline],
        });

        logger.info(`New Proposal Added of type: ${proposaType} at block: ${blockNumber}`);
      }
      break;
    case DKGProposalHandlerSection.ProposalBatchRemoved:
      {
        const eventData = eventDecoder.as(DKGProposalHandlerSection.ProposalBatchRemoved);
        const proposalBatchId = eventData.batchId.toString();
        const proposalBatchStatus = ProposalBatchStatus.Removed;
        const blockNumber = eventDecoder.blockNumber;
        const timestamp = (await Block.get(blockNumber)).timestamp;
        const chain = getChain(Object.keys(eventData.targetChain)[0]);

        await updateProposalBatch({
          id: proposalBatchId,
          status: proposalBatchStatus,
          blockNumber: blockNumber,
          timestamp: timestamp,
          chain: chain,
        });

        logger.info(`Proposal Batch of ID: ${proposalBatchId} Removed at block: ${eventDecoder.blockNumber}`);
      }
      break;
    case DKGProposalHandlerSection.ProposalBatchExpired:
      {
        const eventData = eventDecoder.as(DKGProposalHandlerSection.ProposalBatchExpired);
        const proposalBatchId = eventData.batchId.toString();
        const proposalBatchStatus = ProposalBatchStatus.Expired;
        const blockNumber = eventDecoder.blockNumber;
        const timestamp = (await Block.get(blockNumber)).timestamp;
        const chain = getChain(Object.keys(eventData.targetChain)[0]);

        await updateProposalBatch({
          id: proposalBatchId,
          status: proposalBatchStatus,
          blockNumber: blockNumber,
          timestamp: timestamp,
          chain: chain,
        });

        logger.info(`Proposal Batch of ID: ${proposalBatchId} Expired at block: ${eventDecoder.blockNumber}`);
      }
      break;
    case DKGProposalHandlerSection.ProposalBatchSigned:
      {
        const eventData = eventDecoder.as(DKGProposalHandlerSection.ProposalBatchSigned);
        const proposalBatchId = eventData.batchId.toString();
        const proposalBatchStatus = ProposalBatchStatus.Signed;
        const blockNumber = eventDecoder.blockNumber;
        const timestamp = (await Block.get(blockNumber)).timestamp;
        const proposals = eventData.proposals;
        const chain = getChain(eventData.targetChain.type);
        const proposers = await api.query.dkgProposals.proposers();
        const proposerArr = proposers.map((accountId) => accountId.toString());
        const timeline = {
          status: ProposalTimelineStatus.Signed,
          timestamp: timestamp,
        };

        await updateProposalBatch({
          id: proposalBatchId,
          status: proposalBatchStatus,
          blockNumber: blockNumber,
          timestamp: timestamp,
          proposals: proposals ?? [],
          chain: chain,
          timeline: [timeline],
          proposers: proposerArr,
        });

        logger.info(`New Proposal Batch of ID: ${proposalBatchId} Signed at block: ${blockNumber}`);
      }
      break;
  }
}
