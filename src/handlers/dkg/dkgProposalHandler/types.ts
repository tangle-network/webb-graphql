import { PalletDkgProposalHandlerEvent } from "@polkadot/types/lookup"

export type DKGProposalHandlerEvent = {
  InvalidProposalSignature: PalletDkgProposalHandlerEvent["asInvalidProposalSignature"]
  ProposalSigned: PalletDkgProposalHandlerEvent["asProposalSigned"]
  ProposalAdded: Omit<
    PalletDkgProposalHandlerEvent["asProposalSigned"],
    "signature"
  >
  ProposalRemoved: Omit<
    PalletDkgProposalHandlerEvent["asProposalSigned"],
    "signature" | "data"
  >
}
