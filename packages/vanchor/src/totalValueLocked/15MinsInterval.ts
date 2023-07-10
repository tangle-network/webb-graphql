import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import { VAnchorTotalValueLockedByTokenEvery15Min, VAnchorTotalValueLockedEvery15Min } from '../../generated/schema';
import { getStartInterval, getEndInterval } from '../utils/time';

export function record15MinsIntervalTotalValueLocked(vAnchorAddress: Bytes, tokenAddress: Bytes, amount: BigInt, time: BigInt): void {

    const startInterval: i32 = getStartInterval(time, 15);
    const endInterval: i32 = getEndInterval(time, 15);

    const id = startInterval.toString() + '-' + vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
    const vanchorTotalValueLockedByToken = VAnchorTotalValueLockedByTokenEvery15Min.load(id);

    if (!vanchorTotalValueLockedByToken) {
        const newVanchorTotalValueLockedByToken = new VAnchorTotalValueLockedByTokenEvery15Min(id);
        newVanchorTotalValueLockedByToken.totalValueLocked = amount;
        newVanchorTotalValueLockedByToken.vAnchorAddress = vAnchorAddress;
        newVanchorTotalValueLockedByToken.tokenAddress = tokenAddress;
        newVanchorTotalValueLockedByToken.startInterval = BigInt.fromString(startInterval.toString());
        newVanchorTotalValueLockedByToken.endInterval = BigInt.fromString(endInterval.toString());
        newVanchorTotalValueLockedByToken.save();
    } else {
        vanchorTotalValueLockedByToken.totalValueLocked = vanchorTotalValueLockedByToken.totalValueLocked.plus(amount);
        vanchorTotalValueLockedByToken.save();
    }


    // Update the total value locked for vanchor
    const recordId = startInterval.toString() + '-' + vAnchorAddress.toHexString();
    const vanchorTotalValueLocked = VAnchorTotalValueLockedEvery15Min.load(recordId);

    if (!vanchorTotalValueLocked) {
        const newVanchorTotalValueLocked = new VAnchorTotalValueLockedEvery15Min(recordId);
        newVanchorTotalValueLocked.startInterval = BigInt.fromString(startInterval.toString());
        newVanchorTotalValueLocked.endInterval = BigInt.fromString(endInterval.toString());
        newVanchorTotalValueLocked.vAnchorAddress = vAnchorAddress;
        newVanchorTotalValueLocked.totalValueLocked = amount;
        newVanchorTotalValueLocked.save();
    } else {
        vanchorTotalValueLocked.totalValueLocked = vanchorTotalValueLocked.totalValueLocked.plus(amount);
        vanchorTotalValueLocked.save();
    }

}
