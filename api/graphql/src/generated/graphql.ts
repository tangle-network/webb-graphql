import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { GraphQLError } from 'graphql-request/dist/types';
import { print } from 'graphql';
import gql from 'graphql-tag';
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
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigDecimal: { input: any; output: any };
  BigInt: { input: any; output: any };
  Bytes: { input: any; output: any };
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Deploy = {
  __typename?: 'Deploy';
  addr: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Deploy_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addr?: InputMaybe<Scalars['Bytes']['input']>;
  addr_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addr_gt?: InputMaybe<Scalars['Bytes']['input']>;
  addr_gte?: InputMaybe<Scalars['Bytes']['input']>;
  addr_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addr_lt?: InputMaybe<Scalars['Bytes']['input']>;
  addr_lte?: InputMaybe<Scalars['Bytes']['input']>;
  addr_not?: InputMaybe<Scalars['Bytes']['input']>;
  addr_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addr_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Deploy_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Deploy_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Deploy_OrderBy {
  Addr = 'addr',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
}

export type DepositTx = {
  __typename?: 'DepositTx';
  RelayerFee: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  depositor: Scalars['Bytes']['output'];
  finalValue: Scalars['BigInt']['output'];
  fullFee: Scalars['BigInt']['output'];
  fungibleTokenWrapper: FungibleTokenWrapper;
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  isWrapAndDeposit: Scalars['Boolean']['output'];
  transactionHash: Scalars['Bytes']['output'];
  vAnchor: VAnchor;
  value: Scalars['BigInt']['output'];
  wrappedToken: Token;
  wrappingFee: Scalars['BigInt']['output'];
};

export type DepositTx_Filter = {
  RelayerFee?: InputMaybe<Scalars['BigInt']['input']>;
  RelayerFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  RelayerFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  RelayerFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  RelayerFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  RelayerFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  RelayerFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  RelayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DepositTx_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositor?: InputMaybe<Scalars['Bytes']['input']>;
  depositor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  depositor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  depositor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  depositor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  depositor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  depositor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  depositor_not?: InputMaybe<Scalars['Bytes']['input']>;
  depositor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  depositor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  finalValue?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  finalValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fullFee?: InputMaybe<Scalars['BigInt']['input']>;
  fullFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fullFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fullFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fullFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fullFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fullFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  fullFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fungibleTokenWrapper?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_?: InputMaybe<FungibleTokenWrapper_Filter>;
  fungibleTokenWrapper_contains?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_ends_with?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_ends_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  fungibleTokenWrapper_gt?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_gte?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fungibleTokenWrapper_lt?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_lte?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_not?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_not_contains?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_not_contains_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  fungibleTokenWrapper_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_not_ends_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  fungibleTokenWrapper_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fungibleTokenWrapper_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_not_starts_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  fungibleTokenWrapper_starts_with?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_starts_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isWrapAndDeposit?: InputMaybe<Scalars['Boolean']['input']>;
  isWrapAndDeposit_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isWrapAndDeposit_not?: InputMaybe<Scalars['Boolean']['input']>;
  isWrapAndDeposit_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DepositTx_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vAnchor?: InputMaybe<Scalars['String']['input']>;
  vAnchor_?: InputMaybe<VAnchor_Filter>;
  vAnchor_contains?: InputMaybe<Scalars['String']['input']>;
  vAnchor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_ends_with?: InputMaybe<Scalars['String']['input']>;
  vAnchor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_gt?: InputMaybe<Scalars['String']['input']>;
  vAnchor_gte?: InputMaybe<Scalars['String']['input']>;
  vAnchor_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vAnchor_lt?: InputMaybe<Scalars['String']['input']>;
  vAnchor_lte?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_contains?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vAnchor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_starts_with?: InputMaybe<Scalars['String']['input']>;
  vAnchor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wrappedToken?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_?: InputMaybe<Token_Filter>;
  wrappedToken_contains?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_gt?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_gte?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wrappedToken_lt?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_lte?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_not?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wrappedToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wrappingFee?: InputMaybe<Scalars['BigInt']['input']>;
  wrappingFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  wrappingFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  wrappingFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wrappingFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  wrappingFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  wrappingFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  wrappingFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum DepositTx_OrderBy {
  RelayerFee = 'RelayerFee',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Depositor = 'depositor',
  FinalValue = 'finalValue',
  FullFee = 'fullFee',
  FungibleTokenWrapper = 'fungibleTokenWrapper',
  FungibleTokenWrapperAddress = 'fungibleTokenWrapper__address',
  FungibleTokenWrapperDecimals = 'fungibleTokenWrapper__decimals',
  FungibleTokenWrapperFeePercentage = 'fungibleTokenWrapper__feePercentage',
  FungibleTokenWrapperId = 'fungibleTokenWrapper__id',
  FungibleTokenWrapperName = 'fungibleTokenWrapper__name',
  FungibleTokenWrapperSymbol = 'fungibleTokenWrapper__symbol',
  GasUsed = 'gasUsed',
  Id = 'id',
  IsWrapAndDeposit = 'isWrapAndDeposit',
  TransactionHash = 'transactionHash',
  VAnchor = 'vAnchor',
  VAnchorAverageDepositAmount = 'vAnchor__averageDepositAmount',
  VAnchorAverageWithdrawAmount = 'vAnchor__averageWithdrawAmount',
  VAnchorChainId = 'vAnchor__chainId',
  VAnchorContractAddress = 'vAnchor__contractAddress',
  VAnchorId = 'vAnchor__id',
  VAnchorMaxDepositAmount = 'vAnchor__maxDepositAmount',
  VAnchorMaxWithdrawAmount = 'vAnchor__maxWithdrawAmount',
  VAnchorMinDepositAmount = 'vAnchor__minDepositAmount',
  VAnchorMinWithdrawAmount = 'vAnchor__minWithdrawAmount',
  VAnchorNumberOfDeposits = 'vAnchor__numberOfDeposits',
  VAnchorNumberOfWithdraws = 'vAnchor__numberOfWithdraws',
  VAnchorToken = 'vAnchor__token',
  VAnchorTypedChainId = 'vAnchor__typedChainId',
  Value = 'value',
  WrappedToken = 'wrappedToken',
  WrappedTokenAddress = 'wrappedToken__address',
  WrappedTokenDecimals = 'wrappedToken__decimals',
  WrappedTokenId = 'wrappedToken__id',
  WrappedTokenIsFungibleTokenWrapper = 'wrappedToken__isFungibleTokenWrapper',
  WrappedTokenName = 'wrappedToken__name',
  WrappedTokenSymbol = 'wrappedToken__symbol',
  WrappingFee = 'wrappingFee',
}

export type EdgeAddition = {
  __typename?: 'EdgeAddition';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  chainID: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  latestLeafIndex: Scalars['BigInt']['output'];
  merkleRoot: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type EdgeAddition_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EdgeAddition_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainID?: InputMaybe<Scalars['BigInt']['input']>;
  chainID_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainID_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainID_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainID_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainID_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainID_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainID_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  latestLeafIndex?: InputMaybe<Scalars['BigInt']['input']>;
  latestLeafIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  latestLeafIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  latestLeafIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestLeafIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  latestLeafIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  latestLeafIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  latestLeafIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  merkleRoot?: InputMaybe<Scalars['BigInt']['input']>;
  merkleRoot_gt?: InputMaybe<Scalars['BigInt']['input']>;
  merkleRoot_gte?: InputMaybe<Scalars['BigInt']['input']>;
  merkleRoot_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  merkleRoot_lt?: InputMaybe<Scalars['BigInt']['input']>;
  merkleRoot_lte?: InputMaybe<Scalars['BigInt']['input']>;
  merkleRoot_not?: InputMaybe<Scalars['BigInt']['input']>;
  merkleRoot_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<EdgeAddition_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum EdgeAddition_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ChainId = 'chainID',
  Id = 'id',
  LatestLeafIndex = 'latestLeafIndex',
  MerkleRoot = 'merkleRoot',
  TransactionHash = 'transactionHash',
}

export type EdgeUpdate = {
  __typename?: 'EdgeUpdate';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  chainID: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  latestLeafIndex: Scalars['BigInt']['output'];
  merkleRoot: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type EdgeUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EdgeUpdate_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainID?: InputMaybe<Scalars['BigInt']['input']>;
  chainID_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainID_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainID_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainID_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainID_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainID_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainID_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  latestLeafIndex?: InputMaybe<Scalars['BigInt']['input']>;
  latestLeafIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  latestLeafIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  latestLeafIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestLeafIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  latestLeafIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  latestLeafIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  latestLeafIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  merkleRoot?: InputMaybe<Scalars['BigInt']['input']>;
  merkleRoot_gt?: InputMaybe<Scalars['BigInt']['input']>;
  merkleRoot_gte?: InputMaybe<Scalars['BigInt']['input']>;
  merkleRoot_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  merkleRoot_lt?: InputMaybe<Scalars['BigInt']['input']>;
  merkleRoot_lte?: InputMaybe<Scalars['BigInt']['input']>;
  merkleRoot_not?: InputMaybe<Scalars['BigInt']['input']>;
  merkleRoot_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<EdgeUpdate_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum EdgeUpdate_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ChainId = 'chainID',
  Id = 'id',
  LatestLeafIndex = 'latestLeafIndex',
  MerkleRoot = 'merkleRoot',
  TransactionHash = 'transactionHash',
}

export type FungibleTokenWrapper = {
  __typename?: 'FungibleTokenWrapper';
  address: Scalars['Bytes']['output'];
  decimals: Scalars['Int']['output'];
  feePercentage: Scalars['Int']['output'];
  id: Scalars['Bytes']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  tokens: Array<Token>;
};

export type FungibleTokenWrapperTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Token_Filter>;
};

export type FungibleTokenWrapper_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<FungibleTokenWrapper_Filter>>>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  feePercentage?: InputMaybe<Scalars['Int']['input']>;
  feePercentage_gt?: InputMaybe<Scalars['Int']['input']>;
  feePercentage_gte?: InputMaybe<Scalars['Int']['input']>;
  feePercentage_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  feePercentage_lt?: InputMaybe<Scalars['Int']['input']>;
  feePercentage_lte?: InputMaybe<Scalars['Int']['input']>;
  feePercentage_not?: InputMaybe<Scalars['Int']['input']>;
  feePercentage_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<FungibleTokenWrapper_Filter>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokens?: InputMaybe<Array<Scalars['String']['input']>>;
  tokens_?: InputMaybe<Token_Filter>;
  tokens_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tokens_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  tokens_not?: InputMaybe<Array<Scalars['String']['input']>>;
  tokens_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum FungibleTokenWrapper_OrderBy {
  Address = 'address',
  Decimals = 'decimals',
  FeePercentage = 'feePercentage',
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Tokens = 'tokens',
}

export type Insertion = {
  __typename?: 'Insertion';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  commitment: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  leafIndex: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Insertion_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Insertion_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commitment?: InputMaybe<Scalars['BigInt']['input']>;
  commitment_gt?: InputMaybe<Scalars['BigInt']['input']>;
  commitment_gte?: InputMaybe<Scalars['BigInt']['input']>;
  commitment_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commitment_lt?: InputMaybe<Scalars['BigInt']['input']>;
  commitment_lte?: InputMaybe<Scalars['BigInt']['input']>;
  commitment_not?: InputMaybe<Scalars['BigInt']['input']>;
  commitment_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  leafIndex?: InputMaybe<Scalars['BigInt']['input']>;
  leafIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  leafIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  leafIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  leafIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  leafIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  leafIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  leafIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Insertion_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Insertion_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Commitment = 'commitment',
  Id = 'id',
  LeafIndex = 'leafIndex',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash',
}

export type NewCommitment = {
  __typename?: 'NewCommitment';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  commitment: Scalars['BigInt']['output'];
  encryptedOutput: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  leafIndex: Scalars['BigInt']['output'];
  subTreeIndex: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type NewCommitment_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewCommitment_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commitment?: InputMaybe<Scalars['BigInt']['input']>;
  commitment_gt?: InputMaybe<Scalars['BigInt']['input']>;
  commitment_gte?: InputMaybe<Scalars['BigInt']['input']>;
  commitment_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  commitment_lt?: InputMaybe<Scalars['BigInt']['input']>;
  commitment_lte?: InputMaybe<Scalars['BigInt']['input']>;
  commitment_not?: InputMaybe<Scalars['BigInt']['input']>;
  commitment_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  encryptedOutput?: InputMaybe<Scalars['Bytes']['input']>;
  encryptedOutput_contains?: InputMaybe<Scalars['Bytes']['input']>;
  encryptedOutput_gt?: InputMaybe<Scalars['Bytes']['input']>;
  encryptedOutput_gte?: InputMaybe<Scalars['Bytes']['input']>;
  encryptedOutput_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  encryptedOutput_lt?: InputMaybe<Scalars['Bytes']['input']>;
  encryptedOutput_lte?: InputMaybe<Scalars['Bytes']['input']>;
  encryptedOutput_not?: InputMaybe<Scalars['Bytes']['input']>;
  encryptedOutput_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  encryptedOutput_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  leafIndex?: InputMaybe<Scalars['BigInt']['input']>;
  leafIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  leafIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  leafIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  leafIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  leafIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  leafIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  leafIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<NewCommitment_Filter>>>;
  subTreeIndex?: InputMaybe<Scalars['BigInt']['input']>;
  subTreeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  subTreeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  subTreeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subTreeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  subTreeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  subTreeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  subTreeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum NewCommitment_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Commitment = 'commitment',
  EncryptedOutput = 'encryptedOutput',
  Id = 'id',
  LeafIndex = 'leafIndex',
  SubTreeIndex = 'subTreeIndex',
  TransactionHash = 'transactionHash',
}

export type NewNullifier = {
  __typename?: 'NewNullifier';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  nullifier: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type NewNullifier_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewNullifier_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nullifier?: InputMaybe<Scalars['BigInt']['input']>;
  nullifier_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nullifier_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nullifier_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nullifier_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nullifier_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nullifier_not?: InputMaybe<Scalars['BigInt']['input']>;
  nullifier_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<NewNullifier_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum NewNullifier_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Nullifier = 'nullifier',
  TransactionHash = 'transactionHash',
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type PublicKey = {
  __typename?: 'PublicKey';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type PublicKey_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PublicKey_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  key?: InputMaybe<Scalars['Bytes']['input']>;
  key_contains?: InputMaybe<Scalars['Bytes']['input']>;
  key_gt?: InputMaybe<Scalars['Bytes']['input']>;
  key_gte?: InputMaybe<Scalars['Bytes']['input']>;
  key_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  key_lt?: InputMaybe<Scalars['Bytes']['input']>;
  key_lte?: InputMaybe<Scalars['Bytes']['input']>;
  key_not?: InputMaybe<Scalars['Bytes']['input']>;
  key_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  key_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PublicKey_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PublicKey_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Key = 'key',
  Owner = 'owner',
  TransactionHash = 'transactionHash',
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  deploy?: Maybe<Deploy>;
  deploys: Array<Deploy>;
  depositTx?: Maybe<DepositTx>;
  depositTxes: Array<DepositTx>;
  edgeAddition?: Maybe<EdgeAddition>;
  edgeAdditions: Array<EdgeAddition>;
  edgeUpdate?: Maybe<EdgeUpdate>;
  edgeUpdates: Array<EdgeUpdate>;
  fungibleTokenWrapper?: Maybe<FungibleTokenWrapper>;
  fungibleTokenWrappers: Array<FungibleTokenWrapper>;
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
  transferTx?: Maybe<TransferTx>;
  transferTxes: Array<TransferTx>;
  vanchor?: Maybe<VAnchor>;
  vanchorDayData?: Maybe<VAnchorDayData>;
  vanchorDayDatas: Array<VAnchorDayData>;
  vanchorVolume?: Maybe<VAnchorVolume>;
  vanchorVolumeComposition?: Maybe<VAnchorVolumeComposition>;
  vanchorVolumeCompositions: Array<VAnchorVolumeComposition>;
  vanchorVolumes: Array<VAnchorVolume>;
  vanchors: Array<VAnchor>;
  withdrawTx?: Maybe<WithdrawTx>;
  withdrawTxes: Array<WithdrawTx>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryDeployArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDeploysArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deploy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deploy_Filter>;
};

export type QueryDepositTxArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDepositTxesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DepositTx_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DepositTx_Filter>;
};

export type QueryEdgeAdditionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEdgeAdditionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EdgeAddition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EdgeAddition_Filter>;
};

