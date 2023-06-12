import { ConsoleLogger, Injectable } from '@nestjs/common';
import { Subgraph, VAnchorService } from '../subgraph/v-anchor.service';
import { PricingService } from '../pricing/pricing.service';
import { BridgesDayDataInput, DayData } from '../../gql/graphql';
import { NetworksService } from '../subgraph/networks.service';
import { formatUnits } from 'ethers';
import { DiscoverVAnchorsQueryVariables } from '../generated/graphql';

@Injectable()
export class DayDataService {
  constructor(
    private readonly vAnchorService: VAnchorService,
    private readonly pricingService: PricingService,
    private readonly networkService: NetworksService,
  ) {}

  private async allSubgraphVAnchors(filter?: BridgesDayDataInput) {
    const graphs = this.filterInputIntoSubgraph(filter);
    const targetBridges = filter?.where ?? [];
    const queryVariables: DiscoverVAnchorsQueryVariables | undefined =
      targetBridges.length > 0
        ? {
            where: {
              id_in: targetBridges,
            },
          }
        : undefined;
    const vanchors = await Promise.all(
      graphs.map((subraph) => {
        return this.vAnchorService.discoverVAnchorsOfSubgraph(
          subraph,
          queryVariables,
        );
      }),
    );

    return graphs.map((subgraph, index) => {
      return {
        subgraph,
        vanchors: vanchors[index].vanchors,
      };
    });
  }

  private filterInputIntoSubgraph(
    filterInput?: BridgesDayDataInput,
  ): Subgraph[] {
    const networks = filterInput?.networks ?? [];
    return networks.length === 0
      ? this.networkService.subgraphs
      : networks.map((network) =>
          this.networkService.getSubgraphConfig(network),
        );
  }

  public async bridgesDayData(
    filter?: BridgesDayDataInput,
  ): Promise<DayData[]> {
    const dayDataMap: Record<string, DayData> = {};

    const allSubgraphsVAnchors = await this.allSubgraphVAnchors(filter);

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

  public async bridgeDayData(bridgeId: string): Promise<DayData> {
    const dayDataList = await this.bridgesDayData({
      where: [bridgeId],
    });
    return dayDataList[0];
  }
  public async bridgeSideDayDataByNetworkName(
    vAnchorId: string,
    networkName: string,
  ) {
    const c = new ConsoleLogger();

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

    const tokenSymbol = token.baseTokenSymbol;
    const decimals = token.decimals;
    const prices = await this.pricingService.getPriceUSD([tokenSymbol]);
    const tokenPrice = prices[tokenSymbol];

    const formattedFees = formatUnits(fees, decimals);
    const totalFeesUSD = Number(formattedFees) * tokenPrice;

    const formattedVolume = formatUnits(volume, decimals);

    const volumeUSD = Number(formattedVolume) * tokenPrice;

    const formattedDepositedVolume = formatUnits(depositedVolume, decimals);
    const depositedVolumeUSD = Number(formattedDepositedVolume) * tokenPrice;

    const formattedWithdrawnVolume = formatUnits(withdrawnVolume, decimals);
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
