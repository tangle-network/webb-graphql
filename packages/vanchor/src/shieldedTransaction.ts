import { Address, BigInt, Bytes, ethereum } from '@graphprotocol/graph-ts';
import {
  Encryptions,
  ExternalData,
  PublicInputs,
  ShieldedTransaction,
} from '../generated/schema';
import { Insertion } from '../generated/vanchor/VAnchor';
import {
  recordDeposit,
  recordDeposit15MinsInterval,
  recordDepositDayInterval,
  recordDepositLog,
} from './deposit';
import {
  recordRelayerFee,
  recordRelayerFee15MinsInterval,
  recordRelayerFeeDayInterval,
} from './relayerFee';
import { ensureToken } from './token';
import { recordTransactionLog } from './transaction';
import { recordTransferLog } from './transfer';
import { recordTVL, recordTVL15MinsInterval, recordTVLByDay } from './tvl';
import { getTxnInputDataToDecode, isNativeToken } from './utils/token';
import {
  record15MinsIntervalVolume,
  recordDayIntervalVolume,
  recordVolume,
} from './volume';
import {
  recordWithdrawal,
  recordWithdrawal15MinsInterval,
  recordWithdrawalDayInterval,
  recordWithdrawalLog,
} from './withdrawal';
import { populateAddresses } from './address';

