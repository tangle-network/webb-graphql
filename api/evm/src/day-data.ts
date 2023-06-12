import { Address, BigInt, Bytes, ethereum } from '@graphprotocol/graph-ts';
import { Token, VAnchor, VAnchorDayData, VAnchorVolumeComposition } from '../generated/schema';
import { TransactionType } from './utils/transact';
import { ensureFungibleTokenWrapper } from './fungible-token-wrapper';

export function ensureDayVolumeComposition(dayData: VAnchorDayData, token: Bytes): VAnchorVolumeComposition {
  const id = dayData.id.concat(token.toHexString());
  const dayVolume = VAnchorVolumeComposition.load(id);
  if (dayVolume) {
    return dayVolume;
  }

  let newDayVolumeComposition = new VAnchorVolumeComposition(id);

  newDayVolumeComposition.token = token;
  newDayVolumeComposition.VAnchorDayData = dayData.id;

  newDayVolumeComposition.volume = BigInt.zero();
  newDayVolumeComposition.fees = BigInt.zero();

  newDayVolumeComposition.relayerFees = BigInt.zero();
  newDayVolumeComposition.wrappingFees = BigInt.zero();
  newDayVolumeComposition.unWrappingFees = BigInt.zero();
  newDayVolumeComposition.save();

  let vAnchorCompositions = dayData.composition;
  vAnchorCompositions.push(newDayVolumeComposition.id);

  dayData.composition = vAnchorCompositions;
  dayData.save();

  return newDayVolumeComposition;
}

export function ensureDay(block: ethereum.Block, vAnchor: VAnchor): VAnchorDayData {
  const timestamp = block.timestamp.toI32();
  const dayIndex = timestamp / 86400; // rounded
  const dayId = dayIndex.toString().concat('-').concat(vAnchor.id);
  const dayData = VAnchorDayData.load(dayId);

  if (dayData) {
    return dayData;
  }

  let newDayData = new VAnchorDayData(dayId);

  newDayData.date = timestamp;
  newDayData.vAnchor = vAnchor.id;
  newDayData.composition = [];

  newDayData.numberOfDeposits = BigInt.zero();
  newDayData.numberOfWithdraws = BigInt.zero();
  newDayData.numberOfTransfers = BigInt.zero();

  newDayData.fees = BigInt.zero();
  newDayData.wrappingFees = BigInt.zero();
  newDayData.relayerFees = BigInt.zero();
  newDayData.volume = BigInt.zero();
  newDayData.depositedVolume = BigInt.zero();
  newDayData.withdrawnVolume = BigInt.zero();

  newDayData.depositTx = [];
  newDayData.withdrawTx = [];
  newDayData.transferTx = [];
  newDayData.startBlockNumber = block.number;
  newDayData.save();
  const token = vAnchor.token;
  const ftw = ensureFungibleTokenWrapper(Address.fromBytes(token));
  const possibleWrappedTokens = ftw.tokens;
  for (let i = 0; i < possibleWrappedTokens.length; i++) {
    ensureDayVolumeComposition(newDayData, possibleWrappedTokens[i]);
  }

  newDayData.save();
  return newDayData;
}

export class VolumeDTO {
  public token: Token;
  public relayerFees: BigInt;
  public wrappingFees: BigInt;
  public unWrappingFees: BigInt;
  public finalAmount: BigInt;
  public txType: TransactionType;

  constructor(
    token: Token,
    relayerFees: BigInt,
    wrappingFees: BigInt,
    unWrappingFees: BigInt,
    finalAmount: BigInt,
    txType: TransactionType
  ) {
    this.token = token;
    this.relayerFees = relayerFees;
    this.wrappingFees = wrappingFees;
    this.unWrappingFees = unWrappingFees;
    this.finalAmount = finalAmount;
    this.txType = txType;
  }

  static withToken(token: Token): VolumeDTO {
    return new VolumeDTO(token, BigInt.zero(), BigInt.zero(), BigInt.zero(), BigInt.zero(), TransactionType.Deposit);
  }

  get totalFees(): BigInt {
    return this.relayerFees.plus(this.totalWrappingFees);
  }
  get totalWrappingFees(): BigInt {
    return this.wrappingFees.plus(this.unWrappingFees);
  }
}

/**
 * Update vAnchor day data
 *
 * */
export function updateVAnchorDayData(
  block: ethereum.Block,
  vAnchor: VAnchor,
  volumeDTO: VolumeDTO,
  txId: string
): void {
  const vAnchorDayData = ensureDay(block, vAnchor);
  let dayVolumeComposition = ensureDayVolumeComposition(vAnchorDayData, volumeDTO.token.id);
  const finalAmount = volumeDTO.finalAmount;
  const fee = volumeDTO.totalFees;
  const txType = volumeDTO.txType;
  // Check for deposit tx to store the number of deposits and other relatd data
  if (txType === TransactionType.Deposit) {
    vAnchorDayData.numberOfDeposits = vAnchorDayData.numberOfDeposits.plus(BigInt.fromI32(1));
    const depositTransactions = vAnchorDayData.depositTx;
    depositTransactions.push(txId);
    vAnchorDayData.depositTx = depositTransactions;
    dayVolumeComposition.volume = dayVolumeComposition.volume.plus(finalAmount);
    vAnchorDayData.volume = vAnchorDayData.volume.plus(finalAmount);
    vAnchorDayData.depositedVolume = vAnchorDayData.depositedVolume.plus(finalAmount);
  } else if (txType === TransactionType.Withdraw) {
    dayVolumeComposition.volume = dayVolumeComposition.volume.minus(finalAmount);
    vAnchorDayData.withdrawnVolume = vAnchorDayData.withdrawnVolume.plus(finalAmount);

    vAnchorDayData.volume = vAnchorDayData.volume.minus(finalAmount);

    vAnchorDayData.numberOfWithdraws = vAnchorDayData.numberOfWithdraws.plus(BigInt.fromI32(1));

    const withdrawTransactions = vAnchorDayData.depositTx;
    withdrawTransactions.push(txId);
    vAnchorDayData.withdrawTx = withdrawTransactions;
  } else if (txType === TransactionType.Transfer) {
    const TransferTransactions = vAnchorDayData.depositTx;
    TransferTransactions.push(txId);
    vAnchorDayData.transferTx = TransferTransactions;
    vAnchorDayData.numberOfTransfers = vAnchorDayData.numberOfTransfers.plus(BigInt.fromI32(1));
  }
  // Store fees regardless of the transactin type
  dayVolumeComposition.fees = dayVolumeComposition.fees.plus(fee);
  dayVolumeComposition.relayerFees = dayVolumeComposition.relayerFees.plus(volumeDTO.relayerFees);
  dayVolumeComposition.wrappingFees = dayVolumeComposition.wrappingFees.plus(volumeDTO.wrappingFees);
  dayVolumeComposition.unWrappingFees = dayVolumeComposition.unWrappingFees.plus(volumeDTO.wrappingFees);

  vAnchorDayData.fees = vAnchorDayData.fees.plus(fee);
  vAnchorDayData.relayerFees = vAnchorDayData.relayerFees.plus(volumeDTO.relayerFees);
  vAnchorDayData.wrappingFees = vAnchorDayData.wrappingFees.plus(volumeDTO.wrappingFees.plus(volumeDTO.wrappingFees));

  dayVolumeComposition.save();
  vAnchorDayData.save();
}
