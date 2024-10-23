import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestPossibleDate } from './entities/guest_possible-date.entity';
import { GuestPossibleDateController } from './guest_possible-date.controller';
import { GuestPossibleDateService } from './guest_possible-date.service';

@Module({
  imports: [TypeOrmModule.forFeature([GuestPossibleDate])],
  controllers: [GuestPossibleDateController],
  providers: [GuestPossibleDateService],
})
export class GuestPossibleDateModule { }
