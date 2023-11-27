import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorVolumeByTokenEvery15Min,
  VAnchorVolumeEvery15Min,
} from '../../generateddd/schema';
import { getStartInterval15Mins, getEndInterval15Mins } from '../utils/time';
import { getTokenSymbol } from '../token';

export default function record15MinsIntervalVolume(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt,
  time: BigInt
): void {
  const startInterval = getStartInterval15Mins(time);
  const endInterval = getEndInterval15Mins(time);

  const id =
    startInterval.toString() +
    '-' +
    vAnchorAddress.toHexString() +
    '-' +
    tokenAddress.toHexString();
  const vanchorVolumeByToken = VAnchorVolumeByTokenEvery15Min.load(id);

  if (!vanchorVolumeByToken) {
    const newVanchorVolumeByToken = new VAnchorVolumeByTokenEvery15Min(id);
    newVanchorVolumeByToken.volume = amount;
    newVanchorVolumeByToken.vAnchorAddress = vAnchorAddress;
    newVanchorVolumeByToken.tokenSymbol = getTokenSymbol(tokenAddress);
    newVanchorVolumeByToken.tokenAddress = tokenAddress;
    newVanchorVolumeByToken.startInterval = BigInt.fromString(
      startInterval.toString()
    );
    newVanchorVolumeByToken.endInterval = BigInt.fromString(
      endInterval.toString()
    );
    newVanchorVolumeByToken.save();
  } else {
    vanchorVolumeByToken.volume = vanchorVolumeByToken.volume.plus(amount);
    vanchorVolumeByToken.save();
  }

  // Update the total value locked for vanchor
  const recordId =
    startInterval.toString() + '-' + vAnchorAddress.toHexString();
  const vanchorVolume = VAnchorVolumeEvery15Min.load(recordId);

  if (!vanchorVolume) {
    const newVanchorVolume = new VAnchorVolumeEvery15Min(recordId);
    newVanchorVolume.startInterval = BigInt.fromString(
      startInterval.toString()
    );
    newVanchorVolume.endInterval = BigInt.fromString(endInterval.toString());
    newVanchorVolume.vAnchorAddress = vAnchorAddress;
    newVanchorVolume.volume = amount;
    newVanchorVolume.save();
  } else {
    vanchorVolume.volume = vanchorVolume.volume.plus(amount);
    vanchorVolume.save();
  }
}