export const handleTransaction = (event: Insertion): void => {
  // Check if the transaction is already handled
  const shieldedTx = ShieldedTransaction.load(event.transaction.hash);
  if (shieldedTx) {
    return;
  }

  // Prepare the transaction input
  const callInput = getTxnInputDataToDecode(event.transaction.input);
  // Decode the transaction
  const data = ethereum.decode(
    '(bytes,bytes,(address,int256,address,uint256,uint256,address),(bytes,bytes,uint256[],uint256[2],uint256,uint256),(bytes,bytes))',
    Bytes.fromUint8Array(callInput)
  );

  if (!data) {
    return;
  }

  const msgSender = event.transaction.from;
  const msgValue = event.transaction.value;

  // [proof, auxPublicInputs, externalData, publicInputs, encryptions]
  const inputs = data.toTuple();
  // Create the shielded transaction entity
  const newShieldedTx = new ShieldedTransaction(event.transaction.hash);
  newShieldedTx.vanchor = event.address;
  newShieldedTx.transactionHash = event.transaction.hash;
  newShieldedTx.sender = msgSender;
  newShieldedTx.value = msgValue;

  newShieldedTx.proof = inputs[0].toBytes();
  newShieldedTx.auxPublicInputs = inputs[1].toBytes();

  // Create the ExternalData entity
  const externalDataEntity = new ExternalData(event.transaction.hash);
  const externalData = inputs[2].toTuple();
  if (externalData) {
    // Recipient
    externalDataEntity.recipient = externalData[0].toAddress();
    // Transactions amount
    externalDataEntity.extAmount = externalData[1].toBigInt();
    // Relayer address
    externalDataEntity.relayer = externalData[2].toAddress();
    // Fee amount for relayer (NOT WRAPPING FEES)
    // txFees = gasUsed * gasPrice
    // profit = txFees * X%
    // fee = txFees + profit
    externalDataEntity.fee = externalData[3].toBigInt();
    // Refund amount
    externalDataEntity.refund = externalData[4].toBigInt();
    // Token
    // Address of the token contract
    // Token: 0x0000000000000000000000000000000000000000 // NATIVE asset (WRAPPING)
    // Token: 0x1985365e9f78359a9B6AD760e32412f4a445E862 // If not the VAnchor ERC20 token (WRAPPING)
    // Token: 0xVANCHORTOKEN0000000000000000000000000000 // If VAnchor ERC20 token (NOT WRAPPING)
    const tokenAddress: Address = ensureToken(externalData[5].toAddress());

    externalDataEntity.token = tokenAddress.toHexString();
    // Save the ExternalData entity
    externalDataEntity.save();

    const value = isNativeToken(tokenAddress.toHexString())
      ? newShieldedTx.value
      : externalDataEntity.extAmount;

    // Record Transaction
    recordTransactionLog(
      event.transaction.hash,
      newShieldedTx.vanchor,
      tokenAddress,
      value,
      event.block.timestamp
    );

    // Record Deposit
    if (value.gt(BigInt.fromI32(0))) {
      // Record Total Value Locked
      recordDepositLog(
        event.transaction.hash,
        newShieldedTx.vanchor,
        tokenAddress,
        value,
        event.block.timestamp
      );
      recordDeposit(newShieldedTx.vanchor, tokenAddress, value);
      recordDeposit15MinsInterval(
        newShieldedTx.vanchor,
        tokenAddress,
        value,
        event.block.timestamp
      );
      recordDepositDayInterval(
        newShieldedTx.vanchor,
        tokenAddress,
        value,
        event.block.timestamp
      );
    }

    // Record Withdrawal
    if (value.lt(BigInt.fromI32(0))) {
      // Record Total Value Locked
      recordWithdrawalLog(
        event.transaction.hash,
        newShieldedTx.vanchor,
        tokenAddress,
        value.abs(),
        event.block.timestamp
      );
      recordWithdrawal(newShieldedTx.vanchor, tokenAddress, value.abs());
      recordWithdrawal15MinsInterval(
        newShieldedTx.vanchor,
        tokenAddress,
        value.abs(),
        event.block.timestamp
      );
      recordWithdrawalDayInterval(
        newShieldedTx.vanchor,
        tokenAddress,
        value.abs(),
        event.block.timestamp
      );
    }

    // Record Transfer
    if (value.equals(BigInt.fromI32(0))) {
      // Record Total Value Locked
      recordTransferLog(
        event.transaction.hash,
        newShieldedTx.vanchor,
        tokenAddress,
        event.block.timestamp
      );
    }

    // Record Total Value Locked
    recordTVL(newShieldedTx.vanchor, tokenAddress, value);
    recordTVL15MinsInterval(
      newShieldedTx.vanchor,
      tokenAddress,
      value,
      event.block.timestamp
    );
    recordTVLByDay(
      newShieldedTx.vanchor,
      tokenAddress,
      value,
      event.block.timestamp
    );

    // Record Volume
    recordVolume(newShieldedTx.vanchor, tokenAddress, value.abs());
    record15MinsIntervalVolume(
      newShieldedTx.vanchor,
      tokenAddress,
      value.abs(),
      event.block.timestamp
    );
    recordDayIntervalVolume(
      newShieldedTx.vanchor,
      tokenAddress,
      value.abs(),
      event.block.timestamp
    );

    // Record Relayer Fees
    // by default, this value is gasLimit
    const gasUsed = getGasUsed(event);
    const gasPrice = event.transaction.gasPrice;
    const txfee = gasUsed.times(gasPrice);
    recordRelayerFee(
      newShieldedTx.vanchor,
      tokenAddress,
      externalDataEntity.fee,
      txfee
    );
    recordRelayerFee15MinsInterval(
      newShieldedTx.vanchor,
      tokenAddress,
      externalDataEntity.fee,
      txfee,
      event.block.timestamp
    );
    recordRelayerFeeDayInterval(
      newShieldedTx.vanchor,
      tokenAddress,
      externalDataEntity.fee,
      txfee,
      event.block.timestamp
    );

    // Record the transaction addresses
    newShieldedTx.addresses = populateAddresses(msgSender, externalDataEntity);
  }

  // Reference the ExternalData entity using the transaction hash as the identifier
  newShieldedTx.externalData = event.transaction.hash;

  // Create the Public Inputs entity
  const publicInputsEntity = new PublicInputs(event.transaction.hash);
  const publicInputs = inputs[3].toTuple();
  if (publicInputs) {
    // Roots
    publicInputsEntity.roots = publicInputs[0].toBytes();
    // ExtensionRoots
    publicInputsEntity.extensionRoots = publicInputs[1].toBytes();
    // InputNullifiers
    publicInputsEntity.inputNullifiers = publicInputs[2].toBigIntArray();
    // OutputCommitments
    publicInputsEntity.outputCommitments = publicInputs[3].toBigIntArray();
    // PublicAmount
    publicInputsEntity.publicAmount = publicInputs[4].toBigInt();
    // ExtDataHash
    publicInputsEntity.extDataHash = publicInputs[5].toBigInt();
    // Save the PublicInputs entity
    publicInputsEntity.save();
  }

  // Reference the PublicInputs entity using the transaction hash as the identifier
  newShieldedTx.publicInputs = event.transaction.hash;

  // Create the Encryptions entity
  const encryptionsEntity = new Encryptions(event.transaction.hash);
  const encryptions = inputs[4].toTuple();
  if (encryptions) {
    // Encrypted Output 1
    encryptionsEntity.encryptedOutput1 = encryptions[0].toBytes();
    // Encrypted Output 2
    encryptionsEntity.encryptedOutput2 = encryptions[1].toBytes();
    // Save the Encryptions entity
    encryptionsEntity.save();
  }

  // Reference the Encryptions entity using the transaction hash as the identifier
  newShieldedTx.encryptions = event.transaction.hash;

  // Record the block number and timestamp
  newShieldedTx.blockNumber = event.block.number;
  newShieldedTx.blockTimestamp = event.block.timestamp;
  newShieldedTx.save();
};

/** @internal */
function getGasUsed(event: Insertion): BigInt {
  // `isNullable` by pass the assemblyscript type check
  // event.receipt == null by pass the typescript type check
  if (isNullable(event.receipt) || event.receipt == null) {
    return event.transaction.gasLimit;
  }

  return event.receipt.gasUsed;
}
