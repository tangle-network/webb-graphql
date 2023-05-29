import { Test, TestingModule } from '@nestjs/testing';
import { DepositResolver } from './deposit.resolver';

describe('DepositResolver', () => {
  let resolver: DepositResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepositResolver],
    }).compile();

    resolver = module.get<DepositResolver>(DepositResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
