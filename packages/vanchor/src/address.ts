import { Address, BigInt, Bytes, Value } from '@graphprotocol/graph-ts';
import { ExternalData, VAnchorAddress } from '../generateddd/schema';

/**
 * The Address Type enum to store the address type
 */
enum AddressType {
  User = 0,
  Relayer,
}

const ADDRESS_TYPE_VALUES = ['User', 'Relayer'];

/**
 * Ensure an address is stored with the given address type
 * @param address the address to be checked and stored
 * @param addressType the address type to be stored
 * @returns the address id stored in the database
 */
function ensureAddressType(address: Address, addressType: AddressType): Bytes {
  const id = Bytes.fromHexString(address.toHexString().toLowerCase());
  const addressTypeString = ADDRESS_TYPE_VALUES[addressType];

  const storedAddress = VAnchorAddress.load(id);

  // If the address is not stored, then store it
  if (!storedAddress) {
    const newAddress = new VAnchorAddress(id);
    newAddress.type = [addressTypeString];
    newAddress.save();

    return newAddress.id;
  }

  // If the address type is not stored, then store it
  if (!storedAddress.type.includes(addressTypeString)) {
    storedAddress.type.push(addressTypeString);
    storedAddress.save();
  }

  return storedAddress.id;
}

/**
 * Populate the addresses of a transaction
 * @param msgSender the sender of the transaction
 * @param externalDataEntity the external data entity of the transaction
 * @returns the stored addresses ids
 */
function populateAddresses(
  msgSender: Address,
  externalDataEntity: ExternalData
): Array<Bytes> {
  const addrSet = new Set<Bytes>();

  // If the extData.extAmount is greater than 0, then the transaction is a deposit
  if (externalDataEntity.extAmount.gt(BigInt.fromI32(0))) {
    const id = ensureAddressType(msgSender, AddressType.User);
    addrSet.add(id);
  }
  // Otherwise the transaction is a withdrawal or transfer
  else {
    // Validate if the sender is the relayer
    const senderIsRelayer = msgSender.equals(externalDataEntity.relayer);
    if (senderIsRelayer) {
      const id = ensureAddressType(msgSender, AddressType.Relayer);
      addrSet.add(id);
    }
  }

  return addrSet.values();
}

export { AddressType, ensureAddressType, populateAddresses };
