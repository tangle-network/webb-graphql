import { BigInt, ethereum } from '@graphprotocol/graph-ts';
import { VAnchor, VAnchorDayData } from '../generated/schema';
import { ExternalData, TransactionType } from './utils/transact';

export function ensureDay(block: ethereum.Block, vAnchor: VAnchor): VAnchorDayData {
  const timestamp = block.timestamp.toI32();
  const dayIndex = timestamp / 86400; // rounded
  const dayId = dayIndex.toString().concat('-').concat(vAnchor.id);
  const dayData = VAnchorDayData.load(dayId);

  if (dayData) {
    return dayData;
  }

  let newDayData = new VAnchorDayData(dayId);

  newDayData.date = timestamp;
  newDayData.vAnchor = vAnchor.id;
  newDayData.fees = BigInt.fromI32(0);
  newDayData.volume = BigInt.fromI32(0);
  newDayData.numberOfDeposits = BigInt.fromI32(0);
  newDayData.depositTx = [];
  newDayData.startBlockNumber = block.number;
  newDayData.save();

  return newDayData;
}

export function updateVAnchorDayData(
  block: ethereum.Block,
  vAnchor: VAnchor,
  extData: ExternalData,
  txId: string
): void {
  const vAnchorDayData = ensureDay(block, vAnchor);
  const finalAmount = extData.getFinalAmount();
  const fee = extData.getFee();
  const txType = extData.getTransactionType();
  if (txType === TransactionType.Deposit) {
    vAnchorDayData.numberOfDeposits = vAnchorDayData.numberOfDeposits.plus(BigInt.fromI32(1));
    const depositTransactions = vAnchorDayData.depositTx;
    depositTransactions.push(txId)

    vAnchorDayData.depositTx = depositTransactions;
    vAnchorDayData.volume.plus(finalAmount);
  } else if (txType === TransactionType.Withdraw) {
    vAnchorDayData.volume.minus(finalAmount);
  }
  vAnchorDayData.fees = vAnchorDayData.fees.plus(fee);
  vAnchorDayData.save();
}
