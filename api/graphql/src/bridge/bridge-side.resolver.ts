import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { BridgeSide } from '../../gql/graphql';
import { BridgeService, BridgeSideWithoutComposition } from './bridge.service';

@Resolver('BridgeSide')
export class BridgeSideResolver {
  constructor(private bridgeService: BridgeService) {}

  @ResolveField('composition')
  async fetchCompositionOfBridgeSide(
    @Parent() side: BridgeSideWithoutComposition,
  ) {
    return this.bridgeService.getCompositionsOfBridgeSide(side);
  }
}