export type QueryEdgeUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEdgeUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EdgeUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EdgeUpdate_Filter>;
};

export type QueryFungibleTokenWrapperArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFungibleTokenWrappersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FungibleTokenWrapper_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FungibleTokenWrapper_Filter>;
};

export type QueryInsertionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryInsertionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Insertion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Insertion_Filter>;
};

export type QueryNewCommitmentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryNewCommitmentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewCommitment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NewCommitment_Filter>;
};

export type QueryNewNullifierArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryNewNullifiersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewNullifier_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NewNullifier_Filter>;
};

export type QueryPublicKeyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPublicKeysArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PublicKey_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PublicKey_Filter>;
};

export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type QueryTransferTxArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTransferTxesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferTx_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferTx_Filter>;
};

export type QueryVanchorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVanchorDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVanchorDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VAnchorDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VAnchorDayData_Filter>;
};

export type QueryVanchorVolumeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVanchorVolumeCompositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVanchorVolumeCompositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VAnchorVolumeComposition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VAnchorVolumeComposition_Filter>;
};

export type QueryVanchorVolumesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VAnchorVolume_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VAnchorVolume_Filter>;
};

export type QueryVanchorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VAnchor_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VAnchor_Filter>;
};

export type QueryWithdrawTxArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryWithdrawTxesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WithdrawTx_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WithdrawTx_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  deploy?: Maybe<Deploy>;
  deploys: Array<Deploy>;
  depositTx?: Maybe<DepositTx>;
  depositTxes: Array<DepositTx>;
  edgeAddition?: Maybe<EdgeAddition>;
  edgeAdditions: Array<EdgeAddition>;
  edgeUpdate?: Maybe<EdgeUpdate>;
  edgeUpdates: Array<EdgeUpdate>;
  fungibleTokenWrapper?: Maybe<FungibleTokenWrapper>;
  fungibleTokenWrappers: Array<FungibleTokenWrapper>;
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
  transferTx?: Maybe<TransferTx>;
  transferTxes: Array<TransferTx>;
  vanchor?: Maybe<VAnchor>;
  vanchorDayData?: Maybe<VAnchorDayData>;
  vanchorDayDatas: Array<VAnchorDayData>;
  vanchorVolume?: Maybe<VAnchorVolume>;
  vanchorVolumeComposition?: Maybe<VAnchorVolumeComposition>;
  vanchorVolumeCompositions: Array<VAnchorVolumeComposition>;
  vanchorVolumes: Array<VAnchorVolume>;
  vanchors: Array<VAnchor>;
  withdrawTx?: Maybe<WithdrawTx>;
  withdrawTxes: Array<WithdrawTx>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionDeployArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDeploysArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deploy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deploy_Filter>;
};

