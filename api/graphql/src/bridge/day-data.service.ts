import { Injectable } from '@nestjs/common';
import {VAnchorService} from "../subgraph/v-anchor.service";
import {PricingService} from "../pricing/pricing.service";
import {Composition, DayData} from "../../gql/graphql";
import {mapTokenFragment} from "../helpers";

@Injectable()
export class DayDataService {
  constructor(private readonly vAnchorService: VAnchorService,
              private readonly pricingService: PricingService
  ) {
  }


  public  async bridgeSideDayData():Promise<DayData>{
    const {vanchorDayDatas} = await this.vAnchorService.fetchDayData({
      uri: "http://localhost:8000/subgraphs/name/VAnchor"
    });

    const {
      id,

      composition,
      date,

      numberOfWithdraws,
      numberOfTransfers,
      numberOfDeposits,

    } = vanchorDayDatas[0]

    const compositionWithSymbol = composition.map(c => {

      if (c.token.isFungibleTokenWrapper) {
        return {
          ...c,
          symbol: 'WETH'
        }

      }
      return {
        ...c,
        symbol: c.token.symbol
      }
    });
    const tokens = compositionWithSymbol.map(c => c.symbol);
    const prices = await this.pricingService.getPriceUSD(tokens);

    let totalValueUSD = 0;
    let totalFeesUSD = 0;

    const compositions = compositionWithSymbol.map((composition): Composition => {
      const decimals = composition.token.decimals;
      const amount = Number(composition.volume);
      const fees = Number(composition.fees);
      const amountFormatted = amount * Math.pow(10, -decimals);
      const feesFormatted = fees * Math.pow(10, -decimals);
      const price = prices[composition.symbol];

      const valueUSD = price * amountFormatted
      const feesUSD = feesFormatted * amountFormatted

      totalValueUSD = totalValueUSD + valueUSD
      totalFeesUSD = totalFeesUSD + feesUSD
      return {

        valueUSD: String(valueUSD),
        value: composition.volume,
        token: mapTokenFragment(composition.token)
      }
    });

    return {
      id,

      compositions,
      date:String(date) ,
      numberOfDeposits: String(numberOfDeposits),
      numberOfTransfers: String(numberOfTransfers),
      numberOfWithdraws: String(numberOfWithdraws),
      volumeUSD: String(totalValueUSD),
      fees: String(totalFeesUSD),

    }
  }
}
