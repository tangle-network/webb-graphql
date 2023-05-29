import { Resolver } from '@nestjs/graphql';
import {VAnchorService} from "../../subgraph/v-anchor.service";
import {TransactionService} from "./transaction.service";

@Resolver("WithdrawTx")
export class WithdrawResolver {


  constructor(private readonly subgraphService:TransactionService) {
  }




}
