import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import { VAnchorTotalWrappingFee, VAnchorTotalWrappingFeeByToken } from '../../generated/schema';
import { getTokenSymbol } from '../token';

export function recordTotalFees(vAnchorAddress: Bytes, tokenAddress: Bytes, fee: BigInt): void {
    const id = vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
    const vanchorTotalValueLockedByToken = VAnchorTotalWrappingFeeByToken.load(id);

    if (!vanchorTotalValueLockedByToken) {
        const newVanchorTotalValueLockedByToken = new VAnchorTotalWrappingFeeByToken(id);
        newVanchorTotalValueLockedByToken.fees = fee;
        newVanchorTotalValueLockedByToken.vAnchorAddress = vAnchorAddress;
        newVanchorTotalValueLockedByToken.tokenSymbol = getTokenSymbol(tokenAddress);
        newVanchorTotalValueLockedByToken.tokenAddress = tokenAddress;
        newVanchorTotalValueLockedByToken.save();
    } else {
        vanchorTotalValueLockedByToken.fees = vanchorTotalValueLockedByToken.fees.plus(fee);
        vanchorTotalValueLockedByToken.save();
    }

    // Update the total fees for vanchor
    const vanchorTotalValueLocked = VAnchorTotalWrappingFee.load(vAnchorAddress.toHexString());

    if (!vanchorTotalValueLocked) {
        const newVanchorTotalValueLocked = new VAnchorTotalWrappingFee(vAnchorAddress.toHexString());
        newVanchorTotalValueLocked.fees = fee;
        newVanchorTotalValueLocked.save();
    } else {
        vanchorTotalValueLocked.fees = vanchorTotalValueLocked.fees.plus(fee);
        vanchorTotalValueLocked.save();
    }
}
