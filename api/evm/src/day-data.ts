import { BigInt, ethereum } from '@graphprotocol/graph-ts';
import { Token, VAnchor, VAnchorDayData, VAnchorVolumeComposition } from '../generated/schema';
import { TransactionType } from './utils/transact';

export function ensureDayVolumeComposition(dayData: VAnchorDayData, token: Token): VAnchorVolumeComposition {
  const id = dayData.id.concat(token.id.toString());
  const dayVolume = VAnchorVolumeComposition.load(id);
  if (dayVolume) {
    return dayVolume;
  }

  let newDayVolumeComposition = new VAnchorVolumeComposition(id);

  newDayVolumeComposition.token = token.id;
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

  newDayData.depositTx = [];
  newDayData.withdrawTx = [];
  newDayData.transferTx = [];
  newDayData.startBlockNumber = block.number;
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
  dayDataPayload: VolumeDTO,
  txId: string
): void {
  const vAnchorDayData = ensureDay(block, vAnchor);
  let dayVolumeComposition = ensureDayVolumeComposition(vAnchorDayData, dayDataPayload.token);
  const finalAmount = dayDataPayload.finalAmount;
  const fee = dayDataPayload.totalFees;
  const txType = dayDataPayload.txType;
  // Check for deposit tx to store the number of deposits and other relatd data
  if (txType === TransactionType.Deposit) {
    vAnchorDayData.numberOfDeposits = vAnchorDayData.numberOfDeposits.plus(BigInt.fromI32(1));
    const depositTransactions = vAnchorDayData.depositTx;
    depositTransactions.push(txId);
    vAnchorDayData.depositTx = depositTransactions;
    dayVolumeComposition.volume = dayVolumeComposition.volume.plus(finalAmount);
  } else if (txType === TransactionType.Withdraw) {
    dayVolumeComposition.volume = dayVolumeComposition.volume.minus(finalAmount);
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
  dayVolumeComposition.relayerFees = dayVolumeComposition.relayerFees.plus(dayDataPayload.relayerFees);
  dayVolumeComposition.wrappingFees = dayVolumeComposition.wrappingFees.plus(dayDataPayload.wrappingFees);
  dayVolumeComposition.unWrappingFees = dayVolumeComposition.unWrappingFees.plus(dayDataPayload.wrappingFees);
  dayVolumeComposition.save();
  vAnchorDayData.save();
}
