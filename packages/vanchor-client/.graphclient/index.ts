// @ts-nocheck
import {
  GraphQLResolveInfo,
  SelectionSetNode,
  FieldNode,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from '@graphql-mesh/cache-localforage';
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from '@graphql-mesh/graphql';
import { parse } from 'graphql';
import BareMerger from '@graphql-mesh/merger-bare';
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import {
  getMesh,
  ExecuteMeshFn,
  SubscribeMeshFn,
  MeshContext as BaseMeshContext,
  MeshInstance,
} from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { VanchorTypes } from './sources/vanchor/types';
import * as importedModule$0 from './sources/vanchor/introspectionSchema';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};

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
  vanchorTotalRelayerFee?: Maybe<VAnchorTotalRelayerFee>;
  vanchorTotalRelayerFees: Array<VAnchorTotalRelayerFee>;
  vanchorTotalRelayerFeeByToken?: Maybe<VAnchorTotalRelayerFeeByToken>;
  vanchorTotalRelayerFeeByTokens: Array<VAnchorTotalRelayerFeeByToken>;
  vanchorTotalRelayerFee15Min?: Maybe<VAnchorTotalRelayerFee15Min>;
  vanchorTotalRelayerFee15Mins: Array<VAnchorTotalRelayerFee15Min>;
  vanchorTotalRelayerFeeByTokenEvery15Min?: Maybe<VAnchorTotalRelayerFeeByTokenEvery15Min>;
  vanchorTotalRelayerFeeByTokenEvery15Mins: Array<VAnchorTotalRelayerFeeByTokenEvery15Min>;
  vanchorTotalWrappingFee?: Maybe<VAnchorTotalWrappingFee>;
  vanchorTotalWrappingFees: Array<VAnchorTotalWrappingFee>;
  vanchorTotalWrappingFeeByToken?: Maybe<VAnchorTotalWrappingFeeByToken>;
  vanchorTotalWrappingFeeByTokens: Array<VAnchorTotalWrappingFeeByToken>;
  vanchorTotalWrappingFee15Min?: Maybe<VAnchorTotalWrappingFee15Min>;
  vanchorTotalWrappingFee15Mins: Array<VAnchorTotalWrappingFee15Min>;
  vanchorTotalWrappingFeeByTokenEvery15Min?: Maybe<VAnchorTotalWrappingFeeByTokenEvery15Min>;
  vanchorTotalWrappingFeeByTokenEvery15Mins: Array<VAnchorTotalWrappingFeeByTokenEvery15Min>;
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

export type QueryvanchorTotalRelayerFeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryvanchorTotalRelayerFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalRelayerFee_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalRelayerFee_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryvanchorTotalRelayerFeeByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryvanchorTotalRelayerFeeByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalRelayerFeeByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalRelayerFeeByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryvanchorTotalRelayerFee15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryvanchorTotalRelayerFee15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalRelayerFee15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalRelayerFee15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryvanchorTotalRelayerFeeByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryvanchorTotalRelayerFeeByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalRelayerFeeByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalRelayerFeeByTokenEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryvanchorTotalWrappingFeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryvanchorTotalWrappingFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalWrappingFee_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalWrappingFee_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryvanchorTotalWrappingFeeByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryvanchorTotalWrappingFeeByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalWrappingFeeByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalWrappingFeeByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryvanchorTotalWrappingFee15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryvanchorTotalWrappingFee15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalWrappingFee15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalWrappingFee15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryvanchorTotalWrappingFeeByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryvanchorTotalWrappingFeeByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalWrappingFeeByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalWrappingFeeByTokenEvery15Min_filter>;
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
  vanchorTotalRelayerFee?: Maybe<VAnchorTotalRelayerFee>;
  vanchorTotalRelayerFees: Array<VAnchorTotalRelayerFee>;
  vanchorTotalRelayerFeeByToken?: Maybe<VAnchorTotalRelayerFeeByToken>;
  vanchorTotalRelayerFeeByTokens: Array<VAnchorTotalRelayerFeeByToken>;
  vanchorTotalRelayerFee15Min?: Maybe<VAnchorTotalRelayerFee15Min>;
  vanchorTotalRelayerFee15Mins: Array<VAnchorTotalRelayerFee15Min>;
  vanchorTotalRelayerFeeByTokenEvery15Min?: Maybe<VAnchorTotalRelayerFeeByTokenEvery15Min>;
  vanchorTotalRelayerFeeByTokenEvery15Mins: Array<VAnchorTotalRelayerFeeByTokenEvery15Min>;
  vanchorTotalWrappingFee?: Maybe<VAnchorTotalWrappingFee>;
  vanchorTotalWrappingFees: Array<VAnchorTotalWrappingFee>;
  vanchorTotalWrappingFeeByToken?: Maybe<VAnchorTotalWrappingFeeByToken>;
  vanchorTotalWrappingFeeByTokens: Array<VAnchorTotalWrappingFeeByToken>;
  vanchorTotalWrappingFee15Min?: Maybe<VAnchorTotalWrappingFee15Min>;
  vanchorTotalWrappingFee15Mins: Array<VAnchorTotalWrappingFee15Min>;
  vanchorTotalWrappingFeeByTokenEvery15Min?: Maybe<VAnchorTotalWrappingFeeByTokenEvery15Min>;
  vanchorTotalWrappingFeeByTokenEvery15Mins: Array<VAnchorTotalWrappingFeeByTokenEvery15Min>;
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

export type SubscriptionvanchorTotalRelayerFeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionvanchorTotalRelayerFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalRelayerFee_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalRelayerFee_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionvanchorTotalRelayerFeeByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionvanchorTotalRelayerFeeByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalRelayerFeeByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalRelayerFeeByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionvanchorTotalRelayerFee15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionvanchorTotalRelayerFee15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalRelayerFee15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalRelayerFee15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionvanchorTotalRelayerFeeByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionvanchorTotalRelayerFeeByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalRelayerFeeByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalRelayerFeeByTokenEvery15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionvanchorTotalWrappingFeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionvanchorTotalWrappingFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalWrappingFee_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalWrappingFee_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionvanchorTotalWrappingFeeByTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionvanchorTotalWrappingFeeByTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalWrappingFeeByToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalWrappingFeeByToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionvanchorTotalWrappingFee15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionvanchorTotalWrappingFee15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalWrappingFee15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalWrappingFee15Min_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionvanchorTotalWrappingFeeByTokenEvery15MinArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionvanchorTotalWrappingFeeByTokenEvery15MinsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VAnchorTotalWrappingFeeByTokenEvery15Min_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VAnchorTotalWrappingFeeByTokenEvery15Min_filter>;
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
export type OrderDirection = 'asc' | 'desc';

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
  subgraphUrl: Scalars['String'];
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

export type Token_orderBy = 'id' | 'address' | 'decimals' | 'name' | 'symbol';

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

export type VAnchorTotalRelayerFee = {
  id: Scalars['String'];
  fees: Scalars['BigInt'];
};

export type VAnchorTotalRelayerFee15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  fees: Scalars['BigInt'];
};

export type VAnchorTotalRelayerFee15Min_filter = {
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
  and?: InputMaybe<Array<InputMaybe<VAnchorTotalRelayerFee15Min_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTotalRelayerFee15Min_filter>>>;
};

export type VAnchorTotalRelayerFee15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'startInterval'
  | 'endInterval'
  | 'fees';

export type VAnchorTotalRelayerFeeByToken = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  tokenAddress: Scalars['Bytes'];
  fees: Scalars['BigInt'];
};

export type VAnchorTotalRelayerFeeByTokenEvery15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  fees: Scalars['BigInt'];
};

export type VAnchorTotalRelayerFeeByTokenEvery15Min_filter = {
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
  and?: InputMaybe<
    Array<InputMaybe<VAnchorTotalRelayerFeeByTokenEvery15Min_filter>>
  >;
  or?: InputMaybe<
    Array<InputMaybe<VAnchorTotalRelayerFeeByTokenEvery15Min_filter>>
  >;
};

export type VAnchorTotalRelayerFeeByTokenEvery15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'startInterval'
  | 'endInterval'
  | 'fees';

export type VAnchorTotalRelayerFeeByToken_filter = {
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
  and?: InputMaybe<Array<InputMaybe<VAnchorTotalRelayerFeeByToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTotalRelayerFeeByToken_filter>>>;
};

export type VAnchorTotalRelayerFeeByToken_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenSymbol'
  | 'tokenAddress'
  | 'fees';

export type VAnchorTotalRelayerFee_filter = {
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
  and?: InputMaybe<Array<InputMaybe<VAnchorTotalRelayerFee_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTotalRelayerFee_filter>>>;
};

export type VAnchorTotalRelayerFee_orderBy = 'id' | 'fees';

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
  and?: InputMaybe<
    Array<InputMaybe<VAnchorTotalValueLockedByTokenEvery15Min_filter>>
  >;
  or?: InputMaybe<
    Array<InputMaybe<VAnchorTotalValueLockedByTokenEvery15Min_filter>>
  >;
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
  and?: InputMaybe<
    Array<InputMaybe<VAnchorTotalValueLockedByTokenEveryDay_filter>>
  >;
  or?: InputMaybe<
    Array<InputMaybe<VAnchorTotalValueLockedByTokenEveryDay_filter>>
  >;
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

export type VAnchorTotalValueLocked_orderBy = 'id' | 'totalValueLocked';

export type VAnchorTotalWrappingFee = {
  id: Scalars['String'];
  fees: Scalars['BigInt'];
};

export type VAnchorTotalWrappingFee15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  fees: Scalars['BigInt'];
};

export type VAnchorTotalWrappingFee15Min_filter = {
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
  and?: InputMaybe<Array<InputMaybe<VAnchorTotalWrappingFee15Min_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTotalWrappingFee15Min_filter>>>;
};

export type VAnchorTotalWrappingFee15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'startInterval'
  | 'endInterval'
  | 'fees';

export type VAnchorTotalWrappingFeeByToken = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  tokenAddress: Scalars['Bytes'];
  fees: Scalars['BigInt'];
};

export type VAnchorTotalWrappingFeeByTokenEvery15Min = {
  id: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  tokenAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  fees: Scalars['BigInt'];
};

export type VAnchorTotalWrappingFeeByTokenEvery15Min_filter = {
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
  and?: InputMaybe<
    Array<InputMaybe<VAnchorTotalWrappingFeeByTokenEvery15Min_filter>>
  >;
  or?: InputMaybe<
    Array<InputMaybe<VAnchorTotalWrappingFeeByTokenEvery15Min_filter>>
  >;
};

export type VAnchorTotalWrappingFeeByTokenEvery15Min_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenAddress'
  | 'tokenSymbol'
  | 'startInterval'
  | 'endInterval'
  | 'fees';

export type VAnchorTotalWrappingFeeByToken_filter = {
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
  and?: InputMaybe<Array<InputMaybe<VAnchorTotalWrappingFeeByToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTotalWrappingFeeByToken_filter>>>;
};

export type VAnchorTotalWrappingFeeByToken_orderBy =
  | 'id'
  | 'vAnchorAddress'
  | 'tokenSymbol'
  | 'tokenAddress'
  | 'fees';

export type VAnchorTotalWrappingFee_filter = {
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
  and?: InputMaybe<Array<InputMaybe<VAnchorTotalWrappingFee_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorTotalWrappingFee_filter>>>;
};

export type VAnchorTotalWrappingFee_orderBy = 'id' | 'fees';

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

