import { Query, Resolver } from '@nestjs/graphql';
import { Bridge } from '../../gql/graphql';

@Resolver('Bridge')
export class BridgeResolver {
  @Query()
  public async bridges(): Promise<Bridge[]> {
    return [
      {
        id: '1',
      },
    ];
  }
}
