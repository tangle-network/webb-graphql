import { Address } from '@graphprotocol/graph-ts';
import { ERC20 } from '../../generated/FungibleTokenWrapper/ERC20';
import { Token } from '../../generated/schema';

export function ensureToken(tokenAddress: Address): Address {
  const maybeToken = Token.load(tokenAddress);
  if (maybeToken) {
    return tokenAddress;
  }
  const token = new Token(tokenAddress);

  const tokenContract = ERC20.bind(tokenAddress);
  const name = tokenContract.try_name();
  if (name.reverted) {
    token.name = 'Ether';
  } else {
    token.name = name.value;
  }
  const symbol = tokenContract.try_symbol();
  if (symbol.reverted) {
    token.symbol = 'ETH';
  } else {
    token.symbol = symbol.value;
  }
  const decimals = tokenContract.try_decimals();
  if (decimals.reverted) {
    token.decimals = 18;
  } else {
    token.decimals = decimals.value;
  }

  token.address = tokenAddress;

  token.save();
  return tokenAddress;
}
