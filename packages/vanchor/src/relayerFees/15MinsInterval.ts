import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import { VAnchorTotalRelayerFeeByTokenEvery15Min, VAnchorTotalRelayerFee15Min } from '../../generated/schema';
import { getStartAndEndIntrerval } from '../utils/time';

export function recordFee(vAnchorAddress: Bytes, tokenAddress: Bytes, fees: BigInt, time: BigInt): void {


    const startAndEndInterval = getStartAndEndIntrerval(time, 15);

    const id = startAndEndInterval.startInterval + '-' + vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
    const vanchorFeeByToken = VAnchorTotalRelayerFeeByTokenEvery15Min.load(id);

    if (!vanchorFeeByToken) {
        const newVanchorFeeByToken = new VAnchorTotalRelayerFeeByTokenEvery15Min(id);
        newVanchorFeeByToken.fees = fees;
        newVanchorFeeByToken.vAnchorAddress = vAnchorAddress;
        newVanchorFeeByToken.tokenAddress = tokenAddress;
        newVanchorFeeByToken.startInterval = BigInt.fromString(startAndEndInterval.startInterval.toString());
        newVanchorFeeByToken.endInterval = BigInt.fromString(startAndEndInterval.endInterval.toString());
        newVanchorFeeByToken.save();
    } else {
        vanchorFeeByToken.fees = vanchorFeeByToken.fees.plus(fees);
        vanchorFeeByToken.save();
    }


    // Update the total value locked for vanchor
    const recordId = startAndEndInterval.startInterval + '-' + vAnchorAddress.toHexString();
    const vanchorFee = VAnchorTotalRelayerFee15Min.load(recordId);

    if (!vanchorFee) {
        const newVanchorFee = new VAnchorTotalRelayerFee15Min(recordId);
        newVanchorFee.startInterval = BigInt.fromString(startAndEndInterval.startInterval.toString());
        newVanchorFee.endInterval = BigInt.fromString(startAndEndInterval.endInterval.toString());
        newVanchorFee.fees = fees;
        newVanchorFee.save();
    } else {
        vanchorFee.fees = vanchorFee.fees.plus(fees);
        vanchorFee.save();
    }

}
