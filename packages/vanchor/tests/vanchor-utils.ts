import { newMockEvent } from 'matchstick-as';
import { ethereum, BigInt, Bytes, Address } from '@graphprotocol/graph-ts';
import {
  EdgeAddition,
  EdgeUpdate,
  Insertion,
  NewCommitment,
  NewNullifier,
  PublicKey,
} from '../generated/vanchor/vanchor';

export function createEdgeAdditionEvent(
  chainID: BigInt,
  latestLeafIndex: BigInt,
  merkleRoot: BigInt
): EdgeAddition {
  let edgeAdditionEvent = changetype<EdgeAddition>(newMockEvent());

  edgeAdditionEvent.parameters = new Array();

  edgeAdditionEvent.parameters.push(
    new ethereum.EventParam(
      'chainID',
      ethereum.Value.fromUnsignedBigInt(chainID)
    )
  );
  edgeAdditionEvent.parameters.push(
    new ethereum.EventParam(
      'latestLeafIndex',
      ethereum.Value.fromUnsignedBigInt(latestLeafIndex)
    )
  );
  edgeAdditionEvent.parameters.push(
    new ethereum.EventParam(
      'merkleRoot',
      ethereum.Value.fromUnsignedBigInt(merkleRoot)
    )
  );

  return edgeAdditionEvent;
}

export function createEdgeUpdateEvent(
  chainID: BigInt,
  latestLeafIndex: BigInt,
  merkleRoot: BigInt
): EdgeUpdate {
  let edgeUpdateEvent = changetype<EdgeUpdate>(newMockEvent());

  edgeUpdateEvent.parameters = new Array();

  edgeUpdateEvent.parameters.push(
    new ethereum.EventParam(
      'chainID',
      ethereum.Value.fromUnsignedBigInt(chainID)
    )
  );
  edgeUpdateEvent.parameters.push(
    new ethereum.EventParam(
      'latestLeafIndex',
      ethereum.Value.fromUnsignedBigInt(latestLeafIndex)
    )
  );
  edgeUpdateEvent.parameters.push(
    new ethereum.EventParam(
      'merkleRoot',
      ethereum.Value.fromUnsignedBigInt(merkleRoot)
    )
  );

  return edgeUpdateEvent;
}

export function createInsertionEvent(
  commitment: BigInt,
  leafIndex: BigInt,
  timestamp: BigInt,
  newMerkleRoot: BigInt
): Insertion {
  let insertionEvent = changetype<Insertion>(newMockEvent());

  insertionEvent.parameters = new Array();

  insertionEvent.parameters.push(
    new ethereum.EventParam(
      'commitment',
      ethereum.Value.fromUnsignedBigInt(commitment)
    )
  );
  insertionEvent.parameters.push(
    new ethereum.EventParam(
      'leafIndex',
      ethereum.Value.fromUnsignedBigInt(leafIndex)
    )
  );
  insertionEvent.parameters.push(
    new ethereum.EventParam(
      'timestamp',
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  );
  insertionEvent.parameters.push(
    new ethereum.EventParam(
      'newMerkleRoot',
      ethereum.Value.fromUnsignedBigInt(newMerkleRoot)
    )
  );

  return insertionEvent;
}

export function createNewCommitmentEvent(
  commitment: BigInt,
  subTreeIndex: BigInt,
  leafIndex: BigInt,
  encryptedOutput: Bytes
): NewCommitment {
  let newCommitmentEvent = changetype<NewCommitment>(newMockEvent());

  newCommitmentEvent.parameters = new Array();

  newCommitmentEvent.parameters.push(
    new ethereum.EventParam(
      'commitment',
      ethereum.Value.fromUnsignedBigInt(commitment)
    )
  );
  newCommitmentEvent.parameters.push(
    new ethereum.EventParam(
      'subTreeIndex',
      ethereum.Value.fromUnsignedBigInt(subTreeIndex)
    )
  );
  newCommitmentEvent.parameters.push(
    new ethereum.EventParam(
      'leafIndex',
      ethereum.Value.fromUnsignedBigInt(leafIndex)
    )
  );
  newCommitmentEvent.parameters.push(
    new ethereum.EventParam(
      'encryptedOutput',
      ethereum.Value.fromBytes(encryptedOutput)
    )
  );

  return newCommitmentEvent;
}

export function createNewNullifierEvent(nullifier: BigInt): NewNullifier {
  let newNullifierEvent = changetype<NewNullifier>(newMockEvent());

  newNullifierEvent.parameters = new Array();

  newNullifierEvent.parameters.push(
    new ethereum.EventParam(
      'nullifier',
      ethereum.Value.fromUnsignedBigInt(nullifier)
    )
  );

  return newNullifierEvent;
}

export function createPublicKeyEvent(owner: Address, key: Bytes): PublicKey {
  let publicKeyEvent = changetype<PublicKey>(newMockEvent());

  publicKeyEvent.parameters = new Array();

  publicKeyEvent.parameters.push(
    new ethereum.EventParam('owner', ethereum.Value.fromAddress(owner))
  );
  publicKeyEvent.parameters.push(
    new ethereum.EventParam('key', ethereum.Value.fromBytes(key))
  );

  return publicKeyEvent;
}
