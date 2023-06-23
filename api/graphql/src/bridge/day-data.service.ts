import { ConsoleLogger, Injectable } from '@nestjs/common';
import { Subgraph, VAnchorService } from '../subgraph/v-anchor.service';
import { PricingService } from '../pricing/pricing.service';
import { BridgesDayDataInput, DayData as DayDataRaw } from '../../gql/graphql';
import { NetworksService } from '../subgraph/networks.service';
import { formatUnits } from 'ethers';
import { DiscoverVAnchorsQueryVariables } from '../generated/graphql';

export type DayData = DayDataRaw;

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
        const dayData = await this.bridgeSideDayData(
          vanchor.id,
          subgraph,
          filter?.tokens ?? [],
        );

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
            depositedVolumeUSD: String(
              Number(dayDataMap[vanchor.id].depositedVolumeUSD) +
                Number(dayData.depositedVolumeUSD),
            ),
            withdrawVolumeUSD: String(
              Number(dayDataMap[vanchor.id].withdrawVolumeUSD) +
                Number(dayData.withdrawVolumeUSD),
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
    tokens: string[],
  ) {
    const subgraph = this.networkService.getSubgraphConfig(networkName);
    return this.bridgeSideDayData(vAnchorId, subgraph, tokens);
  }

  private async bridgeSideDayData(
    vAnchorId: string,
    subgraph: Subgraph,
    tokens: string[] = [],
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

      numberOfWithdraws,
      numberOfTransfers,
      numberOfDeposits,
    } = vanchorDayDatas[0];

    let fees = 0;
    let volume = 0;
    let depositedVolume = 0;
    let withdrawnVolume = 0;

    if (tokens.length > 0) {
      const compositionFiltered = composition.filter((c) =>
        tokens.includes(c.token.symbol),
      );
      compositionFiltered.forEach((entry) => {
        fees = fees + Number(entry.fees);
        volume = volume + Number(entry.volume);
        depositedVolume = depositedVolume + Number(entry.depositedVolume);
        withdrawnVolume = withdrawnVolume + Number(entry.withdrawnVolume);
      });
    } else {
      fees = Number(vanchorDayDatas[0].fees);
      volume = Number(vanchorDayDatas[0].volume);
      depositedVolume = Number(vanchorDayDatas[0].depositedVolume);
      withdrawnVolume = Number(vanchorDayDatas[0].withdrawnVolume);
    }

    const tokenSymbol = token.baseTokenSymbol;
    const decimals = token.decimals;
    const prices = await this.pricingService.getPriceUSD([tokenSymbol]);
    const tokenPrice = prices[tokenSymbol];

    const formattedFees = formatUnits(String(fees), decimals);
    const totalFeesUSD = Number(formattedFees) * tokenPrice;

    const formattedVolume = formatUnits(String(volume), decimals);
    const volumeUSD = Number(formattedVolume) * tokenPrice;

    const formattedDepositedVolume = formatUnits(
      String(depositedVolume),
      decimals,
    );
    const depositedVolumeUSD = Number(formattedDepositedVolume) * tokenPrice;

    const formattedWithdrawnVolume = formatUnits(
      String(withdrawnVolume),
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
