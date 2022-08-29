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
  /// Event When a Proposal is added to UnsignedProposalQueue.
  ProposalAdded = "ProposalAdded",
  /// Event When a Proposal is removed to UnsignedProposalQueue.
  ProposalRemoved = "ProposalRemoved",
}
