/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const chains = ['Hermes' ,'Athena','Demter'];

export const vAnchorConfig = {
  [chains[0]]: '0xc705034ded85e817b9E56C977E61A2098362898B'
}

export const fungibleTokenWrapperConfig  = {
  [chains[0]]: '0x4e3df2073bf4b43B9944b8e5A463b1E185D6448C'

}

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export function isVAnchorAddress(address:Address) {
  return Boolean(Object.values(vAnchorConfig)
    .find(vAnchorAddress => vAnchorAddress.toLocaleLowerCase() === address.toHexString().toLocaleLowerCase())
  )
}
export function isFungibleTokenWrapperAddress(address:Address){
  return Boolean(Object.values(fungibleTokenWrapperConfig)
    .find(fungibleTokenWrapperAddress => fungibleTokenWrapperAddress.toLocaleLowerCase() === address.toHexString().toLocaleLowerCase())

  )
}
