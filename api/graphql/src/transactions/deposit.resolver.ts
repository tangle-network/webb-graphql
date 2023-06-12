import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { RawDepositTx, TransactionService } from './transaction.service';
import { BridgeSide, TransactionFilterInput } from '../../gql/graphql';

@Resolver('DepositTx')
export class DepositResolver {
  constructor(private readonly transactionService: TransactionService) {}

  @Query('depositTransactions')
  public fetchDepositTransactions(
    @Args('filter') filterInput?: TransactionFilterInput,
  ): Promise<RawDepositTx[]> {
    return this.transactionService.fetchDepositTransactions(filterInput);
  }

  @ResolveField('bridgeSide')
  public resolveBridgeSide(
    @Parent() depositTx: RawDepositTx,
  ): Promise<BridgeSide> {
    return this.transactionService.fetchBridgeOfTransaction(depositTx);
  }
}
