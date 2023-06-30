import { Bytes, ethereum } from '@graphprotocol/graph-ts';
import { Insertion } from '../../generated/VAnchor/VAnchor';
import {
  Encryptions,
  ExternalData,
  PublicInputs,
  ShieldedTransaction,
  Token,
} from '../../generated/schema';
import { ensureToken } from './token';

/**
 * Setup the tx data from the tx input
 * Adding the tuple prefix
 * @param txInput
 * @returns
 */
export function getTxnInputDataToDecode(txInput: Bytes): Bytes {
  const inputDataHexString = txInput.toHexString().slice(10); //take away function signature: '0x????????'
  const hexStringToDecode =
    '0x0000000000000000000000000000000000000000000000000000000000000020' +
    inputDataHexString; // prepend tuple offset
  return Bytes.fromByteArray(Bytes.fromHexString(hexStringToDecode));
}

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
      // Fee amount
      externalDataEntity.fee = externalData[3].toBigInt();
      // Refund amount
      externalDataEntity.refund = externalData[4].toBigInt();
      // Token
      externalDataEntity.token = ensureToken(
        externalData[5].toAddress()
      ).toHexString();
      // Save the ExternalData entity
      externalDataEntity.save();
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
