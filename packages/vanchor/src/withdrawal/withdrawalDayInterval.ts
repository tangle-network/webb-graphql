import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorWithdrawalByTokenEveryDay,
  VAnchorWithdrawalEveryDay,
} from '../../generateddd/schema';
import { getStartIntervalDay, getEndIntervalDay } from '../utils/time';
import { getTokenSymbol } from '../token';

export default function recordWithdrawalDayInterval(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt,
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
  const vanchorWithdrawalByToken = VAnchorWithdrawalByTokenEveryDay.load(id);

  if (!vanchorWithdrawalByToken) {
    const newVanchorWithdrawalByToken = new VAnchorWithdrawalByTokenEveryDay(
      id
    );
    newVanchorWithdrawalByToken.withdrawal = amount;
    newVanchorWithdrawalByToken.vAnchorAddress = vAnchorAddress;
    newVanchorWithdrawalByToken.tokenSymbol = getTokenSymbol(tokenAddress);
    newVanchorWithdrawalByToken.tokenAddress = tokenAddress;
    newVanchorWithdrawalByToken.startInterval = BigInt.fromString(
      startInterval.toString()
    );
    newVanchorWithdrawalByToken.endInterval = BigInt.fromString(
      endInterval.toString()
    );
    newVanchorWithdrawalByToken.averageWithdrawal = amount;
    newVanchorWithdrawalByToken.totalCount = BigInt.fromI32(1);
    newVanchorWithdrawalByToken.save();
  } else {
    vanchorWithdrawalByToken.withdrawal =
      vanchorWithdrawalByToken.withdrawal.plus(amount);
    vanchorWithdrawalByToken.totalCount =
      vanchorWithdrawalByToken.totalCount.plus(BigInt.fromI32(1));
    vanchorWithdrawalByToken.averageWithdrawal =
      vanchorWithdrawalByToken.withdrawal.div(
        vanchorWithdrawalByToken.totalCount
      );
    vanchorWithdrawalByToken.save();
  }

  // Update the total value locked for vanchor
  const recordId =
    startInterval.toString() + '-' + vAnchorAddress.toHexString();
  const vanchorWithdrawal = VAnchorWithdrawalEveryDay.load(recordId);

  if (!vanchorWithdrawal) {
    const newVanchorWithdrawal = new VAnchorWithdrawalEveryDay(recordId);
    newVanchorWithdrawal.startInterval = BigInt.fromString(
      startInterval.toString()
    );
    newVanchorWithdrawal.endInterval = BigInt.fromString(
      endInterval.toString()
    );
    newVanchorWithdrawal.vAnchorAddress = vAnchorAddress;
    newVanchorWithdrawal.withdrawal = amount;
    newVanchorWithdrawal.averageWithdrawal = amount;
    newVanchorWithdrawal.totalCount = BigInt.fromI32(1);
    newVanchorWithdrawal.save();
  } else {
    vanchorWithdrawal.withdrawal = vanchorWithdrawal.withdrawal.plus(amount);
    vanchorWithdrawal.totalCount = vanchorWithdrawal.totalCount.plus(
      BigInt.fromI32(1)
    );
    vanchorWithdrawal.averageWithdrawal = vanchorWithdrawal.withdrawal.div(
      vanchorWithdrawal.totalCount
    );
    vanchorWithdrawal.save();
  }
}
