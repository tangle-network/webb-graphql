import {Query, Resolver} from '@nestjs/graphql';
import {Bridge} from '../../gql/graphql';
import {BridgeService} from "./bridge.service";

@Resolver('Bridge')
export class BridgeResolver {
  constructor(
    private readonly bridgeService:BridgeService,
  ) {
  }
  @Query()
  public async bridges(): Promise<Bridge[]> {
    const bridges  = await this.bridgeService.getBridges();
    return bridges.map(bridge => ({
      id:bridge.id,
      sides:bridge.sides
    }))
  }
}
