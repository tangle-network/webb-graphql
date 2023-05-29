import {Query, Resolver} from '@nestjs/graphql';
import {TransactionService} from "../transaction/transaction.service";

@Resolver("DepositTx")
export class DepositResolver {


  constructor(private readonly transactionService:TransactionService) {
  }
  @Query('depositTransactions')
  public fetchDepositTransactions() {
    return this.transactionService.fetchDepositTransactions()
  }

}