export type VAnchorVolume_orderBy = 'id' | 'volume';

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
  and?: InputMaybe<
    Array<InputMaybe<VAnchorWithdrawalByTokenEvery15Min_filter>>
  >;
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
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
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

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
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
  UnwrappingEventLog: ResolverTypeWrapper<UnwrappingEventLog>;
  UnwrappingEventLog_filter: UnwrappingEventLog_filter;
  UnwrappingEventLog_orderBy: UnwrappingEventLog_orderBy;
  VAnchorDeposit: ResolverTypeWrapper<VAnchorDeposit>;
  VAnchorDepositByToken: ResolverTypeWrapper<VAnchorDepositByToken>;
  VAnchorDepositByTokenEvery15Min: ResolverTypeWrapper<VAnchorDepositByTokenEvery15Min>;
  VAnchorDepositByTokenEvery15Min_filter: VAnchorDepositByTokenEvery15Min_filter;
  VAnchorDepositByTokenEvery15Min_orderBy: VAnchorDepositByTokenEvery15Min_orderBy;
  VAnchorDepositByTokenEveryDay: ResolverTypeWrapper<VAnchorDepositByTokenEveryDay>;
  VAnchorDepositByTokenEveryDay_filter: VAnchorDepositByTokenEveryDay_filter;
  VAnchorDepositByTokenEveryDay_orderBy: VAnchorDepositByTokenEveryDay_orderBy;
  VAnchorDepositByToken_filter: VAnchorDepositByToken_filter;
  VAnchorDepositByToken_orderBy: VAnchorDepositByToken_orderBy;
  VAnchorDepositEvery15Min: ResolverTypeWrapper<VAnchorDepositEvery15Min>;
  VAnchorDepositEvery15Min_filter: VAnchorDepositEvery15Min_filter;
  VAnchorDepositEvery15Min_orderBy: VAnchorDepositEvery15Min_orderBy;
  VAnchorDepositEveryDay: ResolverTypeWrapper<VAnchorDepositEveryDay>;
  VAnchorDepositEveryDay_filter: VAnchorDepositEveryDay_filter;
  VAnchorDepositEveryDay_orderBy: VAnchorDepositEveryDay_orderBy;
  VAnchorDepositLog: ResolverTypeWrapper<VAnchorDepositLog>;
  VAnchorDepositLog_filter: VAnchorDepositLog_filter;
  VAnchorDepositLog_orderBy: VAnchorDepositLog_orderBy;
  VAnchorDeposit_filter: VAnchorDeposit_filter;
  VAnchorDeposit_orderBy: VAnchorDeposit_orderBy;
  VAnchorTotalRelayerFee: ResolverTypeWrapper<VAnchorTotalRelayerFee>;
  VAnchorTotalRelayerFee15Min: ResolverTypeWrapper<VAnchorTotalRelayerFee15Min>;
  VAnchorTotalRelayerFee15Min_filter: VAnchorTotalRelayerFee15Min_filter;
  VAnchorTotalRelayerFee15Min_orderBy: VAnchorTotalRelayerFee15Min_orderBy;
  VAnchorTotalRelayerFeeByToken: ResolverTypeWrapper<VAnchorTotalRelayerFeeByToken>;
  VAnchorTotalRelayerFeeByTokenEvery15Min: ResolverTypeWrapper<VAnchorTotalRelayerFeeByTokenEvery15Min>;
  VAnchorTotalRelayerFeeByTokenEvery15Min_filter: VAnchorTotalRelayerFeeByTokenEvery15Min_filter;
  VAnchorTotalRelayerFeeByTokenEvery15Min_orderBy: VAnchorTotalRelayerFeeByTokenEvery15Min_orderBy;
  VAnchorTotalRelayerFeeByToken_filter: VAnchorTotalRelayerFeeByToken_filter;
  VAnchorTotalRelayerFeeByToken_orderBy: VAnchorTotalRelayerFeeByToken_orderBy;
  VAnchorTotalRelayerFee_filter: VAnchorTotalRelayerFee_filter;
  VAnchorTotalRelayerFee_orderBy: VAnchorTotalRelayerFee_orderBy;
  VAnchorTotalValueLocked: ResolverTypeWrapper<VAnchorTotalValueLocked>;
  VAnchorTotalValueLockedByToken: ResolverTypeWrapper<VAnchorTotalValueLockedByToken>;
  VAnchorTotalValueLockedByTokenEvery15Min: ResolverTypeWrapper<VAnchorTotalValueLockedByTokenEvery15Min>;
  VAnchorTotalValueLockedByTokenEvery15Min_filter: VAnchorTotalValueLockedByTokenEvery15Min_filter;
  VAnchorTotalValueLockedByTokenEvery15Min_orderBy: VAnchorTotalValueLockedByTokenEvery15Min_orderBy;
  VAnchorTotalValueLockedByTokenEveryDay: ResolverTypeWrapper<VAnchorTotalValueLockedByTokenEveryDay>;
  VAnchorTotalValueLockedByTokenEveryDay_filter: VAnchorTotalValueLockedByTokenEveryDay_filter;
  VAnchorTotalValueLockedByTokenEveryDay_orderBy: VAnchorTotalValueLockedByTokenEveryDay_orderBy;
  VAnchorTotalValueLockedByToken_filter: VAnchorTotalValueLockedByToken_filter;
  VAnchorTotalValueLockedByToken_orderBy: VAnchorTotalValueLockedByToken_orderBy;
  VAnchorTotalValueLockedEvery15Min: ResolverTypeWrapper<VAnchorTotalValueLockedEvery15Min>;
  VAnchorTotalValueLockedEvery15Min_filter: VAnchorTotalValueLockedEvery15Min_filter;
  VAnchorTotalValueLockedEvery15Min_orderBy: VAnchorTotalValueLockedEvery15Min_orderBy;
  VAnchorTotalValueLockedEveryDay: ResolverTypeWrapper<VAnchorTotalValueLockedEveryDay>;
  VAnchorTotalValueLockedEveryDay_filter: VAnchorTotalValueLockedEveryDay_filter;
  VAnchorTotalValueLockedEveryDay_orderBy: VAnchorTotalValueLockedEveryDay_orderBy;
  VAnchorTotalValueLocked_filter: VAnchorTotalValueLocked_filter;
  VAnchorTotalValueLocked_orderBy: VAnchorTotalValueLocked_orderBy;
  VAnchorTotalWrappingFee: ResolverTypeWrapper<VAnchorTotalWrappingFee>;
  VAnchorTotalWrappingFee15Min: ResolverTypeWrapper<VAnchorTotalWrappingFee15Min>;
  VAnchorTotalWrappingFee15Min_filter: VAnchorTotalWrappingFee15Min_filter;
  VAnchorTotalWrappingFee15Min_orderBy: VAnchorTotalWrappingFee15Min_orderBy;
  VAnchorTotalWrappingFeeByToken: ResolverTypeWrapper<VAnchorTotalWrappingFeeByToken>;
  VAnchorTotalWrappingFeeByTokenEvery15Min: ResolverTypeWrapper<VAnchorTotalWrappingFeeByTokenEvery15Min>;
  VAnchorTotalWrappingFeeByTokenEvery15Min_filter: VAnchorTotalWrappingFeeByTokenEvery15Min_filter;
  VAnchorTotalWrappingFeeByTokenEvery15Min_orderBy: VAnchorTotalWrappingFeeByTokenEvery15Min_orderBy;
  VAnchorTotalWrappingFeeByToken_filter: VAnchorTotalWrappingFeeByToken_filter;
  VAnchorTotalWrappingFeeByToken_orderBy: VAnchorTotalWrappingFeeByToken_orderBy;
  VAnchorTotalWrappingFee_filter: VAnchorTotalWrappingFee_filter;
  VAnchorTotalWrappingFee_orderBy: VAnchorTotalWrappingFee_orderBy;
  VAnchorTransferLog: ResolverTypeWrapper<VAnchorTransferLog>;
  VAnchorTransferLog_filter: VAnchorTransferLog_filter;
  VAnchorTransferLog_orderBy: VAnchorTransferLog_orderBy;
  VAnchorVolume: ResolverTypeWrapper<VAnchorVolume>;
  VAnchorVolumeByToken: ResolverTypeWrapper<VAnchorVolumeByToken>;
  VAnchorVolumeByTokenEvery15Min: ResolverTypeWrapper<VAnchorVolumeByTokenEvery15Min>;
  VAnchorVolumeByTokenEvery15Min_filter: VAnchorVolumeByTokenEvery15Min_filter;
  VAnchorVolumeByTokenEvery15Min_orderBy: VAnchorVolumeByTokenEvery15Min_orderBy;
  VAnchorVolumeByTokenEveryDay: ResolverTypeWrapper<VAnchorVolumeByTokenEveryDay>;
  VAnchorVolumeByTokenEveryDay_filter: VAnchorVolumeByTokenEveryDay_filter;
  VAnchorVolumeByTokenEveryDay_orderBy: VAnchorVolumeByTokenEveryDay_orderBy;
  VAnchorVolumeByToken_filter: VAnchorVolumeByToken_filter;
  VAnchorVolumeByToken_orderBy: VAnchorVolumeByToken_orderBy;
  VAnchorVolumeEvery15Min: ResolverTypeWrapper<VAnchorVolumeEvery15Min>;
  VAnchorVolumeEvery15Min_filter: VAnchorVolumeEvery15Min_filter;
  VAnchorVolumeEvery15Min_orderBy: VAnchorVolumeEvery15Min_orderBy;
  VAnchorVolumeEveryDay: ResolverTypeWrapper<VAnchorVolumeEveryDay>;
  VAnchorVolumeEveryDay_filter: VAnchorVolumeEveryDay_filter;
  VAnchorVolumeEveryDay_orderBy: VAnchorVolumeEveryDay_orderBy;
  VAnchorVolume_filter: VAnchorVolume_filter;
  VAnchorVolume_orderBy: VAnchorVolume_orderBy;
  VAnchorWithdrawal: ResolverTypeWrapper<VAnchorWithdrawal>;
  VAnchorWithdrawalByToken: ResolverTypeWrapper<VAnchorWithdrawalByToken>;
  VAnchorWithdrawalByTokenEvery15Min: ResolverTypeWrapper<VAnchorWithdrawalByTokenEvery15Min>;
  VAnchorWithdrawalByTokenEvery15Min_filter: VAnchorWithdrawalByTokenEvery15Min_filter;
  VAnchorWithdrawalByTokenEvery15Min_orderBy: VAnchorWithdrawalByTokenEvery15Min_orderBy;
  VAnchorWithdrawalByTokenEveryDay: ResolverTypeWrapper<VAnchorWithdrawalByTokenEveryDay>;
  VAnchorWithdrawalByTokenEveryDay_filter: VAnchorWithdrawalByTokenEveryDay_filter;
  VAnchorWithdrawalByTokenEveryDay_orderBy: VAnchorWithdrawalByTokenEveryDay_orderBy;
  VAnchorWithdrawalByToken_filter: VAnchorWithdrawalByToken_filter;
  VAnchorWithdrawalByToken_orderBy: VAnchorWithdrawalByToken_orderBy;
  VAnchorWithdrawalEvery15Min: ResolverTypeWrapper<VAnchorWithdrawalEvery15Min>;
  VAnchorWithdrawalEvery15Min_filter: VAnchorWithdrawalEvery15Min_filter;
  VAnchorWithdrawalEvery15Min_orderBy: VAnchorWithdrawalEvery15Min_orderBy;
  VAnchorWithdrawalEveryDay: ResolverTypeWrapper<VAnchorWithdrawalEveryDay>;
  VAnchorWithdrawalEveryDay_filter: VAnchorWithdrawalEveryDay_filter;
  VAnchorWithdrawalEveryDay_orderBy: VAnchorWithdrawalEveryDay_orderBy;
  VAnchorWithdrawalLog: ResolverTypeWrapper<VAnchorWithdrawalLog>;
  VAnchorWithdrawalLog_filter: VAnchorWithdrawalLog_filter;
  VAnchorWithdrawalLog_orderBy: VAnchorWithdrawalLog_orderBy;
  VAnchorWithdrawal_filter: VAnchorWithdrawal_filter;
  VAnchorWithdrawal_orderBy: VAnchorWithdrawal_orderBy;
  WrappingEventLog: ResolverTypeWrapper<WrappingEventLog>;
  WrappingEventLog_filter: WrappingEventLog_filter;
  WrappingEventLog_orderBy: WrappingEventLog_orderBy;
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
  UnwrappingEventLog: UnwrappingEventLog;
  UnwrappingEventLog_filter: UnwrappingEventLog_filter;
  VAnchorDeposit: VAnchorDeposit;
  VAnchorDepositByToken: VAnchorDepositByToken;
  VAnchorDepositByTokenEvery15Min: VAnchorDepositByTokenEvery15Min;
  VAnchorDepositByTokenEvery15Min_filter: VAnchorDepositByTokenEvery15Min_filter;
  VAnchorDepositByTokenEveryDay: VAnchorDepositByTokenEveryDay;
  VAnchorDepositByTokenEveryDay_filter: VAnchorDepositByTokenEveryDay_filter;
  VAnchorDepositByToken_filter: VAnchorDepositByToken_filter;
  VAnchorDepositEvery15Min: VAnchorDepositEvery15Min;
  VAnchorDepositEvery15Min_filter: VAnchorDepositEvery15Min_filter;
  VAnchorDepositEveryDay: VAnchorDepositEveryDay;
  VAnchorDepositEveryDay_filter: VAnchorDepositEveryDay_filter;
  VAnchorDepositLog: VAnchorDepositLog;
  VAnchorDepositLog_filter: VAnchorDepositLog_filter;
  VAnchorDeposit_filter: VAnchorDeposit_filter;
  VAnchorTotalRelayerFee: VAnchorTotalRelayerFee;
  VAnchorTotalRelayerFee15Min: VAnchorTotalRelayerFee15Min;
  VAnchorTotalRelayerFee15Min_filter: VAnchorTotalRelayerFee15Min_filter;
  VAnchorTotalRelayerFeeByToken: VAnchorTotalRelayerFeeByToken;
  VAnchorTotalRelayerFeeByTokenEvery15Min: VAnchorTotalRelayerFeeByTokenEvery15Min;
  VAnchorTotalRelayerFeeByTokenEvery15Min_filter: VAnchorTotalRelayerFeeByTokenEvery15Min_filter;
  VAnchorTotalRelayerFeeByToken_filter: VAnchorTotalRelayerFeeByToken_filter;
  VAnchorTotalRelayerFee_filter: VAnchorTotalRelayerFee_filter;
  VAnchorTotalValueLocked: VAnchorTotalValueLocked;
  VAnchorTotalValueLockedByToken: VAnchorTotalValueLockedByToken;
  VAnchorTotalValueLockedByTokenEvery15Min: VAnchorTotalValueLockedByTokenEvery15Min;
  VAnchorTotalValueLockedByTokenEvery15Min_filter: VAnchorTotalValueLockedByTokenEvery15Min_filter;
  VAnchorTotalValueLockedByTokenEveryDay: VAnchorTotalValueLockedByTokenEveryDay;
  VAnchorTotalValueLockedByTokenEveryDay_filter: VAnchorTotalValueLockedByTokenEveryDay_filter;
  VAnchorTotalValueLockedByToken_filter: VAnchorTotalValueLockedByToken_filter;
  VAnchorTotalValueLockedEvery15Min: VAnchorTotalValueLockedEvery15Min;
  VAnchorTotalValueLockedEvery15Min_filter: VAnchorTotalValueLockedEvery15Min_filter;
  VAnchorTotalValueLockedEveryDay: VAnchorTotalValueLockedEveryDay;
  VAnchorTotalValueLockedEveryDay_filter: VAnchorTotalValueLockedEveryDay_filter;
  VAnchorTotalValueLocked_filter: VAnchorTotalValueLocked_filter;
  VAnchorTotalWrappingFee: VAnchorTotalWrappingFee;
  VAnchorTotalWrappingFee15Min: VAnchorTotalWrappingFee15Min;
  VAnchorTotalWrappingFee15Min_filter: VAnchorTotalWrappingFee15Min_filter;
  VAnchorTotalWrappingFeeByToken: VAnchorTotalWrappingFeeByToken;
  VAnchorTotalWrappingFeeByTokenEvery15Min: VAnchorTotalWrappingFeeByTokenEvery15Min;
  VAnchorTotalWrappingFeeByTokenEvery15Min_filter: VAnchorTotalWrappingFeeByTokenEvery15Min_filter;
  VAnchorTotalWrappingFeeByToken_filter: VAnchorTotalWrappingFeeByToken_filter;
  VAnchorTotalWrappingFee_filter: VAnchorTotalWrappingFee_filter;
  VAnchorTransferLog: VAnchorTransferLog;
  VAnchorTransferLog_filter: VAnchorTransferLog_filter;
  VAnchorVolume: VAnchorVolume;
  VAnchorVolumeByToken: VAnchorVolumeByToken;
  VAnchorVolumeByTokenEvery15Min: VAnchorVolumeByTokenEvery15Min;
  VAnchorVolumeByTokenEvery15Min_filter: VAnchorVolumeByTokenEvery15Min_filter;
  VAnchorVolumeByTokenEveryDay: VAnchorVolumeByTokenEveryDay;
  VAnchorVolumeByTokenEveryDay_filter: VAnchorVolumeByTokenEveryDay_filter;
  VAnchorVolumeByToken_filter: VAnchorVolumeByToken_filter;
  VAnchorVolumeEvery15Min: VAnchorVolumeEvery15Min;
  VAnchorVolumeEvery15Min_filter: VAnchorVolumeEvery15Min_filter;
  VAnchorVolumeEveryDay: VAnchorVolumeEveryDay;
  VAnchorVolumeEveryDay_filter: VAnchorVolumeEveryDay_filter;
  VAnchorVolume_filter: VAnchorVolume_filter;
  VAnchorWithdrawal: VAnchorWithdrawal;
  VAnchorWithdrawalByToken: VAnchorWithdrawalByToken;
  VAnchorWithdrawalByTokenEvery15Min: VAnchorWithdrawalByTokenEvery15Min;
  VAnchorWithdrawalByTokenEvery15Min_filter: VAnchorWithdrawalByTokenEvery15Min_filter;
  VAnchorWithdrawalByTokenEveryDay: VAnchorWithdrawalByTokenEveryDay;
  VAnchorWithdrawalByTokenEveryDay_filter: VAnchorWithdrawalByTokenEveryDay_filter;
  VAnchorWithdrawalByToken_filter: VAnchorWithdrawalByToken_filter;
  VAnchorWithdrawalEvery15Min: VAnchorWithdrawalEvery15Min;
  VAnchorWithdrawalEvery15Min_filter: VAnchorWithdrawalEvery15Min_filter;
  VAnchorWithdrawalEveryDay: VAnchorWithdrawalEveryDay;
  VAnchorWithdrawalEveryDay_filter: VAnchorWithdrawalEveryDay_filter;
  VAnchorWithdrawalLog: VAnchorWithdrawalLog;
  VAnchorWithdrawalLog_filter: VAnchorWithdrawalLog_filter;
  VAnchorWithdrawal_filter: VAnchorWithdrawal_filter;
  WrappingEventLog: WrappingEventLog;
  WrappingEventLog_filter: WrappingEventLog_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = {};

