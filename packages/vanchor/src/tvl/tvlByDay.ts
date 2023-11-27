import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorTotalValueLocked,
  VAnchorTotalValueLockedByToken,
  VAnchorTotalValueLockedByTokenEveryDay,
  VAnchorTotalValueLockedEveryDay,
} from '../../generated/schema';
import { getStartIntervalDay, getEndIntervalDay } from '../utils/time';
import { getTokenSymbol } from '../token';

export default function recordTVLEveryDay(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt,
  time: BigInt
): void {
  const startInterval = getStartIntervalDay(time);
  const endInterval = getEndIntervalDay(time);

  // generate id
  const idByTokenEveryDay =
    startInterval.toString() +
    '-' +
    vAnchorAddress.toHexString() +
    '-' +
    tokenAddress.toHexString();

  const vanchorTotalValueLockedByTokenEveryDay =
    VAnchorTotalValueLockedByTokenEveryDay.load(idByTokenEveryDay);

  if (!vanchorTotalValueLockedByTokenEveryDay) {
    const newVanchorTotalValueLockedByToken =
      new VAnchorTotalValueLockedByTokenEveryDay(idByTokenEveryDay);

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
    newVanchorTotalValueLockedByToken.startInterval = BigInt.fromString(
      startInterval.toString()
    );
    newVanchorTotalValueLockedByToken.endInterval = BigInt.fromString(
      endInterval.toString()
    );
    newVanchorTotalValueLockedByToken.save();
  } else {
    vanchorTotalValueLockedByTokenEveryDay.totalValueLocked =
      vanchorTotalValueLockedByTokenEveryDay.totalValueLocked.plus(amount);
    vanchorTotalValueLockedByTokenEveryDay.save();
  }

  // Update the total value locked for vanchor
  const idEveryDay =
    startInterval.toString() + '-' + vAnchorAddress.toHexString();
  const vanchorTotalValueLocked =
    VAnchorTotalValueLockedEveryDay.load(idEveryDay);

  if (!vanchorTotalValueLocked) {
    const newVanchorTotalValueLocked = new VAnchorTotalValueLockedEveryDay(
      idEveryDay
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
    newVanchorTotalValueLocked.startInterval = BigInt.fromString(
      startInterval.toString()
    );
    newVanchorTotalValueLocked.endInterval = BigInt.fromString(
      endInterval.toString()
    );
    newVanchorTotalValueLocked.vAnchorAddress = vAnchorAddress;
    newVanchorTotalValueLocked.save();
  } else {
    vanchorTotalValueLocked.totalValueLocked =
      vanchorTotalValueLocked.totalValueLocked.plus(amount);
    vanchorTotalValueLocked.save();
  }
}
