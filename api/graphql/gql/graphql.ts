
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Deploy_orderBy {
    addr = "addr",
    blockNumber = "blockNumber",
    blockTimestamp = "blockTimestamp",
    id = "id",
    transactionHash = "transactionHash"
}

export enum DepositTx_orderBy {
    RelayerFee = "RelayerFee",
    blockNumber = "blockNumber",
    blockTimestamp = "blockTimestamp",
    depositor = "depositor",
    finalValue = "finalValue",
    fullFee = "fullFee",
    fungibleTokenWrapper = "fungibleTokenWrapper",
    fungibleTokenWrapper__address = "fungibleTokenWrapper__address",
    fungibleTokenWrapper__decimals = "fungibleTokenWrapper__decimals",
    fungibleTokenWrapper__feePercentage = "fungibleTokenWrapper__feePercentage",
    fungibleTokenWrapper__id = "fungibleTokenWrapper__id",
    fungibleTokenWrapper__name = "fungibleTokenWrapper__name",
    fungibleTokenWrapper__symbol = "fungibleTokenWrapper__symbol",
    gasUsed = "gasUsed",
    id = "id",
    isWrapAndDeposit = "isWrapAndDeposit",
    transactionHash = "transactionHash",
    vAnchor = "vAnchor",
    vAnchor__averageDepositAmount = "vAnchor__averageDepositAmount",
    vAnchor__averageWithdrawAmount = "vAnchor__averageWithdrawAmount",
    vAnchor__chainId = "vAnchor__chainId",
    vAnchor__contractAddress = "vAnchor__contractAddress",
    vAnchor__id = "vAnchor__id",
    vAnchor__maxDepositAmount = "vAnchor__maxDepositAmount",
    vAnchor__maxWithdrawAmount = "vAnchor__maxWithdrawAmount",
    vAnchor__minDepositAmount = "vAnchor__minDepositAmount",
    vAnchor__minWithdrawAmount = "vAnchor__minWithdrawAmount",
    vAnchor__numberOfDeposits = "vAnchor__numberOfDeposits",
    vAnchor__numberOfWithdraws = "vAnchor__numberOfWithdraws",
    vAnchor__token = "vAnchor__token",
    vAnchor__typedChainId = "vAnchor__typedChainId",
    value = "value",
    wrappedToken = "wrappedToken",
    wrappedToken__address = "wrappedToken__address",
    wrappedToken__decimals = "wrappedToken__decimals",
    wrappedToken__id = "wrappedToken__id",
    wrappedToken__name = "wrappedToken__name",
    wrappedToken__symbol = "wrappedToken__symbol",
    wrappingFee = "wrappingFee"
}

export enum EdgeAddition_orderBy {
    blockNumber = "blockNumber",
    blockTimestamp = "blockTimestamp",
    chainID = "chainID",
    id = "id",
    latestLeafIndex = "latestLeafIndex",
    merkleRoot = "merkleRoot",
    transactionHash = "transactionHash"
}

export enum EdgeUpdate_orderBy {
    blockNumber = "blockNumber",
    blockTimestamp = "blockTimestamp",
    chainID = "chainID",
    id = "id",
    latestLeafIndex = "latestLeafIndex",
    merkleRoot = "merkleRoot",
    transactionHash = "transactionHash"
}

export enum FungibleTokenWrapper_orderBy {
    address = "address",
    decimals = "decimals",
    feePercentage = "feePercentage",
    id = "id",
    name = "name",
    symbol = "symbol",
    tokens = "tokens"
}

export enum Insertion_orderBy {
    blockNumber = "blockNumber",
    blockTimestamp = "blockTimestamp",
    commitment = "commitment",
    id = "id",
    leafIndex = "leafIndex",
    timestamp = "timestamp",
    transactionHash = "transactionHash"
}

export enum NewCommitment_orderBy {
    blockNumber = "blockNumber",
    blockTimestamp = "blockTimestamp",
    commitment = "commitment",
    encryptedOutput = "encryptedOutput",
    id = "id",
    leafIndex = "leafIndex",
    subTreeIndex = "subTreeIndex",
    transactionHash = "transactionHash"
}

export enum NewNullifier_orderBy {
    blockNumber = "blockNumber",
    blockTimestamp = "blockTimestamp",
    id = "id",
    nullifier = "nullifier",
    transactionHash = "transactionHash"
}

export enum OrderDirection {
    asc = "asc",
    desc = "desc"
}

export enum PublicKey_orderBy {
    blockNumber = "blockNumber",
    blockTimestamp = "blockTimestamp",
    id = "id",
    key = "key",
    owner = "owner",
    transactionHash = "transactionHash"
}

export enum Token_orderBy {
    address = "address",
    decimals = "decimals",
    id = "id",
    name = "name",
    symbol = "symbol"
}

export enum TransferTx_orderBy {
    blockNumber = "blockNumber",
    blockTimestamp = "blockTimestamp",
    contractAddress = "contractAddress",
    fee = "fee",
    finalValue = "finalValue",
    from = "from",
    id = "id",
    to = "to",
    transactionHash = "transactionHash",
    value = "value"
}

export enum VAnchorDayData_orderBy {
    composition = "composition",
    date = "date",
    depositTx = "depositTx",
    id = "id",
    numberOfDeposits = "numberOfDeposits",
    numberOfTransfers = "numberOfTransfers",
    numberOfWithdraws = "numberOfWithdraws",
    startBlockNumber = "startBlockNumber",
    transferTx = "transferTx",
    vAnchor = "vAnchor",
    vAnchor__averageDepositAmount = "vAnchor__averageDepositAmount",
    vAnchor__averageWithdrawAmount = "vAnchor__averageWithdrawAmount",
    vAnchor__chainId = "vAnchor__chainId",
    vAnchor__contractAddress = "vAnchor__contractAddress",
    vAnchor__id = "vAnchor__id",
    vAnchor__maxDepositAmount = "vAnchor__maxDepositAmount",
    vAnchor__maxWithdrawAmount = "vAnchor__maxWithdrawAmount",
    vAnchor__minDepositAmount = "vAnchor__minDepositAmount",
    vAnchor__minWithdrawAmount = "vAnchor__minWithdrawAmount",
    vAnchor__numberOfDeposits = "vAnchor__numberOfDeposits",
    vAnchor__numberOfWithdraws = "vAnchor__numberOfWithdraws",
    vAnchor__token = "vAnchor__token",
    vAnchor__typedChainId = "vAnchor__typedChainId",
    withdrawTx = "withdrawTx"
}

export enum VAnchorVolumeComposition_orderBy {
    VAnchorDayData = "VAnchorDayData",
    VAnchorDayData__date = "VAnchorDayData__date",
    VAnchorDayData__id = "VAnchorDayData__id",
    VAnchorDayData__numberOfDeposits = "VAnchorDayData__numberOfDeposits",
    VAnchorDayData__numberOfTransfers = "VAnchorDayData__numberOfTransfers",
    VAnchorDayData__numberOfWithdraws = "VAnchorDayData__numberOfWithdraws",
    VAnchorDayData__startBlockNumber = "VAnchorDayData__startBlockNumber",
    fees = "fees",
    id = "id",
    relayerFees = "relayerFees",
    token = "token",
    token__address = "token__address",
    token__decimals = "token__decimals",
    token__id = "token__id",
    token__name = "token__name",
    token__symbol = "token__symbol",
    unWrappingFees = "unWrappingFees",
    volume = "volume",
    wrappingFees = "wrappingFees"
}

export enum VAnchorVolume_orderBy {
    finalValueLocked = "finalValueLocked",
    id = "id",
    token = "token",
    token__address = "token__address",
    token__decimals = "token__decimals",
    token__id = "token__id",
    token__name = "token__name",
    token__symbol = "token__symbol",
    totalFees = "totalFees",
    totalWrappingFees = "totalWrappingFees",
    vAnchor = "vAnchor",
    vAnchor__averageDepositAmount = "vAnchor__averageDepositAmount",
    vAnchor__averageWithdrawAmount = "vAnchor__averageWithdrawAmount",
    vAnchor__chainId = "vAnchor__chainId",
    vAnchor__contractAddress = "vAnchor__contractAddress",
    vAnchor__id = "vAnchor__id",
    vAnchor__maxDepositAmount = "vAnchor__maxDepositAmount",
    vAnchor__maxWithdrawAmount = "vAnchor__maxWithdrawAmount",
    vAnchor__minDepositAmount = "vAnchor__minDepositAmount",
    vAnchor__minWithdrawAmount = "vAnchor__minWithdrawAmount",
    vAnchor__numberOfDeposits = "vAnchor__numberOfDeposits",
    vAnchor__numberOfWithdraws = "vAnchor__numberOfWithdraws",
    vAnchor__token = "vAnchor__token",
    vAnchor__typedChainId = "vAnchor__typedChainId",
    valueLocked = "valueLocked"
}

export enum VAnchor_orderBy {
    averageDepositAmount = "averageDepositAmount",
    averageWithdrawAmount = "averageWithdrawAmount",
    chainId = "chainId",
    contractAddress = "contractAddress",
    id = "id",
    maxDepositAmount = "maxDepositAmount",
    maxWithdrawAmount = "maxWithdrawAmount",
    minDepositAmount = "minDepositAmount",
    minWithdrawAmount = "minWithdrawAmount",
    numberOfDeposits = "numberOfDeposits",
    numberOfWithdraws = "numberOfWithdraws",
    token = "token",
    typedChainId = "typedChainId",
    volumeComposition = "volumeComposition"
}

export enum WithdrawTx_orderBy {
    RelayerFee = "RelayerFee",
    beneficiary = "beneficiary",
    blockNumber = "blockNumber",
    blockTimestamp = "blockTimestamp",
    finalValue = "finalValue",
    fullFee = "fullFee",
    fungibleTokenWrapper = "fungibleTokenWrapper",
    fungibleTokenWrapper__address = "fungibleTokenWrapper__address",
    fungibleTokenWrapper__decimals = "fungibleTokenWrapper__decimals",
    fungibleTokenWrapper__feePercentage = "fungibleTokenWrapper__feePercentage",
    fungibleTokenWrapper__id = "fungibleTokenWrapper__id",
    fungibleTokenWrapper__name = "fungibleTokenWrapper__name",
    fungibleTokenWrapper__symbol = "fungibleTokenWrapper__symbol",
    gasUsed = "gasUsed",
    id = "id",
    isUnwrapAndWithdraw = "isUnwrapAndWithdraw",
    transactionHash = "transactionHash",
    unWrappingFee = "unWrappingFee",
    vAnchor = "vAnchor",
    vAnchor__averageDepositAmount = "vAnchor__averageDepositAmount",
    vAnchor__averageWithdrawAmount = "vAnchor__averageWithdrawAmount",
    vAnchor__chainId = "vAnchor__chainId",
    vAnchor__contractAddress = "vAnchor__contractAddress",
    vAnchor__id = "vAnchor__id",
    vAnchor__maxDepositAmount = "vAnchor__maxDepositAmount",
    vAnchor__maxWithdrawAmount = "vAnchor__maxWithdrawAmount",
    vAnchor__minDepositAmount = "vAnchor__minDepositAmount",
    vAnchor__minWithdrawAmount = "vAnchor__minWithdrawAmount",
    vAnchor__numberOfDeposits = "vAnchor__numberOfDeposits",
    vAnchor__numberOfWithdraws = "vAnchor__numberOfWithdraws",
    vAnchor__token = "vAnchor__token",
    vAnchor__typedChainId = "vAnchor__typedChainId",
    value = "value",
    wrappedToken = "wrappedToken",
    wrappedToken__address = "wrappedToken__address",
    wrappedToken__decimals = "wrappedToken__decimals",
    wrappedToken__id = "wrappedToken__id",
    wrappedToken__name = "wrappedToken__name",
    wrappedToken__symbol = "wrappedToken__symbol"
}

export enum _SubgraphErrorPolicy_ {
    allow = "allow",
    deny = "deny"
}

export interface BlockChangedFilter {
    number_gte: number;
}

export interface Block_height {
    hash?: Nullable<Bytes>;
    number?: Nullable<number>;
    number_gte?: Nullable<number>;
}

