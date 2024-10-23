import { Test, TestingModule } from '@nestjs/testing';
import { GuestPossibleDateService } from './guest_possible-date.service';

describe('GuestPossibleDateService', () => {
  let service: GuestPossibleDateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuestPossibleDateService],
    }).compile();

    service = module.get<GuestPossibleDateService>(GuestPossibleDateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
