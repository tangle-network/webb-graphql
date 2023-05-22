import { Module } from '@nestjs/common';
import { BridgeService } from './bridge.service';
import { BridgeResolver } from './bridge.resolver';
import {SubgraphModule} from "../subgraph/subgraph.module";

@Module({
  imports:[SubgraphModule],
  providers: [BridgeService, BridgeResolver]
})
export class BridgeModule {}