export interface Deploy_filter {
    _change_block?: Nullable<BlockChangedFilter>;
    addr?: Nullable<Bytes>;
    addr_contains?: Nullable<Bytes>;
    addr_gt?: Nullable<Bytes>;
    addr_gte?: Nullable<Bytes>;
    addr_in?: Nullable<Bytes[]>;
    addr_lt?: Nullable<Bytes>;
    addr_lte?: Nullable<Bytes>;
    addr_not?: Nullable<Bytes>;
    addr_not_contains?: Nullable<Bytes>;
    addr_not_in?: Nullable<Bytes[]>;
    and?: Nullable<Nullable<Deploy_filter>[]>;
    blockNumber?: Nullable<BigInt>;
    blockNumber_gt?: Nullable<BigInt>;
    blockNumber_gte?: Nullable<BigInt>;
    blockNumber_in?: Nullable<BigInt[]>;
    blockNumber_lt?: Nullable<BigInt>;
    blockNumber_lte?: Nullable<BigInt>;
    blockNumber_not?: Nullable<BigInt>;
    blockNumber_not_in?: Nullable<BigInt[]>;
    blockTimestamp?: Nullable<BigInt>;
    blockTimestamp_gt?: Nullable<BigInt>;
    blockTimestamp_gte?: Nullable<BigInt>;
    blockTimestamp_in?: Nullable<BigInt[]>;
    blockTimestamp_lt?: Nullable<BigInt>;
    blockTimestamp_lte?: Nullable<BigInt>;
    blockTimestamp_not?: Nullable<BigInt>;
    blockTimestamp_not_in?: Nullable<BigInt[]>;
    id?: Nullable<string>;
    id_gt?: Nullable<string>;
    id_gte?: Nullable<string>;
    id_in?: Nullable<string[]>;
    id_lt?: Nullable<string>;
    id_lte?: Nullable<string>;
    id_not?: Nullable<string>;
    id_not_in?: Nullable<string[]>;
    or?: Nullable<Nullable<Deploy_filter>[]>;
    transactionHash?: Nullable<Bytes>;
    transactionHash_contains?: Nullable<Bytes>;
    transactionHash_gt?: Nullable<Bytes>;
    transactionHash_gte?: Nullable<Bytes>;
    transactionHash_in?: Nullable<Bytes[]>;
    transactionHash_lt?: Nullable<Bytes>;
    transactionHash_lte?: Nullable<Bytes>;
    transactionHash_not?: Nullable<Bytes>;
    transactionHash_not_contains?: Nullable<Bytes>;
    transactionHash_not_in?: Nullable<Bytes[]>;
}

export interface DepositTx_filter {
    RelayerFee?: Nullable<BigInt>;
    RelayerFee_gt?: Nullable<BigInt>;
    RelayerFee_gte?: Nullable<BigInt>;
    RelayerFee_in?: Nullable<BigInt[]>;
    RelayerFee_lt?: Nullable<BigInt>;
    RelayerFee_lte?: Nullable<BigInt>;
    RelayerFee_not?: Nullable<BigInt>;
    RelayerFee_not_in?: Nullable<BigInt[]>;
    _change_block?: Nullable<BlockChangedFilter>;
    and?: Nullable<Nullable<DepositTx_filter>[]>;
    blockNumber?: Nullable<BigInt>;
    blockNumber_gt?: Nullable<BigInt>;
    blockNumber_gte?: Nullable<BigInt>;
    blockNumber_in?: Nullable<BigInt[]>;
    blockNumber_lt?: Nullable<BigInt>;
    blockNumber_lte?: Nullable<BigInt>;
    blockNumber_not?: Nullable<BigInt>;
    blockNumber_not_in?: Nullable<BigInt[]>;
    blockTimestamp?: Nullable<BigInt>;
    blockTimestamp_gt?: Nullable<BigInt>;
    blockTimestamp_gte?: Nullable<BigInt>;
    blockTimestamp_in?: Nullable<BigInt[]>;
    blockTimestamp_lt?: Nullable<BigInt>;
    blockTimestamp_lte?: Nullable<BigInt>;
    blockTimestamp_not?: Nullable<BigInt>;
    blockTimestamp_not_in?: Nullable<BigInt[]>;
    depositor?: Nullable<Bytes>;
    depositor_contains?: Nullable<Bytes>;
    depositor_gt?: Nullable<Bytes>;
    depositor_gte?: Nullable<Bytes>;
    depositor_in?: Nullable<Bytes[]>;
    depositor_lt?: Nullable<Bytes>;
    depositor_lte?: Nullable<Bytes>;
    depositor_not?: Nullable<Bytes>;
    depositor_not_contains?: Nullable<Bytes>;
    depositor_not_in?: Nullable<Bytes[]>;
    finalValue?: Nullable<BigInt>;
    finalValue_gt?: Nullable<BigInt>;
    finalValue_gte?: Nullable<BigInt>;
    finalValue_in?: Nullable<BigInt[]>;
    finalValue_lt?: Nullable<BigInt>;
    finalValue_lte?: Nullable<BigInt>;
    finalValue_not?: Nullable<BigInt>;
    finalValue_not_in?: Nullable<BigInt[]>;
    fullFee?: Nullable<BigInt>;
    fullFee_gt?: Nullable<BigInt>;
    fullFee_gte?: Nullable<BigInt>;
    fullFee_in?: Nullable<BigInt[]>;
    fullFee_lt?: Nullable<BigInt>;
    fullFee_lte?: Nullable<BigInt>;
    fullFee_not?: Nullable<BigInt>;
    fullFee_not_in?: Nullable<BigInt[]>;
    fungibleTokenWrapper?: Nullable<string>;
    fungibleTokenWrapper_?: Nullable<FungibleTokenWrapper_filter>;
    fungibleTokenWrapper_contains?: Nullable<string>;
    fungibleTokenWrapper_contains_nocase?: Nullable<string>;
    fungibleTokenWrapper_ends_with?: Nullable<string>;
    fungibleTokenWrapper_ends_with_nocase?: Nullable<string>;
    fungibleTokenWrapper_gt?: Nullable<string>;
    fungibleTokenWrapper_gte?: Nullable<string>;
    fungibleTokenWrapper_in?: Nullable<string[]>;
    fungibleTokenWrapper_lt?: Nullable<string>;
    fungibleTokenWrapper_lte?: Nullable<string>;
    fungibleTokenWrapper_not?: Nullable<string>;
    fungibleTokenWrapper_not_contains?: Nullable<string>;
    fungibleTokenWrapper_not_contains_nocase?: Nullable<string>;
    fungibleTokenWrapper_not_ends_with?: Nullable<string>;
    fungibleTokenWrapper_not_ends_with_nocase?: Nullable<string>;
    fungibleTokenWrapper_not_in?: Nullable<string[]>;
    fungibleTokenWrapper_not_starts_with?: Nullable<string>;
    fungibleTokenWrapper_not_starts_with_nocase?: Nullable<string>;
    fungibleTokenWrapper_starts_with?: Nullable<string>;
    fungibleTokenWrapper_starts_with_nocase?: Nullable<string>;
    gasUsed?: Nullable<BigInt>;
    gasUsed_gt?: Nullable<BigInt>;
    gasUsed_gte?: Nullable<BigInt>;
    gasUsed_in?: Nullable<BigInt[]>;
    gasUsed_lt?: Nullable<BigInt>;
    gasUsed_lte?: Nullable<BigInt>;
    gasUsed_not?: Nullable<BigInt>;
    gasUsed_not_in?: Nullable<BigInt[]>;
    id?: Nullable<string>;
    id_gt?: Nullable<string>;
    id_gte?: Nullable<string>;
    id_in?: Nullable<string[]>;
    id_lt?: Nullable<string>;
    id_lte?: Nullable<string>;
    id_not?: Nullable<string>;
    id_not_in?: Nullable<string[]>;
    isWrapAndDeposit?: Nullable<boolean>;
    isWrapAndDeposit_in?: Nullable<boolean[]>;
    isWrapAndDeposit_not?: Nullable<boolean>;
    isWrapAndDeposit_not_in?: Nullable<boolean[]>;
    or?: Nullable<Nullable<DepositTx_filter>[]>;
    transactionHash?: Nullable<Bytes>;
    transactionHash_contains?: Nullable<Bytes>;
    transactionHash_gt?: Nullable<Bytes>;
    transactionHash_gte?: Nullable<Bytes>;
    transactionHash_in?: Nullable<Bytes[]>;
    transactionHash_lt?: Nullable<Bytes>;
    transactionHash_lte?: Nullable<Bytes>;
    transactionHash_not?: Nullable<Bytes>;
    transactionHash_not_contains?: Nullable<Bytes>;
    transactionHash_not_in?: Nullable<Bytes[]>;
    vAnchor?: Nullable<string>;
    vAnchor_?: Nullable<VAnchor_filter>;
    vAnchor_contains?: Nullable<string>;
    vAnchor_contains_nocase?: Nullable<string>;
    vAnchor_ends_with?: Nullable<string>;
    vAnchor_ends_with_nocase?: Nullable<string>;
    vAnchor_gt?: Nullable<string>;
    vAnchor_gte?: Nullable<string>;
    vAnchor_in?: Nullable<string[]>;
    vAnchor_lt?: Nullable<string>;
    vAnchor_lte?: Nullable<string>;
    vAnchor_not?: Nullable<string>;
    vAnchor_not_contains?: Nullable<string>;
    vAnchor_not_contains_nocase?: Nullable<string>;
    vAnchor_not_ends_with?: Nullable<string>;
    vAnchor_not_ends_with_nocase?: Nullable<string>;
    vAnchor_not_in?: Nullable<string[]>;
    vAnchor_not_starts_with?: Nullable<string>;
    vAnchor_not_starts_with_nocase?: Nullable<string>;
    vAnchor_starts_with?: Nullable<string>;
    vAnchor_starts_with_nocase?: Nullable<string>;
    value?: Nullable<BigInt>;
    value_gt?: Nullable<BigInt>;
    value_gte?: Nullable<BigInt>;
    value_in?: Nullable<BigInt[]>;
    value_lt?: Nullable<BigInt>;
    value_lte?: Nullable<BigInt>;
    value_not?: Nullable<BigInt>;
    value_not_in?: Nullable<BigInt[]>;
    wrappedToken?: Nullable<string>;
    wrappedToken_?: Nullable<Token_filter>;
    wrappedToken_contains?: Nullable<string>;
    wrappedToken_contains_nocase?: Nullable<string>;
    wrappedToken_ends_with?: Nullable<string>;
    wrappedToken_ends_with_nocase?: Nullable<string>;
    wrappedToken_gt?: Nullable<string>;
    wrappedToken_gte?: Nullable<string>;
    wrappedToken_in?: Nullable<string[]>;
    wrappedToken_lt?: Nullable<string>;
    wrappedToken_lte?: Nullable<string>;
    wrappedToken_not?: Nullable<string>;
    wrappedToken_not_contains?: Nullable<string>;
    wrappedToken_not_contains_nocase?: Nullable<string>;
    wrappedToken_not_ends_with?: Nullable<string>;
    wrappedToken_not_ends_with_nocase?: Nullable<string>;
    wrappedToken_not_in?: Nullable<string[]>;
    wrappedToken_not_starts_with?: Nullable<string>;
    wrappedToken_not_starts_with_nocase?: Nullable<string>;
    wrappedToken_starts_with?: Nullable<string>;
    wrappedToken_starts_with_nocase?: Nullable<string>;
    wrappingFee?: Nullable<BigInt>;
    wrappingFee_gt?: Nullable<BigInt>;
    wrappingFee_gte?: Nullable<BigInt>;
    wrappingFee_in?: Nullable<BigInt[]>;
    wrappingFee_lt?: Nullable<BigInt>;
    wrappingFee_lte?: Nullable<BigInt>;
    wrappingFee_not?: Nullable<BigInt>;
    wrappingFee_not_in?: Nullable<BigInt[]>;
}

