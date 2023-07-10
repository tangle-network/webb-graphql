import { Address } from "@graphprotocol/graph-ts";

export const isNativeToken = (tokenAddress: Address) => {
    return tokenAddress.toHexString() === "0x0000000000000000000000000000000000000000"
}