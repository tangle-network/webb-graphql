// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace VanchorTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type EdgeAddition = {
  id: Scalars['Bytes'];
  chainID: Scalars['BigInt'];
  latestLeafIndex: Scalars['BigInt'];
  merkleRoot: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type EdgeAddition_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  chainID?: InputMaybe<Scalars['BigInt']>;
  chainID_not?: InputMaybe<Scalars['BigInt']>;
  chainID_gt?: InputMaybe<Scalars['BigInt']>;
  chainID_lt?: InputMaybe<Scalars['BigInt']>;
  chainID_gte?: InputMaybe<Scalars['BigInt']>;
  chainID_lte?: InputMaybe<Scalars['BigInt']>;
  chainID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestLeafIndex?: InputMaybe<Scalars['BigInt']>;
  latestLeafIndex_not?: InputMaybe<Scalars['BigInt']>;
  latestLeafIndex_gt?: InputMaybe<Scalars['BigInt']>;
  latestLeafIndex_lt?: InputMaybe<Scalars['BigInt']>;
  latestLeafIndex_gte?: InputMaybe<Scalars['BigInt']>;
  latestLeafIndex_lte?: InputMaybe<Scalars['BigInt']>;
  latestLeafIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestLeafIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  merkleRoot?: InputMaybe<Scalars['BigInt']>;
  merkleRoot_not?: InputMaybe<Scalars['BigInt']>;
  merkleRoot_gt?: InputMaybe<Scalars['BigInt']>;
  merkleRoot_lt?: InputMaybe<Scalars['BigInt']>;
  merkleRoot_gte?: InputMaybe<Scalars['BigInt']>;
  merkleRoot_lte?: InputMaybe<Scalars['BigInt']>;
  merkleRoot_in?: InputMaybe<Array<Scalars['BigInt']>>;
  merkleRoot_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EdgeAddition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<EdgeAddition_filter>>>;
};

export type EdgeAddition_orderBy =
  | 'id'
  | 'chainID'
  | 'latestLeafIndex'
  | 'merkleRoot'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type EdgeUpdate = {
  id: Scalars['Bytes'];
  chainID: Scalars['BigInt'];
  latestLeafIndex: Scalars['BigInt'];
  merkleRoot: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type EdgeUpdate_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  chainID?: InputMaybe<Scalars['BigInt']>;
  chainID_not?: InputMaybe<Scalars['BigInt']>;
  chainID_gt?: InputMaybe<Scalars['BigInt']>;
  chainID_lt?: InputMaybe<Scalars['BigInt']>;
  chainID_gte?: InputMaybe<Scalars['BigInt']>;
  chainID_lte?: InputMaybe<Scalars['BigInt']>;
  chainID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestLeafIndex?: InputMaybe<Scalars['BigInt']>;
  latestLeafIndex_not?: InputMaybe<Scalars['BigInt']>;
  latestLeafIndex_gt?: InputMaybe<Scalars['BigInt']>;
  latestLeafIndex_lt?: InputMaybe<Scalars['BigInt']>;
  latestLeafIndex_gte?: InputMaybe<Scalars['BigInt']>;
  latestLeafIndex_lte?: InputMaybe<Scalars['BigInt']>;
  latestLeafIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestLeafIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  merkleRoot?: InputMaybe<Scalars['BigInt']>;
  merkleRoot_not?: InputMaybe<Scalars['BigInt']>;
  merkleRoot_gt?: InputMaybe<Scalars['BigInt']>;
  merkleRoot_lt?: InputMaybe<Scalars['BigInt']>;
  merkleRoot_gte?: InputMaybe<Scalars['BigInt']>;
  merkleRoot_lte?: InputMaybe<Scalars['BigInt']>;
  merkleRoot_in?: InputMaybe<Array<Scalars['BigInt']>>;
  merkleRoot_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EdgeUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<EdgeUpdate_filter>>>;
};

export type EdgeUpdate_orderBy =
  | 'id'
  | 'chainID'
  | 'latestLeafIndex'
  | 'merkleRoot'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Encryptions = {
  id: Scalars['Bytes'];
  encryptedOutput1: Scalars['Bytes'];
  encryptedOutput2: Scalars['Bytes'];
};

export type Encryptions_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput1?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput1_not?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput1_gt?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput1_lt?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput1_gte?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput1_lte?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput1_in?: InputMaybe<Array<Scalars['Bytes']>>;
  encryptedOutput1_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  encryptedOutput1_contains?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput1_not_contains?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput2?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput2_not?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput2_gt?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput2_lt?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput2_gte?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput2_lte?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput2_in?: InputMaybe<Array<Scalars['Bytes']>>;
  encryptedOutput2_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  encryptedOutput2_contains?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput2_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Encryptions_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Encryptions_filter>>>;
};

export type Encryptions_orderBy =
  | 'id'
  | 'encryptedOutput1'
  | 'encryptedOutput2';

export type ExternalData = {
  id: Scalars['Bytes'];
  recipient: Scalars['Bytes'];
  extAmount: Scalars['BigInt'];
  relayer: Scalars['Bytes'];
  fee: Scalars['BigInt'];
  refund: Scalars['BigInt'];
  token: Scalars['String'];
};

export type ExternalData_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  recipient?: InputMaybe<Scalars['Bytes']>;
  recipient_not?: InputMaybe<Scalars['Bytes']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']>;
  recipient_lt?: InputMaybe<Scalars['Bytes']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']>;
  extAmount?: InputMaybe<Scalars['BigInt']>;
  extAmount_not?: InputMaybe<Scalars['BigInt']>;
  extAmount_gt?: InputMaybe<Scalars['BigInt']>;
  extAmount_lt?: InputMaybe<Scalars['BigInt']>;
  extAmount_gte?: InputMaybe<Scalars['BigInt']>;
  extAmount_lte?: InputMaybe<Scalars['BigInt']>;
  extAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  extAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayer?: InputMaybe<Scalars['Bytes']>;
  relayer_not?: InputMaybe<Scalars['Bytes']>;
  relayer_gt?: InputMaybe<Scalars['Bytes']>;
  relayer_lt?: InputMaybe<Scalars['Bytes']>;
  relayer_gte?: InputMaybe<Scalars['Bytes']>;
  relayer_lte?: InputMaybe<Scalars['Bytes']>;
  relayer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  relayer_contains?: InputMaybe<Scalars['Bytes']>;
  relayer_not_contains?: InputMaybe<Scalars['Bytes']>;
  fee?: InputMaybe<Scalars['BigInt']>;
  fee_not?: InputMaybe<Scalars['BigInt']>;
  fee_gt?: InputMaybe<Scalars['BigInt']>;
  fee_lt?: InputMaybe<Scalars['BigInt']>;
  fee_gte?: InputMaybe<Scalars['BigInt']>;
  fee_lte?: InputMaybe<Scalars['BigInt']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  refund?: InputMaybe<Scalars['BigInt']>;
  refund_not?: InputMaybe<Scalars['BigInt']>;
  refund_gt?: InputMaybe<Scalars['BigInt']>;
  refund_lt?: InputMaybe<Scalars['BigInt']>;
  refund_gte?: InputMaybe<Scalars['BigInt']>;
  refund_lte?: InputMaybe<Scalars['BigInt']>;
  refund_in?: InputMaybe<Array<Scalars['BigInt']>>;
  refund_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ExternalData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ExternalData_filter>>>;
};

export type ExternalData_orderBy =
  | 'id'
  | 'recipient'
  | 'extAmount'
  | 'relayer'
  | 'fee'
  | 'refund'
  | 'token';

export type Insertion = {
  id: Scalars['Bytes'];
  commitment: Scalars['BigInt'];
  leafIndex: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  newMerkleRoot: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Insertion_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  commitment?: InputMaybe<Scalars['BigInt']>;
  commitment_not?: InputMaybe<Scalars['BigInt']>;
  commitment_gt?: InputMaybe<Scalars['BigInt']>;
  commitment_lt?: InputMaybe<Scalars['BigInt']>;
  commitment_gte?: InputMaybe<Scalars['BigInt']>;
  commitment_lte?: InputMaybe<Scalars['BigInt']>;
  commitment_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commitment_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  leafIndex?: InputMaybe<Scalars['BigInt']>;
  leafIndex_not?: InputMaybe<Scalars['BigInt']>;
  leafIndex_gt?: InputMaybe<Scalars['BigInt']>;
  leafIndex_lt?: InputMaybe<Scalars['BigInt']>;
  leafIndex_gte?: InputMaybe<Scalars['BigInt']>;
  leafIndex_lte?: InputMaybe<Scalars['BigInt']>;
  leafIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  leafIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newMerkleRoot?: InputMaybe<Scalars['BigInt']>;
  newMerkleRoot_not?: InputMaybe<Scalars['BigInt']>;
  newMerkleRoot_gt?: InputMaybe<Scalars['BigInt']>;
  newMerkleRoot_lt?: InputMaybe<Scalars['BigInt']>;
  newMerkleRoot_gte?: InputMaybe<Scalars['BigInt']>;
  newMerkleRoot_lte?: InputMaybe<Scalars['BigInt']>;
  newMerkleRoot_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newMerkleRoot_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Insertion_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Insertion_filter>>>;
};

export type Insertion_orderBy =
  | 'id'
  | 'commitment'
  | 'leafIndex'
  | 'timestamp'
  | 'newMerkleRoot'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type NewCommitment = {
  id: Scalars['Bytes'];
  commitment: Scalars['BigInt'];
  subTreeIndex: Scalars['BigInt'];
  leafIndex: Scalars['BigInt'];
  encryptedOutput: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type NewCommitment_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  commitment?: InputMaybe<Scalars['BigInt']>;
  commitment_not?: InputMaybe<Scalars['BigInt']>;
  commitment_gt?: InputMaybe<Scalars['BigInt']>;
  commitment_lt?: InputMaybe<Scalars['BigInt']>;
  commitment_gte?: InputMaybe<Scalars['BigInt']>;
  commitment_lte?: InputMaybe<Scalars['BigInt']>;
  commitment_in?: InputMaybe<Array<Scalars['BigInt']>>;
  commitment_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subTreeIndex?: InputMaybe<Scalars['BigInt']>;
  subTreeIndex_not?: InputMaybe<Scalars['BigInt']>;
  subTreeIndex_gt?: InputMaybe<Scalars['BigInt']>;
  subTreeIndex_lt?: InputMaybe<Scalars['BigInt']>;
  subTreeIndex_gte?: InputMaybe<Scalars['BigInt']>;
  subTreeIndex_lte?: InputMaybe<Scalars['BigInt']>;
  subTreeIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subTreeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  leafIndex?: InputMaybe<Scalars['BigInt']>;
  leafIndex_not?: InputMaybe<Scalars['BigInt']>;
  leafIndex_gt?: InputMaybe<Scalars['BigInt']>;
  leafIndex_lt?: InputMaybe<Scalars['BigInt']>;
  leafIndex_gte?: InputMaybe<Scalars['BigInt']>;
  leafIndex_lte?: InputMaybe<Scalars['BigInt']>;
  leafIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  leafIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  encryptedOutput?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput_not?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput_gt?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput_lt?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput_gte?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput_lte?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput_in?: InputMaybe<Array<Scalars['Bytes']>>;
  encryptedOutput_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  encryptedOutput_contains?: InputMaybe<Scalars['Bytes']>;
  encryptedOutput_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewCommitment_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NewCommitment_filter>>>;
};

export type NewCommitment_orderBy =
  | 'id'
  | 'commitment'
  | 'subTreeIndex'
  | 'leafIndex'
  | 'encryptedOutput'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type NewNullifier = {
  id: Scalars['Bytes'];
  nullifier: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type NewNullifier_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  nullifier?: InputMaybe<Scalars['BigInt']>;
  nullifier_not?: InputMaybe<Scalars['BigInt']>;
  nullifier_gt?: InputMaybe<Scalars['BigInt']>;
  nullifier_lt?: InputMaybe<Scalars['BigInt']>;
  nullifier_gte?: InputMaybe<Scalars['BigInt']>;
  nullifier_lte?: InputMaybe<Scalars['BigInt']>;
  nullifier_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nullifier_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewNullifier_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NewNullifier_filter>>>;
};

export type NewNullifier_orderBy =
  | 'id'
  | 'nullifier'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type PublicInputs = {
  id: Scalars['Bytes'];
  roots: Scalars['Bytes'];
  extensionRoots: Scalars['Bytes'];
  inputNullifiers: Array<Scalars['BigInt']>;
  outputCommitments: Array<Scalars['BigInt']>;
  publicAmount: Scalars['BigInt'];
  extDataHash: Scalars['BigInt'];
};

export type PublicInputs_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  roots?: InputMaybe<Scalars['Bytes']>;
  roots_not?: InputMaybe<Scalars['Bytes']>;
  roots_gt?: InputMaybe<Scalars['Bytes']>;
  roots_lt?: InputMaybe<Scalars['Bytes']>;
  roots_gte?: InputMaybe<Scalars['Bytes']>;
  roots_lte?: InputMaybe<Scalars['Bytes']>;
  roots_in?: InputMaybe<Array<Scalars['Bytes']>>;
  roots_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  roots_contains?: InputMaybe<Scalars['Bytes']>;
  roots_not_contains?: InputMaybe<Scalars['Bytes']>;
  extensionRoots?: InputMaybe<Scalars['Bytes']>;
  extensionRoots_not?: InputMaybe<Scalars['Bytes']>;
  extensionRoots_gt?: InputMaybe<Scalars['Bytes']>;
  extensionRoots_lt?: InputMaybe<Scalars['Bytes']>;
  extensionRoots_gte?: InputMaybe<Scalars['Bytes']>;
  extensionRoots_lte?: InputMaybe<Scalars['Bytes']>;
  extensionRoots_in?: InputMaybe<Array<Scalars['Bytes']>>;
  extensionRoots_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  extensionRoots_contains?: InputMaybe<Scalars['Bytes']>;
  extensionRoots_not_contains?: InputMaybe<Scalars['Bytes']>;
  inputNullifiers?: InputMaybe<Array<Scalars['BigInt']>>;
  inputNullifiers_not?: InputMaybe<Array<Scalars['BigInt']>>;
  inputNullifiers_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  inputNullifiers_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  inputNullifiers_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  inputNullifiers_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  outputCommitments?: InputMaybe<Array<Scalars['BigInt']>>;
  outputCommitments_not?: InputMaybe<Array<Scalars['BigInt']>>;
  outputCommitments_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  outputCommitments_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  outputCommitments_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  outputCommitments_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  publicAmount?: InputMaybe<Scalars['BigInt']>;
  publicAmount_not?: InputMaybe<Scalars['BigInt']>;
  publicAmount_gt?: InputMaybe<Scalars['BigInt']>;
  publicAmount_lt?: InputMaybe<Scalars['BigInt']>;
  publicAmount_gte?: InputMaybe<Scalars['BigInt']>;
  publicAmount_lte?: InputMaybe<Scalars['BigInt']>;
  publicAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  publicAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  extDataHash?: InputMaybe<Scalars['BigInt']>;
  extDataHash_not?: InputMaybe<Scalars['BigInt']>;
  extDataHash_gt?: InputMaybe<Scalars['BigInt']>;
  extDataHash_lt?: InputMaybe<Scalars['BigInt']>;
  extDataHash_gte?: InputMaybe<Scalars['BigInt']>;
  extDataHash_lte?: InputMaybe<Scalars['BigInt']>;
  extDataHash_in?: InputMaybe<Array<Scalars['BigInt']>>;
  extDataHash_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PublicInputs_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PublicInputs_filter>>>;
};

export type PublicInputs_orderBy =
  | 'id'
  | 'roots'
  | 'extensionRoots'
  | 'inputNullifiers'
  | 'outputCommitments'
  | 'publicAmount'
  | 'extDataHash';