export interface EdgeAddition_filter {
    _change_block?: Nullable<BlockChangedFilter>;
    and?: Nullable<Nullable<EdgeAddition_filter>[]>;
    blockNumber?: Nullable<BigInt>;
    blockNumber_gt?: Nullable<BigInt>;
    blockNumber_gte?: Nullable<BigInt>;
    blockNumber_in?: Nullable<BigInt[]>;
    blockNumber_lt?: Nullable<BigInt>;
    blockNumber_lte?: Nullable<BigInt>;
    blockNumber_not?: Nullable<BigInt>;
    blockNumber_not_in?: Nullable<BigInt[]>;
    blockTimestamp?: Nullable<BigInt>;
    blockTimestamp_gt?: Nullable<BigInt>;
    blockTimestamp_gte?: Nullable<BigInt>;
    blockTimestamp_in?: Nullable<BigInt[]>;
    blockTimestamp_lt?: Nullable<BigInt>;
    blockTimestamp_lte?: Nullable<BigInt>;
    blockTimestamp_not?: Nullable<BigInt>;
    blockTimestamp_not_in?: Nullable<BigInt[]>;
    chainID?: Nullable<BigInt>;
    chainID_gt?: Nullable<BigInt>;
    chainID_gte?: Nullable<BigInt>;
    chainID_in?: Nullable<BigInt[]>;
    chainID_lt?: Nullable<BigInt>;
    chainID_lte?: Nullable<BigInt>;
    chainID_not?: Nullable<BigInt>;
    chainID_not_in?: Nullable<BigInt[]>;
    id?: Nullable<string>;
    id_gt?: Nullable<string>;
    id_gte?: Nullable<string>;
    id_in?: Nullable<string[]>;
    id_lt?: Nullable<string>;
    id_lte?: Nullable<string>;
    id_not?: Nullable<string>;
    id_not_in?: Nullable<string[]>;
    latestLeafIndex?: Nullable<BigInt>;
    latestLeafIndex_gt?: Nullable<BigInt>;
    latestLeafIndex_gte?: Nullable<BigInt>;
    latestLeafIndex_in?: Nullable<BigInt[]>;
    latestLeafIndex_lt?: Nullable<BigInt>;
    latestLeafIndex_lte?: Nullable<BigInt>;
    latestLeafIndex_not?: Nullable<BigInt>;
    latestLeafIndex_not_in?: Nullable<BigInt[]>;
    merkleRoot?: Nullable<BigInt>;
    merkleRoot_gt?: Nullable<BigInt>;
    merkleRoot_gte?: Nullable<BigInt>;
    merkleRoot_in?: Nullable<BigInt[]>;
    merkleRoot_lt?: Nullable<BigInt>;
    merkleRoot_lte?: Nullable<BigInt>;
    merkleRoot_not?: Nullable<BigInt>;
    merkleRoot_not_in?: Nullable<BigInt[]>;
    or?: Nullable<Nullable<EdgeAddition_filter>[]>;
    transactionHash?: Nullable<Bytes>;
    transactionHash_contains?: Nullable<Bytes>;
    transactionHash_gt?: Nullable<Bytes>;
    transactionHash_gte?: Nullable<Bytes>;
    transactionHash_in?: Nullable<Bytes[]>;
    transactionHash_lt?: Nullable<Bytes>;
    transactionHash_lte?: Nullable<Bytes>;
    transactionHash_not?: Nullable<Bytes>;
    transactionHash_not_contains?: Nullable<Bytes>;
    transactionHash_not_in?: Nullable<Bytes[]>;
}

export interface EdgeUpdate_filter {
    _change_block?: Nullable<BlockChangedFilter>;
    and?: Nullable<Nullable<EdgeUpdate_filter>[]>;
    blockNumber?: Nullable<BigInt>;
    blockNumber_gt?: Nullable<BigInt>;
    blockNumber_gte?: Nullable<BigInt>;
    blockNumber_in?: Nullable<BigInt[]>;
    blockNumber_lt?: Nullable<BigInt>;
    blockNumber_lte?: Nullable<BigInt>;
    blockNumber_not?: Nullable<BigInt>;
    blockNumber_not_in?: Nullable<BigInt[]>;
    blockTimestamp?: Nullable<BigInt>;
    blockTimestamp_gt?: Nullable<BigInt>;
    blockTimestamp_gte?: Nullable<BigInt>;
    blockTimestamp_in?: Nullable<BigInt[]>;
    blockTimestamp_lt?: Nullable<BigInt>;
    blockTimestamp_lte?: Nullable<BigInt>;
    blockTimestamp_not?: Nullable<BigInt>;
    blockTimestamp_not_in?: Nullable<BigInt[]>;
    chainID?: Nullable<BigInt>;
    chainID_gt?: Nullable<BigInt>;
    chainID_gte?: Nullable<BigInt>;
    chainID_in?: Nullable<BigInt[]>;
    chainID_lt?: Nullable<BigInt>;
    chainID_lte?: Nullable<BigInt>;
    chainID_not?: Nullable<BigInt>;
    chainID_not_in?: Nullable<BigInt[]>;
    id?: Nullable<string>;
    id_gt?: Nullable<string>;
    id_gte?: Nullable<string>;
    id_in?: Nullable<string[]>;
    id_lt?: Nullable<string>;
    id_lte?: Nullable<string>;
    id_not?: Nullable<string>;
    id_not_in?: Nullable<string[]>;
    latestLeafIndex?: Nullable<BigInt>;
    latestLeafIndex_gt?: Nullable<BigInt>;
    latestLeafIndex_gte?: Nullable<BigInt>;
    latestLeafIndex_in?: Nullable<BigInt[]>;
    latestLeafIndex_lt?: Nullable<BigInt>;
    latestLeafIndex_lte?: Nullable<BigInt>;
    latestLeafIndex_not?: Nullable<BigInt>;
    latestLeafIndex_not_in?: Nullable<BigInt[]>;
    merkleRoot?: Nullable<BigInt>;
    merkleRoot_gt?: Nullable<BigInt>;
    merkleRoot_gte?: Nullable<BigInt>;
    merkleRoot_in?: Nullable<BigInt[]>;
    merkleRoot_lt?: Nullable<BigInt>;
    merkleRoot_lte?: Nullable<BigInt>;
    merkleRoot_not?: Nullable<BigInt>;
    merkleRoot_not_in?: Nullable<BigInt[]>;
    or?: Nullable<Nullable<EdgeUpdate_filter>[]>;
    transactionHash?: Nullable<Bytes>;
    transactionHash_contains?: Nullable<Bytes>;
    transactionHash_gt?: Nullable<Bytes>;
    transactionHash_gte?: Nullable<Bytes>;
    transactionHash_in?: Nullable<Bytes[]>;
    transactionHash_lt?: Nullable<Bytes>;
    transactionHash_lte?: Nullable<Bytes>;
    transactionHash_not?: Nullable<Bytes>;
    transactionHash_not_contains?: Nullable<Bytes>;
    transactionHash_not_in?: Nullable<Bytes[]>;
}

export interface FungibleTokenWrapper_filter {
    _change_block?: Nullable<BlockChangedFilter>;
    address?: Nullable<Bytes>;
    address_contains?: Nullable<Bytes>;
    address_gt?: Nullable<Bytes>;
    address_gte?: Nullable<Bytes>;
    address_in?: Nullable<Bytes[]>;
    address_lt?: Nullable<Bytes>;
    address_lte?: Nullable<Bytes>;
    address_not?: Nullable<Bytes>;
    address_not_contains?: Nullable<Bytes>;
    address_not_in?: Nullable<Bytes[]>;
    and?: Nullable<Nullable<FungibleTokenWrapper_filter>[]>;
    decimals?: Nullable<number>;
    decimals_gt?: Nullable<number>;
    decimals_gte?: Nullable<number>;
    decimals_in?: Nullable<number[]>;
    decimals_lt?: Nullable<number>;
    decimals_lte?: Nullable<number>;
    decimals_not?: Nullable<number>;
    decimals_not_in?: Nullable<number[]>;
    feePercentage?: Nullable<number>;
    feePercentage_gt?: Nullable<number>;
    feePercentage_gte?: Nullable<number>;
    feePercentage_in?: Nullable<number[]>;
    feePercentage_lt?: Nullable<number>;
    feePercentage_lte?: Nullable<number>;
    feePercentage_not?: Nullable<number>;
    feePercentage_not_in?: Nullable<number[]>;
    id?: Nullable<Bytes>;
    id_contains?: Nullable<Bytes>;
    id_gt?: Nullable<Bytes>;
    id_gte?: Nullable<Bytes>;
    id_in?: Nullable<Bytes[]>;
    id_lt?: Nullable<Bytes>;
    id_lte?: Nullable<Bytes>;
    id_not?: Nullable<Bytes>;
    id_not_contains?: Nullable<Bytes>;
    id_not_in?: Nullable<Bytes[]>;
    name?: Nullable<string>;
    name_contains?: Nullable<string>;
    name_contains_nocase?: Nullable<string>;
    name_ends_with?: Nullable<string>;
    name_ends_with_nocase?: Nullable<string>;
    name_gt?: Nullable<string>;
    name_gte?: Nullable<string>;
    name_in?: Nullable<string[]>;
    name_lt?: Nullable<string>;
    name_lte?: Nullable<string>;
    name_not?: Nullable<string>;
    name_not_contains?: Nullable<string>;
    name_not_contains_nocase?: Nullable<string>;
    name_not_ends_with?: Nullable<string>;
    name_not_ends_with_nocase?: Nullable<string>;
    name_not_in?: Nullable<string[]>;
    name_not_starts_with?: Nullable<string>;
    name_not_starts_with_nocase?: Nullable<string>;
    name_starts_with?: Nullable<string>;
    name_starts_with_nocase?: Nullable<string>;
    or?: Nullable<Nullable<FungibleTokenWrapper_filter>[]>;
    symbol?: Nullable<string>;
    symbol_contains?: Nullable<string>;
    symbol_contains_nocase?: Nullable<string>;
    symbol_ends_with?: Nullable<string>;
    symbol_ends_with_nocase?: Nullable<string>;
    symbol_gt?: Nullable<string>;
    symbol_gte?: Nullable<string>;
    symbol_in?: Nullable<string[]>;
    symbol_lt?: Nullable<string>;
    symbol_lte?: Nullable<string>;
    symbol_not?: Nullable<string>;
    symbol_not_contains?: Nullable<string>;
    symbol_not_contains_nocase?: Nullable<string>;
    symbol_not_ends_with?: Nullable<string>;
    symbol_not_ends_with_nocase?: Nullable<string>;
    symbol_not_in?: Nullable<string[]>;
    symbol_not_starts_with?: Nullable<string>;
    symbol_not_starts_with_nocase?: Nullable<string>;
    symbol_starts_with?: Nullable<string>;
    symbol_starts_with_nocase?: Nullable<string>;
    tokens?: Nullable<string[]>;
    tokens_?: Nullable<Token_filter>;
    tokens_contains?: Nullable<string[]>;
    tokens_contains_nocase?: Nullable<string[]>;
    tokens_not?: Nullable<string[]>;
    tokens_not_contains?: Nullable<string[]>;
    tokens_not_contains_nocase?: Nullable<string[]>;
}

export interface Insertion_filter {
    _change_block?: Nullable<BlockChangedFilter>;
    and?: Nullable<Nullable<Insertion_filter>[]>;
    blockNumber?: Nullable<BigInt>;
    blockNumber_gt?: Nullable<BigInt>;
    blockNumber_gte?: Nullable<BigInt>;
    blockNumber_in?: Nullable<BigInt[]>;
    blockNumber_lt?: Nullable<BigInt>;
    blockNumber_lte?: Nullable<BigInt>;
    blockNumber_not?: Nullable<BigInt>;
    blockNumber_not_in?: Nullable<BigInt[]>;
    blockTimestamp?: Nullable<BigInt>;
    blockTimestamp_gt?: Nullable<BigInt>;
    blockTimestamp_gte?: Nullable<BigInt>;
    blockTimestamp_in?: Nullable<BigInt[]>;
    blockTimestamp_lt?: Nullable<BigInt>;
    blockTimestamp_lte?: Nullable<BigInt>;
    blockTimestamp_not?: Nullable<BigInt>;
    blockTimestamp_not_in?: Nullable<BigInt[]>;
    commitment?: Nullable<BigInt>;
    commitment_gt?: Nullable<BigInt>;
    commitment_gte?: Nullable<BigInt>;
    commitment_in?: Nullable<BigInt[]>;
    commitment_lt?: Nullable<BigInt>;
    commitment_lte?: Nullable<BigInt>;
    commitment_not?: Nullable<BigInt>;
    commitment_not_in?: Nullable<BigInt[]>;
    id?: Nullable<string>;
    id_gt?: Nullable<string>;
    id_gte?: Nullable<string>;
    id_in?: Nullable<string[]>;
    id_lt?: Nullable<string>;
    id_lte?: Nullable<string>;
    id_not?: Nullable<string>;
    id_not_in?: Nullable<string[]>;
    leafIndex?: Nullable<BigInt>;
    leafIndex_gt?: Nullable<BigInt>;
    leafIndex_gte?: Nullable<BigInt>;
    leafIndex_in?: Nullable<BigInt[]>;
    leafIndex_lt?: Nullable<BigInt>;
    leafIndex_lte?: Nullable<BigInt>;
    leafIndex_not?: Nullable<BigInt>;
    leafIndex_not_in?: Nullable<BigInt[]>;
    or?: Nullable<Nullable<Insertion_filter>[]>;
    timestamp?: Nullable<BigInt>;
    timestamp_gt?: Nullable<BigInt>;
    timestamp_gte?: Nullable<BigInt>;
    timestamp_in?: Nullable<BigInt[]>;
    timestamp_lt?: Nullable<BigInt>;
    timestamp_lte?: Nullable<BigInt>;
    timestamp_not?: Nullable<BigInt>;
    timestamp_not_in?: Nullable<BigInt[]>;
    transactionHash?: Nullable<Bytes>;
    transactionHash_contains?: Nullable<Bytes>;
    transactionHash_gt?: Nullable<Bytes>;
    transactionHash_gte?: Nullable<Bytes>;
    transactionHash_in?: Nullable<Bytes[]>;
    transactionHash_lt?: Nullable<Bytes>;
    transactionHash_lte?: Nullable<Bytes>;
    transactionHash_not?: Nullable<Bytes>;
    transactionHash_not_contains?: Nullable<Bytes>;
    transactionHash_not_in?: Nullable<Bytes[]>;
}

