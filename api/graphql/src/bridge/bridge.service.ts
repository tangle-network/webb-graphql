import { ConsoleLogger, Injectable } from '@nestjs/common';
import {
  Bridge as BridgeRaw,
  BridgesFilterInput,
  BridgeSide,
  Composition,
} from '../../gql/graphql';
import { Subgraph, VAnchorService } from '../subgraph/v-anchor.service';
import { PricingService } from '../pricing/pricing.service';
import { VAnchorDetailsFragmentFragment } from '../generated/graphql';
import { NetworksService } from '../subgraph/networks.service';
import { formatUnits } from 'ethers';

export type BridgeSideWithoutComposition = Omit<BridgeSide, 'composition'> & {
  fungibleTokenWrapper: VAnchorDetailsFragmentFragment['token'];
  networkName: string;
};
export type Bridge = Omit<BridgeRaw, 'sides'> & {
  sides: BridgeSideWithoutComposition[];
};
@Injectable()
export class BridgeService {
  private logger = new ConsoleLogger('BridgeService');

  constructor(
    private readonly vAnchorService: VAnchorService,
    private readonly pricingService: PricingService,
    private readonly networkService: NetworksService,
  ) {}

  /**
   *
   * Query all bridges
   * Fetches all VAnchors from the SubGraphs
   * Combine the VAnchors that has the same contract address
   * Fetch prices based on composition and wither the composition is fungibleTokenWrapper or an ERC20
   * */
  async getBridges(filterInput?: BridgesFilterInput): Promise<Bridge[]> {
    const bridges: Record<string, Bridge> = {};
    let targetVAnchors: string[] = [];
    if (filterInput?.where) {
      targetVAnchors = filterInput.where;
    }
    const subgraphs =
      filterInput?.networks?.map((network) =>
        this.networkService.getSubgraphConfig(network),
      ) ?? this.networkService.subgraphs;
    // All vAnchors{
    for (const subgraph of subgraphs) {
      await this.reduceToBridge(subgraph, bridges, targetVAnchors);
    }

    return Object.values(bridges) as any;
  }

  async getBridge(bridgeId: string): Promise<Bridge> {
    const bridges = await this.getBridges({
      where: [bridgeId],
    });
    return bridges[0];
  }

  private async reduceToBridge(
    subgraph: Subgraph,
    bridges: Record<string, Bridge>,
    targetVAnchors?: string[],
  ) {
    const { vanchors } = await this.vAnchorService.fetchVAnchorsOfSubGraph(
      subgraph,
      targetVAnchors?.length > 0
        ? {
            where: {
              id_in: targetVAnchors,
            },
          }
        : undefined,
    );
    for (const vAnchor of vanchors) {
      const bridgeSide = await this.vAnchorIntoBridgeSide(
        vAnchor,
        subgraph.network,
      );
      if (bridges[bridgeSide.id]) {
        bridges[bridgeSide.id] = {
          ...bridges[bridgeSide.id],
          sides: [...bridges[bridgeSide.id].sides, bridgeSide],
          totalVolumeLockedUSD: String(
            Number(bridges[bridgeSide.id].totalVolumeLockedUSD) +
              Number(bridgeSide.totalVolumeLockedUSD),
          ),
          totalVolumeLocked: String(
            Number(bridges[bridgeSide.id].totalVolumeLocked) +
              Number(bridgeSide.totalVolumeLocked),
          ),

          totalFees: String(
            Number(bridges[bridgeSide.id].totalFees) +
              Number(bridgeSide.totalFees),
          ),

          totalFeesUSD: String(
            Number(bridges[bridgeSide.id].totalFeesUSD) +
              Number(bridgeSide.totalFeesUSD),
          ),

          averageDepositAmount: String(
            Number(bridges[bridgeSide.id].averageDepositAmount) +
              Number(bridgeSide.averageDepositAmount),
          ),

          averageDepositAmountUSD: String(
            Number(bridges[bridgeSide.id].averageDepositAmountUSD) +
              Number(bridgeSide.averageDepositAmountUSD),
          ),
        };
      } else {
        bridges[bridgeSide.id] = {
          id: bridgeSide.id,
          sides: [bridgeSide],
          totalVolumeLocked: bridgeSide.totalVolumeLocked,
          totalVolumeLockedUSD: bridgeSide.totalVolumeLockedUSD,
          averageDepositAmountUSD: bridgeSide.averageDepositAmountUSD,
          averageDepositAmount: bridgeSide.averageDepositAmount,
          totalFees: bridgeSide.totalFees,
          totalFeesUSD: bridgeSide.totalFeesUSD,
        };
      }
    }
  }

