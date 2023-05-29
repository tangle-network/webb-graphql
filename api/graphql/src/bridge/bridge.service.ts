import {ConsoleLogger, Injectable} from '@nestjs/common';
import {Bridge, BridgeSide, Composition} from '../../gql/graphql';
import {Subgraph, VAnchorService} from "../subgraph/v-anchor.service";
import {PricingService} from "../pricing/pricing.service";
import {mapTokenFragment} from "../helpers";


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
          token: mapTokenFragment(composition.token),

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
    const compositionWithSymbol = vanchor.volumeComposition.map(c =>{

      if(c.token.isFungibleTokenWrapper){
        return  {
          ...c,
          symbol:'WETH'
        }

      }
      return {
        ...c,
        symbol:c.token.symbol
      }
    });

    const tokens = compositionWithSymbol.map(c => c.symbol);
    const prices = await this.pricingService.getPriceUSD(tokens);
    let totalValueUSD = 0;

    const composition = compositionWithSymbol.map((composition):Composition =>{
      const decimals = composition.token.decimals;
      const amount = Number(composition.valueLocked);
      const amountFormatted = amount * Math.pow(10, -decimals);
      const price = prices[composition.symbol];
      const valueUSD =  price * amountFormatted

      totalValueUSD = totalValueUSD + valueUSD
      return {

        valueUSD:String(valueUSD),
        value: composition.valueLocked,
        token: mapTokenFragment(composition.token)
      }});
    this.logger.log('Rerun')

    return {
      id,
      chainId: Number(chainId),

      averageDepositAmount: String(averageDepositAmount),
      averageWithdrawAmount: "",
      composition,

      contractAddress: contractAddress,
      maxDepositAmount: String(maxDepositAmount),
      minDepositAmount: String(minDepositAmount),

      numberOfDeposits: Number(numberOfWithdraws),
      numberOfWithdraws: Number(numberOfDeposits),
      token: String(token),
      typedChainId: String(typedChainId),
      volumeUSD: String(totalValueUSD)

    }

  }
}
