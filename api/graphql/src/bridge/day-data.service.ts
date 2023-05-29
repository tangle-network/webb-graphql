import {ConsoleLogger, Injectable} from '@nestjs/common';
import {VAnchorService} from "../subgraph/v-anchor.service";
import {PricingService} from "../pricing/pricing.service";
import {Composition, DayData} from "../../gql/graphql";
import {mapTokenFragment} from "../helpers";

const subgraph = {
  uri: "http://localhost:8000/subgraphs/name/VAnchor"
};

@Injectable()
export class DayDataService {
  constructor(private readonly vAnchorService: VAnchorService,
              private readonly pricingService: PricingService
  ) {
  }

  public async bridgesDayData(): Promise<DayData[]> {

    const dayDataMap: Record<string, DayData> = {}

    const subgraph = {
      uri: "http://localhost:8000/subgraphs/name/VAnchor"
    };
    const {vanchors} = await this.vAnchorService.discoverVAnchorsOfSubgraph(subgraph)
    for (const vanchor of vanchors) {
      const dayData = await this.bridgeSideDayData(vanchor.id);

      if (dayDataMap[vanchor.id]) {
        const mergedComposition: Composition[] = dayDataMap[vanchor.id].compositions;
        dayData.compositions.forEach(dayComposition => {
          const compositionEntry = mergedComposition.find(entry => entry.token.id === dayComposition.token.id)
          if (compositionEntry) {
            compositionEntry.value = String(Number(compositionEntry.value) + Number(dayComposition.value));
            compositionEntry.valueUSD = String(Number(compositionEntry.valueUSD) + Number(dayComposition.valueUSD));
          } else {
            mergedComposition.push(dayComposition)
          }
        })

        dayDataMap[vanchor.id] = {
          ...dayDataMap[vanchor.id],
          compositions: mergedComposition,
          feesUSD: String(Number(dayDataMap[vanchor.id].feesUSD) + Number(dayData.feesUSD)),
          numberOfDeposits: dayDataMap[vanchor.id].numberOfDeposits + dayData.numberOfDeposits,
          numberOfTransfers: dayDataMap[vanchor.id].numberOfTransfers + dayData.numberOfTransfers,
          numberOfWithdraws: dayDataMap[vanchor.id].numberOfWithdraws + dayData.numberOfWithdraws,
          volumeUSD: String(Number(dayDataMap[vanchor.id].volumeUSD) + Number(dayData.volumeUSD))

        }

      } else {
        dayDataMap[vanchor.id] = dayData
      }
    }

    return Object.values(dayDataMap)

  }

  public async bridgeSideDayData(vAnchorId: string): Promise<DayData> {
    const {vanchorDayDatas} = await this.vAnchorService.fetchDayData(
      subgraph,
      {vAnchorId}
    );

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
      date: String(date),
      numberOfDeposits: Number(numberOfDeposits),
      numberOfTransfers: Number(numberOfTransfers),
      numberOfWithdraws: Number(numberOfWithdraws),
      volumeUSD: String(totalValueUSD),
      feesUSD: String(totalFeesUSD),

    }
  }
}
