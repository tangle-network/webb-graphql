import { Injectable } from '@nestjs/common';
import { Subgraph, VAnchorService } from '../subgraph/v-anchor.service';
import { PricingService } from '../pricing/pricing.service';
import { Composition, DayData } from '../../gql/graphql';
import { mapTokenFragment } from '../helpers';
import { NetworksService } from '../subgraph/networks.service';

@Injectable()
export class DayDataService {
  constructor(
    private readonly vAnchorService: VAnchorService,
    private readonly pricingService: PricingService,
    private readonly networkService: NetworksService,
  ) {}

  private async allSubgraphVAnchors() {
    const vanchors = await Promise.all(
      this.networkService.networks.map((network) => {
        return this.vAnchorService.discoverVAnchorsOfSubgraph({
          uri: network.subgraphUri,
        });
      }),
    );

    return this.networkService.networks.map((network, index) => {
      return {
        subgraph: {
          uri: network.subgraphUri,
        },
        vanchors: vanchors[index].vanchors,
      };
    });
  }

  public async bridgesDayData(): Promise<DayData[]> {
    const dayDataMap: Record<string, DayData> = {};

    const allSubgraphsVAnchors = await this.allSubgraphVAnchors();

    for (const { vanchors, subgraph } of allSubgraphsVAnchors) {
      for (const vanchor of vanchors) {
        const dayData = await this.bridgeSideDayData(vanchor.id, subgraph);

        if (dayDataMap[vanchor.id]) {
          dayDataMap[vanchor.id] = {
            ...dayDataMap[vanchor.id],
            feesUSD: String(
              Number(dayDataMap[vanchor.id].feesUSD) + Number(dayData.feesUSD),
            ),
            numberOfDeposits:
              dayDataMap[vanchor.id].numberOfDeposits +
              dayData.numberOfDeposits,
            numberOfTransfers:
              dayDataMap[vanchor.id].numberOfTransfers +
              dayData.numberOfTransfers,
            numberOfWithdraws:
              dayDataMap[vanchor.id].numberOfWithdraws +
              dayData.numberOfWithdraws,
            volumeUSD: String(
              Number(dayDataMap[vanchor.id].volumeUSD) +
                Number(dayData.volumeUSD),
            ),
          };
        } else {
          dayDataMap[vanchor.id] = dayData;
        }
      }
    }

    return Object.values(dayDataMap);
  }
  public async bridgeSideDayDataByNetworkName(
    vAnchorId: string,
    networkName: string,
  ) {
    const subgraph = this.networkService.getSubgraphConfig(networkName);
    return this.bridgeSideDayData(vAnchorId, subgraph);
  }
  private async bridgeSideDayData(
    vAnchorId: string,
    subgraph: Subgraph,
  ): Promise<DayData> {
    const { vanchorDayDatas } = await this.vAnchorService.fetchDayData(
      subgraph,
      { vAnchorId },
    );

    const {
      id,

      composition,
      date,

      numberOfWithdraws,
      numberOfTransfers,
      numberOfDeposits,
    } = vanchorDayDatas[0];

    const compositionWithSymbol = composition.map((c) => {
      if (c.token.isFungibleTokenWrapper) {
        return {
          ...c,
          symbol: 'WETH',
        };
      }
      return {
        ...c,
        symbol: c.token.symbol,
      };
    });
    const tokens = compositionWithSymbol.map((c) => c.symbol);
    const prices = await this.pricingService.getPriceUSD(tokens);

    let totalValueUSD = 0;
    let totalFeesUSD = 0;

    const compositions = compositionWithSymbol.map(
      (composition): Composition => {
        const decimals = composition.token.decimals;
        const amount = Number(composition.volume);
        const fees = Number(composition.fees);
        const amountFormatted = amount * Math.pow(10, -decimals);
        const feesFormatted = fees * Math.pow(10, -decimals);
        const price = prices[composition.symbol];

        const valueUSD = price * amountFormatted;
        const feesUSD = feesFormatted * amountFormatted;

        totalValueUSD = totalValueUSD + valueUSD;
        totalFeesUSD = totalFeesUSD + feesUSD;
        return {
          valueUSD: String(valueUSD),
          value: composition.volume,
          token: mapTokenFragment(composition.token),
        };
      },
    );

    return {
      id,

      date: String(date),
      numberOfDeposits: Number(numberOfDeposits),
      numberOfTransfers: Number(numberOfTransfers),
      numberOfWithdraws: Number(numberOfWithdraws),
      volumeUSD: String(totalValueUSD),
      feesUSD: String(totalFeesUSD),
    };
  }
}
