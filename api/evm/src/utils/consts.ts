/* eslint-disable prefer-const */
import { Address, BigDecimal, BigInt, log } from '@graphprotocol/graph-ts';

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';
export const chains = ['Hermes', 'Athena', 'Demter'];

export const vAnchorConfig: Map<string, Address> = new Map<string, Address>();
vAnchorConfig.set(chains[0], Address.fromString('0x38E7AA90C77f86747fAb355eeCAa0c2E4c3a463D'));
vAnchorConfig.set(chains[1], Address.fromString('0x1b376B18A065D3B8Ce5e6354fAd5F35B9FbdC21c'));

export const fungibleTokenWrapperConfig: Map<string, Address> = new Map<string, Address>();
fungibleTokenWrapperConfig.set(chains[0], Address.fromString('0xFdaACACb85484c4D492414F4911524F57d2549F4'));
fungibleTokenWrapperConfig.set(chains[1], Address.fromString('0x3CE626a78B6b2779805b37ACBFc8126555B739bF'));

export let ZERO_BI = BigInt.fromI32(0);
export let ONE_BI = BigInt.fromI32(1);
export let ZERO_BD = BigDecimal.fromString('0');
export let ONE_BD = BigDecimal.fromString('1');
export let BI_18 = BigInt.fromI32(18);

export function isSameAddress(ad1: Address, ad2: Address): boolean {
  return ad1.toHexString() == ad2.toHexString();
}

export function isVAnchorAddress(address: Address): boolean {
  const addresses: Array<Address> = vAnchorConfig.values();

  for (let i = 0; i < addresses.length; i++) {
    if (isSameAddress(addresses[i], address)) {
      log.info(`Address {} is a vanchor `, [address.toHexString()]);
      return true;
    }
  }
  log.info(`Address {} isnot a vanchor `, [address.toHexString()]);
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
