import {ConsoleLogger, Injectable} from '@nestjs/common';
import {Bridge, BridgeSide, Composition} from '../../gql/graphql';
import {Subgraph, VAnchorService} from "../subgraph/v-anchor.service";
import {PricingService} from "../pricing/pricing.service";


@Injectable()
export class BridgeService {
  private logger = new ConsoleLogger('BridgeService')

  constructor(private readonly vAnchorService: VAnchorService,
              private readonly pricingService: PricingService
  ) {
  }

  /**
   *
   * Query all bridges
   * Fetches all VAnchors from the SubGraphs
   * Combine the VAnchors that has the same contract address
   * Fetch prices based on composition and wither the composition is fungibleTokenWrapper or an ERC20
   * */
  async getBridges(): Promise<Bridge[]> {

    const bridges: Record<string, Bridge> = {};
    // All vAnchors
    const {vanchors} = await this.vAnchorService.fetchAnchorOfSubGraph({
      uri: "http://localhost:8000/subgraphs/name/VAnchor"
    });
    for (const vanchor of vanchors) {

      const tokens = vanchor.volumeComposition.map(c => ({
        chainId: Number(vanchor.chainId),
        contractAddress: c.token.address,
        value: Number(c.valueLocked) * Math.pow(10, -18)
      }));
      const tokensPrice = await Promise.all(tokens.map(token => this.pricingService.getTokenPriceWithChainAndContract(token.chainId, token.contractAddress)))
      let volumeUSD = 0;
      tokens.forEach((token, index) => {
          const price = tokensPrice[index];
          volumeUSD = volumeUSD + price * token.value
        }
      )

      const bridgeSide: BridgeSide = {
        averageDepositAmount: vanchor.averageDepositAmount,
        chainId: Number(vanchor.chainId),
        composition: vanchor.volumeComposition.map((composition): Composition => ({
          token: {
            id: composition.token.id,
            name: composition.token.name,
            decimals: composition.token.decimals,
            address: composition.token.address,
            isFungibleTokenWrapper: composition.token.isFungibleTokenWrapper,
            symbol: composition.token.symbol
          },
          value: String(composition.finalValueLocked),
          valueUSD: '0'
        })),
        contractAddress: vanchor.contractAddress,
        id: vanchor.id,
        maxDepositAmount: String(vanchor.maxDepositAmount),
        averageWithdrawAmount: String(0),
        minDepositAmount: String(vanchor.minDepositAmount),
        numberOfDeposits: Number(vanchor.numberOfDeposits),
        numberOfWithdraws: Number(vanchor.numberOfWithdraws),
        token: vanchor.token,
        typedChainId: vanchor.typedChainId,
        volumeUSD: String(volumeUSD)

      }

      if (bridges[vanchor.contractAddress]) {

        bridges[vanchor.contractAddress].sides.push(bridgeSide)
      } else {
        bridges[vanchor.contractAddress] = {
          sides: [bridgeSide],
          id: vanchor.id,

        }
      }
    }
    return Object.values(bridges) as any;
  }

  public async fetchBridgeSide(
    subgraph: Subgraph,
    vAnchorAddress: string,
  ): Promise<BridgeSide> {

    const {vanchor} = await this.vAnchorService.fetchVAnchorDetails(subgraph, {
      id: vAnchorAddress
    });

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

    } = vanchor;
    return {
      id,
      chainId: Number(chainId),

      averageDepositAmount: String(averageDepositAmount),
      averageWithdrawAmount: "",
      composition: vanchor.volumeComposition.map((composition): Composition => ({
        valueUSD: "0",
        value: composition.finalValueLocked,
        token: {
          id: composition.token.id,
          name: composition.token.name,
          decimals: composition.token.decimals,
          address: composition.token.address,
          isFungibleTokenWrapper: composition.token.isFungibleTokenWrapper,
          symbol: composition.token.symbol
        }
      })),

      contractAddress: contractAddress,
      maxDepositAmount: String(maxDepositAmount),
      minDepositAmount: String(minDepositAmount),

      numberOfDeposits: Number(numberOfWithdraws),
      numberOfWithdraws: Number(numberOfDeposits),
      token: String(token),
      typedChainId: String(typedChainId),
      volumeUSD: "0"

    }

  }
}
