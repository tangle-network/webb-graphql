import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import { VAnchorDeposit, VAnchorDepositByToken } from '../../generated/schema';
import { ERC20 } from '../../generated/VAnchor/erc20';
import { getTokenSymbol } from '../token';

export function recordDeposit(vAnchorAddress: Bytes, tokenAddress: Bytes, amount: BigInt): void {


    const id = vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
    const vanchorDepositByToken = VAnchorDepositByToken.load(id);

    if (!vanchorDepositByToken) {
        const newVanchorDepositByToken = new VAnchorDepositByToken(id);
        newVanchorDepositByToken.deposit = amount;
        newVanchorDepositByToken.tokenSymbol = getTokenSymbol(tokenAddress);
        newVanchorDepositByToken.vAnchorAddress = vAnchorAddress;
        newVanchorDepositByToken.tokenAddress = tokenAddress;
        newVanchorDepositByToken.save();
    } else {
        vanchorDepositByToken.deposit = vanchorDepositByToken.deposit.plus(amount);
        vanchorDepositByToken.save();
    }


    // Update the total value locked for vanchor
    const vanchorDeposit = VAnchorDeposit.load(vAnchorAddress.toHexString());

    if (!vanchorDeposit) {
        const newVanchorDeposit = new VAnchorDeposit(vAnchorAddress.toHexString());
        newVanchorDeposit.deposit = amount;
        newVanchorDeposit.save();
    } else {
        vanchorDeposit.deposit = vanchorDeposit.deposit.plus(amount);
        vanchorDeposit.save();
    }

}



export function recordDepositLog(eventHash: Bytes, vAnchorAddress: Bytes, tokenAddress: Bytes, amount: BigInt, timestamp: BigInt): void {
    const vanchorDeposit = VAnchorDepositLog.load(eventHash.toHexString());

    if (!vanchorDeposit) {
        const newVanchorDeposit = new VAnchorDepositLog(eventHash.toHexString());
        newVanchorDeposit.vAnchorAddress = vAnchorAddress;
        newVanchorDeposit.tokenAddress = tokenAddress;
        newVanchorDeposit.timestamp = timestamp;
        newVanchorDeposit.tokenSymbol = getTokenSymbol(tokenAddress);
        newVanchorDeposit.Deposit = amount;
        newVanchorDeposit.save();
    }
}

