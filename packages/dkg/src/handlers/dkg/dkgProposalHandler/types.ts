/* eslint-disable @typescript-eslint/no-var-requires */
const { PalletDkgProposalHandlerEvent } = require('@webb-tools/tangle-substrate-types/interfaces/types-lookup');

export type DKGProposalHandlerEvent = {
  InvalidProposalBatchSignature: (typeof PalletDkgProposalHandlerEvent)['asInvalidProposalBatchSignature'];
  ProposalAdded: (typeof PalletDkgProposalHandlerEvent)['asProposalAdded'];
  ProposalBatchRemoved: (typeof PalletDkgProposalHandlerEvent)['asProposalBatchRemoved'];
  ProposalBatchExpired: (typeof PalletDkgProposalHandlerEvent)['asProposalBatchExpired'];
  ProposalBatchSigned: (typeof PalletDkgProposalHandlerEvent)['asProposalBatchSigned'];
};
