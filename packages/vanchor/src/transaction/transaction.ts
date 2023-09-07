import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import { getTokenSymbol } from '../token';
import { VAnchorTransactionLog } from '../../generated/schema';

export default function recordTransactionLog(
  eventHash: Bytes,
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt,
  timestamp: BigInt
): void {
  const vanchorTransaction = VAnchorTransactionLog.load(
    eventHash.toHexString()
  );

  if (!vanchorTransaction) {
    const newVanchorTransaction = new VAnchorTransactionLog(
      eventHash.toHexString()
    );
    newVanchorTransaction.vAnchorAddress = vAnchorAddress;
    newVanchorTransaction.tokenAddress = tokenAddress;
    newVanchorTransaction.timestamp = timestamp;
    newVanchorTransaction.amount = amount;
    newVanchorTransaction.tokenSymbol = getTokenSymbol(tokenAddress);
    newVanchorTransaction.save();
  }
}
