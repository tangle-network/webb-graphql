import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorTotalValueLocked,
  VAnchorTotalValueLockedByToken,
  VAnchorTotalValueLockedByTokenByDay,
  VAnchorTotalValueLockedByDay,
} from '../../generated/schema';
import { getDate } from '../utils/time';
import { getTokenSymbol } from '../token';

export default function recordTVLByDay(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt,
  time: BigInt
): void {
  const date: i32 = getDate(time);

  // generate id
  const idByTokenByDay =
    date.toString() +
    '-' +
    vAnchorAddress.toHexString() +
    '-' +
    tokenAddress.toHexString();

  const vanchorTotalValueLockedByTokenByDay =
    VAnchorTotalValueLockedByTokenByDay.load(idByTokenByDay);

  if (!vanchorTotalValueLockedByTokenByDay) {
    const newVanchorTotalValueLockedByToken =
      new VAnchorTotalValueLockedByTokenByDay(idByTokenByDay);

    // getting current tvl by token
    const idByToken =
      vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
    const vanchorTotalValueLockedByToken =
      VAnchorTotalValueLockedByToken.load(idByToken);
    const currentTVLByToken =
      vanchorTotalValueLockedByToken === null
        ? BigInt.fromI32(0)
        : vanchorTotalValueLockedByToken.totalValueLocked;

    newVanchorTotalValueLockedByToken.totalValueLocked = currentTVLByToken;
    newVanchorTotalValueLockedByToken.vAnchorAddress = vAnchorAddress;
    newVanchorTotalValueLockedByToken.tokenSymbol =
      getTokenSymbol(tokenAddress);
    newVanchorTotalValueLockedByToken.tokenAddress = tokenAddress;
    newVanchorTotalValueLockedByToken.date = BigInt.fromString(date.toString());
    newVanchorTotalValueLockedByToken.save();
  } else {
    vanchorTotalValueLockedByTokenByDay.totalValueLocked =
      vanchorTotalValueLockedByTokenByDay.totalValueLocked.plus(amount);
    vanchorTotalValueLockedByTokenByDay.save();
  }

  // Update the total value locked for vanchor
  const idByDay = date.toString() + '-' + vAnchorAddress.toHexString();
  const vanchorTotalValueLocked = VAnchorTotalValueLockedByDay.load(idByDay);

  if (!vanchorTotalValueLocked) {
    const newVanchorTotalValueLocked = new VAnchorTotalValueLockedByDay(
      idByDay
    );

    // getting current tvl
    const vanchorTotalValueLocked = VAnchorTotalValueLocked.load(
      vAnchorAddress.toHexString()
    );

    const currentTVL =
      vanchorTotalValueLocked === null
        ? BigInt.fromI32(0)
        : vanchorTotalValueLocked.totalValueLocked;

    newVanchorTotalValueLocked.totalValueLocked = currentTVL;
    newVanchorTotalValueLocked.date = BigInt.fromString(date.toString());
    newVanchorTotalValueLocked.vAnchorAddress = vAnchorAddress;
    newVanchorTotalValueLocked.save();
  } else {
    vanchorTotalValueLocked.totalValueLocked =
      vanchorTotalValueLocked.totalValueLocked.plus(amount);
    vanchorTotalValueLocked.save();
  }
}
