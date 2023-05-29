import { Module } from '@nestjs/common';
import { WithdrawResolver } from './withdraw/withdraw.resolver';
import { DepositResolver } from './deposit/deposit.resolver';
import { TransferResolver } from './transfer/transfer.resolver';

@Module({
  providers: [WithdrawResolver, DepositResolver, TransferResolver]
})
export class TransactionsModule {}
