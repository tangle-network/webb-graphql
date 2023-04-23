/* eslint-disable prefer-const */
import { Address, BigDecimal, BigInt, log } from "@graphprotocol/graph-ts";

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export const chains = ["Hermes", "Athena", "Demter"];

export const vAnchorConfig: Map<string, Address> = new Map<string, Address>();
vAnchorConfig.set(chains[0], Address.fromString("0x5D3b0d1AC094A8551bAB3818Eff758dc1893e6C7"));
vAnchorConfig.set(chains[1], Address.fromString("0x1b376B18A065D3B8Ce5e6354fAd5F35B9FbdC21c"));

export const fungibleTokenWrapperConfig: Map<string, Address> = new Map<string, Address>();
fungibleTokenWrapperConfig.set(chains[0], Address.fromString("0x2946259E0334f33A064106302415aD3391BeD384"));
fungibleTokenWrapperConfig.set(chains[1], Address.fromString("0xDe09E74d4888Bc4e65F589e8c13Bce9F71DdF4c7"));

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
      log.info(`Address {} is a vanchor ` , [address.toHexString()])
      return true;
    }
  }
  log.info(`Address {} isnot a vanchor ` , [address.toHexString()])
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
