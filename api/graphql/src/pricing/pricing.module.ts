import {Module} from '@nestjs/common';
import {PricingService} from './pricing.service';

import {get} from 'axios'

type PriceMap = Record<string, number>
type PriceUSDResponse  = Record<string, { usd:number }>

@Module({
  providers: [PricingService]
})
export class PricingModule {

  constructor() {
  }


  async getPriceUSD(input: string[]): Promise<PriceMap> {
    const prices = {};
    const ids = input.join(',');
    const data = await get<any,PriceUSDResponse>(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`);
    for ( const coin of input){
      prices[coin] = data[coin].usd
    }
    return  prices
  }


}
