// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT

export interface Threshold {

    next: number;

    current: number;

    pending: number;

}


export interface DKGAuthority {

    authorityId: string;

    accountId: string;

    reputation?: string;

}


export interface SessionKeyHistory {

    stage: string;

    txHash: string;

    blockNumber: string;

    timestamp: Date;

}


export interface SessionPublicKey {

    compressedKey: string;

    uncompressedKey: string;

    history: SessionKeyHistory[];

}


export interface ProposalTimelineStatus {

    status: string;

    txHash?: string;

    blockNumber: string;

    timestamp: Date;

}


export interface ProposalVotes {

    for: number;

    against: number;

    forVoters: string[];

    againstVoters: string[];

    blockNumber: string;

}


export interface ProposalTypeCount {

    type: string;

    count: string;

    proposalId: string[];

}


export interface ProposalStatusCount {

    status: string;

    count: string;

    proposalId: string[];

}


