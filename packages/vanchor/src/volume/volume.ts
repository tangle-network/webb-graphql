import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import { VAnchorVolume, VAnchorVolumeByToken } from '../../generateddd/schema';
import { getTokenSymbol } from '../token';

export default function recordVolume(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt
): void {
  const id = vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
  const vanchorVolumeByToken = VAnchorVolumeByToken.load(id);

  if (!vanchorVolumeByToken) {
    const newVanchorVolumeByToken = new VAnchorVolumeByToken(id);
    newVanchorVolumeByToken.volume = amount;
    newVanchorVolumeByToken.tokenSymbol = getTokenSymbol(tokenAddress);
    newVanchorVolumeByToken.vAnchorAddress = vAnchorAddress;
    newVanchorVolumeByToken.tokenAddress = tokenAddress;
    newVanchorVolumeByToken.save();
  } else {
    vanchorVolumeByToken.volume = vanchorVolumeByToken.volume.plus(amount);
    vanchorVolumeByToken.save();
  }

  // Update the total value locked for vanchor
  const vanchorVolume = VAnchorVolume.load(vAnchorAddress.toHexString());

  if (!vanchorVolume) {
    const newVanchorVolume = new VAnchorVolume(vAnchorAddress.toHexString());
    newVanchorVolume.volume = amount;
    newVanchorVolume.save();
  } else {
    vanchorVolume.volume = vanchorVolume.volume.plus(amount);
    vanchorVolume.save();
  }
}