export type SubscriptionDepositTxArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDepositTxesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DepositTx_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DepositTx_Filter>;
};

export type SubscriptionEdgeAdditionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEdgeAdditionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EdgeAddition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EdgeAddition_Filter>;
};

export type SubscriptionEdgeUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEdgeUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EdgeUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EdgeUpdate_Filter>;
};

export type SubscriptionFungibleTokenWrapperArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFungibleTokenWrappersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FungibleTokenWrapper_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FungibleTokenWrapper_Filter>;
};

export type SubscriptionInsertionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionInsertionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Insertion_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Insertion_Filter>;
};

export type SubscriptionNewCommitmentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionNewCommitmentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewCommitment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NewCommitment_Filter>;
};

export type SubscriptionNewNullifierArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionNewNullifiersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewNullifier_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NewNullifier_Filter>;
};

export type SubscriptionPublicKeyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPublicKeysArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PublicKey_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PublicKey_Filter>;
};

export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type SubscriptionTransferTxArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTransferTxesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferTx_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferTx_Filter>;
};

export type SubscriptionVanchorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVanchorDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVanchorDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VAnchorDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VAnchorDayData_Filter>;
};

export type SubscriptionVanchorVolumeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVanchorVolumeCompositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVanchorVolumeCompositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VAnchorVolumeComposition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VAnchorVolumeComposition_Filter>;
};

export type SubscriptionVanchorVolumesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VAnchorVolume_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VAnchorVolume_Filter>;
};

export type SubscriptionVanchorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VAnchor_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VAnchor_Filter>;
};

export type SubscriptionWithdrawTxArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionWithdrawTxesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WithdrawTx_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WithdrawTx_Filter>;
};

export type Token = {
  __typename?: 'Token';
  address: Scalars['Bytes']['output'];
  decimals: Scalars['Int']['output'];
  id: Scalars['Bytes']['output'];
  isFungibleTokenWrapper: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
};

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  isFungibleTokenWrapper?: InputMaybe<Scalars['Boolean']['input']>;
  isFungibleTokenWrapper_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isFungibleTokenWrapper_not?: InputMaybe<Scalars['Boolean']['input']>;
  isFungibleTokenWrapper_not_in?: InputMaybe<
    Array<Scalars['Boolean']['input']>
  >;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Token_OrderBy {
  Address = 'address',
  Decimals = 'decimals',
  Id = 'id',
  IsFungibleTokenWrapper = 'isFungibleTokenWrapper',
  Name = 'name',
  Symbol = 'symbol',
}

export type TransferTx = {
  __typename?: 'TransferTx';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  contractAddress: Scalars['Bytes']['output'];
  fee: Scalars['BigInt']['output'];
  finalValue: Scalars['BigInt']['output'];
  from: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  to: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  value: Scalars['BigInt']['output'];
};

export type TransferTx_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferTx_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contractAddress?: InputMaybe<Scalars['Bytes']['input']>;
  contractAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  contractAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  contractAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  contractAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  contractAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  contractAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  contractAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  contractAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  contractAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  fee?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  finalValue?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  finalValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TransferTx_Filter>>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum TransferTx_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ContractAddress = 'contractAddress',
  Fee = 'fee',
  FinalValue = 'finalValue',
  From = 'from',
  Id = 'id',
  To = 'to',
  TransactionHash = 'transactionHash',
  Value = 'value',
}

export type VAnchor = {
  __typename?: 'VAnchor';
  averageDepositAmount: Scalars['BigInt']['output'];
  averageWithdrawAmount: Scalars['BigInt']['output'];
  chainId: Scalars['BigInt']['output'];
  contractAddress: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  maxDepositAmount: Scalars['BigInt']['output'];
  maxWithdrawAmount: Scalars['BigInt']['output'];
  minDepositAmount: Scalars['BigInt']['output'];
  minWithdrawAmount: Scalars['BigInt']['output'];
  numberOfDeposits: Scalars['BigInt']['output'];
  numberOfWithdraws: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  typedChainId: Scalars['Bytes']['output'];
  volumeComposition: Array<VAnchorVolume>;
};

export type VAnchorVolumeCompositionArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VAnchorVolume_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VAnchorVolume_Filter>;
};

export type VAnchorDayData = {
  __typename?: 'VAnchorDayData';
  composition: Array<VAnchorVolumeComposition>;
  date: Scalars['Int']['output'];
  depositTx: Array<DepositTx>;
  id: Scalars['ID']['output'];
  numberOfDeposits: Scalars['BigInt']['output'];
  numberOfTransfers: Scalars['BigInt']['output'];
  numberOfWithdraws: Scalars['BigInt']['output'];
  startBlockNumber: Scalars['BigInt']['output'];
  transferTx: Array<TransferTx>;
  vAnchor: VAnchor;
  withdrawTx: Array<WithdrawTx>;
};

export type VAnchorDayDataCompositionArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VAnchorVolumeComposition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VAnchorVolumeComposition_Filter>;
};

export type VAnchorDayDataDepositTxArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DepositTx_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DepositTx_Filter>;
};

export type VAnchorDayDataTransferTxArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferTx_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TransferTx_Filter>;
};

export type VAnchorDayDataWithdrawTxArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WithdrawTx_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WithdrawTx_Filter>;
};

