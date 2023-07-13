import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import { VAnchorWithdrawal, VAnchorWithdrawalByToken } from '../../generated/schema';
import { ERC20 } from '../../generated/VAnchor/erc20';
import { getTokenSymbol } from '../token';

export function recordWithdrawal(vAnchorAddress: Bytes, tokenAddress: Bytes, amount: BigInt): void {


    const id = vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
    const vanchorWithdrawalByToken = VAnchorWithdrawalByToken.load(id);

    if (!vanchorWithdrawalByToken) {
        const newVanchorWithdrawalByToken = new VAnchorWithdrawalByToken(id);
        newVanchorWithdrawalByToken.withdrawal = amount;
        newVanchorWithdrawalByToken.tokenSymbol = getTokenSymbol(tokenAddress);
        newVanchorWithdrawalByToken.vAnchorAddress = vAnchorAddress;
        newVanchorWithdrawalByToken.tokenAddress = tokenAddress;
        newVanchorWithdrawalByToken.save();
    } else {
        vanchorWithdrawalByToken.withdrawal = vanchorWithdrawalByToken.withdrawal.plus(amount);
        vanchorWithdrawalByToken.save();
    }


    // Update the total value locked for vanchor
    const vanchorWithdrawal = VAnchorWithdrawal.load(vAnchorAddress.toHexString());

    if (!vanchorWithdrawal) {
        const newVanchorWithdrawal = new VAnchorWithdrawal(vAnchorAddress.toHexString());
        newVanchorWithdrawal.withdrawal = amount;
        newVanchorWithdrawal.save();
    } else {
        vanchorWithdrawal.withdrawal = vanchorWithdrawal.withdrawal.plus(amount);
        vanchorWithdrawal.save();
    }

}
