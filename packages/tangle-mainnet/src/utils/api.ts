import { ApiPromise, WsProvider } from '@polkadot/api';

// Live Testnet
// const TANGLE_RPC_ENDPOINT = 'ws://127.0.0.1:9944';
// Local Testnet
const TANGLE_RPC_ENDPOINT = 'wss://testnet-rpc.tangle.tools';

async function getOrCacheApiVariant<T>(
  endpoint: string,
  cache: Map<string, Promise<T>>,
  factory: () => Promise<T>
): Promise<T> {
  const possiblyCachedInstance = cache.get(endpoint);

  if (possiblyCachedInstance !== undefined) {
    return possiblyCachedInstance;
  }

  // Immediately cache the promise to prevent data races
  // that would result in multiple API instances being created.
  const newInstance = factory();

  cache.set(endpoint, newInstance);

  return newInstance;
}

const apiPromiseCache = new Map<string, Promise<ApiPromise>>();

export const getPolkadotApiPromise: (endpoint?: string) => Promise<ApiPromise> = async (
  endpoint: string = TANGLE_RPC_ENDPOINT
) => {
  return getOrCacheApiVariant(endpoint, apiPromiseCache, async () => {
    const wsProvider = new WsProvider(endpoint);

    return ApiPromise.create({
      provider: wsProvider,
      noInitWarn: true,
    });
  });
};
