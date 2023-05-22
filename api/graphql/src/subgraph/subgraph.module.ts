import { Module } from '@nestjs/common';
import {VAnchorService} from "./v-anchor.service";

@Module({
  providers: [VAnchorService],
  exports:[VAnchorService]
})
export class SubgraphModule {}