export type VAnchorDayData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorDayData_Filter>>>;
  composition?: InputMaybe<Array<Scalars['String']['input']>>;
  composition_?: InputMaybe<VAnchorVolumeComposition_Filter>;
  composition_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  composition_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  composition_not?: InputMaybe<Array<Scalars['String']['input']>>;
  composition_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  composition_not_contains_nocase?: InputMaybe<
    Array<Scalars['String']['input']>
  >;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_not?: InputMaybe<Scalars['Int']['input']>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  depositTx?: InputMaybe<Array<Scalars['String']['input']>>;
  depositTx_?: InputMaybe<DepositTx_Filter>;
  depositTx_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  depositTx_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  depositTx_not?: InputMaybe<Array<Scalars['String']['input']>>;
  depositTx_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  depositTx_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  numberOfDeposits?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfDeposits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfDeposits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfDeposits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberOfDeposits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfDeposits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfDeposits_not?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfDeposits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberOfTransfers?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfTransfers_gt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfTransfers_gte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfTransfers_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberOfTransfers_lt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfTransfers_lte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfTransfers_not?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfTransfers_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberOfWithdraws?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfWithdraws_gt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfWithdraws_gte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfWithdraws_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberOfWithdraws_lt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfWithdraws_lte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfWithdraws_not?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfWithdraws_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorDayData_Filter>>>;
  startBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  startBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  startBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferTx?: InputMaybe<Array<Scalars['String']['input']>>;
  transferTx_?: InputMaybe<TransferTx_Filter>;
  transferTx_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  transferTx_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  transferTx_not?: InputMaybe<Array<Scalars['String']['input']>>;
  transferTx_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  transferTx_not_contains_nocase?: InputMaybe<
    Array<Scalars['String']['input']>
  >;
  vAnchor?: InputMaybe<Scalars['String']['input']>;
  vAnchor_?: InputMaybe<VAnchor_Filter>;
  vAnchor_contains?: InputMaybe<Scalars['String']['input']>;
  vAnchor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_ends_with?: InputMaybe<Scalars['String']['input']>;
  vAnchor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_gt?: InputMaybe<Scalars['String']['input']>;
  vAnchor_gte?: InputMaybe<Scalars['String']['input']>;
  vAnchor_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vAnchor_lt?: InputMaybe<Scalars['String']['input']>;
  vAnchor_lte?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_contains?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vAnchor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_starts_with?: InputMaybe<Scalars['String']['input']>;
  vAnchor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  withdrawTx?: InputMaybe<Array<Scalars['String']['input']>>;
  withdrawTx_?: InputMaybe<WithdrawTx_Filter>;
  withdrawTx_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  withdrawTx_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  withdrawTx_not?: InputMaybe<Array<Scalars['String']['input']>>;
  withdrawTx_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  withdrawTx_not_contains_nocase?: InputMaybe<
    Array<Scalars['String']['input']>
  >;
};

export enum VAnchorDayData_OrderBy {
  Composition = 'composition',
  Date = 'date',
  DepositTx = 'depositTx',
  Id = 'id',
  NumberOfDeposits = 'numberOfDeposits',
  NumberOfTransfers = 'numberOfTransfers',
  NumberOfWithdraws = 'numberOfWithdraws',
  StartBlockNumber = 'startBlockNumber',
  TransferTx = 'transferTx',
  VAnchor = 'vAnchor',
  VAnchorAverageDepositAmount = 'vAnchor__averageDepositAmount',
  VAnchorAverageWithdrawAmount = 'vAnchor__averageWithdrawAmount',
  VAnchorChainId = 'vAnchor__chainId',
  VAnchorContractAddress = 'vAnchor__contractAddress',
  VAnchorId = 'vAnchor__id',
  VAnchorMaxDepositAmount = 'vAnchor__maxDepositAmount',
  VAnchorMaxWithdrawAmount = 'vAnchor__maxWithdrawAmount',
  VAnchorMinDepositAmount = 'vAnchor__minDepositAmount',
  VAnchorMinWithdrawAmount = 'vAnchor__minWithdrawAmount',
  VAnchorNumberOfDeposits = 'vAnchor__numberOfDeposits',
  VAnchorNumberOfWithdraws = 'vAnchor__numberOfWithdraws',
  VAnchorToken = 'vAnchor__token',
  VAnchorTypedChainId = 'vAnchor__typedChainId',
  WithdrawTx = 'withdrawTx',
}

export type VAnchorVolume = {
  __typename?: 'VAnchorVolume';
  finalValueLocked: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  token: Token;
  totalFees: Scalars['BigInt']['output'];
  totalWrappingFees: Scalars['BigInt']['output'];
  vAnchor: VAnchor;
  valueLocked: Scalars['BigInt']['output'];
};

export type VAnchorVolumeComposition = {
  __typename?: 'VAnchorVolumeComposition';
  VAnchorDayData: VAnchorDayData;
  fees: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  relayerFees: Scalars['BigInt']['output'];
  token: Token;
  unWrappingFees: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
  wrappingFees: Scalars['BigInt']['output'];
};

