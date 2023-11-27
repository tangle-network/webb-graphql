import {
  EdgeAddition as EdgeAdditionEvent,
  EdgeUpdate as EdgeUpdateEvent,
  Insertion as InsertionEvent,
  NewCommitment as NewCommitmentEvent,
  NewNullifier as NewNullifierEvent,
  PublicKey as PublicKeyEvent,
} from '../generated/VAnchor/VAnchor';
import {
  EdgeAddition,
  EdgeUpdate,
  Insertion,
  NewCommitment,
  NewNullifier,
  PublicKey,
} from '../generated/schema';

import { handleTransaction } from './shieldedTransaction';

export function handleEdgeAddition(event: EdgeAdditionEvent): void {
  const entity = new EdgeAddition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.chainID = event.params.chainID;
  entity.latestLeafIndex = event.params.latestLeafIndex;
  entity.merkleRoot = event.params.merkleRoot;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleEdgeUpdate(event: EdgeUpdateEvent): void {
  const entity = new EdgeUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.chainID = event.params.chainID;
  entity.latestLeafIndex = event.params.latestLeafIndex;
  entity.merkleRoot = event.params.merkleRoot;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleInsertion(event: InsertionEvent): void {
  const entity = new Insertion(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.commitment = event.params.commitment;
  entity.leafIndex = event.params.leafIndex;
  entity.timestamp = event.params.timestamp;
  entity.newMerkleRoot = event.params.newMerkleRoot;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  handleTransaction(event);
}

export function handleNewCommitment(event: NewCommitmentEvent): void {
  const entity = new NewCommitment(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.commitment = event.params.commitment;
  entity.subTreeIndex = event.params.subTreeIndex;
  entity.leafIndex = event.params.leafIndex;
  entity.encryptedOutput = event.params.encryptedOutput;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleNewNullifier(event: NewNullifierEvent): void {
  const entity = new NewNullifier(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.nullifier = event.params.nullifier;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlePublicKey(event: PublicKeyEvent): void {
  const entity = new PublicKey(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.owner = event.params.owner;
  entity.key = event.params.key;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