export type PublicKey = {
  id: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  key: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type PublicKey_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  key?: InputMaybe<Scalars['Bytes']>;
  key_not?: InputMaybe<Scalars['Bytes']>;
  key_gt?: InputMaybe<Scalars['Bytes']>;
  key_lt?: InputMaybe<Scalars['Bytes']>;
  key_gte?: InputMaybe<Scalars['Bytes']>;
  key_lte?: InputMaybe<Scalars['Bytes']>;
  key_in?: InputMaybe<Array<Scalars['Bytes']>>;
  key_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  key_contains?: InputMaybe<Scalars['Bytes']>;
  key_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PublicKey_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PublicKey_filter>>>;
};

export type PublicKey_orderBy =
  | 'id'
  | 'owner'
  | 'key'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Query = {
  edgeAddition?: Maybe<EdgeAddition>;
  edgeAdditions: Array<EdgeAddition>;
  edgeUpdate?: Maybe<EdgeUpdate>;
  edgeUpdates: Array<EdgeUpdate>;
  insertion?: Maybe<Insertion>;
  insertions: Array<Insertion>;
  newCommitment?: Maybe<NewCommitment>;
  newCommitments: Array<NewCommitment>;
  newNullifier?: Maybe<NewNullifier>;
  newNullifiers: Array<NewNullifier>;
  publicKey?: Maybe<PublicKey>;
  publicKeys: Array<PublicKey>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  externalData?: Maybe<ExternalData>;
  externalDatas: Array<ExternalData>;
  publicInputs: Array<PublicInputs>;
  encryptions: Array<Encryptions>;
  shieldedTransaction?: Maybe<ShieldedTransaction>;
  shieldedTransactions: Array<ShieldedTransaction>;
  vanchorTotalValueLocked?: Maybe<VAnchorTotalValueLocked>;
  vanchorTotalValueLockeds: Array<VAnchorTotalValueLocked>;
  vanchorTotalValueLockedByToken?: Maybe<VAnchorTotalValueLockedByToken>;
  vanchorTotalValueLockedByTokens: Array<VAnchorTotalValueLockedByToken>;
  vanchorTotalValueLockedEvery15Min?: Maybe<VAnchorTotalValueLockedEvery15Min>;
  vanchorTotalValueLockedEvery15Mins: Array<VAnchorTotalValueLockedEvery15Min>;
  vanchorTotalValueLockedByTokenEvery15Min?: Maybe<VAnchorTotalValueLockedByTokenEvery15Min>;
  vanchorTotalValueLockedByTokenEvery15Mins: Array<VAnchorTotalValueLockedByTokenEvery15Min>;
  vanchorTotalValueLockedEveryDay?: Maybe<VAnchorTotalValueLockedEveryDay>;
  vanchorTotalValueLockedEveryDays: Array<VAnchorTotalValueLockedEveryDay>;
  vanchorTotalValueLockedByTokenEveryDay?: Maybe<VAnchorTotalValueLockedByTokenEveryDay>;
  vanchorTotalValueLockedByTokenEveryDays: Array<VAnchorTotalValueLockedByTokenEveryDay>;
  vanchorTWL?: Maybe<VAnchorTWL>;
  vanchorTWLs: Array<VAnchorTWL>;
  vanchorTWLByToken?: Maybe<VAnchorTWLByToken>;
  vanchorTWLByTokens: Array<VAnchorTWLByToken>;
  vanchorTWLEvery15Min?: Maybe<VAnchorTWLEvery15Min>;
  vanchorTWLEvery15Mins: Array<VAnchorTWLEvery15Min>;
  vanchorTWLByTokenEvery15Min?: Maybe<VAnchorTWLByTokenEvery15Min>;
  vanchorTWLByTokenEvery15Mins: Array<VAnchorTWLByTokenEvery15Min>;
  vanchorTWLEveryDay?: Maybe<VAnchorTWLEveryDay>;
  vanchorTWLEveryDays: Array<VAnchorTWLEveryDay>;
  vanchorTWLByTokenEveryDay?: Maybe<VAnchorTWLByTokenEveryDay>;
  vanchorTWLByTokenEveryDays: Array<VAnchorTWLByTokenEveryDay>;
  vanchorRelayerFee?: Maybe<VAnchorRelayerFee>;
  vanchorRelayerFees: Array<VAnchorRelayerFee>;
  vanchorRelayerFeeByToken?: Maybe<VAnchorRelayerFeeByToken>;
  vanchorRelayerFeeByTokens: Array<VAnchorRelayerFeeByToken>;
  vanchorRelayerFeeEvery15Min?: Maybe<VAnchorRelayerFeeEvery15Min>;
  vanchorRelayerFeeEvery15Mins: Array<VAnchorRelayerFeeEvery15Min>;
  vanchorRelayerFeeByTokenEvery15Min?: Maybe<VAnchorRelayerFeeByTokenEvery15Min>;
  vanchorRelayerFeeByTokenEvery15Mins: Array<VAnchorRelayerFeeByTokenEvery15Min>;
  vanchorRelayerFeeEveryDay?: Maybe<VAnchorRelayerFeeEveryDay>;
  vanchorRelayerFeeEveryDays: Array<VAnchorRelayerFeeEveryDay>;
  vanchorRelayerFeeByTokenEveryDay?: Maybe<VAnchorRelayerFeeByTokenEveryDay>;
  vanchorRelayerFeeByTokenEveryDays: Array<VAnchorRelayerFeeByTokenEveryDay>;
  vanchorWrappingFee?: Maybe<VAnchorWrappingFee>;
  vanchorWrappingFees: Array<VAnchorWrappingFee>;
  vanchorWrappingFeeByToken?: Maybe<VAnchorWrappingFeeByToken>;
  vanchorWrappingFeeByTokens: Array<VAnchorWrappingFeeByToken>;
  vanchorWrappingFeeEvery15Min?: Maybe<VAnchorWrappingFeeEvery15Min>;
  vanchorWrappingFeeEvery15Mins: Array<VAnchorWrappingFeeEvery15Min>;
  vanchorWrappingFeeByTokenEvery15Min?: Maybe<VAnchorWrappingFeeByTokenEvery15Min>;
  vanchorWrappingFeeByTokenEvery15Mins: Array<VAnchorWrappingFeeByTokenEvery15Min>;
  vanchorWrappingFeeEveryDay?: Maybe<VAnchorWrappingFeeEveryDay>;
  vanchorWrappingFeeEveryDays: Array<VAnchorWrappingFeeEveryDay>;
  vanchorWrappingFeeByTokenEveryDay?: Maybe<VAnchorWrappingFeeByTokenEveryDay>;
  vanchorWrappingFeeByTokenEveryDays: Array<VAnchorWrappingFeeByTokenEveryDay>;
  wrappingEventLog?: Maybe<WrappingEventLog>;
  wrappingEventLogs: Array<WrappingEventLog>;
  unwrappingEventLog?: Maybe<UnwrappingEventLog>;
  unwrappingEventLogs: Array<UnwrappingEventLog>;
  vanchorWithdrawalLog?: Maybe<VAnchorWithdrawalLog>;
  vanchorWithdrawalLogs: Array<VAnchorWithdrawalLog>;
  vanchorWithdrawal?: Maybe<VAnchorWithdrawal>;
  vanchorWithdrawals: Array<VAnchorWithdrawal>;
  vanchorWithdrawalByToken?: Maybe<VAnchorWithdrawalByToken>;
  vanchorWithdrawalByTokens: Array<VAnchorWithdrawalByToken>;
  vanchorWithdrawalEvery15Min?: Maybe<VAnchorWithdrawalEvery15Min>;
  vanchorWithdrawalEvery15Mins: Array<VAnchorWithdrawalEvery15Min>;
  vanchorWithdrawalByTokenEvery15Min?: Maybe<VAnchorWithdrawalByTokenEvery15Min>;
  vanchorWithdrawalByTokenEvery15Mins: Array<VAnchorWithdrawalByTokenEvery15Min>;
  vanchorWithdrawalEveryDay?: Maybe<VAnchorWithdrawalEveryDay>;
  vanchorWithdrawalEveryDays: Array<VAnchorWithdrawalEveryDay>;
  vanchorWithdrawalByTokenEveryDay?: Maybe<VAnchorWithdrawalByTokenEveryDay>;
  vanchorWithdrawalByTokenEveryDays: Array<VAnchorWithdrawalByTokenEveryDay>;
  vanchorDeposit?: Maybe<VAnchorDeposit>;
  vanchorDeposits: Array<VAnchorDeposit>;
  vanchorDepositByToken?: Maybe<VAnchorDepositByToken>;
  vanchorDepositByTokens: Array<VAnchorDepositByToken>;
  vanchorDepositEvery15Min?: Maybe<VAnchorDepositEvery15Min>;
  vanchorDepositEvery15Mins: Array<VAnchorDepositEvery15Min>;
  vanchorDepositByTokenEvery15Min?: Maybe<VAnchorDepositByTokenEvery15Min>;
  vanchorDepositByTokenEvery15Mins: Array<VAnchorDepositByTokenEvery15Min>;
  vanchorDepositEveryDay?: Maybe<VAnchorDepositEveryDay>;
  vanchorDepositEveryDays: Array<VAnchorDepositEveryDay>;
  vanchorDepositByTokenEveryDay?: Maybe<VAnchorDepositByTokenEveryDay>;
  vanchorDepositByTokenEveryDays: Array<VAnchorDepositByTokenEveryDay>;
  vanchorDepositLog?: Maybe<VAnchorDepositLog>;
  vanchorDepositLogs: Array<VAnchorDepositLog>;
  vanchorTransferLog?: Maybe<VAnchorTransferLog>;
  vanchorTransferLogs: Array<VAnchorTransferLog>;
  vanchorVolume?: Maybe<VAnchorVolume>;
  vanchorVolumes: Array<VAnchorVolume>;
  vanchorVolumeByToken?: Maybe<VAnchorVolumeByToken>;
  vanchorVolumeByTokens: Array<VAnchorVolumeByToken>;
  vanchorVolumeEvery15Min?: Maybe<VAnchorVolumeEvery15Min>;
  vanchorVolumeEvery15Mins: Array<VAnchorVolumeEvery15Min>;
  vanchorVolumeByTokenEvery15Min?: Maybe<VAnchorVolumeByTokenEvery15Min>;
  vanchorVolumeByTokenEvery15Mins: Array<VAnchorVolumeByTokenEvery15Min>;
  vanchorVolumeEveryDay?: Maybe<VAnchorVolumeEveryDay>;
  vanchorVolumeEveryDays: Array<VAnchorVolumeEveryDay>;
  vanchorVolumeByTokenEveryDay?: Maybe<VAnchorVolumeByTokenEveryDay>;
  vanchorVolumeByTokenEveryDays: Array<VAnchorVolumeByTokenEveryDay>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryedgeAdditionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryedgeAdditionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EdgeAddition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EdgeAddition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryedgeUpdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryedgeUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EdgeUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EdgeUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinsertionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinsertionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Insertion_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Insertion_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewCommitmentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewCommitmentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewCommitment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewCommitment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewNullifierArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewNullifiersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewNullifier_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewNullifier_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypublicKeyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypublicKeysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PublicKey_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PublicKey_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexternalDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexternalDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExternalData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExternalData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypublicInputsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PublicInputs_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PublicInputs_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryencryptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Encryptions_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Encryptions_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryshieldedTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryshieldedTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ShieldedTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ShieldedTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTotalValueLockedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTotalValueLockedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalValueLocked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalValueLocked_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTotalValueLockedByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTotalValueLockedByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalValueLockedByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalValueLockedByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTotalValueLockedEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTotalValueLockedEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalValueLockedEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalValueLockedEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTotalValueLockedByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTotalValueLockedByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalValueLockedByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalValueLockedByTokenEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTotalValueLockedEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTotalValueLockedEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalValueLockedEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalValueLockedEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTotalValueLockedByTokenEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTotalValueLockedByTokenEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalValueLockedByTokenEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalValueLockedByTokenEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTWLArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTWLsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTWL_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTWL_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTWLByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTWLByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTWLByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTWLByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTWLEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTWLEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTWLEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTWLEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTWLByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTWLByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTWLByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTWLByTokenEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTWLEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTWLEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTWLEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTWLEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTWLByTokenEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTWLByTokenEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTWLByTokenEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTWLByTokenEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorRelayerFeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorRelayerFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorRelayerFee_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorRelayerFee_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorRelayerFeeByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorRelayerFeeByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorRelayerFeeByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorRelayerFeeByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorRelayerFeeEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorRelayerFeeEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorRelayerFeeEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorRelayerFeeEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorRelayerFeeByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorRelayerFeeByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorRelayerFeeByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorRelayerFeeByTokenEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorRelayerFeeEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorRelayerFeeEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorRelayerFeeEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorRelayerFeeEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorRelayerFeeByTokenEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorRelayerFeeByTokenEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorRelayerFeeByTokenEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorRelayerFeeByTokenEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWrappingFeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWrappingFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWrappingFee_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWrappingFee_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWrappingFeeByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWrappingFeeByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWrappingFeeByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWrappingFeeByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWrappingFeeEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWrappingFeeEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWrappingFeeEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWrappingFeeEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWrappingFeeByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWrappingFeeByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWrappingFeeByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWrappingFeeByTokenEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWrappingFeeEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWrappingFeeEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWrappingFeeEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWrappingFeeEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWrappingFeeByTokenEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWrappingFeeByTokenEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWrappingFeeByTokenEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWrappingFeeByTokenEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywrappingEventLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywrappingEventLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WrappingEventLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WrappingEventLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunwrappingEventLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunwrappingEventLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UnwrappingEventLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnwrappingEventLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWithdrawalLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWithdrawalLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWithdrawalLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWithdrawalLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWithdrawalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWithdrawalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWithdrawal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWithdrawal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWithdrawalByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWithdrawalByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWithdrawalByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWithdrawalByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWithdrawalEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWithdrawalEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWithdrawalEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWithdrawalEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWithdrawalByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWithdrawalByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWithdrawalByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWithdrawalByTokenEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWithdrawalEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWithdrawalEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWithdrawalEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWithdrawalEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWithdrawalByTokenEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorWithdrawalByTokenEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWithdrawalByTokenEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWithdrawalByTokenEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorDepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorDepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorDeposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorDeposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorDepositByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorDepositByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorDepositByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorDepositByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorDepositEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorDepositEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorDepositEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorDepositEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorDepositByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorDepositByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorDepositByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorDepositByTokenEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorDepositEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorDepositEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorDepositEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorDepositEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorDepositByTokenEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorDepositByTokenEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorDepositByTokenEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorDepositByTokenEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorDepositLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorDepositLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorDepositLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorDepositLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTransferLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorTransferLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTransferLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTransferLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorVolume_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorVolume_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorVolumeByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorVolumeByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorVolumeByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorVolumeByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorVolumeEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorVolumeEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorVolumeEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorVolumeEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorVolumeByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorVolumeByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorVolumeByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorVolumeByTokenEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorVolumeEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorVolumeEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorVolumeEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorVolumeEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorVolumeByTokenEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvanchorVolumeByTokenEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorVolumeByTokenEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorVolumeByTokenEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type ShieldedTransaction = {
  id: Scalars['Bytes'];
  vanchor: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  value: Scalars['BigInt'];
  proof: Scalars['Bytes'];
  auxPublicInputs: Scalars['Bytes'];
  externalData: ExternalData;
  publicInputs: PublicInputs;
  encryptions: Encryptions;
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type ShieldedTransaction_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  vanchor?: InputMaybe<Scalars['Bytes']>;
  vanchor_not?: InputMaybe<Scalars['Bytes']>;
  vanchor_gt?: InputMaybe<Scalars['Bytes']>;
  vanchor_lt?: InputMaybe<Scalars['Bytes']>;
  vanchor_gte?: InputMaybe<Scalars['Bytes']>;
  vanchor_lte?: InputMaybe<Scalars['Bytes']>;
  vanchor_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vanchor_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vanchor_contains?: InputMaybe<Scalars['Bytes']>;
  vanchor_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proof?: InputMaybe<Scalars['Bytes']>;
  proof_not?: InputMaybe<Scalars['Bytes']>;
  proof_gt?: InputMaybe<Scalars['Bytes']>;
  proof_lt?: InputMaybe<Scalars['Bytes']>;
  proof_gte?: InputMaybe<Scalars['Bytes']>;
  proof_lte?: InputMaybe<Scalars['Bytes']>;
  proof_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proof_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proof_contains?: InputMaybe<Scalars['Bytes']>;
  proof_not_contains?: InputMaybe<Scalars['Bytes']>;
  auxPublicInputs?: InputMaybe<Scalars['Bytes']>;
  auxPublicInputs_not?: InputMaybe<Scalars['Bytes']>;
  auxPublicInputs_gt?: InputMaybe<Scalars['Bytes']>;
  auxPublicInputs_lt?: InputMaybe<Scalars['Bytes']>;
  auxPublicInputs_gte?: InputMaybe<Scalars['Bytes']>;
  auxPublicInputs_lte?: InputMaybe<Scalars['Bytes']>;
  auxPublicInputs_in?: InputMaybe<Array<Scalars['Bytes']>>;
  auxPublicInputs_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  auxPublicInputs_contains?: InputMaybe<Scalars['Bytes']>;
  auxPublicInputs_not_contains?: InputMaybe<Scalars['Bytes']>;
  externalData?: InputMaybe<Scalars['String']>;
  externalData_not?: InputMaybe<Scalars['String']>;
  externalData_gt?: InputMaybe<Scalars['String']>;
  externalData_lt?: InputMaybe<Scalars['String']>;
  externalData_gte?: InputMaybe<Scalars['String']>;
  externalData_lte?: InputMaybe<Scalars['String']>;
  externalData_in?: InputMaybe<Array<Scalars['String']>>;
  externalData_not_in?: InputMaybe<Array<Scalars['String']>>;
  externalData_contains?: InputMaybe<Scalars['String']>;
  externalData_contains_nocase?: InputMaybe<Scalars['String']>;
  externalData_not_contains?: InputMaybe<Scalars['String']>;
  externalData_not_contains_nocase?: InputMaybe<Scalars['String']>;
  externalData_starts_with?: InputMaybe<Scalars['String']>;
  externalData_starts_with_nocase?: InputMaybe<Scalars['String']>;
  externalData_not_starts_with?: InputMaybe<Scalars['String']>;
  externalData_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  externalData_ends_with?: InputMaybe<Scalars['String']>;
  externalData_ends_with_nocase?: InputMaybe<Scalars['String']>;
  externalData_not_ends_with?: InputMaybe<Scalars['String']>;
  externalData_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  externalData_?: InputMaybe<ExternalData_filter>;
  publicInputs?: InputMaybe<Scalars['String']>;
  publicInputs_not?: InputMaybe<Scalars['String']>;
  publicInputs_gt?: InputMaybe<Scalars['String']>;
  publicInputs_lt?: InputMaybe<Scalars['String']>;
  publicInputs_gte?: InputMaybe<Scalars['String']>;
  publicInputs_lte?: InputMaybe<Scalars['String']>;
  publicInputs_in?: InputMaybe<Array<Scalars['String']>>;
  publicInputs_not_in?: InputMaybe<Array<Scalars['String']>>;
  publicInputs_contains?: InputMaybe<Scalars['String']>;
  publicInputs_contains_nocase?: InputMaybe<Scalars['String']>;
  publicInputs_not_contains?: InputMaybe<Scalars['String']>;
  publicInputs_not_contains_nocase?: InputMaybe<Scalars['String']>;
  publicInputs_starts_with?: InputMaybe<Scalars['String']>;
  publicInputs_starts_with_nocase?: InputMaybe<Scalars['String']>;
  publicInputs_not_starts_with?: InputMaybe<Scalars['String']>;
  publicInputs_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  publicInputs_ends_with?: InputMaybe<Scalars['String']>;
  publicInputs_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publicInputs_not_ends_with?: InputMaybe<Scalars['String']>;
  publicInputs_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  publicInputs_?: InputMaybe<PublicInputs_filter>;
  encryptions?: InputMaybe<Scalars['String']>;
  encryptions_not?: InputMaybe<Scalars['String']>;
  encryptions_gt?: InputMaybe<Scalars['String']>;
  encryptions_lt?: InputMaybe<Scalars['String']>;
  encryptions_gte?: InputMaybe<Scalars['String']>;
  encryptions_lte?: InputMaybe<Scalars['String']>;
  encryptions_in?: InputMaybe<Array<Scalars['String']>>;
  encryptions_not_in?: InputMaybe<Array<Scalars['String']>>;
  encryptions_contains?: InputMaybe<Scalars['String']>;
  encryptions_contains_nocase?: InputMaybe<Scalars['String']>;
  encryptions_not_contains?: InputMaybe<Scalars['String']>;
  encryptions_not_contains_nocase?: InputMaybe<Scalars['String']>;
  encryptions_starts_with?: InputMaybe<Scalars['String']>;
  encryptions_starts_with_nocase?: InputMaybe<Scalars['String']>;
  encryptions_not_starts_with?: InputMaybe<Scalars['String']>;
  encryptions_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  encryptions_ends_with?: InputMaybe<Scalars['String']>;
  encryptions_ends_with_nocase?: InputMaybe<Scalars['String']>;
  encryptions_not_ends_with?: InputMaybe<Scalars['String']>;
  encryptions_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  encryptions_?: InputMaybe<Encryptions_filter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ShieldedTransaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ShieldedTransaction_filter>>>;
};

export type ShieldedTransaction_orderBy =
  | 'id'
  | 'vanchor'
  | 'sender'
  | 'value'
  | 'proof'
  | 'auxPublicInputs'
  | 'externalData'
  | 'externalData__id'
  | 'externalData__recipient'
  | 'externalData__extAmount'
  | 'externalData__relayer'
  | 'externalData__fee'
  | 'externalData__refund'
  | 'externalData__token'
  | 'publicInputs'
  | 'publicInputs__id'
  | 'publicInputs__roots'
  | 'publicInputs__extensionRoots'
  | 'publicInputs__publicAmount'
  | 'publicInputs__extDataHash'
  | 'encryptions'
  | 'encryptions__id'
  | 'encryptions__encryptedOutput1'
  | 'encryptions__encryptedOutput2'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Subscription = {
  edgeAddition?: Maybe<EdgeAddition>;
  edgeAdditions: Array<EdgeAddition>;
  edgeUpdate?: Maybe<EdgeUpdate>;
  edgeUpdates: Array<EdgeUpdate>;
  insertion?: Maybe<Insertion>;
  insertions: Array<Insertion>;
  newCommitment?: Maybe<NewCommitment>;
  newCommitments: Array<NewCommitment>;
  newNullifier?: Maybe<NewNullifier>;
  newNullifiers: Array<NewNullifier>;
  publicKey?: Maybe<PublicKey>;
  publicKeys: Array<PublicKey>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  externalData?: Maybe<ExternalData>;
  externalDatas: Array<ExternalData>;
  publicInputs: Array<PublicInputs>;
  encryptions: Array<Encryptions>;
  shieldedTransaction?: Maybe<ShieldedTransaction>;
  shieldedTransactions: Array<ShieldedTransaction>;
  vanchorTotalValueLocked?: Maybe<VAnchorTotalValueLocked>;
  vanchorTotalValueLockeds: Array<VAnchorTotalValueLocked>;
  vanchorTotalValueLockedByToken?: Maybe<VAnchorTotalValueLockedByToken>;
  vanchorTotalValueLockedByTokens: Array<VAnchorTotalValueLockedByToken>;
  vanchorTotalValueLockedEvery15Min?: Maybe<VAnchorTotalValueLockedEvery15Min>;
  vanchorTotalValueLockedEvery15Mins: Array<VAnchorTotalValueLockedEvery15Min>;
  vanchorTotalValueLockedByTokenEvery15Min?: Maybe<VAnchorTotalValueLockedByTokenEvery15Min>;
  vanchorTotalValueLockedByTokenEvery15Mins: Array<VAnchorTotalValueLockedByTokenEvery15Min>;
  vanchorTotalValueLockedEveryDay?: Maybe<VAnchorTotalValueLockedEveryDay>;
  vanchorTotalValueLockedEveryDays: Array<VAnchorTotalValueLockedEveryDay>;
  vanchorTotalValueLockedByTokenEveryDay?: Maybe<VAnchorTotalValueLockedByTokenEveryDay>;
  vanchorTotalValueLockedByTokenEveryDays: Array<VAnchorTotalValueLockedByTokenEveryDay>;
  vanchorTWL?: Maybe<VAnchorTWL>;
  vanchorTWLs: Array<VAnchorTWL>;
  vanchorTWLByToken?: Maybe<VAnchorTWLByToken>;
  vanchorTWLByTokens: Array<VAnchorTWLByToken>;
  vanchorTWLEvery15Min?: Maybe<VAnchorTWLEvery15Min>;
  vanchorTWLEvery15Mins: Array<VAnchorTWLEvery15Min>;
  vanchorTWLByTokenEvery15Min?: Maybe<VAnchorTWLByTokenEvery15Min>;
  vanchorTWLByTokenEvery15Mins: Array<VAnchorTWLByTokenEvery15Min>;
  vanchorTWLEveryDay?: Maybe<VAnchorTWLEveryDay>;
  vanchorTWLEveryDays: Array<VAnchorTWLEveryDay>;
  vanchorTWLByTokenEveryDay?: Maybe<VAnchorTWLByTokenEveryDay>;
  vanchorTWLByTokenEveryDays: Array<VAnchorTWLByTokenEveryDay>;
  vanchorRelayerFee?: Maybe<VAnchorRelayerFee>;
  vanchorRelayerFees: Array<VAnchorRelayerFee>;
  vanchorRelayerFeeByToken?: Maybe<VAnchorRelayerFeeByToken>;
  vanchorRelayerFeeByTokens: Array<VAnchorRelayerFeeByToken>;
  vanchorRelayerFeeEvery15Min?: Maybe<VAnchorRelayerFeeEvery15Min>;
  vanchorRelayerFeeEvery15Mins: Array<VAnchorRelayerFeeEvery15Min>;
  vanchorRelayerFeeByTokenEvery15Min?: Maybe<VAnchorRelayerFeeByTokenEvery15Min>;
  vanchorRelayerFeeByTokenEvery15Mins: Array<VAnchorRelayerFeeByTokenEvery15Min>;
  vanchorRelayerFeeEveryDay?: Maybe<VAnchorRelayerFeeEveryDay>;
  vanchorRelayerFeeEveryDays: Array<VAnchorRelayerFeeEveryDay>;
  vanchorRelayerFeeByTokenEveryDay?: Maybe<VAnchorRelayerFeeByTokenEveryDay>;
  vanchorRelayerFeeByTokenEveryDays: Array<VAnchorRelayerFeeByTokenEveryDay>;
  vanchorWrappingFee?: Maybe<VAnchorWrappingFee>;
  vanchorWrappingFees: Array<VAnchorWrappingFee>;
  vanchorWrappingFeeByToken?: Maybe<VAnchorWrappingFeeByToken>;
  vanchorWrappingFeeByTokens: Array<VAnchorWrappingFeeByToken>;
  vanchorWrappingFeeEvery15Min?: Maybe<VAnchorWrappingFeeEvery15Min>;
  vanchorWrappingFeeEvery15Mins: Array<VAnchorWrappingFeeEvery15Min>;
  vanchorWrappingFeeByTokenEvery15Min?: Maybe<VAnchorWrappingFeeByTokenEvery15Min>;
  vanchorWrappingFeeByTokenEvery15Mins: Array<VAnchorWrappingFeeByTokenEvery15Min>;
  vanchorWrappingFeeEveryDay?: Maybe<VAnchorWrappingFeeEveryDay>;
  vanchorWrappingFeeEveryDays: Array<VAnchorWrappingFeeEveryDay>;
  vanchorWrappingFeeByTokenEveryDay?: Maybe<VAnchorWrappingFeeByTokenEveryDay>;
  vanchorWrappingFeeByTokenEveryDays: Array<VAnchorWrappingFeeByTokenEveryDay>;
  wrappingEventLog?: Maybe<WrappingEventLog>;
  wrappingEventLogs: Array<WrappingEventLog>;
  unwrappingEventLog?: Maybe<UnwrappingEventLog>;
  unwrappingEventLogs: Array<UnwrappingEventLog>;
  vanchorWithdrawalLog?: Maybe<VAnchorWithdrawalLog>;
  vanchorWithdrawalLogs: Array<VAnchorWithdrawalLog>;
  vanchorWithdrawal?: Maybe<VAnchorWithdrawal>;
  vanchorWithdrawals: Array<VAnchorWithdrawal>;
  vanchorWithdrawalByToken?: Maybe<VAnchorWithdrawalByToken>;
  vanchorWithdrawalByTokens: Array<VAnchorWithdrawalByToken>;
  vanchorWithdrawalEvery15Min?: Maybe<VAnchorWithdrawalEvery15Min>;
  vanchorWithdrawalEvery15Mins: Array<VAnchorWithdrawalEvery15Min>;
  vanchorWithdrawalByTokenEvery15Min?: Maybe<VAnchorWithdrawalByTokenEvery15Min>;
  vanchorWithdrawalByTokenEvery15Mins: Array<VAnchorWithdrawalByTokenEvery15Min>;
  vanchorWithdrawalEveryDay?: Maybe<VAnchorWithdrawalEveryDay>;
  vanchorWithdrawalEveryDays: Array<VAnchorWithdrawalEveryDay>;
  vanchorWithdrawalByTokenEveryDay?: Maybe<VAnchorWithdrawalByTokenEveryDay>;
  vanchorWithdrawalByTokenEveryDays: Array<VAnchorWithdrawalByTokenEveryDay>;
  vanchorDeposit?: Maybe<VAnchorDeposit>;
  vanchorDeposits: Array<VAnchorDeposit>;
  vanchorDepositByToken?: Maybe<VAnchorDepositByToken>;
  vanchorDepositByTokens: Array<VAnchorDepositByToken>;
  vanchorDepositEvery15Min?: Maybe<VAnchorDepositEvery15Min>;
  vanchorDepositEvery15Mins: Array<VAnchorDepositEvery15Min>;
  vanchorDepositByTokenEvery15Min?: Maybe<VAnchorDepositByTokenEvery15Min>;
  vanchorDepositByTokenEvery15Mins: Array<VAnchorDepositByTokenEvery15Min>;
  vanchorDepositEveryDay?: Maybe<VAnchorDepositEveryDay>;
  vanchorDepositEveryDays: Array<VAnchorDepositEveryDay>;
  vanchorDepositByTokenEveryDay?: Maybe<VAnchorDepositByTokenEveryDay>;
  vanchorDepositByTokenEveryDays: Array<VAnchorDepositByTokenEveryDay>;
  vanchorDepositLog?: Maybe<VAnchorDepositLog>;
  vanchorDepositLogs: Array<VAnchorDepositLog>;
  vanchorTransferLog?: Maybe<VAnchorTransferLog>;
  vanchorTransferLogs: Array<VAnchorTransferLog>;
  vanchorVolume?: Maybe<VAnchorVolume>;
  vanchorVolumes: Array<VAnchorVolume>;
  vanchorVolumeByToken?: Maybe<VAnchorVolumeByToken>;
  vanchorVolumeByTokens: Array<VAnchorVolumeByToken>;
  vanchorVolumeEvery15Min?: Maybe<VAnchorVolumeEvery15Min>;
  vanchorVolumeEvery15Mins: Array<VAnchorVolumeEvery15Min>;
  vanchorVolumeByTokenEvery15Min?: Maybe<VAnchorVolumeByTokenEvery15Min>;
  vanchorVolumeByTokenEvery15Mins: Array<VAnchorVolumeByTokenEvery15Min>;
  vanchorVolumeEveryDay?: Maybe<VAnchorVolumeEveryDay>;
  vanchorVolumeEveryDays: Array<VAnchorVolumeEveryDay>;
  vanchorVolumeByTokenEveryDay?: Maybe<VAnchorVolumeByTokenEveryDay>;
  vanchorVolumeByTokenEveryDays: Array<VAnchorVolumeByTokenEveryDay>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionedgeAdditionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionedgeAdditionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EdgeAddition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EdgeAddition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionedgeUpdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionedgeUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EdgeUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EdgeUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninsertionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninsertionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Insertion_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Insertion_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewCommitmentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewCommitmentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewCommitment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewCommitment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewNullifierArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewNullifiersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewNullifier_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewNullifier_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpublicKeyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpublicKeysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PublicKey_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PublicKey_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexternalDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexternalDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExternalData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExternalData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpublicInputsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PublicInputs_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PublicInputs_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionencryptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Encryptions_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Encryptions_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionshieldedTransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionshieldedTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ShieldedTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ShieldedTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTotalValueLockedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTotalValueLockedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalValueLocked_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalValueLocked_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTotalValueLockedByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTotalValueLockedByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalValueLockedByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalValueLockedByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTotalValueLockedEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTotalValueLockedEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalValueLockedEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalValueLockedEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTotalValueLockedByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTotalValueLockedByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalValueLockedByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalValueLockedByTokenEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTotalValueLockedEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTotalValueLockedEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalValueLockedEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalValueLockedEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTotalValueLockedByTokenEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTotalValueLockedByTokenEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalValueLockedByTokenEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalValueLockedByTokenEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTWLArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTWLsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTWL_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTWL_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTWLByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTWLByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTWLByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTWLByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTWLEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTWLEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTWLEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTWLEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTWLByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTWLByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTWLByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTWLByTokenEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTWLEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTWLEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTWLEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTWLEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTWLByTokenEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTWLByTokenEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTWLByTokenEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTWLByTokenEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorRelayerFeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorRelayerFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorRelayerFee_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorRelayerFee_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorRelayerFeeByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorRelayerFeeByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorRelayerFeeByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorRelayerFeeByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorRelayerFeeEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorRelayerFeeEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorRelayerFeeEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorRelayerFeeEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorRelayerFeeByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorRelayerFeeByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorRelayerFeeByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorRelayerFeeByTokenEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorRelayerFeeEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorRelayerFeeEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorRelayerFeeEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorRelayerFeeEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorRelayerFeeByTokenEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorRelayerFeeByTokenEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorRelayerFeeByTokenEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorRelayerFeeByTokenEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWrappingFeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWrappingFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWrappingFee_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWrappingFee_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWrappingFeeByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWrappingFeeByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWrappingFeeByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWrappingFeeByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWrappingFeeEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWrappingFeeEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWrappingFeeEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWrappingFeeEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWrappingFeeByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWrappingFeeByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWrappingFeeByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWrappingFeeByTokenEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWrappingFeeEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWrappingFeeEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWrappingFeeEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWrappingFeeEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWrappingFeeByTokenEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWrappingFeeByTokenEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWrappingFeeByTokenEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWrappingFeeByTokenEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwrappingEventLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwrappingEventLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WrappingEventLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WrappingEventLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunwrappingEventLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunwrappingEventLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UnwrappingEventLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnwrappingEventLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWithdrawalLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWithdrawalLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWithdrawalLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWithdrawalLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWithdrawalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWithdrawalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWithdrawal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWithdrawal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWithdrawalByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWithdrawalByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWithdrawalByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWithdrawalByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWithdrawalEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWithdrawalEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWithdrawalEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWithdrawalEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWithdrawalByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWithdrawalByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWithdrawalByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWithdrawalByTokenEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWithdrawalEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWithdrawalEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWithdrawalEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWithdrawalEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWithdrawalByTokenEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorWithdrawalByTokenEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorWithdrawalByTokenEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorWithdrawalByTokenEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorDepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorDepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorDeposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorDeposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorDepositByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorDepositByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorDepositByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorDepositByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorDepositEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorDepositEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorDepositEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorDepositEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorDepositByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorDepositByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorDepositByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorDepositByTokenEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorDepositEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorDepositEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorDepositEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorDepositEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorDepositByTokenEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorDepositByTokenEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorDepositByTokenEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorDepositByTokenEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorDepositLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorDepositLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorDepositLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorDepositLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTransferLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorTransferLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTransferLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTransferLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorVolume_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorVolume_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorVolumeByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorVolumeByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorVolumeByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorVolumeByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorVolumeEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorVolumeEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorVolumeEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorVolumeEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorVolumeByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorVolumeByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorVolumeByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorVolumeByTokenEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorVolumeEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorVolumeEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorVolumeEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorVolumeEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorVolumeByTokenEveryDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvanchorVolumeByTokenEveryDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorVolumeByTokenEveryDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorVolumeByTokenEveryDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Token = {
  id: Scalars['Bytes'];
  address: Scalars['Bytes'];
  decimals: Scalars['Int'];
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type Token_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_gt?: InputMaybe<Scalars['Bytes']>;
  address_lt?: InputMaybe<Scalars['Bytes']>;
  address_gte?: InputMaybe<Scalars['Bytes']>;
  address_lte?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  decimals?: InputMaybe<Scalars['Int']>;
  decimals_not?: InputMaybe<Scalars['Int']>;
  decimals_gt?: InputMaybe<Scalars['Int']>;
  decimals_lt?: InputMaybe<Scalars['Int']>;
  decimals_gte?: InputMaybe<Scalars['Int']>;
  decimals_lte?: InputMaybe<Scalars['Int']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'address'
  | 'decimals'
  | 'name'
  | 'symbol';

export type UnwrappingEventLog = {
  id: Scalars['String'];
  sender: Scalars['Bytes'];
  recipient: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type UnwrappingEventLog_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  recipient?: InputMaybe<Scalars['Bytes']>;
  recipient_not?: InputMaybe<Scalars['Bytes']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']>;
  recipient_lt?: InputMaybe<Scalars['Bytes']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UnwrappingEventLog_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UnwrappingEventLog_filter>>>;
};

export type UnwrappingEventLog_orderBy =
  | 'id'
  | 'sender'
  | 'recipient'
  | 'tokenAddress'
  | 'amount'
  | 'timestamp';

export type VAnchorDeposit = {
  id: Scalars['String'];
  deposit: Scalars['BigInt'];
  averageDeposit: Scalars['BigInt'];
  totalCount: Scalars['BigInt'];
};

export type VAnchorDepositByToken = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  deposit: Scalars['BigInt'];
  averageDeposit: Scalars['BigInt'];
  totalCount: Scalars['BigInt'];
};

export type VAnchorDepositByTokenEvery15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  deposit: Scalars['BigInt'];
  averageDeposit: Scalars['BigInt'];
  totalCount: Scalars['BigInt'];
};

export type VAnchorDepositByTokenEvery15Min_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageDeposit?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_not?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount?: InputMaybe<Scalars['BigInt']>;
  totalCount_not?: InputMaybe<Scalars['BigInt']>;
  totalCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorDepositByTokenEvery15Min_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorDepositByTokenEvery15Min_filter>>>;
};

