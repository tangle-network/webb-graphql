import { TokenDetailsFragmentFragment } from '../generated/graphql';
import { Token } from '../../gql/graphql';

export function mapTokenFragment(
  tokenFragment: TokenDetailsFragmentFragment,
): Token {
  return {
    id: tokenFragment.id,
    name: tokenFragment.name,
    decimals: tokenFragment.decimals,
    address: tokenFragment.address,
    isFungibleTokenWrapper: tokenFragment.isFungibleTokenWrapper,
    symbol: tokenFragment.symbol,
  };
}
