import {
  EdgeAddition as EdgeAdditionEvent,
  EdgeUpdate as EdgeUpdateEvent,
  Insertion as InsertionEvent,
  NewCommitment as NewCommitmentEvent,
  NewNullifier as NewNullifierEvent,
  PublicKey as PublicKeyEvent,
} from '../generated/VAnchor/VAnchor';
import { EdgeAddition, EdgeUpdate, Insertion, NewCommitment, NewNullifier, PublicKey } from '../generated/schema';
import { Bytes, ethereum, log } from '@graphprotocol/graph-ts';

/**
 * EdgeAddition event handler
 *  - An Edge linking event
 *
 * */
export function handleEdgeAddition(event: EdgeAdditionEvent): void {
  let entity = new EdgeAddition(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.chainID = event.params.chainID;
  entity.latestLeafIndex = event.params.latestLeafIndex;
  entity.merkleRoot = event.params.merkleRoot;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
/**
 *
 * EdgeUpdate event handler
 * - An Edge linking event
 *
 *
 *
 *
 * */
export function handleEdgeUpdate(event: EdgeUpdateEvent): void {
  let entity = new EdgeUpdate(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.chainID = event.params.chainID;
  entity.latestLeafIndex = event.params.latestLeafIndex;
  entity.merkleRoot = event.params.merkleRoot;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

// ethabi cargo crate does not expect function signature, but instead expects a tuple offset.
function getTxnInputDataToDecode(event: ethereum.Event): Bytes {
  const inputDataHexString = event.transaction.input.toHexString().slice(10); //take away function signature: '0x????????'
  const hexStringToDecode = '0x0000000000000000000000000000000000000000000000000000000000000020' + inputDataHexString; // prepend tuple offset
  return Bytes.fromByteArray(Bytes.fromHexString(hexStringToDecode));
}
/**
 * Insertion event handler
 *  - System Merkle tree insertion event
 *
 *
 * */
export function handleInsertion(event: InsertionEvent): void {
  const callInput = getTxnInputDataToDecode(event);
  const data = ethereum.decode(
    '(bytes,bytes,(address,int256,address,uint256,uint256,address),(bytes,bytes,uint256[],uint256[2],uint256,uint256),(bytes,bytes))',
    Bytes.fromUint8Array(callInput)
  );
  if (data !== null) {
    const inputs = data.toTuple();
    // const proof = input[0];
    // const auxPublicInputs = inputs[1];
    const externalData = inputs[2];
    // const publicInputs = inputs[3];
    // const encryptions = inputs[4];
    if (externalData !== null) {
      const externalDataList = externalData.toTuple();

      log.info('External data form tx , recipient {} extAmount {} relayer {} fee {} refund {} token {}', [
        externalDataList[0].toAddress().toHexString(),
        externalDataList[1].toBigInt().toString(),
        externalDataList[2].toAddress().toHexString(),
        externalDataList[3].toBigInt().toString(),
        externalDataList[4].toBigInt().toString(),
        externalDataList[5].toAddress().toHexString(),
      ]);
    }
  } else {
    log.info('Data is null', []);
  }
  let entity = new Insertion(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.commitment = event.params.commitment;
  entity.leafIndex = event.params.leafIndex;
  entity.timestamp = event.params.timestamp;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
/**
 * NewCommitment event handler
 *  - Leaf commitment insertion on a subtree
 *
 *
 * */
export function handleNewCommitment(event: NewCommitmentEvent): void {
  log.info('Handler for new commitment', []);
  let entity = new NewCommitment(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.commitment = event.params.commitment;
  entity.subTreeIndex = event.params.subTreeIndex;
  entity.leafIndex = event.params.leafIndex;
  entity.encryptedOutput = event.params.encryptedOutput;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

/**
 * NewNullifier event handler
 *  - New nullifier is emitted when execution the commitment insertion
 *
 * */
export function handleNewNullifier(event: NewNullifierEvent): void {
  let entity = new NewNullifier(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.nullifier = event.params.nullifier;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

/**
 * PublicKey event handler
 *  -  New public key is register
 * */
export function handlePublicKey(event: PublicKeyEvent): void {
  let entity = new PublicKey(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.owner = event.params.owner;
  entity.key = event.params.key;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
