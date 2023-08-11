import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorTotalValueLocked,
  VAnchorTotalValueLockedByToken,
} from '../../generated/schema';
import { getTokenSymbol } from '../token';

export default function recordTVL(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt
): void {
  const id = vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
  const vanchorTotalValueLockedByToken =
    VAnchorTotalValueLockedByToken.load(id);

  if (!vanchorTotalValueLockedByToken) {
    const newVanchorTotalValueLockedByToken =
      new VAnchorTotalValueLockedByToken(id);
    newVanchorTotalValueLockedByToken.totalValueLocked = amount;
    newVanchorTotalValueLockedByToken.tokenSymbol =
      getTokenSymbol(tokenAddress);
    newVanchorTotalValueLockedByToken.vAnchorAddress = vAnchorAddress;
    newVanchorTotalValueLockedByToken.tokenAddress = tokenAddress;
    newVanchorTotalValueLockedByToken.save();
  } else {
    vanchorTotalValueLockedByToken.totalValueLocked =
      vanchorTotalValueLockedByToken.totalValueLocked.plus(amount);
    vanchorTotalValueLockedByToken.save();
  }

  // Update the total value locked for vanchor
  const vanchorTotalValueLocked = VAnchorTotalValueLocked.load(
    vAnchorAddress.toHexString()
  );

  if (!vanchorTotalValueLocked) {
    const newVanchorTotalValueLocked = new VAnchorTotalValueLocked(
      vAnchorAddress.toHexString()
    );
    newVanchorTotalValueLocked.totalValueLocked = amount;
    newVanchorTotalValueLocked.save();
  } else {
    vanchorTotalValueLocked.totalValueLocked =
      vanchorTotalValueLocked.totalValueLocked.plus(amount);
    vanchorTotalValueLocked.save();
  }
}
