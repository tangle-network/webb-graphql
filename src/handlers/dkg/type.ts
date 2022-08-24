export enum DKGSections {
  DKGMetaData = "DKG",
  DKGProposals = "DKGProposals",
  DKGProposalHandler = "DKGProposalHandler",
}

export enum DKGMetaDataSection {
  // Current public key submitted
  PublicKeySubmitted = "publicKeySubmitted",
  // Next public key submitted
  NextPublicKeySubmitted = "nextPublicKeySubmitted",
  // Next public key signature submitted
  NextPublicKeySignatureSubmitted = "nextPublicKeySignatureSubmitted",
  // Current Public Key Changed.
  PublicKeyChanged = "publicKeyChanged",
  // Current Public Key Signature Changed.
  PublicKeySignatureChanged = "publicKeySignatureChanged",
  // Misbehaviour reports submitted
  MisbehaviourReportsSubmitted = "misbehaviourReportsSubmitted",
  // Refresh DKG Keys Finished (forcefully).
  RefreshKeysFinished = "refreshKeysFinished",
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
