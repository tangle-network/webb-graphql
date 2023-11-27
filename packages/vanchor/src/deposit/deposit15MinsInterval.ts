import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorDepositByTokenEvery15Min,
  VAnchorDepositEvery15Min,
} from '../../generateddd/schema';
import { getStartInterval15Mins, getEndInterval15Mins } from '../utils/time';
import { getTokenSymbol } from '../token';

export default function recordDeposit15MinsInterval(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt,
  time: BigInt
): void {
  const startInterval = getStartInterval15Mins(time);
  const endInterval = getEndInterval15Mins(time);

  const id =
    startInterval.toString() +
    '-' +
    vAnchorAddress.toHexString() +
    '-' +
    tokenAddress.toHexString();
  const vanchorDepositByToken = VAnchorDepositByTokenEvery15Min.load(id);

  if (!vanchorDepositByToken) {
    const newVanchorDepositByToken = new VAnchorDepositByTokenEvery15Min(id);
    newVanchorDepositByToken.deposit = amount;
    newVanchorDepositByToken.vAnchorAddress = vAnchorAddress;
    newVanchorDepositByToken.tokenSymbol = getTokenSymbol(tokenAddress);
    newVanchorDepositByToken.tokenAddress = tokenAddress;
    newVanchorDepositByToken.startInterval = BigInt.fromString(
      startInterval.toString()
    );
    newVanchorDepositByToken.endInterval = BigInt.fromString(
      endInterval.toString()
    );
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
  const recordId =
    startInterval.toString() + '-' + vAnchorAddress.toHexString();
  const vanchorDeposit = VAnchorDepositEvery15Min.load(recordId);

  if (!vanchorDeposit) {
    const newVanchorDeposit = new VAnchorDepositEvery15Min(recordId);
    newVanchorDeposit.startInterval = BigInt.fromString(
      startInterval.toString()
    );
    newVanchorDeposit.endInterval = BigInt.fromString(endInterval.toString());
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
