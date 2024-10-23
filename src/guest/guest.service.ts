import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { Guest } from './entities/guest.entity';

@Injectable()
export class GuestService {

  constructor(
    @InjectRepository(Guest) private guestRepository: Repository<Guest>
  ) { }

  async create(createGuestDto: CreateGuestDto) {
    const newGuest = await this.guestRepository.create(createGuestDto);

    console.log(newGuest);

    await this.guestRepository.save(newGuest);

    return newGuest;
  }

  findAll() {
    return `This action returns all guest`;
  }

  findOne(id: string) {
    return `This action returns a #${id} guest`;
  }

  update(id: string, updateGuestDto: UpdateGuestDto) {
    return `This action updates a #${id} guest`;
  }

  remove(id: string) {
    return `This action removes a #${id} guest`;
  }
}
