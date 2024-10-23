import { Test, TestingModule } from '@nestjs/testing';
import { PossibleDateService } from './possible-date.service';

describe('PossibleDateService', () => {
  let service: PossibleDateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PossibleDateService],
    }).compile();

    service = module.get<PossibleDateService>(PossibleDateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
