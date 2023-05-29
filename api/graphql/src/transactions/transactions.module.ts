import { Module } from '@nestjs/common';
import { WithdrawResolver } from './withdraw/withdraw.resolver';
import { DepositResolver } from './deposit/deposit.resolver';
import { TransferResolver } from './transfer/transfer.resolver';
import {SubgraphModule} from "../subgraph/subgraph.module";
import { TransactionService } from './transaction/transaction.service';

@Module({
  imports:[SubgraphModule],
  providers: [WithdrawResolver, DepositResolver, TransferResolver, TransactionService]
})
export class TransactionsModule {}
