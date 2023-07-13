import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import { VAnchorDepositByTokenEvery15Min, VAnchorDepositEvery15Min } from '../../generated/schema';
import { getStartInterval, getEndInterval } from '../utils/time';
import { getTokenSymbol } from '../token';

export function record15MinsIntervalDeposit(vAnchorAddress: Bytes, tokenAddress: Bytes, amount: BigInt, time: BigInt): void {

    const startInterval: i32 = getStartInterval(time, 15);
    const endInterval: i32 = getEndInterval(time, 15);

    const id = startInterval.toString() + '-' + vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
    const vanchorDepositByToken = VAnchorDepositByTokenEvery15Min.load(id);

    if (!vanchorDepositByToken) {
        const newVanchorDepositByToken = new VAnchorDepositByTokenEvery15Min(id);
        newVanchorDepositByToken.deposit = amount;
        newVanchorDepositByToken.vAnchorAddress = vAnchorAddress;
        newVanchorDepositByToken.tokenSymbol = getTokenSymbol(tokenAddress);
        newVanchorDepositByToken.tokenAddress = tokenAddress;
        newVanchorDepositByToken.startInterval = BigInt.fromString(startInterval.toString());
        newVanchorDepositByToken.endInterval = BigInt.fromString(endInterval.toString());
        newVanchorDepositByToken.save();
    } else {
        vanchorDepositByToken.deposit = vanchorDepositByToken.deposit.plus(amount);
        vanchorDepositByToken.save();
    }


    // Update the total value locked for vanchor
    const recordId = startInterval.toString() + '-' + vAnchorAddress.toHexString();
    const vanchorDeposit = VAnchorDepositEvery15Min.load(recordId);

    if (!vanchorDeposit) {
        const newVanchorDeposit = new VAnchorDepositEvery15Min(recordId);
        newVanchorDeposit.startInterval = BigInt.fromString(startInterval.toString());
        newVanchorDeposit.endInterval = BigInt.fromString(endInterval.toString());
        newVanchorDeposit.vAnchorAddress = vAnchorAddress;
        newVanchorDeposit.deposit = amount;
        newVanchorDeposit.save();
    } else {
        vanchorDeposit.deposit = vanchorDeposit.deposit.plus(amount);
        vanchorDeposit.save();
    }

}
