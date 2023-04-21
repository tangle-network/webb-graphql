import { PalletDkgProposalsEvent } from '@webb-tools/dkg-substrate-types/interfaces/types-lookup';

export type DKGProposalsEvent = {
  ProposerThresholdChanged: PalletDkgProposalsEvent['asProposerThresholdChanged'];
  ChainWhitelisted: PalletDkgProposalsEvent['asChainWhitelisted'];
  ProposerAdded: PalletDkgProposalsEvent['asProposerAdded'];
  ProposerRemoved: PalletDkgProposalsEvent['asProposerRemoved'];
  VoteFor: PalletDkgProposalsEvent['asVoteFor'];
  VoteAgainst: PalletDkgProposalsEvent['asVoteAgainst'];
  ProposalApproved: PalletDkgProposalsEvent['asProposalApproved'];
  ProposalRejected: PalletDkgProposalsEvent['asProposalRejected'];
  ProposalSucceeded: PalletDkgProposalsEvent['asProposalSucceeded'];
  ProposalFailed: PalletDkgProposalsEvent['asProposalFailed'];
  AuthorityProposersReset: PalletDkgProposalsEvent['asAuthorityProposersReset'];
};
