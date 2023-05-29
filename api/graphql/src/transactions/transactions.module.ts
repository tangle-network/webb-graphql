import { Module } from '@nestjs/common';
import { WithdrawResolver } from './withdraw.resolver';
import { DepositResolver } from './deposit.resolver';
import { TransferResolver } from './transfer.resolver';
import { SubgraphModule } from '../subgraph/subgraph.module';
import { TransactionService } from './transaction.service';
import { BridgeModule } from '../bridge/bridge.module';

@Module({
  imports: [SubgraphModule, BridgeModule],
  providers: [
    WithdrawResolver,
    DepositResolver,
    TransferResolver,
    TransactionService,
  ],
})
export class TransactionsModule {}
