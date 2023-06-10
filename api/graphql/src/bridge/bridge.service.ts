import { ConsoleLogger, Injectable } from "@nestjs/common";
import { Bridge, BridgeSide } from "../../gql/graphql";
import { Subgraph, VAnchorService } from "../subgraph/v-anchor.service";
import { PricingService } from "../pricing/pricing.service";
import { VAnchorDetailsFragmentFragment } from "../generated/graphql";
import { NetworksService } from "../subgraph/networks.service";
import { formatUnits } from "ethers";

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
          totalVolumeLockedUSD: String(
            Number(bridges[bridgeSide.id].totalVolumeLockedUSD) +
              Number(bridgeSide.totalLockedVolumeUSD),
          ),
          totalVolumeLocked: String(
            Number(bridges[bridgeSide.id].totalVolumeLocked) +
              Number(bridgeSide.totalLockedVolume),
          ),
        };
      } else {
        bridges[bridgeSide.id] = {
          id: bridgeSide.id,
          sides: [bridgeSide],
          totalVolumeLocked: bridgeSide.totalLockedVolume,
          totalVolumeLockedUSD: bridgeSide.totalLockedVolumeUSD,
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
      valueLocked,
      averageDepositAmount,

      minDepositAmount,

      numberOfWithdraws,
      numberOfDeposits,

      maxDepositAmount,
    } = vAnchor;
    const decimals = token.decimals;
    const formatedValue = formatUnits(Number(valueLocked), decimals);
    return {
      id,
      chainId: Number(chainId),

      averageDepositAmount: String(averageDepositAmount),
      averageWithdrawAmount: '',
      contractAddress: contractAddress,
      maxDepositAmount: String(maxDepositAmount),
      minDepositAmount: String(minDepositAmount),

      numberOfDeposits: Number(numberOfWithdraws),
      numberOfWithdraws: Number(numberOfDeposits),
      token: String(token.symbol),
      typedChainId: String(typedChainId),
      totalLockedVolume: String(formatedValue),
      totalLockedVolumeUSD: String(0),
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
