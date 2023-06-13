import { Address, BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  FungibleTokenWrapper as FungibleTokenWrapperContract,
  Transfer as TransferEvent,
} from '../generated/FungibleTokenWrapper/FungibleTokenWrapper';
import { FungibleTokenWrapper, FungibleTokenWrapperComposition, Token } from '../generated/schema';
import { ERC20 as ERC20Contract } from '../generated/VAnchor/ERC20';

export function ensureToken(tokenAddress: Address): Token {
  let maybeToken = Token.load(tokenAddress);
  if (maybeToken) {
    return maybeToken;
  }
  const token = new Token(tokenAddress);

  const tokenContract = ERC20Contract.bind(tokenAddress);
  const name = tokenContract.try_name();
  if (name.reverted) {
    token.name = 'Ethereum';
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

  token.isFungibleTokenWrapper = FungibleTokenWrapper.load(tokenAddress) != null;

  token.save();
  return token;
}
function ensureFTComposition(token: Token, FTW: FungibleTokenWrapper) {
  const id: Bytes = FTW.id.concat(token.id);
  const composition = FungibleTokenWrapperComposition.load(id);

  if (composition) {
    return composition;
  }
  const newComposition = new FungibleTokenWrapperComposition(id);
  newComposition.token = token.id;
  newComposition.volume = BigInt.zero();
  newComposition.save();

  const compositions = FTW.composition;

  compositions.push(newComposition.id);
  FTW.composition = compositions;
  FTW.save();
}
export function ensureFungibleTokenWrapper(tokenAddress: Address): FungibleTokenWrapper {
  let maybeFungibleTokenWrapper = FungibleTokenWrapper.load(tokenAddress);
  if (maybeFungibleTokenWrapper) {
    return maybeFungibleTokenWrapper;
  }
  let fungibleTokenWrapperEntity = new FungibleTokenWrapper(tokenAddress);
  const ftw = FungibleTokenWrapperContract.bind(tokenAddress);
  // token name
  fungibleTokenWrapperEntity.name = ftw.name();
  fungibleTokenWrapperEntity.tokens = [];
  fungibleTokenWrapperEntity.symbol = ftw.symbol();
  fungibleTokenWrapperEntity.decimals = ftw.decimals();
  fungibleTokenWrapperEntity.feePercentage = ftw.feePercentage();
  fungibleTokenWrapperEntity.address = tokenAddress;
  fungibleTokenWrapperEntity.save();

  // list of tokens for
  const tokens = ftw.getTokens();

  let FTWTokens: Array<Bytes> = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = ensureToken(tokens[i]);
    ensureFTComposition(token, fungibleTokenWrapperEntity);
    FTWTokens.push(tokens[i]);
  }
  // Adding the native token to the list of tokens
  if (ftw.isNativeAllowed()) {
    const token = ensureToken(Address.zero());
    ensureFTComposition(token, fungibleTokenWrapperEntity);

    FTWTokens.push(Address.zero());
    // TODO: Ensure the token symbol is the native token for the used chain
    fungibleTokenWrapperEntity.baseTokenSymbol = 'ETH';
  } else if (tokens.length > 0) {
    const token = ensureToken(tokens[0]);
    fungibleTokenWrapperEntity.baseTokenSymbol = token.symbol;
  }

  fungibleTokenWrapperEntity.tokens = FTWTokens;
  fungibleTokenWrapperEntity.save();

  return fungibleTokenWrapperEntity;
}

/**
 *
 * Handler for FungibleTokenWrapper transfer event
 *
 * */
export function handleTransfer(event: TransferEvent): void {}
