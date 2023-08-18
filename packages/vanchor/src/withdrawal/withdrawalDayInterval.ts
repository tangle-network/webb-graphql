import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorWithdrawalByTokenEveryDay,
  VAnchorWithdrawalEveryDay,
} from '../../generated/schema';
import { getDate } from '../utils/time';
import { getTokenSymbol } from '../token';

export default function recordWithdrawalDayInterval(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt,
  time: BigInt
): void {
  const date: i32 = getDate(time);

  const id =
    date.toString() +
    '-' +
    vAnchorAddress.toHexString() +
    '-' +
    tokenAddress.toHexString();
  const vanchorWithdrawByToken = VAnchorWithdrawalByTokenEveryDay.load(id);

  if (!vanchorWithdrawByToken) {
    const newVanchorWithdrawByToken = new VAnchorWithdrawalByTokenEveryDay(id);
    newVanchorWithdrawByToken.withdrawal = amount;
    newVanchorWithdrawByToken.vAnchorAddress = vAnchorAddress;
    newVanchorWithdrawByToken.tokenSymbol = getTokenSymbol(tokenAddress);
    newVanchorWithdrawByToken.tokenAddress = tokenAddress;
    newVanchorWithdrawByToken.date = BigInt.fromString(date.toString());
    newVanchorWithdrawByToken.averageWithdrawal = amount;
    newVanchorWithdrawByToken.totalCount = BigInt.fromI32(1);
    newVanchorWithdrawByToken.save();
  } else {
    vanchorWithdrawByToken.withdrawal =
      vanchorWithdrawByToken.withdrawal.plus(amount);
    vanchorWithdrawByToken.totalCount = vanchorWithdrawByToken.totalCount.plus(
      BigInt.fromI32(1)
    );
    vanchorWithdrawByToken.averageWithdrawal =
      vanchorWithdrawByToken.withdrawal.div(vanchorWithdrawByToken.totalCount);
    vanchorWithdrawByToken.save();
  }

  // Update the total value locked for vanchor
  const recordId = date.toString() + '-' + vAnchorAddress.toHexString();
  const vanchorWithdraw = VAnchorWithdrawalEveryDay.load(recordId);

  if (!vanchorWithdraw) {
    const newVanchorWithdraw = new VAnchorWithdrawalEveryDay(recordId);
    newVanchorWithdraw.date = BigInt.fromString(date.toString());
    newVanchorWithdraw.vAnchorAddress = vAnchorAddress;
    newVanchorWithdraw.withdrawal = amount;
    newVanchorWithdraw.averageWithdrawal = amount;
    newVanchorWithdraw.totalCount = BigInt.fromI32(1);
    newVanchorWithdraw.save();
  } else {
    vanchorWithdraw.withdrawal = vanchorWithdraw.withdrawal.plus(amount);
    vanchorWithdraw.totalCount = vanchorWithdraw.totalCount.plus(
      BigInt.fromI32(1)
    );
    vanchorWithdraw.averageWithdrawal = vanchorWithdraw.withdrawal.div(
      vanchorWithdraw.totalCount
    );
    vanchorWithdraw.save();
  }
}
