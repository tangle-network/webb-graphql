// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT

export enum ThresholdVariant {
  SIGNATURE = 'SIGNATURE',

  PROPOSER = 'PROPOSER',

  KEY_GEN = 'KEY_GEN',
}

export enum SessionKeyStatus {
  Generated = 'Generated',

  Signed = 'Signed',

  Rotated = 'Rotated',
}

export enum ProposalType {
  Refresh = 'Refresh',

  Evm = 'Evm',

  AnchorCreate = 'AnchorCreate',

  AnchorUpdate = 'AnchorUpdate',

  TokenAdd = 'TokenAdd',

  TokenRemove = 'TokenRemove',

  WrappingFeeUpdate = 'WrappingFeeUpdate',

  ResourceIdUpdate = 'ResourceIdUpdate',

  RescueTokens = 'RescueTokens',

  MaxDepositLimitUpdate = 'MaxDepositLimitUpdate',

  MinWithdrawalLimitUpdate = 'MinWithdrawalLimitUpdate',

  SetVerifier = 'SetVerifier',

  SetTreasuryHandler = 'SetTreasuryHandler',

  FeeRecipientUpdate = 'FeeRecipientUpdate',
}

export enum ProposalBatchStatus {
  Unknown = 'Unknown',

  Expired = 'Expired',

  Signed = 'Signed',

  Removed = 'Removed',
}

export enum ProposalVoteType {
  For = 'For',

  Against = 'Against',

  Abstain = 'Abstain',
}

export enum ProposalTimelineStatus {
  Added = 'Added',

  Approved = 'Approved',

  Rejected = 'Rejected',

  Succeeded = 'Succeeded',

  Signed = 'Signed',

  Failed = 'Failed',
}

export enum Chain {
  Unknown = 'Unknown',

  None = 'None',

  Evm = 'Evm',

  Substrate = 'Substrate',

  PolkadotParachain = 'PolkadotParachain',

  KusamaParachain = 'KusamaParachain',

  RococoParachain = 'RococoParachain',

  Cosmos = 'Cosmos',

  Solana = 'Solana',

  Ink = 'Ink',
}
