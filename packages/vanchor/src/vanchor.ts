import {
  EdgeAddition as EdgeAdditionEvent,
  EdgeUpdate as EdgeUpdateEvent,
  Insertion as InsertionEvent,
  NewCommitment as NewCommitmentEvent,
  NewNullifier as NewNullifierEvent,
  PublicKey as PublicKeyEvent
} from "../generated/vanchor/vanchor"
import {
  EdgeAddition,
  EdgeUpdate,
  Insertion,
  NewCommitment,
  NewNullifier,
  PublicKey
} from "../generated/schema"

import { handleTransaction } from './transaction/schieldedTransaction';

export function handleEdgeAddition(event: EdgeAdditionEvent): void {
  let entity = new EdgeAddition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.chainID = event.params.chainID
  entity.latestLeafIndex = event.params.latestLeafIndex
  entity.merkleRoot = event.params.merkleRoot

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEdgeUpdate(event: EdgeUpdateEvent): void {
  let entity = new EdgeUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.chainID = event.params.chainID
  entity.latestLeafIndex = event.params.latestLeafIndex
  entity.merkleRoot = event.params.merkleRoot

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInsertion(event: InsertionEvent): void {
  let entity = new Insertion(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.commitment = event.params.commitment
  entity.leafIndex = event.params.leafIndex
  entity.timestamp = event.params.timestamp
  entity.newMerkleRoot = event.params.newMerkleRoot

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  handleTransaction(event)
}

export function handleNewCommitment(event: NewCommitmentEvent): void {
  let entity = new NewCommitment(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.commitment = event.params.commitment
  entity.subTreeIndex = event.params.subTreeIndex
  entity.leafIndex = event.params.leafIndex
  entity.encryptedOutput = event.params.encryptedOutput

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewNullifier(event: NewNullifierEvent): void {
  let entity = new NewNullifier(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nullifier = event.params.nullifier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePublicKey(event: PublicKeyEvent): void {
  let entity = new PublicKey(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.key = event.params.key

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
