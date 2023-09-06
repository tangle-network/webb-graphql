import {
  Wrapping as WrappingEvent,
  Unwrapping as UnwrappingEvent,
} from '../generated/vanchor/FungibleTokenWrapper';
import {
  recordWrappingFee,
  recordWrappingFee15MinsInterval,
  recordWrappingFeeDayInterval,
} from './wrappingFee';
import {
  recordTWL,
  recordTWL15MinsInterval,
  recordTWLDayInterval,
} from './twl';
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
    recordWrappingFee(vAnchorAddress, tokenAddress, feeAmount);
    recordWrappingFee15MinsInterval(
      vAnchorAddress,
      tokenAddress,
      feeAmount,
      event.block.timestamp
    );
    recordWrappingFeeDayInterval(
      vAnchorAddress,
      tokenAddress,
      feeAmount,
      event.block.timestamp
    );

    // Record TWL - increase by afterFeeAmount
    recordTWL(vAnchorAddress, tokenAddress, afterFeeAmount);
    recordTWL15MinsInterval(
      vAnchorAddress,
      tokenAddress,
      afterFeeAmount,
      event.block.timestamp
    );
    recordTWLDayInterval(
      vAnchorAddress,
      tokenAddress,
      afterFeeAmount,
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

  // Record TWL - minus unwrapped amount
  recordTWL(vAnchorAddress, tokenAddress, amount.neg());
  recordTWL15MinsInterval(
    vAnchorAddress,
    tokenAddress,
    amount.neg(),
    event.block.timestamp
  );
  recordTWLDayInterval(
    vAnchorAddress,
    tokenAddress,
    amount.neg(),
    event.block.timestamp
  );
}
