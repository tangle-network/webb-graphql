import { Module } from '@nestjs/common';
import { VAnchorService } from './v-anchor.service';
import { GqlClientService } from './gql-client.service';
import { NetworksService } from './networks.service';
import { SubgraphResolver } from './subgraph.resolver';

@Module({
  providers: [
    VAnchorService,
    GqlClientService,
    NetworksService,
    SubgraphResolver,
  ],
  exports: [VAnchorService, NetworksService],
})
export class SubgraphModule {}
