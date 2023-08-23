import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorVolumeByTokenEveryDay,
  VAnchorVolumeEveryDay,
} from '../../generated/schema';
import { getStartIntervalDay, getEndIntervalDay } from '../utils/time';
import { getTokenSymbol } from '../token';

export default function recordDayIntervalVolume(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt,
  time: BigInt
): void {
  const startInterval = getStartIntervalDay(time);
  const endInterval = getEndIntervalDay(time);

  const byTokenId =
    startInterval.toString() +
    '-' +
    vAnchorAddress.toHexString() +
    '-' +
    tokenAddress.toHexString();
  const vanchorVolumeByToken = VAnchorVolumeByTokenEveryDay.load(byTokenId);

  if (!vanchorVolumeByToken) {
    const newVanchorVolumeByToken = new VAnchorVolumeByTokenEveryDay(byTokenId);
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
  const id = startInterval.toString() + '-' + vAnchorAddress.toHexString();
  const vanchorVolume = VAnchorVolumeEveryDay.load(id);

  if (!vanchorVolume) {
    const newVanchorVolume = new VAnchorVolumeEveryDay(id);
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
