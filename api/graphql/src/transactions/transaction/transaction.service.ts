import {Injectable} from '@nestjs/common';
import {VAnchorService} from "../../subgraph/v-anchor.service";
import {BridgeSide, DepositTx, WithdrawTx} from "../../../gql/graphql";
import {BridgeService} from "../../bridge/bridge.service";
import {mapTokenFragment} from "../../helpers";
export type RawDepositTx = Omit<DepositTx, 'bridgeSide'> & {
  vAnchorId: string
};

export type RawWithdrawTx = Omit<WithdrawTx, 'vAnchor'> & {
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


  public async fetchDepositTransactions(): Promise<RawDepositTx[]> {
    const transactions = await this.vAnchorService.fetchDepositTransactions({
      uri: "http://localhost:8000/subgraphs/name/VAnchor"
    }, {})

    return transactions.depositTxes.map((tx): RawDepositTx => ({
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
    }))

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
