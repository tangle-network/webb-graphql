import { newMockEvent ,  } from "matchstick-as";
import {Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import { Transfer } from "../../generated/FungibleTokenWrapper/FungibleTokenWrapper";


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

  transferEvent.address = Address.fromString("0x4e3df2073bf4b43b9944b8e5a463b1e185d6448c");
  return transferEvent
}



