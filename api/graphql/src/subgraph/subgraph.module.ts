import { Module } from '@nestjs/common';
import { VAnchorService } from './v-anchor.service';
import { GqlClientService } from './gql-client.service';
import { NetworksService } from './networks.service';

@Module({
  providers: [VAnchorService, GqlClientService, NetworksService],
  exports: [VAnchorService, NetworksService],
})
export class SubgraphModule {}