export type entityDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext & { subgraphUrl: string },
  Args = entityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext & { subgraphUrl: string },
  Args = subgraphIdDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext & { subgraphUrl: string },
  Args = derivedFromDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  edgeAddition?: Resolver<
    Maybe<ResolversTypes['EdgeAddition']>,
    ParentType,
    ContextType,
    RequireFields<QueryedgeAdditionArgs, 'id' | 'subgraphError'>
  >;
  edgeAdditions?: Resolver<
    Array<ResolversTypes['EdgeAddition']>,
    ParentType,
    ContextType,
    RequireFields<QueryedgeAdditionsArgs, 'skip' | 'first' | 'subgraphError'>
  >;
  edgeUpdate?: Resolver<
    Maybe<ResolversTypes['EdgeUpdate']>,
    ParentType,
    ContextType,
    RequireFields<QueryedgeUpdateArgs, 'id' | 'subgraphError'>
  >;
  edgeUpdates?: Resolver<
    Array<ResolversTypes['EdgeUpdate']>,
    ParentType,
    ContextType,
    RequireFields<QueryedgeUpdatesArgs, 'skip' | 'first' | 'subgraphError'>
  >;
  insertion?: Resolver<
    Maybe<ResolversTypes['Insertion']>,
    ParentType,
    ContextType,
    RequireFields<QueryinsertionArgs, 'id' | 'subgraphError'>
  >;
  insertions?: Resolver<
    Array<ResolversTypes['Insertion']>,
    ParentType,
    ContextType,
    RequireFields<QueryinsertionsArgs, 'skip' | 'first' | 'subgraphError'>
  >;
  newCommitment?: Resolver<
    Maybe<ResolversTypes['NewCommitment']>,
    ParentType,
    ContextType,
    RequireFields<QuerynewCommitmentArgs, 'id' | 'subgraphError'>
  >;
  newCommitments?: Resolver<
    Array<ResolversTypes['NewCommitment']>,
    ParentType,
    ContextType,
    RequireFields<QuerynewCommitmentsArgs, 'skip' | 'first' | 'subgraphError'>
  >;
  newNullifier?: Resolver<
    Maybe<ResolversTypes['NewNullifier']>,
    ParentType,
    ContextType,
    RequireFields<QuerynewNullifierArgs, 'id' | 'subgraphError'>
  >;
  newNullifiers?: Resolver<
    Array<ResolversTypes['NewNullifier']>,
    ParentType,
    ContextType,
    RequireFields<QuerynewNullifiersArgs, 'skip' | 'first' | 'subgraphError'>
  >;
  publicKey?: Resolver<
    Maybe<ResolversTypes['PublicKey']>,
    ParentType,
    ContextType,
    RequireFields<QuerypublicKeyArgs, 'id' | 'subgraphError'>
  >;
  publicKeys?: Resolver<
    Array<ResolversTypes['PublicKey']>,
    ParentType,
    ContextType,
    RequireFields<QuerypublicKeysArgs, 'skip' | 'first' | 'subgraphError'>
  >;
  token?: Resolver<
    Maybe<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>
  >;
  tokens?: Resolver<
    Array<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>
  >;
  externalData?: Resolver<
    Maybe<ResolversTypes['ExternalData']>,
    ParentType,
    ContextType,
    RequireFields<QueryexternalDataArgs, 'id' | 'subgraphError'>
  >;
  externalDatas?: Resolver<
    Array<ResolversTypes['ExternalData']>,
    ParentType,
    ContextType,
    RequireFields<QueryexternalDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >;
  publicInputs?: Resolver<
    Array<ResolversTypes['PublicInputs']>,
    ParentType,
    ContextType,
    RequireFields<QuerypublicInputsArgs, 'skip' | 'first' | 'subgraphError'>
  >;
  encryptions?: Resolver<
    Array<ResolversTypes['Encryptions']>,
    ParentType,
    ContextType,
    RequireFields<QueryencryptionsArgs, 'skip' | 'first' | 'subgraphError'>
  >;
  shieldedTransaction?: Resolver<
    Maybe<ResolversTypes['ShieldedTransaction']>,
    ParentType,
    ContextType,
    RequireFields<QueryshieldedTransactionArgs, 'id' | 'subgraphError'>
  >;
  shieldedTransactions?: Resolver<
    Array<ResolversTypes['ShieldedTransaction']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryshieldedTransactionsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalValueLocked?: Resolver<
    Maybe<ResolversTypes['VAnchorTotalValueLocked']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorTotalValueLockedArgs, 'id' | 'subgraphError'>
  >;
  vanchorTotalValueLockeds?: Resolver<
    Array<ResolversTypes['VAnchorTotalValueLocked']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalValueLockedsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedByToken?: Resolver<
    Maybe<ResolversTypes['VAnchorTotalValueLockedByToken']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalValueLockedByTokenArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedByTokens?: Resolver<
    Array<ResolversTypes['VAnchorTotalValueLockedByToken']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalValueLockedByTokensArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedEvery15Min?: Resolver<
    Maybe<ResolversTypes['VAnchorTotalValueLockedEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalValueLockedEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedEvery15Mins?: Resolver<
    Array<ResolversTypes['VAnchorTotalValueLockedEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalValueLockedEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedByTokenEvery15Min?: Resolver<
    Maybe<ResolversTypes['VAnchorTotalValueLockedByTokenEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalValueLockedByTokenEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedByTokenEvery15Mins?: Resolver<
    Array<ResolversTypes['VAnchorTotalValueLockedByTokenEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalValueLockedByTokenEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedEveryDay?: Resolver<
    Maybe<ResolversTypes['VAnchorTotalValueLockedEveryDay']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalValueLockedEveryDayArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedEveryDays?: Resolver<
    Array<ResolversTypes['VAnchorTotalValueLockedEveryDay']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalValueLockedEveryDaysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedByTokenEveryDay?: Resolver<
    Maybe<ResolversTypes['VAnchorTotalValueLockedByTokenEveryDay']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalValueLockedByTokenEveryDayArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedByTokenEveryDays?: Resolver<
    Array<ResolversTypes['VAnchorTotalValueLockedByTokenEveryDay']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalValueLockedByTokenEveryDaysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalRelayerFee?: Resolver<
    Maybe<ResolversTypes['VAnchorTotalRelayerFee']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorTotalRelayerFeeArgs, 'id' | 'subgraphError'>
  >;
  vanchorTotalRelayerFees?: Resolver<
    Array<ResolversTypes['VAnchorTotalRelayerFee']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalRelayerFeesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalRelayerFeeByToken?: Resolver<
    Maybe<ResolversTypes['VAnchorTotalRelayerFeeByToken']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalRelayerFeeByTokenArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalRelayerFeeByTokens?: Resolver<
    Array<ResolversTypes['VAnchorTotalRelayerFeeByToken']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalRelayerFeeByTokensArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalRelayerFee15Min?: Resolver<
    Maybe<ResolversTypes['VAnchorTotalRelayerFee15Min']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorTotalRelayerFee15MinArgs, 'id' | 'subgraphError'>
  >;
  vanchorTotalRelayerFee15Mins?: Resolver<
    Array<ResolversTypes['VAnchorTotalRelayerFee15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalRelayerFee15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalRelayerFeeByTokenEvery15Min?: Resolver<
    Maybe<ResolversTypes['VAnchorTotalRelayerFeeByTokenEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalRelayerFeeByTokenEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalRelayerFeeByTokenEvery15Mins?: Resolver<
    Array<ResolversTypes['VAnchorTotalRelayerFeeByTokenEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalRelayerFeeByTokenEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalWrappingFee?: Resolver<
    Maybe<ResolversTypes['VAnchorTotalWrappingFee']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorTotalWrappingFeeArgs, 'id' | 'subgraphError'>
  >;
  vanchorTotalWrappingFees?: Resolver<
    Array<ResolversTypes['VAnchorTotalWrappingFee']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalWrappingFeesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalWrappingFeeByToken?: Resolver<
    Maybe<ResolversTypes['VAnchorTotalWrappingFeeByToken']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalWrappingFeeByTokenArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalWrappingFeeByTokens?: Resolver<
    Array<ResolversTypes['VAnchorTotalWrappingFeeByToken']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalWrappingFeeByTokensArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalWrappingFee15Min?: Resolver<
    Maybe<ResolversTypes['VAnchorTotalWrappingFee15Min']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorTotalWrappingFee15MinArgs, 'id' | 'subgraphError'>
  >;
  vanchorTotalWrappingFee15Mins?: Resolver<
    Array<ResolversTypes['VAnchorTotalWrappingFee15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalWrappingFee15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalWrappingFeeByTokenEvery15Min?: Resolver<
    Maybe<ResolversTypes['VAnchorTotalWrappingFeeByTokenEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalWrappingFeeByTokenEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalWrappingFeeByTokenEvery15Mins?: Resolver<
    Array<ResolversTypes['VAnchorTotalWrappingFeeByTokenEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTotalWrappingFeeByTokenEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  wrappingEventLog?: Resolver<
    Maybe<ResolversTypes['WrappingEventLog']>,
    ParentType,
    ContextType,
    RequireFields<QuerywrappingEventLogArgs, 'id' | 'subgraphError'>
  >;
  wrappingEventLogs?: Resolver<
    Array<ResolversTypes['WrappingEventLog']>,
    ParentType,
    ContextType,
    RequireFields<
      QuerywrappingEventLogsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  unwrappingEventLog?: Resolver<
    Maybe<ResolversTypes['UnwrappingEventLog']>,
    ParentType,
    ContextType,
    RequireFields<QueryunwrappingEventLogArgs, 'id' | 'subgraphError'>
  >;
  unwrappingEventLogs?: Resolver<
    Array<ResolversTypes['UnwrappingEventLog']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryunwrappingEventLogsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorWithdrawalLog?: Resolver<
    Maybe<ResolversTypes['VAnchorWithdrawalLog']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorWithdrawalLogArgs, 'id' | 'subgraphError'>
  >;
  vanchorWithdrawalLogs?: Resolver<
    Array<ResolversTypes['VAnchorWithdrawalLog']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorWithdrawalLogsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorWithdrawal?: Resolver<
    Maybe<ResolversTypes['VAnchorWithdrawal']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorWithdrawalArgs, 'id' | 'subgraphError'>
  >;
  vanchorWithdrawals?: Resolver<
    Array<ResolversTypes['VAnchorWithdrawal']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorWithdrawalsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorWithdrawalByToken?: Resolver<
    Maybe<ResolversTypes['VAnchorWithdrawalByToken']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorWithdrawalByTokenArgs, 'id' | 'subgraphError'>
  >;
  vanchorWithdrawalByTokens?: Resolver<
    Array<ResolversTypes['VAnchorWithdrawalByToken']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorWithdrawalByTokensArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorWithdrawalEvery15Min?: Resolver<
    Maybe<ResolversTypes['VAnchorWithdrawalEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorWithdrawalEvery15MinArgs, 'id' | 'subgraphError'>
  >;
  vanchorWithdrawalEvery15Mins?: Resolver<
    Array<ResolversTypes['VAnchorWithdrawalEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorWithdrawalEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorWithdrawalByTokenEvery15Min?: Resolver<
    Maybe<ResolversTypes['VAnchorWithdrawalByTokenEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorWithdrawalByTokenEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorWithdrawalByTokenEvery15Mins?: Resolver<
    Array<ResolversTypes['VAnchorWithdrawalByTokenEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorWithdrawalByTokenEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorWithdrawalEveryDay?: Resolver<
    Maybe<ResolversTypes['VAnchorWithdrawalEveryDay']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorWithdrawalEveryDayArgs, 'id' | 'subgraphError'>
  >;
  vanchorWithdrawalEveryDays?: Resolver<
    Array<ResolversTypes['VAnchorWithdrawalEveryDay']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorWithdrawalEveryDaysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorWithdrawalByTokenEveryDay?: Resolver<
    Maybe<ResolversTypes['VAnchorWithdrawalByTokenEveryDay']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorWithdrawalByTokenEveryDayArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorWithdrawalByTokenEveryDays?: Resolver<
    Array<ResolversTypes['VAnchorWithdrawalByTokenEveryDay']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorWithdrawalByTokenEveryDaysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorDeposit?: Resolver<
    Maybe<ResolversTypes['VAnchorDeposit']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorDepositArgs, 'id' | 'subgraphError'>
  >;
  vanchorDeposits?: Resolver<
    Array<ResolversTypes['VAnchorDeposit']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorDepositsArgs, 'skip' | 'first' | 'subgraphError'>
  >;
  vanchorDepositByToken?: Resolver<
    Maybe<ResolversTypes['VAnchorDepositByToken']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorDepositByTokenArgs, 'id' | 'subgraphError'>
  >;
  vanchorDepositByTokens?: Resolver<
    Array<ResolversTypes['VAnchorDepositByToken']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorDepositByTokensArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorDepositEvery15Min?: Resolver<
    Maybe<ResolversTypes['VAnchorDepositEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorDepositEvery15MinArgs, 'id' | 'subgraphError'>
  >;
  vanchorDepositEvery15Mins?: Resolver<
    Array<ResolversTypes['VAnchorDepositEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorDepositEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorDepositByTokenEvery15Min?: Resolver<
    Maybe<ResolversTypes['VAnchorDepositByTokenEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorDepositByTokenEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorDepositByTokenEvery15Mins?: Resolver<
    Array<ResolversTypes['VAnchorDepositByTokenEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorDepositByTokenEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorDepositEveryDay?: Resolver<
    Maybe<ResolversTypes['VAnchorDepositEveryDay']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorDepositEveryDayArgs, 'id' | 'subgraphError'>
  >;
  vanchorDepositEveryDays?: Resolver<
    Array<ResolversTypes['VAnchorDepositEveryDay']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorDepositEveryDaysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorDepositByTokenEveryDay?: Resolver<
    Maybe<ResolversTypes['VAnchorDepositByTokenEveryDay']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorDepositByTokenEveryDayArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorDepositByTokenEveryDays?: Resolver<
    Array<ResolversTypes['VAnchorDepositByTokenEveryDay']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorDepositByTokenEveryDaysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorDepositLog?: Resolver<
    Maybe<ResolversTypes['VAnchorDepositLog']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorDepositLogArgs, 'id' | 'subgraphError'>
  >;
  vanchorDepositLogs?: Resolver<
    Array<ResolversTypes['VAnchorDepositLog']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorDepositLogsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTransferLog?: Resolver<
    Maybe<ResolversTypes['VAnchorTransferLog']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorTransferLogArgs, 'id' | 'subgraphError'>
  >;
  vanchorTransferLogs?: Resolver<
    Array<ResolversTypes['VAnchorTransferLog']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorTransferLogsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorVolume?: Resolver<
    Maybe<ResolversTypes['VAnchorVolume']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorVolumeArgs, 'id' | 'subgraphError'>
  >;
  vanchorVolumes?: Resolver<
    Array<ResolversTypes['VAnchorVolume']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorVolumesArgs, 'skip' | 'first' | 'subgraphError'>
  >;
  vanchorVolumeByToken?: Resolver<
    Maybe<ResolversTypes['VAnchorVolumeByToken']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorVolumeByTokenArgs, 'id' | 'subgraphError'>
  >;
  vanchorVolumeByTokens?: Resolver<
    Array<ResolversTypes['VAnchorVolumeByToken']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorVolumeByTokensArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorVolumeEvery15Min?: Resolver<
    Maybe<ResolversTypes['VAnchorVolumeEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorVolumeEvery15MinArgs, 'id' | 'subgraphError'>
  >;
  vanchorVolumeEvery15Mins?: Resolver<
    Array<ResolversTypes['VAnchorVolumeEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorVolumeEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorVolumeByTokenEvery15Min?: Resolver<
    Maybe<ResolversTypes['VAnchorVolumeByTokenEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorVolumeByTokenEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorVolumeByTokenEvery15Mins?: Resolver<
    Array<ResolversTypes['VAnchorVolumeByTokenEvery15Min']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorVolumeByTokenEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorVolumeEveryDay?: Resolver<
    Maybe<ResolversTypes['VAnchorVolumeEveryDay']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorVolumeEveryDayArgs, 'id' | 'subgraphError'>
  >;
  vanchorVolumeEveryDays?: Resolver<
    Array<ResolversTypes['VAnchorVolumeEveryDay']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorVolumeEveryDaysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorVolumeByTokenEveryDay?: Resolver<
    Maybe<ResolversTypes['VAnchorVolumeByTokenEveryDay']>,
    ParentType,
    ContextType,
    RequireFields<QueryvanchorVolumeByTokenEveryDayArgs, 'id' | 'subgraphError'>
  >;
  vanchorVolumeByTokenEveryDays?: Resolver<
    Array<ResolversTypes['VAnchorVolumeByTokenEveryDay']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryvanchorVolumeByTokenEveryDaysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  _meta?: Resolver<
    Maybe<ResolversTypes['_Meta_']>,
    ParentType,
    ContextType,
    Partial<Query_metaArgs>
  >;
}>;

export type SubscriptionResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = ResolversObject<{
  edgeAddition?: SubscriptionResolver<
    Maybe<ResolversTypes['EdgeAddition']>,
    'edgeAddition',
    ParentType,
    ContextType,
    RequireFields<SubscriptionedgeAdditionArgs, 'id' | 'subgraphError'>
  >;
  edgeAdditions?: SubscriptionResolver<
    Array<ResolversTypes['EdgeAddition']>,
    'edgeAdditions',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionedgeAdditionsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  edgeUpdate?: SubscriptionResolver<
    Maybe<ResolversTypes['EdgeUpdate']>,
    'edgeUpdate',
    ParentType,
    ContextType,
    RequireFields<SubscriptionedgeUpdateArgs, 'id' | 'subgraphError'>
  >;
  edgeUpdates?: SubscriptionResolver<
    Array<ResolversTypes['EdgeUpdate']>,
    'edgeUpdates',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionedgeUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  insertion?: SubscriptionResolver<
    Maybe<ResolversTypes['Insertion']>,
    'insertion',
    ParentType,
    ContextType,
    RequireFields<SubscriptioninsertionArgs, 'id' | 'subgraphError'>
  >;
  insertions?: SubscriptionResolver<
    Array<ResolversTypes['Insertion']>,
    'insertions',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptioninsertionsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  newCommitment?: SubscriptionResolver<
    Maybe<ResolversTypes['NewCommitment']>,
    'newCommitment',
    ParentType,
    ContextType,
    RequireFields<SubscriptionnewCommitmentArgs, 'id' | 'subgraphError'>
  >;
  newCommitments?: SubscriptionResolver<
    Array<ResolversTypes['NewCommitment']>,
    'newCommitments',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionnewCommitmentsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  newNullifier?: SubscriptionResolver<
    Maybe<ResolversTypes['NewNullifier']>,
    'newNullifier',
    ParentType,
    ContextType,
    RequireFields<SubscriptionnewNullifierArgs, 'id' | 'subgraphError'>
  >;
  newNullifiers?: SubscriptionResolver<
    Array<ResolversTypes['NewNullifier']>,
    'newNullifiers',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionnewNullifiersArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  publicKey?: SubscriptionResolver<
    Maybe<ResolversTypes['PublicKey']>,
    'publicKey',
    ParentType,
    ContextType,
    RequireFields<SubscriptionpublicKeyArgs, 'id' | 'subgraphError'>
  >;
  publicKeys?: SubscriptionResolver<
    Array<ResolversTypes['PublicKey']>,
    'publicKeys',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionpublicKeysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  token?: SubscriptionResolver<
    Maybe<ResolversTypes['Token']>,
    'token',
    ParentType,
    ContextType,
    RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>
  >;
  tokens?: SubscriptionResolver<
    Array<ResolversTypes['Token']>,
    'tokens',
    ParentType,
    ContextType,
    RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>
  >;
  externalData?: SubscriptionResolver<
    Maybe<ResolversTypes['ExternalData']>,
    'externalData',
    ParentType,
    ContextType,
    RequireFields<SubscriptionexternalDataArgs, 'id' | 'subgraphError'>
  >;
  externalDatas?: SubscriptionResolver<
    Array<ResolversTypes['ExternalData']>,
    'externalDatas',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionexternalDatasArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  publicInputs?: SubscriptionResolver<
    Array<ResolversTypes['PublicInputs']>,
    'publicInputs',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionpublicInputsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  encryptions?: SubscriptionResolver<
    Array<ResolversTypes['Encryptions']>,
    'encryptions',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionencryptionsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  shieldedTransaction?: SubscriptionResolver<
    Maybe<ResolversTypes['ShieldedTransaction']>,
    'shieldedTransaction',
    ParentType,
    ContextType,
    RequireFields<SubscriptionshieldedTransactionArgs, 'id' | 'subgraphError'>
  >;
  shieldedTransactions?: SubscriptionResolver<
    Array<ResolversTypes['ShieldedTransaction']>,
    'shieldedTransactions',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionshieldedTransactionsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalValueLocked?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorTotalValueLocked']>,
    'vanchorTotalValueLocked',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalValueLockedArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockeds?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorTotalValueLocked']>,
    'vanchorTotalValueLockeds',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalValueLockedsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedByToken?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorTotalValueLockedByToken']>,
    'vanchorTotalValueLockedByToken',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalValueLockedByTokenArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedByTokens?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorTotalValueLockedByToken']>,
    'vanchorTotalValueLockedByTokens',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalValueLockedByTokensArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedEvery15Min?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorTotalValueLockedEvery15Min']>,
    'vanchorTotalValueLockedEvery15Min',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalValueLockedEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedEvery15Mins?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorTotalValueLockedEvery15Min']>,
    'vanchorTotalValueLockedEvery15Mins',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalValueLockedEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedByTokenEvery15Min?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorTotalValueLockedByTokenEvery15Min']>,
    'vanchorTotalValueLockedByTokenEvery15Min',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalValueLockedByTokenEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedByTokenEvery15Mins?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorTotalValueLockedByTokenEvery15Min']>,
    'vanchorTotalValueLockedByTokenEvery15Mins',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalValueLockedByTokenEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedEveryDay?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorTotalValueLockedEveryDay']>,
    'vanchorTotalValueLockedEveryDay',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalValueLockedEveryDayArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedEveryDays?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorTotalValueLockedEveryDay']>,
    'vanchorTotalValueLockedEveryDays',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalValueLockedEveryDaysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedByTokenEveryDay?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorTotalValueLockedByTokenEveryDay']>,
    'vanchorTotalValueLockedByTokenEveryDay',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalValueLockedByTokenEveryDayArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalValueLockedByTokenEveryDays?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorTotalValueLockedByTokenEveryDay']>,
    'vanchorTotalValueLockedByTokenEveryDays',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalValueLockedByTokenEveryDaysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalRelayerFee?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorTotalRelayerFee']>,
    'vanchorTotalRelayerFee',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalRelayerFeeArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalRelayerFees?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorTotalRelayerFee']>,
    'vanchorTotalRelayerFees',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalRelayerFeesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalRelayerFeeByToken?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorTotalRelayerFeeByToken']>,
    'vanchorTotalRelayerFeeByToken',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalRelayerFeeByTokenArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalRelayerFeeByTokens?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorTotalRelayerFeeByToken']>,
    'vanchorTotalRelayerFeeByTokens',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalRelayerFeeByTokensArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalRelayerFee15Min?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorTotalRelayerFee15Min']>,
    'vanchorTotalRelayerFee15Min',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalRelayerFee15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalRelayerFee15Mins?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorTotalRelayerFee15Min']>,
    'vanchorTotalRelayerFee15Mins',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalRelayerFee15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalRelayerFeeByTokenEvery15Min?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorTotalRelayerFeeByTokenEvery15Min']>,
    'vanchorTotalRelayerFeeByTokenEvery15Min',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalRelayerFeeByTokenEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalRelayerFeeByTokenEvery15Mins?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorTotalRelayerFeeByTokenEvery15Min']>,
    'vanchorTotalRelayerFeeByTokenEvery15Mins',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalRelayerFeeByTokenEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalWrappingFee?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorTotalWrappingFee']>,
    'vanchorTotalWrappingFee',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalWrappingFeeArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalWrappingFees?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorTotalWrappingFee']>,
    'vanchorTotalWrappingFees',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalWrappingFeesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalWrappingFeeByToken?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorTotalWrappingFeeByToken']>,
    'vanchorTotalWrappingFeeByToken',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalWrappingFeeByTokenArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalWrappingFeeByTokens?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorTotalWrappingFeeByToken']>,
    'vanchorTotalWrappingFeeByTokens',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalWrappingFeeByTokensArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalWrappingFee15Min?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorTotalWrappingFee15Min']>,
    'vanchorTotalWrappingFee15Min',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalWrappingFee15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalWrappingFee15Mins?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorTotalWrappingFee15Min']>,
    'vanchorTotalWrappingFee15Mins',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalWrappingFee15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTotalWrappingFeeByTokenEvery15Min?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorTotalWrappingFeeByTokenEvery15Min']>,
    'vanchorTotalWrappingFeeByTokenEvery15Min',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalWrappingFeeByTokenEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorTotalWrappingFeeByTokenEvery15Mins?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorTotalWrappingFeeByTokenEvery15Min']>,
    'vanchorTotalWrappingFeeByTokenEvery15Mins',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTotalWrappingFeeByTokenEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  wrappingEventLog?: SubscriptionResolver<
    Maybe<ResolversTypes['WrappingEventLog']>,
    'wrappingEventLog',
    ParentType,
    ContextType,
    RequireFields<SubscriptionwrappingEventLogArgs, 'id' | 'subgraphError'>
  >;
  wrappingEventLogs?: SubscriptionResolver<
    Array<ResolversTypes['WrappingEventLog']>,
    'wrappingEventLogs',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionwrappingEventLogsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  unwrappingEventLog?: SubscriptionResolver<
    Maybe<ResolversTypes['UnwrappingEventLog']>,
    'unwrappingEventLog',
    ParentType,
    ContextType,
    RequireFields<SubscriptionunwrappingEventLogArgs, 'id' | 'subgraphError'>
  >;
  unwrappingEventLogs?: SubscriptionResolver<
    Array<ResolversTypes['UnwrappingEventLog']>,
    'unwrappingEventLogs',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionunwrappingEventLogsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorWithdrawalLog?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorWithdrawalLog']>,
    'vanchorWithdrawalLog',
    ParentType,
    ContextType,
    RequireFields<SubscriptionvanchorWithdrawalLogArgs, 'id' | 'subgraphError'>
  >;
  vanchorWithdrawalLogs?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorWithdrawalLog']>,
    'vanchorWithdrawalLogs',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorWithdrawalLogsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorWithdrawal?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorWithdrawal']>,
    'vanchorWithdrawal',
    ParentType,
    ContextType,
    RequireFields<SubscriptionvanchorWithdrawalArgs, 'id' | 'subgraphError'>
  >;
  vanchorWithdrawals?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorWithdrawal']>,
    'vanchorWithdrawals',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorWithdrawalsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorWithdrawalByToken?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorWithdrawalByToken']>,
    'vanchorWithdrawalByToken',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorWithdrawalByTokenArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorWithdrawalByTokens?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorWithdrawalByToken']>,
    'vanchorWithdrawalByTokens',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorWithdrawalByTokensArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorWithdrawalEvery15Min?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorWithdrawalEvery15Min']>,
    'vanchorWithdrawalEvery15Min',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorWithdrawalEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorWithdrawalEvery15Mins?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorWithdrawalEvery15Min']>,
    'vanchorWithdrawalEvery15Mins',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorWithdrawalEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorWithdrawalByTokenEvery15Min?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorWithdrawalByTokenEvery15Min']>,
    'vanchorWithdrawalByTokenEvery15Min',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorWithdrawalByTokenEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorWithdrawalByTokenEvery15Mins?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorWithdrawalByTokenEvery15Min']>,
    'vanchorWithdrawalByTokenEvery15Mins',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorWithdrawalByTokenEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorWithdrawalEveryDay?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorWithdrawalEveryDay']>,
    'vanchorWithdrawalEveryDay',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorWithdrawalEveryDayArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorWithdrawalEveryDays?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorWithdrawalEveryDay']>,
    'vanchorWithdrawalEveryDays',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorWithdrawalEveryDaysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorWithdrawalByTokenEveryDay?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorWithdrawalByTokenEveryDay']>,
    'vanchorWithdrawalByTokenEveryDay',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorWithdrawalByTokenEveryDayArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorWithdrawalByTokenEveryDays?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorWithdrawalByTokenEveryDay']>,
    'vanchorWithdrawalByTokenEveryDays',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorWithdrawalByTokenEveryDaysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorDeposit?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorDeposit']>,
    'vanchorDeposit',
    ParentType,
    ContextType,
    RequireFields<SubscriptionvanchorDepositArgs, 'id' | 'subgraphError'>
  >;
  vanchorDeposits?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorDeposit']>,
    'vanchorDeposits',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorDepositsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorDepositByToken?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorDepositByToken']>,
    'vanchorDepositByToken',
    ParentType,
    ContextType,
    RequireFields<SubscriptionvanchorDepositByTokenArgs, 'id' | 'subgraphError'>
  >;
  vanchorDepositByTokens?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorDepositByToken']>,
    'vanchorDepositByTokens',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorDepositByTokensArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorDepositEvery15Min?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorDepositEvery15Min']>,
    'vanchorDepositEvery15Min',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorDepositEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorDepositEvery15Mins?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorDepositEvery15Min']>,
    'vanchorDepositEvery15Mins',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorDepositEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorDepositByTokenEvery15Min?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorDepositByTokenEvery15Min']>,
    'vanchorDepositByTokenEvery15Min',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorDepositByTokenEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorDepositByTokenEvery15Mins?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorDepositByTokenEvery15Min']>,
    'vanchorDepositByTokenEvery15Mins',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorDepositByTokenEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorDepositEveryDay?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorDepositEveryDay']>,
    'vanchorDepositEveryDay',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorDepositEveryDayArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorDepositEveryDays?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorDepositEveryDay']>,
    'vanchorDepositEveryDays',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorDepositEveryDaysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorDepositByTokenEveryDay?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorDepositByTokenEveryDay']>,
    'vanchorDepositByTokenEveryDay',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorDepositByTokenEveryDayArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorDepositByTokenEveryDays?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorDepositByTokenEveryDay']>,
    'vanchorDepositByTokenEveryDays',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorDepositByTokenEveryDaysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorDepositLog?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorDepositLog']>,
    'vanchorDepositLog',
    ParentType,
    ContextType,
    RequireFields<SubscriptionvanchorDepositLogArgs, 'id' | 'subgraphError'>
  >;
  vanchorDepositLogs?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorDepositLog']>,
    'vanchorDepositLogs',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorDepositLogsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorTransferLog?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorTransferLog']>,
    'vanchorTransferLog',
    ParentType,
    ContextType,
    RequireFields<SubscriptionvanchorTransferLogArgs, 'id' | 'subgraphError'>
  >;
  vanchorTransferLogs?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorTransferLog']>,
    'vanchorTransferLogs',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorTransferLogsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorVolume?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorVolume']>,
    'vanchorVolume',
    ParentType,
    ContextType,
    RequireFields<SubscriptionvanchorVolumeArgs, 'id' | 'subgraphError'>
  >;
  vanchorVolumes?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorVolume']>,
    'vanchorVolumes',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorVolumesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorVolumeByToken?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorVolumeByToken']>,
    'vanchorVolumeByToken',
    ParentType,
    ContextType,
    RequireFields<SubscriptionvanchorVolumeByTokenArgs, 'id' | 'subgraphError'>
  >;
  vanchorVolumeByTokens?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorVolumeByToken']>,
    'vanchorVolumeByTokens',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorVolumeByTokensArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorVolumeEvery15Min?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorVolumeEvery15Min']>,
    'vanchorVolumeEvery15Min',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorVolumeEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorVolumeEvery15Mins?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorVolumeEvery15Min']>,
    'vanchorVolumeEvery15Mins',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorVolumeEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorVolumeByTokenEvery15Min?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorVolumeByTokenEvery15Min']>,
    'vanchorVolumeByTokenEvery15Min',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorVolumeByTokenEvery15MinArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorVolumeByTokenEvery15Mins?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorVolumeByTokenEvery15Min']>,
    'vanchorVolumeByTokenEvery15Mins',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorVolumeByTokenEvery15MinsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorVolumeEveryDay?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorVolumeEveryDay']>,
    'vanchorVolumeEveryDay',
    ParentType,
    ContextType,
    RequireFields<SubscriptionvanchorVolumeEveryDayArgs, 'id' | 'subgraphError'>
  >;
  vanchorVolumeEveryDays?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorVolumeEveryDay']>,
    'vanchorVolumeEveryDays',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorVolumeEveryDaysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  vanchorVolumeByTokenEveryDay?: SubscriptionResolver<
    Maybe<ResolversTypes['VAnchorVolumeByTokenEveryDay']>,
    'vanchorVolumeByTokenEveryDay',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorVolumeByTokenEveryDayArgs,
      'id' | 'subgraphError'
    >
  >;
  vanchorVolumeByTokenEveryDays?: SubscriptionResolver<
    Array<ResolversTypes['VAnchorVolumeByTokenEveryDay']>,
    'vanchorVolumeByTokenEveryDays',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionvanchorVolumeByTokenEveryDaysArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >;
  _meta?: SubscriptionResolver<
    Maybe<ResolversTypes['_Meta_']>,
    '_meta',
    ParentType,
    ContextType,
    Partial<Subscription_metaArgs>
  >;
}>;

export interface BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type EdgeAdditionResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['EdgeAddition'] = ResolversParentTypes['EdgeAddition']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  chainID?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  latestLeafIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  merkleRoot?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EdgeUpdateResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['EdgeUpdate'] = ResolversParentTypes['EdgeUpdate']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  chainID?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  latestLeafIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  merkleRoot?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EncryptionsResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['Encryptions'] = ResolversParentTypes['Encryptions']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  encryptedOutput1?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  encryptedOutput2?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExternalDataResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['ExternalData'] = ResolversParentTypes['ExternalData']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  extAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  relayer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  refund?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InsertionResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['Insertion'] = ResolversParentTypes['Insertion']
> = ResolversObject<{
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

export type NewCommitmentResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['NewCommitment'] = ResolversParentTypes['NewCommitment']
> = ResolversObject<{
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

export type NewNullifierResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['NewNullifier'] = ResolversParentTypes['NewNullifier']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  nullifier?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicInputsResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['PublicInputs'] = ResolversParentTypes['PublicInputs']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  roots?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  extensionRoots?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  inputNullifiers?: Resolver<
    Array<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >;
  outputCommitments?: Resolver<
    Array<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >;
  publicAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  extDataHash?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicKeyResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['PublicKey'] = ResolversParentTypes['PublicKey']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShieldedTransactionResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['ShieldedTransaction'] = ResolversParentTypes['ShieldedTransaction']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  vanchor?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  proof?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  auxPublicInputs?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  externalData?: Resolver<
    ResolversTypes['ExternalData'],
    ParentType,
    ContextType
  >;
  publicInputs?: Resolver<
    ResolversTypes['PublicInputs'],
    ParentType,
    ContextType
  >;
  encryptions?: Resolver<
    ResolversTypes['Encryptions'],
    ParentType,
    ContextType
  >;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  subgraphUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UnwrappingEventLogResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['UnwrappingEventLog'] = ResolversParentTypes['UnwrappingEventLog']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorDepositResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorDeposit'] = ResolversParentTypes['VAnchorDeposit']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  averageDeposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorDepositByTokenResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorDepositByToken'] = ResolversParentTypes['VAnchorDepositByToken']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  averageDeposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorDepositByTokenEvery15MinResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorDepositByTokenEvery15Min'] = ResolversParentTypes['VAnchorDepositByTokenEvery15Min']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  averageDeposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorDepositByTokenEveryDayResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorDepositByTokenEveryDay'] = ResolversParentTypes['VAnchorDepositByTokenEveryDay']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  averageDeposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorDepositEvery15MinResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorDepositEvery15Min'] = ResolversParentTypes['VAnchorDepositEvery15Min']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  averageDeposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorDepositEveryDayResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorDepositEveryDay'] = ResolversParentTypes['VAnchorDepositEveryDay']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  averageDeposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorDepositLogResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorDepositLog'] = ResolversParentTypes['VAnchorDepositLog']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorTotalRelayerFeeResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorTotalRelayerFee'] = ResolversParentTypes['VAnchorTotalRelayerFee']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorTotalRelayerFee15MinResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorTotalRelayerFee15Min'] = ResolversParentTypes['VAnchorTotalRelayerFee15Min']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorTotalRelayerFeeByTokenResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorTotalRelayerFeeByToken'] = ResolversParentTypes['VAnchorTotalRelayerFeeByToken']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  fees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorTotalRelayerFeeByTokenEvery15MinResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorTotalRelayerFeeByTokenEvery15Min'] = ResolversParentTypes['VAnchorTotalRelayerFeeByTokenEvery15Min']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorTotalValueLockedResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorTotalValueLocked'] = ResolversParentTypes['VAnchorTotalValueLocked']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalValueLocked?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorTotalValueLockedByTokenResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorTotalValueLockedByToken'] = ResolversParentTypes['VAnchorTotalValueLockedByToken']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalValueLocked?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorTotalValueLockedByTokenEvery15MinResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorTotalValueLockedByTokenEvery15Min'] = ResolversParentTypes['VAnchorTotalValueLockedByTokenEvery15Min']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLocked?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorTotalValueLockedByTokenEveryDayResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorTotalValueLockedByTokenEveryDay'] = ResolversParentTypes['VAnchorTotalValueLockedByTokenEveryDay']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLocked?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorTotalValueLockedEvery15MinResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorTotalValueLockedEvery15Min'] = ResolversParentTypes['VAnchorTotalValueLockedEvery15Min']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLocked?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorTotalValueLockedEveryDayResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorTotalValueLockedEveryDay'] = ResolversParentTypes['VAnchorTotalValueLockedEveryDay']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLocked?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorTotalWrappingFeeResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorTotalWrappingFee'] = ResolversParentTypes['VAnchorTotalWrappingFee']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorTotalWrappingFee15MinResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorTotalWrappingFee15Min'] = ResolversParentTypes['VAnchorTotalWrappingFee15Min']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorTotalWrappingFeeByTokenResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorTotalWrappingFeeByToken'] = ResolversParentTypes['VAnchorTotalWrappingFeeByToken']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  fees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorTotalWrappingFeeByTokenEvery15MinResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorTotalWrappingFeeByTokenEvery15Min'] = ResolversParentTypes['VAnchorTotalWrappingFeeByTokenEvery15Min']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorTransferLogResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorTransferLog'] = ResolversParentTypes['VAnchorTransferLog']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorVolumeResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorVolume'] = ResolversParentTypes['VAnchorVolume']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorVolumeByTokenResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorVolumeByToken'] = ResolversParentTypes['VAnchorVolumeByToken']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorVolumeByTokenEvery15MinResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorVolumeByTokenEvery15Min'] = ResolversParentTypes['VAnchorVolumeByTokenEvery15Min']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorVolumeByTokenEveryDayResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorVolumeByTokenEveryDay'] = ResolversParentTypes['VAnchorVolumeByTokenEveryDay']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorVolumeEvery15MinResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorVolumeEvery15Min'] = ResolversParentTypes['VAnchorVolumeEvery15Min']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorVolumeEveryDayResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorVolumeEveryDay'] = ResolversParentTypes['VAnchorVolumeEveryDay']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorWithdrawalResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorWithdrawal'] = ResolversParentTypes['VAnchorWithdrawal']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  withdrawal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  averageWithdrawal?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorWithdrawalByTokenResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorWithdrawalByToken'] = ResolversParentTypes['VAnchorWithdrawalByToken']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  withdrawal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  averageWithdrawal?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorWithdrawalByTokenEvery15MinResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorWithdrawalByTokenEvery15Min'] = ResolversParentTypes['VAnchorWithdrawalByTokenEvery15Min']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  withdrawal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  averageWithdrawal?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorWithdrawalByTokenEveryDayResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorWithdrawalByTokenEveryDay'] = ResolversParentTypes['VAnchorWithdrawalByTokenEveryDay']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  withdrawal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  averageWithdrawal?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorWithdrawalEvery15MinResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorWithdrawalEvery15Min'] = ResolversParentTypes['VAnchorWithdrawalEvery15Min']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  withdrawal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  averageWithdrawal?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorWithdrawalEveryDayResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorWithdrawalEveryDay'] = ResolversParentTypes['VAnchorWithdrawalEveryDay']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  startInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endInterval?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  withdrawal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  averageWithdrawal?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >;
  totalCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VAnchorWithdrawalLogResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['VAnchorWithdrawalLog'] = ResolversParentTypes['VAnchorWithdrawalLog']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  withdrawal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  vAnchorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WrappingEventLogResolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['WrappingEventLog'] = ResolversParentTypes['WrappingEventLog']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  wrappingFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  afterFeeAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<
  ContextType = MeshContext & { subgraphUrl: string },
  ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']
> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext & { subgraphUrl: string }> =
  ResolversObject<{
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
    UnwrappingEventLog?: UnwrappingEventLogResolvers<ContextType>;
    VAnchorDeposit?: VAnchorDepositResolvers<ContextType>;
    VAnchorDepositByToken?: VAnchorDepositByTokenResolvers<ContextType>;
    VAnchorDepositByTokenEvery15Min?: VAnchorDepositByTokenEvery15MinResolvers<ContextType>;
    VAnchorDepositByTokenEveryDay?: VAnchorDepositByTokenEveryDayResolvers<ContextType>;
    VAnchorDepositEvery15Min?: VAnchorDepositEvery15MinResolvers<ContextType>;
    VAnchorDepositEveryDay?: VAnchorDepositEveryDayResolvers<ContextType>;
    VAnchorDepositLog?: VAnchorDepositLogResolvers<ContextType>;
    VAnchorTotalRelayerFee?: VAnchorTotalRelayerFeeResolvers<ContextType>;
    VAnchorTotalRelayerFee15Min?: VAnchorTotalRelayerFee15MinResolvers<ContextType>;
    VAnchorTotalRelayerFeeByToken?: VAnchorTotalRelayerFeeByTokenResolvers<ContextType>;
    VAnchorTotalRelayerFeeByTokenEvery15Min?: VAnchorTotalRelayerFeeByTokenEvery15MinResolvers<ContextType>;
    VAnchorTotalValueLocked?: VAnchorTotalValueLockedResolvers<ContextType>;
    VAnchorTotalValueLockedByToken?: VAnchorTotalValueLockedByTokenResolvers<ContextType>;
    VAnchorTotalValueLockedByTokenEvery15Min?: VAnchorTotalValueLockedByTokenEvery15MinResolvers<ContextType>;
    VAnchorTotalValueLockedByTokenEveryDay?: VAnchorTotalValueLockedByTokenEveryDayResolvers<ContextType>;
    VAnchorTotalValueLockedEvery15Min?: VAnchorTotalValueLockedEvery15MinResolvers<ContextType>;
    VAnchorTotalValueLockedEveryDay?: VAnchorTotalValueLockedEveryDayResolvers<ContextType>;
    VAnchorTotalWrappingFee?: VAnchorTotalWrappingFeeResolvers<ContextType>;
    VAnchorTotalWrappingFee15Min?: VAnchorTotalWrappingFee15MinResolvers<ContextType>;
    VAnchorTotalWrappingFeeByToken?: VAnchorTotalWrappingFeeByTokenResolvers<ContextType>;
    VAnchorTotalWrappingFeeByTokenEvery15Min?: VAnchorTotalWrappingFeeByTokenEvery15MinResolvers<ContextType>;
    VAnchorTransferLog?: VAnchorTransferLogResolvers<ContextType>;
    VAnchorVolume?: VAnchorVolumeResolvers<ContextType>;
    VAnchorVolumeByToken?: VAnchorVolumeByTokenResolvers<ContextType>;
    VAnchorVolumeByTokenEvery15Min?: VAnchorVolumeByTokenEvery15MinResolvers<ContextType>;
    VAnchorVolumeByTokenEveryDay?: VAnchorVolumeByTokenEveryDayResolvers<ContextType>;
    VAnchorVolumeEvery15Min?: VAnchorVolumeEvery15MinResolvers<ContextType>;
    VAnchorVolumeEveryDay?: VAnchorVolumeEveryDayResolvers<ContextType>;
    VAnchorWithdrawal?: VAnchorWithdrawalResolvers<ContextType>;
    VAnchorWithdrawalByToken?: VAnchorWithdrawalByTokenResolvers<ContextType>;
    VAnchorWithdrawalByTokenEvery15Min?: VAnchorWithdrawalByTokenEvery15MinResolvers<ContextType>;
    VAnchorWithdrawalByTokenEveryDay?: VAnchorWithdrawalByTokenEveryDayResolvers<ContextType>;
    VAnchorWithdrawalEvery15Min?: VAnchorWithdrawalEvery15MinResolvers<ContextType>;
    VAnchorWithdrawalEveryDay?: VAnchorWithdrawalEveryDayResolvers<ContextType>;
    VAnchorWithdrawalLog?: VAnchorWithdrawalLogResolvers<ContextType>;
    WrappingEventLog?: WrappingEventLogResolvers<ContextType>;
    _Block_?: _Block_Resolvers<ContextType>;
    _Meta_?: _Meta_Resolvers<ContextType>;
  }>;

export type DirectiveResolvers<
  ContextType = MeshContext & { subgraphUrl: string }
> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = VanchorTypes.Context & BaseMeshContext;

const baseDir = pathModule.join(
  typeof __dirname === 'string' ? __dirname : '/',
  '..'
);

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (
    pathModule.isAbsolute(moduleId)
      ? pathModule.relative(baseDir, moduleId)
      : moduleId
  )
    .split('\\')
    .join('/')
    .replace(baseDir + '/', '');
  switch (relativeModuleId) {
    case '.graphclient/sources/vanchor/introspectionSchema':
      return Promise.resolve(importedModule$0) as T;

    default:
      return Promise.reject(
        new Error(`Cannot find module '${relativeModuleId}'.`)
      );
  }
};

const rootStore = new MeshStore(
  '.graphclient',
  new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: 'ts',
  }),
  {
    readonly: true,
    validate: false,
  }
);

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any;
export async function getMeshOptions(): Promise<GetMeshOptions> {
  const pubsub = new PubSub();
  const sourcesStore = rootStore.child('sources');
  const logger = new DefaultLogger('GraphClient');
  const cache = new (MeshCache as any)({
    ...({} as any),
    importFn,
    store: rootStore.child('cache'),
    pubsub,
    logger,
  } as any);

  const sources: MeshResolvedSource[] = [];
  const transforms: MeshTransform[] = [];
  const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
  const vanchorTransforms = [];
  const vanchorHandler = new GraphqlHandler({
    name: 'vanchor',
    config: {
      endpoint:
        '{context.subgraphUrl:http://localhost:8000/subgraphs/name/VAnchorAthenaLocal}',
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child('vanchor'),
    logger: logger.child('vanchor'),
    importFn,
  });
  sources[0] = {
    name: 'vanchor',
    handler: vanchorHandler,
    transforms: vanchorTransforms,
  };
  const additionalTypeDefs = [
    parse('extend type ShieldedTransaction {\n  subgraphUrl: String!\n}\n'),
  ] as any[];
  const additionalResolvers = await Promise.all([
    import('../src/resolvers.ts').then((m) => m.resolvers || m.default || m),
  ]);
  const merger = new (BareMerger as any)({
    cache,
    pubsub,
    logger: logger.child('bareMerger'),
    store: rootStore.child('bareMerger'),
  });

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
        {
          document: GetVAnchorDepositByChainDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorDepositByChainDocument);
          },
          location: 'GetVAnchorDepositByChainDocument.graphql',
        },
        {
          document: GetVAnchorsDepositByChainDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorsDepositByChainDocument);
          },
          location: 'GetVAnchorsDepositByChainDocument.graphql',
        },
        {
          document: GetVAnchorDepositByTokensDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorDepositByTokensDocument);
          },
          location: 'GetVAnchorDepositByTokensDocument.graphql',
        },
        {
          document: GetVAnchorDepositEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorDepositEvery15MinsDocument);
          },
          location: 'GetVAnchorDepositEvery15MinsDocument.graphql',
        },
        {
          document: GetVAnchorsDepositEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorsDepositEvery15MinsDocument);
          },
          location: 'GetVAnchorsDepositEvery15MinsDocument.graphql',
        },
        {
          document: GetVAnchorDepositByTokenEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorDepositByTokenEvery15MinsDocument);
          },
          location: 'GetVAnchorDepositByTokenEvery15MinsDocument.graphql',
        },
        {
          document: GetVAnchorDepositEveryDaysDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorDepositEveryDaysDocument);
          },
          location: 'GetVAnchorDepositEveryDaysDocument.graphql',
        },
        {
          document: GetVAnchorsDepositEveryDaysDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorsDepositEveryDaysDocument);
          },
          location: 'GetVAnchorsDepositEveryDaysDocument.graphql',
        },
        {
          document: GetVAnchorDepositByTokenEveryDaysDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorDepositByTokenEveryDaysDocument);
          },
          location: 'GetVAnchorDepositByTokenEveryDaysDocument.graphql',
        },
        {
          document: GetVanchorsDepositByDateRangeDocument,
          get rawSDL() {
            return printWithCache(GetVanchorsDepositByDateRangeDocument);
          },
          location: 'GetVanchorsDepositByDateRangeDocument.graphql',
        },
        {
          document: GetVAnchorTotalRelayerFeeDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorTotalRelayerFeeDocument);
          },
          location: 'GetVAnchorTotalRelayerFeeDocument.graphql',
        },
        {
          document: GetVAnchorsTotalRelayerFeesDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorsTotalRelayerFeesDocument);
          },
          location: 'GetVAnchorsTotalRelayerFeesDocument.graphql',
        },
        {
          document: GetVAnchorTotalRelayerFeeByTokensDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorTotalRelayerFeeByTokensDocument);
          },
          location: 'GetVAnchorTotalRelayerFeeByTokensDocument.graphql',
        },
        {
          document: GetVAnchorRelayerFeeEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorRelayerFeeEvery15MinsDocument);
          },
          location: 'GetVAnchorRelayerFeeEvery15MinsDocument.graphql',
        },
        {
          document: GetVAnchorsRelayerFeeEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorsRelayerFeeEvery15MinsDocument);
          },
          location: 'GetVAnchorsRelayerFeeEvery15MinsDocument.graphql',
        },
        {
          document: GetVAnchorRelayerFeeByTokenEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(
              GetVAnchorRelayerFeeByTokenEvery15MinsDocument
            );
          },
          location: 'GetVAnchorRelayerFeeByTokenEvery15MinsDocument.graphql',
        },
        {
          document: GetVAnchorTotalValueLockedDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorTotalValueLockedDocument);
          },
          location: 'GetVAnchorTotalValueLockedDocument.graphql',
        },
        {
          document: GetVAnchorTotalValueLockedsDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorTotalValueLockedsDocument);
          },
          location: 'GetVAnchorTotalValueLockedsDocument.graphql',
        },
        {
          document: GetVAnchorTotalValueLockedByTokensDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorTotalValueLockedByTokensDocument);
          },
          location: 'GetVAnchorTotalValueLockedByTokensDocument.graphql',
        },
        {
          document: GetVAnchorTotalValueLockedEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(
              GetVAnchorTotalValueLockedEvery15MinsDocument
            );
          },
          location: 'GetVAnchorTotalValueLockedEvery15MinsDocument.graphql',
        },
        {
          document: GetVAnchorsTotalValueLockedEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(
              GetVAnchorsTotalValueLockedEvery15MinsDocument
            );
          },
          location: 'GetVAnchorsTotalValueLockedEvery15MinsDocument.graphql',
        },
        {
          document: GetVAnchorTotalValueLockedByTokenEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(
              GetVAnchorTotalValueLockedByTokenEvery15MinsDocument
            );
          },
          location:
            'GetVAnchorTotalValueLockedByTokenEvery15MinsDocument.graphql',
        },
        {
          document: GetVAnchorTotalValueLockedEveryDaysDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorTotalValueLockedEveryDaysDocument);
          },
          location: 'GetVAnchorTotalValueLockedEveryDaysDocument.graphql',
        },
        {
          document: GetVAnchorsTotalValueLockedEveryDaysDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorsTotalValueLockedEveryDaysDocument);
          },
          location: 'GetVAnchorsTotalValueLockedEveryDaysDocument.graphql',
        },
        {
          document: GetVAnchorTotalValueLockedByTokenEveryDaysDocument,
          get rawSDL() {
            return printWithCache(
              GetVAnchorTotalValueLockedByTokenEveryDaysDocument
            );
          },
          location:
            'GetVAnchorTotalValueLockedByTokenEveryDaysDocument.graphql',
        },
        {
          document: GetVAnchorsTotalValueLockedByDateRangeEveryDaysDocument,
          get rawSDL() {
            return printWithCache(
              GetVAnchorsTotalValueLockedByDateRangeEveryDaysDocument
            );
          },
          location:
            'GetVAnchorsTotalValueLockedByDateRangeEveryDaysDocument.graphql',
        },
        {
          document: GetVAnchorVolumeByChainDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorVolumeByChainDocument);
          },
          location: 'GetVAnchorVolumeByChainDocument.graphql',
        },
        {
          document: GetVAnchorsVolumeByChainDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorsVolumeByChainDocument);
          },
          location: 'GetVAnchorsVolumeByChainDocument.graphql',
        },
        {
          document: GetVAnchorVolumeByTokensDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorVolumeByTokensDocument);
          },
          location: 'GetVAnchorVolumeByTokensDocument.graphql',
        },
        {
          document: GetVAnchorVolumeEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorVolumeEvery15MinsDocument);
          },
          location: 'GetVAnchorVolumeEvery15MinsDocument.graphql',
        },
        {
          document: GetVAnchorsVolumeEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorsVolumeEvery15MinsDocument);
          },
          location: 'GetVAnchorsVolumeEvery15MinsDocument.graphql',
        },
        {
          document: GetVAnchorVolumeByTokenEveryDaysDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorVolumeByTokenEveryDaysDocument);
          },
          location: 'GetVAnchorVolumeByTokenEveryDaysDocument.graphql',
        },
        {
          document: GetVAnchorVolumeEveryDaysDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorVolumeEveryDaysDocument);
          },
          location: 'GetVAnchorVolumeEveryDaysDocument.graphql',
        },
        {
          document: GetVAnchorsVolumeEveryDaysDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorsVolumeEveryDaysDocument);
          },
          location: 'GetVAnchorsVolumeEveryDaysDocument.graphql',
        },
        {
          document: GetVAnchorVolumeByTokenEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorVolumeByTokenEvery15MinsDocument);
          },
          location: 'GetVAnchorVolumeByTokenEvery15MinsDocument.graphql',
        },
        {
          document: GetVanchorsVolumeByDateRangeDocument,
          get rawSDL() {
            return printWithCache(GetVanchorsVolumeByDateRangeDocument);
          },
          location: 'GetVanchorsVolumeByDateRangeDocument.graphql',
        },
        {
          document: GetVAnchorWithdrawalDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorWithdrawalDocument);
          },
          location: 'GetVAnchorWithdrawalDocument.graphql',
        },
        {
          document: GetVAnchorsWithdrawalsDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorsWithdrawalsDocument);
          },
          location: 'GetVAnchorsWithdrawalsDocument.graphql',
        },
        {
          document: GetVAnchorWithdrawalByTokensDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorWithdrawalByTokensDocument);
          },
          location: 'GetVAnchorWithdrawalByTokensDocument.graphql',
        },
        {
          document: GetVAnchorWithdrawalEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorWithdrawalEvery15MinsDocument);
          },
          location: 'GetVAnchorWithdrawalEvery15MinsDocument.graphql',
        },
        {
          document: GetVAnchorsWithdrawalEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorsWithdrawalEvery15MinsDocument);
          },
          location: 'GetVAnchorsWithdrawalEvery15MinsDocument.graphql',
        },
        {
          document: GetVAnchorWithdrawalByTokenEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(
              GetVAnchorWithdrawalByTokenEvery15MinsDocument
            );
          },
          location: 'GetVAnchorWithdrawalByTokenEvery15MinsDocument.graphql',
        },
        {
          document: GetVAnchorWithdrawalEveryDaysDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorWithdrawalEveryDaysDocument);
          },
          location: 'GetVAnchorWithdrawalEveryDaysDocument.graphql',
        },
        {
          document: GetVAnchorsWithdrawalEveryDaysDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorsWithdrawalEveryDaysDocument);
          },
          location: 'GetVAnchorsWithdrawalEveryDaysDocument.graphql',
        },
        {
          document: GetVAnchorWithdrawalByTokenEveryDaysDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorWithdrawalByTokenEveryDaysDocument);
          },
          location: 'GetVAnchorWithdrawalByTokenEveryDaysDocument.graphql',
        },
        {
          document: GetVanchorsWithdrawalByDateRangeDocument,
          get rawSDL() {
            return printWithCache(GetVanchorsWithdrawalByDateRangeDocument);
          },
          location: 'GetVanchorsWithdrawalByDateRangeDocument.graphql',
        },
        {
          document: GetVAnchorTotalWrappingFeeDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorTotalWrappingFeeDocument);
          },
          location: 'GetVAnchorTotalWrappingFeeDocument.graphql',
        },
        {
          document: GetVAnchorsTotalWrappingFeesDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorsTotalWrappingFeesDocument);
          },
          location: 'GetVAnchorsTotalWrappingFeesDocument.graphql',
        },
        {
          document: GetVAnchorTotalWrappingFeeByTokensDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorTotalWrappingFeeByTokensDocument);
          },
          location: 'GetVAnchorTotalWrappingFeeByTokensDocument.graphql',
        },
        {
          document: GetVAnchorWrappingFeeEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorWrappingFeeEvery15MinsDocument);
          },
          location: 'GetVAnchorWrappingFeeEvery15MinsDocument.graphql',
        },
        {
          document: GetVAnchorsWrappingFeeEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(GetVAnchorsWrappingFeeEvery15MinsDocument);
          },
          location: 'GetVAnchorsWrappingFeeEvery15MinsDocument.graphql',
        },
        {
          document: GetVAnchorWrappingFeeByTokenEvery15MinsDocument,
          get rawSDL() {
            return printWithCache(
              GetVAnchorWrappingFeeByTokenEvery15MinsDocument
            );
          },
          location: 'GetVAnchorWrappingFeeByTokenEvery15MinsDocument.graphql',
        },
      ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<
  TServerContext = {}
