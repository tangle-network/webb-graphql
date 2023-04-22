import { Address, BigInt, Bytes, log } from '@graphprotocol/graph-ts';
import { Transfer as TransferEvent } from '../generated/FungibleTokenWrapper/FungibleTokenWrapper';
import { DepositTx, Transfer, VAnchor, WithdrawTx, FungibleToken } from '../generated/schema';
import { isVAnchorAddress } from './utils/consts';
import { fetchTokenData } from "./utils/token";

function ensureFungibleToken(fTAddress: Address): FungibleToken {
  const ft = FungibleToken.load(fTAddress);
  if (ft) {
    return ft;
  }
  let newFT = new FungibleToken(fTAddress);
  const tokenData = fetchTokenData(fTAddress);
  newFT.contractAddress = fTAddress;
  newFT.typedChainId = BigInt.fromI32(0);
  newFT.symbol = Bytes.fromUTF8(tokenData.symbol);
  newFT.name = Bytes.fromUTF8(tokenData.name);

  return newFT;
}
/**
 *
 * Ensures that the vAnchor instance is created and added to the database
 *
 * */
function ensureVAnchor(contractAddress: Address, fungibleTokenAddress: Address): VAnchor {
  const vAnchor = VAnchor.load(contractAddress);
  ensureFungibleToken(fungibleTokenAddress);
  if (vAnchor) {
    return vAnchor;
  }
  const newVAnchor = new VAnchor(contractAddress);
  newVAnchor.contractAddress = contractAddress;
  newVAnchor.chainId = BigInt.fromI32(0);
  newVAnchor.valueLocked = BigInt.fromI32(0);
  newVAnchor.token = fungibleTokenAddress;
  newVAnchor.save();
  return newVAnchor;
}

function newTransfer(event: TransferEvent): void {
  let entity = new Transfer(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.contractAddress = event.address;
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

enum TransactionType {
  Deposit,
  Withdraw,
  Transfer,
}

function getTransactionType(event: TransferEvent): TransactionType {
  const senderAddress = event.params.from;
  const receiverAddress = event.params.to;

  // Check for Deposit
  if (isVAnchorAddress(receiverAddress)) {
    return TransactionType.Deposit;
  }
  if (isVAnchorAddress(senderAddress)) {
    return TransactionType.Withdraw;
  }

  return TransactionType.Transfer;
}

function getTransactionTypeMessage(transactionType: TransactionType): string {
  switch (transactionType) {
    case TransactionType.Deposit:
      return 'deposit';
    case TransactionType.Withdraw:
      return 'withdraw';
    case TransactionType.Transfer:
      return 'transfer';
    default:
      return 'transfer+def';
  }
}

/**
 * Create a vAnchor transaction id helper
 *
 * */
export function formatVAnchorTransactionId(txHash: Bytes, logIndex: i32): Bytes {
  return txHash.concatI32(logIndex);
}

function decreaseVAnchorVolume(vAnchorAddress: Address, tokenAddress: Address, value: BigInt): void {
  const vAnchor = ensureVAnchor(vAnchorAddress, tokenAddress);
  vAnchor.valueLocked = vAnchor.valueLocked.minus(value);
  vAnchor.save();
}
/**
 *
 * Increase the volume of the vAnchor on deposits
 * */
function increaseVAnchorVolume(vAnchorAddress: Address, tokenAddress: Address, value: BigInt): void {
  const vAnchor = ensureVAnchor(vAnchorAddress, tokenAddress);
  vAnchor.valueLocked = vAnchor.valueLocked.plus(value);
  vAnchor.save();
}

/**
 * Handles the storage of vAnchor Deposit transactions
 * And Decreases the volume locked
 * */
function handleDepositTx(event: TransferEvent): void {
  const id = formatVAnchorTransactionId(event.transaction.hash, event.logIndex.toI32());
  let entity = new DepositTx(id);
  entity.fungibleTokenWrapper = event.address;
  entity.depositor = event.params.from;
  entity.value = event.params.value;
  entity.vAnchorAddress = event.params.to;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
  increaseVAnchorVolume(event.params.to, event.address, event.params.value);
}

/**
 * Handles the storage of vAnchor withdraw transactions
 * And Decreases the volume locked
 * */
function handleWithdrawTx(event: TransferEvent): void {
  const id = formatVAnchorTransactionId(event.transaction.hash, event.logIndex.toI32());

  let entity = new WithdrawTx(id);
  entity.fungibleTokenWrapper = event.address;
  entity.beneficiary = event.params.to;
  entity.vAnchorAddress = event.params.from;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();

  decreaseVAnchorVolume(event.params.from, event.address, event.params.value);
}
/**
 *
 * Handler for FungibleTokenWrapper transfer event
 *
 * */
export function handleTransfer(event: TransferEvent): void {
  log.debug("Handler transfer works" , [])
  const eventType = getTransactionType(event);
  log.debug(`Event type for vAnchor {}`, [getTransactionTypeMessage(eventType)]);
  switch (eventType) {
    case TransactionType.Deposit:
      handleDepositTx(event);
      break;
    case TransactionType.Withdraw:
      handleWithdrawTx(event);
      break;
    case TransactionType.Transfer:
      break;
  }
}
