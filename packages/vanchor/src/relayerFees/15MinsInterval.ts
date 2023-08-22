import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorTotalRelayerFeeByTokenEvery15Min,
  VAnchorTotalRelayerFee15Min,
} from '../../generated/schema';
import { getStartInterval, getEndInterval } from '../utils/time';
import { getTokenSymbol } from '../token';

export function recordFeeFor15MinsInterval(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  fees: BigInt,
  time: BigInt
): void {
  const startInterval: i32 = getStartInterval(time, 15);
  const endInterval: i32 = getEndInterval(time, 15);

  const id =
    startInterval.toString() +
    '-' +
    vAnchorAddress.toHexString() +
    '-' +
    tokenAddress.toHexString();
  const vanchorFeeByToken = VAnchorTotalRelayerFeeByTokenEvery15Min.load(id);

  if (!vanchorFeeByToken) {
    const newVanchorFeeByToken = new VAnchorTotalRelayerFeeByTokenEvery15Min(
      id
    );
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
  const vanchorFee = VAnchorTotalRelayerFee15Min.load(recordId);

  if (!vanchorFee) {
    const newVanchorFee = new VAnchorTotalRelayerFee15Min(recordId);
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