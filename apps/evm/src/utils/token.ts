import { Address } from "@graphprotocol/graph-ts";

class FungibleTokenWrapperMetaData {
  name: string;
  symbol: string;

  constructor(name: string, symbol: string) {
    this.name = name;
    this.symbol = symbol;
  }
}

export function fetchTokenData(tokenAddress: Address): FungibleTokenWrapperMetaData {
  // const fungibleTokenWrapper = FungibleTokenWrapper.bind(tokenAddress);
  const symbol = "EDG";
  const name = "EDG";

  return new FungibleTokenWrapperMetaData(name, symbol);
}
