import { Module } from '@nestjs/common';
import { BridgeService } from './bridge.service';
import { BridgeResolver } from './bridge.resolver';
import { SubgraphModule } from '../subgraph/subgraph.module';
import { PricingModule } from '../pricing/pricing.module';
import { DayDataResolve } from './day-data.resolver';
import { DayDataService } from './day-data.service';
import { BridgeSideResolver } from './bridge-side.resolver';

@Module({
  imports: [SubgraphModule, PricingModule],
  providers: [
    BridgeService,
    BridgeResolver,
    DayDataResolve,
    DayDataService,
    BridgeSideResolver,
  ],
  exports: [BridgeService],
})
export class BridgeModule {}
