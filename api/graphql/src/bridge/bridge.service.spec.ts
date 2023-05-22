import { Test, TestingModule } from '@nestjs/testing';
import { BridgeService } from './bridge.service';

describe('BridgeService', () => {
  let service: BridgeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BridgeService],
    }).compile();

    service = module.get<BridgeService>(BridgeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