export type VAnchorDepositByTokenEvery15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'startInterval'
  | 'endInterval'
  | 'deposit'
  | 'averageDeposit'
  | 'totalCount';

export type VAnchorDepositByTokenEveryDay = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  deposit: Scalars['BigInt'];
  averageDeposit: Scalars['BigInt'];
  totalCount: Scalars['BigInt'];
};

export type VAnchorDepositByTokenEveryDay_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageDeposit?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_not?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount?: InputMaybe<Scalars['BigInt']>;
  totalCount_not?: InputMaybe<Scalars['BigInt']>;
  totalCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorDepositByTokenEveryDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorDepositByTokenEveryDay_filter>>>;
};

export type VAnchorDepositByTokenEveryDay_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'startInterval'
  | 'endInterval'
  | 'deposit'
  | 'averageDeposit'
  | 'totalCount';

export type VAnchorDepositByToken_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageDeposit?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_not?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount?: InputMaybe<Scalars['BigInt']>;
  totalCount_not?: InputMaybe<Scalars['BigInt']>;
  totalCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorDepositByToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorDepositByToken_filter>>>;
};

export type VAnchorDepositByToken_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'deposit'
  | 'averageDeposit'
  | 'totalCount';

export type VAnchorDepositEvery15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  deposit: Scalars['BigInt'];
  averageDeposit: Scalars['BigInt'];
  totalCount: Scalars['BigInt'];
};