>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  });
}

let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions()
      .then((meshOptions) => getMesh(meshOptions))
      .then((mesh) => {
        const id = mesh.pubsub.subscribe('destroy', () => {
          meshInstance$ = undefined;
          mesh.pubsub.unsubscribe(id);
        });
        return mesh;
      });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) =>
  getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) =>
  getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(
  globalContext?: TGlobalContext
) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) =>
    sdkRequesterFactory(globalContext)
  );
  return getSdk<TOperationContext, TGlobalContext>((...args) =>
    sdkRequester$.then((sdkRequester) => sdkRequester(...args))
  );
}
export type GetVAnchorDepositByChainQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetVAnchorDepositByChainQuery = {
  vanchorDeposit?: Maybe<Pick<VAnchorDeposit, 'deposit'>>;
};

export type GetVAnchorsDepositByChainQueryVariables = Exact<{
  vanchorAddresses: Array<Scalars['String']> | Scalars['String'];
}>;

export type GetVAnchorsDepositByChainQuery = {
  vanchorDeposits: Array<Pick<VAnchorDeposit, 'id' | 'deposit'>>;
};

export type GetVAnchorDepositByTokensQueryVariables = Exact<{
  tokenSymbol: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
}>;

export type GetVAnchorDepositByTokensQuery = {
  vanchorDepositByTokens: Array<Pick<VAnchorDepositByToken, 'deposit'>>;
};

