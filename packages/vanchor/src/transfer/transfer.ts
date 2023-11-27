import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import { getTokenSymbol } from '../token';
import { VAnchorTransferLog } from '../../generated/schema';

export default function recordTransferLog(
  eventHash: Bytes,
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  timestamp: BigInt
): void {
  const vanchorTransfer = VAnchorTransferLog.load(eventHash.toHexString());

  if (!vanchorTransfer) {
    const newVanchorTransfer = new VAnchorTransferLog(eventHash.toHexString());
    newVanchorTransfer.vAnchorAddress = vAnchorAddress;
    newVanchorTransfer.tokenAddress = tokenAddress;
    newVanchorTransfer.timestamp = timestamp;
    newVanchorTransfer.tokenSymbol = getTokenSymbol(tokenAddress);
    newVanchorTransfer.save();
  }
}