export interface NewCommitment_filter {
    _change_block?: Nullable<BlockChangedFilter>;
    and?: Nullable<Nullable<NewCommitment_filter>[]>;
    blockNumber?: Nullable<BigInt>;
    blockNumber_gt?: Nullable<BigInt>;
    blockNumber_gte?: Nullable<BigInt>;
    blockNumber_in?: Nullable<BigInt[]>;
    blockNumber_lt?: Nullable<BigInt>;
    blockNumber_lte?: Nullable<BigInt>;
    blockNumber_not?: Nullable<BigInt>;
    blockNumber_not_in?: Nullable<BigInt[]>;
    blockTimestamp?: Nullable<BigInt>;
    blockTimestamp_gt?: Nullable<BigInt>;
    blockTimestamp_gte?: Nullable<BigInt>;
    blockTimestamp_in?: Nullable<BigInt[]>;
    blockTimestamp_lt?: Nullable<BigInt>;
    blockTimestamp_lte?: Nullable<BigInt>;
    blockTimestamp_not?: Nullable<BigInt>;
    blockTimestamp_not_in?: Nullable<BigInt[]>;
    commitment?: Nullable<BigInt>;
    commitment_gt?: Nullable<BigInt>;
    commitment_gte?: Nullable<BigInt>;
    commitment_in?: Nullable<BigInt[]>;
    commitment_lt?: Nullable<BigInt>;
    commitment_lte?: Nullable<BigInt>;
    commitment_not?: Nullable<BigInt>;
    commitment_not_in?: Nullable<BigInt[]>;
    encryptedOutput?: Nullable<Bytes>;
    encryptedOutput_contains?: Nullable<Bytes>;
    encryptedOutput_gt?: Nullable<Bytes>;
    encryptedOutput_gte?: Nullable<Bytes>;
    encryptedOutput_in?: Nullable<Bytes[]>;
    encryptedOutput_lt?: Nullable<Bytes>;
    encryptedOutput_lte?: Nullable<Bytes>;
    encryptedOutput_not?: Nullable<Bytes>;
    encryptedOutput_not_contains?: Nullable<Bytes>;
    encryptedOutput_not_in?: Nullable<Bytes[]>;
    id?: Nullable<Bytes>;
    id_contains?: Nullable<Bytes>;
    id_gt?: Nullable<Bytes>;
    id_gte?: Nullable<Bytes>;
    id_in?: Nullable<Bytes[]>;
    id_lt?: Nullable<Bytes>;
    id_lte?: Nullable<Bytes>;
    id_not?: Nullable<Bytes>;
    id_not_contains?: Nullable<Bytes>;
    id_not_in?: Nullable<Bytes[]>;
    leafIndex?: Nullable<BigInt>;
    leafIndex_gt?: Nullable<BigInt>;
    leafIndex_gte?: Nullable<BigInt>;
    leafIndex_in?: Nullable<BigInt[]>;
    leafIndex_lt?: Nullable<BigInt>;
    leafIndex_lte?: Nullable<BigInt>;
    leafIndex_not?: Nullable<BigInt>;
    leafIndex_not_in?: Nullable<BigInt[]>;
    or?: Nullable<Nullable<NewCommitment_filter>[]>;
    subTreeIndex?: Nullable<BigInt>;
    subTreeIndex_gt?: Nullable<BigInt>;
    subTreeIndex_gte?: Nullable<BigInt>;
    subTreeIndex_in?: Nullable<BigInt[]>;
    subTreeIndex_lt?: Nullable<BigInt>;
    subTreeIndex_lte?: Nullable<BigInt>;
    subTreeIndex_not?: Nullable<BigInt>;
    subTreeIndex_not_in?: Nullable<BigInt[]>;
    transactionHash?: Nullable<Bytes>;
    transactionHash_contains?: Nullable<Bytes>;
    transactionHash_gt?: Nullable<Bytes>;
    transactionHash_gte?: Nullable<Bytes>;
    transactionHash_in?: Nullable<Bytes[]>;
    transactionHash_lt?: Nullable<Bytes>;
    transactionHash_lte?: Nullable<Bytes>;
    transactionHash_not?: Nullable<Bytes>;
    transactionHash_not_contains?: Nullable<Bytes>;
    transactionHash_not_in?: Nullable<Bytes[]>;
}

export interface NewNullifier_filter {
    _change_block?: Nullable<BlockChangedFilter>;
    and?: Nullable<Nullable<NewNullifier_filter>[]>;
    blockNumber?: Nullable<BigInt>;
    blockNumber_gt?: Nullable<BigInt>;
    blockNumber_gte?: Nullable<BigInt>;
    blockNumber_in?: Nullable<BigInt[]>;
    blockNumber_lt?: Nullable<BigInt>;
    blockNumber_lte?: Nullable<BigInt>;
    blockNumber_not?: Nullable<BigInt>;
    blockNumber_not_in?: Nullable<BigInt[]>;
    blockTimestamp?: Nullable<BigInt>;
    blockTimestamp_gt?: Nullable<BigInt>;
    blockTimestamp_gte?: Nullable<BigInt>;
    blockTimestamp_in?: Nullable<BigInt[]>;
    blockTimestamp_lt?: Nullable<BigInt>;
    blockTimestamp_lte?: Nullable<BigInt>;
    blockTimestamp_not?: Nullable<BigInt>;
    blockTimestamp_not_in?: Nullable<BigInt[]>;
    id?: Nullable<string>;
    id_gt?: Nullable<string>;
    id_gte?: Nullable<string>;
    id_in?: Nullable<string[]>;
    id_lt?: Nullable<string>;
    id_lte?: Nullable<string>;
    id_not?: Nullable<string>;
    id_not_in?: Nullable<string[]>;
    nullifier?: Nullable<BigInt>;
    nullifier_gt?: Nullable<BigInt>;
    nullifier_gte?: Nullable<BigInt>;
    nullifier_in?: Nullable<BigInt[]>;
    nullifier_lt?: Nullable<BigInt>;
    nullifier_lte?: Nullable<BigInt>;
    nullifier_not?: Nullable<BigInt>;
    nullifier_not_in?: Nullable<BigInt[]>;
    or?: Nullable<Nullable<NewNullifier_filter>[]>;
    transactionHash?: Nullable<Bytes>;
    transactionHash_contains?: Nullable<Bytes>;
    transactionHash_gt?: Nullable<Bytes>;
    transactionHash_gte?: Nullable<Bytes>;
    transactionHash_in?: Nullable<Bytes[]>;
    transactionHash_lt?: Nullable<Bytes>;
    transactionHash_lte?: Nullable<Bytes>;
    transactionHash_not?: Nullable<Bytes>;
    transactionHash_not_contains?: Nullable<Bytes>;
    transactionHash_not_in?: Nullable<Bytes[]>;
}

export interface PublicKey_filter {
    _change_block?: Nullable<BlockChangedFilter>;
    and?: Nullable<Nullable<PublicKey_filter>[]>;
    blockNumber?: Nullable<BigInt>;
    blockNumber_gt?: Nullable<BigInt>;
    blockNumber_gte?: Nullable<BigInt>;
    blockNumber_in?: Nullable<BigInt[]>;
    blockNumber_lt?: Nullable<BigInt>;
    blockNumber_lte?: Nullable<BigInt>;
    blockNumber_not?: Nullable<BigInt>;
    blockNumber_not_in?: Nullable<BigInt[]>;
    blockTimestamp?: Nullable<BigInt>;
    blockTimestamp_gt?: Nullable<BigInt>;
    blockTimestamp_gte?: Nullable<BigInt>;
    blockTimestamp_in?: Nullable<BigInt[]>;
    blockTimestamp_lt?: Nullable<BigInt>;
    blockTimestamp_lte?: Nullable<BigInt>;
    blockTimestamp_not?: Nullable<BigInt>;
    blockTimestamp_not_in?: Nullable<BigInt[]>;
    id?: Nullable<string>;
    id_gt?: Nullable<string>;
    id_gte?: Nullable<string>;
    id_in?: Nullable<string[]>;
    id_lt?: Nullable<string>;
    id_lte?: Nullable<string>;
    id_not?: Nullable<string>;
    id_not_in?: Nullable<string[]>;
    key?: Nullable<Bytes>;
    key_contains?: Nullable<Bytes>;
    key_gt?: Nullable<Bytes>;
    key_gte?: Nullable<Bytes>;
    key_in?: Nullable<Bytes[]>;
    key_lt?: Nullable<Bytes>;
    key_lte?: Nullable<Bytes>;
    key_not?: Nullable<Bytes>;
    key_not_contains?: Nullable<Bytes>;
    key_not_in?: Nullable<Bytes[]>;
    or?: Nullable<Nullable<PublicKey_filter>[]>;
    owner?: Nullable<Bytes>;
    owner_contains?: Nullable<Bytes>;
    owner_gt?: Nullable<Bytes>;
    owner_gte?: Nullable<Bytes>;
    owner_in?: Nullable<Bytes[]>;
    owner_lt?: Nullable<Bytes>;
    owner_lte?: Nullable<Bytes>;
    owner_not?: Nullable<Bytes>;
    owner_not_contains?: Nullable<Bytes>;
    owner_not_in?: Nullable<Bytes[]>;
    transactionHash?: Nullable<Bytes>;
    transactionHash_contains?: Nullable<Bytes>;
    transactionHash_gt?: Nullable<Bytes>;
    transactionHash_gte?: Nullable<Bytes>;
    transactionHash_in?: Nullable<Bytes[]>;
    transactionHash_lt?: Nullable<Bytes>;
    transactionHash_lte?: Nullable<Bytes>;
    transactionHash_not?: Nullable<Bytes>;
    transactionHash_not_contains?: Nullable<Bytes>;
    transactionHash_not_in?: Nullable<Bytes[]>;
}

export interface Token_filter {
    _change_block?: Nullable<BlockChangedFilter>;
    address?: Nullable<Bytes>;
    address_contains?: Nullable<Bytes>;
    address_gt?: Nullable<Bytes>;
    address_gte?: Nullable<Bytes>;
    address_in?: Nullable<Bytes[]>;
    address_lt?: Nullable<Bytes>;
    address_lte?: Nullable<Bytes>;
    address_not?: Nullable<Bytes>;
    address_not_contains?: Nullable<Bytes>;
    address_not_in?: Nullable<Bytes[]>;
    and?: Nullable<Nullable<Token_filter>[]>;
    decimals?: Nullable<number>;
    decimals_gt?: Nullable<number>;
    decimals_gte?: Nullable<number>;
    decimals_in?: Nullable<number[]>;
    decimals_lt?: Nullable<number>;
    decimals_lte?: Nullable<number>;
    decimals_not?: Nullable<number>;
    decimals_not_in?: Nullable<number[]>;
    id?: Nullable<Bytes>;
    id_contains?: Nullable<Bytes>;
    id_gt?: Nullable<Bytes>;
    id_gte?: Nullable<Bytes>;
    id_in?: Nullable<Bytes[]>;
    id_lt?: Nullable<Bytes>;
    id_lte?: Nullable<Bytes>;
    id_not?: Nullable<Bytes>;
    id_not_contains?: Nullable<Bytes>;
    id_not_in?: Nullable<Bytes[]>;
    name?: Nullable<string>;
    name_contains?: Nullable<string>;
    name_contains_nocase?: Nullable<string>;
    name_ends_with?: Nullable<string>;
    name_ends_with_nocase?: Nullable<string>;
    name_gt?: Nullable<string>;
    name_gte?: Nullable<string>;
    name_in?: Nullable<string[]>;
    name_lt?: Nullable<string>;
    name_lte?: Nullable<string>;
    name_not?: Nullable<string>;
    name_not_contains?: Nullable<string>;
    name_not_contains_nocase?: Nullable<string>;
    name_not_ends_with?: Nullable<string>;
    name_not_ends_with_nocase?: Nullable<string>;
    name_not_in?: Nullable<string[]>;
    name_not_starts_with?: Nullable<string>;
    name_not_starts_with_nocase?: Nullable<string>;
    name_starts_with?: Nullable<string>;
    name_starts_with_nocase?: Nullable<string>;
    or?: Nullable<Nullable<Token_filter>[]>;
    symbol?: Nullable<string>;
    symbol_contains?: Nullable<string>;
    symbol_contains_nocase?: Nullable<string>;
    symbol_ends_with?: Nullable<string>;
    symbol_ends_with_nocase?: Nullable<string>;
    symbol_gt?: Nullable<string>;
    symbol_gte?: Nullable<string>;
    symbol_in?: Nullable<string[]>;
    symbol_lt?: Nullable<string>;
    symbol_lte?: Nullable<string>;
    symbol_not?: Nullable<string>;
    symbol_not_contains?: Nullable<string>;
    symbol_not_contains_nocase?: Nullable<string>;
    symbol_not_ends_with?: Nullable<string>;
    symbol_not_ends_with_nocase?: Nullable<string>;
    symbol_not_in?: Nullable<string[]>;
    symbol_not_starts_with?: Nullable<string>;
    symbol_not_starts_with_nocase?: Nullable<string>;
    symbol_starts_with?: Nullable<string>;
    symbol_starts_with_nocase?: Nullable<string>;
}

