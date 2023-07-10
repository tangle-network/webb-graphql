import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import { VAnchorTotalRelayerFee, VAnchorTotalRelayerFeeByToken } from '../../generated/schema';
import { getTokenSymbol } from '../token';

export function recordTotalFees(vAnchorAddress: Bytes, tokenAddress: Bytes, fee: BigInt): void {
    const id = vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
    const vanchorTotalValueLockedByToken = VAnchorTotalRelayerFeeByToken.load(id);

    if (!vanchorTotalValueLockedByToken) {
        const newVanchorTotalValueLockedByToken = new VAnchorTotalRelayerFeeByToken(id);
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
    const vanchorTotalValueLocked = VAnchorTotalRelayerFee.load(vAnchorAddress.toHexString());

    if (!vanchorTotalValueLocked) {
        const newVanchorTotalValueLocked = new VAnchorTotalRelayerFee(vAnchorAddress.toHexString());
        newVanchorTotalValueLocked.fees = fee;
        newVanchorTotalValueLocked.save();
    } else {
        vanchorTotalValueLocked.fees = vanchorTotalValueLocked.fees.plus(fee);
        vanchorTotalValueLocked.save();
    }
}
