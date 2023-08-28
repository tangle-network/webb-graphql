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
  Chain,
  ProposalProposerWithVote,
  ProposalInABatch,
} from '../../types';

export const getProposalType = (
  dkgKey: typeof DkgRuntimePrimitivesProposalDkgPayloadKey | typeof WebbProposalsProposalProposalKind
): ProposalType => {
  switch (dkgKey.type) {
    case 'RefreshProposal':
      return ProposalType.Refresh;
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

export const getChain = (chain): Chain => {
  switch (chain) {
    case 'None':
      return Chain.None;
    case 'Evm':
      return Chain.Evm;
    case 'Substrate':
      return Chain.Substrate;
    case 'PolkadotParachain':
      return Chain.PolkadotParachain;
    case 'KusamaParachain':
      return Chain.KusamaParachain;
    case 'RococoParachain':
      return Chain.RococoParachain;
    case 'Cosmos':
      return Chain.Cosmos;
    case 'Solana':
      return Chain.Solana;
    case 'Ink':
      return Chain.Ink;
  }
};

type UpdateProposalBatchProps = {
  id: string;
  blockNumber?: string;
  timestamp?: Date;
  status?: ProposalBatchStatus;
  proposals?: ProposalInABatch[];
  chain?: Chain;
  timeline?: ProposalTimeline[];
};

export const updateProposalBatch = async (proposalBatchToUpdate: UpdateProposalBatchProps) => {
  const { id, blockNumber, timestamp, status, proposals, chain, timeline } = proposalBatchToUpdate;

  let proposalBatch = await ProposalBatch.get(id);

  if (!proposalBatch) {
    proposalBatch = new ProposalBatch(id);
  }

  proposalBatch.blockNumber = blockNumber ? Number(blockNumber) : 0;
  proposalBatch.timestamp = timestamp ? timestamp : new Date();
  proposalBatch.status = status ? status : ProposalBatchStatus.Unknown;
  proposalBatch.proposals = proposals ? proposals : [];
  proposalBatch.chain = chain ? chain : Chain.Unknown;
  proposalBatch.timeline = timeline ? timeline : [];

  await proposalBatch.save();
};

export const createProposalID = (
  targetChain: typeof WebbProposalsHeaderTypedChainId,
  kind: string,
  nonce: string
): string => {
  const proposalTargetChain = targetChain.hash.toString();
  return `${proposalTargetChain.replace('0x', '')}-${kind}-${nonce}`;
};

type UpdateProposalProps = {
  id: string;
  blockNumber?: string;
  timestamp?: Date;
  type: ProposalType;
  data?: string;
  timeline?: ProposalTimeline[];
  proposersWithVotes?: ProposalProposerWithVote[];
};

export const updateProposal = async (proposalToUpdate: UpdateProposalProps) => {
  const { id, blockNumber, timestamp, type, data } = proposalToUpdate;

  let proposal = await Proposal.get(id);

  if (!proposal) {
    proposal = new Proposal(id);
    proposal.id = id;
  }

  proposal.blockNumber = blockNumber ? blockNumber : '';
  proposal.timestamp = timestamp ? timestamp : new Date();
  proposal.type = type;
  proposal.data = data ? data : '';

  await proposal.save();
};
