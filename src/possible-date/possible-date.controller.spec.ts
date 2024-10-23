import { Test, TestingModule } from '@nestjs/testing';
import { PossibleDateController } from './possible-date.controller';
import { PossibleDateService } from './possible-date.service';

describe('PossibleDateController', () => {
  let controller: PossibleDateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PossibleDateController],
      providers: [PossibleDateService],
    }).compile();

    controller = module.get<PossibleDateController>(PossibleDateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
