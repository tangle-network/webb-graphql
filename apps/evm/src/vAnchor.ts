import {
  EdgeAddition as EdgeAdditionEvent,
  EdgeUpdate as EdgeUpdateEvent,
  Insertion as InsertionEvent,
  NewCommitment as NewCommitmentEvent,
  NewNullifier as NewNullifierEvent,
  PublicKey as PublicKeyEvent,
} from '../generated/VAnchor/VAnchor';
import {
  DepositTx,
  EdgeAddition,
  EdgeUpdate,
  Insertion,
  NewCommitment,
  NewNullifier,
  PublicKey,
  Transfer,
  WithdrawTx,
  VAnchor,
} from '../generated/schema';
import { Address, BigInt, Bytes, ethereum, log } from '@graphprotocol/graph-ts';
import { ExternalData, TransactionType } from './utils/transact';

/**
 * Ensure that the vAnchor entity is created and stored
 *
 * */
function ensureVAnchor(address: Address): VAnchor {
  const vAnchor = VAnchor.load(address);
  if (vAnchor) {
    return vAnchor;
  }
  let newVAnchor = new VAnchor(address);
  newVAnchor.chainId = BigInt.fromI32(0);
  newVAnchor.contractAddress = address;
  newVAnchor.valueLocked = BigInt.fromI32(0);
  newVAnchor.finalValueLocked = BigInt.fromI32(0);
  newVAnchor.totalFees = BigInt.fromI32(0);
  newVAnchor.save();
  return newVAnchor;
}
/**
 * increase vAnchor liquidity
 *
 * */

function increaseVAnchorTVL(vAnchor: VAnchor, amount: BigInt ,finalAmount:BigInt):void {
  vAnchor.valueLocked = vAnchor.valueLocked.plus(amount);
  vAnchor.finalValueLocked = vAnchor.finalValueLocked.plus(finalAmount);
  vAnchor.save();
}

/**
 * increase vAnchor liquidity
 *
 * */

function decreaseVAnchorTVL(vAnchor: VAnchor, amount: BigInt,finalAmount:BigInt):void {
  vAnchor.valueLocked = vAnchor.valueLocked.minus(amount);
  vAnchor.finalValueLocked = vAnchor.finalValueLocked.minus(finalAmount);
  vAnchor.save();
}

function updateFee(vAnchor: VAnchor, fees: BigInt):void {
  vAnchor.totalFees = vAnchor.totalFees.plus(fees);
  vAnchor.save();
}

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

  // Decode the transaction
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
      const extData = ExternalData.fromEthereumValue(externalData);
      const vAnchorAddress = event.address;
      const vAnchor = ensureVAnchor(vAnchorAddress);
      const token = extData.token;
      const finalAmount = extData.getFinalAmount();
      const fees = extData.getFee();
      const amount = extData.amount;
      let transactionType = extData.getTransactionType();
      // Update fees
      updateFee(vAnchor, fees);
      if (transactionType === TransactionType.Deposit) {
        let entity = new DepositTx(event.transaction.hash.concatI32(event.logIndex.toI32()));

        entity.fungibleTokenWrapper = token;
        entity.depositor = event.transaction.from;

        entity.value = amount;
        entity.finalValue = finalAmount;
        entity.fee = fees;

        entity.vAnchorAddress = vAnchorAddress;

        entity.blockNumber = event.block.number;
        entity.blockTimestamp = event.block.timestamp;
        entity.transactionHash = event.transaction.hash;
        entity.save();
        // Update vAnchor volume locked
        increaseVAnchorTVL(vAnchor, amount ,finalAmount);
      } else if (transactionType === TransactionType.Withdraw) {
        let entity = new WithdrawTx(event.transaction.hash.concatI32(event.logIndex.toI32()));

        entity.fungibleTokenWrapper = token;
        entity.beneficiary = extData.recipient;

        entity.value = amount;
        entity.finalValue = finalAmount;
        entity.fee = fees;

        entity.vAnchorAddress = vAnchorAddress;
        entity.blockNumber = event.block.number;
        entity.blockTimestamp = event.block.timestamp;
        entity.transactionHash = event.transaction.hash;
        entity.save();

        // Update vAnchor volume locked
        decreaseVAnchorTVL(vAnchor, amount,finalAmount);
      } else if (transactionType === TransactionType.Transfer) {
        let entity = new Transfer(event.transaction.hash.concatI32(event.logIndex.toI32()));
        entity.from = event.transaction.from;
        entity.to = extData.recipient;

        entity.value = amount;
        entity.finalValue = finalAmount;
        entity.fee = fees;

        entity.blockNumber = event.block.number;
        entity.blockTimestamp = event.block.timestamp;
        entity.transactionHash = event.transaction.hash;
        entity.save();
      }
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