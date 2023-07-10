import { Address } from '@graphprotocol/graph-ts';
import { ERC20 } from '../../generated/VAnchor/erc20';
import { Token } from '../../generated/schema';

export function getTokenSymbol(tokenAddress: Address): string {
    const tokenContract = ERC20.bind(tokenAddress);
    const symbol = tokenContract.try_symbol();

    if (symbol.reverted) {
        return 'ETH';
    } else {
        return symbol.value;
    }
}

export function getTokenName(tokenAddress: Address): string {
    const tokenContract = ERC20.bind(tokenAddress);
    const name = tokenContract.try_name();
    if (name.reverted) {
        return 'Ether';
    } else {
        return name.value;
    }
}


export function ensureToken(tokenAddress: Address): Address {

    const maybeToken = Token.load(tokenAddress);
    if (maybeToken) {
        return tokenAddress;
    }
    const token = new Token(tokenAddress);
    const tokenContract = ERC20.bind(tokenAddress);

    token.symbol = getTokenSymbol(tokenAddress);
    token.name = getTokenName(tokenAddress);

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
