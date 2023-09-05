import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorWrappingFeeByTokenEveryDay,
  VAnchorWrappingFeeEveryDay,
} from '../../generated/schema';
import { getStartIntervalDay, getEndIntervalDay } from '../utils/time';
import { getTokenSymbol } from '../token';

export default function recordWrappingFeesDayInterval(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  fees: BigInt,
  time: BigInt
): void {
  const startInterval = getStartIntervalDay(time);
  const endInterval = getEndIntervalDay(time);

  const id =
    startInterval.toString() +
    '-' +
    vAnchorAddress.toHexString() +
    '-' +
    tokenAddress.toHexString();
  const vanchorFeeByToken = VAnchorWrappingFeeByTokenEveryDay.load(id);

  if (!vanchorFeeByToken) {
    const newVanchorFeeByToken = new VAnchorWrappingFeeByTokenEveryDay(id);
    newVanchorFeeByToken.fees = fees;
    newVanchorFeeByToken.vAnchorAddress = vAnchorAddress;
    newVanchorFeeByToken.tokenSymbol = getTokenSymbol(tokenAddress);
    newVanchorFeeByToken.tokenAddress = tokenAddress;
    newVanchorFeeByToken.startInterval = BigInt.fromString(
      startInterval.toString()
    );
    newVanchorFeeByToken.endInterval = BigInt.fromString(
      endInterval.toString()
    );
    newVanchorFeeByToken.save();
  } else {
    vanchorFeeByToken.fees = vanchorFeeByToken.fees.plus(fees);
    vanchorFeeByToken.save();
  }

  // Update the total value locked for vanchor
  const recordId =
    startInterval.toString() + '-' + vAnchorAddress.toHexString();
  const vanchorFee = VAnchorWrappingFeeEveryDay.load(recordId);

  if (!vanchorFee) {
    const newVanchorFee = new VAnchorWrappingFeeEveryDay(recordId);
    newVanchorFee.startInterval = BigInt.fromString(startInterval.toString());
    newVanchorFee.endInterval = BigInt.fromString(endInterval.toString());
    newVanchorFee.vAnchorAddress = vAnchorAddress;
    newVanchorFee.fees = fees;
    newVanchorFee.save();
  } else {
    vanchorFee.fees = vanchorFee.fees.plus(fees);
    vanchorFee.save();
  }
}
