import { Args, Query, Resolver } from '@nestjs/graphql';
import { BridgesFilterInput } from '../../gql/graphql';
import { Bridge, BridgeService } from './bridge.service';
import { ConsoleLogger } from '@nestjs/common';

@Resolver('Bridge')
export class BridgeResolver {
  constructor(private readonly bridgeService: BridgeService) {}

  @Query()
  /**(
   * TVL for a set of bridges collectively
   * */
  public async bridges(
    @Args('filter') filterInput?: BridgesFilterInput,
  ): Promise<Bridge[]> {
    return this.bridgeService.getBridges(filterInput);
  }

  @Query()
  /**
   * TVL for any given bridge (e.g. all sides of particular bridge
   * */
  public async bridge(@Args('id') bridgeId: string): Promise<Bridge> {
    return this.bridgeService.getBridge(bridgeId);
  }

  @Query()
  /**
   * TVL for any given side of a set of bridges
   * */
  async bridgeSide(
    @Args('network') network: string,
    @Args('contractAddress') contractAddress: string,
  ) {
    const side = await this.bridgeService.getBridgeSide(
      network,
      contractAddress,
    );

    return side;
  }
}