  async getCompositionsOfBridgeSide(
    bridgeSide: BridgeSideWithoutComposition,
  ): Promise<Composition[]> {
    const composition: Array<Composition> = [];

    const token = bridgeSide.fungibleTokenWrapper;
    const decimals = token.decimals;
    const symbol = token.baseTokenSymbol;
    const price = await this.pricingService.getPriceUSD([symbol]);
    const pricePerUnit = price[symbol];
    for (const compositionEntry of token.composition) {
      const formattedValue = formatUnits(compositionEntry.volume, decimals);
      const valueUSD = pricePerUnit * Number(formattedValue);

      const entry: Composition = {
        valueUSD: String(valueUSD),
        value: formattedValue,
        token: {
          id: compositionEntry.token.id,
          symbol: compositionEntry.token.symbol,
          name: compositionEntry.token.name,
          decimals: compositionEntry.token.decimals,
          address: compositionEntry.token.address,
          isFungibleTokenWrapper: compositionEntry.token.isFungibleTokenWrapper,
        },
      };
      if (compositionEntry.isNative) {
        // query native balance
        const balanceFormatted = await this.networkService.getNativeBalance(
          bridgeSide.networkName,
          String(token.id),
        );
        const valueUSD = pricePerUnit * Number(balanceFormatted);
        entry.valueUSD = String(valueUSD);
        entry.value = balanceFormatted;
      }

      composition.push(entry);
    }
    return composition;
  }

  private async vAnchorIntoBridgeSide(
    vAnchor: VAnchorDetailsFragmentFragment,
    networkName: string,
  ): Promise<BridgeSideWithoutComposition> {
    const {
      id,
      contractAddress,
      chainId,
      typedChainId,
      token,
      valueLocked,

      minDepositAmount,

      numberOfWithdraws,
      numberOfDeposits,
      totalFees,
      maxDepositAmount,
    } = vAnchor;
    const decimals = token.decimals;
    const symbol = token.baseTokenSymbol;
    // const symbol = token.baseTokenSymbol
    const formattedValue = formatUnits(valueLocked, decimals);
    const formattedTotalFees = formatUnits(totalFees, decimals);
    const formattedAverageDepositAmount = formatUnits(totalFees, decimals);

    const price = await this.pricingService.getPriceUSD([symbol]);
    const pricePerUnit = price[symbol];
    const totalLockedVolumeUSD = pricePerUnit * Number(formattedValue);

    const totalFeesUSD = pricePerUnit * Number(formattedTotalFees);

    const averageDepositAmountUSD =
      price[symbol] * Number(formattedAverageDepositAmount);
    return {
      id,
      chainId: Number(chainId),
      fungibleTokenWrapper: token,
      averageDepositAmount: formattedAverageDepositAmount,
      averageDepositAmountUSD: String(averageDepositAmountUSD),
      networkName,
      contractAddress: contractAddress,
      maxDepositAmount: String(maxDepositAmount),
      minDepositAmount: String(minDepositAmount),

      numberOfDeposits: Number(numberOfWithdraws),
      numberOfWithdraws: Number(numberOfDeposits),
      token: String(token.symbol),
      typedChainId: String(typedChainId),

      totalFees: formattedTotalFees,
      totalFeesUSD: String(totalFeesUSD),

      totalVolumeLocked: formattedValue,
      totalVolumeLockedUSD: String(totalLockedVolumeUSD),
    };
  }

  public async fetchBridgeSide(
    subgraph: Subgraph,
    vAnchorAddress: string,
  ): Promise<BridgeSideWithoutComposition> {
    const { vanchor } = await this.vAnchorService.fetchVAnchorDetails(
      subgraph,
      {
        id: vAnchorAddress,
      },
    );
    return this.vAnchorIntoBridgeSide(vanchor, subgraph.network);
  }

  public async getBridgeSide(networkName: string, contractAddress: string) {
    const subgraph = this.networkService.getSubgraphConfig(networkName);
    return this.fetchBridgeSide(subgraph, contractAddress);
  }
}
