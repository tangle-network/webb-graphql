import { Transfer as TransferEvent } from "../generated/FungibleTokenWrapper/FungibleTokenWrapper";
import { FungableToken, Transfer } from "../generated/schema";
import { Address } from "@graphprotocol/graph-ts";




function isFungibleToken(address:Address){
  const token = FungableToken.load(address.toI32());

}
function newTransfer(event: TransferEvent){
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractAddress = event.address
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}


enum TransactionType {
  Deposit,
  Withdraw,
  Transfer,
}

function getTransactionType(event:TransferEvent): TransactionType {
  const senderAddress = event.params.from;
  const receiverAddress = event.params.to;



}
export function handleTransfer(event: TransferEvent): void {
  const eventType =getTransactionType
}


