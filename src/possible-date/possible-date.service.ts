import { Injectable } from '@nestjs/common';
import { CreatePossibleDateDto } from './dto/create-possible-date.dto';
import { UpdatePossibleDateDto } from './dto/update-possible-date.dto';

@Injectable()
export class PossibleDateService {
  create(createPossibleDateDto: CreatePossibleDateDto) {
    return 'This action adds a new possibleDate';
  }

  findAll() {
    return `This action returns all possibleDate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} possibleDate`;
  }

  update(id: number, updatePossibleDateDto: UpdatePossibleDateDto) {
    return `This action updates a #${id} possibleDate`;
  }

  remove(id: number) {
    return `This action removes a #${id} possibleDate`;
  }
}
