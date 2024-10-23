import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PossibleDate } from './entities/possible-date.entity';
import { PossibleDateController } from './possible-date.controller';
import { PossibleDateService } from './possible-date.service';

@Module({
  imports: [TypeOrmModule.forFeature([PossibleDate])],
  controllers: [PossibleDateController],
  providers: [PossibleDateService],
})
export class PossibleDateModule { }
