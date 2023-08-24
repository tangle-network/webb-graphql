import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorTotalRelayerFee,
  VAnchorTotalRelayerFeeByToken,
} from '../../generated/schema';
import { getTokenSymbol } from '../token';

export default function recordRelayerFees(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  fees: BigInt,
  txFees: BigInt
): void {
  const id = vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
  const vanchorTotalValueLockedByToken = VAnchorTotalRelayerFeeByToken.load(id);

  if (!vanchorTotalValueLockedByToken) {
    const newVanchorTotalValueLockedByToken = new VAnchorTotalRelayerFeeByToken(
      id
    );
    newVanchorTotalValueLockedByToken.fees = fees;
    newVanchorTotalValueLockedByToken.txFees = txFees;
    newVanchorTotalValueLockedByToken.profit = fees.minus(txFees);
    newVanchorTotalValueLockedByToken.vAnchorAddress = vAnchorAddress;
    newVanchorTotalValueLockedByToken.tokenSymbol =
      getTokenSymbol(tokenAddress);
    newVanchorTotalValueLockedByToken.tokenAddress = tokenAddress;
    newVanchorTotalValueLockedByToken.save();
  } else {
    vanchorTotalValueLockedByToken.fees =
      vanchorTotalValueLockedByToken.fees.plus(fees);
    vanchorTotalValueLockedByToken.txFees =
      vanchorTotalValueLockedByToken.txFees.plus(txFees);
    vanchorTotalValueLockedByToken.profit =
      vanchorTotalValueLockedByToken.profit.plus(fees.minus(txFees));
    vanchorTotalValueLockedByToken.save();
  }

  // Update the total fees for vanchor
  const vanchorTotalValueLocked = VAnchorTotalRelayerFee.load(
    vAnchorAddress.toHexString()
  );

  if (!vanchorTotalValueLocked) {
    const newVanchorTotalValueLocked = new VAnchorTotalRelayerFee(
      vAnchorAddress.toHexString()
    );
    newVanchorTotalValueLocked.fees = fees;
    newVanchorTotalValueLocked.txFees = txFees;
    newVanchorTotalValueLocked.profit = fees.minus(txFees);
    newVanchorTotalValueLocked.save();
  } else {
    vanchorTotalValueLocked.fees = vanchorTotalValueLocked.fees.plus(fees);
    vanchorTotalValueLocked.txFees =
      vanchorTotalValueLocked.txFees.plus(txFees);
    vanchorTotalValueLocked.profit = vanchorTotalValueLocked.profit.plus(
      fees.minus(txFees)
    );
    vanchorTotalValueLocked.save();
  }
}
