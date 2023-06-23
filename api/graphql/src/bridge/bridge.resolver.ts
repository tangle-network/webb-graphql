import { Args, Query, Resolver } from '@nestjs/graphql';
import { Bridge, BridgesFilterInput } from '../../gql/graphql';
import { BridgeService } from './bridge.service';

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
  bridgeSide(
    @Args('network') network: string,
    @Args('contractAddress') contractAddress: string,
  ) {
    return this.bridgeService.getBridgeSide(network, contractAddress);
  }
}
