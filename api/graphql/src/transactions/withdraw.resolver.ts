import { Resolver } from '@nestjs/graphql';
import { TransactionService } from './transaction.service';

@Resolver('WithdrawTx')
export class WithdrawResolver {
  constructor(private readonly subgraphService: TransactionService) {}
}
