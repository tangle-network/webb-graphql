// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT

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


