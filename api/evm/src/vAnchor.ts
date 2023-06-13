import { Insertion as InsertionEvent, VAnchor as VAnchorContract } from '../generated/VAnchor/VAnchor';
import { DepositTx, Insertion, TransferTx, VAnchor, VAnchorVolume, WithdrawTx } from '../generated/schema';
import { Address, BigInt, Bytes, ethereum, log } from '@graphprotocol/graph-ts';
import { ExternalData, TransactionType } from './utils/transact';
import { updateVAnchorDayData, VolumeDTO } from './day-data';
import { isSameAddress, ONE_BI } from './utils/consts';
import { ensureFungibleTokenWrapper, ensureToken, updateCompositionOfToken } from './fungible-token-wrapper';
import { FungibleTokenWrapper } from '../generated/VAnchor/FungibleTokenWrapper';

function ensureVAnchorTokenVolume(vAnchor: VAnchor, token: Bytes): VAnchorVolume {
  const vAnchorVolumeId = vAnchor.id.concat('-').concat(token.toHexString());
  const vAnchorVolume = VAnchorVolume.load(vAnchorVolumeId);
  if (vAnchorVolume) {
    return vAnchorVolume;
  }
  let newVAnchorVolume = new VAnchorVolume(vAnchorVolumeId);
  newVAnchorVolume.token = token;
  newVAnchorVolume.vAnchor = vAnchor.id;
  newVAnchorVolume.valueLocked = BigInt.zero();
  newVAnchorVolume.finalValueLocked = BigInt.zero();
  newVAnchorVolume.totalFees = BigInt.zero();
  newVAnchorVolume.totalWrappingFees = BigInt.zero();
  newVAnchorVolume.save();

  // update VAnchor volumes
  const vAnchorVolumes = vAnchor.interactedToken;
  vAnchorVolumes.push(newVAnchorVolume.id);
  vAnchor.interactedToken = vAnchorVolumes;
  vAnchor.save();

  return newVAnchorVolume;
}

/**
 * Ensure that the vAnchor entity is created and stored
 *
 * */
function ensureVAnchor(address: Address): VAnchor {
  const vAnchor = VAnchor.load(address.toHexString());
  if (vAnchor) {
    return vAnchor;
  }
  const vAnchorContract = VAnchorContract.bind(address);

  let newVAnchor = new VAnchor(address.toHexString());
  newVAnchor.chainId = BigInt.zero();
  newVAnchor.contractAddress = address;
  const token = ensureFungibleTokenWrapper(vAnchorContract.token());
  const possibleWrappedTokens = token.tokens;

  newVAnchor.token = token.id;
  newVAnchor.typedChainId = vAnchorContract.EVM_CHAIN_ID_TYPE();
  newVAnchor.chainId = vAnchorContract.getChainId();

  newVAnchor.valueLocked = BigInt.zero();
  newVAnchor.finalValueLocked = BigInt.zero();
  newVAnchor.totalFees = BigInt.zero();
  newVAnchor.totalWrappingFees = BigInt.zero();
  newVAnchor.interactedToken = [];
  newVAnchor.numberOfDeposits = BigInt.zero();
  newVAnchor.averageDepositAmount = BigInt.zero();
  newVAnchor.maxDepositAmount = BigInt.zero();
  newVAnchor.minDepositAmount = BigInt.zero();

  newVAnchor.numberOfWithdraws = BigInt.zero();
  newVAnchor.averageWithdrawAmount = BigInt.zero();
  newVAnchor.maxWithdrawAmount = BigInt.zero();
  newVAnchor.minWithdrawAmount = BigInt.zero();

  newVAnchor.save();

  // populate the compostion of the vAnchors
  for (let i = 0; i < possibleWrappedTokens.length; i++) {
    ensureVAnchorTokenVolume(newVAnchor, possibleWrappedTokens[i]);
  }
  newVAnchor.save();
  return newVAnchor;
}

/**
 * Handling the  vAnchor side effect for withdraw transaction
 *
 * */

function vAnchorWithdrawSideEffect(
  vAnchor: VAnchor,
  vAnchorVolume: VAnchorVolume,
  amount: BigInt,
  valueLocked: BigInt
): void {
  vAnchorVolume.valueLocked = vAnchorVolume.valueLocked.minus(amount);
  vAnchorVolume.finalValueLocked = vAnchorVolume.finalValueLocked.minus(amount);

  vAnchor.valueLocked = valueLocked;

  vAnchor.numberOfWithdraws = vAnchor.numberOfWithdraws.plus(ONE_BI);
  // update the max withdraw amount
  if (vAnchor.maxWithdrawAmount.lt(amount)) {
    vAnchor.maxWithdrawAmount = amount;
  }
  if (vAnchor.minWithdrawAmount.gt(amount)) {
    vAnchor.minWithdrawAmount = amount;
  }
  vAnchor.averageWithdrawAmount = vAnchor.valueLocked.div(vAnchor.numberOfWithdraws);

  vAnchor.save();
  vAnchorVolume.save();
}

