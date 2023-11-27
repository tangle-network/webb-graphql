import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorTWL,
  VAnchorTWLByToken,
  VAnchorTWLByTokenEvery15Min,
  VAnchorTWLEvery15Min,
} from '../../generated/schema';
import { getStartInterval15Mins, getEndInterval15Mins } from '../utils/time';
import { getTokenSymbol } from '../token';

export default function recordTWL15MinsInterval(
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

  const vanchorTWLByToken = VAnchorTWLByTokenEvery15Min.load(idByTokenBy15Mins);

  if (!vanchorTWLByToken) {
    const newVanchorTWLByToken = new VAnchorTWLByTokenEvery15Min(
      idByTokenBy15Mins
    );

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
  const idBy15Mins =
    startInterval.toString() + '-' + vAnchorAddress.toHexString();
  const vanchorTWL = VAnchorTWLEvery15Min.load(idBy15Mins);

  if (!vanchorTWL) {
    const newVanchorTWL = new VAnchorTWLEvery15Min(idBy15Mins);
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
