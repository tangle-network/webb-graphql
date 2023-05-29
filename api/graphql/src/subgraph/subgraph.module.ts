import { Module } from '@nestjs/common';
import { VAnchorService } from './v-anchor.service';
import { GqlClientService } from './gql-client.service';

@Module({
  providers: [VAnchorService, GqlClientService],
  exports: [VAnchorService],
})
export class SubgraphModule {}
