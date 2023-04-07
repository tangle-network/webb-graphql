import { newMockEvent ,  } from "matchstick-as";
import {Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import { Transfer } from "../../generated/FungibleTokenWrapper/FungibleTokenWrapper";

export const VANCHOR_ADDRESS:string = "0x968d628e0efc57371162d03c623e70af5d90553b";
export const FUNGIBLE_TOKEN_WRAPPER_ADDRESS:string ="0xe30aeb7ecb2e03617a2699d5773e0652f872bb41";
let logIndex = 0;
export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt,
): Transfer {
  const event = newMockEvent();
  event.logIndex  = BigInt.fromI32(logIndex);
  logIndex = logIndex + 1;
  let transferEvent = changetype<Transfer>(event)

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  transferEvent.address = Address.fromString(FUNGIBLE_TOKEN_WRAPPER_ADDRESS);
  return transferEvent
}