export interface TransferTx_filter {
    _change_block?: Nullable<BlockChangedFilter>;
    and?: Nullable<Nullable<TransferTx_filter>[]>;
    blockNumber?: Nullable<BigInt>;
    blockNumber_gt?: Nullable<BigInt>;
    blockNumber_gte?: Nullable<BigInt>;
    blockNumber_in?: Nullable<BigInt[]>;
    blockNumber_lt?: Nullable<BigInt>;
    blockNumber_lte?: Nullable<BigInt>;
    blockNumber_not?: Nullable<BigInt>;
    blockNumber_not_in?: Nullable<BigInt[]>;
    blockTimestamp?: Nullable<BigInt>;
    blockTimestamp_gt?: Nullable<BigInt>;
    blockTimestamp_gte?: Nullable<BigInt>;
    blockTimestamp_in?: Nullable<BigInt[]>;
    blockTimestamp_lt?: Nullable<BigInt>;
    blockTimestamp_lte?: Nullable<BigInt>;
    blockTimestamp_not?: Nullable<BigInt>;
    blockTimestamp_not_in?: Nullable<BigInt[]>;
    contractAddress?: Nullable<Bytes>;
    contractAddress_contains?: Nullable<Bytes>;
    contractAddress_gt?: Nullable<Bytes>;
    contractAddress_gte?: Nullable<Bytes>;
    contractAddress_in?: Nullable<Bytes[]>;
    contractAddress_lt?: Nullable<Bytes>;
    contractAddress_lte?: Nullable<Bytes>;
    contractAddress_not?: Nullable<Bytes>;
    contractAddress_not_contains?: Nullable<Bytes>;
    contractAddress_not_in?: Nullable<Bytes[]>;
    fee?: Nullable<BigInt>;
    fee_gt?: Nullable<BigInt>;
    fee_gte?: Nullable<BigInt>;
    fee_in?: Nullable<BigInt[]>;
    fee_lt?: Nullable<BigInt>;
    fee_lte?: Nullable<BigInt>;
    fee_not?: Nullable<BigInt>;
    fee_not_in?: Nullable<BigInt[]>;
    finalValue?: Nullable<BigInt>;
    finalValue_gt?: Nullable<BigInt>;
    finalValue_gte?: Nullable<BigInt>;
    finalValue_in?: Nullable<BigInt[]>;
    finalValue_lt?: Nullable<BigInt>;
    finalValue_lte?: Nullable<BigInt>;
    finalValue_not?: Nullable<BigInt>;
    finalValue_not_in?: Nullable<BigInt[]>;
    from?: Nullable<Bytes>;
    from_contains?: Nullable<Bytes>;
    from_gt?: Nullable<Bytes>;
    from_gte?: Nullable<Bytes>;
    from_in?: Nullable<Bytes[]>;
    from_lt?: Nullable<Bytes>;
    from_lte?: Nullable<Bytes>;
    from_not?: Nullable<Bytes>;
    from_not_contains?: Nullable<Bytes>;
    from_not_in?: Nullable<Bytes[]>;
    id?: Nullable<string>;
    id_gt?: Nullable<string>;
    id_gte?: Nullable<string>;
    id_in?: Nullable<string[]>;
    id_lt?: Nullable<string>;
    id_lte?: Nullable<string>;
    id_not?: Nullable<string>;
    id_not_in?: Nullable<string[]>;
    or?: Nullable<Nullable<TransferTx_filter>[]>;
    to?: Nullable<Bytes>;
    to_contains?: Nullable<Bytes>;
    to_gt?: Nullable<Bytes>;
    to_gte?: Nullable<Bytes>;
    to_in?: Nullable<Bytes[]>;
    to_lt?: Nullable<Bytes>;
    to_lte?: Nullable<Bytes>;
    to_not?: Nullable<Bytes>;
    to_not_contains?: Nullable<Bytes>;
    to_not_in?: Nullable<Bytes[]>;
    transactionHash?: Nullable<Bytes>;
    transactionHash_contains?: Nullable<Bytes>;
    transactionHash_gt?: Nullable<Bytes>;
    transactionHash_gte?: Nullable<Bytes>;
    transactionHash_in?: Nullable<Bytes[]>;
    transactionHash_lt?: Nullable<Bytes>;
    transactionHash_lte?: Nullable<Bytes>;
    transactionHash_not?: Nullable<Bytes>;
    transactionHash_not_contains?: Nullable<Bytes>;
    transactionHash_not_in?: Nullable<Bytes[]>;
    value?: Nullable<BigInt>;
    value_gt?: Nullable<BigInt>;
    value_gte?: Nullable<BigInt>;
    value_in?: Nullable<BigInt[]>;
    value_lt?: Nullable<BigInt>;
    value_lte?: Nullable<BigInt>;
    value_not?: Nullable<BigInt>;
    value_not_in?: Nullable<BigInt[]>;
}

export interface VAnchorDayData_filter {
    _change_block?: Nullable<BlockChangedFilter>;
    and?: Nullable<Nullable<VAnchorDayData_filter>[]>;
    composition?: Nullable<string[]>;
    composition_?: Nullable<VAnchorVolumeComposition_filter>;
    composition_contains?: Nullable<string[]>;
    composition_contains_nocase?: Nullable<string[]>;
    composition_not?: Nullable<string[]>;
    composition_not_contains?: Nullable<string[]>;
    composition_not_contains_nocase?: Nullable<string[]>;
    date?: Nullable<number>;
    date_gt?: Nullable<number>;
    date_gte?: Nullable<number>;
    date_in?: Nullable<number[]>;
    date_lt?: Nullable<number>;
    date_lte?: Nullable<number>;
    date_not?: Nullable<number>;
    date_not_in?: Nullable<number[]>;
    depositTx?: Nullable<string[]>;
    depositTx_?: Nullable<DepositTx_filter>;
    depositTx_contains?: Nullable<string[]>;
    depositTx_contains_nocase?: Nullable<string[]>;
    depositTx_not?: Nullable<string[]>;
    depositTx_not_contains?: Nullable<string[]>;
    depositTx_not_contains_nocase?: Nullable<string[]>;
    id?: Nullable<string>;
    id_gt?: Nullable<string>;
    id_gte?: Nullable<string>;
    id_in?: Nullable<string[]>;
    id_lt?: Nullable<string>;
    id_lte?: Nullable<string>;
    id_not?: Nullable<string>;
    id_not_in?: Nullable<string[]>;
    numberOfDeposits?: Nullable<BigInt>;
    numberOfDeposits_gt?: Nullable<BigInt>;
    numberOfDeposits_gte?: Nullable<BigInt>;
    numberOfDeposits_in?: Nullable<BigInt[]>;
    numberOfDeposits_lt?: Nullable<BigInt>;
    numberOfDeposits_lte?: Nullable<BigInt>;
    numberOfDeposits_not?: Nullable<BigInt>;
    numberOfDeposits_not_in?: Nullable<BigInt[]>;
    numberOfTransfers?: Nullable<BigInt>;
    numberOfTransfers_gt?: Nullable<BigInt>;
    numberOfTransfers_gte?: Nullable<BigInt>;
    numberOfTransfers_in?: Nullable<BigInt[]>;
    numberOfTransfers_lt?: Nullable<BigInt>;
    numberOfTransfers_lte?: Nullable<BigInt>;
    numberOfTransfers_not?: Nullable<BigInt>;
    numberOfTransfers_not_in?: Nullable<BigInt[]>;
    numberOfWithdraws?: Nullable<BigInt>;
    numberOfWithdraws_gt?: Nullable<BigInt>;
    numberOfWithdraws_gte?: Nullable<BigInt>;
    numberOfWithdraws_in?: Nullable<BigInt[]>;
    numberOfWithdraws_lt?: Nullable<BigInt>;
    numberOfWithdraws_lte?: Nullable<BigInt>;
    numberOfWithdraws_not?: Nullable<BigInt>;
    numberOfWithdraws_not_in?: Nullable<BigInt[]>;
    or?: Nullable<Nullable<VAnchorDayData_filter>[]>;
    startBlockNumber?: Nullable<BigInt>;
    startBlockNumber_gt?: Nullable<BigInt>;
    startBlockNumber_gte?: Nullable<BigInt>;
    startBlockNumber_in?: Nullable<BigInt[]>;
    startBlockNumber_lt?: Nullable<BigInt>;
    startBlockNumber_lte?: Nullable<BigInt>;
    startBlockNumber_not?: Nullable<BigInt>;
    startBlockNumber_not_in?: Nullable<BigInt[]>;
    transferTx?: Nullable<string[]>;
    transferTx_?: Nullable<TransferTx_filter>;
    transferTx_contains?: Nullable<string[]>;
    transferTx_contains_nocase?: Nullable<string[]>;
    transferTx_not?: Nullable<string[]>;
    transferTx_not_contains?: Nullable<string[]>;
    transferTx_not_contains_nocase?: Nullable<string[]>;
    vAnchor?: Nullable<string>;
    vAnchor_?: Nullable<VAnchor_filter>;
    vAnchor_contains?: Nullable<string>;
    vAnchor_contains_nocase?: Nullable<string>;
    vAnchor_ends_with?: Nullable<string>;
    vAnchor_ends_with_nocase?: Nullable<string>;
    vAnchor_gt?: Nullable<string>;
    vAnchor_gte?: Nullable<string>;
    vAnchor_in?: Nullable<string[]>;
    vAnchor_lt?: Nullable<string>;
    vAnchor_lte?: Nullable<string>;
    vAnchor_not?: Nullable<string>;
    vAnchor_not_contains?: Nullable<string>;
    vAnchor_not_contains_nocase?: Nullable<string>;
    vAnchor_not_ends_with?: Nullable<string>;
    vAnchor_not_ends_with_nocase?: Nullable<string>;
    vAnchor_not_in?: Nullable<string[]>;
    vAnchor_not_starts_with?: Nullable<string>;
    vAnchor_not_starts_with_nocase?: Nullable<string>;
    vAnchor_starts_with?: Nullable<string>;
    vAnchor_starts_with_nocase?: Nullable<string>;
    withdrawTx?: Nullable<string[]>;
    withdrawTx_?: Nullable<WithdrawTx_filter>;
    withdrawTx_contains?: Nullable<string[]>;
    withdrawTx_contains_nocase?: Nullable<string[]>;
    withdrawTx_not?: Nullable<string[]>;
    withdrawTx_not_contains?: Nullable<string[]>;
    withdrawTx_not_contains_nocase?: Nullable<string[]>;
}

