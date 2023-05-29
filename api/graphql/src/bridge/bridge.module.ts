import { Module } from '@nestjs/common';
import { BridgeService } from './bridge.service';
import { BridgeResolver } from './bridge.resolver';
import {SubgraphModule} from "../subgraph/subgraph.module";
import {PricingModule} from "../pricing/pricing.module";

@Module({
  imports:[SubgraphModule ,  PricingModule],
  providers: [BridgeService, BridgeResolver],
  exports:[BridgeService]
})
export class BridgeModule {}
