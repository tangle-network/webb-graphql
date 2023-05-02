import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { ADDRESS_ZERO, ZERO_BI } from "./consts";

export enum TransactionType {
  Deposit,
  Withdraw,
  Transfer,
}

/**
 * VAnchor transact transaction External data decoder
 *
 * */
export class ExternalData {
  public recipient: Address;
  public amount: BigInt;
  public relayer: Address;
  public fee: BigInt;
  public refund: BigInt;
  public token: Address;

  static fromEthereumValue(externalData: ethereum.Value | null): ExternalData {
    if (externalData !== null) {
      const externalDataList = externalData.toTuple();
      return new ExternalData(
        // Recipient address
        externalDataList[0].toAddress(),
        // Transactions amount
        externalDataList[1].toBigInt(),
        // Relayer address
        externalDataList[2].toAddress(),
        // Fee amount
        externalDataList[3].toBigInt(),
        //Refund amount
        externalDataList[4].toBigInt(),
        // Token address
        externalDataList[5].toAddress()
      );
    }

    throw Error('Failed to init');
  }

  constructor(recipient: Address, amount: BigInt, relayer: Address, fee: BigInt, refund: BigInt, token: Address) {
    this.recipient = recipient;
    this.amount = amount;
    this.relayer = relayer;
    this.fee = fee;
    this.refund = refund;
    this.token = token;
  }


  /**
   *  Final amount without fees
   *
   * */
  getFinalAmount(): BigInt {
    const isRelayedTransaction = this.relayer.toHexString() === ADDRESS_ZERO;
    return isRelayedTransaction ? this.amount.minus(this.fee) : this.amount;
  }

  getFee():BigInt{
    const isRelayedTransaction = this.relayer.toHexString() === ADDRESS_ZERO;
    return isRelayedTransaction ? this.fee : BigInt.fromI32(0)
  }
  getTransactionType(): TransactionType {
    const finalAmount = this.getFinalAmount();
    if (finalAmount.lt(ZERO_BI)) {
      return TransactionType.Withdraw;
    } else if (finalAmount.gt(ZERO_BI)) {
      return TransactionType.Deposit;
    } else {
      return TransactionType.Transfer;
    }
  }
}
