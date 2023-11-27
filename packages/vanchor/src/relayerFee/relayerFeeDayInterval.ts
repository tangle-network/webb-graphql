import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorRelayerFeeByTokenEveryDay,
  VAnchorRelayerFeeEveryDay,
} from '../../generateddd/schema';
import { getStartIntervalDay, getEndIntervalDay } from '../utils/time';
import { getTokenSymbol } from '../token';

export default function recordRelayerFeeDayInterval(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  totalFees: BigInt,
  txFees: BigInt,
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

  const profit = totalFees.gt(txFees) ? totalFees.minus(txFees) : new BigInt(0);

  const vanchorRelayerFeeByToken = VAnchorRelayerFeeByTokenEveryDay.load(id);

  if (!vanchorRelayerFeeByToken) {
    const newVanchorRelayerFeeByToken = new VAnchorRelayerFeeByTokenEveryDay(
      id
    );
    newVanchorRelayerFeeByToken.totalFees = totalFees;
    newVanchorRelayerFeeByToken.txFees = txFees;
    newVanchorRelayerFeeByToken.profit = profit;
    newVanchorRelayerFeeByToken.vAnchorAddress = vAnchorAddress;
    newVanchorRelayerFeeByToken.tokenSymbol = getTokenSymbol(tokenAddress);
    newVanchorRelayerFeeByToken.tokenAddress = tokenAddress;
    newVanchorRelayerFeeByToken.startInterval = BigInt.fromString(
      startInterval.toString()
    );
    newVanchorRelayerFeeByToken.endInterval = BigInt.fromString(
      endInterval.toString()
    );
    newVanchorRelayerFeeByToken.save();
  } else {
    vanchorRelayerFeeByToken.totalFees =
      vanchorRelayerFeeByToken.totalFees.plus(totalFees);
    vanchorRelayerFeeByToken.txFees =
      vanchorRelayerFeeByToken.txFees.plus(txFees);
    vanchorRelayerFeeByToken.profit =
      vanchorRelayerFeeByToken.profit.plus(profit);
    vanchorRelayerFeeByToken.save();
  }

  // Update the total value locked for vanchor
  const recordId =
    startInterval.toString() + '-' + vAnchorAddress.toHexString();
  const vanchorRelayerFee = VAnchorRelayerFeeEveryDay.load(recordId);

  if (!vanchorRelayerFee) {
    const newVanchorRelayerFee = new VAnchorRelayerFeeEveryDay(recordId);
    newVanchorRelayerFee.startInterval = BigInt.fromString(
      startInterval.toString()
    );
    newVanchorRelayerFee.endInterval = BigInt.fromString(
      endInterval.toString()
    );
    newVanchorRelayerFee.vAnchorAddress = vAnchorAddress;
    newVanchorRelayerFee.totalFees = totalFees;
    newVanchorRelayerFee.txFees = txFees;
    newVanchorRelayerFee.profit = profit;
    newVanchorRelayerFee.save();
  } else {
    vanchorRelayerFee.totalFees = vanchorRelayerFee.totalFees.plus(totalFees);
    vanchorRelayerFee.txFees = vanchorRelayerFee.txFees.plus(txFees);
    vanchorRelayerFee.profit = vanchorRelayerFee.profit.plus(profit);
    vanchorRelayerFee.save();
  }
}
