import { Address, Bytes } from '@graphprotocol/graph-ts';
import {
  FungibleTokenWrapper as FungibleTokenWrapperContract,
  Transfer as TransferEvent,
} from '../generated/FungibleTokenWrapper/FungibleTokenWrapper';
import { FungibleTokenWrapper, Token } from '../generated/schema';
import {ERC20 as ERC20Contract} from "../generated/VAnchor/ERC20";

export function ensureToken(tokenAddress: Address): Token {
  let maybeToken = Token.load(tokenAddress);
  if (maybeToken) {
    return maybeToken;
  }
  const token = new Token(tokenAddress);

  const tokenContract = ERC20Contract.bind(tokenAddress);
  const name = tokenContract.try_name();
  if(name.reverted){
    token.name = "Ethereum"
  }else{
    token.name = name.value;
  }
  const symbol = tokenContract.try_symbol();
  if(symbol.reverted){
    token.symbol = 'ETH'
  }else{
    token.symbol  = symbol.value;
  }
  token.decimals  = 18;
  token.address = tokenAddress;
  token.save();
  return token;
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
  // list of tokens for
  const tokens = ftw.getTokens();
  let FTWTokens: Array<Bytes> = [];
  for (let i = 0; i < tokens.length; i++) {
    ensureToken(tokens[i]);
    FTWTokens.push(tokens[i]);
  }
  fungibleTokenWrapperEntity.tokens = FTWTokens;
  fungibleTokenWrapperEntity.symbol = ftw.symbol();
  fungibleTokenWrapperEntity.decimals = ftw.decimals();
  fungibleTokenWrapperEntity.feePercentage = ftw.feePercentage()
  fungibleTokenWrapperEntity.address = tokenAddress;
  fungibleTokenWrapperEntity.save();
  return fungibleTokenWrapperEntity;
}

/**
 *
 * Handler for FungibleTokenWrapper transfer event
 *
 * */
export function handleTransfer(event: TransferEvent): void {}
