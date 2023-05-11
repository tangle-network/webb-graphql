import { Insertion as InsertionEvent } from "../generated/VAnchor/VAnchor";
import { DepositTx, Insertion, TransferTx, VAnchor, WithdrawTx } from "../generated/schema";
import { Address, BigInt, Bytes, ethereum, log } from "@graphprotocol/graph-ts";
import { ExternalData, TransactionType } from "./utils/transact";
import { updateVAnchorDayData } from "./day-data";
import { ONE_BI } from "./utils/consts";

/**
 * Ensure that the vAnchor entity is created and stored
 *
 * */
function ensureVAnchor(address: Address): VAnchor {
  const vAnchor = VAnchor.load(address.toHexString());
  if (vAnchor) {
    return vAnchor;
  }
  let newVAnchor = new VAnchor(address.toHexString());
  newVAnchor.chainId = BigInt.fromI32(0);
  newVAnchor.contractAddress = address;
  newVAnchor.valueLocked = BigInt.fromI32(0);
  newVAnchor.finalValueLocked = BigInt.fromI32(0);
  newVAnchor.totalFees = BigInt.fromI32(0);

  newVAnchor.numberOfDeposits = BigInt.fromI32(0);
  newVAnchor.averageDepositAmount = BigInt.fromI32(0);
  newVAnchor.maxDepositAmount = BigInt.fromI32(0);
  newVAnchor.minDepositAmount = BigInt.fromI32(0);

  newVAnchor.numberOfWithdraws = BigInt.fromI32(0);
  newVAnchor.averageWithdrawAmount = BigInt.fromI32(0);
  newVAnchor.maxWithdrawAmount = BigInt.fromI32(0);
  newVAnchor.minWithdrawAmount = BigInt.fromI32(0);

  newVAnchor.save();
  return newVAnchor;
}
/**
 * Handling the  vAnchor side effect for withdraw transaction
 *
 * */

function vAnchorWithdrawSideEffect(vAnchor: VAnchor, amount: BigInt, finalAmount: BigInt): void {
  vAnchor.valueLocked = vAnchor.valueLocked.minus(amount);
  vAnchor.finalValueLocked = vAnchor.finalValueLocked.minus(finalAmount);

  vAnchor.numberOfWithdraws = vAnchor.numberOfWithdraws.plus(ONE_BI);
  // update the max withdraw amount
  if (vAnchor.maxWithdrawAmount.lt(amount)) {
    vAnchor.maxWithdrawAmount = amount;
  }
  if (vAnchor.minWithdrawAmount.gt(amount)) {
    vAnchor.minWithdrawAmount = amount;
  }
  vAnchor.averageWithdrawAmount = vAnchor.valueLocked.div(vAnchor.numberOfWithdraws);

  vAnchor.save();
}

/**
 * Handling the  vAnchor side effect for depoist transaction
 *
 * */

function vAnchorDepositSideEffect(vAnchor: VAnchor, amount: BigInt, finalAmount: BigInt): void {
  vAnchor.valueLocked = vAnchor.valueLocked.plus(amount);
  vAnchor.finalValueLocked = vAnchor.finalValueLocked.plus(finalAmount);

  vAnchor.numberOfDeposits = vAnchor.numberOfDeposits.plus(ONE_BI);
  // update the max withdraw amount
  if (vAnchor.maxDepositAmount.lt(amount)) {
    vAnchor.maxDepositAmount = amount;
  }
  if (vAnchor.minDepositAmount.gt(amount)) {
    vAnchor.minDepositAmount = amount;
  }
  vAnchor.averageDepositAmount = vAnchor.valueLocked.div(vAnchor.numberOfDeposits);

  vAnchor.save();
}

function updateFee(vAnchor: VAnchor, fees: BigInt): void {
  vAnchor.totalFees = vAnchor.totalFees.plus(fees);
  vAnchor.save();
}

/*
 * Setup the tx data from the tx input
 * Adding the tuple prefix
 * */
export function getTxnInputDataToDecode(txInput: Bytes): Bytes {
  const inputDataHexString = txInput.toHexString().slice(10); //take away function signature: '0x????????'
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
  const callInput = getTxnInputDataToDecode(event.transaction.input);

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
      let txId = event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString();
      // Update fees
      updateFee(vAnchor, fees);
      log.info('Transaction type {}', [transactionType.toString()]);
      if (transactionType === TransactionType.Deposit) {
        let entity = new DepositTx(txId);

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
        vAnchorDepositSideEffect(vAnchor, amount, finalAmount);
      } else if (transactionType === TransactionType.Withdraw) {
        let entity = new WithdrawTx(txId);

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
        vAnchorWithdrawSideEffect(vAnchor, amount, finalAmount);
      } else if (transactionType === TransactionType.Transfer) {
        let entity = new TransferTx(txId);
        entity.from = event.transaction.from;
        entity.to = extData.recipient;
        entity.contractAddress = event.address;
        entity.value = amount;
        entity.finalValue = finalAmount;
        entity.fee = fees;

        entity.blockNumber = event.block.number;
        entity.blockTimestamp = event.block.timestamp;
        entity.transactionHash = event.transaction.hash;
        entity.save();
      }
      updateVAnchorDayData(event.block, vAnchor, extData, txId);
    }
  } else {
    log.info('Data is null', []);
  }
  let entity = new Insertion(event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString());
  entity.commitment = event.params.commitment;
  entity.leafIndex = event.params.leafIndex;
  entity.timestamp = event.params.timestamp;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
