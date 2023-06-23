
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CompositionFilter {
    tokenSymbols?: Nullable<string[]>;
    chains?: Nullable<string[]>;
}

export interface BridgesFilterInput {
    where?: Nullable<string[]>;
    networks?: Nullable<string[]>;
}

export interface BridgesDayDataInput {
    where?: Nullable<string[]>;
    networks?: Nullable<string[]>;
    tokens?: Nullable<string[]>;
}

export interface TransactionFilterInput {
    bridges?: Nullable<string[]>;
    networks?: Nullable<string[]>;
}

export interface Composition {
    token: Token;
    value: string;
    valueUSD: string;
}

export interface BridgeComposition {
    composition: Composition[];
    network: string;
}

export interface BridgeSide {
    id: string;
    contractAddress: string;
    chainId: number;
    typedChainId: string;
    totalFees: string;
    totalFeesUSD: string;
    totalVolumeLockedUSD: string;
    totalVolumeLocked: string;
    maxDepositAmount: string;
    minDepositAmount: string;
    averageDepositAmount: string;
    averageDepositAmountUSD: string;
    token: string;
    composition: Composition[];
    numberOfDeposits: number;
    numberOfWithdraws: number;
}

export interface Bridge {
    id: string;
    sides: BridgeSide[];
    totalVolumeLockedUSD: string;
    totalVolumeLocked: string;
    averageDepositAmount: string;
    averageDepositAmountUSD: string;
    composition?: BridgeComposition[];
    totalFees: string;
    totalFeesUSD: string;
}

export interface Token {
    id: string;
    address: string;
    isFungibleTokenWrapper: boolean;
    name: string;
    symbol: string;
    decimals: number;
}

export interface BrideSideDayData {
    id: string;
    date: string;
    numberOfDeposits: string;
    numberOfWithdraws: string;
    numberOfTransfers: string;
    totalFeesUSD: string;
    totalVolumeLockedUSD: string;
    fees: string;
    totalVolumeLocked: string;
}

export interface DayData {
    id: string;
    date: string;
    numberOfDeposits: number;
    numberOfWithdraws: number;
    numberOfTransfers: number;
    feesUSD: string;
    volumeUSD: string;
    depositedVolumeUSD: string;
    withdrawVolumeUSD: string;
}

export interface DepositTx {
    id: string;
    depositor: string;
    value: string;
    isWrapAndDeposit: boolean;
    wrappingFee: string;
    RelayerFee: string;
    fullFee: string;
    gasUsed: string;
    finalValue: string;
    blockTimestamp: string;
    transactionHash: string;
    bridgeSide: BridgeSide;
    wrappedToken: Token;
    blockNumber: string;
}

export interface WithdrawTx {
    id: string;
    beneficiary: string;
    value: string;
    gasUsed: string;
    isUnwrapAndWithdraw: boolean;
    RelayerFee: string;
    fullFee: string;
    finalValue: string;
    blockTimestamp: string;
    transactionHash: string;
    bridgeSide: BridgeSide;
    wrappedToken: Token;
    blockNumber: string;
}

export interface TransferTx {
    id: string;
    blockNumber: string;
    blockTimestamp: string;
    transactionHash: string;
    bridgeSide: BridgeSide;
}

export interface Network {
    name: string;
}

export interface IQuery {
    bridges(filter?: Nullable<BridgesFilterInput>): Bridge[] | Promise<Bridge[]>;
    bridge(id: string): Bridge | Promise<Bridge>;
    bridgeSide(network: string, contractAddress: string): BridgeSide | Promise<BridgeSide>;
    bridgesDayData(filter?: Nullable<BridgesDayDataInput>): DayData[] | Promise<DayData[]>;
    bridgeDayData(bridgeId: string): DayData | Promise<DayData>;
    bridgeSideDayData(bridgeId: string, network: string, tokens?: Nullable<string[]>): DayData | Promise<DayData>;
    networks(): Network[] | Promise<Network[]>;
    depositTransactions(filter?: Nullable<TransactionFilterInput>): DepositTx[] | Promise<DepositTx[]>;
    withdrawTransactions(filter?: Nullable<TransactionFilterInput>): WithdrawTx[] | Promise<WithdrawTx[]>;
    transferTransactions(filter?: Nullable<TransactionFilterInput>): TransferTx[] | Promise<TransferTx[]>;
}

type Nullable<T> = T | null;
