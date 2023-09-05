import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorRelayerFee,
  VAnchorRelayerFeeByToken,
} from '../../generated/schema';
import { getTokenSymbol } from '../token';

export default function recordRelayerFee(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  totalFees: BigInt,
  txFees: BigInt
): void {
  const id = vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
  const vanchorRelayerFeeByToken = VAnchorRelayerFeeByToken.load(id);

  if (!vanchorRelayerFeeByToken) {
    const newVanchorRelayerFeeByToken = new VAnchorRelayerFeeByToken(id);
    newVanchorRelayerFeeByToken.totalFees = totalFees;
    newVanchorRelayerFeeByToken.txFees = txFees;
    newVanchorRelayerFeeByToken.profit = totalFees.minus(txFees);
    newVanchorRelayerFeeByToken.vAnchorAddress = vAnchorAddress;
    newVanchorRelayerFeeByToken.tokenSymbol = getTokenSymbol(tokenAddress);
    newVanchorRelayerFeeByToken.tokenAddress = tokenAddress;
    newVanchorRelayerFeeByToken.save();
  } else {
    vanchorRelayerFeeByToken.totalFees =
      vanchorRelayerFeeByToken.totalFees.plus(totalFees);
    vanchorRelayerFeeByToken.txFees =
      vanchorRelayerFeeByToken.txFees.plus(txFees);
    vanchorRelayerFeeByToken.profit = vanchorRelayerFeeByToken.profit.plus(
      totalFees.minus(txFees)
    );
    vanchorRelayerFeeByToken.save();
  }

  // Update the total totalFees for vanchor
  const vanchorRelayerFee = VAnchorRelayerFee.load(
    vAnchorAddress.toHexString()
  );

  if (!vanchorRelayerFee) {
    const newVanchorRelayerFee = new VAnchorRelayerFee(
      vAnchorAddress.toHexString()
    );
    newVanchorRelayerFee.totalFees = totalFees;
    newVanchorRelayerFee.txFees = txFees;
    newVanchorRelayerFee.profit = totalFees.minus(txFees);
    newVanchorRelayerFee.save();
  } else {
    vanchorRelayerFee.totalFees = vanchorRelayerFee.totalFees.plus(totalFees);
    vanchorRelayerFee.txFees = vanchorRelayerFee.txFees.plus(txFees);
    vanchorRelayerFee.profit = vanchorRelayerFee.profit.plus(
      totalFees.minus(txFees)
    );
    vanchorRelayerFee.save();
  }
}
