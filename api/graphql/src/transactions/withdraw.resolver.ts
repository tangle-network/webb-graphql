import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import {
  RawDepositTx,
  RawWithdrawTx,
  TransactionService,
} from './transaction.service';
import { BridgeSide } from '../../gql/graphql';

@Resolver('WithdrawTx')
export class WithdrawResolver {
  constructor(private readonly transactionService: TransactionService) {}

  @Query('withdrawTransactions')
  public fetchWithdrawTransactions(
    @Args('network') network: string,
  ): Promise<RawWithdrawTx[]> {
    return this.transactionService.fetchWithdrawTransactions(network);
  }

  @ResolveField('bridgeSide')
  public resolveBridgeSide(
    @Parent() depositTx: RawDepositTx,
  ): Promise<BridgeSide> {
    return this.transactionService.fetchBridgeOfTransaction(depositTx);
  }
}
