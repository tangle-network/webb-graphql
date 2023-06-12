import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { RawTransferTx, TransactionService } from './transaction.service';
import { BridgeSide, TransactionFilterInput } from '../../gql/graphql';

@Resolver('TransferTx')
export class TransferResolver {
  constructor(private readonly transactionService: TransactionService) {}

  @Query('withdrawTransactions')
  public fetchWithdrawTransactions(
    @Args('filter') filterInput: TransactionFilterInput,
  ): Promise<RawTransferTx[]> {
    return this.transactionService.fetchDepositTransactions(filterInput);
  }

  @ResolveField('bridgeSide')
  public resolveBridgeSide(
    @Parent() transferTx: RawTransferTx,
  ): Promise<BridgeSide> {
    return this.transactionService.fetchBridgeOfTransaction(transferTx);
  }
}
