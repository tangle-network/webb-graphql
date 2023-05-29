import {Injectable} from '@nestjs/common';
import {BridgeSide, DepositTx, WithdrawTx} from "../../gql/graphql";
import {BridgeService} from "../bridge/bridge.service";
import {VAnchorService} from "../subgraph/v-anchor.service";
import {DepositTxFragmentFragment, WithdrawTxFragmentFragment} from "../generated/graphql";
import {mapTokenFragment} from "../helpers";

export type RawDepositTx = Omit<DepositTx, 'bridgeSide'> & {
  vAnchorId: string
};

export type RawWithdrawTx = Omit<WithdrawTx, 'bridgeSide'> & {
  vAnchorId: string
};


interface RawTx {
  vAnchorId:string,
  // typedChainId:string,
  // chainId:number
}

@Injectable()
export class TransactionService {

  constructor(
    private readonly vAnchorService: VAnchorService,
    private readonly bridgeService: BridgeService
  ) {
  }


    private mapWithdrawTx(tx:WithdrawTxFragmentFragment):RawWithdrawTx{
      return {
        id: tx.id,
          value: tx.value,
        beneficiary:tx.beneficiary,
        isUnwrapAndWithdraw: tx.isUnwrapAndWithdraw,
        unWrappingFee: String(tx.wrappingFee),
        RelayerFee: String(tx.RelayerFee),
        fullFee: String(tx.fullFee),
        gasUsed: String(tx.gasUsed),
        finalValue: String(tx.finalValue),
        blockTimestamp: String(tx.blockTimestamp),
        transactionHash: String(tx.transactionHash),
        wrappedToken:mapTokenFragment(tx.wrappedToken),
        vAnchorId: tx.vAnchor.id,
        blockNumber: String(tx.blockNumber),
      }
    }
    private mapDepositTx(tx:DepositTxFragmentFragment):RawDepositTx{
     return  {
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
        wrappedToken:mapTokenFragment(tx.wrappedToken),
        vAnchorId: tx.vAnchor.id,
        blockNumber: String(tx.blockNumber),
      }
    }



  public async fetchWithdrawTransactions(): Promise<RawWithdrawTx[]> {
    const transactions = await this.vAnchorService.fetchWithdrawTransactions({
      uri: "http://localhost:8000/subgraphs/name/VAnchor"
    }, {})

    return transactions.withdrawTxes.map((tx): RawWithdrawTx => this.mapWithdrawTx(tx))

  }

  public async fetchDepositTransactions(): Promise<RawDepositTx[]> {
    const transactions = await this.vAnchorService.fetchDepositTransactions({
      uri: "http://localhost:8000/subgraphs/name/VAnchor"
    }, {})

    return transactions.depositTxes.map((tx): RawDepositTx => this.mapDepositTx(tx))

  }

  public async fetchBridgeOfTransaction<T extends RawTx>(
    rawTransaction: T
  ): Promise<BridgeSide> {
    return this.bridgeService.fetchBridgeSide(
      {
        uri: "http://localhost:8000/subgraphs/name/VAnchor"
      },
      rawTransaction.vAnchorId
    )
  }

}
