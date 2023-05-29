import { assert, describe, test } from 'matchstick-as/assembly/index';
import { Address, BigInt, Bytes, ethereum, log } from '@graphprotocol/graph-ts';
import { ExternalData } from '../../src/utils/transact';
import { beforeAll, beforeEach, clearStore } from 'matchstick-as';
import { createInsertionEvent } from './v-anchor-utils';
import { buildTransactData } from '../utils/insertion-event.utils';
import { handleInsertion } from '../../src/vAnchor';

export const RECIPIENT_ADDRESS = Address.fromString('0x5d3b0d1ac094a8551bab3818eff758dc1893e6cA');
export const FUNGIBLE_TOKEN_WRAPPER_ADDRESS: Address = Address.fromString('0xFdaACACb85484c4D492414F4911524F57d2549F4');

function getTxnInputDataToDecode(txInput: Bytes): Bytes {
  const inputDataHexString = txInput.toHexString().slice(10); //take away function signature: '0x????????'
  const hexStringToDecode = '0x0000000000000000000000000000000000000000000000000000000000000020' + inputDataHexString; // prepend tuple offset
  return Bytes.fromByteArray(Bytes.fromHexString(hexStringToDecode));
}

describe('VAnchor transaction data', () => {
  beforeEach(() => {
    clearStore();
  });
  beforeAll(() => {
    clearStore();
  });

  test('Should create a deposit event', () => {
    const txData = buildTransactData(
      RECIPIENT_ADDRESS,
      BigInt.fromI32(30),
      Address.zero(),
      BigInt.fromI32(0),
      BigInt.fromI32(0),
      FUNGIBLE_TOKEN_WRAPPER_ADDRESS
    );

    const insertionEvent = createInsertionEvent(BigInt.fromI32(20), BigInt.fromI32(0), BigInt.fromI32(10), txData);
    handleInsertion(insertionEvent);
    // Ensure that the transaction is deposit
    assert.entityCount('DepositTx', 1);
    assert.entityCount('WithdrawTx', 0);
    assert.entityCount('TransferTx', 0);
  });

  test('Should create a withdraw event', () => {
    const txData = buildTransactData(
      RECIPIENT_ADDRESS,
      BigInt.fromI32(-30),
      Address.zero(),
      BigInt.fromI32(0),
      BigInt.fromI32(0),
      FUNGIBLE_TOKEN_WRAPPER_ADDRESS
    );

    const insertionEvent = createInsertionEvent(BigInt.fromI32(20), BigInt.fromI32(0), BigInt.fromI32(10), txData);
    handleInsertion(insertionEvent);
    // Ensure that the transaction is deposit
    assert.entityCount('DepositTx', 0);
    assert.entityCount('WithdrawTx', 1);
    assert.entityCount('TransferTx', 0);
  });

  test('Should create a transfer event', () => {
    const txData = buildTransactData(
      RECIPIENT_ADDRESS,
      BigInt.fromI32(0),
      Address.zero(),
      BigInt.fromI32(0),
      BigInt.fromI32(0),
      FUNGIBLE_TOKEN_WRAPPER_ADDRESS
    );

    const insertionEvent = createInsertionEvent(BigInt.fromI32(20), BigInt.fromI32(0), BigInt.fromI32(10), txData);
    handleInsertion(insertionEvent);
    // Ensure that the transaction is deposit
    assert.entityCount('DepositTx', 0);
    assert.entityCount('WithdrawTx', 0);
    assert.entityCount('TransferTx', 1);
  });

  test('build tx data', () => {
    const txData = buildTransactData(
      Address.zero(),
      BigInt.fromI32(30),
      Address.zero(),
      BigInt.fromI32(0),
      BigInt.fromI32(0),
      Address.zero()
    );
    const callInput = getTxnInputDataToDecode(txData);

    const data = ethereum.decode(
      '(bytes,bytes,(address,int256,address,uint256,uint256,address),(bytes,bytes,uint256[],uint256[2],uint256,uint256),(bytes,bytes))',
      callInput
    );
    if (data !== null) {
      const inputs = data.toTuple();
      const externalData = inputs[2];
      if (externalData !== null) {
        const extData = ExternalData.fromEthereumValue(externalData);
        assert.addressEquals(extData.recipient, Address.zero());
        assert.bigIntEquals(extData.amount, BigInt.fromI32(30));
        assert.addressEquals(extData.relayer, Address.zero());
        assert.bigIntEquals(extData.fee, BigInt.fromI32(0));
        assert.bigIntEquals(extData.refund, BigInt.fromI32(0));
        assert.addressEquals(extData.token, Address.zero());
      } else {
        log.info('Failed to ext decode data', []);
        throw 'failed';
      }
    } else {
      log.info('Failed to decode data', []);
      throw 'failed';
    }
  });
});
