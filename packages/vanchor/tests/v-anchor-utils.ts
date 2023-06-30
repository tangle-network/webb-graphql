import { newMockEvent } from 'matchstick-as';
import { ethereum, BigInt, Bytes, Address } from '@graphprotocol/graph-ts';
import {
  EdgeAddition,
  EdgeUpdate,
  Insertion,
  NewCommitment,
  NewNullifier,
  PublicKey,
} from '../generated/VAnchor/VAnchor';

export function createEdgeAdditionEvent(chainID: bigint, latestLeafIndex: bigint, merkleRoot: bigint): EdgeAddition {
  const edgeAdditionEvent = changetype<EdgeAddition>(newMockEvent());

  edgeAdditionEvent.parameters = [];

  edgeAdditionEvent.parameters.push(new ethereum.EventParam('chainID', ethereum.Value.fromUnsignedBigInt(chainID)));
  edgeAdditionEvent.parameters.push(
    new ethereum.EventParam('latestLeafIndex', ethereum.Value.fromUnsignedBigInt(latestLeafIndex))
  );
  edgeAdditionEvent.parameters.push(
    new ethereum.EventParam('merkleRoot', ethereum.Value.fromUnsignedBigInt(merkleRoot))
  );

  return edgeAdditionEvent;
}

export function createEdgeUpdateEvent(chainID: bigint, latestLeafIndex: bigint, merkleRoot: bigint): EdgeUpdate {
  const edgeUpdateEvent = changetype<EdgeUpdate>(newMockEvent());

  edgeUpdateEvent.parameters = [];

  edgeUpdateEvent.parameters.push(new ethereum.EventParam('chainID', ethereum.Value.fromUnsignedBigInt(chainID)));
  edgeUpdateEvent.parameters.push(
    new ethereum.EventParam('latestLeafIndex', ethereum.Value.fromUnsignedBigInt(latestLeafIndex))
  );
  edgeUpdateEvent.parameters.push(new ethereum.EventParam('merkleRoot', ethereum.Value.fromUnsignedBigInt(merkleRoot)));

  return edgeUpdateEvent;
}

export function createInsertionEvent(
  commitment: bigint,
  leafIndex: bigint,
  timestamp: bigint,
  newMerkleRoot: bigint
): Insertion {
  const insertionEvent = changetype<Insertion>(newMockEvent());

  insertionEvent.parameters = [];

  insertionEvent.parameters.push(new ethereum.EventParam('commitment', ethereum.Value.fromUnsignedBigInt(commitment)));
  insertionEvent.parameters.push(new ethereum.EventParam('leafIndex', ethereum.Value.fromUnsignedBigInt(leafIndex)));
  insertionEvent.parameters.push(new ethereum.EventParam('timestamp', ethereum.Value.fromUnsignedBigInt(timestamp)));
  insertionEvent.parameters.push(
    new ethereum.EventParam('newMerkleRoot', ethereum.Value.fromUnsignedBigInt(newMerkleRoot))
  );

  return insertionEvent;
}

export function createNewCommitmentEvent(
  commitment: bigint,
  subTreeIndex: bigint,
  leafIndex: bigint,
  encryptedOutput: Bytes
): NewCommitment {
  const newCommitmentEvent = changetype<NewCommitment>(newMockEvent());

  newCommitmentEvent.parameters = [];

  newCommitmentEvent.parameters.push(
    new ethereum.EventParam('commitment', ethereum.Value.fromUnsignedBigInt(commitment))
  );
  newCommitmentEvent.parameters.push(
    new ethereum.EventParam('subTreeIndex', ethereum.Value.fromUnsignedBigInt(subTreeIndex))
  );
  newCommitmentEvent.parameters.push(
    new ethereum.EventParam('leafIndex', ethereum.Value.fromUnsignedBigInt(leafIndex))
  );
  newCommitmentEvent.parameters.push(
    new ethereum.EventParam('encryptedOutput', ethereum.Value.fromBytes(encryptedOutput))
  );

  return newCommitmentEvent;
}

export function createNewNullifierEvent(nullifier: bigint): NewNullifier {
  const newNullifierEvent = changetype<NewNullifier>(newMockEvent());

  newNullifierEvent.parameters = [];

  newNullifierEvent.parameters.push(new ethereum.EventParam('nullifier', ethereum.Value.fromUnsignedBigInt(nullifier)));

  return newNullifierEvent;
}

export function createPublicKeyEvent(owner: Address, key: Bytes): PublicKey {
  const publicKeyEvent = changetype<PublicKey>(newMockEvent());

  publicKeyEvent.parameters = [];

  publicKeyEvent.parameters.push(new ethereum.EventParam('owner', ethereum.Value.fromAddress(owner)));
  publicKeyEvent.parameters.push(new ethereum.EventParam('key', ethereum.Value.fromBytes(key)));

  return publicKeyEvent;
}