export type VAnchorDepositEvery15Min_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageDeposit?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_not?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount?: InputMaybe<Scalars['BigInt']>;
  totalCount_not?: InputMaybe<Scalars['BigInt']>;
  totalCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorDepositEvery15Min_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorDepositEvery15Min_filter>>>;
};

export type VAnchorDepositEvery15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'startInterval'
  | 'endInterval'
  | 'deposit'
  | 'averageDeposit'
  | 'totalCount';

export type VAnchorDepositEveryDay = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  deposit: Scalars['BigInt'];
  averageDeposit: Scalars['BigInt'];
  totalCount: Scalars['BigInt'];
};

export type VAnchorDepositEveryDay_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageDeposit?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_not?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount?: InputMaybe<Scalars['BigInt']>;
  totalCount_not?: InputMaybe<Scalars['BigInt']>;
  totalCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorDepositEveryDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorDepositEveryDay_filter>>>;
};

export type VAnchorDepositEveryDay_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'startInterval'
  | 'endInterval'
  | 'deposit'
  | 'averageDeposit'
  | 'totalCount';

export type VAnchorDepositLog = {
  id: Scalars['String'];
  deposit: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  timestamp: Scalars['BigInt'];
};

export type VAnchorDepositLog_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorDepositLog_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorDepositLog_filter>>>;
};

export type VAnchorDepositLog_orderBy =
  | 'id'
  | 'deposit'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'timestamp';

export type VAnchorDeposit_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deposit?: InputMaybe<Scalars['BigInt']>;
  deposit_not?: InputMaybe<Scalars['BigInt']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']>;
  deposit_lt?: InputMaybe<Scalars['BigInt']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageDeposit?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_not?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  averageDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount?: InputMaybe<Scalars['BigInt']>;
  totalCount_not?: InputMaybe<Scalars['BigInt']>;
  totalCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorDeposit_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorDeposit_filter>>>;
};

export type VAnchorDeposit_orderBy =
  | 'id'
  | 'deposit'
  | 'averageDeposit'
  | 'totalCount';

export type VAnchorRelayerFee = {
  id: Scalars['String'];
  totalFees: Scalars['BigInt'];
  txFees: Scalars['BigInt'];
  profit: Scalars['BigInt'];
};

export type VAnchorRelayerFeeByToken = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  tokenAddress: Scalars['Bytes'];
  totalFees: Scalars['BigInt'];
  txFees: Scalars['BigInt'];
  profit: Scalars['BigInt'];
};

export type VAnchorRelayerFeeByTokenEvery15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  totalFees: Scalars['BigInt'];
  txFees: Scalars['BigInt'];
  profit: Scalars['BigInt'];
};

export type VAnchorRelayerFeeByTokenEvery15Min_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFees?: InputMaybe<Scalars['BigInt']>;
  totalFees_not?: InputMaybe<Scalars['BigInt']>;
  totalFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txFees?: InputMaybe<Scalars['BigInt']>;
  txFees_not?: InputMaybe<Scalars['BigInt']>;
  txFees_gt?: InputMaybe<Scalars['BigInt']>;
  txFees_lt?: InputMaybe<Scalars['BigInt']>;
  txFees_gte?: InputMaybe<Scalars['BigInt']>;
  txFees_lte?: InputMaybe<Scalars['BigInt']>;
  txFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profit?: InputMaybe<Scalars['BigInt']>;
  profit_not?: InputMaybe<Scalars['BigInt']>;
  profit_gt?: InputMaybe<Scalars['BigInt']>;
  profit_lt?: InputMaybe<Scalars['BigInt']>;
  profit_gte?: InputMaybe<Scalars['BigInt']>;
  profit_lte?: InputMaybe<Scalars['BigInt']>;
  profit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorRelayerFeeByTokenEvery15Min_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorRelayerFeeByTokenEvery15Min_filter>>>;
};

export type VAnchorRelayerFeeByTokenEvery15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'startInterval'
  | 'endInterval'
  | 'totalFees'
  | 'txFees'
  | 'profit';

export type VAnchorRelayerFeeByTokenEveryDay = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  totalFees: Scalars['BigInt'];
  txFees: Scalars['BigInt'];
  profit: Scalars['BigInt'];
};

export type VAnchorRelayerFeeByTokenEveryDay_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFees?: InputMaybe<Scalars['BigInt']>;
  totalFees_not?: InputMaybe<Scalars['BigInt']>;
  totalFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txFees?: InputMaybe<Scalars['BigInt']>;
  txFees_not?: InputMaybe<Scalars['BigInt']>;
  txFees_gt?: InputMaybe<Scalars['BigInt']>;
  txFees_lt?: InputMaybe<Scalars['BigInt']>;
  txFees_gte?: InputMaybe<Scalars['BigInt']>;
  txFees_lte?: InputMaybe<Scalars['BigInt']>;
  txFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profit?: InputMaybe<Scalars['BigInt']>;
  profit_not?: InputMaybe<Scalars['BigInt']>;
  profit_gt?: InputMaybe<Scalars['BigInt']>;
  profit_lt?: InputMaybe<Scalars['BigInt']>;
  profit_gte?: InputMaybe<Scalars['BigInt']>;
  profit_lte?: InputMaybe<Scalars['BigInt']>;
  profit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorRelayerFeeByTokenEveryDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorRelayerFeeByTokenEveryDay_filter>>>;
};

export type VAnchorRelayerFeeByTokenEveryDay_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'startInterval'
  | 'endInterval'
  | 'totalFees'
  | 'txFees'
  | 'profit';

export type VAnchorRelayerFeeByToken_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  totalFees?: InputMaybe<Scalars['BigInt']>;
  totalFees_not?: InputMaybe<Scalars['BigInt']>;
  totalFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txFees?: InputMaybe<Scalars['BigInt']>;
  txFees_not?: InputMaybe<Scalars['BigInt']>;
  txFees_gt?: InputMaybe<Scalars['BigInt']>;
  txFees_lt?: InputMaybe<Scalars['BigInt']>;
  txFees_gte?: InputMaybe<Scalars['BigInt']>;
  txFees_lte?: InputMaybe<Scalars['BigInt']>;
  txFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profit?: InputMaybe<Scalars['BigInt']>;
  profit_not?: InputMaybe<Scalars['BigInt']>;
  profit_gt?: InputMaybe<Scalars['BigInt']>;
  profit_lt?: InputMaybe<Scalars['BigInt']>;
  profit_gte?: InputMaybe<Scalars['BigInt']>;
  profit_lte?: InputMaybe<Scalars['BigInt']>;
  profit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorRelayerFeeByToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorRelayerFeeByToken_filter>>>;
};

