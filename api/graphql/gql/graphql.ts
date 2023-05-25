
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

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

export interface IQuery {
    bridges(): Bridge[] | Promise<Bridge[]>;
    bridgeSides(): BridgeSide[] | Promise<BridgeSide[]>;
}

type Nullable<T> = T | null;
