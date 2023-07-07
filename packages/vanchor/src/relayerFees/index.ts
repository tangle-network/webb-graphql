import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import { VAnchorTotalRelayerFee } from '../../generated/schema';

export function recordTotalFees(vAnchorAddress: Bytes, tokenAddress: Bytes, fee: BigInt): void {
    const id = vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
    const vanchorTotalValueLocked = VAnchorTotalRelayerFee.load(id);

    if (!vanchorTotalValueLocked) {
        const newVanchorTotalValueLocked = new VAnchorTotalRelayerFee(id);
        newVanchorTotalValueLocked.fees = fee;
        newVanchorTotalValueLocked.vAnchorAddress = vAnchorAddress;
        newVanchorTotalValueLocked.tokenAddress = tokenAddress;
        newVanchorTotalValueLocked.save();
    } else {
        vanchorTotalValueLocked.fees = vanchorTotalValueLocked.fees.plus(fee);
        vanchorTotalValueLocked.save();
    }

}
