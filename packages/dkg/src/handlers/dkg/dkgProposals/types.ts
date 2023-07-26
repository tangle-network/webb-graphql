/* eslint-disable @typescript-eslint/no-var-requires */
const { PalletDkgProposalsEvent } = require('@webb-tools/tangle-substrate-types/interfaces/types-lookup');

export type DKGProposalsEvent = {
  ProposerThresholdChanged: (typeof PalletDkgProposalsEvent)['asProposerThresholdChanged'];
  ChainWhitelisted: (typeof PalletDkgProposalsEvent)['asChainWhitelisted'];
  VoteFor: (typeof PalletDkgProposalsEvent)['asVoteFor'];
  VoteAgainst: (typeof PalletDkgProposalsEvent)['asVoteAgainst'];
  ProposalApproved: (typeof PalletDkgProposalsEvent)['asProposalApproved'];
  ProposalRejected: (typeof PalletDkgProposalsEvent)['asProposalRejected'];
  ProposalSucceeded: (typeof PalletDkgProposalsEvent)['asProposalSucceeded'];
  ProposalFailed: (typeof PalletDkgProposalsEvent)['asProposalFailed'];
  ProposersReset: (typeof PalletDkgProposalsEvent)['asProposersReset'];
};
