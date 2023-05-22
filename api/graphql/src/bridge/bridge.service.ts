import {ConsoleLogger, Injectable} from '@nestjs/common';
import {Bridge, BridgeSide, Composition} from '../../gql/graphql';
import {VAnchorService} from "../subgraph/v-anchor.service";

@Injectable()
export class BridgeService {
  private logger = new ConsoleLogger('BridgeService')

  constructor(private readonly vAnchorService: VAnchorService) {
  }

  async getBridges(): Promise<Bridge[]> {

    const bridges: Record<string, Bridge> = {};
    // All vAnchors
    const {vanchors} = await this.vAnchorService.fetchAnchors();
    for (const vanchor of vanchors) {
      const bridgeSide: BridgeSide = {
        averageDepositAmount: Number(vanchor.averageDepositAmount),
        chainId: Number(vanchor.chainId),
        composition: vanchor.volumeComposition.map((composition):Composition =>({
          token:composition.token.id,
          value:Number(composition.finalValueLocked)
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
        volumeUSD: 0

      }

      if (bridges[vanchor.contractAddress]) {

        bridges[vanchor.contractAddress].sides.push(bridgeSide)
      }else {
        bridges[vanchor.contractAddress] = {
          sides:[bridgeSide],
          id:vanchor.id,

        }
      }
    }
    return Object.values(bridges) as any;
  }
}