export interface VAnchorVolumeComposition_filter {
    VAnchorDayData?: Nullable<string>;
    VAnchorDayData_?: Nullable<VAnchorDayData_filter>;
    VAnchorDayData_contains?: Nullable<string>;
    VAnchorDayData_contains_nocase?: Nullable<string>;
    VAnchorDayData_ends_with?: Nullable<string>;
    VAnchorDayData_ends_with_nocase?: Nullable<string>;
    VAnchorDayData_gt?: Nullable<string>;
    VAnchorDayData_gte?: Nullable<string>;
    VAnchorDayData_in?: Nullable<string[]>;
    VAnchorDayData_lt?: Nullable<string>;
    VAnchorDayData_lte?: Nullable<string>;
    VAnchorDayData_not?: Nullable<string>;
    VAnchorDayData_not_contains?: Nullable<string>;
    VAnchorDayData_not_contains_nocase?: Nullable<string>;
    VAnchorDayData_not_ends_with?: Nullable<string>;
    VAnchorDayData_not_ends_with_nocase?: Nullable<string>;
    VAnchorDayData_not_in?: Nullable<string[]>;
    VAnchorDayData_not_starts_with?: Nullable<string>;
    VAnchorDayData_not_starts_with_nocase?: Nullable<string>;
    VAnchorDayData_starts_with?: Nullable<string>;
    VAnchorDayData_starts_with_nocase?: Nullable<string>;
    _change_block?: Nullable<BlockChangedFilter>;
    and?: Nullable<Nullable<VAnchorVolumeComposition_filter>[]>;
    fees?: Nullable<BigInt>;
    fees_gt?: Nullable<BigInt>;
    fees_gte?: Nullable<BigInt>;
    fees_in?: Nullable<BigInt[]>;
    fees_lt?: Nullable<BigInt>;
    fees_lte?: Nullable<BigInt>;
    fees_not?: Nullable<BigInt>;
    fees_not_in?: Nullable<BigInt[]>;
    id?: Nullable<string>;
    id_gt?: Nullable<string>;
    id_gte?: Nullable<string>;
    id_in?: Nullable<string[]>;
    id_lt?: Nullable<string>;
    id_lte?: Nullable<string>;
    id_not?: Nullable<string>;
    id_not_in?: Nullable<string[]>;
    or?: Nullable<Nullable<VAnchorVolumeComposition_filter>[]>;
    relayerFees?: Nullable<BigInt>;
    relayerFees_gt?: Nullable<BigInt>;
    relayerFees_gte?: Nullable<BigInt>;
    relayerFees_in?: Nullable<BigInt[]>;
    relayerFees_lt?: Nullable<BigInt>;
    relayerFees_lte?: Nullable<BigInt>;
    relayerFees_not?: Nullable<BigInt>;
    relayerFees_not_in?: Nullable<BigInt[]>;
    token?: Nullable<string>;
    token_?: Nullable<Token_filter>;
    token_contains?: Nullable<string>;
    token_contains_nocase?: Nullable<string>;
    token_ends_with?: Nullable<string>;
    token_ends_with_nocase?: Nullable<string>;
    token_gt?: Nullable<string>;
    token_gte?: Nullable<string>;
    token_in?: Nullable<string[]>;
    token_lt?: Nullable<string>;
    token_lte?: Nullable<string>;
    token_not?: Nullable<string>;
    token_not_contains?: Nullable<string>;
    token_not_contains_nocase?: Nullable<string>;
    token_not_ends_with?: Nullable<string>;
    token_not_ends_with_nocase?: Nullable<string>;
    token_not_in?: Nullable<string[]>;
    token_not_starts_with?: Nullable<string>;
    token_not_starts_with_nocase?: Nullable<string>;
    token_starts_with?: Nullable<string>;
    token_starts_with_nocase?: Nullable<string>;
    unWrappingFees?: Nullable<BigInt>;
    unWrappingFees_gt?: Nullable<BigInt>;
    unWrappingFees_gte?: Nullable<BigInt>;
    unWrappingFees_in?: Nullable<BigInt[]>;
    unWrappingFees_lt?: Nullable<BigInt>;
    unWrappingFees_lte?: Nullable<BigInt>;
    unWrappingFees_not?: Nullable<BigInt>;
    unWrappingFees_not_in?: Nullable<BigInt[]>;
    volume?: Nullable<BigInt>;
    volume_gt?: Nullable<BigInt>;
    volume_gte?: Nullable<BigInt>;
    volume_in?: Nullable<BigInt[]>;
    volume_lt?: Nullable<BigInt>;
    volume_lte?: Nullable<BigInt>;
    volume_not?: Nullable<BigInt>;
    volume_not_in?: Nullable<BigInt[]>;
    wrappingFees?: Nullable<BigInt>;
    wrappingFees_gt?: Nullable<BigInt>;
    wrappingFees_gte?: Nullable<BigInt>;
    wrappingFees_in?: Nullable<BigInt[]>;
    wrappingFees_lt?: Nullable<BigInt>;
    wrappingFees_lte?: Nullable<BigInt>;
    wrappingFees_not?: Nullable<BigInt>;
    wrappingFees_not_in?: Nullable<BigInt[]>;
}

export interface VAnchorVolume_filter {
    _change_block?: Nullable<BlockChangedFilter>;
    and?: Nullable<Nullable<VAnchorVolume_filter>[]>;
    finalValueLocked?: Nullable<BigInt>;
    finalValueLocked_gt?: Nullable<BigInt>;
    finalValueLocked_gte?: Nullable<BigInt>;
    finalValueLocked_in?: Nullable<BigInt[]>;
    finalValueLocked_lt?: Nullable<BigInt>;
    finalValueLocked_lte?: Nullable<BigInt>;
    finalValueLocked_not?: Nullable<BigInt>;
    finalValueLocked_not_in?: Nullable<BigInt[]>;
    id?: Nullable<string>;
    id_gt?: Nullable<string>;
    id_gte?: Nullable<string>;
    id_in?: Nullable<string[]>;
    id_lt?: Nullable<string>;
    id_lte?: Nullable<string>;
    id_not?: Nullable<string>;
    id_not_in?: Nullable<string[]>;
    or?: Nullable<Nullable<VAnchorVolume_filter>[]>;
    token?: Nullable<string>;
    token_?: Nullable<Token_filter>;
    token_contains?: Nullable<string>;
    token_contains_nocase?: Nullable<string>;
    token_ends_with?: Nullable<string>;
    token_ends_with_nocase?: Nullable<string>;
    token_gt?: Nullable<string>;
    token_gte?: Nullable<string>;
    token_in?: Nullable<string[]>;
    token_lt?: Nullable<string>;
    token_lte?: Nullable<string>;
    token_not?: Nullable<string>;
    token_not_contains?: Nullable<string>;
    token_not_contains_nocase?: Nullable<string>;
    token_not_ends_with?: Nullable<string>;
    token_not_ends_with_nocase?: Nullable<string>;
    token_not_in?: Nullable<string[]>;
    token_not_starts_with?: Nullable<string>;
    token_not_starts_with_nocase?: Nullable<string>;
    token_starts_with?: Nullable<string>;
    token_starts_with_nocase?: Nullable<string>;
    totalFees?: Nullable<BigInt>;
    totalFees_gt?: Nullable<BigInt>;
    totalFees_gte?: Nullable<BigInt>;
    totalFees_in?: Nullable<BigInt[]>;
    totalFees_lt?: Nullable<BigInt>;
    totalFees_lte?: Nullable<BigInt>;
    totalFees_not?: Nullable<BigInt>;
    totalFees_not_in?: Nullable<BigInt[]>;
    totalWrappingFees?: Nullable<BigInt>;
    totalWrappingFees_gt?: Nullable<BigInt>;
    totalWrappingFees_gte?: Nullable<BigInt>;
    totalWrappingFees_in?: Nullable<BigInt[]>;
    totalWrappingFees_lt?: Nullable<BigInt>;
    totalWrappingFees_lte?: Nullable<BigInt>;
    totalWrappingFees_not?: Nullable<BigInt>;
    totalWrappingFees_not_in?: Nullable<BigInt[]>;
    vAnchor?: Nullable<string>;
    vAnchor_?: Nullable<VAnchor_filter>;
    vAnchor_contains?: Nullable<string>;
    vAnchor_contains_nocase?: Nullable<string>;
    vAnchor_ends_with?: Nullable<string>;
    vAnchor_ends_with_nocase?: Nullable<string>;
    vAnchor_gt?: Nullable<string>;
    vAnchor_gte?: Nullable<string>;
    vAnchor_in?: Nullable<string[]>;
    vAnchor_lt?: Nullable<string>;
    vAnchor_lte?: Nullable<string>;
    vAnchor_not?: Nullable<string>;
    vAnchor_not_contains?: Nullable<string>;
    vAnchor_not_contains_nocase?: Nullable<string>;
    vAnchor_not_ends_with?: Nullable<string>;
    vAnchor_not_ends_with_nocase?: Nullable<string>;
    vAnchor_not_in?: Nullable<string[]>;
    vAnchor_not_starts_with?: Nullable<string>;
    vAnchor_not_starts_with_nocase?: Nullable<string>;
    vAnchor_starts_with?: Nullable<string>;
    vAnchor_starts_with_nocase?: Nullable<string>;
    valueLocked?: Nullable<BigInt>;
    valueLocked_gt?: Nullable<BigInt>;
    valueLocked_gte?: Nullable<BigInt>;
    valueLocked_in?: Nullable<BigInt[]>;
    valueLocked_lt?: Nullable<BigInt>;
    valueLocked_lte?: Nullable<BigInt>;
    valueLocked_not?: Nullable<BigInt>;
    valueLocked_not_in?: Nullable<BigInt[]>;
}

export interface VAnchor_filter {
    _change_block?: Nullable<BlockChangedFilter>;
    and?: Nullable<Nullable<VAnchor_filter>[]>;
    averageDepositAmount?: Nullable<BigInt>;
    averageDepositAmount_gt?: Nullable<BigInt>;
    averageDepositAmount_gte?: Nullable<BigInt>;
    averageDepositAmount_in?: Nullable<BigInt[]>;
    averageDepositAmount_lt?: Nullable<BigInt>;
    averageDepositAmount_lte?: Nullable<BigInt>;
    averageDepositAmount_not?: Nullable<BigInt>;
    averageDepositAmount_not_in?: Nullable<BigInt[]>;
    averageWithdrawAmount?: Nullable<BigInt>;
    averageWithdrawAmount_gt?: Nullable<BigInt>;
    averageWithdrawAmount_gte?: Nullable<BigInt>;
    averageWithdrawAmount_in?: Nullable<BigInt[]>;
    averageWithdrawAmount_lt?: Nullable<BigInt>;
    averageWithdrawAmount_lte?: Nullable<BigInt>;
    averageWithdrawAmount_not?: Nullable<BigInt>;
    averageWithdrawAmount_not_in?: Nullable<BigInt[]>;
    chainId?: Nullable<BigInt>;
    chainId_gt?: Nullable<BigInt>;
    chainId_gte?: Nullable<BigInt>;
    chainId_in?: Nullable<BigInt[]>;
    chainId_lt?: Nullable<BigInt>;
    chainId_lte?: Nullable<BigInt>;
    chainId_not?: Nullable<BigInt>;
    chainId_not_in?: Nullable<BigInt[]>;
    contractAddress?: Nullable<Bytes>;
    contractAddress_contains?: Nullable<Bytes>;
    contractAddress_gt?: Nullable<Bytes>;
    contractAddress_gte?: Nullable<Bytes>;
    contractAddress_in?: Nullable<Bytes[]>;
    contractAddress_lt?: Nullable<Bytes>;
    contractAddress_lte?: Nullable<Bytes>;
    contractAddress_not?: Nullable<Bytes>;
    contractAddress_not_contains?: Nullable<Bytes>;
    contractAddress_not_in?: Nullable<Bytes[]>;
    id?: Nullable<string>;
    id_gt?: Nullable<string>;
    id_gte?: Nullable<string>;
    id_in?: Nullable<string[]>;
    id_lt?: Nullable<string>;
    id_lte?: Nullable<string>;
    id_not?: Nullable<string>;
    id_not_in?: Nullable<string[]>;
    maxDepositAmount?: Nullable<BigInt>;
    maxDepositAmount_gt?: Nullable<BigInt>;
    maxDepositAmount_gte?: Nullable<BigInt>;
    maxDepositAmount_in?: Nullable<BigInt[]>;
    maxDepositAmount_lt?: Nullable<BigInt>;
    maxDepositAmount_lte?: Nullable<BigInt>;
    maxDepositAmount_not?: Nullable<BigInt>;
    maxDepositAmount_not_in?: Nullable<BigInt[]>;
    maxWithdrawAmount?: Nullable<BigInt>;
    maxWithdrawAmount_gt?: Nullable<BigInt>;
    maxWithdrawAmount_gte?: Nullable<BigInt>;
    maxWithdrawAmount_in?: Nullable<BigInt[]>;
    maxWithdrawAmount_lt?: Nullable<BigInt>;
    maxWithdrawAmount_lte?: Nullable<BigInt>;
    maxWithdrawAmount_not?: Nullable<BigInt>;
    maxWithdrawAmount_not_in?: Nullable<BigInt[]>;
    minDepositAmount?: Nullable<BigInt>;
    minDepositAmount_gt?: Nullable<BigInt>;
    minDepositAmount_gte?: Nullable<BigInt>;
    minDepositAmount_in?: Nullable<BigInt[]>;
    minDepositAmount_lt?: Nullable<BigInt>;
    minDepositAmount_lte?: Nullable<BigInt>;
    minDepositAmount_not?: Nullable<BigInt>;
    minDepositAmount_not_in?: Nullable<BigInt[]>;
    minWithdrawAmount?: Nullable<BigInt>;
    minWithdrawAmount_gt?: Nullable<BigInt>;
    minWithdrawAmount_gte?: Nullable<BigInt>;
    minWithdrawAmount_in?: Nullable<BigInt[]>;
    minWithdrawAmount_lt?: Nullable<BigInt>;
    minWithdrawAmount_lte?: Nullable<BigInt>;
    minWithdrawAmount_not?: Nullable<BigInt>;
    minWithdrawAmount_not_in?: Nullable<BigInt[]>;
    numberOfDeposits?: Nullable<BigInt>;
    numberOfDeposits_gt?: Nullable<BigInt>;
    numberOfDeposits_gte?: Nullable<BigInt>;
    numberOfDeposits_in?: Nullable<BigInt[]>;
    numberOfDeposits_lt?: Nullable<BigInt>;
    numberOfDeposits_lte?: Nullable<BigInt>;
    numberOfDeposits_not?: Nullable<BigInt>;
    numberOfDeposits_not_in?: Nullable<BigInt[]>;
    numberOfWithdraws?: Nullable<BigInt>;
    numberOfWithdraws_gt?: Nullable<BigInt>;
    numberOfWithdraws_gte?: Nullable<BigInt>;
    numberOfWithdraws_in?: Nullable<BigInt[]>;
    numberOfWithdraws_lt?: Nullable<BigInt>;
    numberOfWithdraws_lte?: Nullable<BigInt>;
    numberOfWithdraws_not?: Nullable<BigInt>;
    numberOfWithdraws_not_in?: Nullable<BigInt[]>;
    or?: Nullable<Nullable<VAnchor_filter>[]>;
    token?: Nullable<Bytes>;
    token_contains?: Nullable<Bytes>;
    token_gt?: Nullable<Bytes>;
    token_gte?: Nullable<Bytes>;
    token_in?: Nullable<Bytes[]>;
    token_lt?: Nullable<Bytes>;
    token_lte?: Nullable<Bytes>;
    token_not?: Nullable<Bytes>;
    token_not_contains?: Nullable<Bytes>;
    token_not_in?: Nullable<Bytes[]>;
    typedChainId?: Nullable<Bytes>;
    typedChainId_contains?: Nullable<Bytes>;
    typedChainId_gt?: Nullable<Bytes>;
    typedChainId_gte?: Nullable<Bytes>;
    typedChainId_in?: Nullable<Bytes[]>;
    typedChainId_lt?: Nullable<Bytes>;
    typedChainId_lte?: Nullable<Bytes>;
    typedChainId_not?: Nullable<Bytes>;
    typedChainId_not_contains?: Nullable<Bytes>;
    typedChainId_not_in?: Nullable<Bytes[]>;
    volumeComposition?: Nullable<string[]>;
    volumeComposition_?: Nullable<VAnchorVolume_filter>;
    volumeComposition_contains?: Nullable<string[]>;
    volumeComposition_contains_nocase?: Nullable<string[]>;
    volumeComposition_not?: Nullable<string[]>;
    volumeComposition_not_contains?: Nullable<string[]>;
    volumeComposition_not_contains_nocase?: Nullable<string[]>;
}

