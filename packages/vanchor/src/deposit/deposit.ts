import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  VAnchorDeposit,
  VAnchorDepositByToken,
  VAnchorDepositLog,
} from '../../generateddd/schema';
import { getTokenSymbol } from '../token';

export function recordDeposit(
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt
): void {
  const id = vAnchorAddress.toHexString() + '-' + tokenAddress.toHexString();
  const vanchorDepositByToken = VAnchorDepositByToken.load(id);

  if (!vanchorDepositByToken) {
    const newVanchorDepositByToken = new VAnchorDepositByToken(id);
    newVanchorDepositByToken.deposit = amount;
    newVanchorDepositByToken.tokenSymbol = getTokenSymbol(tokenAddress);
    newVanchorDepositByToken.vAnchorAddress = vAnchorAddress;
    newVanchorDepositByToken.tokenAddress = tokenAddress;
    newVanchorDepositByToken.totalCount = BigInt.fromI32(1);
    newVanchorDepositByToken.averageDeposit = amount;
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
  const vanchorDeposit = VAnchorDeposit.load(vAnchorAddress.toHexString());

  if (!vanchorDeposit) {
    const newVanchorDeposit = new VAnchorDeposit(vAnchorAddress.toHexString());
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

export function recordDepositLog(
  eventHash: Bytes,
  vAnchorAddress: Bytes,
  tokenAddress: Bytes,
  amount: BigInt,
  timestamp: BigInt
): void {
  const vanchorDeposit = VAnchorDepositLog.load(eventHash.toHexString());

  if (!vanchorDeposit) {
    const newVanchorDeposit = new VAnchorDepositLog(eventHash.toHexString());
    newVanchorDeposit.vAnchorAddress = vAnchorAddress;
    newVanchorDeposit.tokenAddress = tokenAddress;
    newVanchorDeposit.timestamp = timestamp;
    newVanchorDeposit.tokenSymbol = getTokenSymbol(tokenAddress);
    newVanchorDeposit.deposit = amount;
    newVanchorDeposit.save();
  }
}
