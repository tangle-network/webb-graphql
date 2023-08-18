import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorDepositByTokenEveryDay,
  VAnchorDepositEveryDay,
} from '../../generated/schema';
import { getDate } from '../utils/time';
import { getTokenSymbol } from '../token';

export default function recordDepositDayInterval(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt,
  time: BigInt
): void {
  const date: i32 = getDate(time);

  const id =
    date.toString() +
    '-' +
    vAnchorAddress.toHexString() +
    '-' +
    tokenAddress.toHexString();
  const vanchorDepositByToken = VAnchorDepositByTokenEveryDay.load(id);

  if (!vanchorDepositByToken) {
    const newVanchorDepositByToken = new VAnchorDepositByTokenEveryDay(id);
    newVanchorDepositByToken.deposit = amount;
    newVanchorDepositByToken.vAnchorAddress = vAnchorAddress;
    newVanchorDepositByToken.tokenSymbol = getTokenSymbol(tokenAddress);
    newVanchorDepositByToken.tokenAddress = tokenAddress;
    newVanchorDepositByToken.date = BigInt.fromString(date.toString());
    newVanchorDepositByToken.averageDeposit = amount;
    newVanchorDepositByToken.totalCount = BigInt.fromI32(1);
    newVanchorDepositByToken.save();
  } else {
    vanchorDepositByToken.deposit = vanchorDepositByToken.deposit.plus(amount);
    vanchorDepositByToken.totalCount = vanchorDepositByToken.totalCount.plus(
      BigInt.fromI32(1)
    );
    vanchorDepositByToken.averageDeposit = vanchorDepositByToken.deposit.div(
      vanchorDepositByToken.totalCount
    );
    vanchorDepositByToken.save();
  }

  // Update the total value locked for vanchor
  const recordId = date.toString() + '-' + vAnchorAddress.toHexString();
  const vanchorDeposit = VAnchorDepositEveryDay.load(recordId);

  if (!vanchorDeposit) {
    const newVanchorDeposit = new VAnchorDepositEveryDay(recordId);
    newVanchorDeposit.date = BigInt.fromString(date.toString());
    newVanchorDeposit.vAnchorAddress = vAnchorAddress;
    newVanchorDeposit.deposit = amount;
    newVanchorDeposit.averageDeposit = amount;
    newVanchorDeposit.totalCount = BigInt.fromI32(1);
    newVanchorDeposit.save();
  } else {
    vanchorDeposit.deposit = vanchorDeposit.deposit.plus(amount);
    vanchorDeposit.totalCount = vanchorDeposit.totalCount.plus(
      BigInt.fromI32(1)
    );
    vanchorDeposit.averageDeposit = vanchorDeposit.deposit.div(
      vanchorDeposit.totalCount
    );
    vanchorDeposit.save();
  }
}