/**
 * Handling the  vAnchor side effect for depoist transaction
 *
 * */

function vAnchorDepositSideEffect(
  vAnchor: VAnchor,
  vAnchorVolume: VAnchorVolume,
  amount: BigInt,
  valueLocked: BigInt
): void {
  vAnchorVolume.valueLocked = vAnchorVolume.valueLocked.plus(amount);
  vAnchorVolume.finalValueLocked = vAnchorVolume.finalValueLocked.plus(amount);

  vAnchor.valueLocked = valueLocked;

  vAnchor.numberOfDeposits = vAnchor.numberOfDeposits.plus(ONE_BI);
  // update the max withdraw amount
  if (vAnchor.maxDepositAmount.lt(amount)) {
    vAnchor.maxDepositAmount = amount;
  }
  if (vAnchor.minDepositAmount.gt(amount)) {
    vAnchor.minDepositAmount = amount;
  }
  vAnchor.averageDepositAmount = vAnchor.valueLocked.div(vAnchor.numberOfDeposits);

  vAnchor.save();
  vAnchorVolume.save();
}

/**
 *
 * Update vAnchor fees
 * */
function updateFee(vAnchor: VAnchor, dayDataPayload: VolumeDTO): void {
  vAnchor.totalFees = vAnchor.totalFees.plus(dayDataPayload.totalFees);
  vAnchor.totalWrappingFees = vAnchor.totalWrappingFees.plus(dayDataPayload.totalWrappingFees);
  vAnchor.save();
}

/*
 * Setup the tx data from the tx input
 * Adding the tuple prefix
 * */
export function getTxnInputDataToDecode(txInput: Bytes): Bytes {
  const inputDataHexString = txInput.toHexString().slice(10); //take away function signature: '0x????????'
  const hexStringToDecode = '0x0000000000000000000000000000000000000000000000000000000000000020' + inputDataHexString; // prepend tuple offset
  return Bytes.fromByteArray(Bytes.fromHexString(hexStringToDecode));
}

export function isTxHandled(txId: string): boolean {
  const maybeDepositTx = DepositTx.load(txId);
  if (maybeDepositTx != null) {
    return true;
  }

  const maybeWithdrawTx = WithdrawTx.load(txId);
  if (maybeWithdrawTx != null) {
    return true;
  }

  const maybeTransferTx = TransferTx.load(txId);
  return maybeTransferTx != null;
}

/**
 * Insertion event handler
 *  - System Merkle tree insertion event
 *
 *
 * */
