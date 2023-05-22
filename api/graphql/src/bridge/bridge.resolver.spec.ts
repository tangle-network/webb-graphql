import { Test, TestingModule } from '@nestjs/testing';
import { BridgeResolver } from './bridge.resolver';

describe('BridgeResolver', () => {
  let resolver: BridgeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BridgeResolver],
    }).compile();

    resolver = module.get<BridgeResolver>(BridgeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
