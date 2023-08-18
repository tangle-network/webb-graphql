import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorTotalValueLockedByTokenEveryDay,
  VAnchorTotalValueLockedEveryDay,
} from '../../generated/schema';
import { getDate } from '../utils/time';
import { getTokenSymbol } from '../token';

export default function recordTVLDayInterval(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt,
  time: BigInt
): void {
  const date: i32 = getDate(time);

  const byTokenId =
    date.toString() +
    '-' +
    vAnchorAddress.toHexString() +
    '-' +
    tokenAddress.toHexString();
  const vanchorTotalValueLockedByToken =
    VAnchorTotalValueLockedByTokenEveryDay.load(byTokenId);

  if (!vanchorTotalValueLockedByToken) {
    const newVanchorTotalValueLockedByToken =
      new VAnchorTotalValueLockedByTokenEveryDay(byTokenId);
    newVanchorTotalValueLockedByToken.totalValueLocked = amount;
    newVanchorTotalValueLockedByToken.vAnchorAddress = vAnchorAddress;
    newVanchorTotalValueLockedByToken.tokenSymbol =
      getTokenSymbol(tokenAddress);
    newVanchorTotalValueLockedByToken.tokenAddress = tokenAddress;
    newVanchorTotalValueLockedByToken.date = BigInt.fromString(date.toString());
    newVanchorTotalValueLockedByToken.save();
  } else {
    vanchorTotalValueLockedByToken.totalValueLocked =
      vanchorTotalValueLockedByToken.totalValueLocked.plus(amount);
    vanchorTotalValueLockedByToken.save();
  }

  // Update the total value locked for vanchor
  const id = date.toString() + '-' + vAnchorAddress.toHexString();
  const vanchorTotalValueLocked = VAnchorTotalValueLockedEveryDay.load(id);

  if (!vanchorTotalValueLocked) {
    const newVanchorTotalValueLocked = new VAnchorTotalValueLockedEveryDay(id);
    newVanchorTotalValueLocked.date = BigInt.fromString(date.toString());
    newVanchorTotalValueLocked.vAnchorAddress = vAnchorAddress;
    newVanchorTotalValueLocked.totalValueLocked = amount;
    newVanchorTotalValueLocked.save();
  } else {
    vanchorTotalValueLocked.totalValueLocked =
      vanchorTotalValueLocked.totalValueLocked.plus(amount);
    vanchorTotalValueLocked.save();
  }
}
