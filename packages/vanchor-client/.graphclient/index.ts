// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { AthenaTypes } from './sources/athena/types';
import type { DemeterTypes } from './sources/demeter/types';
import type { HermesTypes } from './sources/hermes/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

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


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  EdgeAddition: ResolverTypeWrapper<EdgeAddition>;
  EdgeAddition_filter: EdgeAddition_filter;
  EdgeAddition_orderBy: EdgeAddition_orderBy;
  EdgeUpdate: ResolverTypeWrapper<EdgeUpdate>;
  EdgeUpdate_filter: EdgeUpdate_filter;
  EdgeUpdate_orderBy: EdgeUpdate_orderBy;
  Encryptions: ResolverTypeWrapper<Encryptions>;
  Encryptions_filter: Encryptions_filter;
  Encryptions_orderBy: Encryptions_orderBy;
  ExternalData: ResolverTypeWrapper<ExternalData>;
  ExternalData_filter: ExternalData_filter;
  ExternalData_orderBy: ExternalData_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Insertion: ResolverTypeWrapper<Insertion>;
  Insertion_filter: Insertion_filter;
  Insertion_orderBy: Insertion_orderBy;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  NewCommitment: ResolverTypeWrapper<NewCommitment>;
  NewCommitment_filter: NewCommitment_filter;
  NewCommitment_orderBy: NewCommitment_orderBy;
  NewNullifier: ResolverTypeWrapper<NewNullifier>;
  NewNullifier_filter: NewNullifier_filter;
  NewNullifier_orderBy: NewNullifier_orderBy;
  OrderDirection: OrderDirection;
  PublicInputs: ResolverTypeWrapper<PublicInputs>;
  PublicInputs_filter: PublicInputs_filter;
  PublicInputs_orderBy: PublicInputs_orderBy;
  PublicKey: ResolverTypeWrapper<PublicKey>;
  PublicKey_filter: PublicKey_filter;
  PublicKey_orderBy: PublicKey_orderBy;
  ShieldedTransaction: ResolverTypeWrapper<ShieldedTransaction>;
  ShieldedTransaction_filter: ShieldedTransaction_filter;
  ShieldedTransaction_orderBy: ShieldedTransaction_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Token: ResolverTypeWrapper<Token>;
  Token_filter: Token_filter;
  Token_orderBy: Token_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  EdgeAddition: EdgeAddition;
  EdgeAddition_filter: EdgeAddition_filter;
  EdgeUpdate: EdgeUpdate;
  EdgeUpdate_filter: EdgeUpdate_filter;
  Encryptions: Encryptions;
  Encryptions_filter: Encryptions_filter;
  ExternalData: ExternalData;
  ExternalData_filter: ExternalData_filter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Insertion: Insertion;
  Insertion_filter: Insertion_filter;
  Int: Scalars['Int'];
  NewCommitment: NewCommitment;
  NewCommitment_filter: NewCommitment_filter;
  NewNullifier: NewNullifier;
  NewNullifier_filter: NewNullifier_filter;
  PublicInputs: PublicInputs;
  PublicInputs_filter: PublicInputs_filter;
  PublicKey: PublicKey;
  PublicKey_filter: PublicKey_filter;
  ShieldedTransaction: ShieldedTransaction;
  ShieldedTransaction_filter: ShieldedTransaction_filter;
  String: Scalars['String'];
  Token: Token;
  Token_filter: Token_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  edgeAddition?: Resolver<Maybe<ResolversTypes['EdgeAddition']>, ParentType, ContextType, RequireFields<QueryedgeAdditionArgs, 'id' | 'subgraphError'>>;
  edgeAdditions?: Resolver<Array<ResolversTypes['EdgeAddition']>, ParentType, ContextType, RequireFields<QueryedgeAdditionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  edgeUpdate?: Resolver<Maybe<ResolversTypes['EdgeUpdate']>, ParentType, ContextType, RequireFields<QueryedgeUpdateArgs, 'id' | 'subgraphError'>>;
  edgeUpdates?: Resolver<Array<ResolversTypes['EdgeUpdate']>, ParentType, ContextType, RequireFields<QueryedgeUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  insertion?: Resolver<Maybe<ResolversTypes['Insertion']>, ParentType, ContextType, RequireFields<QueryinsertionArgs, 'id' | 'subgraphError'>>;
  insertions?: Resolver<Array<ResolversTypes['Insertion']>, ParentType, ContextType, RequireFields<QueryinsertionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  newCommitment?: Resolver<Maybe<ResolversTypes['NewCommitment']>, ParentType, ContextType, RequireFields<QuerynewCommitmentArgs, 'id' | 'subgraphError'>>;
  newCommitments?: Resolver<Array<ResolversTypes['NewCommitment']>, ParentType, ContextType, RequireFields<QuerynewCommitmentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  newNullifier?: Resolver<Maybe<ResolversTypes['NewNullifier']>, ParentType, ContextType, RequireFields<QuerynewNullifierArgs, 'id' | 'subgraphError'>>;
  newNullifiers?: Resolver<Array<ResolversTypes['NewNullifier']>, ParentType, ContextType, RequireFields<QuerynewNullifiersArgs, 'skip' | 'first' | 'subgraphError'>>;
  publicKey?: Resolver<Maybe<ResolversTypes['PublicKey']>, ParentType, ContextType, RequireFields<QuerypublicKeyArgs, 'id' | 'subgraphError'>>;
  publicKeys?: Resolver<Array<ResolversTypes['PublicKey']>, ParentType, ContextType, RequireFields<QuerypublicKeysArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  externalData?: Resolver<Maybe<ResolversTypes['ExternalData']>, ParentType, ContextType, RequireFields<QueryexternalDataArgs, 'id' | 'subgraphError'>>;
  externalDatas?: Resolver<Array<ResolversTypes['ExternalData']>, ParentType, ContextType, RequireFields<QueryexternalDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  publicInputs?: Resolver<Array<ResolversTypes['PublicInputs']>, ParentType, ContextType, RequireFields<QuerypublicInputsArgs, 'skip' | 'first' | 'subgraphError'>>;
  encryptions?: Resolver<Array<ResolversTypes['Encryptions']>, ParentType, ContextType, RequireFields<QueryencryptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  shieldedTransaction?: Resolver<Maybe<ResolversTypes['ShieldedTransaction']>, ParentType, ContextType, RequireFields<QueryshieldedTransactionArgs, 'id' | 'subgraphError'>>;
  shieldedTransactions?: Resolver<Array<ResolversTypes['ShieldedTransaction']>, ParentType, ContextType, RequireFields<QueryshieldedTransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  edgeAddition?: SubscriptionResolver<Maybe<ResolversTypes['EdgeAddition']>, "edgeAddition", ParentType, ContextType, RequireFields<SubscriptionedgeAdditionArgs, 'id' | 'subgraphError'>>;
  edgeAdditions?: SubscriptionResolver<Array<ResolversTypes['EdgeAddition']>, "edgeAdditions", ParentType, ContextType, RequireFields<SubscriptionedgeAdditionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  edgeUpdate?: SubscriptionResolver<Maybe<ResolversTypes['EdgeUpdate']>, "edgeUpdate", ParentType, ContextType, RequireFields<SubscriptionedgeUpdateArgs, 'id' | 'subgraphError'>>;
  edgeUpdates?: SubscriptionResolver<Array<ResolversTypes['EdgeUpdate']>, "edgeUpdates", ParentType, ContextType, RequireFields<SubscriptionedgeUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  insertion?: SubscriptionResolver<Maybe<ResolversTypes['Insertion']>, "insertion", ParentType, ContextType, RequireFields<SubscriptioninsertionArgs, 'id' | 'subgraphError'>>;
  insertions?: SubscriptionResolver<Array<ResolversTypes['Insertion']>, "insertions", ParentType, ContextType, RequireFields<SubscriptioninsertionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  newCommitment?: SubscriptionResolver<Maybe<ResolversTypes['NewCommitment']>, "newCommitment", ParentType, ContextType, RequireFields<SubscriptionnewCommitmentArgs, 'id' | 'subgraphError'>>;
  newCommitments?: SubscriptionResolver<Array<ResolversTypes['NewCommitment']>, "newCommitments", ParentType, ContextType, RequireFields<SubscriptionnewCommitmentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  newNullifier?: SubscriptionResolver<Maybe<ResolversTypes['NewNullifier']>, "newNullifier", ParentType, ContextType, RequireFields<SubscriptionnewNullifierArgs, 'id' | 'subgraphError'>>;
  newNullifiers?: SubscriptionResolver<Array<ResolversTypes['NewNullifier']>, "newNullifiers", ParentType, ContextType, RequireFields<SubscriptionnewNullifiersArgs, 'skip' | 'first' | 'subgraphError'>>;
  publicKey?: SubscriptionResolver<Maybe<ResolversTypes['PublicKey']>, "publicKey", ParentType, ContextType, RequireFields<SubscriptionpublicKeyArgs, 'id' | 'subgraphError'>>;
  publicKeys?: SubscriptionResolver<Array<ResolversTypes['PublicKey']>, "publicKeys", ParentType, ContextType, RequireFields<SubscriptionpublicKeysArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  externalData?: SubscriptionResolver<Maybe<ResolversTypes['ExternalData']>, "externalData", ParentType, ContextType, RequireFields<SubscriptionexternalDataArgs, 'id' | 'subgraphError'>>;
  externalDatas?: SubscriptionResolver<Array<ResolversTypes['ExternalData']>, "externalDatas", ParentType, ContextType, RequireFields<SubscriptionexternalDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  publicInputs?: SubscriptionResolver<Array<ResolversTypes['PublicInputs']>, "publicInputs", ParentType, ContextType, RequireFields<SubscriptionpublicInputsArgs, 'skip' | 'first' | 'subgraphError'>>;
  encryptions?: SubscriptionResolver<Array<ResolversTypes['Encryptions']>, "encryptions", ParentType, ContextType, RequireFields<SubscriptionencryptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  shieldedTransaction?: SubscriptionResolver<Maybe<ResolversTypes['ShieldedTransaction']>, "shieldedTransaction", ParentType, ContextType, RequireFields<SubscriptionshieldedTransactionArgs, 'id' | 'subgraphError'>>;
  shieldedTransactions?: SubscriptionResolver<Array<ResolversTypes['ShieldedTransaction']>, "shieldedTransactions", ParentType, ContextType, RequireFields<SubscriptionshieldedTransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type EdgeAdditionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EdgeAddition'] = ResolversParentTypes['EdgeAddition']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  chainID?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  latestLeafIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  merkleRoot?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EdgeUpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EdgeUpdate'] = ResolversParentTypes['EdgeUpdate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  chainID?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  latestLeafIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  merkleRoot?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EncryptionsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Encryptions'] = ResolversParentTypes['Encryptions']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  encryptedOutput1?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  encryptedOutput2?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExternalDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExternalData'] = ResolversParentTypes['ExternalData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  extAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  relayer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  refund?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InsertionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Insertion'] = ResolversParentTypes['Insertion']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  commitment?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  leafIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  newMerkleRoot?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NewCommitmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NewCommitment'] = ResolversParentTypes['NewCommitment']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  commitment?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  subTreeIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  leafIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  encryptedOutput?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NewNullifierResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NewNullifier'] = ResolversParentTypes['NewNullifier']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  nullifier?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicInputsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PublicInputs'] = ResolversParentTypes['PublicInputs']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  roots?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  extensionRoots?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  inputNullifiers?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  outputCommitments?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  publicAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  extDataHash?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicKeyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PublicKey'] = ResolversParentTypes['PublicKey']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShieldedTransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShieldedTransaction'] = ResolversParentTypes['ShieldedTransaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  vanchor?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  proof?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  auxPublicInputs?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  externalData?: Resolver<ResolversTypes['ExternalData'], ParentType, ContextType>;
  publicInputs?: Resolver<ResolversTypes['PublicInputs'], ParentType, ContextType>;
  encryptions?: Resolver<ResolversTypes['Encryptions'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  EdgeAddition?: EdgeAdditionResolvers<ContextType>;
  EdgeUpdate?: EdgeUpdateResolvers<ContextType>;
  Encryptions?: EncryptionsResolvers<ContextType>;
  ExternalData?: ExternalDataResolvers<ContextType>;
  Insertion?: InsertionResolvers<ContextType>;
  NewCommitment?: NewCommitmentResolvers<ContextType>;
  NewNullifier?: NewNullifierResolvers<ContextType>;
  PublicInputs?: PublicInputsResolvers<ContextType>;
  PublicKey?: PublicKeyResolvers<ContextType>;
  ShieldedTransaction?: ShieldedTransactionResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = AthenaTypes.Context & DemeterTypes.Context & HermesTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "graphclient build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".graphclient",
    configName: "graphclient",
    additionalPackagePrefixes: ["@graphprotocol/client-"],
    initialLoggerPrefix: "GraphClient",
  });
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));