export function handleInsertion(event: InsertionEvent): void {
  // Handle the transact call only once per insertion
  let txId = event.transaction.hash.toHexString();
  // Check if the transaction is already handled
  const isHandedTx = isTxHandled(txId);
  if (isHandedTx) {
    return;
  }

  // Prepare the transaction input
  const callInput = getTxnInputDataToDecode(event.transaction.input);
  // Decode the transaction
  const data = ethereum.decode(
    '(bytes,bytes,(address,int256,address,uint256,uint256,address),(bytes,bytes,uint256[],uint256[2],uint256,uint256),(bytes,bytes))',
    Bytes.fromUint8Array(callInput)
  );
  // Gas used for the transaction
  let gasUsed = BigInt.zero();
  if (event.receipt != null) {
    gasUsed = BigInt.fromI32(gasUsed.toI32());
  }

  // Ensure storage items
  const vAnchor = ensureVAnchor(event.address);
  const fungibleTokenWrapper = ensureFungibleTokenWrapper(Address.fromBytes(vAnchor.token));
  const fungibleTokenWrapperContract = FungibleTokenWrapper.bind(Address.fromBytes(vAnchor.token));
  const nextVAnchorLockedValue = fungibleTokenWrapperContract.balanceOf(Address.fromBytes(vAnchor.contractAddress));
  // Ensure that data from tx input is parses correctly
  if (data !== null) {
    const inputs = data.toTuple();
    // const proof = input[0];
    // const auxPublicInputs = inputs[1];
    const externalData = inputs[2];
    // const publicInputs = inputs[3];
    // const encryptions = inputs[4];
    if (externalData !== null) {
      // Decode the ExtData
      const extData = ExternalData.fromEthereumValue(externalData);
      // WrappedToken
      const token = extData.token;
      const wrappedToken = ensureToken(token);
      // Ensure there is a tracker for the wrapped token
      const vAnchorVolume = ensureVAnchorTokenVolume(vAnchor, wrappedToken.id);

      const finalAmount = extData.getFinalAmount();
      const fees = extData.getFee();
      const amount = extData.amount;
      const txValue = event.transaction.value;
      const isNative = isSameAddress(extData.token, Address.zero());
      const hasWrapping = !isSameAddress(Address.fromBytes(vAnchor.token), token);
      let transactionType = extData.getTransactionType();
      // DayData payload
      let dayDataPayload = VolumeDTO.withToken(wrappedToken);
      dayDataPayload.relayerFees = fees;
      dayDataPayload.txType = transactionType;

      if (transactionType === TransactionType.Deposit) {
        let entity = new DepositTx(txId);

        entity.vAnchor = vAnchor.id;
        entity.fungibleTokenWrapper = fungibleTokenWrapper.id;
        entity.wrappedToken = wrappedToken.id;
        entity.depositor = event.transaction.from;
        // Values
        entity.value = amount;
        entity.RelayerFee = fees;
        // Update fungibleTokenWrapper composition
        updateCompositionOfToken(wrappedToken, fungibleTokenWrapper);

        if (hasWrapping) {
          const wrapAmount = isNative ? txValue : fungibleTokenWrapperContract.getAmountToWrap(amount);
          const wrappingFee = fungibleTokenWrapperContract.getFeeFromAmount(wrapAmount);
          const finalAmount = wrapAmount.minus(wrappingFee);
          entity.wrappingFee = wrappingFee;
          entity.finalValue = finalAmount;
          dayDataPayload.wrappingFees = wrappingFee;
          dayDataPayload.finalAmount = finalAmount;
        } else {
          entity.wrappingFee = BigInt.zero();
          entity.finalValue = finalAmount;
          dayDataPayload.finalAmount = finalAmount;
        }

        entity.isWrapAndDeposit = hasWrapping;

        entity.blockNumber = event.block.number;
        entity.blockTimestamp = event.block.timestamp;
        entity.transactionHash = event.transaction.hash;

        entity.gasUsed = gasUsed;
        entity.fullFee = entity.RelayerFee.plus(entity.wrappingFee);

        entity.save();
        // Update vAnchor volume locked
        vAnchorDepositSideEffect(vAnchor, vAnchorVolume, amount, nextVAnchorLockedValue);
      } else if (transactionType === TransactionType.Withdraw) {
        let entity = new WithdrawTx(txId);

        entity.vAnchor = vAnchor.id;
        entity.fungibleTokenWrapper = fungibleTokenWrapper.id;
        entity.wrappedToken = wrappedToken.id;

        entity.beneficiary = extData.recipient;

        entity.value = amount;
        entity.finalValue = finalAmount;
        // Fees
        entity.RelayerFee = fees;

        if (hasWrapping) {
          const wrapAmount = isNative ? txValue : fungibleTokenWrapperContract.getAmountToWrap(amount);
          const wrappingFee = fungibleTokenWrapperContract.getFeeFromAmount(wrapAmount);
          const finalAmount = wrapAmount.minus(wrappingFee);
          entity.unWrappingFee = wrappingFee;
          entity.finalValue = finalAmount;
          dayDataPayload.unWrappingFees = wrappingFee;
          dayDataPayload.finalAmount = finalAmount;
        } else {
          entity.unWrappingFee = BigInt.zero();
          entity.finalValue = finalAmount;
          dayDataPayload.finalAmount = finalAmount;
        }

        entity.isUnwrapAndWithdraw = hasWrapping;

        entity.blockNumber = event.block.number;
        entity.blockTimestamp = event.block.timestamp;
        entity.transactionHash = event.transaction.hash;
        entity.fullFee = entity.RelayerFee.plus(entity.unWrappingFee);
        entity.gasUsed = gasUsed;

        entity.save();

        // Update vAnchor volume locked
        vAnchorWithdrawSideEffect(vAnchor, vAnchorVolume, amount, nextVAnchorLockedValue);
      } else if (transactionType === TransactionType.Transfer) {
        let entity = new TransferTx(txId);
        entity.from = event.transaction.from;
        entity.to = extData.recipient;
        entity.contractAddress = event.address;
        entity.value = amount;
        entity.finalValue = finalAmount;
        entity.fee = fees;

        entity.vAnchor = vAnchor.id;
        entity.fungibleTokenWrapper = fungibleTokenWrapper.id;

        entity.blockNumber = event.block.number;
        entity.blockTimestamp = event.block.timestamp;
        entity.transactionHash = event.transaction.hash;

        entity.blockNumber = event.block.number;
        entity.blockTimestamp = event.block.timestamp;
        entity.transactionHash = event.transaction.hash;
        entity.save();
      }
      // Update fees
      updateFee(vAnchor, dayDataPayload);
      // Update day data
      updateVAnchorDayData(event.block, vAnchor, dayDataPayload, txId);
    }
  } else {
    log.info('Data is null', []);
  }
  let entity = new Insertion(event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString());
  entity.commitment = event.params.commitment;
  entity.leafIndex = event.params.leafIndex;
  entity.timestamp = event.params.timestamp;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
