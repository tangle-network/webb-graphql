import { Test, TestingModule } from '@nestjs/testing';
import { VAnchorService } from './v-anchor.service';

describe('VAnchorService', () => {
  let service: VAnchorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VAnchorService],
    }).compile();

    service = module.get<VAnchorService>(VAnchorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
