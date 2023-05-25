import {ConsoleLogger, Injectable} from '@nestjs/common';
import {Bridge, BridgeSide, Composition} from '../../gql/graphql';
import {VAnchorService} from "../subgraph/v-anchor.service";
import {PricingService} from "../pricing/pricing.service";

@Injectable()
export class BridgeService {
  private logger = new ConsoleLogger('BridgeService')

  constructor(private readonly vAnchorService: VAnchorService,
              private readonly pricingService: PricingService
  ) {
  }

  async getBridges(): Promise<Bridge[]> {

    const bridges: Record<string, Bridge> = {};
    // All vAnchors
    const {vanchors} = await this.vAnchorService.fetchAnchorOfSubGraph({
      uri:"http://localhost:8000/subgraphs/name/VAnchor"
    });
    for (const vanchor of vanchors) {

      const tokens = vanchor.volumeComposition.map(c => ({
        chainId: Number(vanchor.chainId),
        contractAddress: c.token.address,
        value: Number(c.valueLocked) * Math.pow(10 , -18)
      }));
      const tokensPrice =await Promise.all(tokens.map(token => this.pricingService.getTokenPriceWithChainAndContract(token.chainId, token.contractAddress)))
      let volumeUSD = 0;
      tokens.forEach((token, index) => {
          const price = tokensPrice[index];
          volumeUSD = volumeUSD + price * token.value
        }
      )

      const bridgeSide: BridgeSide = {
        averageDepositAmount: Number(vanchor.averageDepositAmount),
        chainId: Number(vanchor.chainId),
        composition: vanchor.volumeComposition.map((composition): Composition => ({
          token: composition.token.id,
          value: Number(composition.finalValueLocked)
        })),
        contractAddress: vanchor.contractAddress,
        id: vanchor.id,
        maxDepositAmount: Number(vanchor.maxDepositAmount),
        averageWithdrawAmount: Number(0),
        minDepositAmount: Number(vanchor.minDepositAmount),
        numberOfDeposits: Number(vanchor.numberOfDeposits),
        numberOfWithdraws: Number(vanchor.numberOfWithdraws),
        token: vanchor.token,
        typedChainId: vanchor.typedChainId,
        volumeUSD

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
}
