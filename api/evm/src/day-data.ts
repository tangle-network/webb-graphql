import { BigInt, ethereum } from "@graphprotocol/graph-ts";
import { VAnchor, VAnchorDayData } from "../generated/schema";
import { TransactionType } from "./utils/transact";

export function ensureDay(block: ethereum.Block, vAnchor: VAnchor): VAnchorDayData {
  const timestamp = block.timestamp.toI32();
  const dayIndex = timestamp / 86400; // rounded
  const dayId = dayIndex.toString().concat("-").concat(vAnchor.id);
  const dayData = VAnchorDayData.load(dayId);

  if (dayData) {
    return dayData;
  }

  let newDayData = new VAnchorDayData(dayId);

  newDayData.date = timestamp;
  newDayData.vAnchor = vAnchor.id;
  newDayData.wrappingFees = BigInt.zero();
  newDayData.unWrappingFees = BigInt.zero();
  newDayData.relayerFees = BigInt.zero();
  newDayData.fees = BigInt.zero();

  newDayData.volume = BigInt.zero();

  newDayData.numberOfDeposits = BigInt.zero();
  newDayData.numberOfWithdraws = BigInt.zero();
  newDayData.numberOfTransfers = BigInt.zero();

  newDayData.depositTx = [];
  newDayData.withdrawTx = [];
  newDayData.transferTx = [];
  newDayData.startBlockNumber = block.number;
  newDayData.save();

  return newDayData;
}

export class DayDataPayload {
  public relayerFees: BigInt;
  public wrappingFees: BigInt;
  public unWrappingFees: BigInt;
  public finalAmount: BigInt;
  public txType: TransactionType;

  constructor(
    relayerFees: BigInt,
    wrappingFees: BigInt,
    unWrappingFees: BigInt,
    finalAmount: BigInt,
    txType: TransactionType
  ) {
    this.relayerFees = relayerFees;
    this.wrappingFees = wrappingFees;
    this.unWrappingFees = unWrappingFees;
    this.finalAmount = finalAmount;
    this.txType = txType;
  }

  static default(): DayDataPayload {
    return new DayDataPayload(BigInt.zero(), BigInt.zero(), BigInt.zero(), BigInt.zero(), TransactionType.Deposit);
  }

  get totalFees(): BigInt {
    return this.relayerFees.plus(this.wrappingFees).plus(this.unWrappingFees);
  }
}

/**
 * Update vAnchor day data
 *
 * */
export function updateVAnchorDayData(
  block: ethereum.Block,
  vAnchor: VAnchor,
  dayDataPayload: DayDataPayload,
  txId: string
): void {
  const vAnchorDayData = ensureDay(block, vAnchor);
  const finalAmount = dayDataPayload.finalAmount;
  const fee = dayDataPayload.totalFees;
  const txType = dayDataPayload.txType;
  // Check for deposit tx to store the number of deposits and other relatd data
  if (txType === TransactionType.Deposit) {
    vAnchorDayData.numberOfDeposits = vAnchorDayData.numberOfDeposits.plus(BigInt.fromI32(1));
    const depositTransactions = vAnchorDayData.depositTx;
    depositTransactions.push(txId);
    vAnchorDayData.depositTx = depositTransactions;
    vAnchorDayData.volume.plus(finalAmount);
  } else if (txType === TransactionType.Withdraw) {
    vAnchorDayData.volume.minus(finalAmount);
    vAnchorDayData.numberOfWithdraws = vAnchorDayData.numberOfWithdraws.plus(BigInt.fromI32(1));

    const withdrawTransactions = vAnchorDayData.depositTx;
    withdrawTransactions.push(txId);
    vAnchorDayData.withdrawTx = withdrawTransactions;
  } else if (txType === TransactionType.Transfer) {
    const TransferTransactions = vAnchorDayData.depositTx;
    TransferTransactions.push(txId);
    vAnchorDayData.transferTx = TransferTransactions;
    vAnchorDayData.numberOfTransfers = vAnchorDayData.numberOfTransfers.plus(BigInt.fromI32(1));
  }
  // Store fees regardless of the transactin type
  vAnchorDayData.fees = vAnchorDayData.fees.plus(fee);
  vAnchorDayData.relayerFees = vAnchorDayData.relayerFees.plus(dayDataPayload.relayerFees);
  vAnchorDayData.wrappingFees = vAnchorDayData.wrappingFees.plus(dayDataPayload.wrappingFees);
  vAnchorDayData.unWrappingFees = vAnchorDayData.unWrappingFees.plus(dayDataPayload.wrappingFees);

  vAnchorDayData.save();
}
