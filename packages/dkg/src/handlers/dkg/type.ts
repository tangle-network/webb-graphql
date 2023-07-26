export enum DKGSections {
  DKGMetaData = 'dkg',
  DKGProposals = 'dkgProposals',
  DKGProposalHandler = 'dkgProposalHandler',
}

export enum DKGMetaDataSection {
  PublicKeySubmitted = 'PublicKeySubmitted',
  NextPublicKeySubmitted = 'NextPublicKeySubmitted',
  NextPublicKeySignatureSubmitted = 'NextPublicKeySignatureSubmitted',
  PublicKeyChanged = 'PublicKeyChanged',
  PublicKeySignatureChanged = 'PublicKeySignatureChanged',
  MisbehaviourReportsSubmitted = 'MisbehaviourReportsSubmitted',
  RefreshKeysFinished = 'RefreshKeysFinished',
  NextKeygenThresholdUpdated = 'NextKeygenThresholdUpdated',
  NextSignatureThresholdUpdated = 'NextSignatureThresholdUpdated',
}

export enum DKGProposalsSection {
  ProposerThresholdChanged = 'ProposerThresholdChanged',
  ChainWhitelisted = 'ChainWhitelisted',
  VoteFor = 'VoteFor',
  VoteAgainst = 'VoteAgainst',
  ProposalApproved = 'ProposalApproved',
  ProposalRejected = 'ProposalRejected',
  ProposalSucceeded = 'ProposalSucceeded',
  ProposalFailed = 'ProposalFailed',
  ProposersReset = 'ProposersReset',
}

export enum DKGProposalHandlerSection {
  InvalidProposalBatchSignature = 'InvalidProposalBatchSignature',
  ProposalAdded = 'ProposalAdded',
  ProposalBatchRemoved = 'ProposalBatchRemoved',
  ProposalBatchExpired = 'ProposalBatchExpired',
  ProposalBatchSigned = 'ProposalBatchSigned',
}
