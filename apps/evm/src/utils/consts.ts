/* eslint-disable prefer-const */
import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export const chains = ["Hermes", "Athena", "Demter"];

export const vAnchorConfig: Map<string, Address> = new Map<string, Address>();
vAnchorConfig.set(chains[0], Address.fromString("0xc705034ded85e817b9E56C977E61A2098362898B"));

export const fungibleTokenWrapperConfig: Map<string, Address> = new Map<string, Address>();
fungibleTokenWrapperConfig.set(chains[0], Address.fromString("0x4e3df2073bf4b43B9944b8e5A463b1E185D6448C"));

export let ZERO_BI = BigInt.fromI32(0);
export let ONE_BI = BigInt.fromI32(1);
export let ZERO_BD = BigDecimal.fromString("0");
export let ONE_BD = BigDecimal.fromString("1");
export let BI_18 = BigInt.fromI32(18);

export function isSameAddress(ad1: Address, ad2: Address):boolean {
  return ad1.toHexString() == ad2.toHexString();
}

export function isVAnchorAddress(address: Address): boolean {
  const addresses: Array<Address> = vAnchorConfig.values();

  for (let i = 0; i < addresses.length; i++) {
    if (isSameAddress(addresses[i], address)) {
      return true;
    }
  }
  return false;
}

export function isFungibleTokenWrapperAddress(address: Address): boolean {
  const addresses: Array<Address> = fungibleTokenWrapperConfig.values();
  for (let i = 0; i < addresses.length; ++i) {
    if (isSameAddress(addresses[i], address)) {
      return true;
    }
  }
  return false;
}
