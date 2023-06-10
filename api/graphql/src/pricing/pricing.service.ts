import { ConsoleLogger, Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { coinList } from './coin-list';

type PriceMap = Record<string, number>;
type PriceUSDResponse = Record<string, { usd: number }>;

@Injectable()
export class PricingService {
  private coinIdCache = new Map<string, string>();
  private pricesCache = new Map<string, PriceMap>();

  /**
   * Coin pricing
   * input is the tokens ids
   * */
  async getPriceUSD(symbols: string[]): Promise<PriceMap> {
    const pricesKey = symbols.toString();
    const prices = {};

    if (this.pricesCache.has(pricesKey)) {
      return this.pricesCache.get(pricesKey);
    }
    const coinGeckoIds = symbols.map((symbol) => {
      if (this.coinIdCache.has(symbol)) {
        return this.coinIdCache.get(symbol);
      }

      const entry = coinList.find(
        (c) => c.symbol.toLowerCase() === symbol.toLowerCase(),
      );
      this.coinIdCache.set(symbol, entry.id);

      return entry.id;
    });
    const ids = coinGeckoIds.join(',');

    const { data } = await axios.get<any, AxiosResponse<PriceUSDResponse>>(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
      },
    );

    for (const coin of symbols) {
      const id = this.coinIdCache.get(coin);
      prices[coin] = data[id].usd;
    }
    this.pricesCache.set(pricesKey, prices);
    setTimeout(() => {
      this.pricesCache.delete(pricesKey);
    }, 30_000);
    return prices;
  }
}