export interface WithdrawTx_filter {
    RelayerFee?: Nullable<BigInt>;
    RelayerFee_gt?: Nullable<BigInt>;
    RelayerFee_gte?: Nullable<BigInt>;
    RelayerFee_in?: Nullable<BigInt[]>;
    RelayerFee_lt?: Nullable<BigInt>;
    RelayerFee_lte?: Nullable<BigInt>;
    RelayerFee_not?: Nullable<BigInt>;
    RelayerFee_not_in?: Nullable<BigInt[]>;
    _change_block?: Nullable<BlockChangedFilter>;
    and?: Nullable<Nullable<WithdrawTx_filter>[]>;
    beneficiary?: Nullable<Bytes>;
    beneficiary_contains?: Nullable<Bytes>;
    beneficiary_gt?: Nullable<Bytes>;
    beneficiary_gte?: Nullable<Bytes>;
    beneficiary_in?: Nullable<Bytes[]>;
    beneficiary_lt?: Nullable<Bytes>;
    beneficiary_lte?: Nullable<Bytes>;
    beneficiary_not?: Nullable<Bytes>;
    beneficiary_not_contains?: Nullable<Bytes>;
    beneficiary_not_in?: Nullable<Bytes[]>;
    blockNumber?: Nullable<BigInt>;
    blockNumber_gt?: Nullable<BigInt>;
    blockNumber_gte?: Nullable<BigInt>;
    blockNumber_in?: Nullable<BigInt[]>;
    blockNumber_lt?: Nullable<BigInt>;
    blockNumber_lte?: Nullable<BigInt>;
    blockNumber_not?: Nullable<BigInt>;
    blockNumber_not_in?: Nullable<BigInt[]>;
    blockTimestamp?: Nullable<BigInt>;
    blockTimestamp_gt?: Nullable<BigInt>;
    blockTimestamp_gte?: Nullable<BigInt>;
    blockTimestamp_in?: Nullable<BigInt[]>;
    blockTimestamp_lt?: Nullable<BigInt>;
    blockTimestamp_lte?: Nullable<BigInt>;
    blockTimestamp_not?: Nullable<BigInt>;
    blockTimestamp_not_in?: Nullable<BigInt[]>;
    finalValue?: Nullable<BigInt>;
    finalValue_gt?: Nullable<BigInt>;
    finalValue_gte?: Nullable<BigInt>;
    finalValue_in?: Nullable<BigInt[]>;
    finalValue_lt?: Nullable<BigInt>;
    finalValue_lte?: Nullable<BigInt>;
    finalValue_not?: Nullable<BigInt>;
    finalValue_not_in?: Nullable<BigInt[]>;
    fullFee?: Nullable<BigInt>;
    fullFee_gt?: Nullable<BigInt>;
    fullFee_gte?: Nullable<BigInt>;
    fullFee_in?: Nullable<BigInt[]>;
    fullFee_lt?: Nullable<BigInt>;
    fullFee_lte?: Nullable<BigInt>;
    fullFee_not?: Nullable<BigInt>;
    fullFee_not_in?: Nullable<BigInt[]>;
    fungibleTokenWrapper?: Nullable<string>;
    fungibleTokenWrapper_?: Nullable<FungibleTokenWrapper_filter>;
    fungibleTokenWrapper_contains?: Nullable<string>;
    fungibleTokenWrapper_contains_nocase?: Nullable<string>;
    fungibleTokenWrapper_ends_with?: Nullable<string>;
    fungibleTokenWrapper_ends_with_nocase?: Nullable<string>;
    fungibleTokenWrapper_gt?: Nullable<string>;
    fungibleTokenWrapper_gte?: Nullable<string>;
    fungibleTokenWrapper_in?: Nullable<string[]>;
    fungibleTokenWrapper_lt?: Nullable<string>;
    fungibleTokenWrapper_lte?: Nullable<string>;
    fungibleTokenWrapper_not?: Nullable<string>;
    fungibleTokenWrapper_not_contains?: Nullable<string>;
    fungibleTokenWrapper_not_contains_nocase?: Nullable<string>;
    fungibleTokenWrapper_not_ends_with?: Nullable<string>;
    fungibleTokenWrapper_not_ends_with_nocase?: Nullable<string>;
    fungibleTokenWrapper_not_in?: Nullable<string[]>;
    fungibleTokenWrapper_not_starts_with?: Nullable<string>;
    fungibleTokenWrapper_not_starts_with_nocase?: Nullable<string>;
    fungibleTokenWrapper_starts_with?: Nullable<string>;
    fungibleTokenWrapper_starts_with_nocase?: Nullable<string>;
    gasUsed?: Nullable<BigInt>;
    gasUsed_gt?: Nullable<BigInt>;
    gasUsed_gte?: Nullable<BigInt>;
    gasUsed_in?: Nullable<BigInt[]>;
    gasUsed_lt?: Nullable<BigInt>;
    gasUsed_lte?: Nullable<BigInt>;
    gasUsed_not?: Nullable<BigInt>;
    gasUsed_not_in?: Nullable<BigInt[]>;
    id?: Nullable<string>;
    id_gt?: Nullable<string>;
    id_gte?: Nullable<string>;
    id_in?: Nullable<string[]>;
    id_lt?: Nullable<string>;
    id_lte?: Nullable<string>;
    id_not?: Nullable<string>;
    id_not_in?: Nullable<string[]>;
    isUnwrapAndWithdraw?: Nullable<boolean>;
    isUnwrapAndWithdraw_in?: Nullable<boolean[]>;
    isUnwrapAndWithdraw_not?: Nullable<boolean>;
    isUnwrapAndWithdraw_not_in?: Nullable<boolean[]>;
    or?: Nullable<Nullable<WithdrawTx_filter>[]>;
    transactionHash?: Nullable<Bytes>;
    transactionHash_contains?: Nullable<Bytes>;
    transactionHash_gt?: Nullable<Bytes>;
    transactionHash_gte?: Nullable<Bytes>;
    transactionHash_in?: Nullable<Bytes[]>;
    transactionHash_lt?: Nullable<Bytes>;
    transactionHash_lte?: Nullable<Bytes>;
    transactionHash_not?: Nullable<Bytes>;
    transactionHash_not_contains?: Nullable<Bytes>;
    transactionHash_not_in?: Nullable<Bytes[]>;
    unWrappingFee?: Nullable<BigInt>;
    unWrappingFee_gt?: Nullable<BigInt>;
    unWrappingFee_gte?: Nullable<BigInt>;
    unWrappingFee_in?: Nullable<BigInt[]>;
    unWrappingFee_lt?: Nullable<BigInt>;
    unWrappingFee_lte?: Nullable<BigInt>;
    unWrappingFee_not?: Nullable<BigInt>;
    unWrappingFee_not_in?: Nullable<BigInt[]>;
    vAnchor?: Nullable<string>;
    vAnchor_?: Nullable<VAnchor_filter>;
    vAnchor_contains?: Nullable<string>;
    vAnchor_contains_nocase?: Nullable<string>;
    vAnchor_ends_with?: Nullable<string>;
    vAnchor_ends_with_nocase?: Nullable<string>;
    vAnchor_gt?: Nullable<string>;
    vAnchor_gte?: Nullable<string>;
    vAnchor_in?: Nullable<string[]>;
    vAnchor_lt?: Nullable<string>;
    vAnchor_lte?: Nullable<string>;
    vAnchor_not?: Nullable<string>;
    vAnchor_not_contains?: Nullable<string>;
    vAnchor_not_contains_nocase?: Nullable<string>;
    vAnchor_not_ends_with?: Nullable<string>;
    vAnchor_not_ends_with_nocase?: Nullable<string>;
    vAnchor_not_in?: Nullable<string[]>;
    vAnchor_not_starts_with?: Nullable<string>;
    vAnchor_not_starts_with_nocase?: Nullable<string>;
    vAnchor_starts_with?: Nullable<string>;
    vAnchor_starts_with_nocase?: Nullable<string>;
    value?: Nullable<BigInt>;
    value_gt?: Nullable<BigInt>;
    value_gte?: Nullable<BigInt>;
    value_in?: Nullable<BigInt[]>;
    value_lt?: Nullable<BigInt>;
    value_lte?: Nullable<BigInt>;
    value_not?: Nullable<BigInt>;
    value_not_in?: Nullable<BigInt[]>;
    wrappedToken?: Nullable<string>;
    wrappedToken_?: Nullable<Token_filter>;
    wrappedToken_contains?: Nullable<string>;
    wrappedToken_contains_nocase?: Nullable<string>;
    wrappedToken_ends_with?: Nullable<string>;
    wrappedToken_ends_with_nocase?: Nullable<string>;
    wrappedToken_gt?: Nullable<string>;
    wrappedToken_gte?: Nullable<string>;
    wrappedToken_in?: Nullable<string[]>;
    wrappedToken_lt?: Nullable<string>;
    wrappedToken_lte?: Nullable<string>;
    wrappedToken_not?: Nullable<string>;
    wrappedToken_not_contains?: Nullable<string>;
    wrappedToken_not_contains_nocase?: Nullable<string>;
    wrappedToken_not_ends_with?: Nullable<string>;
    wrappedToken_not_ends_with_nocase?: Nullable<string>;
    wrappedToken_not_in?: Nullable<string[]>;
    wrappedToken_not_starts_with?: Nullable<string>;
    wrappedToken_not_starts_with_nocase?: Nullable<string>;
    wrappedToken_starts_with?: Nullable<string>;
    wrappedToken_starts_with_nocase?: Nullable<string>;
}

export interface Deploy {
    addr: Bytes;
    blockNumber: BigInt;
    blockTimestamp: BigInt;
    id: string;
    transactionHash: Bytes;
}

export interface DepositTx {
    RelayerFee: BigInt;
    blockNumber: BigInt;
    blockTimestamp: BigInt;
    depositor: Bytes;
    finalValue: BigInt;
    fullFee: BigInt;
    fungibleTokenWrapper: FungibleTokenWrapper;
    gasUsed: BigInt;
    id: string;
    isWrapAndDeposit: boolean;
    transactionHash: Bytes;
    vAnchor: VAnchor;
    value: BigInt;
    wrappedToken: Token;
    wrappingFee: BigInt;
}

export interface EdgeAddition {
    blockNumber: BigInt;
    blockTimestamp: BigInt;
    chainID: BigInt;
    id: string;
    latestLeafIndex: BigInt;
    merkleRoot: BigInt;
    transactionHash: Bytes;
}

