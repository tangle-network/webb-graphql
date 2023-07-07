import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import { VAnchorTotalValueLockedByTokenEvery15Min, VAnchorTotalValueLockedEvery15Min } from '../../generated/schema';
import { getStartAndEndIntrerval } from '../utils/time';

export function recordTotalValueLocked(vAnchorAddress: Bytes, tokenAddress: Bytes, amount: BigInt, time: BigInt): void {


    const startAndEndInterval = getStartAndEndIntrerval(time, 15);

    const id = startAndEndInterval.startInterval + '-' + vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
    const vanchorTotalValueLockedByToken = VAnchorTotalValueLockedByTokenEvery15Min.load(id);

    if (!vanchorTotalValueLockedByToken) {
        const newVanchorTotalValueLockedByToken = new VAnchorTotalValueLockedByTokenEvery15Min(id);
        newVanchorTotalValueLockedByToken.totalValueLocked = amount;
        newVanchorTotalValueLockedByToken.vAnchorAddress = vAnchorAddress;
        newVanchorTotalValueLockedByToken.tokenAddress = tokenAddress;
        newVanchorTotalValueLockedByToken.startInterval = BigInt.fromString(startAndEndInterval.startInterval.toString());
        newVanchorTotalValueLockedByToken.endInterval = BigInt.fromString(startAndEndInterval.endInterval.toString());
        newVanchorTotalValueLockedByToken.save();
    } else {
        vanchorTotalValueLockedByToken.totalValueLocked = vanchorTotalValueLockedByToken.totalValueLocked.plus(amount);
        vanchorTotalValueLockedByToken.save();
    }


    // Update the total value locked for vanchor
    const recordId = startAndEndInterval.startInterval + '-' + vAnchorAddress.toHexString();
    const vanchorTotalValueLocked = VAnchorTotalValueLockedEvery15Min.load(recordId);

    if (!vanchorTotalValueLocked) {
        const newVanchorTotalValueLocked = new VAnchorTotalValueLockedEvery15Min(recordId);
        newVanchorTotalValueLocked.startInterval = BigInt.fromString(startAndEndInterval.startInterval.toString());
        newVanchorTotalValueLocked.endInterval = BigInt.fromString(startAndEndInterval.endInterval.toString());
        newVanchorTotalValueLocked.totalValueLocked = amount;
        newVanchorTotalValueLocked.save();
    } else {
        vanchorTotalValueLocked.totalValueLocked = vanchorTotalValueLocked.totalValueLocked.plus(amount);
        vanchorTotalValueLocked.save();
    }

}
