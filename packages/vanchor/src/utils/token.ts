import { Bytes } from '@graphprotocol/graph-ts';

export const isNativeToken = (tokenAddress: string): boolean => {
  return tokenAddress === '0x0000000000000000000000000000000000000000';
};

export function getTxnInputDataToDecode(txInput: Bytes): Bytes {
  const inputDataHexString = txInput.toHexString().slice(10); //take away function signature: '0x????????'
  const hexStringToDecode =
    '0x0000000000000000000000000000000000000000000000000000000000000020' +
    inputDataHexString; // prepend tuple offset
  return Bytes.fromByteArray(Bytes.fromHexString(hexStringToDecode));
}
