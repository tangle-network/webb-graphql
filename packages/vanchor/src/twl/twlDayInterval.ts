import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorTWL,
  VAnchorTWLByToken,
  VAnchorTWLByTokenEveryDay,
  VAnchorTWLEveryDay,
} from '../../generated/schema';
import { getStartIntervalDay, getEndIntervalDay } from '../utils/time';
import { getTokenSymbol } from '../token';

export default function recordTWLDayInterval(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt,
  time: BigInt
): void {
  const startInterval = getStartIntervalDay(time);
  const endInterval = getEndIntervalDay(time);

  const idByTokenByDays =
    startInterval.toString() +
    '-' +
    vAnchorAddress.toHexString() +
    '-' +
    tokenAddress.toHexString();

  const vanchorTWLByToken = VAnchorTWLByTokenEveryDay.load(idByTokenByDays);

  if (!vanchorTWLByToken) {
    const newVanchorTWLByToken = new VAnchorTWLByTokenEveryDay(idByTokenByDays);

    // getting current twl by token
    const idByToken =
      vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
    const vanchorTWLByToken = VAnchorTWLByToken.load(idByToken);
    const currentTWLByToken =
      vanchorTWLByToken === null ? BigInt.fromI32(0) : vanchorTWLByToken.total;

    newVanchorTWLByToken.total = currentTWLByToken;
    newVanchorTWLByToken.vAnchorAddress = vAnchorAddress;
    newVanchorTWLByToken.tokenSymbol = getTokenSymbol(tokenAddress);
    newVanchorTWLByToken.tokenAddress = tokenAddress;
    newVanchorTWLByToken.startInterval = BigInt.fromString(
      startInterval.toString()
    );
    newVanchorTWLByToken.endInterval = BigInt.fromString(
      endInterval.toString()
    );
    newVanchorTWLByToken.save();
  } else {
    vanchorTWLByToken.total = vanchorTWLByToken.total.plus(amount);
    vanchorTWLByToken.save();
  }

  // Update the total value locked for vanchor
  const idByDays =
    startInterval.toString() + '-' + vAnchorAddress.toHexString();
  const vanchorTWL = VAnchorTWLEveryDay.load(idByDays);

  if (!vanchorTWL) {
    const newVanchorTWL = new VAnchorTWLEveryDay(idByDays);
    newVanchorTWL.startInterval = BigInt.fromString(startInterval.toString());
    newVanchorTWL.endInterval = BigInt.fromString(endInterval.toString());
    newVanchorTWL.vAnchorAddress = vAnchorAddress;

    // getting current twl
    const vanchorTWL = VAnchorTWL.load(vAnchorAddress.toHexString());
    const currentTWL =
      vanchorTWL === null ? BigInt.fromI32(0) : vanchorTWL.total;

    newVanchorTWL.total = currentTWL;
    newVanchorTWL.save();
  } else {
    vanchorTWL.total = vanchorTWL.total.plus(amount);
    vanchorTWL.save();
  }
}