export type VAnchorVolumeComposition_Filter = {
  VAnchorDayData?: InputMaybe<Scalars['String']['input']>;
  VAnchorDayData_?: InputMaybe<VAnchorDayData_Filter>;
  VAnchorDayData_contains?: InputMaybe<Scalars['String']['input']>;
  VAnchorDayData_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  VAnchorDayData_ends_with?: InputMaybe<Scalars['String']['input']>;
  VAnchorDayData_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  VAnchorDayData_gt?: InputMaybe<Scalars['String']['input']>;
  VAnchorDayData_gte?: InputMaybe<Scalars['String']['input']>;
  VAnchorDayData_in?: InputMaybe<Array<Scalars['String']['input']>>;
  VAnchorDayData_lt?: InputMaybe<Scalars['String']['input']>;
  VAnchorDayData_lte?: InputMaybe<Scalars['String']['input']>;
  VAnchorDayData_not?: InputMaybe<Scalars['String']['input']>;
  VAnchorDayData_not_contains?: InputMaybe<Scalars['String']['input']>;
  VAnchorDayData_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  VAnchorDayData_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  VAnchorDayData_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  VAnchorDayData_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  VAnchorDayData_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  VAnchorDayData_not_starts_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  VAnchorDayData_starts_with?: InputMaybe<Scalars['String']['input']>;
  VAnchorDayData_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorVolumeComposition_Filter>>>;
  fees?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_not?: InputMaybe<Scalars['BigInt']['input']>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorVolumeComposition_Filter>>>;
  relayerFees?: InputMaybe<Scalars['BigInt']['input']>;
  relayerFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  relayerFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  relayerFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  relayerFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  relayerFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  relayerFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  relayerFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unWrappingFees?: InputMaybe<Scalars['BigInt']['input']>;
  unWrappingFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unWrappingFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unWrappingFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unWrappingFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unWrappingFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unWrappingFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  unWrappingFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wrappingFees?: InputMaybe<Scalars['BigInt']['input']>;
  wrappingFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  wrappingFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  wrappingFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wrappingFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  wrappingFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  wrappingFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  wrappingFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum VAnchorVolumeComposition_OrderBy {
  VAnchorDayData = 'VAnchorDayData',
  VAnchorDayDataDate = 'VAnchorDayData__date',
  VAnchorDayDataId = 'VAnchorDayData__id',
  VAnchorDayDataNumberOfDeposits = 'VAnchorDayData__numberOfDeposits',
  VAnchorDayDataNumberOfTransfers = 'VAnchorDayData__numberOfTransfers',
  VAnchorDayDataNumberOfWithdraws = 'VAnchorDayData__numberOfWithdraws',
  VAnchorDayDataStartBlockNumber = 'VAnchorDayData__startBlockNumber',
  Fees = 'fees',
  Id = 'id',
  RelayerFees = 'relayerFees',
  Token = 'token',
  TokenAddress = 'token__address',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenIsFungibleTokenWrapper = 'token__isFungibleTokenWrapper',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  UnWrappingFees = 'unWrappingFees',
  Volume = 'volume',
  WrappingFees = 'wrappingFees',
}

export type VAnchorVolume_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchorVolume_Filter>>>;
  finalValueLocked?: InputMaybe<Scalars['BigInt']['input']>;
  finalValueLocked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  finalValueLocked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  finalValueLocked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  finalValueLocked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  finalValueLocked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  finalValueLocked_not?: InputMaybe<Scalars['BigInt']['input']>;
  finalValueLocked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VAnchorVolume_Filter>>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalFees?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalWrappingFees?: InputMaybe<Scalars['BigInt']['input']>;
  totalWrappingFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWrappingFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWrappingFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalWrappingFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWrappingFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWrappingFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalWrappingFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vAnchor?: InputMaybe<Scalars['String']['input']>;
  vAnchor_?: InputMaybe<VAnchor_Filter>;
  vAnchor_contains?: InputMaybe<Scalars['String']['input']>;
  vAnchor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_ends_with?: InputMaybe<Scalars['String']['input']>;
  vAnchor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_gt?: InputMaybe<Scalars['String']['input']>;
  vAnchor_gte?: InputMaybe<Scalars['String']['input']>;
  vAnchor_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vAnchor_lt?: InputMaybe<Scalars['String']['input']>;
  vAnchor_lte?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_contains?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vAnchor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_starts_with?: InputMaybe<Scalars['String']['input']>;
  vAnchor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  valueLocked?: InputMaybe<Scalars['BigInt']['input']>;
  valueLocked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  valueLocked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  valueLocked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  valueLocked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  valueLocked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  valueLocked_not?: InputMaybe<Scalars['BigInt']['input']>;
  valueLocked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum VAnchorVolume_OrderBy {
  FinalValueLocked = 'finalValueLocked',
  Id = 'id',
  Token = 'token',
  TokenAddress = 'token__address',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenIsFungibleTokenWrapper = 'token__isFungibleTokenWrapper',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TotalFees = 'totalFees',
  TotalWrappingFees = 'totalWrappingFees',
  VAnchor = 'vAnchor',
  VAnchorAverageDepositAmount = 'vAnchor__averageDepositAmount',
  VAnchorAverageWithdrawAmount = 'vAnchor__averageWithdrawAmount',
  VAnchorChainId = 'vAnchor__chainId',
  VAnchorContractAddress = 'vAnchor__contractAddress',
  VAnchorId = 'vAnchor__id',
  VAnchorMaxDepositAmount = 'vAnchor__maxDepositAmount',
  VAnchorMaxWithdrawAmount = 'vAnchor__maxWithdrawAmount',
  VAnchorMinDepositAmount = 'vAnchor__minDepositAmount',
  VAnchorMinWithdrawAmount = 'vAnchor__minWithdrawAmount',
  VAnchorNumberOfDeposits = 'vAnchor__numberOfDeposits',
  VAnchorNumberOfWithdraws = 'vAnchor__numberOfWithdraws',
  VAnchorToken = 'vAnchor__token',
  VAnchorTypedChainId = 'vAnchor__typedChainId',
  ValueLocked = 'valueLocked',
}

export type VAnchor_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VAnchor_Filter>>>;
  averageDepositAmount?: InputMaybe<Scalars['BigInt']['input']>;
  averageDepositAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  averageDepositAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  averageDepositAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  averageDepositAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  averageDepositAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  averageDepositAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  averageDepositAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  averageWithdrawAmount?: InputMaybe<Scalars['BigInt']['input']>;
  averageWithdrawAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  averageWithdrawAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  averageWithdrawAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  averageWithdrawAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  averageWithdrawAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  averageWithdrawAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  averageWithdrawAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contractAddress?: InputMaybe<Scalars['Bytes']['input']>;
  contractAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  contractAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  contractAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  contractAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  contractAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  contractAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  contractAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  contractAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  contractAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  maxDepositAmount?: InputMaybe<Scalars['BigInt']['input']>;
  maxDepositAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxDepositAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxDepositAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxDepositAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxDepositAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxDepositAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxDepositAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxWithdrawAmount?: InputMaybe<Scalars['BigInt']['input']>;
  maxWithdrawAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxWithdrawAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxWithdrawAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxWithdrawAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxWithdrawAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxWithdrawAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxWithdrawAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minDepositAmount?: InputMaybe<Scalars['BigInt']['input']>;
  minDepositAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minDepositAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minDepositAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minDepositAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minDepositAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minDepositAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  minDepositAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minWithdrawAmount?: InputMaybe<Scalars['BigInt']['input']>;
  minWithdrawAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minWithdrawAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minWithdrawAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minWithdrawAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minWithdrawAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minWithdrawAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  minWithdrawAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberOfDeposits?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfDeposits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfDeposits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfDeposits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberOfDeposits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfDeposits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfDeposits_not?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfDeposits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberOfWithdraws?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfWithdraws_gt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfWithdraws_gte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfWithdraws_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numberOfWithdraws_lt?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfWithdraws_lte?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfWithdraws_not?: InputMaybe<Scalars['BigInt']['input']>;
  numberOfWithdraws_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VAnchor_Filter>>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  typedChainId?: InputMaybe<Scalars['Bytes']['input']>;
  typedChainId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  typedChainId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  typedChainId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  typedChainId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  typedChainId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  typedChainId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  typedChainId_not?: InputMaybe<Scalars['Bytes']['input']>;
  typedChainId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  typedChainId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  volumeComposition?: InputMaybe<Array<Scalars['String']['input']>>;
  volumeComposition_?: InputMaybe<VAnchorVolume_Filter>;
  volumeComposition_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  volumeComposition_contains_nocase?: InputMaybe<
    Array<Scalars['String']['input']>
  >;
  volumeComposition_not?: InputMaybe<Array<Scalars['String']['input']>>;
  volumeComposition_not_contains?: InputMaybe<
    Array<Scalars['String']['input']>
  >;
  volumeComposition_not_contains_nocase?: InputMaybe<
    Array<Scalars['String']['input']>
  >;
};

export enum VAnchor_OrderBy {
  AverageDepositAmount = 'averageDepositAmount',
  AverageWithdrawAmount = 'averageWithdrawAmount',
  ChainId = 'chainId',
  ContractAddress = 'contractAddress',
  Id = 'id',
  MaxDepositAmount = 'maxDepositAmount',
  MaxWithdrawAmount = 'maxWithdrawAmount',
  MinDepositAmount = 'minDepositAmount',
  MinWithdrawAmount = 'minWithdrawAmount',
  NumberOfDeposits = 'numberOfDeposits',
  NumberOfWithdraws = 'numberOfWithdraws',
  Token = 'token',
  TypedChainId = 'typedChainId',
  VolumeComposition = 'volumeComposition',
}

export type WithdrawTx = {
  __typename?: 'WithdrawTx';
  RelayerFee: Scalars['BigInt']['output'];
  beneficiary: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  finalValue: Scalars['BigInt']['output'];
  fullFee: Scalars['BigInt']['output'];
  fungibleTokenWrapper: FungibleTokenWrapper;
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  isUnwrapAndWithdraw: Scalars['Boolean']['output'];
  transactionHash: Scalars['Bytes']['output'];
  unWrappingFee: Scalars['BigInt']['output'];
  vAnchor: VAnchor;
  value: Scalars['BigInt']['output'];
  wrappedToken: Token;
};

