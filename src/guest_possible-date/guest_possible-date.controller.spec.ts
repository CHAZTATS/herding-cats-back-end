import { Test, TestingModule } from '@nestjs/testing';
import { GuestPossibleDateController } from './guest_possible-date.controller';
import { GuestPossibleDateService } from './guest_possible-date.service';

describe('GuestPossibleDateController', () => {
  let controller: GuestPossibleDateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuestPossibleDateController],
      providers: [GuestPossibleDateService],
    }).compile();

    controller = module.get<GuestPossibleDateController>(GuestPossibleDateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
