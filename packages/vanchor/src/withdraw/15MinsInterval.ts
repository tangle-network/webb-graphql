import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import { VAnchorWithdrawalByTokenEvery15Min, VAnchorWithdrawalEvery15Min } from '../../generated/schema';
import { getStartInterval, getEndInterval } from '../utils/time';
import { getTokenSymbol } from '../token';

export function record15MinsIntervalWithdrawal(vAnchorAddress: Bytes, tokenAddress: Bytes, amount: BigInt, time: BigInt): void {

    const startInterval: i32 = getStartInterval(time, 15);
    const endInterval: i32 = getEndInterval(time, 15);

    const id = startInterval.toString() + '-' + vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
    const vanchorWithdrawalByToken = VAnchorWithdrawalByTokenEvery15Min.load(id);

    if (!vanchorWithdrawalByToken) {
        const newVanchorWithdrawalByToken = new VAnchorWithdrawalByTokenEvery15Min(id);
        newVanchorWithdrawalByToken.withdrawal = amount;
        newVanchorWithdrawalByToken.vAnchorAddress = vAnchorAddress;
        newVanchorWithdrawalByToken.tokenSymbol = getTokenSymbol(tokenAddress);
        newVanchorWithdrawalByToken.tokenAddress = tokenAddress;
        newVanchorWithdrawalByToken.startInterval = BigInt.fromString(startInterval.toString());
        newVanchorWithdrawalByToken.endInterval = BigInt.fromString(endInterval.toString());
        newVanchorWithdrawalByToken.save();
    } else {
        vanchorWithdrawalByToken.withdrawal = vanchorWithdrawalByToken.withdrawal.plus(amount);
        vanchorWithdrawalByToken.save();
    }


    // Update the total value locked for vanchor
    const recordId = startInterval.toString() + '-' + vAnchorAddress.toHexString();
    const vanchorWithdrawal = VAnchorWithdrawalEvery15Min.load(recordId);

    if (!vanchorWithdrawal) {
        const newVanchorWithdrawal = new VAnchorWithdrawalEvery15Min(recordId);
        newVanchorWithdrawal.startInterval = BigInt.fromString(startInterval.toString());
        newVanchorWithdrawal.endInterval = BigInt.fromString(endInterval.toString());
        newVanchorWithdrawal.vAnchorAddress = vAnchorAddress;
        newVanchorWithdrawal.withdrawal = amount;
        newVanchorWithdrawal.save();
    } else {
        vanchorWithdrawal.withdrawal = vanchorWithdrawal.withdrawal.plus(amount);
        vanchorWithdrawal.save();
    }

}
