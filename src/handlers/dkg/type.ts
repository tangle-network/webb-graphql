import { SubstrateEvent } from "@subql/types"
import { PalletDkgMetadataEvent } from "@polkadot/types/lookup"

export enum DKGSections {
  DKGMetaData = "dkg",
  DKGProposals = "dkgProposals",
  DKGProposalHandler = "dkgProposalHandler",
}

export enum DKGMetaDataSection {
  // Current public key submitted
  PublicKeySubmitted = "PublicKeySubmitted",
  // Next public key submitted
  NextPublicKeySubmitted = "NextPublicKeySubmitted",
  // Next public key signature submitted
  NextPublicKeySignatureSubmitted = "NextPublicKeySignatureSubmitted",
  // Current Public Key Changed.
  PublicKeyChanged = "PublicKeyChanged",
  // Current Public Key Signature Changed.
  PublicKeySignatureChanged = "PublicKeySignatureChanged",
  // Misbehaviour reports submitted
  MisbehaviourReportsSubmitted = "MisbehaviourReportsSubmitted",
  // Refresh DKG Keys Finished (forcefully).
  RefreshKeysFinished = "RefreshKeysFinished",
}

export type DKGMetaDataEvent = {
  PublicKeySubmitted: PalletDkgMetadataEvent["asPublicKeySubmitted"]
  NextPublicKeySubmitted: PalletDkgMetadataEvent["asNextPublicKeySubmitted"]
  NextPublicKeySignatureSubmitted: PalletDkgMetadataEvent["asNextPublicKeySignatureSubmitted"]
  PublicKeyChanged: PalletDkgMetadataEvent["asPublicKeyChanged"]
  PublicKeySignatureChanged: PalletDkgMetadataEvent["asPublicKeySignatureChanged"]
  MisbehaviourReportsSubmitted: PalletDkgMetadataEvent["asMisbehaviourReportsSubmitted"]
  RefreshKeysFinished: PalletDkgMetadataEvent["asRefreshKeysFinished"]
}

export class EventDecoder<T extends Record<string, any>> {
  private readonly _data: unknown
  private readonly _key: unknown

  constructor(public readonly event: SubstrateEvent) {
    this._data = event.event.data.toHuman() as unknown
    this._key = event.event.method.toString() as unknown
  }

  public is<Key extends keyof T>(key: Key): boolean {
    return this._key !== key
  }

  public as<Key extends keyof T>(key: Key): T[Key] {
    if (this._key !== key) {
      throw new Error(`Event key ${this._key} does not match ${key as string}`)
    }
    return this._data as T[Key]
  }
}

export enum DKGProposalsSection {
  // Vote threshold has changed (new_threshold)
  ProposerThresholdChanged = "ProposerThresholdChanged",
  // Chain now available for transfers (chain_id)
  ChainWhitelisted = "ChainWhitelisted",
  // Proposer added to set
  ProposerAdded = "ProposerAdded",
  // Proposer removed from set
  ProposerRemoved = "ProposerRemoved",
  // Vote submitted in favour of proposal
  VoteFor = "VoteFor",
  // Vot submitted against proposal
  VoteAgainst = "VoteAgainst",
  // Voting successful for a proposal
  ProposalApproved = "ProposalApproved",
  // Voting rejected a proposal
  ProposalRejected = "ProposalRejected",
  // Execution of call succeeded
  ProposalSucceeded = "ProposalSucceeded",
  // Execution of call failed
  ProposalFailed = "ProposalFailed",
  // Proposers have been reset
  AuthorityProposersReset = "AuthorityProposersReset",
}

export enum DKGProposalHandlerSection {
  // Event Emitted when we encounter a Proposal with invalid Signature.
  InvalidProposalSignature = "InvalidProposalSignature",
  // Event When a Proposal Gets Signed by DKG.
  ProposalSigned = "ProposalSigned",
}
