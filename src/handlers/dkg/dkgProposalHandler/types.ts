/* eslint-disable @typescript-eslint/no-var-requires */
const { PalletDkgProposalHandlerEvent } = require('@webb-tools/dkg-substrate-types/interfaces/types-lookup');

export type DKGProposalHandlerEvent = {
  InvalidProposalSignature: (typeof PalletDkgProposalHandlerEvent)['asInvalidProposalSignature'];
  ProposalSigned: (typeof PalletDkgProposalHandlerEvent)['asProposalSigned'];
  ProposalAdded: Omit<(typeof PalletDkgProposalHandlerEvent)['asProposalSigned'], 'signature'>;
  ProposalRemoved: Omit<(typeof PalletDkgProposalHandlerEvent)['asProposalSigned'], 'signature' | 'data'>;
};
