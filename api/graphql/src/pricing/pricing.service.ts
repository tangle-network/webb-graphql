import {Injectable} from '@nestjs/common';
import axios from 'axios'

type PriceMap = Record<string, number>
type PriceUSDResponse = Record<string, { usd: number }>

@Injectable()
export class PricingService {


  /**
   * Coin pricing
   * input is the tokens ids
   * */
  async _getPriceUSD(input: string[]): Promise<PriceMap> {
    const prices = {};
    const ids = input.join(',');
    const data = await axios.get<any, PriceUSDResponse>(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`);
    for (const coin of input) {
      prices[coin] = data[coin].usd
    }
    return prices
  }

  async getPriceUSD(input: string[]): Promise<PriceMap> {
    const prices = {};
    for (const coin of input) {
      prices[coin] = 1880
    }
    return prices


  }

  async getTokenPriceWithChainAndContract(
    chainId: number,
    contractAddress: string
  ) {
    return 1880
  }
}
