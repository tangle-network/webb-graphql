import {assert, beforeAll, beforeEach, clearStore, describe, test} from 'matchstick-as/assembly/index';
import {Address, BigInt} from '@graphprotocol/graph-ts';
import {createTransferEvent} from './fungible-token-wrapper-utils';
import {formatVAnchorTransactionId, handleTransfer} from '../../src/fungible-token-wrapper';

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe('Fungible token wrapper transaction', () => {

  beforeEach(() =>{
    clearStore();

  })
  beforeAll(() => {
    clearStore();
  });

  test('anchor volume should be fine with multiple withdraw and deposits' ,() =>{
    const vAnchorAddress = Address.fromString('0xc705034ded85e817b9e56c977e61a2098362898b');
    const vAnchorId = vAnchorAddress.toHexString();

    let vAnchorAmount = 0;

    // Deposits
    for( let i = 0; i < 10 ; i++){
      let from = Address.fromString('0x0000000000000000000000000000000000000001');
      let to = Address.fromString('0xc705034ded85e817b9e56c977e61a2098362898b');
      let value = BigInt.fromI32(234);
      let newTransferEvent = createTransferEvent(from, to, value);
      handleTransfer(newTransferEvent);
      vAnchorAmount = vAnchorAmount + 234;
    }
    assert.fieldEquals('VAnchor', vAnchorId, 'valueLocked', vAnchorAmount.toString());


  })

  test('VAnchor volume change with withdrawing and depositing', () => {
    const vAnchorAddress = Address.fromString('0xc705034ded85e817b9e56c977e61a2098362898b');
    const vAnchorId = vAnchorAddress.toHexString();

    // Add a deposit
    let user = Address.fromString('0x0000000000000000000000000000000000000001');
    let vAnchor = Address.fromString('0xc705034ded85e817b9e56c977e61a2098362898b');
    let value = BigInt.fromI32(234);
    let depositEvent = createTransferEvent(user, vAnchor, value);

    handleTransfer(depositEvent);

    assert.entityCount('VAnchor', 1);

    assert.fieldEquals('VAnchor', vAnchorId, 'contractAddress', '0xc705034ded85e817b9e56c977e61a2098362898b');
    // Although the volume shouldn't go lower than 0
    assert.fieldEquals('VAnchor', vAnchorId, 'valueLocked', '234');
    let withdrawEvent = createTransferEvent(vAnchor, user, value);

    handleTransfer(withdrawEvent);
    // Ensure there is only one vAnchor
    assert.entityCount('VAnchor', 1);


    assert.fieldEquals('VAnchor', vAnchorId, 'valueLocked', '0');


  });

  test('The deposit transaction is  created and stored', () => {
    let vAnchor = Address.fromString('0xc705034ded85e817b9e56c977e61a2098362898b');
    let user = Address.fromString('0x0000000000000000000000000000000000000001');
    let value = BigInt.fromI32(234);
    let transferEvent = createTransferEvent(vAnchor, user, value);
    handleTransfer(transferEvent);

    const id = formatVAnchorTransactionId(
      transferEvent.transaction.hash,
      transferEvent.logIndex.toI32()
    ).toHexString();
    assert.entityCount('WithdrawTx', 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals('WithdrawTx', id, 'vAnchorAddress', '0xc705034ded85e817b9e56c977e61a2098362898b');
    assert.fieldEquals('WithdrawTx', id, 'beneficiary', '0x0000000000000000000000000000000000000001');
    assert.fieldEquals('WithdrawTx', id, 'fungibleTokenWrapper', '0x4e3df2073bf4b43b9944b8e5a463b1e185d6448c');

    assert.fieldEquals('WithdrawTx', id, 'value', '234');
  });

  test('The deposit transaction is  created and stored', () => {
    let user = Address.fromString('0x0000000000000000000000000000000000000001');
    let vAnchor = Address.fromString('0xc705034ded85e817b9e56c977e61a2098362898b');
    let value = BigInt.fromI32(234);
    let transferEvent = createTransferEvent(user, vAnchor, value);
    handleTransfer(transferEvent);

    const id = formatVAnchorTransactionId(
      transferEvent.transaction.hash,
      transferEvent.logIndex.toI32()
    ).toHexString();
    assert.entityCount('DepositTx', 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals('DepositTx', id, 'vAnchorAddress', '0xc705034ded85e817b9e56c977e61a2098362898b');
    assert.fieldEquals('DepositTx', id, 'depositor', '0x0000000000000000000000000000000000000001');
    assert.fieldEquals('DepositTx', id, 'fungibleTokenWrapper', '0x4e3df2073bf4b43b9944b8e5a463b1e185d6448c');

    assert.fieldEquals('DepositTx', id, 'value', '234');
  });
});
