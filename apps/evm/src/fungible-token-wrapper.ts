import { Transfer as TransferEvent } from "../generated/FungibleTokenWrapper/FungibleTokenWrapper";
import { DepositTx, FungableToken, Transfer } from "../generated/schema";
import { Address } from "@graphprotocol/graph-ts";
import { isVAnchorAddress } from "./utils/consts";





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

  // Check for Deposit
  if(isVAnchorAddress(receiverAddress)){
    return TransactionType.Deposit
  }
  if(isVAnchorAddress(senderAddress)){
    return TransactionType.Deposit
  }
  // TODO : vAnchor transfer maynot relate to this
  return TransactionType.Transfer
}

function handleDepositTx(event: TransferEvent) {
  let entity = new DepositTx(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractAddress = event.address
  entity.depositor = event.params.from
  entity.value = event.params.value


  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

}

export function handleTransfer(event: TransferEvent): void {
  const eventType = getTransactionType(event);

  switch (eventType){
    case TransactionType.Deposit:
      break;
    case TransactionType.Withdraw:
      break;
    case TransactionType.Transfer:
      break;

  }

}


