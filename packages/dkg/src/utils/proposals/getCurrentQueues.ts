/* eslint-disable @typescript-eslint/no-var-requires */
const {
  WebbProposalsHeaderTypedChainId,
  DkgRuntimePrimitivesProposalDkgPayloadKey,
  WebbProposalsProposalProposalKind,
} = require('@webb-tools/tangle-substrate-types/interfaces/types-lookup');
import {
  Proposal,
  ProposalTimeline,
  ProposalType,
  ProposalBatch,
  ProposalBatchStatus,
  ProposerWithVote,
  Chain,
} from '../../types';

export const createProposalID = (targetChain: typeof WebbProposalsHeaderTypedChainId, data: string): string => {
  const proposalTargetChain = targetChain.hash.toString();
  const proposalData = data.replace('0x', '');
  return `${proposalTargetChain.replace('0x', '')}-${proposalData.trim() || '0'}`;
};

export const getProposalType = (
  dkgKey: typeof DkgRuntimePrimitivesProposalDkgPayloadKey | typeof WebbProposalsProposalProposalKind
): ProposalType => {
  switch (dkgKey.type) {
    case 'RefreshProposal':
      return ProposalType.Refresh;
    case 'ProposerSetUpdateProposal':
      return ProposalType.ProposerSetUpdate;
    case 'EvmProposal':
      return ProposalType.Evm;
    case 'AnchorCreateProposal':
      return ProposalType.AnchorCreate;
    case 'AnchorUpdateProposal':
      return ProposalType.AnchorUpdate;
    case 'TokenAddProposal':
      return ProposalType.TokenAdd;
    case 'TokenRemoveProposal':
      return ProposalType.TokenRemove;
    case 'WrappingFeeUpdateProposal':
      return ProposalType.WrappingFeeUpdate;
    case 'ResourceIdUpdateProposal':
      return ProposalType.ResourceIdUpdate;
    case 'RescueTokensProposal':
      return ProposalType.RescueTokens;
    case 'MaxDepositLimitUpdateProposal':
      return ProposalType.MaxDepositLimitUpdate;
    case 'MinWithdrawalLimitUpdateProposal':
      return ProposalType.MinWithdrawalLimitUpdate;
    case 'SetVerifierProposal':
      return ProposalType.SetVerifier;
    case 'SetTreasuryHandlerProposal':
      return ProposalType.SetTreasuryHandler;
    case 'FeeRecipientUpdateProposal':
      return ProposalType.FeeRecipientUpdate;
  }
};

type ProposalProps = {
  id: string;
  blockNumber: string;
  timestamp: Date;
  type: ProposalType;
  data: string;
  timeline: ProposalTimeline[];
};

export const createProposal = async (proposal: ProposalProps) => {
  const { id, blockNumber, timestamp, type, data, timeline } = proposal;

  const newProposal = new Proposal(id);
  newProposal.blockNumber = blockNumber;
  newProposal.timestamp = timestamp;
  newProposal.type = type;
  newProposal.data = data;
  newProposal.timeline = timeline;

  await newProposal.save();
};

type GetProposalIDsProps = [
  {
    kind: string;
    data: string;
  }
];

export const getProposalIDs = async (
  proposals: GetProposalIDsProps,
  targetChain: typeof WebbProposalsHeaderTypedChainId
) => {
  const proposalIDs = proposals.map((proposal) => {
    const proposalID = createProposalID(targetChain, proposal.data.toString());

    return proposalID;
  });

  return proposalIDs;
};

type ProposalBatchProps = {
  id: string;
  status: ProposalBatchStatus;
  blockNumber: string;
  proposals: string[];
  proposersWithVotes: ProposerWithVote[];
  chain: Chain;
};

export const createProposalBatch = async (proposalBatch: ProposalBatchProps) => {
  const { id, status, blockNumber, proposals, proposersWithVotes, chain } = proposalBatch;

  const newProposalBatch = new ProposalBatch(id);
  newProposalBatch.status = status;
  newProposalBatch.blockNumber = blockNumber;
  newProposalBatch.proposals = proposals;
  newProposalBatch.proposersWithVotes = proposersWithVotes;
  newProposalBatch.chain = chain;

  await newProposalBatch.save();
};