export type VAnchorRelayerFeeByToken_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenSymbol'
  | 'tokenAddress'
  | 'totalFees'
  | 'txFees'
  | 'profit';

export type VAnchorRelayerFeeEvery15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  totalFees: Scalars['BigInt'];
  txFees: Scalars['BigInt'];
  profit: Scalars['BigInt'];
};

export type VAnchorRelayerFeeEvery15Min_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFees?: InputMaybe<Scalars['BigInt']>;
  totalFees_not?: InputMaybe<Scalars['BigInt']>;
  totalFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txFees?: InputMaybe<Scalars['BigInt']>;
  txFees_not?: InputMaybe<Scalars['BigInt']>;
  txFees_gt?: InputMaybe<Scalars['BigInt']>;
  txFees_lt?: InputMaybe<Scalars['BigInt']>;
  txFees_gte?: InputMaybe<Scalars['BigInt']>;
  txFees_lte?: InputMaybe<Scalars['BigInt']>;
  txFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profit?: InputMaybe<Scalars['BigInt']>;
  profit_not?: InputMaybe<Scalars['BigInt']>;
  profit_gt?: InputMaybe<Scalars['BigInt']>;
  profit_lt?: InputMaybe<Scalars['BigInt']>;
  profit_gte?: InputMaybe<Scalars['BigInt']>;
  profit_lte?: InputMaybe<Scalars['BigInt']>;
  profit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorRelayerFeeEvery15Min_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorRelayerFeeEvery15Min_filter>>>;
};

export type VAnchorRelayerFeeEvery15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'startInterval'
  | 'endInterval'
  | 'totalFees'
  | 'txFees'
  | 'profit';

export type VAnchorRelayerFeeEveryDay = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  totalFees: Scalars['BigInt'];
  txFees: Scalars['BigInt'];
  profit: Scalars['BigInt'];
};

export type VAnchorRelayerFeeEveryDay_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFees?: InputMaybe<Scalars['BigInt']>;
  totalFees_not?: InputMaybe<Scalars['BigInt']>;
  totalFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txFees?: InputMaybe<Scalars['BigInt']>;
  txFees_not?: InputMaybe<Scalars['BigInt']>;
  txFees_gt?: InputMaybe<Scalars['BigInt']>;
  txFees_lt?: InputMaybe<Scalars['BigInt']>;
  txFees_gte?: InputMaybe<Scalars['BigInt']>;
  txFees_lte?: InputMaybe<Scalars['BigInt']>;
  txFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profit?: InputMaybe<Scalars['BigInt']>;
  profit_not?: InputMaybe<Scalars['BigInt']>;
  profit_gt?: InputMaybe<Scalars['BigInt']>;
  profit_lt?: InputMaybe<Scalars['BigInt']>;
  profit_gte?: InputMaybe<Scalars['BigInt']>;
  profit_lte?: InputMaybe<Scalars['BigInt']>;
  profit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorRelayerFeeEveryDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorRelayerFeeEveryDay_filter>>>;
};

export type VAnchorRelayerFeeEveryDay_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'startInterval'
  | 'endInterval'
  | 'totalFees'
  | 'txFees'
  | 'profit';

export type VAnchorRelayerFee_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalFees?: InputMaybe<Scalars['BigInt']>;
  totalFees_not?: InputMaybe<Scalars['BigInt']>;
  totalFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txFees?: InputMaybe<Scalars['BigInt']>;
  txFees_not?: InputMaybe<Scalars['BigInt']>;
  txFees_gt?: InputMaybe<Scalars['BigInt']>;
  txFees_lt?: InputMaybe<Scalars['BigInt']>;
  txFees_gte?: InputMaybe<Scalars['BigInt']>;
  txFees_lte?: InputMaybe<Scalars['BigInt']>;
  txFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profit?: InputMaybe<Scalars['BigInt']>;
  profit_not?: InputMaybe<Scalars['BigInt']>;
  profit_gt?: InputMaybe<Scalars['BigInt']>;
  profit_lt?: InputMaybe<Scalars['BigInt']>;
  profit_gte?: InputMaybe<Scalars['BigInt']>;
  profit_lte?: InputMaybe<Scalars['BigInt']>;
  profit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  profit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorRelayerFee_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorRelayerFee_filter>>>;
};

export type VAnchorRelayerFee_orderBy =
  | 'id'
  | 'totalFees'
  | 'txFees'
  | 'profit';

export type VAnchorTWL = {
  id: Scalars['String'];
  total: Scalars['BigInt'];
};

export type VAnchorTWLByToken = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  total: Scalars['BigInt'];
};

export type VAnchorTWLByTokenEvery15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  total: Scalars['BigInt'];
};

export type VAnchorTWLByTokenEvery15Min_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  total?: InputMaybe<Scalars['BigInt']>;
  total_not?: InputMaybe<Scalars['BigInt']>;
  total_gt?: InputMaybe<Scalars['BigInt']>;
  total_lt?: InputMaybe<Scalars['BigInt']>;
  total_gte?: InputMaybe<Scalars['BigInt']>;
  total_lte?: InputMaybe<Scalars['BigInt']>;
  total_in?: InputMaybe<Array<Scalars['BigInt']>>;
  total_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorTWLByTokenEvery15Min_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTWLByTokenEvery15Min_filter>>>;
};

export type VAnchorTWLByTokenEvery15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'startInterval'
  | 'endInterval'
  | 'total';

export type VAnchorTWLByTokenEveryDay = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  total: Scalars['BigInt'];
};

export type VAnchorTWLByTokenEveryDay_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  total?: InputMaybe<Scalars['BigInt']>;
  total_not?: InputMaybe<Scalars['BigInt']>;
  total_gt?: InputMaybe<Scalars['BigInt']>;
  total_lt?: InputMaybe<Scalars['BigInt']>;
  total_gte?: InputMaybe<Scalars['BigInt']>;
  total_lte?: InputMaybe<Scalars['BigInt']>;
  total_in?: InputMaybe<Array<Scalars['BigInt']>>;
  total_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorTWLByTokenEveryDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTWLByTokenEveryDay_filter>>>;
};

export type VAnchorTWLByTokenEveryDay_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'startInterval'
  | 'endInterval'
  | 'total';

export type VAnchorTWLByToken_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['BigInt']>;
  total_not?: InputMaybe<Scalars['BigInt']>;
  total_gt?: InputMaybe<Scalars['BigInt']>;
  total_lt?: InputMaybe<Scalars['BigInt']>;
  total_gte?: InputMaybe<Scalars['BigInt']>;
  total_lte?: InputMaybe<Scalars['BigInt']>;
  total_in?: InputMaybe<Array<Scalars['BigInt']>>;
  total_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorTWLByToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTWLByToken_filter>>>;
};

export type VAnchorTWLByToken_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'total';

export type VAnchorTWLEvery15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  total: Scalars['BigInt'];
};

export type VAnchorTWLEvery15Min_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  total?: InputMaybe<Scalars['BigInt']>;
  total_not?: InputMaybe<Scalars['BigInt']>;
  total_gt?: InputMaybe<Scalars['BigInt']>;
  total_lt?: InputMaybe<Scalars['BigInt']>;
  total_gte?: InputMaybe<Scalars['BigInt']>;
  total_lte?: InputMaybe<Scalars['BigInt']>;
  total_in?: InputMaybe<Array<Scalars['BigInt']>>;
  total_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorTWLEvery15Min_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTWLEvery15Min_filter>>>;
};

export type VAnchorTWLEvery15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'startInterval'
  | 'endInterval'
  | 'total';

export type VAnchorTWLEveryDay = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  total: Scalars['BigInt'];
};

export type VAnchorTWLEveryDay_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  total?: InputMaybe<Scalars['BigInt']>;
  total_not?: InputMaybe<Scalars['BigInt']>;
  total_gt?: InputMaybe<Scalars['BigInt']>;
  total_lt?: InputMaybe<Scalars['BigInt']>;
  total_gte?: InputMaybe<Scalars['BigInt']>;
  total_lte?: InputMaybe<Scalars['BigInt']>;
  total_in?: InputMaybe<Array<Scalars['BigInt']>>;
  total_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorTWLEveryDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTWLEveryDay_filter>>>;
};

export type VAnchorTWLEveryDay_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'startInterval'
  | 'endInterval'
  | 'total';

export type VAnchorTWL_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['BigInt']>;
  total_not?: InputMaybe<Scalars['BigInt']>;
  total_gt?: InputMaybe<Scalars['BigInt']>;
  total_lt?: InputMaybe<Scalars['BigInt']>;
  total_gte?: InputMaybe<Scalars['BigInt']>;
  total_lte?: InputMaybe<Scalars['BigInt']>;
  total_in?: InputMaybe<Array<Scalars['BigInt']>>;
  total_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorTWL_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTWL_filter>>>;
};

export type VAnchorTWL_orderBy =
  | 'id'
  | 'total';

export type VAnchorTotalValueLocked = {
  id: Scalars['String'];
  totalValueLocked: Scalars['BigInt'];
};

export type VAnchorTotalValueLockedByToken = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  totalValueLocked: Scalars['BigInt'];
};

export type VAnchorTotalValueLockedByTokenEvery15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  totalValueLocked: Scalars['BigInt'];
};

export type VAnchorTotalValueLockedByTokenEvery15Min_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLocked?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorTotalValueLockedByTokenEvery15Min_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTotalValueLockedByTokenEvery15Min_filter>>>;
};

export type VAnchorTotalValueLockedByTokenEvery15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'startInterval'
  | 'endInterval'
  | 'totalValueLocked';

export type VAnchorTotalValueLockedByTokenEveryDay = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  totalValueLocked: Scalars['BigInt'];
};

export type VAnchorTotalValueLockedByTokenEveryDay_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLocked?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorTotalValueLockedByTokenEveryDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTotalValueLockedByTokenEveryDay_filter>>>;
};

export type VAnchorTotalValueLockedByTokenEveryDay_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'startInterval'
  | 'endInterval'
  | 'totalValueLocked';

export type VAnchorTotalValueLockedByToken_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalValueLocked?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorTotalValueLockedByToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTotalValueLockedByToken_filter>>>;
};

export type VAnchorTotalValueLockedByToken_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'totalValueLocked';

export type VAnchorTotalValueLockedEvery15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  totalValueLocked: Scalars['BigInt'];
};

export type VAnchorTotalValueLockedEvery15Min_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLocked?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorTotalValueLockedEvery15Min_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTotalValueLockedEvery15Min_filter>>>;
};

export type VAnchorTotalValueLockedEvery15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'startInterval'
  | 'endInterval'
  | 'totalValueLocked';

export type VAnchorTotalValueLockedEveryDay = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  totalValueLocked: Scalars['BigInt'];
};

export type VAnchorTotalValueLockedEveryDay_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLocked?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorTotalValueLockedEveryDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTotalValueLockedEveryDay_filter>>>;
};

export type VAnchorTotalValueLockedEveryDay_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'startInterval'
  | 'endInterval'
  | 'totalValueLocked';

export type VAnchorTotalValueLocked_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalValueLocked?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigInt']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorTotalValueLocked_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTotalValueLocked_filter>>>;
};

export type VAnchorTotalValueLocked_orderBy =
  | 'id'
  | 'totalValueLocked';

export type VAnchorTransferLog = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  timestamp: Scalars['BigInt'];
};

export type VAnchorTransferLog_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorTransferLog_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTransferLog_filter>>>;
};

export type VAnchorTransferLog_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'timestamp';

export type VAnchorVolume = {
  id: Scalars['String'];
  volume: Scalars['BigInt'];
};

export type VAnchorVolumeByToken = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  volume: Scalars['BigInt'];
};

export type VAnchorVolumeByTokenEvery15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  volume: Scalars['BigInt'];
};

export type VAnchorVolumeByTokenEvery15Min_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorVolumeByTokenEvery15Min_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorVolumeByTokenEvery15Min_filter>>>;
};

export type VAnchorVolumeByTokenEvery15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'startInterval'
  | 'endInterval'
  | 'volume';

export type VAnchorVolumeByTokenEveryDay = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  volume: Scalars['BigInt'];
};

export type VAnchorVolumeByTokenEveryDay_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorVolumeByTokenEveryDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorVolumeByTokenEveryDay_filter>>>;
};

export type VAnchorVolumeByTokenEveryDay_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'startInterval'
  | 'endInterval'
  | 'volume';

export type VAnchorVolumeByToken_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorVolumeByToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorVolumeByToken_filter>>>;
};

export type VAnchorVolumeByToken_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'volume';

export type VAnchorVolumeEvery15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  volume: Scalars['BigInt'];
};

export type VAnchorVolumeEvery15Min_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorVolumeEvery15Min_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorVolumeEvery15Min_filter>>>;
};

export type VAnchorVolumeEvery15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'startInterval'
  | 'endInterval'
  | 'volume';

export type VAnchorVolumeEveryDay = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  volume: Scalars['BigInt'];
};

export type VAnchorVolumeEveryDay_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorVolumeEveryDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorVolumeEveryDay_filter>>>;
};

export type VAnchorVolumeEveryDay_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'startInterval'
  | 'endInterval'
  | 'volume';

export type VAnchorVolume_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorVolume_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorVolume_filter>>>;
};

export type VAnchorVolume_orderBy =
  | 'id'
  | 'volume';

export type VAnchorWithdrawal = {
  id: Scalars['String'];
  withdrawal: Scalars['BigInt'];
  averageWithdrawal: Scalars['BigInt'];
  totalCount: Scalars['BigInt'];
};

export type VAnchorWithdrawalByToken = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  withdrawal: Scalars['BigInt'];
  averageWithdrawal: Scalars['BigInt'];
  totalCount: Scalars['BigInt'];
};

export type VAnchorWithdrawalByTokenEvery15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  withdrawal: Scalars['BigInt'];
  averageWithdrawal: Scalars['BigInt'];
  totalCount: Scalars['BigInt'];
};

export type VAnchorWithdrawalByTokenEvery15Min_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawal?: InputMaybe<Scalars['BigInt']>;
  withdrawal_not?: InputMaybe<Scalars['BigInt']>;
  withdrawal_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawal_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawal_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawal_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageWithdrawal?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_not?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_gt?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_lt?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_gte?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_lte?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageWithdrawal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount?: InputMaybe<Scalars['BigInt']>;
  totalCount_not?: InputMaybe<Scalars['BigInt']>;
  totalCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorWithdrawalByTokenEvery15Min_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorWithdrawalByTokenEvery15Min_filter>>>;
};

export type VAnchorWithdrawalByTokenEvery15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'startInterval'
  | 'endInterval'
  | 'withdrawal'
  | 'averageWithdrawal'
  | 'totalCount';

export type VAnchorWithdrawalByTokenEveryDay = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  withdrawal: Scalars['BigInt'];
  averageWithdrawal: Scalars['BigInt'];
  totalCount: Scalars['BigInt'];
};

export type VAnchorWithdrawalByTokenEveryDay_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawal?: InputMaybe<Scalars['BigInt']>;
  withdrawal_not?: InputMaybe<Scalars['BigInt']>;
  withdrawal_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawal_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawal_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawal_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageWithdrawal?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_not?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_gt?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_lt?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_gte?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_lte?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageWithdrawal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount?: InputMaybe<Scalars['BigInt']>;
  totalCount_not?: InputMaybe<Scalars['BigInt']>;
  totalCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorWithdrawalByTokenEveryDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorWithdrawalByTokenEveryDay_filter>>>;
};

