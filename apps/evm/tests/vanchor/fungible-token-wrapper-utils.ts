import { newMockEvent ,  } from "matchstick-as";
import {Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import { Transfer } from "../../generated/FungibleTokenWrapper/FungibleTokenWrapper";

export const VANCHOR_ADDRESS:string = "0x5d3b0d1ac094a8551bab3818eff758dc1893e6c7";
export const FUNGIBLE_TOKEN_WRAPPER_ADDRESS:string ="0xFdaACACb85484c4D492414F4911524F57d2549F4";
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



