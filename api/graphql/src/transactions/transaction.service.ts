import { Injectable } from '@nestjs/common';
import { BridgeSide, DepositTx, WithdrawTx } from '../../gql/graphql';
import { BridgeService } from '../bridge/bridge.service';
import { VAnchorService } from '../subgraph/v-anchor.service';
import {
  DepositTxFragmentFragment,
  WithdrawTxFragmentFragment,
} from '../generated/graphql';
import { mapTokenFragment } from '../helpers';
import { NetworksService } from '../subgraph/networks.service';

export type RawDepositTx = Omit<DepositTx, 'bridgeSide'> & {
  vAnchorId: string;
  networkName: string;
};

export type RawWithdrawTx = Omit<WithdrawTx, 'bridgeSide'> & {
  vAnchorId: string;
  networkName: string;
};

interface RawTx {
  vAnchorId: string;
  networkName: string;

  // typedChainId:string,
  // chainId:number
}

@Injectable()
export class TransactionService {
  constructor(
    private readonly vAnchorService: VAnchorService,
    private readonly bridgeService: BridgeService,
    private readonly networkService: NetworksService,
  ) {}

  private mapWithdrawTx(
    tx: WithdrawTxFragmentFragment,
    networkName: string,
  ): RawWithdrawTx {
    return {
      id: tx.id,
      value: tx.value,
      beneficiary: tx.beneficiary,
      isUnwrapAndWithdraw: tx.isUnwrapAndWithdraw,
      unWrappingFee: String(tx.unWrappingFee),
      RelayerFee: String(tx.RelayerFee),
      fullFee: String(tx.fullFee),
      gasUsed: String(tx.gasUsed),
      finalValue: String(tx.finalValue),
      blockTimestamp: String(tx.blockTimestamp),
      transactionHash: String(tx.transactionHash),
      wrappedToken: mapTokenFragment(tx.wrappedToken),
      vAnchorId: tx.vAnchor.id,
      blockNumber: String(tx.blockNumber),
      networkName,
    };
  }
  private mapDepositTx(
    tx: DepositTxFragmentFragment,
    networkName: string,
  ): RawDepositTx {
    return {
      id: tx.id,
      depositor: tx.depositor,
      value: tx.value,
      isWrapAndDeposit: tx.isWrapAndDeposit,
      wrappingFee: String(tx.wrappingFee),
      RelayerFee: String(tx.RelayerFee),
      fullFee: String(tx.fullFee),
      gasUsed: String(tx.gasUsed),
      finalValue: String(tx.finalValue),
      blockTimestamp: String(tx.blockTimestamp),
      transactionHash: String(tx.transactionHash),
      wrappedToken: mapTokenFragment(tx.wrappedToken),
      vAnchorId: tx.vAnchor.id,
      blockNumber: String(tx.blockNumber),
      networkName,
    };
  }

  public async fetchWithdrawTransactions(
    networkName: string,
  ): Promise<RawWithdrawTx[]> {
    const subgraph = this.networkService.getSubgraphConfig(networkName);
    const transactions = await this.vAnchorService.fetchWithdrawTransactions(
      subgraph,
      {},
    );

    return transactions.withdrawTxes.map(
      (tx): RawWithdrawTx => this.mapWithdrawTx(tx, networkName),
    );
  }

  public async fetchDepositTransactions(
    networkName: string,
  ): Promise<RawDepositTx[]> {
    const subgraph = this.networkService.getSubgraphConfig(networkName);
    const transactions = await this.vAnchorService.fetchDepositTransactions(
      subgraph,
    );

    return transactions.depositTxes.map(
      (tx): RawDepositTx => this.mapDepositTx(tx, networkName),
    );
  }

  public async fetchBridgeOfTransaction<T extends RawTx>(
    rawTransaction: T,
  ): Promise<BridgeSide> {
    const subgraph = this.networkService.getSubgraphConfig(
      rawTransaction.networkName,
    );

    return this.bridgeService.fetchBridgeSide(
      subgraph,
      rawTransaction.vAnchorId,
    );
  }
}