export type GetVAnchorDepositEvery15MinsQueryVariables = Exact<{
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
}>;

export type GetVAnchorDepositEvery15MinsQuery = {
  vanchorDepositEvery15Mins: Array<
    Pick<
      VAnchorDepositEvery15Min,
      'startInterval' | 'endInterval' | 'deposit' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorsDepositEvery15MinsQueryVariables = Exact<{
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  vAnchorAddresses: Array<Scalars['Bytes']> | Scalars['Bytes'];
}>;

export type GetVAnchorsDepositEvery15MinsQuery = {
  vanchorDepositEvery15Mins: Array<
    Pick<
      VAnchorDepositEvery15Min,
      'id' | 'startInterval' | 'deposit' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorDepositByTokenEvery15MinsQueryVariables = Exact<{
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
}>;

export type GetVAnchorDepositByTokenEvery15MinsQuery = {
  vanchorDepositByTokenEvery15Mins: Array<
    Pick<
      VAnchorDepositByTokenEvery15Min,
      'deposit' | 'startInterval' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorDepositEveryDaysQueryVariables = Exact<{
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
}>;

export type GetVAnchorDepositEveryDaysQuery = {
  vanchorDepositEveryDays: Array<
    Pick<
      VAnchorDepositEveryDay,
      'startInterval' | 'endInterval' | 'deposit' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorsDepositEveryDaysQueryVariables = Exact<{
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  vAnchorAddresses: Array<Scalars['Bytes']> | Scalars['Bytes'];
}>;

export type GetVAnchorsDepositEveryDaysQuery = {
  vanchorDepositEveryDays: Array<
    Pick<
      VAnchorDepositEveryDay,
      'id' | 'startInterval' | 'deposit' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorDepositByTokenEveryDaysQueryVariables = Exact<{
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
}>;

export type GetVAnchorDepositByTokenEveryDaysQuery = {
  vanchorDepositByTokenEveryDays: Array<
    Pick<
      VAnchorDepositByTokenEveryDay,
      'deposit' | 'startInterval' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVanchorsDepositByDateRangeQueryVariables = Exact<{
  dateRange: Array<Scalars['BigInt']> | Scalars['BigInt'];
  vAnchorAddresses: Array<Scalars['Bytes']> | Scalars['Bytes'];
}>;

export type GetVanchorsDepositByDateRangeQuery = {
  vanchorDepositEveryDays: Array<
    Pick<
      VAnchorDepositEveryDay,
      'deposit' | 'vAnchorAddress' | 'startInterval' | 'endInterval'
    >
  >;
};

export type GetVAnchorTotalRelayerFeeQueryVariables = Exact<{
  vAnchorAddress: Scalars['ID'];
}>;

export type GetVAnchorTotalRelayerFeeQuery = {
  vanchorTotalRelayerFee?: Maybe<Pick<VAnchorTotalRelayerFee, 'fees'>>;
};

export type GetVAnchorsTotalRelayerFeesQueryVariables = Exact<{
  vAnchorAddresses: Array<Scalars['String']> | Scalars['String'];
}>;

export type GetVAnchorsTotalRelayerFeesQuery = {
  vanchorTotalRelayerFees: Array<Pick<VAnchorTotalRelayerFee, 'id' | 'fees'>>;
};

export type GetVAnchorTotalRelayerFeeByTokensQueryVariables = Exact<{
  tokenSymbol: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
}>;

export type GetVAnchorTotalRelayerFeeByTokensQuery = {
  vanchorTotalRelayerFeeByTokens: Array<
    Pick<VAnchorTotalRelayerFeeByToken, 'fees'>
  >;
};

export type GetVAnchorRelayerFeeEvery15MinsQueryVariables = Exact<{
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
}>;

export type GetVAnchorRelayerFeeEvery15MinsQuery = {
  vanchorTotalRelayerFee15Mins: Array<
    Pick<
      VAnchorTotalRelayerFee15Min,
      'startInterval' | 'fees' | 'vAnchorAddress' | 'endInterval'
    >
  >;
};

export type GetVAnchorsRelayerFeeEvery15MinsQueryVariables = Exact<{
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
  vAnchorAddresses: Array<Scalars['Bytes']> | Scalars['Bytes'];
}>;

export type GetVAnchorsRelayerFeeEvery15MinsQuery = {
  vanchorTotalRelayerFeeByTokenEvery15Mins: Array<
    Pick<
      VAnchorTotalRelayerFeeByTokenEvery15Min,
      'id' | 'startInterval' | 'fees' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorRelayerFeeByTokenEvery15MinsQueryVariables = Exact<{
  tokenSymbol: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  endInterval?: InputMaybe<Scalars['BigInt']>;
  startInterval?: InputMaybe<Scalars['BigInt']>;
}>;

export type GetVAnchorRelayerFeeByTokenEvery15MinsQuery = {
  vanchorTotalRelayerFeeByTokenEvery15Mins: Array<
    Pick<
      VAnchorTotalRelayerFeeByTokenEvery15Min,
      'fees' | 'startInterval' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorTotalValueLockedQueryVariables = Exact<{
  vAnchorAddress: Scalars['ID'];
}>;

export type GetVAnchorTotalValueLockedQuery = {
  vanchorTotalValueLocked?: Maybe<
    Pick<VAnchorTotalValueLocked, 'totalValueLocked'>
  >;
};

export type GetVAnchorTotalValueLockedsQueryVariables = Exact<{
  vAnchorAddresses: Array<Scalars['String']> | Scalars['String'];
}>;

export type GetVAnchorTotalValueLockedsQuery = {
  vanchorTotalValueLockeds: Array<
    Pick<VAnchorTotalValueLocked, 'id' | 'totalValueLocked'>
  >;
};

export type GetVAnchorTotalValueLockedByTokensQueryVariables = Exact<{
  tokenSymbol: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
}>;

export type GetVAnchorTotalValueLockedByTokensQuery = {
  vanchorTotalValueLockedByTokens: Array<
    Pick<VAnchorTotalValueLockedByToken, 'totalValueLocked'>
  >;
};

export type GetVAnchorTotalValueLockedEvery15MinsQueryVariables = Exact<{
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
}>;

export type GetVAnchorTotalValueLockedEvery15MinsQuery = {
  vanchorTotalValueLockedEvery15Mins: Array<
    Pick<
      VAnchorTotalValueLockedEvery15Min,
      'startInterval' | 'totalValueLocked' | 'vAnchorAddress' | 'endInterval'
    >
  >;
};

export type GetVAnchorsTotalValueLockedEvery15MinsQueryVariables = Exact<{
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
  vAnchorAddresses: Array<Scalars['Bytes']> | Scalars['Bytes'];
}>;

export type GetVAnchorsTotalValueLockedEvery15MinsQuery = {
  vanchorTotalValueLockedEvery15Mins: Array<
    Pick<
      VAnchorTotalValueLockedEvery15Min,
      | 'id'
      | 'startInterval'
      | 'totalValueLocked'
      | 'endInterval'
      | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorTotalValueLockedByTokenEvery15MinsQueryVariables = Exact<{
  tokenSymbol: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
}>;

export type GetVAnchorTotalValueLockedByTokenEvery15MinsQuery = {
  vanchorTotalValueLockedByTokenEvery15Mins: Array<
    Pick<
      VAnchorTotalValueLockedByTokenEvery15Min,
      'totalValueLocked' | 'startInterval' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorTotalValueLockedEveryDaysQueryVariables = Exact<{
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
}>;

export type GetVAnchorTotalValueLockedEveryDaysQuery = {
  vanchorTotalValueLockedEveryDays: Array<
    Pick<
      VAnchorTotalValueLockedEveryDay,
      'startInterval' | 'totalValueLocked' | 'vAnchorAddress' | 'endInterval'
    >
  >;
};

export type GetVAnchorsTotalValueLockedEveryDaysQueryVariables = Exact<{
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
  vAnchorAddresses: Array<Scalars['Bytes']> | Scalars['Bytes'];
}>;

export type GetVAnchorsTotalValueLockedEveryDaysQuery = {
  vanchorTotalValueLockedEveryDays: Array<
    Pick<
      VAnchorTotalValueLockedEveryDay,
      | 'id'
      | 'startInterval'
      | 'totalValueLocked'
      | 'endInterval'
      | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorTotalValueLockedByTokenEveryDaysQueryVariables = Exact<{
  tokenSymbol: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
}>;

export type GetVAnchorTotalValueLockedByTokenEveryDaysQuery = {
  vanchorTotalValueLockedByTokenEveryDays: Array<
    Pick<
      VAnchorTotalValueLockedByTokenEveryDay,
      'totalValueLocked' | 'startInterval' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorsTotalValueLockedByDateRangeEveryDaysQueryVariables =
  Exact<{
    dateRange: Array<Scalars['BigInt']> | Scalars['BigInt'];
    vAnchorAddresses: Array<Scalars['Bytes']> | Scalars['Bytes'];
  }>;

export type GetVAnchorsTotalValueLockedByDateRangeEveryDaysQuery = {
  vanchorTotalValueLockedEveryDays: Array<
    Pick<
      VAnchorTotalValueLockedEveryDay,
      'totalValueLocked' | 'vAnchorAddress' | 'startInterval' | 'endInterval'
    >
  >;
};

export type GetVAnchorVolumeByChainQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetVAnchorVolumeByChainQuery = {
  vanchorVolume?: Maybe<Pick<VAnchorVolume, 'volume'>>;
};

export type GetVAnchorsVolumeByChainQueryVariables = Exact<{
  vanchorAddresses: Array<Scalars['String']> | Scalars['String'];
}>;

export type GetVAnchorsVolumeByChainQuery = {
  vanchorVolumes: Array<Pick<VAnchorVolume, 'id' | 'volume'>>;
};

export type GetVAnchorVolumeByTokensQueryVariables = Exact<{
  tokenSymbol: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
}>;

export type GetVAnchorVolumeByTokensQuery = {
  vanchorVolumeByTokens: Array<Pick<VAnchorVolumeByToken, 'volume'>>;
};

export type GetVAnchorVolumeEvery15MinsQueryVariables = Exact<{
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
}>;

export type GetVAnchorVolumeEvery15MinsQuery = {
  vanchorVolumeEvery15Mins: Array<
    Pick<
      VAnchorVolumeEvery15Min,
      'startInterval' | 'endInterval' | 'volume' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorsVolumeEvery15MinsQueryVariables = Exact<{
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  vAnchorAddresses: Array<Scalars['Bytes']> | Scalars['Bytes'];
}>;

export type GetVAnchorsVolumeEvery15MinsQuery = {
  vanchorVolumeEvery15Mins: Array<
    Pick<
      VAnchorVolumeEvery15Min,
      'id' | 'startInterval' | 'volume' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorVolumeByTokenEveryDaysQueryVariables = Exact<{
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
}>;

export type GetVAnchorVolumeByTokenEveryDaysQuery = {
  vanchorVolumeByTokenEveryDays: Array<
    Pick<
      VAnchorVolumeByTokenEveryDay,
      'volume' | 'startInterval' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorVolumeEveryDaysQueryVariables = Exact<{
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
}>;

export type GetVAnchorVolumeEveryDaysQuery = {
  vanchorVolumeEveryDays: Array<
    Pick<
      VAnchorVolumeEveryDay,
      'startInterval' | 'endInterval' | 'volume' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorsVolumeEveryDaysQueryVariables = Exact<{
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  vAnchorAddresses: Array<Scalars['Bytes']> | Scalars['Bytes'];
}>;

export type GetVAnchorsVolumeEveryDaysQuery = {
  vanchorVolumeEveryDays: Array<
    Pick<
      VAnchorVolumeEveryDay,
      'id' | 'startInterval' | 'volume' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorVolumeByTokenEvery15MinsQueryVariables = Exact<{
  startInterval: Scalars['BigInt'];
  endInterval: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
}>;

export type GetVAnchorVolumeByTokenEvery15MinsQuery = {
  vanchorVolumeByTokenEvery15Mins: Array<
    Pick<
      VAnchorVolumeByTokenEvery15Min,
      'volume' | 'startInterval' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVanchorsVolumeByDateRangeQueryVariables = Exact<{
  dateRange: Array<Scalars['BigInt']> | Scalars['BigInt'];
  vAnchorAddresses: Array<Scalars['Bytes']> | Scalars['Bytes'];
}>;

export type GetVanchorsVolumeByDateRangeQuery = {
  vanchorVolumeEveryDays: Array<
    Pick<
      VAnchorVolumeEveryDay,
      'volume' | 'vAnchorAddress' | 'startInterval' | 'endInterval'
    >
  >;
};

export type GetVAnchorWithdrawalQueryVariables = Exact<{
  vAnchorAddress: Scalars['ID'];
}>;

export type GetVAnchorWithdrawalQuery = {
  vanchorWithdrawal?: Maybe<Pick<VAnchorWithdrawal, 'withdrawal'>>;
};

export type GetVAnchorsWithdrawalsQueryVariables = Exact<{
  vAnchorAddresses: Array<Scalars['String']> | Scalars['String'];
}>;

export type GetVAnchorsWithdrawalsQuery = {
  vanchorWithdrawals: Array<Pick<VAnchorWithdrawal, 'id' | 'withdrawal'>>;
};

export type GetVAnchorWithdrawalByTokensQueryVariables = Exact<{
  tokenSymbol: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
}>;

export type GetVAnchorWithdrawalByTokensQuery = {
  vanchorWithdrawalByTokens: Array<
    Pick<VAnchorWithdrawalByToken, 'withdrawal'>
  >;
};

export type GetVAnchorWithdrawalEvery15MinsQueryVariables = Exact<{
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
}>;

export type GetVAnchorWithdrawalEvery15MinsQuery = {
  vanchorWithdrawalEvery15Mins: Array<
    Pick<
      VAnchorWithdrawalEvery15Min,
      'startInterval' | 'withdrawal' | 'vAnchorAddress' | 'endInterval'
    >
  >;
};

export type GetVAnchorsWithdrawalEvery15MinsQueryVariables = Exact<{
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
  vAnchorAddresses: Array<Scalars['Bytes']> | Scalars['Bytes'];
}>;

export type GetVAnchorsWithdrawalEvery15MinsQuery = {
  vanchorWithdrawalEvery15Mins: Array<
    Pick<
      VAnchorWithdrawalEvery15Min,
      'id' | 'startInterval' | 'withdrawal' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorWithdrawalByTokenEvery15MinsQueryVariables = Exact<{
  tokenSymbol: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
}>;

export type GetVAnchorWithdrawalByTokenEvery15MinsQuery = {
  vanchorWithdrawalByTokenEvery15Mins: Array<
    Pick<
      VAnchorWithdrawalByTokenEvery15Min,
      'withdrawal' | 'startInterval' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorWithdrawalEveryDaysQueryVariables = Exact<{
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
}>;

export type GetVAnchorWithdrawalEveryDaysQuery = {
  vanchorWithdrawalEveryDays: Array<
    Pick<
      VAnchorWithdrawalEveryDay,
      'startInterval' | 'withdrawal' | 'vAnchorAddress' | 'endInterval'
    >
  >;
};

export type GetVAnchorsWithdrawalEveryDaysQueryVariables = Exact<{
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
  vAnchorAddresses: Array<Scalars['Bytes']> | Scalars['Bytes'];
}>;

export type GetVAnchorsWithdrawalEveryDaysQuery = {
  vanchorWithdrawalEveryDays: Array<
    Pick<
      VAnchorWithdrawalEveryDay,
      'id' | 'startInterval' | 'withdrawal' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorWithdrawalByTokenEveryDaysQueryVariables = Exact<{
  tokenSymbol: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
}>;

export type GetVAnchorWithdrawalByTokenEveryDaysQuery = {
  vanchorWithdrawalByTokenEveryDays: Array<
    Pick<
      VAnchorWithdrawalByTokenEveryDay,
      'withdrawal' | 'startInterval' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVanchorsWithdrawalByDateRangeQueryVariables = Exact<{
  dateRange: Array<Scalars['BigInt']> | Scalars['BigInt'];
  vAnchorAddresses: Array<Scalars['Bytes']> | Scalars['Bytes'];
}>;

export type GetVanchorsWithdrawalByDateRangeQuery = {
  vanchorWithdrawalEveryDays: Array<
    Pick<
      VAnchorWithdrawalEveryDay,
      'withdrawal' | 'vAnchorAddress' | 'startInterval' | 'endInterval'
    >
  >;
};

export type GetVAnchorTotalWrappingFeeQueryVariables = Exact<{
  vAnchorAddress: Scalars['ID'];
}>;

export type GetVAnchorTotalWrappingFeeQuery = {
  vanchorTotalWrappingFee?: Maybe<Pick<VAnchorTotalWrappingFee, 'fees'>>;
};

export type GetVAnchorsTotalWrappingFeesQueryVariables = Exact<{
  vAnchorAddresses: Array<Scalars['String']> | Scalars['String'];
}>;

export type GetVAnchorsTotalWrappingFeesQuery = {
  vanchorTotalWrappingFees: Array<Pick<VAnchorTotalWrappingFee, 'id' | 'fees'>>;
};

export type GetVAnchorTotalWrappingFeeByTokensQueryVariables = Exact<{
  tokenSymbol: Scalars['String'];
  vAnchorAddress: Scalars['Bytes'];
}>;

export type GetVAnchorTotalWrappingFeeByTokensQuery = {
  vanchorTotalWrappingFeeByTokens: Array<
    Pick<VAnchorTotalWrappingFeeByToken, 'fees'>
  >;
};

export type GetVAnchorWrappingFeeEvery15MinsQueryVariables = Exact<{
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
}>;

export type GetVAnchorWrappingFeeEvery15MinsQuery = {
  vanchorTotalWrappingFeeByTokenEvery15Mins: Array<
    Pick<
      VAnchorTotalWrappingFeeByTokenEvery15Min,
      'startInterval' | 'fees' | 'vAnchorAddress' | 'endInterval'
    >
  >;
};

export type GetVAnchorsWrappingFeeEvery15MinsQueryVariables = Exact<{
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
  vAnchorAddresses: Array<Scalars['Bytes']> | Scalars['Bytes'];
}>;

export type GetVAnchorsWrappingFeeEvery15MinsQuery = {
  vanchorTotalWrappingFeeByTokenEvery15Mins: Array<
    Pick<
      VAnchorTotalWrappingFeeByTokenEvery15Min,
      'id' | 'startInterval' | 'fees' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export type GetVAnchorWrappingFeeByTokenEvery15MinsQueryVariables = Exact<{
  endInterval: Scalars['BigInt'];
  startInterval: Scalars['BigInt'];
  vAnchorAddress: Scalars['Bytes'];
  tokenSymbol: Scalars['String'];
}>;

export type GetVAnchorWrappingFeeByTokenEvery15MinsQuery = {
  vanchorTotalWrappingFeeByTokenEvery15Mins: Array<
    Pick<
      VAnchorTotalWrappingFeeByTokenEvery15Min,
      'fees' | 'startInterval' | 'endInterval' | 'vAnchorAddress'
    >
  >;
};

export const GetVAnchorDepositByChainDocument = gql`
  query GetVAnchorDepositByChain($id: ID!) {
    vanchorDeposit(id: $id) {
      deposit
    }
  }
` as unknown as DocumentNode<
  GetVAnchorDepositByChainQuery,
  GetVAnchorDepositByChainQueryVariables
>;
export const GetVAnchorsDepositByChainDocument = gql`
  query GetVAnchorsDepositByChain($vanchorAddresses: [String!]!) {
    vanchorDeposits(where: { id_in: $vanchorAddresses }) {
      id
      deposit
    }
  }
` as unknown as DocumentNode<
  GetVAnchorsDepositByChainQuery,
  GetVAnchorsDepositByChainQueryVariables
>;
export const GetVAnchorDepositByTokensDocument = gql`
  query GetVAnchorDepositByTokens(
    $tokenSymbol: String!
    $vAnchorAddress: Bytes!
  ) {
    vanchorDepositByTokens(
      first: 1
      where: { tokenSymbol: $tokenSymbol, vAnchorAddress: $vAnchorAddress }
    ) {
      deposit
    }
  }
` as unknown as DocumentNode<
  GetVAnchorDepositByTokensQuery,
  GetVAnchorDepositByTokensQueryVariables
>;
export const GetVAnchorDepositEvery15MinsDocument = gql`
  query GetVAnchorDepositEvery15Mins(
    $startInterval: BigInt!
    $endInterval: BigInt!
    $vAnchorAddress: Bytes!
  ) {
    vanchorDepositEvery15Mins(
      where: {
        startInterval_gte: $startInterval
        endInterval_lte: $endInterval
        vAnchorAddress: $vAnchorAddress
      }
    ) {
      startInterval
      endInterval
      deposit
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorDepositEvery15MinsQuery,
  GetVAnchorDepositEvery15MinsQueryVariables
>;
export const GetVAnchorsDepositEvery15MinsDocument = gql`
  query GetVAnchorsDepositEvery15Mins(
    $startInterval: BigInt!
    $endInterval: BigInt!
    $vAnchorAddresses: [Bytes!]!
  ) {
    vanchorDepositEvery15Mins(
      where: {
        startInterval_gte: $startInterval
        endInterval_lte: $endInterval
        vAnchorAddress_in: $vAnchorAddresses
      }
    ) {
      id
      startInterval
      deposit
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorsDepositEvery15MinsQuery,
  GetVAnchorsDepositEvery15MinsQueryVariables
>;
export const GetVAnchorDepositByTokenEvery15MinsDocument = gql`
  query GetVAnchorDepositByTokenEvery15Mins(
    $startInterval: BigInt!
    $endInterval: BigInt!
    $vAnchorAddress: Bytes!
    $tokenSymbol: String!
  ) {
    vanchorDepositByTokenEvery15Mins(
      where: {
        startInterval_gte: $startInterval
        endInterval_lte: $endInterval
        vAnchorAddress: $vAnchorAddress
        tokenSymbol: $tokenSymbol
      }
    ) {
      deposit
      startInterval
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorDepositByTokenEvery15MinsQuery,
  GetVAnchorDepositByTokenEvery15MinsQueryVariables
>;
export const GetVAnchorDepositEveryDaysDocument = gql`
  query GetVAnchorDepositEveryDays(
    $startInterval: BigInt!
    $endInterval: BigInt!
    $vAnchorAddress: Bytes!
  ) {
    vanchorDepositEveryDays(
      where: {
        startInterval_gte: $startInterval
        endInterval_lte: $endInterval
        vAnchorAddress: $vAnchorAddress
      }
    ) {
      startInterval
      endInterval
      deposit
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorDepositEveryDaysQuery,
  GetVAnchorDepositEveryDaysQueryVariables
>;
export const GetVAnchorsDepositEveryDaysDocument = gql`
  query GetVAnchorsDepositEveryDays(
    $startInterval: BigInt!
    $endInterval: BigInt!
    $vAnchorAddresses: [Bytes!]!
  ) {
    vanchorDepositEveryDays(
      where: {
        startInterval_gte: $startInterval
        endInterval_lte: $endInterval
        vAnchorAddress_in: $vAnchorAddresses
      }
    ) {
      id
      startInterval
      deposit
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorsDepositEveryDaysQuery,
  GetVAnchorsDepositEveryDaysQueryVariables
>;
export const GetVAnchorDepositByTokenEveryDaysDocument = gql`
  query GetVAnchorDepositByTokenEveryDays(
    $startInterval: BigInt!
    $endInterval: BigInt!
    $vAnchorAddress: Bytes!
    $tokenSymbol: String!
  ) {
    vanchorDepositByTokenEveryDays(
      where: {
        startInterval_gte: $startInterval
        endInterval_lte: $endInterval
        vAnchorAddress: $vAnchorAddress
        tokenSymbol: $tokenSymbol
      }
    ) {
      deposit
      startInterval
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorDepositByTokenEveryDaysQuery,
  GetVAnchorDepositByTokenEveryDaysQueryVariables
>;
export const GetVanchorsDepositByDateRangeDocument = gql`
  query GetVanchorsDepositByDateRange(
    $dateRange: [BigInt!]!
    $vAnchorAddresses: [Bytes!]!
  ) {
    vanchorDepositEveryDays(
      where: {
        startInterval_in: $dateRange
        vAnchorAddress_in: $vAnchorAddresses
      }
      orderBy: startInterval
    ) {
      deposit
      vAnchorAddress
      startInterval
      endInterval
    }
  }
` as unknown as DocumentNode<
  GetVanchorsDepositByDateRangeQuery,
  GetVanchorsDepositByDateRangeQueryVariables
>;
export const GetVAnchorTotalRelayerFeeDocument = gql`
  query GetVAnchorTotalRelayerFee($vAnchorAddress: ID!) {
    vanchorTotalRelayerFee(id: $vAnchorAddress) {
      fees
    }
  }
` as unknown as DocumentNode<
  GetVAnchorTotalRelayerFeeQuery,
  GetVAnchorTotalRelayerFeeQueryVariables
>;
export const GetVAnchorsTotalRelayerFeesDocument = gql`
  query GetVAnchorsTotalRelayerFees($vAnchorAddresses: [String!]!) {
    vanchorTotalRelayerFees(where: { id_in: $vAnchorAddresses }) {
      id
      fees
    }
  }
` as unknown as DocumentNode<
  GetVAnchorsTotalRelayerFeesQuery,
  GetVAnchorsTotalRelayerFeesQueryVariables
>;
export const GetVAnchorTotalRelayerFeeByTokensDocument = gql`
  query GetVAnchorTotalRelayerFeeByTokens(
    $tokenSymbol: String!
    $vAnchorAddress: Bytes!
  ) {
    vanchorTotalRelayerFeeByTokens(
      first: 1
      where: { tokenSymbol: $tokenSymbol, vAnchorAddress: $vAnchorAddress }
    ) {
      fees
    }
  }
` as unknown as DocumentNode<
  GetVAnchorTotalRelayerFeeByTokensQuery,
  GetVAnchorTotalRelayerFeeByTokensQueryVariables
>;
export const GetVAnchorRelayerFeeEvery15MinsDocument = gql`
  query GetVAnchorRelayerFeeEvery15Mins(
    $endInterval: BigInt!
    $startInterval: BigInt!
    $vAnchorAddress: Bytes!
  ) {
    vanchorTotalRelayerFee15Mins(
      where: {
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
        vAnchorAddress: $vAnchorAddress
      }
    ) {
      startInterval
      fees
      vAnchorAddress
      endInterval
    }
  }
` as unknown as DocumentNode<
  GetVAnchorRelayerFeeEvery15MinsQuery,
  GetVAnchorRelayerFeeEvery15MinsQueryVariables
>;
export const GetVAnchorsRelayerFeeEvery15MinsDocument = gql`
  query GetVAnchorsRelayerFeeEvery15Mins(
    $endInterval: BigInt!
    $startInterval: BigInt!
    $vAnchorAddresses: [Bytes!]!
  ) {
    vanchorTotalRelayerFeeByTokenEvery15Mins(
      where: {
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
        vAnchorAddress_in: $vAnchorAddresses
      }
    ) {
      id
      startInterval
      fees
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorsRelayerFeeEvery15MinsQuery,
  GetVAnchorsRelayerFeeEvery15MinsQueryVariables
>;
export const GetVAnchorRelayerFeeByTokenEvery15MinsDocument = gql`
  query GetVAnchorRelayerFeeByTokenEvery15Mins(
    $tokenSymbol: String!
    $vAnchorAddress: Bytes!
    $endInterval: BigInt
    $startInterval: BigInt
  ) {
    vanchorTotalRelayerFeeByTokenEvery15Mins(
      where: {
        tokenSymbol: $tokenSymbol
        vAnchorAddress: $vAnchorAddress
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
      }
    ) {
      fees
      startInterval
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorRelayerFeeByTokenEvery15MinsQuery,
  GetVAnchorRelayerFeeByTokenEvery15MinsQueryVariables
>;
export const GetVAnchorTotalValueLockedDocument = gql`
  query GetVAnchorTotalValueLocked($vAnchorAddress: ID!) {
    vanchorTotalValueLocked(id: $vAnchorAddress) {
      totalValueLocked
    }
  }
` as unknown as DocumentNode<
  GetVAnchorTotalValueLockedQuery,
  GetVAnchorTotalValueLockedQueryVariables
>;
export const GetVAnchorTotalValueLockedsDocument = gql`
  query GetVAnchorTotalValueLockeds($vAnchorAddresses: [String!]!) {
    vanchorTotalValueLockeds(where: { id_in: $vAnchorAddresses }) {
      id
      totalValueLocked
    }
  }
` as unknown as DocumentNode<
  GetVAnchorTotalValueLockedsQuery,
  GetVAnchorTotalValueLockedsQueryVariables
>;
export const GetVAnchorTotalValueLockedByTokensDocument = gql`
  query GetVAnchorTotalValueLockedByTokens(
    $tokenSymbol: String!
    $vAnchorAddress: Bytes!
  ) {
    vanchorTotalValueLockedByTokens(
      first: 1
      where: { tokenSymbol: $tokenSymbol, vAnchorAddress: $vAnchorAddress }
    ) {
      totalValueLocked
    }
  }
` as unknown as DocumentNode<
  GetVAnchorTotalValueLockedByTokensQuery,
  GetVAnchorTotalValueLockedByTokensQueryVariables
>;
export const GetVAnchorTotalValueLockedEvery15MinsDocument = gql`
  query GetVAnchorTotalValueLockedEvery15Mins(
    $endInterval: BigInt!
    $startInterval: BigInt!
    $vAnchorAddress: Bytes!
  ) {
    vanchorTotalValueLockedEvery15Mins(
      where: {
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
        vAnchorAddress: $vAnchorAddress
      }
    ) {
      startInterval
      totalValueLocked
      vAnchorAddress
      endInterval
    }
  }
` as unknown as DocumentNode<
  GetVAnchorTotalValueLockedEvery15MinsQuery,
  GetVAnchorTotalValueLockedEvery15MinsQueryVariables
>;
export const GetVAnchorsTotalValueLockedEvery15MinsDocument = gql`
  query GetVAnchorsTotalValueLockedEvery15Mins(
    $endInterval: BigInt!
    $startInterval: BigInt!
    $vAnchorAddresses: [Bytes!]!
  ) {
    vanchorTotalValueLockedEvery15Mins(
      where: {
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
        vAnchorAddress_in: $vAnchorAddresses
      }
    ) {
      id
      startInterval
      totalValueLocked
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorsTotalValueLockedEvery15MinsQuery,
  GetVAnchorsTotalValueLockedEvery15MinsQueryVariables
>;
export const GetVAnchorTotalValueLockedByTokenEvery15MinsDocument = gql`
  query GetVAnchorTotalValueLockedByTokenEvery15Mins(
    $tokenSymbol: String!
    $vAnchorAddress: Bytes!
    $endInterval: BigInt!
    $startInterval: BigInt!
  ) {
    vanchorTotalValueLockedByTokenEvery15Mins(
      where: {
        tokenSymbol: $tokenSymbol
        vAnchorAddress: $vAnchorAddress
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
      }
    ) {
      totalValueLocked
      startInterval
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorTotalValueLockedByTokenEvery15MinsQuery,
  GetVAnchorTotalValueLockedByTokenEvery15MinsQueryVariables
>;
export const GetVAnchorTotalValueLockedEveryDaysDocument = gql`
  query GetVAnchorTotalValueLockedEveryDays(
    $endInterval: BigInt!
    $startInterval: BigInt!
    $vAnchorAddress: Bytes!
  ) {
    vanchorTotalValueLockedEveryDays(
      where: {
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
        vAnchorAddress: $vAnchorAddress
      }
    ) {
      startInterval
      totalValueLocked
      vAnchorAddress
      endInterval
    }
  }
` as unknown as DocumentNode<
  GetVAnchorTotalValueLockedEveryDaysQuery,
  GetVAnchorTotalValueLockedEveryDaysQueryVariables
>;
export const GetVAnchorsTotalValueLockedEveryDaysDocument = gql`
  query GetVAnchorsTotalValueLockedEveryDays(
    $endInterval: BigInt!
    $startInterval: BigInt!
    $vAnchorAddresses: [Bytes!]!
  ) {
    vanchorTotalValueLockedEveryDays(
      where: {
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
        vAnchorAddress_in: $vAnchorAddresses
      }
    ) {
      id
      startInterval
      totalValueLocked
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorsTotalValueLockedEveryDaysQuery,
  GetVAnchorsTotalValueLockedEveryDaysQueryVariables
>;
export const GetVAnchorTotalValueLockedByTokenEveryDaysDocument = gql`
  query GetVAnchorTotalValueLockedByTokenEveryDays(
    $tokenSymbol: String!
    $vAnchorAddress: Bytes!
    $endInterval: BigInt!
    $startInterval: BigInt!
  ) {
    vanchorTotalValueLockedByTokenEveryDays(
      where: {
        tokenSymbol: $tokenSymbol
        vAnchorAddress: $vAnchorAddress
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
      }
    ) {
      totalValueLocked
      startInterval
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorTotalValueLockedByTokenEveryDaysQuery,
  GetVAnchorTotalValueLockedByTokenEveryDaysQueryVariables
>;
export const GetVAnchorsTotalValueLockedByDateRangeEveryDaysDocument = gql`
  query GetVAnchorsTotalValueLockedByDateRangeEveryDays(
    $dateRange: [BigInt!]!
    $vAnchorAddresses: [Bytes!]!
  ) {
    vanchorTotalValueLockedEveryDays(
      where: {
        startInterval_in: $dateRange
        vAnchorAddress_in: $vAnchorAddresses
      }
      orderBy: startInterval
    ) {
      totalValueLocked
      vAnchorAddress
      startInterval
      endInterval
    }
  }
` as unknown as DocumentNode<
  GetVAnchorsTotalValueLockedByDateRangeEveryDaysQuery,
  GetVAnchorsTotalValueLockedByDateRangeEveryDaysQueryVariables
>;
export const GetVAnchorVolumeByChainDocument = gql`
  query GetVAnchorVolumeByChain($id: ID!) {
    vanchorVolume(id: $id) {
      volume
    }
  }
` as unknown as DocumentNode<
  GetVAnchorVolumeByChainQuery,
  GetVAnchorVolumeByChainQueryVariables
>;
export const GetVAnchorsVolumeByChainDocument = gql`
  query GetVAnchorsVolumeByChain($vanchorAddresses: [String!]!) {
    vanchorVolumes(where: { id_in: $vanchorAddresses }) {
      id
      volume
    }
  }
` as unknown as DocumentNode<
  GetVAnchorsVolumeByChainQuery,
  GetVAnchorsVolumeByChainQueryVariables
>;
export const GetVAnchorVolumeByTokensDocument = gql`
  query GetVAnchorVolumeByTokens(
    $tokenSymbol: String!
    $vAnchorAddress: Bytes!
  ) {
    vanchorVolumeByTokens(
      first: 1
      where: { tokenSymbol: $tokenSymbol, vAnchorAddress: $vAnchorAddress }
    ) {
      volume
    }
  }
` as unknown as DocumentNode<
  GetVAnchorVolumeByTokensQuery,
  GetVAnchorVolumeByTokensQueryVariables
>;
export const GetVAnchorVolumeEvery15MinsDocument = gql`
  query GetVAnchorVolumeEvery15Mins(
    $startInterval: BigInt!
    $endInterval: BigInt!
    $vAnchorAddress: Bytes!
  ) {
    vanchorVolumeEvery15Mins(
      where: {
        startInterval_gte: $startInterval
        endInterval_lte: $endInterval
        vAnchorAddress: $vAnchorAddress
      }
    ) {
      startInterval
      endInterval
      volume
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorVolumeEvery15MinsQuery,
  GetVAnchorVolumeEvery15MinsQueryVariables
>;
export const GetVAnchorsVolumeEvery15MinsDocument = gql`
  query GetVAnchorsVolumeEvery15Mins(
    $startInterval: BigInt!
    $endInterval: BigInt!
    $vAnchorAddresses: [Bytes!]!
  ) {
    vanchorVolumeEvery15Mins(
      where: {
        startInterval_gte: $startInterval
        endInterval_lte: $endInterval
        vAnchorAddress_in: $vAnchorAddresses
      }
    ) {
      id
      startInterval
      volume
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorsVolumeEvery15MinsQuery,
  GetVAnchorsVolumeEvery15MinsQueryVariables
>;
export const GetVAnchorVolumeByTokenEveryDaysDocument = gql`
  query GetVAnchorVolumeByTokenEveryDays(
    $startInterval: BigInt!
    $endInterval: BigInt!
    $vAnchorAddress: Bytes!
    $tokenSymbol: String!
  ) {
    vanchorVolumeByTokenEveryDays(
      where: {
        startInterval_gte: $startInterval
        endInterval_lte: $endInterval
        vAnchorAddress: $vAnchorAddress
        tokenSymbol: $tokenSymbol
      }
    ) {
      volume
      startInterval
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorVolumeByTokenEveryDaysQuery,
  GetVAnchorVolumeByTokenEveryDaysQueryVariables
>;
export const GetVAnchorVolumeEveryDaysDocument = gql`
  query GetVAnchorVolumeEveryDays(
    $startInterval: BigInt!
    $endInterval: BigInt!
    $vAnchorAddress: Bytes!
  ) {
    vanchorVolumeEveryDays(
      where: {
        startInterval_gte: $startInterval
        endInterval_lte: $endInterval
        vAnchorAddress: $vAnchorAddress
      }
    ) {
      startInterval
      endInterval
      volume
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorVolumeEveryDaysQuery,
  GetVAnchorVolumeEveryDaysQueryVariables
>;
export const GetVAnchorsVolumeEveryDaysDocument = gql`
  query GetVAnchorsVolumeEveryDays(
    $startInterval: BigInt!
    $endInterval: BigInt!
    $vAnchorAddresses: [Bytes!]!
  ) {
    vanchorVolumeEveryDays(
      where: {
        startInterval_gte: $startInterval
        endInterval_lte: $endInterval
        vAnchorAddress_in: $vAnchorAddresses
      }
    ) {
      id
      startInterval
      volume
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorsVolumeEveryDaysQuery,
  GetVAnchorsVolumeEveryDaysQueryVariables
>;
export const GetVAnchorVolumeByTokenEvery15MinsDocument = gql`
  query GetVAnchorVolumeByTokenEvery15Mins(
    $startInterval: BigInt!
    $endInterval: BigInt!
    $vAnchorAddress: Bytes!
    $tokenSymbol: String!
  ) {
    vanchorVolumeByTokenEvery15Mins(
      where: {
        startInterval_gte: $startInterval
        endInterval_lte: $endInterval
        vAnchorAddress: $vAnchorAddress
        tokenSymbol: $tokenSymbol
      }
    ) {
      volume
      startInterval
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorVolumeByTokenEvery15MinsQuery,
  GetVAnchorVolumeByTokenEvery15MinsQueryVariables
>;
export const GetVanchorsVolumeByDateRangeDocument = gql`
  query GetVanchorsVolumeByDateRange(
    $dateRange: [BigInt!]!
    $vAnchorAddresses: [Bytes!]!
  ) {
    vanchorVolumeEveryDays(
      where: {
        startInterval_in: $dateRange
        vAnchorAddress_in: $vAnchorAddresses
      }
      orderBy: startInterval
    ) {
      volume
      vAnchorAddress
      startInterval
      endInterval
    }
  }
` as unknown as DocumentNode<
  GetVanchorsVolumeByDateRangeQuery,
  GetVanchorsVolumeByDateRangeQueryVariables
>;
export const GetVAnchorWithdrawalDocument = gql`
  query GetVAnchorWithdrawal($vAnchorAddress: ID!) {
    vanchorWithdrawal(id: $vAnchorAddress) {
      withdrawal
    }
  }
` as unknown as DocumentNode<
  GetVAnchorWithdrawalQuery,
  GetVAnchorWithdrawalQueryVariables
>;
export const GetVAnchorsWithdrawalsDocument = gql`
  query GetVAnchorsWithdrawals($vAnchorAddresses: [String!]!) {
    vanchorWithdrawals(where: { id_in: $vAnchorAddresses }) {
      id
      withdrawal
    }
  }
` as unknown as DocumentNode<
  GetVAnchorsWithdrawalsQuery,
  GetVAnchorsWithdrawalsQueryVariables
>;
export const GetVAnchorWithdrawalByTokensDocument = gql`
  query GetVAnchorWithdrawalByTokens(
    $tokenSymbol: String!
    $vAnchorAddress: Bytes!
  ) {
    vanchorWithdrawalByTokens(
      first: 1
      where: { tokenSymbol: $tokenSymbol, vAnchorAddress: $vAnchorAddress }
    ) {
      withdrawal
    }
  }
` as unknown as DocumentNode<
  GetVAnchorWithdrawalByTokensQuery,
  GetVAnchorWithdrawalByTokensQueryVariables
>;
export const GetVAnchorWithdrawalEvery15MinsDocument = gql`
  query GetVAnchorWithdrawalEvery15Mins(
    $endInterval: BigInt!
    $startInterval: BigInt!
    $vAnchorAddress: Bytes!
  ) {
    vanchorWithdrawalEvery15Mins(
      where: {
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
        vAnchorAddress: $vAnchorAddress
      }
    ) {
      startInterval
      withdrawal
      vAnchorAddress
      endInterval
    }
  }
` as unknown as DocumentNode<
  GetVAnchorWithdrawalEvery15MinsQuery,
  GetVAnchorWithdrawalEvery15MinsQueryVariables
>;
export const GetVAnchorsWithdrawalEvery15MinsDocument = gql`
  query GetVAnchorsWithdrawalEvery15Mins(
    $endInterval: BigInt!
    $startInterval: BigInt!
    $vAnchorAddresses: [Bytes!]!
  ) {
    vanchorWithdrawalEvery15Mins(
      where: {
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
        vAnchorAddress_in: $vAnchorAddresses
      }
    ) {
      id
      startInterval
      withdrawal
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorsWithdrawalEvery15MinsQuery,
  GetVAnchorsWithdrawalEvery15MinsQueryVariables
>;
export const GetVAnchorWithdrawalByTokenEvery15MinsDocument = gql`
  query GetVAnchorWithdrawalByTokenEvery15Mins(
    $tokenSymbol: String!
    $vAnchorAddress: Bytes!
    $endInterval: BigInt!
    $startInterval: BigInt!
  ) {
    vanchorWithdrawalByTokenEvery15Mins(
      where: {
        tokenSymbol: $tokenSymbol
        vAnchorAddress: $vAnchorAddress
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
      }
    ) {
      withdrawal
      startInterval
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorWithdrawalByTokenEvery15MinsQuery,
  GetVAnchorWithdrawalByTokenEvery15MinsQueryVariables
>;
export const GetVAnchorWithdrawalEveryDaysDocument = gql`
  query GetVAnchorWithdrawalEveryDays(
    $endInterval: BigInt!
    $startInterval: BigInt!
    $vAnchorAddress: Bytes!
  ) {
    vanchorWithdrawalEveryDays(
      where: {
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
        vAnchorAddress: $vAnchorAddress
      }
    ) {
      startInterval
      withdrawal
      vAnchorAddress
      endInterval
    }
  }
` as unknown as DocumentNode<
  GetVAnchorWithdrawalEveryDaysQuery,
  GetVAnchorWithdrawalEveryDaysQueryVariables
>;
export const GetVAnchorsWithdrawalEveryDaysDocument = gql`
  query GetVAnchorsWithdrawalEveryDays(
    $endInterval: BigInt!
    $startInterval: BigInt!
    $vAnchorAddresses: [Bytes!]!
  ) {
    vanchorWithdrawalEveryDays(
      where: {
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
        vAnchorAddress_in: $vAnchorAddresses
      }
    ) {
      id
      startInterval
      withdrawal
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorsWithdrawalEveryDaysQuery,
  GetVAnchorsWithdrawalEveryDaysQueryVariables
>;
export const GetVAnchorWithdrawalByTokenEveryDaysDocument = gql`
  query GetVAnchorWithdrawalByTokenEveryDays(
    $tokenSymbol: String!
    $vAnchorAddress: Bytes!
    $endInterval: BigInt!
    $startInterval: BigInt!
  ) {
    vanchorWithdrawalByTokenEveryDays(
      where: {
        tokenSymbol: $tokenSymbol
        vAnchorAddress: $vAnchorAddress
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
      }
    ) {
      withdrawal
      startInterval
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorWithdrawalByTokenEveryDaysQuery,
  GetVAnchorWithdrawalByTokenEveryDaysQueryVariables
>;
export const GetVanchorsWithdrawalByDateRangeDocument = gql`
  query GetVanchorsWithdrawalByDateRange(
    $dateRange: [BigInt!]!
    $vAnchorAddresses: [Bytes!]!
  ) {
    vanchorWithdrawalEveryDays(
      where: {
        startInterval_in: $dateRange
        vAnchorAddress_in: $vAnchorAddresses
      }
      orderBy: startInterval
    ) {
      withdrawal
      vAnchorAddress
      startInterval
      endInterval
    }
  }
` as unknown as DocumentNode<
  GetVanchorsWithdrawalByDateRangeQuery,
  GetVanchorsWithdrawalByDateRangeQueryVariables
>;
export const GetVAnchorTotalWrappingFeeDocument = gql`
  query GetVAnchorTotalWrappingFee($vAnchorAddress: ID!) {
    vanchorTotalWrappingFee(id: $vAnchorAddress) {
      fees
    }
  }
` as unknown as DocumentNode<
  GetVAnchorTotalWrappingFeeQuery,
  GetVAnchorTotalWrappingFeeQueryVariables
>;
export const GetVAnchorsTotalWrappingFeesDocument = gql`
  query GetVAnchorsTotalWrappingFees($vAnchorAddresses: [String!]!) {
    vanchorTotalWrappingFees(where: { id_in: $vAnchorAddresses }) {
      id
      fees
    }
  }
` as unknown as DocumentNode<
  GetVAnchorsTotalWrappingFeesQuery,
  GetVAnchorsTotalWrappingFeesQueryVariables
>;
export const GetVAnchorTotalWrappingFeeByTokensDocument = gql`
  query GetVAnchorTotalWrappingFeeByTokens(
    $tokenSymbol: String!
    $vAnchorAddress: Bytes!
  ) {
    vanchorTotalWrappingFeeByTokens(
      first: 1
      where: { tokenSymbol: $tokenSymbol, vAnchorAddress: $vAnchorAddress }
    ) {
      fees
    }
  }
` as unknown as DocumentNode<
  GetVAnchorTotalWrappingFeeByTokensQuery,
  GetVAnchorTotalWrappingFeeByTokensQueryVariables
>;
export const GetVAnchorWrappingFeeEvery15MinsDocument = gql`
  query GetVAnchorWrappingFeeEvery15Mins(
    $endInterval: BigInt!
    $startInterval: BigInt!
    $vAnchorAddress: Bytes!
  ) {
    vanchorTotalWrappingFeeByTokenEvery15Mins(
      where: {
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
        vAnchorAddress: $vAnchorAddress
      }
    ) {
      startInterval
      fees
      vAnchorAddress
      endInterval
    }
  }
` as unknown as DocumentNode<
  GetVAnchorWrappingFeeEvery15MinsQuery,
  GetVAnchorWrappingFeeEvery15MinsQueryVariables
>;
export const GetVAnchorsWrappingFeeEvery15MinsDocument = gql`
  query GetVAnchorsWrappingFeeEvery15Mins(
    $endInterval: BigInt!
    $startInterval: BigInt!
    $vAnchorAddresses: [Bytes!]!
  ) {
    vanchorTotalWrappingFeeByTokenEvery15Mins(
      where: {
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
        vAnchorAddress_in: $vAnchorAddresses
      }
    ) {
      id
      startInterval
      fees
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorsWrappingFeeEvery15MinsQuery,
  GetVAnchorsWrappingFeeEvery15MinsQueryVariables
>;
export const GetVAnchorWrappingFeeByTokenEvery15MinsDocument = gql`
  query GetVAnchorWrappingFeeByTokenEvery15Mins(
    $endInterval: BigInt!
    $startInterval: BigInt!
    $vAnchorAddress: Bytes!
    $tokenSymbol: String!
  ) {
    vanchorTotalWrappingFeeByTokenEvery15Mins(
      where: {
        tokenSymbol: $tokenSymbol
        vAnchorAddress: $vAnchorAddress
        endInterval_lte: $endInterval
        startInterval_gte: $startInterval
      }
    ) {
      fees
      startInterval
      endInterval
      vAnchorAddress
    }
  }
` as unknown as DocumentNode<
  GetVAnchorWrappingFeeByTokenEvery15MinsQuery,
  GetVAnchorWrappingFeeByTokenEvery15MinsQueryVariables
>;

export type Requester<C = {}, E = unknown> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C
) => Promise<R> | AsyncIterable<R>;
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetVAnchorDepositByChain(
      variables: GetVAnchorDepositByChainQueryVariables,
      options?: C
    ): Promise<GetVAnchorDepositByChainQuery> {
      return requester<
        GetVAnchorDepositByChainQuery,
        GetVAnchorDepositByChainQueryVariables
      >(
        GetVAnchorDepositByChainDocument,
        variables,
        options
      ) as Promise<GetVAnchorDepositByChainQuery>;
    },
    GetVAnchorsDepositByChain(
      variables: GetVAnchorsDepositByChainQueryVariables,
      options?: C
    ): Promise<GetVAnchorsDepositByChainQuery> {
      return requester<
        GetVAnchorsDepositByChainQuery,
        GetVAnchorsDepositByChainQueryVariables
      >(
        GetVAnchorsDepositByChainDocument,
        variables,
        options
      ) as Promise<GetVAnchorsDepositByChainQuery>;
    },
    GetVAnchorDepositByTokens(
      variables: GetVAnchorDepositByTokensQueryVariables,
      options?: C
    ): Promise<GetVAnchorDepositByTokensQuery> {
      return requester<
        GetVAnchorDepositByTokensQuery,
        GetVAnchorDepositByTokensQueryVariables
      >(
        GetVAnchorDepositByTokensDocument,
        variables,
        options
      ) as Promise<GetVAnchorDepositByTokensQuery>;
    },
    GetVAnchorDepositEvery15Mins(
      variables: GetVAnchorDepositEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorDepositEvery15MinsQuery> {
      return requester<
        GetVAnchorDepositEvery15MinsQuery,
        GetVAnchorDepositEvery15MinsQueryVariables
      >(
        GetVAnchorDepositEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorDepositEvery15MinsQuery>;
    },
    GetVAnchorsDepositEvery15Mins(
      variables: GetVAnchorsDepositEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorsDepositEvery15MinsQuery> {
      return requester<
        GetVAnchorsDepositEvery15MinsQuery,
        GetVAnchorsDepositEvery15MinsQueryVariables
      >(
        GetVAnchorsDepositEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorsDepositEvery15MinsQuery>;
    },
    GetVAnchorDepositByTokenEvery15Mins(
      variables: GetVAnchorDepositByTokenEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorDepositByTokenEvery15MinsQuery> {
      return requester<
        GetVAnchorDepositByTokenEvery15MinsQuery,
        GetVAnchorDepositByTokenEvery15MinsQueryVariables
      >(
        GetVAnchorDepositByTokenEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorDepositByTokenEvery15MinsQuery>;
    },
    GetVAnchorDepositEveryDays(
      variables: GetVAnchorDepositEveryDaysQueryVariables,
      options?: C
    ): Promise<GetVAnchorDepositEveryDaysQuery> {
      return requester<
        GetVAnchorDepositEveryDaysQuery,
        GetVAnchorDepositEveryDaysQueryVariables
      >(
        GetVAnchorDepositEveryDaysDocument,
        variables,
        options
      ) as Promise<GetVAnchorDepositEveryDaysQuery>;
    },
    GetVAnchorsDepositEveryDays(
      variables: GetVAnchorsDepositEveryDaysQueryVariables,
      options?: C
    ): Promise<GetVAnchorsDepositEveryDaysQuery> {
      return requester<
        GetVAnchorsDepositEveryDaysQuery,
        GetVAnchorsDepositEveryDaysQueryVariables
      >(
        GetVAnchorsDepositEveryDaysDocument,
        variables,
        options
      ) as Promise<GetVAnchorsDepositEveryDaysQuery>;
    },
    GetVAnchorDepositByTokenEveryDays(
      variables: GetVAnchorDepositByTokenEveryDaysQueryVariables,
      options?: C
    ): Promise<GetVAnchorDepositByTokenEveryDaysQuery> {
      return requester<
        GetVAnchorDepositByTokenEveryDaysQuery,
        GetVAnchorDepositByTokenEveryDaysQueryVariables
      >(
        GetVAnchorDepositByTokenEveryDaysDocument,
        variables,
        options
      ) as Promise<GetVAnchorDepositByTokenEveryDaysQuery>;
    },
    GetVanchorsDepositByDateRange(
      variables: GetVanchorsDepositByDateRangeQueryVariables,
      options?: C
    ): Promise<GetVanchorsDepositByDateRangeQuery> {
      return requester<
        GetVanchorsDepositByDateRangeQuery,
        GetVanchorsDepositByDateRangeQueryVariables
      >(
        GetVanchorsDepositByDateRangeDocument,
        variables,
        options
      ) as Promise<GetVanchorsDepositByDateRangeQuery>;
    },
    GetVAnchorTotalRelayerFee(
      variables: GetVAnchorTotalRelayerFeeQueryVariables,
      options?: C
    ): Promise<GetVAnchorTotalRelayerFeeQuery> {
      return requester<
        GetVAnchorTotalRelayerFeeQuery,
        GetVAnchorTotalRelayerFeeQueryVariables
      >(
        GetVAnchorTotalRelayerFeeDocument,
        variables,
        options
      ) as Promise<GetVAnchorTotalRelayerFeeQuery>;
    },
    GetVAnchorsTotalRelayerFees(
      variables: GetVAnchorsTotalRelayerFeesQueryVariables,
      options?: C
    ): Promise<GetVAnchorsTotalRelayerFeesQuery> {
      return requester<
        GetVAnchorsTotalRelayerFeesQuery,
        GetVAnchorsTotalRelayerFeesQueryVariables
      >(
        GetVAnchorsTotalRelayerFeesDocument,
        variables,
        options
      ) as Promise<GetVAnchorsTotalRelayerFeesQuery>;
    },
    GetVAnchorTotalRelayerFeeByTokens(
      variables: GetVAnchorTotalRelayerFeeByTokensQueryVariables,
      options?: C
    ): Promise<GetVAnchorTotalRelayerFeeByTokensQuery> {
      return requester<
        GetVAnchorTotalRelayerFeeByTokensQuery,
        GetVAnchorTotalRelayerFeeByTokensQueryVariables
      >(
        GetVAnchorTotalRelayerFeeByTokensDocument,
        variables,
        options
      ) as Promise<GetVAnchorTotalRelayerFeeByTokensQuery>;
    },
    GetVAnchorRelayerFeeEvery15Mins(
      variables: GetVAnchorRelayerFeeEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorRelayerFeeEvery15MinsQuery> {
      return requester<
        GetVAnchorRelayerFeeEvery15MinsQuery,
        GetVAnchorRelayerFeeEvery15MinsQueryVariables
      >(
        GetVAnchorRelayerFeeEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorRelayerFeeEvery15MinsQuery>;
    },
    GetVAnchorsRelayerFeeEvery15Mins(
      variables: GetVAnchorsRelayerFeeEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorsRelayerFeeEvery15MinsQuery> {
      return requester<
        GetVAnchorsRelayerFeeEvery15MinsQuery,
        GetVAnchorsRelayerFeeEvery15MinsQueryVariables
      >(
        GetVAnchorsRelayerFeeEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorsRelayerFeeEvery15MinsQuery>;
    },
    GetVAnchorRelayerFeeByTokenEvery15Mins(
      variables: GetVAnchorRelayerFeeByTokenEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorRelayerFeeByTokenEvery15MinsQuery> {
      return requester<
        GetVAnchorRelayerFeeByTokenEvery15MinsQuery,
        GetVAnchorRelayerFeeByTokenEvery15MinsQueryVariables
      >(
        GetVAnchorRelayerFeeByTokenEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorRelayerFeeByTokenEvery15MinsQuery>;
    },
    GetVAnchorTotalValueLocked(
      variables: GetVAnchorTotalValueLockedQueryVariables,
      options?: C
    ): Promise<GetVAnchorTotalValueLockedQuery> {
      return requester<
        GetVAnchorTotalValueLockedQuery,
        GetVAnchorTotalValueLockedQueryVariables
      >(
        GetVAnchorTotalValueLockedDocument,
        variables,
        options
      ) as Promise<GetVAnchorTotalValueLockedQuery>;
    },
    GetVAnchorTotalValueLockeds(
      variables: GetVAnchorTotalValueLockedsQueryVariables,
      options?: C
    ): Promise<GetVAnchorTotalValueLockedsQuery> {
      return requester<
        GetVAnchorTotalValueLockedsQuery,
        GetVAnchorTotalValueLockedsQueryVariables
      >(
        GetVAnchorTotalValueLockedsDocument,
        variables,
        options
      ) as Promise<GetVAnchorTotalValueLockedsQuery>;
    },
    GetVAnchorTotalValueLockedByTokens(
      variables: GetVAnchorTotalValueLockedByTokensQueryVariables,
      options?: C
    ): Promise<GetVAnchorTotalValueLockedByTokensQuery> {
      return requester<
        GetVAnchorTotalValueLockedByTokensQuery,
        GetVAnchorTotalValueLockedByTokensQueryVariables
      >(
        GetVAnchorTotalValueLockedByTokensDocument,
        variables,
        options
      ) as Promise<GetVAnchorTotalValueLockedByTokensQuery>;
    },
    GetVAnchorTotalValueLockedEvery15Mins(
      variables: GetVAnchorTotalValueLockedEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorTotalValueLockedEvery15MinsQuery> {
      return requester<
        GetVAnchorTotalValueLockedEvery15MinsQuery,
        GetVAnchorTotalValueLockedEvery15MinsQueryVariables
      >(
        GetVAnchorTotalValueLockedEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorTotalValueLockedEvery15MinsQuery>;
    },
    GetVAnchorsTotalValueLockedEvery15Mins(
      variables: GetVAnchorsTotalValueLockedEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorsTotalValueLockedEvery15MinsQuery> {
      return requester<
        GetVAnchorsTotalValueLockedEvery15MinsQuery,
        GetVAnchorsTotalValueLockedEvery15MinsQueryVariables
      >(
        GetVAnchorsTotalValueLockedEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorsTotalValueLockedEvery15MinsQuery>;
    },
    GetVAnchorTotalValueLockedByTokenEvery15Mins(
      variables: GetVAnchorTotalValueLockedByTokenEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorTotalValueLockedByTokenEvery15MinsQuery> {
      return requester<
        GetVAnchorTotalValueLockedByTokenEvery15MinsQuery,
        GetVAnchorTotalValueLockedByTokenEvery15MinsQueryVariables
      >(
        GetVAnchorTotalValueLockedByTokenEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorTotalValueLockedByTokenEvery15MinsQuery>;
    },
    GetVAnchorTotalValueLockedEveryDays(
      variables: GetVAnchorTotalValueLockedEveryDaysQueryVariables,
      options?: C
    ): Promise<GetVAnchorTotalValueLockedEveryDaysQuery> {
      return requester<
        GetVAnchorTotalValueLockedEveryDaysQuery,
        GetVAnchorTotalValueLockedEveryDaysQueryVariables
      >(
        GetVAnchorTotalValueLockedEveryDaysDocument,
        variables,
        options
      ) as Promise<GetVAnchorTotalValueLockedEveryDaysQuery>;
    },
    GetVAnchorsTotalValueLockedEveryDays(
      variables: GetVAnchorsTotalValueLockedEveryDaysQueryVariables,
      options?: C
    ): Promise<GetVAnchorsTotalValueLockedEveryDaysQuery> {
      return requester<
        GetVAnchorsTotalValueLockedEveryDaysQuery,
        GetVAnchorsTotalValueLockedEveryDaysQueryVariables
      >(
        GetVAnchorsTotalValueLockedEveryDaysDocument,
        variables,
        options
      ) as Promise<GetVAnchorsTotalValueLockedEveryDaysQuery>;
    },
    GetVAnchorTotalValueLockedByTokenEveryDays(
      variables: GetVAnchorTotalValueLockedByTokenEveryDaysQueryVariables,
      options?: C
    ): Promise<GetVAnchorTotalValueLockedByTokenEveryDaysQuery> {
      return requester<
        GetVAnchorTotalValueLockedByTokenEveryDaysQuery,
        GetVAnchorTotalValueLockedByTokenEveryDaysQueryVariables
      >(
        GetVAnchorTotalValueLockedByTokenEveryDaysDocument,
        variables,
        options
      ) as Promise<GetVAnchorTotalValueLockedByTokenEveryDaysQuery>;
    },
    GetVAnchorsTotalValueLockedByDateRangeEveryDays(
      variables: GetVAnchorsTotalValueLockedByDateRangeEveryDaysQueryVariables,
      options?: C
    ): Promise<GetVAnchorsTotalValueLockedByDateRangeEveryDaysQuery> {
      return requester<
        GetVAnchorsTotalValueLockedByDateRangeEveryDaysQuery,
        GetVAnchorsTotalValueLockedByDateRangeEveryDaysQueryVariables
      >(
        GetVAnchorsTotalValueLockedByDateRangeEveryDaysDocument,
        variables,
        options
      ) as Promise<GetVAnchorsTotalValueLockedByDateRangeEveryDaysQuery>;
    },
    GetVAnchorVolumeByChain(
      variables: GetVAnchorVolumeByChainQueryVariables,
      options?: C
    ): Promise<GetVAnchorVolumeByChainQuery> {
      return requester<
        GetVAnchorVolumeByChainQuery,
        GetVAnchorVolumeByChainQueryVariables
      >(
        GetVAnchorVolumeByChainDocument,
        variables,
        options
      ) as Promise<GetVAnchorVolumeByChainQuery>;
    },
    GetVAnchorsVolumeByChain(
      variables: GetVAnchorsVolumeByChainQueryVariables,
      options?: C
    ): Promise<GetVAnchorsVolumeByChainQuery> {
      return requester<
        GetVAnchorsVolumeByChainQuery,
        GetVAnchorsVolumeByChainQueryVariables
      >(
        GetVAnchorsVolumeByChainDocument,
        variables,
        options
      ) as Promise<GetVAnchorsVolumeByChainQuery>;
    },
    GetVAnchorVolumeByTokens(
      variables: GetVAnchorVolumeByTokensQueryVariables,
      options?: C
    ): Promise<GetVAnchorVolumeByTokensQuery> {
      return requester<
        GetVAnchorVolumeByTokensQuery,
        GetVAnchorVolumeByTokensQueryVariables
      >(
        GetVAnchorVolumeByTokensDocument,
        variables,
        options
      ) as Promise<GetVAnchorVolumeByTokensQuery>;
    },
    GetVAnchorVolumeEvery15Mins(
      variables: GetVAnchorVolumeEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorVolumeEvery15MinsQuery> {
      return requester<
        GetVAnchorVolumeEvery15MinsQuery,
        GetVAnchorVolumeEvery15MinsQueryVariables
      >(
        GetVAnchorVolumeEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorVolumeEvery15MinsQuery>;
    },
    GetVAnchorsVolumeEvery15Mins(
      variables: GetVAnchorsVolumeEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorsVolumeEvery15MinsQuery> {
      return requester<
        GetVAnchorsVolumeEvery15MinsQuery,
        GetVAnchorsVolumeEvery15MinsQueryVariables
      >(
        GetVAnchorsVolumeEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorsVolumeEvery15MinsQuery>;
    },
    GetVAnchorVolumeByTokenEveryDays(
      variables: GetVAnchorVolumeByTokenEveryDaysQueryVariables,
      options?: C
    ): Promise<GetVAnchorVolumeByTokenEveryDaysQuery> {
      return requester<
        GetVAnchorVolumeByTokenEveryDaysQuery,
        GetVAnchorVolumeByTokenEveryDaysQueryVariables
      >(
        GetVAnchorVolumeByTokenEveryDaysDocument,
        variables,
        options
      ) as Promise<GetVAnchorVolumeByTokenEveryDaysQuery>;
    },
    GetVAnchorVolumeEveryDays(
      variables: GetVAnchorVolumeEveryDaysQueryVariables,
      options?: C
    ): Promise<GetVAnchorVolumeEveryDaysQuery> {
      return requester<
        GetVAnchorVolumeEveryDaysQuery,
        GetVAnchorVolumeEveryDaysQueryVariables
      >(
        GetVAnchorVolumeEveryDaysDocument,
        variables,
        options
      ) as Promise<GetVAnchorVolumeEveryDaysQuery>;
    },
    GetVAnchorsVolumeEveryDays(
      variables: GetVAnchorsVolumeEveryDaysQueryVariables,
      options?: C
    ): Promise<GetVAnchorsVolumeEveryDaysQuery> {
      return requester<
        GetVAnchorsVolumeEveryDaysQuery,
        GetVAnchorsVolumeEveryDaysQueryVariables
      >(
        GetVAnchorsVolumeEveryDaysDocument,
        variables,
        options
      ) as Promise<GetVAnchorsVolumeEveryDaysQuery>;
    },
    GetVAnchorVolumeByTokenEvery15Mins(
      variables: GetVAnchorVolumeByTokenEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorVolumeByTokenEvery15MinsQuery> {
      return requester<
        GetVAnchorVolumeByTokenEvery15MinsQuery,
        GetVAnchorVolumeByTokenEvery15MinsQueryVariables
      >(
        GetVAnchorVolumeByTokenEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorVolumeByTokenEvery15MinsQuery>;
    },
    GetVanchorsVolumeByDateRange(
      variables: GetVanchorsVolumeByDateRangeQueryVariables,
      options?: C
    ): Promise<GetVanchorsVolumeByDateRangeQuery> {
      return requester<
        GetVanchorsVolumeByDateRangeQuery,
        GetVanchorsVolumeByDateRangeQueryVariables
      >(
        GetVanchorsVolumeByDateRangeDocument,
        variables,
        options
      ) as Promise<GetVanchorsVolumeByDateRangeQuery>;
    },
    GetVAnchorWithdrawal(
      variables: GetVAnchorWithdrawalQueryVariables,
      options?: C
    ): Promise<GetVAnchorWithdrawalQuery> {
      return requester<
        GetVAnchorWithdrawalQuery,
        GetVAnchorWithdrawalQueryVariables
      >(
        GetVAnchorWithdrawalDocument,
        variables,
        options
      ) as Promise<GetVAnchorWithdrawalQuery>;
    },
    GetVAnchorsWithdrawals(
      variables: GetVAnchorsWithdrawalsQueryVariables,
      options?: C
    ): Promise<GetVAnchorsWithdrawalsQuery> {
      return requester<
        GetVAnchorsWithdrawalsQuery,
        GetVAnchorsWithdrawalsQueryVariables
      >(
        GetVAnchorsWithdrawalsDocument,
        variables,
        options
      ) as Promise<GetVAnchorsWithdrawalsQuery>;
    },
    GetVAnchorWithdrawalByTokens(
      variables: GetVAnchorWithdrawalByTokensQueryVariables,
      options?: C
    ): Promise<GetVAnchorWithdrawalByTokensQuery> {
      return requester<
        GetVAnchorWithdrawalByTokensQuery,
        GetVAnchorWithdrawalByTokensQueryVariables
      >(
        GetVAnchorWithdrawalByTokensDocument,
        variables,
        options
      ) as Promise<GetVAnchorWithdrawalByTokensQuery>;
    },
    GetVAnchorWithdrawalEvery15Mins(
      variables: GetVAnchorWithdrawalEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorWithdrawalEvery15MinsQuery> {
      return requester<
        GetVAnchorWithdrawalEvery15MinsQuery,
        GetVAnchorWithdrawalEvery15MinsQueryVariables
      >(
        GetVAnchorWithdrawalEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorWithdrawalEvery15MinsQuery>;
    },
    GetVAnchorsWithdrawalEvery15Mins(
      variables: GetVAnchorsWithdrawalEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorsWithdrawalEvery15MinsQuery> {
      return requester<
        GetVAnchorsWithdrawalEvery15MinsQuery,
        GetVAnchorsWithdrawalEvery15MinsQueryVariables
      >(
        GetVAnchorsWithdrawalEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorsWithdrawalEvery15MinsQuery>;
    },
    GetVAnchorWithdrawalByTokenEvery15Mins(
      variables: GetVAnchorWithdrawalByTokenEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorWithdrawalByTokenEvery15MinsQuery> {
      return requester<
        GetVAnchorWithdrawalByTokenEvery15MinsQuery,
        GetVAnchorWithdrawalByTokenEvery15MinsQueryVariables
      >(
        GetVAnchorWithdrawalByTokenEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorWithdrawalByTokenEvery15MinsQuery>;
    },
    GetVAnchorWithdrawalEveryDays(
      variables: GetVAnchorWithdrawalEveryDaysQueryVariables,
      options?: C
    ): Promise<GetVAnchorWithdrawalEveryDaysQuery> {
      return requester<
        GetVAnchorWithdrawalEveryDaysQuery,
        GetVAnchorWithdrawalEveryDaysQueryVariables
      >(
        GetVAnchorWithdrawalEveryDaysDocument,
        variables,
        options
      ) as Promise<GetVAnchorWithdrawalEveryDaysQuery>;
    },
    GetVAnchorsWithdrawalEveryDays(
      variables: GetVAnchorsWithdrawalEveryDaysQueryVariables,
      options?: C
    ): Promise<GetVAnchorsWithdrawalEveryDaysQuery> {
      return requester<
        GetVAnchorsWithdrawalEveryDaysQuery,
        GetVAnchorsWithdrawalEveryDaysQueryVariables
      >(
        GetVAnchorsWithdrawalEveryDaysDocument,
        variables,
        options
      ) as Promise<GetVAnchorsWithdrawalEveryDaysQuery>;
    },
    GetVAnchorWithdrawalByTokenEveryDays(
      variables: GetVAnchorWithdrawalByTokenEveryDaysQueryVariables,
      options?: C
    ): Promise<GetVAnchorWithdrawalByTokenEveryDaysQuery> {
      return requester<
        GetVAnchorWithdrawalByTokenEveryDaysQuery,
        GetVAnchorWithdrawalByTokenEveryDaysQueryVariables
      >(
        GetVAnchorWithdrawalByTokenEveryDaysDocument,
        variables,
        options
      ) as Promise<GetVAnchorWithdrawalByTokenEveryDaysQuery>;
    },
    GetVanchorsWithdrawalByDateRange(
      variables: GetVanchorsWithdrawalByDateRangeQueryVariables,
      options?: C
    ): Promise<GetVanchorsWithdrawalByDateRangeQuery> {
      return requester<
        GetVanchorsWithdrawalByDateRangeQuery,
        GetVanchorsWithdrawalByDateRangeQueryVariables
      >(
        GetVanchorsWithdrawalByDateRangeDocument,
        variables,
        options
      ) as Promise<GetVanchorsWithdrawalByDateRangeQuery>;
    },
    GetVAnchorTotalWrappingFee(
      variables: GetVAnchorTotalWrappingFeeQueryVariables,
      options?: C
    ): Promise<GetVAnchorTotalWrappingFeeQuery> {
      return requester<
        GetVAnchorTotalWrappingFeeQuery,
        GetVAnchorTotalWrappingFeeQueryVariables
      >(
        GetVAnchorTotalWrappingFeeDocument,
        variables,
        options
      ) as Promise<GetVAnchorTotalWrappingFeeQuery>;
    },
    GetVAnchorsTotalWrappingFees(
      variables: GetVAnchorsTotalWrappingFeesQueryVariables,
      options?: C
    ): Promise<GetVAnchorsTotalWrappingFeesQuery> {
      return requester<
        GetVAnchorsTotalWrappingFeesQuery,
        GetVAnchorsTotalWrappingFeesQueryVariables
      >(
        GetVAnchorsTotalWrappingFeesDocument,
        variables,
        options
      ) as Promise<GetVAnchorsTotalWrappingFeesQuery>;
    },
    GetVAnchorTotalWrappingFeeByTokens(
      variables: GetVAnchorTotalWrappingFeeByTokensQueryVariables,
      options?: C
    ): Promise<GetVAnchorTotalWrappingFeeByTokensQuery> {
      return requester<
        GetVAnchorTotalWrappingFeeByTokensQuery,
        GetVAnchorTotalWrappingFeeByTokensQueryVariables
      >(
        GetVAnchorTotalWrappingFeeByTokensDocument,
        variables,
        options
      ) as Promise<GetVAnchorTotalWrappingFeeByTokensQuery>;
    },
    GetVAnchorWrappingFeeEvery15Mins(
      variables: GetVAnchorWrappingFeeEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorWrappingFeeEvery15MinsQuery> {
      return requester<
        GetVAnchorWrappingFeeEvery15MinsQuery,
        GetVAnchorWrappingFeeEvery15MinsQueryVariables
      >(
        GetVAnchorWrappingFeeEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorWrappingFeeEvery15MinsQuery>;
    },
    GetVAnchorsWrappingFeeEvery15Mins(
      variables: GetVAnchorsWrappingFeeEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorsWrappingFeeEvery15MinsQuery> {
      return requester<
        GetVAnchorsWrappingFeeEvery15MinsQuery,
        GetVAnchorsWrappingFeeEvery15MinsQueryVariables
      >(
        GetVAnchorsWrappingFeeEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorsWrappingFeeEvery15MinsQuery>;
    },
    GetVAnchorWrappingFeeByTokenEvery15Mins(
      variables: GetVAnchorWrappingFeeByTokenEvery15MinsQueryVariables,
      options?: C
    ): Promise<GetVAnchorWrappingFeeByTokenEvery15MinsQuery> {
      return requester<
        GetVAnchorWrappingFeeByTokenEvery15MinsQuery,
        GetVAnchorWrappingFeeByTokenEvery15MinsQueryVariables
      >(
        GetVAnchorWrappingFeeByTokenEvery15MinsDocument,
        variables,
        options
      ) as Promise<GetVAnchorWrappingFeeByTokenEvery15MinsQuery>;
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
