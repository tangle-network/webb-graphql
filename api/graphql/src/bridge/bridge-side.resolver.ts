import { Query, Resolver } from '@nestjs/graphql';
import { BridgeSide } from '../../gql/graphql';

@Resolver('BridgeSide')
export class BridgeSideResolver {
  @Query()
  public async bridges(): Promise<BridgeSide[]> {
    return [

    ];
  }
}
