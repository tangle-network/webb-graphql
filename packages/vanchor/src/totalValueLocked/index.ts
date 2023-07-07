import { Address, BigInt, Bytes } from '@graphprotocol/graph-ts';
import { VAnchorTotalValueLocked } from '../../generated/schema';

export function recordTotalValueLocked(vAnchorAddress: Bytes, tokenAddress: Bytes, amount: BigInt): void {
    const id = vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
    const vanchorTotalValueLocked = VAnchorTotalValueLocked.load(id);

    if (!vanchorTotalValueLocked) {
        const newVanchorTotalValueLocked = new VAnchorTotalValueLocked(id);
        newVanchorTotalValueLocked.totalValueLocked = amount;
        newVanchorTotalValueLocked.vAnchorAddress = vAnchorAddress;
        newVanchorTotalValueLocked.tokenAddress = tokenAddress;
        newVanchorTotalValueLocked.save();
    } else {
        vanchorTotalValueLocked.totalValueLocked = vanchorTotalValueLocked.totalValueLocked.plus(amount);
        vanchorTotalValueLocked.save();
    }

}
