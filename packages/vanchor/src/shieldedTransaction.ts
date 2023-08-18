import {
  Address,
  Bytes,
  BigInt,
  BigDecimal,
  ethereum,
} from '@graphprotocol/graph-ts';
import { Insertion } from '../generated/vanchor/vanchor';
import {
  Encryptions,
  ExternalData,
  PublicInputs,
  ShieldedTransaction,
} from '../generated/schema';
import { ensureToken } from './token';
import {
  recordTVL,
  recordTVL15MinsInterval,
  recordTVLDayInterval,
} from './tvl';
import {
  recordRelayerFees,
  recordRelayerFees15MinsInterval,
} from './relayerFees';
import {
  recordDeposit,
  recordDepositLog,
  recordDeposit15MinsInterval,
  recordDepositDayInterval,
} from './deposit';
import {
  recordWithdraw,
  recordWithdrawLog,
  recordWithdraw15MinsInterval,
} from './withdraw';
import { recordTransferLog } from './transfer';
import { getTxnInputDataToDecode, isNativeToken } from './utils/token';

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

  if (data !== null) {
    // [proof, auxPublicInputs, externalData, publicInputs, encryptions]
    const inputs = data.toTuple();
    // Create the shielded transaction entity
    const newShieldedTx = new ShieldedTransaction(event.transaction.hash);
    newShieldedTx.vanchor = event.address;
    newShieldedTx.transactionHash = event.transaction.hash;
    newShieldedTx.sender = event.transaction.from;
    newShieldedTx.value = event.transaction.value;

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
        recordWithdrawLog(
          event.transaction.hash,
          newShieldedTx.vanchor,
          tokenAddress,
          value.abs(),
          event.block.timestamp
        );
        recordWithdraw(newShieldedTx.vanchor, tokenAddress, value.abs());
        recordWithdraw15MinsInterval(
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
      recordTVLDayInterval(
        newShieldedTx.vanchor,
        tokenAddress,
        value,
        event.block.timestamp
      );

      // Record Relayer Fees
      recordRelayerFees(
        newShieldedTx.vanchor,
        tokenAddress,
        externalDataEntity.fee
      );
      recordRelayerFees15MinsInterval(
        newShieldedTx.vanchor,
        tokenAddress,
        externalDataEntity.fee,
        event.block.timestamp
      );
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
  }
};