export type WithdrawTx_Filter = {
  RelayerFee?: InputMaybe<Scalars['BigInt']['input']>;
  RelayerFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  RelayerFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  RelayerFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  RelayerFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  RelayerFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  RelayerFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  RelayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<WithdrawTx_Filter>>>;
  beneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  finalValue?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  finalValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  finalValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fullFee?: InputMaybe<Scalars['BigInt']['input']>;
  fullFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fullFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fullFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fullFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fullFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fullFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  fullFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fungibleTokenWrapper?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_?: InputMaybe<FungibleTokenWrapper_Filter>;
  fungibleTokenWrapper_contains?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_ends_with?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_ends_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  fungibleTokenWrapper_gt?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_gte?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fungibleTokenWrapper_lt?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_lte?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_not?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_not_contains?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_not_contains_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  fungibleTokenWrapper_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_not_ends_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  fungibleTokenWrapper_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fungibleTokenWrapper_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_not_starts_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  fungibleTokenWrapper_starts_with?: InputMaybe<Scalars['String']['input']>;
  fungibleTokenWrapper_starts_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isUnwrapAndWithdraw?: InputMaybe<Scalars['Boolean']['input']>;
  isUnwrapAndWithdraw_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isUnwrapAndWithdraw_not?: InputMaybe<Scalars['Boolean']['input']>;
  isUnwrapAndWithdraw_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<WithdrawTx_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  unWrappingFee?: InputMaybe<Scalars['BigInt']['input']>;
  unWrappingFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unWrappingFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unWrappingFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unWrappingFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unWrappingFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unWrappingFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  unWrappingFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vAnchor?: InputMaybe<Scalars['String']['input']>;
  vAnchor_?: InputMaybe<VAnchor_Filter>;
  vAnchor_contains?: InputMaybe<Scalars['String']['input']>;
  vAnchor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_ends_with?: InputMaybe<Scalars['String']['input']>;
  vAnchor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_gt?: InputMaybe<Scalars['String']['input']>;
  vAnchor_gte?: InputMaybe<Scalars['String']['input']>;
  vAnchor_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vAnchor_lt?: InputMaybe<Scalars['String']['input']>;
  vAnchor_lte?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_contains?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vAnchor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vAnchor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vAnchor_starts_with?: InputMaybe<Scalars['String']['input']>;
  vAnchor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wrappedToken?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_?: InputMaybe<Token_Filter>;
  wrappedToken_contains?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_gt?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_gte?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wrappedToken_lt?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_lte?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_not?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wrappedToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  wrappedToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum WithdrawTx_OrderBy {
  RelayerFee = 'RelayerFee',
  Beneficiary = 'beneficiary',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  FinalValue = 'finalValue',
  FullFee = 'fullFee',
  FungibleTokenWrapper = 'fungibleTokenWrapper',
  FungibleTokenWrapperAddress = 'fungibleTokenWrapper__address',
  FungibleTokenWrapperDecimals = 'fungibleTokenWrapper__decimals',
  FungibleTokenWrapperFeePercentage = 'fungibleTokenWrapper__feePercentage',
  FungibleTokenWrapperId = 'fungibleTokenWrapper__id',
  FungibleTokenWrapperName = 'fungibleTokenWrapper__name',
  FungibleTokenWrapperSymbol = 'fungibleTokenWrapper__symbol',
  GasUsed = 'gasUsed',
  Id = 'id',
  IsUnwrapAndWithdraw = 'isUnwrapAndWithdraw',
  TransactionHash = 'transactionHash',
  UnWrappingFee = 'unWrappingFee',
  VAnchor = 'vAnchor',
  VAnchorAverageDepositAmount = 'vAnchor__averageDepositAmount',
  VAnchorAverageWithdrawAmount = 'vAnchor__averageWithdrawAmount',
  VAnchorChainId = 'vAnchor__chainId',
  VAnchorContractAddress = 'vAnchor__contractAddress',
  VAnchorId = 'vAnchor__id',
  VAnchorMaxDepositAmount = 'vAnchor__maxDepositAmount',
  VAnchorMaxWithdrawAmount = 'vAnchor__maxWithdrawAmount',
  VAnchorMinDepositAmount = 'vAnchor__minDepositAmount',
  VAnchorMinWithdrawAmount = 'vAnchor__minWithdrawAmount',
  VAnchorNumberOfDeposits = 'vAnchor__numberOfDeposits',
  VAnchorNumberOfWithdraws = 'vAnchor__numberOfWithdraws',
  VAnchorToken = 'vAnchor__token',
  VAnchorTypedChainId = 'vAnchor__typedChainId',
  Value = 'value',
  WrappedToken = 'wrappedToken',
  WrappedTokenAddress = 'wrappedToken__address',
  WrappedTokenDecimals = 'wrappedToken__decimals',
  WrappedTokenId = 'wrappedToken__id',
  WrappedTokenIsFungibleTokenWrapper = 'wrappedToken__isFungibleTokenWrapper',
  WrappedTokenName = 'wrappedToken__name',
  WrappedTokenSymbol = 'wrappedToken__symbol',
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny',
}

export type TokenDetailsFragmentFragment = {
  __typename?: 'Token';
  id: any;
  address: any;
  name: string;
  decimals: number;
  symbol: string;
  isFungibleTokenWrapper: boolean;
};

export type FungibleTokenWrapperDetailsFragment = {
  __typename?: 'FungibleTokenWrapper';
  id: any;
  name: string;
  decimals: number;
  symbol: string;
};

export type FungibleTokenWrapperBasicDetailsFragment = {
  __typename?: 'VAnchor';
  id: string;
  chainId: any;
  typedChainId: any;
  contractAddress: any;
};

export type VAnchorDetailsFragmentFragment = {
  __typename?: 'VAnchor';
  id: string;
  chainId: any;
  typedChainId: any;
  contractAddress: any;
  token: any;
  numberOfDeposits: any;
  numberOfWithdraws: any;
  minDepositAmount: any;
  maxDepositAmount: any;
  averageDepositAmount: any;
  volumeComposition: Array<{
    __typename?: 'VAnchorVolume';
    id: string;
    finalValueLocked: any;
    valueLocked: any;
    totalFees: any;
    totalWrappingFees: any;
    token: {
      __typename?: 'Token';
      id: any;
      address: any;
      name: string;
      decimals: number;
      symbol: string;
      isFungibleTokenWrapper: boolean;
    };
  }>;
};

export type VAnchorListQueryVariables = Exact<{ [key: string]: never }>;

export type VAnchorListQuery = {
  __typename?: 'Query';
  vanchors: Array<{
    __typename?: 'VAnchor';
    id: string;
    chainId: any;
    typedChainId: any;
    contractAddress: any;
    token: any;
    numberOfDeposits: any;
    numberOfWithdraws: any;
    minDepositAmount: any;
    maxDepositAmount: any;
    averageDepositAmount: any;
    volumeComposition: Array<{
      __typename?: 'VAnchorVolume';
      id: string;
      finalValueLocked: any;
      valueLocked: any;
      totalFees: any;
      totalWrappingFees: any;
      token: {
        __typename?: 'Token';
        id: any;
        address: any;
        name: string;
        decimals: number;
        symbol: string;
        isFungibleTokenWrapper: boolean;
      };
    }>;
  }>;
};

export type VAnchorDetailsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type VAnchorDetailsQuery = {
  __typename?: 'Query';
  vanchor?: {
    __typename?: 'VAnchor';
    id: string;
    chainId: any;
    typedChainId: any;
    contractAddress: any;
    token: any;
    numberOfDeposits: any;
    numberOfWithdraws: any;
    minDepositAmount: any;
    maxDepositAmount: any;
    averageDepositAmount: any;
    volumeComposition: Array<{
      __typename?: 'VAnchorVolume';
      id: string;
      finalValueLocked: any;
      valueLocked: any;
      totalFees: any;
      totalWrappingFees: any;
      token: {
        __typename?: 'Token';
        id: any;
        address: any;
        name: string;
        decimals: number;
        symbol: string;
        isFungibleTokenWrapper: boolean;
      };
    }>;
  } | null;
};

export type AllTokensQueryVariables = Exact<{ [key: string]: never }>;

export type AllTokensQuery = {
  __typename?: 'Query';
  tokens: Array<{
    __typename?: 'Token';
    id: any;
    address: any;
    name: string;
    decimals: number;
    symbol: string;
    isFungibleTokenWrapper: boolean;
  }>;
};

export type DayDetailsQueryVariables = Exact<{
  vAnchorId: Scalars['String']['input'];
}>;

export type DayDetailsQuery = {
  __typename?: 'Query';
  vanchorDayDatas: Array<{
    __typename?: 'VAnchorDayData';
    id: string;
    date: number;
    numberOfDeposits: any;
    numberOfTransfers: any;
    numberOfWithdraws: any;
    composition: Array<{
      __typename?: 'VAnchorVolumeComposition';
      id: string;
      unWrappingFees: any;
      wrappingFees: any;
      fees: any;
      relayerFees: any;
      volume: any;
      token: {
        __typename?: 'Token';
        id: any;
        address: any;
        name: string;
        decimals: number;
        symbol: string;
        isFungibleTokenWrapper: boolean;
      };
    }>;
  }>;
};

export type DepositTxFragmentFragment = {
  __typename?: 'DepositTx';
  id: string;
  depositor: any;
  value: any;
  finalValue: any;
  isWrapAndDeposit: boolean;
  fullFee: any;
  wrappingFee: any;
  RelayerFee: any;
  transactionHash: any;
  gasUsed: any;
  blockTimestamp: any;
  blockNumber: any;
  wrappedToken: {
    __typename?: 'Token';
    id: any;
    address: any;
    name: string;
    decimals: number;
    symbol: string;
    isFungibleTokenWrapper: boolean;
  };
  fungibleTokenWrapper: {
    __typename?: 'FungibleTokenWrapper';
    id: any;
    name: string;
    decimals: number;
    symbol: string;
  };
  vAnchor: {
    __typename?: 'VAnchor';
    id: string;
    chainId: any;
    typedChainId: any;
    contractAddress: any;
    token: any;
    numberOfDeposits: any;
    numberOfWithdraws: any;
    minDepositAmount: any;
    maxDepositAmount: any;
    averageDepositAmount: any;
    volumeComposition: Array<{
      __typename?: 'VAnchorVolume';
      id: string;
      finalValueLocked: any;
      valueLocked: any;
      totalFees: any;
      totalWrappingFees: any;
      token: {
        __typename?: 'Token';
        id: any;
        address: any;
        name: string;
        decimals: number;
        symbol: string;
        isFungibleTokenWrapper: boolean;
      };
    }>;
  };
};

export type WithdrawTxFragmentFragment = {
  __typename?: 'WithdrawTx';
  id: string;
  beneficiary: any;
  value: any;
  finalValue: any;
  isUnwrapAndWithdraw: boolean;
  fullFee: any;
  unWrappingFee: any;
  RelayerFee: any;
  transactionHash: any;
  gasUsed: any;
  blockTimestamp: any;
  blockNumber: any;
  wrappedToken: {
    __typename?: 'Token';
    id: any;
    address: any;
    name: string;
    decimals: number;
    symbol: string;
    isFungibleTokenWrapper: boolean;
  };
  fungibleTokenWrapper: {
    __typename?: 'FungibleTokenWrapper';
    id: any;
    name: string;
    decimals: number;
    symbol: string;
  };
  vAnchor: {
    __typename?: 'VAnchor';
    id: string;
    chainId: any;
    typedChainId: any;
    contractAddress: any;
    token: any;
    numberOfDeposits: any;
    numberOfWithdraws: any;
    minDepositAmount: any;
    maxDepositAmount: any;
    averageDepositAmount: any;
    volumeComposition: Array<{
      __typename?: 'VAnchorVolume';
      id: string;
      finalValueLocked: any;
      valueLocked: any;
      totalFees: any;
      totalWrappingFees: any;
      token: {
        __typename?: 'Token';
        id: any;
        address: any;
        name: string;
        decimals: number;
        symbol: string;
        isFungibleTokenWrapper: boolean;
      };
    }>;
  };
};

export type DepositTXesListingQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  block?: InputMaybe<Block_Height>;
  orderBy?: InputMaybe<DepositTx_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DepositTx_Filter>;
  subgraphError?: _SubgraphErrorPolicy_;
}>;

