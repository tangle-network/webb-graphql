import { ConsoleLogger, Injectable } from '@nestjs/common';
import { Bridge, BridgeSide, Composition } from '../../gql/graphql';
import { Subgraph, VAnchorService } from '../subgraph/v-anchor.service';
import { PricingService } from '../pricing/pricing.service';
import { mapTokenFragment } from '../helpers';
import { VAnchorDetailsFragmentFragment } from '../generated/graphql';
import { NetworksService } from '../subgraph/networks.service';

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
  async getBridges(): Promise<Bridge[]> {
    const bridges: Record<string, Bridge> = {};
    // All vAnchors{
    for (const subgraph of this.networkService.subgraphs) {
      await this.reduceToBridge(subgraph, bridges);
    }

    return Object.values(bridges) as any;
  }

  private async reduceToBridge(
    subgraph: Subgraph,
    bridges: Record<string, Bridge>,
  ) {
    const { vanchors } = await this.vAnchorService.fetchVAnchorsOfSubGraph(
      subgraph,
    );
    for (const vAnchor of vanchors) {
      const bridgeSide = await this.vAnchorIntoBridgeSide(vAnchor);
      if (bridges[bridgeSide.id]) {
        bridges[bridgeSide.id] = {
          ...bridges[bridgeSide.id],
          sides: [...bridges[bridgeSide.id].sides, bridgeSide],
          volumeUSD: String(
            Number(bridges[bridgeSide.id].volumeUSD) +
              Number(bridgeSide.volumeUSD),
          ),
        };
      } else {
        bridges[bridgeSide.id] = {
          id: bridgeSide.id,
          sides: [bridgeSide],
          volumeUSD: bridgeSide.volumeUSD,
        };
      }
    }
  }

  private async vAnchorIntoBridgeSide(
    vAnchor: VAnchorDetailsFragmentFragment,
  ): Promise<BridgeSide> {
    const {
      id,
      contractAddress,
      chainId,
      typedChainId,
      token,

      averageDepositAmount,

      minDepositAmount,

      numberOfWithdraws,
      numberOfDeposits,

      maxDepositAmount,
    } = vAnchor;
    const compositionWithSymbol = vAnchor.volumeComposition.map((c) => {
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

    const composition = compositionWithSymbol.map(
      (composition): Composition => {
        const decimals = composition.token.decimals;
        const amount = Number(composition.valueLocked);
        const amountFormatted = amount * Math.pow(10, -decimals);
        const price = prices[composition.symbol];
        const valueUSD = price * amountFormatted;

        totalValueUSD = totalValueUSD + valueUSD;
        return {
          valueUSD: String(valueUSD),
          value: composition.valueLocked,
          token: mapTokenFragment(composition.token),
        };
      },
    );

    return {
      id,
      chainId: Number(chainId),

      averageDepositAmount: String(averageDepositAmount),
      averageWithdrawAmount: '',
      composition,

      contractAddress: contractAddress,
      maxDepositAmount: String(maxDepositAmount),
      minDepositAmount: String(minDepositAmount),

      numberOfDeposits: Number(numberOfWithdraws),
      numberOfWithdraws: Number(numberOfDeposits),
      token: String(token),
      typedChainId: String(typedChainId),
      volumeUSD: String(totalValueUSD),
    };
  }

  public async fetchBridgeSide(
    subgraph: Subgraph,
    vAnchorAddress: string,
  ): Promise<BridgeSide> {
    const { vanchor } = await this.vAnchorService.fetchVAnchorDetails(
      subgraph,
      {
        id: vAnchorAddress,
      },
    );
    return this.vAnchorIntoBridgeSide(vanchor);
  }
  public async getBridgeSide(networkName: string, contractAddress: string) {
    const subgraph = this.networkService.getSubgraphConfig(networkName);
    return this.fetchBridgeSide(subgraph, contractAddress);
  }
}
