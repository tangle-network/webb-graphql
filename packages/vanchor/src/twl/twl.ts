import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import { VAnchorTWL, VAnchorTWLByToken } from '../../generated/schema';
import { getTokenSymbol } from '../token';

export default function recordTWL(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt
): void {
  const id = vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
  const vanchorTWLByToken = VAnchorTWLByToken.load(id);

  if (!vanchorTWLByToken) {
    const newVanchorTWLByToken = new VAnchorTWLByToken(id);
    newVanchorTWLByToken.total = amount;
    newVanchorTWLByToken.tokenSymbol = getTokenSymbol(tokenAddress);
    newVanchorTWLByToken.vAnchorAddress = vAnchorAddress;
    newVanchorTWLByToken.tokenAddress = tokenAddress;
    newVanchorTWLByToken.save();
  } else {
    vanchorTWLByToken.total = vanchorTWLByToken.total.plus(amount);
    vanchorTWLByToken.save();
  }

  const vanchorTWL = VAnchorTWL.load(vAnchorAddress.toHexString());

  if (!vanchorTWL) {
    const newVanchorTWL = new VAnchorTWL(vAnchorAddress.toHexString());
    newVanchorTWL.total = amount;
    newVanchorTWL.save();
  } else {
    vanchorTWL.total = vanchorTWL.total.plus(amount);
    vanchorTWL.save();
  }
}
