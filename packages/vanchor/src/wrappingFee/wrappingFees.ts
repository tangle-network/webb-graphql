import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorWrappingFee,
  VAnchorWrappingFeeByToken,
} from '../../generated/schema';
import { getTokenSymbol } from '../token';

export default function recordWrappingFee(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  fee: BigInt
): void {
  const id = vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
  const vanchorTotalValueLockedByToken = VAnchorWrappingFeeByToken.load(id);

  if (!vanchorTotalValueLockedByToken) {
    const newVanchorTotalValueLockedByToken = new VAnchorWrappingFeeByToken(id);
    newVanchorTotalValueLockedByToken.fees = fee;
    newVanchorTotalValueLockedByToken.vAnchorAddress = vAnchorAddress;
    newVanchorTotalValueLockedByToken.tokenSymbol =
      getTokenSymbol(tokenAddress);
    newVanchorTotalValueLockedByToken.tokenAddress = tokenAddress;
    newVanchorTotalValueLockedByToken.save();
  } else {
    vanchorTotalValueLockedByToken.fees =
      vanchorTotalValueLockedByToken.fees.plus(fee);
    vanchorTotalValueLockedByToken.save();
  }

  // Update the total fees for vanchor
  const vanchorTotalValueLocked = VAnchorWrappingFee.load(
    vAnchorAddress.toHexString()
  );

  if (!vanchorTotalValueLocked) {
    const newVanchorTotalValueLocked = new VAnchorWrappingFee(
      vAnchorAddress.toHexString()
    );
    newVanchorTotalValueLocked.fees = fee;
    newVanchorTotalValueLocked.save();
  } else {
    vanchorTotalValueLocked.fees = vanchorTotalValueLocked.fees.plus(fee);
    vanchorTotalValueLocked.save();
  }
}
