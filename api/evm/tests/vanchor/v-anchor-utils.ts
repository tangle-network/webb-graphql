import { ethereum, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { Insertion } from "../../generated/VAnchor/VAnchor";
import { newMockEvent } from "../utils/mock-utils";


export function createInsertionEvent(
  commitment: BigInt,
  leafIndex: BigInt,
  timestamp: BigInt,
  input:Bytes,
): Insertion {
  let insertionEvent = changetype<Insertion>(newMockEvent(input))

  insertionEvent.parameters = new Array()

  insertionEvent.parameters.push(
    new ethereum.EventParam(
      "commitment",
      ethereum.Value.fromUnsignedBigInt(commitment)
    )
  )
  insertionEvent.parameters.push(
    new ethereum.EventParam(
      "leafIndex",
      ethereum.Value.fromUnsignedBigInt(leafIndex)
    )
  )
  insertionEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return insertionEvent
}

