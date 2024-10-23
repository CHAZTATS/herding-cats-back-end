import { Injectable } from '@nestjs/common';
import { CreateGuestPossibleDateDto } from './dto/create-guest_possible-date.dto';
import { UpdateGuestPossibleDateDto } from './dto/update-guest_possible-date.dto';

@Injectable()
export class GuestPossibleDateService {
  create(createGuestPossibleDateDto: CreateGuestPossibleDateDto) {
    return 'This action adds a new guestPossibleDate';
  }

  findAll() {
    return `This action returns all guestPossibleDate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} guestPossibleDate`;
  }

  update(id: number, updateGuestPossibleDateDto: UpdateGuestPossibleDateDto) {
    return `This action updates a #${id} guestPossibleDate`;
  }

  remove(id: number) {
    return `This action removes a #${id} guestPossibleDate`;
  }
}
