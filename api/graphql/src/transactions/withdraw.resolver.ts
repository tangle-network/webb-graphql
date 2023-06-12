import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { RawWithdrawTx, TransactionService } from './transaction.service';
import { BridgeSide, TransactionFilterInput } from '../../gql/graphql';

@Resolver('WithdrawTx')
export class WithdrawResolver {
  constructor(private readonly transactionService: TransactionService) {}

  @Query('withdrawTransactions')
  public fetchWithdrawTransactions(
    @Args('filter') filterInput: TransactionFilterInput,
  ): Promise<RawWithdrawTx[]> {
    return this.transactionService.fetchWithdrawTransactions(filterInput);
  }

  @ResolveField('bridgeSide')
  public resolveBridgeSide(
    @Parent() withdrawTx: RawWithdrawTx,
  ): Promise<BridgeSide> {
    return this.transactionService.fetchBridgeOfTransaction(withdrawTx);
  }
}
