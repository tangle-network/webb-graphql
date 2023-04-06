import { afterAll, assert, beforeAll, clearStore, describe, test } from "matchstick-as/assembly/index";
import { Address, BigInt } from "@graphprotocol/graph-ts";
import { createTransferEvent } from "./fungible-token-wrapper-utils";
import { handleTransfer } from "../src/fungible-token-wrapper";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let from = Address.fromString("0xc705034ded85e817b9E56C977E61A2098362898B")
    let to = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let value = BigInt.fromI32(234)
    let newApprovalEvent = createTransferEvent(from, to, value)
    handleTransfer(newApprovalEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("The withdraw transaction is  created and stored", () => {
    assert.entityCount("WithdrawTx", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "WithdrawTx",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "from",
      "0xc705034ded85e817b9E56C977E61A2098362898B"
    )
    assert.fieldEquals(
      "WithdrawTx",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "to",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "WithdrawTx",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "value",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
