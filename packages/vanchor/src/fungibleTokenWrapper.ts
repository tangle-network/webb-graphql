import {
  Wrapping as WrappingEvent,
  Unwrapping as UnwrappingEvent,
} from '../generated/vanchor/FungibleTokenWrapper';
import {
  recordWrappingFees,
  recordWrappingFees15MinsInterval,
} from './wrappingFees';
import { UnwrappingEventLog, WrappingEventLog } from '../generated/schema';

export function handleWrapping(event: WrappingEvent): void {
  if (event.params !== null) {
    const eventHash = event.transaction.hash.toHexString();
    const vAnchorAddress = event.params.recipient;
    const tokenAddress = event.params.tokenAddress;
    const feeAmount = event.params.wrappingFee;
    const sender = event.params.sender;
    const afterFeeAmount = event.params.afterFeeAmount;

    const existingTransaction = WrappingEventLog.load(eventHash);

    if (existingTransaction !== null) {
      return;
    }

    const newLog = new WrappingEventLog(eventHash);
    newLog.sender = sender;
    newLog.tokenAddress = tokenAddress;
    newLog.recipient = vAnchorAddress;
    newLog.wrappingFee = feeAmount;
    newLog.afterFeeAmount = afterFeeAmount;
    newLog.timestamp = event.block.timestamp;
    newLog.save();

    // TODO - MAke sure this is a vAnchor address, otherwise skip.
    // Record Wrapping Fees
    recordWrappingFees(vAnchorAddress, tokenAddress, feeAmount);
    recordWrappingFees15MinsInterval(
      vAnchorAddress,
      tokenAddress,
      feeAmount,
      event.block.timestamp
    );
  }
}

export function handleUnwrapping(event: UnwrappingEvent): void {
  const eventHash = event.transaction.hash.toHexString();
  const vAnchorAddress = event.params.recipient;
  const tokenAddress = event.params.tokenAddress;
  const sender = event.params.sender;
  const amount = event.params.amount;

  const existingTransaction = UnwrappingEventLog.load(eventHash);

  if (existingTransaction !== null) {
    return;
  }

  const newLog = new UnwrappingEventLog(eventHash);
  newLog.sender = sender;
  newLog.tokenAddress = tokenAddress;
  newLog.recipient = vAnchorAddress;
  newLog.amount = amount;
  newLog.timestamp = event.block.timestamp;
  newLog.save();
}
