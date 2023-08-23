import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorTotalValueLocked,
  VAnchorTotalValueLockedByToken,
  VAnchorTotalValueLockedByTokenEvery15Min,
  VAnchorTotalValueLockedEvery15Min,
} from '../../generated/schema';
import { getStartInterval15Mins, getEndInterval15Mins } from '../utils/time';
import { getTokenSymbol } from '../token';

export default function recordTVL15MinsInterval(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt,
  time: BigInt
): void {
  const startInterval = getStartInterval15Mins(time);
  const endInterval = getEndInterval15Mins(time);

  const idByTokenBy15Mins =
    startInterval.toString() +
    '-' +
    vAnchorAddress.toHexString() +
    '-' +
    tokenAddress.toHexString();

  const vanchorTotalValueLockedByToken =
    VAnchorTotalValueLockedByTokenEvery15Min.load(idByTokenBy15Mins);

  if (!vanchorTotalValueLockedByToken) {
    const newVanchorTotalValueLockedByToken =
      new VAnchorTotalValueLockedByTokenEvery15Min(idByTokenBy15Mins);

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
    vanchorTotalValueLockedByToken.totalValueLocked =
      vanchorTotalValueLockedByToken.totalValueLocked.plus(amount);
    vanchorTotalValueLockedByToken.save();
  }

  // Update the total value locked for vanchor
  const idBy15Mins =
    startInterval.toString() + '-' + vAnchorAddress.toHexString();
  const vanchorTotalValueLocked =
    VAnchorTotalValueLockedEvery15Min.load(idBy15Mins);

  if (!vanchorTotalValueLocked) {
    const newVanchorTotalValueLocked = new VAnchorTotalValueLockedEvery15Min(
      idBy15Mins
    );
    newVanchorTotalValueLocked.startInterval = BigInt.fromString(
      startInterval.toString()
    );
    newVanchorTotalValueLocked.endInterval = BigInt.fromString(
      endInterval.toString()
    );
    newVanchorTotalValueLocked.vAnchorAddress = vAnchorAddress;

    // getting current tvl
    const vanchorTotalValueLocked = VAnchorTotalValueLocked.load(
      vAnchorAddress.toHexString()
    );
    const currentTVL =
      vanchorTotalValueLocked === null
        ? BigInt.fromI32(0)
        : vanchorTotalValueLocked.totalValueLocked;

    newVanchorTotalValueLocked.totalValueLocked = currentTVL;
    newVanchorTotalValueLocked.save();
  } else {
    vanchorTotalValueLocked.totalValueLocked =
      vanchorTotalValueLocked.totalValueLocked.plus(amount);
    vanchorTotalValueLocked.save();
  }
}
