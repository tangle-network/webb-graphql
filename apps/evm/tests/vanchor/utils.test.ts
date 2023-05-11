import { describe, test, assert } from 'matchstick-as/assembly/index';
import { Address, BigInt, Bytes, ethereum, log } from '@graphprotocol/graph-ts';
import { ExternalData } from '../../src/utils/transact';
import { beforeAll, beforeEach, clearStore } from 'matchstick-as';
import { createInsertionEvent } from './v-anchor-utils';
import { buildTransactData } from '../utils/insertion-event.utils';
import { handleInsertion } from '../../src/vAnchor';
export const VANCHOR_ADDRESS: Address = Address.fromString('0x5d3b0d1ac094a8551bab3818eff758dc1893e6c7');

export const RECIPIENT_ADDRESS = Address.fromString('0x5d3b0d1ac094a8551bab3818eff758dc1893e6cA');
export const FUNGIBLE_TOKEN_WRAPPER_ADDRESS: Address = Address.fromString('0xFdaACACb85484c4D492414F4911524F57d2549F4');

const rawTransactInput: string =
  '0xa38f76e800000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000260000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002540be400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fdaacacb85484c4d492414f4911524f57d2549f400000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000000000000000000000000000000000000000052000000000000000000000000000000000000000000000000000000000000001001fd21e99911c230bec43bbdf2fc097b032027f1dc78795d5fdf2f1f5e08cab661069f320b207f6992027712422cf0228d96d0e885efabaaffa79542c85ba2c2328536407095e9e07d2e76b27b9dd9bea437c47c2710ef158c3634397ef07e59d08e93f2872c2833fb43a5e232685f28141225c9df192b5460bd45a9b4b5b8c13282aee66f6ce4e1f2e0a053d6470dfce55db1e05130bda157e28aab34a758ec417d9864393d84caee36a9d1eb1c23ac3863424b88df29afc846f082f264bd88922cfd0dd7951f6ae66a2a63735ba3748d08509ed2db0407224449e92090acc7203d99cbe1bc5b19657b459d9776590419c6e341b34406e97c617e841d6a4e1810000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000220060ab61b0487e5ec093d922d881fdfd3edb21b66a685213268f442f5c71b14bf13840971c639d9e40ed2ff1ee4ac8e9c64d9003b11e02a8018a4315d4f623de900000000000000000000000000000000000000000000000000000002540be4002ec025804780b6944023194eec136afa29e028d8ae6c43176935e5fc2052363b00000000000000000000000000000000000000000000000000000000000001001e561f4e2c4b901e60f9ec970df57e4f1c0c6929847948031f6b80279179887923ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f18723ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f18723ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f18723ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f18723ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f18723ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f18723ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f1870000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000204daeeef7eba1a3c28a7e2fdd29da431919ee92834f5655f5e0e588b29775c3225e28d00e93da6ec37a29e6a1329551d463900df1bf24cb1989eee32625f87310000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000a887ef702a6d93ae89b9727c2eeab58c5746a61fd92e570a4360abda3d13aba6fa12aa1c8b111198b84688f5b75361abf82f8ec9bd1fd75572e982e52205a23a9789ac713d81de56462a7e139352913e532a97704257a010265e7b74b6706f8b88a4cbbfcaf7d76a5b1102ba5d72e94b698c40d570edb146693c1b3321681ea48ad924cef9e23ff382753338ee538f7f12e33d019d22097d51a80fb4d2b14241bdcdcd97ff465b88b100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a8645773225dc918af1351f14bb63aad9a42be749a6ce6f3b87ab5508b73d4bd9dcf853d927a033864af87e5496fa7cbb9cfb17df7ebc5672f2e29dd01baed88fe3a91333c72cc8fd0bc89ff8171e15ce518cd0795f09db1764161eb01b31f3c406494159a2bb57c06c6ebc64a834d646d01f9c1c80b6281396d19ebc0510cf8f65ed6561818b23c0b048d2c846f2b8e557321ebae57df9c8b91749aa7180aa1a6411c06248005e0a5000000000000000000000000000000000000000000000000';
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
