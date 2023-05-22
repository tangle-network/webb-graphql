import { Module } from '@nestjs/common';
import { BridgeService } from './bridge.service';
import { BridgeResolver } from './bridge.resolver';

@Module({
  providers: [BridgeService, BridgeResolver]
})
export class BridgeModule {}