export type VAnchorWithdrawalByTokenEveryDay_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'startInterval'
  | 'endInterval'
  | 'withdrawal'
  | 'averageWithdrawal'
  | 'totalCount';

export type VAnchorWithdrawalByToken_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawal?: InputMaybe<Scalars['BigInt']>;
  withdrawal_not?: InputMaybe<Scalars['BigInt']>;
  withdrawal_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawal_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawal_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawal_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageWithdrawal?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_not?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_gt?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_lt?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_gte?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_lte?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageWithdrawal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount?: InputMaybe<Scalars['BigInt']>;
  totalCount_not?: InputMaybe<Scalars['BigInt']>;
  totalCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorWithdrawalByToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorWithdrawalByToken_filter>>>;
};

export type VAnchorWithdrawalByToken_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'withdrawal'
  | 'averageWithdrawal'
  | 'totalCount';

export type VAnchorWithdrawalEvery15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  withdrawal: Scalars['BigInt'];
  averageWithdrawal: Scalars['BigInt'];
  totalCount: Scalars['BigInt'];
};

export type VAnchorWithdrawalEvery15Min_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawal?: InputMaybe<Scalars['BigInt']>;
  withdrawal_not?: InputMaybe<Scalars['BigInt']>;
  withdrawal_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawal_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawal_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawal_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageWithdrawal?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_not?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_gt?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_lt?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_gte?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_lte?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageWithdrawal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount?: InputMaybe<Scalars['BigInt']>;
  totalCount_not?: InputMaybe<Scalars['BigInt']>;
  totalCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorWithdrawalEvery15Min_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorWithdrawalEvery15Min_filter>>>;
};

export type VAnchorWithdrawalEvery15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'startInterval'
  | 'endInterval'
  | 'withdrawal'
  | 'averageWithdrawal'
  | 'totalCount';

export type VAnchorWithdrawalEveryDay = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  withdrawal: Scalars['BigInt'];
  averageWithdrawal: Scalars['BigInt'];
  totalCount: Scalars['BigInt'];
};

export type VAnchorWithdrawalEveryDay_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawal?: InputMaybe<Scalars['BigInt']>;
  withdrawal_not?: InputMaybe<Scalars['BigInt']>;
  withdrawal_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawal_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawal_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawal_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageWithdrawal?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_not?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_gt?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_lt?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_gte?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_lte?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageWithdrawal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount?: InputMaybe<Scalars['BigInt']>;
  totalCount_not?: InputMaybe<Scalars['BigInt']>;
  totalCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorWithdrawalEveryDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorWithdrawalEveryDay_filter>>>;
};

export type VAnchorWithdrawalEveryDay_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'startInterval'
  | 'endInterval'
  | 'withdrawal'
  | 'averageWithdrawal'
  | 'totalCount';

export type VAnchorWithdrawalLog = {
  id: Scalars['String'];
  withdrawal: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  timestamp: Scalars['BigInt'];
};

export type VAnchorWithdrawalLog_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawal?: InputMaybe<Scalars['BigInt']>;
  withdrawal_not?: InputMaybe<Scalars['BigInt']>;
  withdrawal_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawal_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawal_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawal_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorWithdrawalLog_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorWithdrawalLog_filter>>>;
};

export type VAnchorWithdrawalLog_orderBy =
  | 'id'
  | 'withdrawal'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'timestamp';

export type VAnchorWithdrawal_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  withdrawal?: InputMaybe<Scalars['BigInt']>;
  withdrawal_not?: InputMaybe<Scalars['BigInt']>;
  withdrawal_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawal_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawal_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawal_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageWithdrawal?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_not?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_gt?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_lt?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_gte?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_lte?: InputMaybe<Scalars['BigInt']>;
  averageWithdrawal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageWithdrawal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount?: InputMaybe<Scalars['BigInt']>;
  totalCount_not?: InputMaybe<Scalars['BigInt']>;
  totalCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorWithdrawal_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorWithdrawal_filter>>>;
};

export type VAnchorWithdrawal_orderBy =
  | 'id'
  | 'withdrawal'
  | 'averageWithdrawal'
  | 'totalCount';

export type VAnchorWrappingFee = {
  id: Scalars['String'];
  fees: Scalars['BigInt'];
};

export type VAnchorWrappingFeeByToken = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  tokenAddress: Scalars['Bytes'];
  fees: Scalars['BigInt'];
};

export type VAnchorWrappingFeeByTokenEvery15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  fees: Scalars['BigInt'];
};

export type VAnchorWrappingFeeByTokenEvery15Min_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fees?: InputMaybe<Scalars['BigInt']>;
  fees_not?: InputMaybe<Scalars['BigInt']>;
  fees_gt?: InputMaybe<Scalars['BigInt']>;
  fees_lt?: InputMaybe<Scalars['BigInt']>;
  fees_gte?: InputMaybe<Scalars['BigInt']>;
  fees_lte?: InputMaybe<Scalars['BigInt']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorWrappingFeeByTokenEvery15Min_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorWrappingFeeByTokenEvery15Min_filter>>>;
};

export type VAnchorWrappingFeeByTokenEvery15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'startInterval'
  | 'endInterval'
  | 'fees';

export type VAnchorWrappingFeeByTokenEveryDay = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  fees: Scalars['BigInt'];
};

export type VAnchorWrappingFeeByTokenEveryDay_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fees?: InputMaybe<Scalars['BigInt']>;
  fees_not?: InputMaybe<Scalars['BigInt']>;
  fees_gt?: InputMaybe<Scalars['BigInt']>;
  fees_lt?: InputMaybe<Scalars['BigInt']>;
  fees_gte?: InputMaybe<Scalars['BigInt']>;
  fees_lte?: InputMaybe<Scalars['BigInt']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorWrappingFeeByTokenEveryDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorWrappingFeeByTokenEveryDay_filter>>>;
};

export type VAnchorWrappingFeeByTokenEveryDay_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'startInterval'
  | 'endInterval'
  | 'fees';

export type VAnchorWrappingFeeByToken_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_not?: InputMaybe<Scalars['String']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  fees?: InputMaybe<Scalars['BigInt']>;
  fees_not?: InputMaybe<Scalars['BigInt']>;
  fees_gt?: InputMaybe<Scalars['BigInt']>;
  fees_lt?: InputMaybe<Scalars['BigInt']>;
  fees_gte?: InputMaybe<Scalars['BigInt']>;
  fees_lte?: InputMaybe<Scalars['BigInt']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorWrappingFeeByToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorWrappingFeeByToken_filter>>>;
};

export type VAnchorWrappingFeeByToken_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenSymbol'
  | 'tokenAddress'
  | 'fees';

export type VAnchorWrappingFeeEvery15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  fees: Scalars['BigInt'];
};

export type VAnchorWrappingFeeEvery15Min_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fees?: InputMaybe<Scalars['BigInt']>;
  fees_not?: InputMaybe<Scalars['BigInt']>;
  fees_gt?: InputMaybe<Scalars['BigInt']>;
  fees_lt?: InputMaybe<Scalars['BigInt']>;
  fees_gte?: InputMaybe<Scalars['BigInt']>;
  fees_lte?: InputMaybe<Scalars['BigInt']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorWrappingFeeEvery15Min_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorWrappingFeeEvery15Min_filter>>>;
};

export type VAnchorWrappingFeeEvery15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'startInterval'
  | 'endInterval'
  | 'fees';

export type VAnchorWrappingFeeEveryDay = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  fees: Scalars['BigInt'];
};

export type VAnchorWrappingFeeEveryDay_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vAnchorAddress?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lt?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_gte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_lte?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vAnchorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vAnchorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval_not?: InputMaybe<Scalars['BigInt']>;
  startInterval_gt?: InputMaybe<Scalars['BigInt']>;
  startInterval_lt?: InputMaybe<Scalars['BigInt']>;
  startInterval_gte?: InputMaybe<Scalars['BigInt']>;
  startInterval_lte?: InputMaybe<Scalars['BigInt']>;
  startInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval?: InputMaybe<Scalars['BigInt']>;
  endInterval_not?: InputMaybe<Scalars['BigInt']>;
  endInterval_gt?: InputMaybe<Scalars['BigInt']>;
  endInterval_lt?: InputMaybe<Scalars['BigInt']>;
  endInterval_gte?: InputMaybe<Scalars['BigInt']>;
  endInterval_lte?: InputMaybe<Scalars['BigInt']>;
  endInterval_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endInterval_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fees?: InputMaybe<Scalars['BigInt']>;
  fees_not?: InputMaybe<Scalars['BigInt']>;
  fees_gt?: InputMaybe<Scalars['BigInt']>;
  fees_lt?: InputMaybe<Scalars['BigInt']>;
  fees_gte?: InputMaybe<Scalars['BigInt']>;
  fees_lte?: InputMaybe<Scalars['BigInt']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorWrappingFeeEveryDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorWrappingFeeEveryDay_filter>>>;
};

export type VAnchorWrappingFeeEveryDay_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'startInterval'
  | 'endInterval'
  | 'fees';

export type VAnchorWrappingFee_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fees?: InputMaybe<Scalars['BigInt']>;
  fees_not?: InputMaybe<Scalars['BigInt']>;
  fees_gt?: InputMaybe<Scalars['BigInt']>;
  fees_lt?: InputMaybe<Scalars['BigInt']>;
  fees_gte?: InputMaybe<Scalars['BigInt']>;
  fees_lte?: InputMaybe<Scalars['BigInt']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorWrappingFee_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorWrappingFee_filter>>>;
};

export type VAnchorWrappingFee_orderBy =
  | 'id'
  | 'fees';

export type WrappingEventLog = {
  id: Scalars['String'];
  sender: Scalars['Bytes'];
  recipient: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  wrappingFee: Scalars['BigInt'];
  afterFeeAmount: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type WrappingEventLog_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  recipient?: InputMaybe<Scalars['Bytes']>;
  recipient_not?: InputMaybe<Scalars['Bytes']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']>;
  recipient_lt?: InputMaybe<Scalars['Bytes']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  wrappingFee?: InputMaybe<Scalars['BigInt']>;
  wrappingFee_not?: InputMaybe<Scalars['BigInt']>;
  wrappingFee_gt?: InputMaybe<Scalars['BigInt']>;
  wrappingFee_lt?: InputMaybe<Scalars['BigInt']>;
  wrappingFee_gte?: InputMaybe<Scalars['BigInt']>;
  wrappingFee_lte?: InputMaybe<Scalars['BigInt']>;
  wrappingFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  wrappingFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  afterFeeAmount?: InputMaybe<Scalars['BigInt']>;
  afterFeeAmount_not?: InputMaybe<Scalars['BigInt']>;
  afterFeeAmount_gt?: InputMaybe<Scalars['BigInt']>;
  afterFeeAmount_lt?: InputMaybe<Scalars['BigInt']>;
  afterFeeAmount_gte?: InputMaybe<Scalars['BigInt']>;
  afterFeeAmount_lte?: InputMaybe<Scalars['BigInt']>;
  afterFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  afterFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<WrappingEventLog_filter>>>;
  or?: InputMaybe<Array<InputMaybe<WrappingEventLog_filter>>>;
};

