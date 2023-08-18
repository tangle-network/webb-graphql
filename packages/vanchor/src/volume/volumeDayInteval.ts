import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorVolumeByTokenEveryDay,
  VAnchorVolumeEveryDay,
} from '../../generated/schema';
import { getDate } from '../utils/time';
import { getTokenSymbol } from '../token';

export default function recordDayIntervalVolume(
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
  const vanchorVolumeByToken = VAnchorVolumeByTokenEveryDay.load(byTokenId);

  if (!vanchorVolumeByToken) {
    const newVanchorVolumeByToken = new VAnchorVolumeByTokenEveryDay(byTokenId);
    newVanchorVolumeByToken.volume = amount;
    newVanchorVolumeByToken.vAnchorAddress = vAnchorAddress;
    newVanchorVolumeByToken.tokenSymbol = getTokenSymbol(tokenAddress);
    newVanchorVolumeByToken.tokenAddress = tokenAddress;
    newVanchorVolumeByToken.date = BigInt.fromString(date.toString());
    newVanchorVolumeByToken.save();
  } else {
    vanchorVolumeByToken.volume = vanchorVolumeByToken.volume.plus(amount);
    vanchorVolumeByToken.save();
  }

  // Update the total value locked for vanchor
  const id = date.toString() + '-' + vAnchorAddress.toHexString();
  const vanchorVolume = VAnchorVolumeEveryDay.load(id);

  if (!vanchorVolume) {
    const newVanchorVolume = new VAnchorVolumeEveryDay(id);
    newVanchorVolume.date = BigInt.fromString(date.toString());
    newVanchorVolume.vAnchorAddress = vAnchorAddress;
    newVanchorVolume.volume = amount;
    newVanchorVolume.save();
  } else {
    vanchorVolume.volume = vanchorVolume.volume.plus(amount);
    vanchorVolume.save();
  }
}
