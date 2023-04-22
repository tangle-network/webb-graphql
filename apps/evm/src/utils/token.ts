import { Address } from "@graphprotocol/graph-ts";
import { FungibleTokenWrapper } from "../../generated/FungibleTokenWrapper/FungibleTokenWrapper";

class FungibleTokenWrapperMetaData {
  name: string;
  symbol: string;

  constructor(name: string, symbol: string) {
    this.name = name;
    this.symbol = symbol;
  }
}

export function fetchTokenData(tokenAddress: Address): FungibleTokenWrapperMetaData {
  const fungibleTokenWrapper = FungibleTokenWrapper.bind(tokenAddress);
  const symbol = fungibleTokenWrapper.symbol();
  const name = fungibleTokenWrapper.name();

  return new FungibleTokenWrapperMetaData(name, symbol);
}