export type WrappingEventLog_orderBy =
  | 'id'
  | 'sender'
  | 'recipient'
  | 'tokenAddress'
  | 'wrappingFee'
  | 'afterFeeAmount'
  | 'timestamp';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  edgeAddition: InContextSdkMethod<Query['edgeAddition'], QueryedgeAdditionArgs, MeshContext>,
  /** null **/
  edgeAdditions: InContextSdkMethod<Query['edgeAdditions'], QueryedgeAdditionsArgs, MeshContext>,
  /** null **/
  edgeUpdate: InContextSdkMethod<Query['edgeUpdate'], QueryedgeUpdateArgs, MeshContext>,
  /** null **/
  edgeUpdates: InContextSdkMethod<Query['edgeUpdates'], QueryedgeUpdatesArgs, MeshContext>,
  /** null **/
  insertion: InContextSdkMethod<Query['insertion'], QueryinsertionArgs, MeshContext>,
  /** null **/
  insertions: InContextSdkMethod<Query['insertions'], QueryinsertionsArgs, MeshContext>,
  /** null **/
  newCommitment: InContextSdkMethod<Query['newCommitment'], QuerynewCommitmentArgs, MeshContext>,
  /** null **/
  newCommitments: InContextSdkMethod<Query['newCommitments'], QuerynewCommitmentsArgs, MeshContext>,
  /** null **/
  newNullifier: InContextSdkMethod<Query['newNullifier'], QuerynewNullifierArgs, MeshContext>,
  /** null **/
  newNullifiers: InContextSdkMethod<Query['newNullifiers'], QuerynewNullifiersArgs, MeshContext>,
  /** null **/
  publicKey: InContextSdkMethod<Query['publicKey'], QuerypublicKeyArgs, MeshContext>,
  /** null **/
  publicKeys: InContextSdkMethod<Query['publicKeys'], QuerypublicKeysArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  externalData: InContextSdkMethod<Query['externalData'], QueryexternalDataArgs, MeshContext>,
  /** null **/
  externalDatas: InContextSdkMethod<Query['externalDatas'], QueryexternalDatasArgs, MeshContext>,
  /** null **/
  publicInputs: InContextSdkMethod<Query['publicInputs'], QuerypublicInputsArgs, MeshContext>,
  /** null **/
  encryptions: InContextSdkMethod<Query['encryptions'], QueryencryptionsArgs, MeshContext>,
  /** null **/
  shieldedTransaction: InContextSdkMethod<Query['shieldedTransaction'], QueryshieldedTransactionArgs, MeshContext>,
  /** null **/
  shieldedTransactions: InContextSdkMethod<Query['shieldedTransactions'], QueryshieldedTransactionsArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLocked: InContextSdkMethod<Query['vanchorTotalValueLocked'], QueryvanchorTotalValueLockedArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockeds: InContextSdkMethod<Query['vanchorTotalValueLockeds'], QueryvanchorTotalValueLockedsArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedByToken: InContextSdkMethod<Query['vanchorTotalValueLockedByToken'], QueryvanchorTotalValueLockedByTokenArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedByTokens: InContextSdkMethod<Query['vanchorTotalValueLockedByTokens'], QueryvanchorTotalValueLockedByTokensArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedEvery15Min: InContextSdkMethod<Query['vanchorTotalValueLockedEvery15Min'], QueryvanchorTotalValueLockedEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedEvery15Mins: InContextSdkMethod<Query['vanchorTotalValueLockedEvery15Mins'], QueryvanchorTotalValueLockedEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedByTokenEvery15Min: InContextSdkMethod<Query['vanchorTotalValueLockedByTokenEvery15Min'], QueryvanchorTotalValueLockedByTokenEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedByTokenEvery15Mins: InContextSdkMethod<Query['vanchorTotalValueLockedByTokenEvery15Mins'], QueryvanchorTotalValueLockedByTokenEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedEveryDay: InContextSdkMethod<Query['vanchorTotalValueLockedEveryDay'], QueryvanchorTotalValueLockedEveryDayArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedEveryDays: InContextSdkMethod<Query['vanchorTotalValueLockedEveryDays'], QueryvanchorTotalValueLockedEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedByTokenEveryDay: InContextSdkMethod<Query['vanchorTotalValueLockedByTokenEveryDay'], QueryvanchorTotalValueLockedByTokenEveryDayArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedByTokenEveryDays: InContextSdkMethod<Query['vanchorTotalValueLockedByTokenEveryDays'], QueryvanchorTotalValueLockedByTokenEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorTWL: InContextSdkMethod<Query['vanchorTWL'], QueryvanchorTWLArgs, MeshContext>,
  /** null **/
  vanchorTWLs: InContextSdkMethod<Query['vanchorTWLs'], QueryvanchorTWLsArgs, MeshContext>,
  /** null **/
  vanchorTWLByToken: InContextSdkMethod<Query['vanchorTWLByToken'], QueryvanchorTWLByTokenArgs, MeshContext>,
  /** null **/
  vanchorTWLByTokens: InContextSdkMethod<Query['vanchorTWLByTokens'], QueryvanchorTWLByTokensArgs, MeshContext>,
  /** null **/
  vanchorTWLEvery15Min: InContextSdkMethod<Query['vanchorTWLEvery15Min'], QueryvanchorTWLEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorTWLEvery15Mins: InContextSdkMethod<Query['vanchorTWLEvery15Mins'], QueryvanchorTWLEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorTWLByTokenEvery15Min: InContextSdkMethod<Query['vanchorTWLByTokenEvery15Min'], QueryvanchorTWLByTokenEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorTWLByTokenEvery15Mins: InContextSdkMethod<Query['vanchorTWLByTokenEvery15Mins'], QueryvanchorTWLByTokenEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorTWLEveryDay: InContextSdkMethod<Query['vanchorTWLEveryDay'], QueryvanchorTWLEveryDayArgs, MeshContext>,
  /** null **/
  vanchorTWLEveryDays: InContextSdkMethod<Query['vanchorTWLEveryDays'], QueryvanchorTWLEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorTWLByTokenEveryDay: InContextSdkMethod<Query['vanchorTWLByTokenEveryDay'], QueryvanchorTWLByTokenEveryDayArgs, MeshContext>,
  /** null **/
  vanchorTWLByTokenEveryDays: InContextSdkMethod<Query['vanchorTWLByTokenEveryDays'], QueryvanchorTWLByTokenEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorRelayerFee: InContextSdkMethod<Query['vanchorRelayerFee'], QueryvanchorRelayerFeeArgs, MeshContext>,
  /** null **/
  vanchorRelayerFees: InContextSdkMethod<Query['vanchorRelayerFees'], QueryvanchorRelayerFeesArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeByToken: InContextSdkMethod<Query['vanchorRelayerFeeByToken'], QueryvanchorRelayerFeeByTokenArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeByTokens: InContextSdkMethod<Query['vanchorRelayerFeeByTokens'], QueryvanchorRelayerFeeByTokensArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeEvery15Min: InContextSdkMethod<Query['vanchorRelayerFeeEvery15Min'], QueryvanchorRelayerFeeEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeEvery15Mins: InContextSdkMethod<Query['vanchorRelayerFeeEvery15Mins'], QueryvanchorRelayerFeeEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeByTokenEvery15Min: InContextSdkMethod<Query['vanchorRelayerFeeByTokenEvery15Min'], QueryvanchorRelayerFeeByTokenEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeByTokenEvery15Mins: InContextSdkMethod<Query['vanchorRelayerFeeByTokenEvery15Mins'], QueryvanchorRelayerFeeByTokenEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeEveryDay: InContextSdkMethod<Query['vanchorRelayerFeeEveryDay'], QueryvanchorRelayerFeeEveryDayArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeEveryDays: InContextSdkMethod<Query['vanchorRelayerFeeEveryDays'], QueryvanchorRelayerFeeEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeByTokenEveryDay: InContextSdkMethod<Query['vanchorRelayerFeeByTokenEveryDay'], QueryvanchorRelayerFeeByTokenEveryDayArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeByTokenEveryDays: InContextSdkMethod<Query['vanchorRelayerFeeByTokenEveryDays'], QueryvanchorRelayerFeeByTokenEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorWrappingFee: InContextSdkMethod<Query['vanchorWrappingFee'], QueryvanchorWrappingFeeArgs, MeshContext>,
  /** null **/
  vanchorWrappingFees: InContextSdkMethod<Query['vanchorWrappingFees'], QueryvanchorWrappingFeesArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeByToken: InContextSdkMethod<Query['vanchorWrappingFeeByToken'], QueryvanchorWrappingFeeByTokenArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeByTokens: InContextSdkMethod<Query['vanchorWrappingFeeByTokens'], QueryvanchorWrappingFeeByTokensArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeEvery15Min: InContextSdkMethod<Query['vanchorWrappingFeeEvery15Min'], QueryvanchorWrappingFeeEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeEvery15Mins: InContextSdkMethod<Query['vanchorWrappingFeeEvery15Mins'], QueryvanchorWrappingFeeEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeByTokenEvery15Min: InContextSdkMethod<Query['vanchorWrappingFeeByTokenEvery15Min'], QueryvanchorWrappingFeeByTokenEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeByTokenEvery15Mins: InContextSdkMethod<Query['vanchorWrappingFeeByTokenEvery15Mins'], QueryvanchorWrappingFeeByTokenEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeEveryDay: InContextSdkMethod<Query['vanchorWrappingFeeEveryDay'], QueryvanchorWrappingFeeEveryDayArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeEveryDays: InContextSdkMethod<Query['vanchorWrappingFeeEveryDays'], QueryvanchorWrappingFeeEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeByTokenEveryDay: InContextSdkMethod<Query['vanchorWrappingFeeByTokenEveryDay'], QueryvanchorWrappingFeeByTokenEveryDayArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeByTokenEveryDays: InContextSdkMethod<Query['vanchorWrappingFeeByTokenEveryDays'], QueryvanchorWrappingFeeByTokenEveryDaysArgs, MeshContext>,
  /** null **/
  wrappingEventLog: InContextSdkMethod<Query['wrappingEventLog'], QuerywrappingEventLogArgs, MeshContext>,
  /** null **/
  wrappingEventLogs: InContextSdkMethod<Query['wrappingEventLogs'], QuerywrappingEventLogsArgs, MeshContext>,
  /** null **/
  unwrappingEventLog: InContextSdkMethod<Query['unwrappingEventLog'], QueryunwrappingEventLogArgs, MeshContext>,
  /** null **/
  unwrappingEventLogs: InContextSdkMethod<Query['unwrappingEventLogs'], QueryunwrappingEventLogsArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalLog: InContextSdkMethod<Query['vanchorWithdrawalLog'], QueryvanchorWithdrawalLogArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalLogs: InContextSdkMethod<Query['vanchorWithdrawalLogs'], QueryvanchorWithdrawalLogsArgs, MeshContext>,
  /** null **/
  vanchorWithdrawal: InContextSdkMethod<Query['vanchorWithdrawal'], QueryvanchorWithdrawalArgs, MeshContext>,
  /** null **/
  vanchorWithdrawals: InContextSdkMethod<Query['vanchorWithdrawals'], QueryvanchorWithdrawalsArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalByToken: InContextSdkMethod<Query['vanchorWithdrawalByToken'], QueryvanchorWithdrawalByTokenArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalByTokens: InContextSdkMethod<Query['vanchorWithdrawalByTokens'], QueryvanchorWithdrawalByTokensArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalEvery15Min: InContextSdkMethod<Query['vanchorWithdrawalEvery15Min'], QueryvanchorWithdrawalEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalEvery15Mins: InContextSdkMethod<Query['vanchorWithdrawalEvery15Mins'], QueryvanchorWithdrawalEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalByTokenEvery15Min: InContextSdkMethod<Query['vanchorWithdrawalByTokenEvery15Min'], QueryvanchorWithdrawalByTokenEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalByTokenEvery15Mins: InContextSdkMethod<Query['vanchorWithdrawalByTokenEvery15Mins'], QueryvanchorWithdrawalByTokenEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalEveryDay: InContextSdkMethod<Query['vanchorWithdrawalEveryDay'], QueryvanchorWithdrawalEveryDayArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalEveryDays: InContextSdkMethod<Query['vanchorWithdrawalEveryDays'], QueryvanchorWithdrawalEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalByTokenEveryDay: InContextSdkMethod<Query['vanchorWithdrawalByTokenEveryDay'], QueryvanchorWithdrawalByTokenEveryDayArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalByTokenEveryDays: InContextSdkMethod<Query['vanchorWithdrawalByTokenEveryDays'], QueryvanchorWithdrawalByTokenEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorDeposit: InContextSdkMethod<Query['vanchorDeposit'], QueryvanchorDepositArgs, MeshContext>,
  /** null **/
  vanchorDeposits: InContextSdkMethod<Query['vanchorDeposits'], QueryvanchorDepositsArgs, MeshContext>,
  /** null **/
  vanchorDepositByToken: InContextSdkMethod<Query['vanchorDepositByToken'], QueryvanchorDepositByTokenArgs, MeshContext>,
  /** null **/
  vanchorDepositByTokens: InContextSdkMethod<Query['vanchorDepositByTokens'], QueryvanchorDepositByTokensArgs, MeshContext>,
  /** null **/
  vanchorDepositEvery15Min: InContextSdkMethod<Query['vanchorDepositEvery15Min'], QueryvanchorDepositEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorDepositEvery15Mins: InContextSdkMethod<Query['vanchorDepositEvery15Mins'], QueryvanchorDepositEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorDepositByTokenEvery15Min: InContextSdkMethod<Query['vanchorDepositByTokenEvery15Min'], QueryvanchorDepositByTokenEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorDepositByTokenEvery15Mins: InContextSdkMethod<Query['vanchorDepositByTokenEvery15Mins'], QueryvanchorDepositByTokenEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorDepositEveryDay: InContextSdkMethod<Query['vanchorDepositEveryDay'], QueryvanchorDepositEveryDayArgs, MeshContext>,
  /** null **/
  vanchorDepositEveryDays: InContextSdkMethod<Query['vanchorDepositEveryDays'], QueryvanchorDepositEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorDepositByTokenEveryDay: InContextSdkMethod<Query['vanchorDepositByTokenEveryDay'], QueryvanchorDepositByTokenEveryDayArgs, MeshContext>,
  /** null **/
  vanchorDepositByTokenEveryDays: InContextSdkMethod<Query['vanchorDepositByTokenEveryDays'], QueryvanchorDepositByTokenEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorDepositLog: InContextSdkMethod<Query['vanchorDepositLog'], QueryvanchorDepositLogArgs, MeshContext>,
  /** null **/
  vanchorDepositLogs: InContextSdkMethod<Query['vanchorDepositLogs'], QueryvanchorDepositLogsArgs, MeshContext>,
  /** null **/
  vanchorTransferLog: InContextSdkMethod<Query['vanchorTransferLog'], QueryvanchorTransferLogArgs, MeshContext>,
  /** null **/
  vanchorTransferLogs: InContextSdkMethod<Query['vanchorTransferLogs'], QueryvanchorTransferLogsArgs, MeshContext>,
  /** null **/
  vanchorVolume: InContextSdkMethod<Query['vanchorVolume'], QueryvanchorVolumeArgs, MeshContext>,
  /** null **/
  vanchorVolumes: InContextSdkMethod<Query['vanchorVolumes'], QueryvanchorVolumesArgs, MeshContext>,
  /** null **/
  vanchorVolumeByToken: InContextSdkMethod<Query['vanchorVolumeByToken'], QueryvanchorVolumeByTokenArgs, MeshContext>,
  /** null **/
  vanchorVolumeByTokens: InContextSdkMethod<Query['vanchorVolumeByTokens'], QueryvanchorVolumeByTokensArgs, MeshContext>,
  /** null **/
  vanchorVolumeEvery15Min: InContextSdkMethod<Query['vanchorVolumeEvery15Min'], QueryvanchorVolumeEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorVolumeEvery15Mins: InContextSdkMethod<Query['vanchorVolumeEvery15Mins'], QueryvanchorVolumeEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorVolumeByTokenEvery15Min: InContextSdkMethod<Query['vanchorVolumeByTokenEvery15Min'], QueryvanchorVolumeByTokenEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorVolumeByTokenEvery15Mins: InContextSdkMethod<Query['vanchorVolumeByTokenEvery15Mins'], QueryvanchorVolumeByTokenEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorVolumeEveryDay: InContextSdkMethod<Query['vanchorVolumeEveryDay'], QueryvanchorVolumeEveryDayArgs, MeshContext>,
  /** null **/
  vanchorVolumeEveryDays: InContextSdkMethod<Query['vanchorVolumeEveryDays'], QueryvanchorVolumeEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorVolumeByTokenEveryDay: InContextSdkMethod<Query['vanchorVolumeByTokenEveryDay'], QueryvanchorVolumeByTokenEveryDayArgs, MeshContext>,
  /** null **/
  vanchorVolumeByTokenEveryDays: InContextSdkMethod<Query['vanchorVolumeByTokenEveryDays'], QueryvanchorVolumeByTokenEveryDaysArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  edgeAddition: InContextSdkMethod<Subscription['edgeAddition'], SubscriptionedgeAdditionArgs, MeshContext>,
  /** null **/
  edgeAdditions: InContextSdkMethod<Subscription['edgeAdditions'], SubscriptionedgeAdditionsArgs, MeshContext>,
  /** null **/
  edgeUpdate: InContextSdkMethod<Subscription['edgeUpdate'], SubscriptionedgeUpdateArgs, MeshContext>,
  /** null **/
  edgeUpdates: InContextSdkMethod<Subscription['edgeUpdates'], SubscriptionedgeUpdatesArgs, MeshContext>,
  /** null **/
  insertion: InContextSdkMethod<Subscription['insertion'], SubscriptioninsertionArgs, MeshContext>,
  /** null **/
  insertions: InContextSdkMethod<Subscription['insertions'], SubscriptioninsertionsArgs, MeshContext>,
  /** null **/
  newCommitment: InContextSdkMethod<Subscription['newCommitment'], SubscriptionnewCommitmentArgs, MeshContext>,
  /** null **/
  newCommitments: InContextSdkMethod<Subscription['newCommitments'], SubscriptionnewCommitmentsArgs, MeshContext>,
  /** null **/
  newNullifier: InContextSdkMethod<Subscription['newNullifier'], SubscriptionnewNullifierArgs, MeshContext>,
  /** null **/
  newNullifiers: InContextSdkMethod<Subscription['newNullifiers'], SubscriptionnewNullifiersArgs, MeshContext>,
  /** null **/
  publicKey: InContextSdkMethod<Subscription['publicKey'], SubscriptionpublicKeyArgs, MeshContext>,
  /** null **/
  publicKeys: InContextSdkMethod<Subscription['publicKeys'], SubscriptionpublicKeysArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  externalData: InContextSdkMethod<Subscription['externalData'], SubscriptionexternalDataArgs, MeshContext>,
  /** null **/
  externalDatas: InContextSdkMethod<Subscription['externalDatas'], SubscriptionexternalDatasArgs, MeshContext>,
  /** null **/
  publicInputs: InContextSdkMethod<Subscription['publicInputs'], SubscriptionpublicInputsArgs, MeshContext>,
  /** null **/
  encryptions: InContextSdkMethod<Subscription['encryptions'], SubscriptionencryptionsArgs, MeshContext>,
  /** null **/
  shieldedTransaction: InContextSdkMethod<Subscription['shieldedTransaction'], SubscriptionshieldedTransactionArgs, MeshContext>,
  /** null **/
  shieldedTransactions: InContextSdkMethod<Subscription['shieldedTransactions'], SubscriptionshieldedTransactionsArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLocked: InContextSdkMethod<Subscription['vanchorTotalValueLocked'], SubscriptionvanchorTotalValueLockedArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockeds: InContextSdkMethod<Subscription['vanchorTotalValueLockeds'], SubscriptionvanchorTotalValueLockedsArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedByToken: InContextSdkMethod<Subscription['vanchorTotalValueLockedByToken'], SubscriptionvanchorTotalValueLockedByTokenArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedByTokens: InContextSdkMethod<Subscription['vanchorTotalValueLockedByTokens'], SubscriptionvanchorTotalValueLockedByTokensArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedEvery15Min: InContextSdkMethod<Subscription['vanchorTotalValueLockedEvery15Min'], SubscriptionvanchorTotalValueLockedEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedEvery15Mins: InContextSdkMethod<Subscription['vanchorTotalValueLockedEvery15Mins'], SubscriptionvanchorTotalValueLockedEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedByTokenEvery15Min: InContextSdkMethod<Subscription['vanchorTotalValueLockedByTokenEvery15Min'], SubscriptionvanchorTotalValueLockedByTokenEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedByTokenEvery15Mins: InContextSdkMethod<Subscription['vanchorTotalValueLockedByTokenEvery15Mins'], SubscriptionvanchorTotalValueLockedByTokenEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedEveryDay: InContextSdkMethod<Subscription['vanchorTotalValueLockedEveryDay'], SubscriptionvanchorTotalValueLockedEveryDayArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedEveryDays: InContextSdkMethod<Subscription['vanchorTotalValueLockedEveryDays'], SubscriptionvanchorTotalValueLockedEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedByTokenEveryDay: InContextSdkMethod<Subscription['vanchorTotalValueLockedByTokenEveryDay'], SubscriptionvanchorTotalValueLockedByTokenEveryDayArgs, MeshContext>,
  /** null **/
  vanchorTotalValueLockedByTokenEveryDays: InContextSdkMethod<Subscription['vanchorTotalValueLockedByTokenEveryDays'], SubscriptionvanchorTotalValueLockedByTokenEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorTWL: InContextSdkMethod<Subscription['vanchorTWL'], SubscriptionvanchorTWLArgs, MeshContext>,
  /** null **/
  vanchorTWLs: InContextSdkMethod<Subscription['vanchorTWLs'], SubscriptionvanchorTWLsArgs, MeshContext>,
  /** null **/
  vanchorTWLByToken: InContextSdkMethod<Subscription['vanchorTWLByToken'], SubscriptionvanchorTWLByTokenArgs, MeshContext>,
  /** null **/
  vanchorTWLByTokens: InContextSdkMethod<Subscription['vanchorTWLByTokens'], SubscriptionvanchorTWLByTokensArgs, MeshContext>,
  /** null **/
  vanchorTWLEvery15Min: InContextSdkMethod<Subscription['vanchorTWLEvery15Min'], SubscriptionvanchorTWLEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorTWLEvery15Mins: InContextSdkMethod<Subscription['vanchorTWLEvery15Mins'], SubscriptionvanchorTWLEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorTWLByTokenEvery15Min: InContextSdkMethod<Subscription['vanchorTWLByTokenEvery15Min'], SubscriptionvanchorTWLByTokenEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorTWLByTokenEvery15Mins: InContextSdkMethod<Subscription['vanchorTWLByTokenEvery15Mins'], SubscriptionvanchorTWLByTokenEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorTWLEveryDay: InContextSdkMethod<Subscription['vanchorTWLEveryDay'], SubscriptionvanchorTWLEveryDayArgs, MeshContext>,
  /** null **/
  vanchorTWLEveryDays: InContextSdkMethod<Subscription['vanchorTWLEveryDays'], SubscriptionvanchorTWLEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorTWLByTokenEveryDay: InContextSdkMethod<Subscription['vanchorTWLByTokenEveryDay'], SubscriptionvanchorTWLByTokenEveryDayArgs, MeshContext>,
  /** null **/
  vanchorTWLByTokenEveryDays: InContextSdkMethod<Subscription['vanchorTWLByTokenEveryDays'], SubscriptionvanchorTWLByTokenEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorRelayerFee: InContextSdkMethod<Subscription['vanchorRelayerFee'], SubscriptionvanchorRelayerFeeArgs, MeshContext>,
  /** null **/
  vanchorRelayerFees: InContextSdkMethod<Subscription['vanchorRelayerFees'], SubscriptionvanchorRelayerFeesArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeByToken: InContextSdkMethod<Subscription['vanchorRelayerFeeByToken'], SubscriptionvanchorRelayerFeeByTokenArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeByTokens: InContextSdkMethod<Subscription['vanchorRelayerFeeByTokens'], SubscriptionvanchorRelayerFeeByTokensArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeEvery15Min: InContextSdkMethod<Subscription['vanchorRelayerFeeEvery15Min'], SubscriptionvanchorRelayerFeeEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeEvery15Mins: InContextSdkMethod<Subscription['vanchorRelayerFeeEvery15Mins'], SubscriptionvanchorRelayerFeeEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeByTokenEvery15Min: InContextSdkMethod<Subscription['vanchorRelayerFeeByTokenEvery15Min'], SubscriptionvanchorRelayerFeeByTokenEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeByTokenEvery15Mins: InContextSdkMethod<Subscription['vanchorRelayerFeeByTokenEvery15Mins'], SubscriptionvanchorRelayerFeeByTokenEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeEveryDay: InContextSdkMethod<Subscription['vanchorRelayerFeeEveryDay'], SubscriptionvanchorRelayerFeeEveryDayArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeEveryDays: InContextSdkMethod<Subscription['vanchorRelayerFeeEveryDays'], SubscriptionvanchorRelayerFeeEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeByTokenEveryDay: InContextSdkMethod<Subscription['vanchorRelayerFeeByTokenEveryDay'], SubscriptionvanchorRelayerFeeByTokenEveryDayArgs, MeshContext>,
  /** null **/
  vanchorRelayerFeeByTokenEveryDays: InContextSdkMethod<Subscription['vanchorRelayerFeeByTokenEveryDays'], SubscriptionvanchorRelayerFeeByTokenEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorWrappingFee: InContextSdkMethod<Subscription['vanchorWrappingFee'], SubscriptionvanchorWrappingFeeArgs, MeshContext>,
  /** null **/
  vanchorWrappingFees: InContextSdkMethod<Subscription['vanchorWrappingFees'], SubscriptionvanchorWrappingFeesArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeByToken: InContextSdkMethod<Subscription['vanchorWrappingFeeByToken'], SubscriptionvanchorWrappingFeeByTokenArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeByTokens: InContextSdkMethod<Subscription['vanchorWrappingFeeByTokens'], SubscriptionvanchorWrappingFeeByTokensArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeEvery15Min: InContextSdkMethod<Subscription['vanchorWrappingFeeEvery15Min'], SubscriptionvanchorWrappingFeeEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeEvery15Mins: InContextSdkMethod<Subscription['vanchorWrappingFeeEvery15Mins'], SubscriptionvanchorWrappingFeeEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeByTokenEvery15Min: InContextSdkMethod<Subscription['vanchorWrappingFeeByTokenEvery15Min'], SubscriptionvanchorWrappingFeeByTokenEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeByTokenEvery15Mins: InContextSdkMethod<Subscription['vanchorWrappingFeeByTokenEvery15Mins'], SubscriptionvanchorWrappingFeeByTokenEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeEveryDay: InContextSdkMethod<Subscription['vanchorWrappingFeeEveryDay'], SubscriptionvanchorWrappingFeeEveryDayArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeEveryDays: InContextSdkMethod<Subscription['vanchorWrappingFeeEveryDays'], SubscriptionvanchorWrappingFeeEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeByTokenEveryDay: InContextSdkMethod<Subscription['vanchorWrappingFeeByTokenEveryDay'], SubscriptionvanchorWrappingFeeByTokenEveryDayArgs, MeshContext>,
  /** null **/
  vanchorWrappingFeeByTokenEveryDays: InContextSdkMethod<Subscription['vanchorWrappingFeeByTokenEveryDays'], SubscriptionvanchorWrappingFeeByTokenEveryDaysArgs, MeshContext>,
  /** null **/
  wrappingEventLog: InContextSdkMethod<Subscription['wrappingEventLog'], SubscriptionwrappingEventLogArgs, MeshContext>,
  /** null **/
  wrappingEventLogs: InContextSdkMethod<Subscription['wrappingEventLogs'], SubscriptionwrappingEventLogsArgs, MeshContext>,
  /** null **/
  unwrappingEventLog: InContextSdkMethod<Subscription['unwrappingEventLog'], SubscriptionunwrappingEventLogArgs, MeshContext>,
  /** null **/
  unwrappingEventLogs: InContextSdkMethod<Subscription['unwrappingEventLogs'], SubscriptionunwrappingEventLogsArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalLog: InContextSdkMethod<Subscription['vanchorWithdrawalLog'], SubscriptionvanchorWithdrawalLogArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalLogs: InContextSdkMethod<Subscription['vanchorWithdrawalLogs'], SubscriptionvanchorWithdrawalLogsArgs, MeshContext>,
  /** null **/
  vanchorWithdrawal: InContextSdkMethod<Subscription['vanchorWithdrawal'], SubscriptionvanchorWithdrawalArgs, MeshContext>,
  /** null **/
  vanchorWithdrawals: InContextSdkMethod<Subscription['vanchorWithdrawals'], SubscriptionvanchorWithdrawalsArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalByToken: InContextSdkMethod<Subscription['vanchorWithdrawalByToken'], SubscriptionvanchorWithdrawalByTokenArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalByTokens: InContextSdkMethod<Subscription['vanchorWithdrawalByTokens'], SubscriptionvanchorWithdrawalByTokensArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalEvery15Min: InContextSdkMethod<Subscription['vanchorWithdrawalEvery15Min'], SubscriptionvanchorWithdrawalEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalEvery15Mins: InContextSdkMethod<Subscription['vanchorWithdrawalEvery15Mins'], SubscriptionvanchorWithdrawalEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalByTokenEvery15Min: InContextSdkMethod<Subscription['vanchorWithdrawalByTokenEvery15Min'], SubscriptionvanchorWithdrawalByTokenEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalByTokenEvery15Mins: InContextSdkMethod<Subscription['vanchorWithdrawalByTokenEvery15Mins'], SubscriptionvanchorWithdrawalByTokenEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalEveryDay: InContextSdkMethod<Subscription['vanchorWithdrawalEveryDay'], SubscriptionvanchorWithdrawalEveryDayArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalEveryDays: InContextSdkMethod<Subscription['vanchorWithdrawalEveryDays'], SubscriptionvanchorWithdrawalEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalByTokenEveryDay: InContextSdkMethod<Subscription['vanchorWithdrawalByTokenEveryDay'], SubscriptionvanchorWithdrawalByTokenEveryDayArgs, MeshContext>,
  /** null **/
  vanchorWithdrawalByTokenEveryDays: InContextSdkMethod<Subscription['vanchorWithdrawalByTokenEveryDays'], SubscriptionvanchorWithdrawalByTokenEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorDeposit: InContextSdkMethod<Subscription['vanchorDeposit'], SubscriptionvanchorDepositArgs, MeshContext>,
  /** null **/
  vanchorDeposits: InContextSdkMethod<Subscription['vanchorDeposits'], SubscriptionvanchorDepositsArgs, MeshContext>,
  /** null **/
  vanchorDepositByToken: InContextSdkMethod<Subscription['vanchorDepositByToken'], SubscriptionvanchorDepositByTokenArgs, MeshContext>,
  /** null **/
  vanchorDepositByTokens: InContextSdkMethod<Subscription['vanchorDepositByTokens'], SubscriptionvanchorDepositByTokensArgs, MeshContext>,
  /** null **/
  vanchorDepositEvery15Min: InContextSdkMethod<Subscription['vanchorDepositEvery15Min'], SubscriptionvanchorDepositEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorDepositEvery15Mins: InContextSdkMethod<Subscription['vanchorDepositEvery15Mins'], SubscriptionvanchorDepositEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorDepositByTokenEvery15Min: InContextSdkMethod<Subscription['vanchorDepositByTokenEvery15Min'], SubscriptionvanchorDepositByTokenEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorDepositByTokenEvery15Mins: InContextSdkMethod<Subscription['vanchorDepositByTokenEvery15Mins'], SubscriptionvanchorDepositByTokenEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorDepositEveryDay: InContextSdkMethod<Subscription['vanchorDepositEveryDay'], SubscriptionvanchorDepositEveryDayArgs, MeshContext>,
  /** null **/
  vanchorDepositEveryDays: InContextSdkMethod<Subscription['vanchorDepositEveryDays'], SubscriptionvanchorDepositEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorDepositByTokenEveryDay: InContextSdkMethod<Subscription['vanchorDepositByTokenEveryDay'], SubscriptionvanchorDepositByTokenEveryDayArgs, MeshContext>,
  /** null **/
  vanchorDepositByTokenEveryDays: InContextSdkMethod<Subscription['vanchorDepositByTokenEveryDays'], SubscriptionvanchorDepositByTokenEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorDepositLog: InContextSdkMethod<Subscription['vanchorDepositLog'], SubscriptionvanchorDepositLogArgs, MeshContext>,
  /** null **/
  vanchorDepositLogs: InContextSdkMethod<Subscription['vanchorDepositLogs'], SubscriptionvanchorDepositLogsArgs, MeshContext>,
  /** null **/
  vanchorTransferLog: InContextSdkMethod<Subscription['vanchorTransferLog'], SubscriptionvanchorTransferLogArgs, MeshContext>,
  /** null **/
  vanchorTransferLogs: InContextSdkMethod<Subscription['vanchorTransferLogs'], SubscriptionvanchorTransferLogsArgs, MeshContext>,
  /** null **/
  vanchorVolume: InContextSdkMethod<Subscription['vanchorVolume'], SubscriptionvanchorVolumeArgs, MeshContext>,
  /** null **/
  vanchorVolumes: InContextSdkMethod<Subscription['vanchorVolumes'], SubscriptionvanchorVolumesArgs, MeshContext>,
  /** null **/
  vanchorVolumeByToken: InContextSdkMethod<Subscription['vanchorVolumeByToken'], SubscriptionvanchorVolumeByTokenArgs, MeshContext>,
  /** null **/
  vanchorVolumeByTokens: InContextSdkMethod<Subscription['vanchorVolumeByTokens'], SubscriptionvanchorVolumeByTokensArgs, MeshContext>,
  /** null **/
  vanchorVolumeEvery15Min: InContextSdkMethod<Subscription['vanchorVolumeEvery15Min'], SubscriptionvanchorVolumeEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorVolumeEvery15Mins: InContextSdkMethod<Subscription['vanchorVolumeEvery15Mins'], SubscriptionvanchorVolumeEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorVolumeByTokenEvery15Min: InContextSdkMethod<Subscription['vanchorVolumeByTokenEvery15Min'], SubscriptionvanchorVolumeByTokenEvery15MinArgs, MeshContext>,
  /** null **/
  vanchorVolumeByTokenEvery15Mins: InContextSdkMethod<Subscription['vanchorVolumeByTokenEvery15Mins'], SubscriptionvanchorVolumeByTokenEvery15MinsArgs, MeshContext>,
  /** null **/
  vanchorVolumeEveryDay: InContextSdkMethod<Subscription['vanchorVolumeEveryDay'], SubscriptionvanchorVolumeEveryDayArgs, MeshContext>,
  /** null **/
  vanchorVolumeEveryDays: InContextSdkMethod<Subscription['vanchorVolumeEveryDays'], SubscriptionvanchorVolumeEveryDaysArgs, MeshContext>,
  /** null **/
  vanchorVolumeByTokenEveryDay: InContextSdkMethod<Subscription['vanchorVolumeByTokenEveryDay'], SubscriptionvanchorVolumeByTokenEveryDayArgs, MeshContext>,
  /** null **/
  vanchorVolumeByTokenEveryDays: InContextSdkMethod<Subscription['vanchorVolumeByTokenEveryDays'], SubscriptionvanchorVolumeByTokenEveryDaysArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["vanchor"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["subgraphUrl"]: Scalars['ID']
    };
}
