import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { RawTransferTx, TransactionService } from './transaction.service';
import { BridgeSide, TransactionFilterInput } from '../../gql/graphql';
import { BridgeSideWithoutComposition } from '../bridge/bridge.service';

@Resolver('TransferTx')
export class TransferResolver {
  constructor(private readonly transactionService: TransactionService) {}

  @Query('transferTransactions')
  public fetchWithdrawTransactions(
    @Args('filter') filterInput: TransactionFilterInput,
  ): Promise<RawTransferTx[]> {
    return this.transactionService.fetchDepositTransactions(filterInput);
  }

  @ResolveField('bridgeSide')
  public resolveBridgeSide(
    @Parent() transferTx: RawTransferTx,
  ): Promise<BridgeSideWithoutComposition> {
    return this.transactionService.fetchBridgeOfTransaction(transferTx);
  }
}
