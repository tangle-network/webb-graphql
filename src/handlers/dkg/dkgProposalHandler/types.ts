import { PalletDkgProposalHandlerEvent } from "@polkadot/types/lookup"

export type DKGProposalHandlerEvent = {
  InvalidProposalSignature: PalletDkgProposalHandlerEvent["asInvalidProposalSignature"]
  ProposalSigned: PalletDkgProposalHandlerEvent["asProposalSigned"]
}