export type DepositTXesListingQuery = {
  __typename?: 'Query';
  depositTxes: Array<{
    __typename?: 'DepositTx';
    id: string;
    depositor: any;
    value: any;
    finalValue: any;
    isWrapAndDeposit: boolean;
    fullFee: any;
    wrappingFee: any;
    RelayerFee: any;
    transactionHash: any;
    gasUsed: any;
    blockTimestamp: any;
    blockNumber: any;
    wrappedToken: {
      __typename?: 'Token';
      id: any;
      address: any;
      name: string;
      decimals: number;
      symbol: string;
      isFungibleTokenWrapper: boolean;
    };
    fungibleTokenWrapper: {
      __typename?: 'FungibleTokenWrapper';
      id: any;
      name: string;
      decimals: number;
      symbol: string;
    };
    vAnchor: {
      __typename?: 'VAnchor';
      id: string;
      chainId: any;
      typedChainId: any;
      contractAddress: any;
      token: any;
      numberOfDeposits: any;
      numberOfWithdraws: any;
      minDepositAmount: any;
      maxDepositAmount: any;
      averageDepositAmount: any;
      volumeComposition: Array<{
        __typename?: 'VAnchorVolume';
        id: string;
        finalValueLocked: any;
        valueLocked: any;
        totalFees: any;
        totalWrappingFees: any;
        token: {
          __typename?: 'Token';
          id: any;
          address: any;
          name: string;
          decimals: number;
          symbol: string;
          isFungibleTokenWrapper: boolean;
        };
      }>;
    };
  }>;
};

export type WithdrawTXesListingQueryVariables = Exact<{
  where?: InputMaybe<WithdrawTx_Filter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WithdrawTx_OrderBy>;
  block?: InputMaybe<Block_Height>;
  orderDirection?: InputMaybe<OrderDirection>;
  subgraphError?: _SubgraphErrorPolicy_;
}>;

export type WithdrawTXesListingQuery = {
  __typename?: 'Query';
  withdrawTxes: Array<{
    __typename?: 'WithdrawTx';
    id: string;
    beneficiary: any;
    value: any;
    finalValue: any;
    isUnwrapAndWithdraw: boolean;
    fullFee: any;
    unWrappingFee: any;
    RelayerFee: any;
    transactionHash: any;
    gasUsed: any;
    blockTimestamp: any;
    blockNumber: any;
    wrappedToken: {
      __typename?: 'Token';
      id: any;
      address: any;
      name: string;
      decimals: number;
      symbol: string;
      isFungibleTokenWrapper: boolean;
    };
    fungibleTokenWrapper: {
      __typename?: 'FungibleTokenWrapper';
      id: any;
      name: string;
      decimals: number;
      symbol: string;
    };
    vAnchor: {
      __typename?: 'VAnchor';
      id: string;
      chainId: any;
      typedChainId: any;
      contractAddress: any;
      token: any;
      numberOfDeposits: any;
      numberOfWithdraws: any;
      minDepositAmount: any;
      maxDepositAmount: any;
      averageDepositAmount: any;
      volumeComposition: Array<{
        __typename?: 'VAnchorVolume';
        id: string;
        finalValueLocked: any;
        valueLocked: any;
        totalFees: any;
        totalWrappingFees: any;
        token: {
          __typename?: 'Token';
          id: any;
          address: any;
          name: string;
          decimals: number;
          symbol: string;
          isFungibleTokenWrapper: boolean;
        };
      }>;
    };
  }>;
};

export type DepositTxDetailsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type DepositTxDetailsQuery = {
  __typename?: 'Query';
  depositTx?: {
    __typename?: 'DepositTx';
    id: string;
    depositor: any;
    value: any;
    finalValue: any;
    isWrapAndDeposit: boolean;
    fullFee: any;
    wrappingFee: any;
    RelayerFee: any;
    transactionHash: any;
    gasUsed: any;
    blockTimestamp: any;
    blockNumber: any;
    wrappedToken: {
      __typename?: 'Token';
      id: any;
      address: any;
      name: string;
      decimals: number;
      symbol: string;
      isFungibleTokenWrapper: boolean;
    };
    fungibleTokenWrapper: {
      __typename?: 'FungibleTokenWrapper';
      id: any;
      name: string;
      decimals: number;
      symbol: string;
    };
    vAnchor: {
      __typename?: 'VAnchor';
      id: string;
      chainId: any;
      typedChainId: any;
      contractAddress: any;
      token: any;
      numberOfDeposits: any;
      numberOfWithdraws: any;
      minDepositAmount: any;
      maxDepositAmount: any;
      averageDepositAmount: any;
      volumeComposition: Array<{
        __typename?: 'VAnchorVolume';
        id: string;
        finalValueLocked: any;
        valueLocked: any;
        totalFees: any;
        totalWrappingFees: any;
        token: {
          __typename?: 'Token';
          id: any;
          address: any;
          name: string;
          decimals: number;
          symbol: string;
          isFungibleTokenWrapper: boolean;
        };
      }>;
    };
  } | null;
};

export type WithdrawTxDetailsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type WithdrawTxDetailsQuery = {
  __typename?: 'Query';
  withdrawTx?: {
    __typename?: 'WithdrawTx';
    id: string;
    beneficiary: any;
    value: any;
    finalValue: any;
    isUnwrapAndWithdraw: boolean;
    fullFee: any;
    unWrappingFee: any;
    RelayerFee: any;
    transactionHash: any;
    gasUsed: any;
    blockTimestamp: any;
    blockNumber: any;
    wrappedToken: {
      __typename?: 'Token';
      id: any;
      address: any;
      name: string;
      decimals: number;
      symbol: string;
      isFungibleTokenWrapper: boolean;
    };
    fungibleTokenWrapper: {
      __typename?: 'FungibleTokenWrapper';
      id: any;
      name: string;
      decimals: number;
      symbol: string;
    };
    vAnchor: {
      __typename?: 'VAnchor';
      id: string;
      chainId: any;
      typedChainId: any;
      contractAddress: any;
      token: any;
      numberOfDeposits: any;
      numberOfWithdraws: any;
      minDepositAmount: any;
      maxDepositAmount: any;
      averageDepositAmount: any;
      volumeComposition: Array<{
        __typename?: 'VAnchorVolume';
        id: string;
        finalValueLocked: any;
        valueLocked: any;
        totalFees: any;
        totalWrappingFees: any;
        token: {
          __typename?: 'Token';
          id: any;
          address: any;
          name: string;
          decimals: number;
          symbol: string;
          isFungibleTokenWrapper: boolean;
        };
      }>;
    };
  } | null;
};

export type DiscoverVAnchorsQueryVariables = Exact<{ [key: string]: never }>;

export type DiscoverVAnchorsQuery = {
  __typename?: 'Query';
  vanchors: Array<{ __typename?: 'VAnchor'; id: string }>;
};

