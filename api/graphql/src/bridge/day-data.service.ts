import { Injectable } from '@nestjs/common';
import { Subgraph, VAnchorService } from '../subgraph/v-anchor.service';
import { PricingService } from '../pricing/pricing.service';
import { DayData } from '../../gql/graphql';
import { NetworksService } from '../subgraph/networks.service';
import { formatUnits } from 'ethers';

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
      vAnchor: { token },
      fees,
      volume,
      depositedVolume,
      withdrawnVolume,

      numberOfWithdraws,
      numberOfTransfers,
      numberOfDeposits,
    } = vanchorDayDatas[0];

    const tokenSymbol = 'ETH';
    const decimals = token.decimals;

    const prices = await this.pricingService.getPriceUSD([tokenSymbol]);
    const tokenPrice = prices[tokenSymbol];

    const formattedFees = formatUnits(Number(fees), decimals);
    const totalFeesUSD = Number(formattedFees) * tokenPrice;

    const formattedVolume = formatUnits(Number(volume), decimals);
    const volumeUSD = Number(formattedVolume) * tokenPrice;

    const formattedDepositedVolume = formatUnits(
      Number(depositedVolume),
      decimals,
    );
    const depositedVolumeUSD = Number(formattedDepositedVolume) * tokenPrice;

    const formattedWithdrawnVolume = formatUnits(
      Number(withdrawnVolume),
      decimals,
    );
    const withdrawnVolumeUSD = Number(formattedWithdrawnVolume) * tokenPrice;
    return {
      id,
      depositedVolumeUSD: String(depositedVolumeUSD),
      withdrawVolumeUSD: String(withdrawnVolumeUSD),

      date: String(date),
      numberOfDeposits: Number(numberOfDeposits),
      numberOfTransfers: Number(numberOfTransfers),
      numberOfWithdraws: Number(numberOfWithdraws),
      volumeUSD: String(volumeUSD),
      feesUSD: String(totalFeesUSD),
    };
  }
}
