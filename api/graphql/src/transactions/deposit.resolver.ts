import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import {
  RawDepositTx,
  RawWithdrawTx,
  TransactionService,
} from './transaction.service';
import { BridgeSide, TransactionFilterInput } from '../../gql/graphql';
import { ConsoleLogger } from '@nestjs/common';
import { BridgeSideWithoutComposition } from '../bridge/bridge.service';
const console = new ConsoleLogger();

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
  ): Promise<BridgeSideWithoutComposition> {
    return this.transactionService.fetchBridgeOfTransaction(depositTx);
  }
}