export const FungibleTokenWrapperBasicDetailsFragmentDoc = gql`
  fragment FungibleTokenWrapperBasicDetails on VAnchor {
    id
    chainId
    typedChainId
    contractAddress
  }
`;
export const TokenDetailsFragmentFragmentDoc = gql`
  fragment TokenDetailsFragment on Token {
    id
    address
    name
    decimals
    symbol
    isFungibleTokenWrapper
  }
`;
export const FungibleTokenWrapperDetailsFragmentDoc = gql`
  fragment FungibleTokenWrapperDetails on FungibleTokenWrapper {
    id
    name
    decimals
    symbol
  }
`;
export const VAnchorDetailsFragmentFragmentDoc = gql`
  fragment VAnchorDetailsFragment on VAnchor {
    id
    chainId
    typedChainId
    contractAddress
    token
    volumeComposition {
      id
      token {
        ...TokenDetailsFragment
      }
      finalValueLocked
      valueLocked
      totalFees
      totalWrappingFees
    }
    numberOfDeposits
    numberOfWithdraws
    minDepositAmount
    maxDepositAmount
    averageDepositAmount
  }
  ${TokenDetailsFragmentFragmentDoc}
`;
export const DepositTxFragmentFragmentDoc = gql`
  fragment DepositTxFragment on DepositTx {
    id
    depositor
    wrappedToken {
      ...TokenDetailsFragment
    }
    value
    finalValue
    isWrapAndDeposit
    fullFee
    wrappingFee
    RelayerFee
    fungibleTokenWrapper {
      ...FungibleTokenWrapperDetails
    }
    vAnchor {
      ...VAnchorDetailsFragment
    }
    transactionHash
    gasUsed
    blockTimestamp
    blockNumber
  }
  ${TokenDetailsFragmentFragmentDoc}
  ${FungibleTokenWrapperDetailsFragmentDoc}
  ${VAnchorDetailsFragmentFragmentDoc}
`;
export const WithdrawTxFragmentFragmentDoc = gql`
  fragment WithdrawTxFragment on WithdrawTx {
    id
    beneficiary
    wrappedToken {
      ...TokenDetailsFragment
    }
    value
    finalValue
    isUnwrapAndWithdraw
    fullFee
    unWrappingFee
    RelayerFee
    fungibleTokenWrapper {
      ...FungibleTokenWrapperDetails
    }
    vAnchor {
      ...VAnchorDetailsFragment
    }
    transactionHash
    gasUsed
    blockTimestamp
    blockNumber
  }
  ${TokenDetailsFragmentFragmentDoc}
  ${FungibleTokenWrapperDetailsFragmentDoc}
  ${VAnchorDetailsFragmentFragmentDoc}
`;
export const VAnchorListDocument = gql`
  query vAnchorList {
    vanchors {
      ...VAnchorDetailsFragment
    }
  }
  ${VAnchorDetailsFragmentFragmentDoc}
`;
export const VAnchorDetailsDocument = gql`
  query vAnchorDetails($id: ID!) {
    vanchor(id: $id) {
      ...VAnchorDetailsFragment
    }
  }
  ${VAnchorDetailsFragmentFragmentDoc}
`;
export const AllTokensDocument = gql`
  query allTokens {
    tokens {
      ...TokenDetailsFragment
    }
  }
  ${TokenDetailsFragmentFragmentDoc}
`;
export const DayDetailsDocument = gql`
  query dayDetails($vAnchorId: String!) {
    vanchorDayDatas(
      first: 1
      orderBy: date
      orderDirection: asc
      where: { vAnchor: $vAnchorId }
    ) {
      id
      date
      composition {
        id
        unWrappingFees
        wrappingFees
        fees
        relayerFees
        token {
          ...TokenDetailsFragment
        }
        volume
      }
      numberOfDeposits
      numberOfTransfers
      numberOfWithdraws
    }
  }
  ${TokenDetailsFragmentFragmentDoc}
`;
export const DepositTXesListingDocument = gql`
  query depositTXesListing(
    $first: Int = 10
    $skip: Int = 0
    $block: Block_height
    $orderBy: DepositTx_orderBy
    $orderDirection: OrderDirection
    $where: DepositTx_filter
    $subgraphError: _SubgraphErrorPolicy_! = deny
  ) {
    depositTxes(
      block: $block
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      skip: $skip
      subgraphError: $subgraphError
      where: $where
    ) {
      ...DepositTxFragment
    }
  }
  ${DepositTxFragmentFragmentDoc}
`;
export const WithdrawTXesListingDocument = gql`
  query withdrawTXesListing(
    $where: WithdrawTx_filter
    $first: Int = 100
    $skip: Int = 0
    $orderBy: WithdrawTx_orderBy
    $block: Block_height
    $orderDirection: OrderDirection
    $subgraphError: _SubgraphErrorPolicy_! = deny
  ) {
    withdrawTxes(
      block: $block
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      skip: $skip
      subgraphError: $subgraphError
      where: $where
    ) {
      ...WithdrawTxFragment
    }
  }
  ${WithdrawTxFragmentFragmentDoc}
`;
export const DepositTxDetailsDocument = gql`
  query depositTXDetails($id: ID!) {
    depositTx(id: $id) {
      ...DepositTxFragment
    }
  }
  ${DepositTxFragmentFragmentDoc}
`;
export const WithdrawTxDetailsDocument = gql`
  query withdrawTXDetails($id: ID!) {
    withdrawTx(id: $id) {
      ...WithdrawTxFragment
    }
  }
  ${WithdrawTxFragmentFragmentDoc}
`;
export const DiscoverVAnchorsDocument = gql`
  query discoverVAnchors {
    vanchors {
      id
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();
const VAnchorListDocumentString = print(VAnchorListDocument);
const VAnchorDetailsDocumentString = print(VAnchorDetailsDocument);
const AllTokensDocumentString = print(AllTokensDocument);
const DayDetailsDocumentString = print(DayDetailsDocument);
const DepositTXesListingDocumentString = print(DepositTXesListingDocument);
const WithdrawTXesListingDocumentString = print(WithdrawTXesListingDocument);
const DepositTxDetailsDocumentString = print(DepositTxDetailsDocument);
const WithdrawTxDetailsDocumentString = print(WithdrawTxDetailsDocument);
const DiscoverVAnchorsDocumentString = print(DiscoverVAnchorsDocument);
export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    vAnchorList(
      variables?: VAnchorListQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
      data?: VAnchorListQuery | undefined;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
      errors?: GraphQLError[] | undefined;
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<VAnchorListQuery>(
            VAnchorListDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'vAnchorList',
      );
    },
    vAnchorDetails(
      variables: VAnchorDetailsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
      data?: VAnchorDetailsQuery | undefined;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
      errors?: GraphQLError[] | undefined;
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<VAnchorDetailsQuery>(
            VAnchorDetailsDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'vAnchorDetails',
      );
    },
    allTokens(
      variables?: AllTokensQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
      data?: AllTokensQuery | undefined;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
      errors?: GraphQLError[] | undefined;
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<AllTokensQuery>(
            AllTokensDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'allTokens',
      );
    },
    dayDetails(
      variables: DayDetailsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
      data?: DayDetailsQuery | undefined;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
      errors?: GraphQLError[] | undefined;
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<DayDetailsQuery>(
            DayDetailsDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'dayDetails',
      );
    },
    depositTXesListing(
      variables?: DepositTXesListingQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
      data?: DepositTXesListingQuery | undefined;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
      errors?: GraphQLError[] | undefined;
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<DepositTXesListingQuery>(
            DepositTXesListingDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'depositTXesListing',
      );
    },
    withdrawTXesListing(
      variables?: WithdrawTXesListingQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
      data?: WithdrawTXesListingQuery | undefined;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
      errors?: GraphQLError[] | undefined;
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<WithdrawTXesListingQuery>(
            WithdrawTXesListingDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'withdrawTXesListing',
      );
    },
    depositTXDetails(
      variables: DepositTxDetailsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
      data?: DepositTxDetailsQuery | undefined;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
      errors?: GraphQLError[] | undefined;
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<DepositTxDetailsQuery>(
            DepositTxDetailsDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'depositTXDetails',
      );
    },
    withdrawTXDetails(
      variables: WithdrawTxDetailsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
      data?: WithdrawTxDetailsQuery | undefined;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
      errors?: GraphQLError[] | undefined;
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<WithdrawTxDetailsQuery>(
            WithdrawTxDetailsDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'withdrawTXDetails',
      );
    },
    discoverVAnchors(
      variables?: DiscoverVAnchorsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<{
      data?: DiscoverVAnchorsQuery | undefined;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
      errors?: GraphQLError[] | undefined;
    }> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.rawRequest<DiscoverVAnchorsQuery>(
            DiscoverVAnchorsDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'discoverVAnchors',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
