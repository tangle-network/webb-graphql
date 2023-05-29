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
    return this.bridgeService.getBridges();

  }
}