export interface EdgeUpdate {
    blockNumber: BigInt;
    blockTimestamp: BigInt;
    chainID: BigInt;
    id: string;
    latestLeafIndex: BigInt;
    merkleRoot: BigInt;
    transactionHash: Bytes;
}

export interface FungibleTokenWrapper {
    address: Bytes;
    decimals: number;
    feePercentage: number;
    id: Bytes;
    name: string;
    symbol: string;
    tokens?: Token[];
}

export interface Insertion {
    blockNumber: BigInt;
    blockTimestamp: BigInt;
    commitment: BigInt;
    id: string;
    leafIndex: BigInt;
    timestamp: BigInt;
    transactionHash: Bytes;
}

export interface NewCommitment {
    blockNumber: BigInt;
    blockTimestamp: BigInt;
    commitment: BigInt;
    encryptedOutput: Bytes;
    id: Bytes;
    leafIndex: BigInt;
    subTreeIndex: BigInt;
    transactionHash: Bytes;
}

export interface NewNullifier {
    blockNumber: BigInt;
    blockTimestamp: BigInt;
    id: string;
    nullifier: BigInt;
    transactionHash: Bytes;
}

export interface PublicKey {
    blockNumber: BigInt;
    blockTimestamp: BigInt;
    id: string;
    key: Bytes;
    owner: Bytes;
    transactionHash: Bytes;
}

export interface IQuery {
    _meta(block?: Nullable<Block_height>): Nullable<_Meta_> | Promise<Nullable<_Meta_>>;
    deploy(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<Deploy> | Promise<Nullable<Deploy>>;
    deploys(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<Deploy_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<Deploy_filter>): Deploy[] | Promise<Deploy[]>;
    depositTx(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<DepositTx> | Promise<Nullable<DepositTx>>;
    depositTxes(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<DepositTx_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<DepositTx_filter>): DepositTx[] | Promise<DepositTx[]>;
    edgeAddition(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<EdgeAddition> | Promise<Nullable<EdgeAddition>>;
    edgeAdditions(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<EdgeAddition_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<EdgeAddition_filter>): EdgeAddition[] | Promise<EdgeAddition[]>;
    edgeUpdate(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<EdgeUpdate> | Promise<Nullable<EdgeUpdate>>;
    edgeUpdates(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<EdgeUpdate_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<EdgeUpdate_filter>): EdgeUpdate[] | Promise<EdgeUpdate[]>;
    fungibleTokenWrapper(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<FungibleTokenWrapper> | Promise<Nullable<FungibleTokenWrapper>>;
    fungibleTokenWrappers(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<FungibleTokenWrapper_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<FungibleTokenWrapper_filter>): FungibleTokenWrapper[] | Promise<FungibleTokenWrapper[]>;
    insertion(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<Insertion> | Promise<Nullable<Insertion>>;
    insertions(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<Insertion_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<Insertion_filter>): Insertion[] | Promise<Insertion[]>;
    newCommitment(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<NewCommitment> | Promise<Nullable<NewCommitment>>;
    newCommitments(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<NewCommitment_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<NewCommitment_filter>): NewCommitment[] | Promise<NewCommitment[]>;
    newNullifier(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<NewNullifier> | Promise<Nullable<NewNullifier>>;
    newNullifiers(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<NewNullifier_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<NewNullifier_filter>): NewNullifier[] | Promise<NewNullifier[]>;
    publicKey(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<PublicKey> | Promise<Nullable<PublicKey>>;
    publicKeys(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<PublicKey_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<PublicKey_filter>): PublicKey[] | Promise<PublicKey[]>;
    token(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<Token> | Promise<Nullable<Token>>;
    tokens(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<Token_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<Token_filter>): Token[] | Promise<Token[]>;
    transferTx(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<TransferTx> | Promise<Nullable<TransferTx>>;
    transferTxes(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<TransferTx_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<TransferTx_filter>): TransferTx[] | Promise<TransferTx[]>;
    vanchor(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<VAnchor> | Promise<Nullable<VAnchor>>;
    vanchorDayData(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<VAnchorDayData> | Promise<Nullable<VAnchorDayData>>;
    vanchorDayDatas(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<VAnchorDayData_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<VAnchorDayData_filter>): VAnchorDayData[] | Promise<VAnchorDayData[]>;
    vanchorVolume(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<VAnchorVolume> | Promise<Nullable<VAnchorVolume>>;
    vanchorVolumeComposition(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<VAnchorVolumeComposition> | Promise<Nullable<VAnchorVolumeComposition>>;
    vanchorVolumeCompositions(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<VAnchorVolumeComposition_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<VAnchorVolumeComposition_filter>): VAnchorVolumeComposition[] | Promise<VAnchorVolumeComposition[]>;
    vanchorVolumes(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<VAnchorVolume_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<VAnchorVolume_filter>): VAnchorVolume[] | Promise<VAnchorVolume[]>;
    vanchors(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<VAnchor_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<VAnchor_filter>): VAnchor[] | Promise<VAnchor[]>;
    withdrawTx(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<WithdrawTx> | Promise<Nullable<WithdrawTx>>;
    withdrawTxes(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<WithdrawTx_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<WithdrawTx_filter>): WithdrawTx[] | Promise<WithdrawTx[]>;
    bridges(): Bridge[] | Promise<Bridge[]>;
    bridgeSides(): BridgeSide[] | Promise<BridgeSide[]>;
}

export interface ISubscription {
    _meta(block?: Nullable<Block_height>): Nullable<_Meta_> | Promise<Nullable<_Meta_>>;
    deploy(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<Deploy> | Promise<Nullable<Deploy>>;
    deploys(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<Deploy_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<Deploy_filter>): Deploy[] | Promise<Deploy[]>;
    depositTx(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<DepositTx> | Promise<Nullable<DepositTx>>;
    depositTxes(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<DepositTx_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<DepositTx_filter>): DepositTx[] | Promise<DepositTx[]>;
    edgeAddition(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<EdgeAddition> | Promise<Nullable<EdgeAddition>>;
    edgeAdditions(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<EdgeAddition_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<EdgeAddition_filter>): EdgeAddition[] | Promise<EdgeAddition[]>;
    edgeUpdate(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<EdgeUpdate> | Promise<Nullable<EdgeUpdate>>;
    edgeUpdates(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<EdgeUpdate_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<EdgeUpdate_filter>): EdgeUpdate[] | Promise<EdgeUpdate[]>;
    fungibleTokenWrapper(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<FungibleTokenWrapper> | Promise<Nullable<FungibleTokenWrapper>>;
    fungibleTokenWrappers(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<FungibleTokenWrapper_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<FungibleTokenWrapper_filter>): FungibleTokenWrapper[] | Promise<FungibleTokenWrapper[]>;
    insertion(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<Insertion> | Promise<Nullable<Insertion>>;
    insertions(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<Insertion_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<Insertion_filter>): Insertion[] | Promise<Insertion[]>;
    newCommitment(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<NewCommitment> | Promise<Nullable<NewCommitment>>;
    newCommitments(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<NewCommitment_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<NewCommitment_filter>): NewCommitment[] | Promise<NewCommitment[]>;
    newNullifier(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<NewNullifier> | Promise<Nullable<NewNullifier>>;
    newNullifiers(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<NewNullifier_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<NewNullifier_filter>): NewNullifier[] | Promise<NewNullifier[]>;
    publicKey(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<PublicKey> | Promise<Nullable<PublicKey>>;
    publicKeys(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<PublicKey_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<PublicKey_filter>): PublicKey[] | Promise<PublicKey[]>;
    token(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<Token> | Promise<Nullable<Token>>;
    tokens(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<Token_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<Token_filter>): Token[] | Promise<Token[]>;
    transferTx(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<TransferTx> | Promise<Nullable<TransferTx>>;
    transferTxes(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<TransferTx_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<TransferTx_filter>): TransferTx[] | Promise<TransferTx[]>;
    vanchor(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<VAnchor> | Promise<Nullable<VAnchor>>;
    vanchorDayData(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<VAnchorDayData> | Promise<Nullable<VAnchorDayData>>;
    vanchorDayDatas(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<VAnchorDayData_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<VAnchorDayData_filter>): VAnchorDayData[] | Promise<VAnchorDayData[]>;
    vanchorVolume(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<VAnchorVolume> | Promise<Nullable<VAnchorVolume>>;
    vanchorVolumeComposition(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<VAnchorVolumeComposition> | Promise<Nullable<VAnchorVolumeComposition>>;
    vanchorVolumeCompositions(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<VAnchorVolumeComposition_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<VAnchorVolumeComposition_filter>): VAnchorVolumeComposition[] | Promise<VAnchorVolumeComposition[]>;
    vanchorVolumes(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<VAnchorVolume_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<VAnchorVolume_filter>): VAnchorVolume[] | Promise<VAnchorVolume[]>;
    vanchors(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<VAnchor_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<VAnchor_filter>): VAnchor[] | Promise<VAnchor[]>;
    withdrawTx(block?: Nullable<Block_height>, id: string, subgraphError: _SubgraphErrorPolicy_): Nullable<WithdrawTx> | Promise<Nullable<WithdrawTx>>;
    withdrawTxes(block?: Nullable<Block_height>, first?: Nullable<number>, orderBy?: Nullable<WithdrawTx_orderBy>, orderDirection?: Nullable<OrderDirection>, skip?: Nullable<number>, subgraphError: _SubgraphErrorPolicy_, where?: Nullable<WithdrawTx_filter>): WithdrawTx[] | Promise<WithdrawTx[]>;
}

export interface Token {
    address: Bytes;
    decimals: number;
    id: Bytes;
    name: string;
    symbol: string;
}

export interface TransferTx {
    blockNumber: BigInt;
    blockTimestamp: BigInt;
    contractAddress: Bytes;
    fee: BigInt;
    finalValue: BigInt;
    from: Bytes;
    id: string;
    to: Bytes;
    transactionHash: Bytes;
    value: BigInt;
}

export interface VAnchor {
    averageDepositAmount: BigInt;
    averageWithdrawAmount: BigInt;
    chainId: BigInt;
    contractAddress: Bytes;
    id: string;
    maxDepositAmount: BigInt;
    maxWithdrawAmount: BigInt;
    minDepositAmount: BigInt;
    minWithdrawAmount: BigInt;
    numberOfDeposits: BigInt;
    numberOfWithdraws: BigInt;
    token: Bytes;
    typedChainId: Bytes;
    volumeComposition?: VAnchorVolume[];
}

export interface VAnchorDayData {
    composition?: VAnchorVolumeComposition[];
    date: number;
    depositTx?: DepositTx[];
    id: string;
    numberOfDeposits: BigInt;
    numberOfTransfers: BigInt;
    numberOfWithdraws: BigInt;
    startBlockNumber: BigInt;
    transferTx?: TransferTx[];
    vAnchor: VAnchor;
    withdrawTx?: WithdrawTx[];
}

export interface VAnchorVolume {
    finalValueLocked: BigInt;
    id: string;
    token: Token;
    totalFees: BigInt;
    totalWrappingFees: BigInt;
    vAnchor: VAnchor;
    valueLocked: BigInt;
}

export interface VAnchorVolumeComposition {
    VAnchorDayData: VAnchorDayData;
    fees: BigInt;
    id: string;
    relayerFees: BigInt;
    token: Token;
    unWrappingFees: BigInt;
    volume: BigInt;
    wrappingFees: BigInt;
}

export interface WithdrawTx {
    RelayerFee: BigInt;
    beneficiary: Bytes;
    blockNumber: BigInt;
    blockTimestamp: BigInt;
    finalValue: BigInt;
    fullFee: BigInt;
    fungibleTokenWrapper: FungibleTokenWrapper;
    gasUsed: BigInt;
    id: string;
    isUnwrapAndWithdraw: boolean;
    transactionHash: Bytes;
    unWrappingFee: BigInt;
    vAnchor: VAnchor;
    value: BigInt;
    wrappedToken: Token;
}

export interface _Block_ {
    hash?: Nullable<Bytes>;
    number: number;
    timestamp?: Nullable<number>;
}

export interface _Meta_ {
    block: _Block_;
    deployment: string;
    hasIndexingErrors: boolean;
}

export interface Composition {
    token: string;
    value: number;
}

export interface BridgeSide {
    id: string;
    contractAddress: string;
    chainId: number;
    typedChainId: string;
    volumeUSD: number;
    composition: Composition[];
    maxDepositAmount: number;
    minDepositAmount: number;
    numberOfDeposits: number;
    averageDepositAmount: number;
    numberOfWithdraws: number;
    averageWithdrawAmount: number;
    token: string;
}

export interface Bridge {
    id: string;
    sides: BridgeSide[];
}

export type BigDecimal = any;
export type BigInt = any;
export type Bytes = any;
type Nullable<T> = T | null;
