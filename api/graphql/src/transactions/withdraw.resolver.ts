import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { RawWithdrawTx, TransactionService } from './transaction.service';
import { BridgeSide, TransactionFilterInput } from '../../gql/graphql';
import { ConsoleLogger } from '@nestjs/common';
import { BridgeSideWithoutComposition } from '../bridge/bridge.service';

const console = new ConsoleLogger();

@Resolver('WithdrawTx')
export class WithdrawResolver {
  constructor(private readonly transactionService: TransactionService) {}

  @Query('withdrawTransactions')
  public async fetchWithdrawTransactions(
    @Args('filter') filterInput: TransactionFilterInput,
  ): Promise<RawWithdrawTx[]> {
    return this.transactionService.fetchWithdrawTransactions(filterInput);
  }

  @ResolveField('bridgeSide')
  public resolveBridgeSide(
    @Parent() withdrawTx: RawWithdrawTx,
  ): Promise<BridgeSideWithoutComposition> {
    return this.transactionService.fetchBridgeOfTransaction(withdrawTx);
  }
}
