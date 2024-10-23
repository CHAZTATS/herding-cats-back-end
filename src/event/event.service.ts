import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
    @InjectRepository(User) private userRepository: Repository<User>
  ) { }

  async create(userId: string, createEventDto: CreateEventDto) {
    const user = await this.userRepository.findOneBy({
      id: userId
    });
    createEventDto.user = user;
    console.log(user);
    const newEvent = await this.eventRepository.create(createEventDto);
    await this.eventRepository.save(newEvent);

    return newEvent;
  }

  async findAll() {
    return await this.eventRepository.find({
      relations: {
        user: true,
        guests: true,
        possibleDates: true
      }
    });
  }

  async findAllByUserId(userId: string) {
    return await this.eventRepository.find({
      where: [{
        user: {
          id: userId
        }
      }],
      relations: {
        user: true,
        guests: true,
        possibleDates: true
      }
    });
  }

  async findOne(id: string) {
    const event = await this.eventRepository.findOne({
      where: [{ id: id }],
      relations: {
        guests: {
          user: true,
          guestPossibleDates: {
            possibleDate: true
          }
        },
        user: true,
        possibleDates: true
      }
    });

    return event;
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    await this.eventRepository.update(id, updateEventDto);
    const updatedEvent = await this.eventRepository.findOneBy({ id: id });
    if (updatedEvent) {
      return updatedEvent;
    }
  }

  async delete(id: string) {
    const removeEvent = await this.eventRepository.findOneBy({ id: id });
    await this.eventRepository.save(removeEvent);
    await this.eventRepository.softDelete(id);
  }
}

// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { BaseService } from 'src/shared/decorators/services/base.service';
// import { Repository } from 'typeorm';
// import { Event } from './entities/event.entity';

// @Injectable()
// export class EventService extends BaseService<Event> {
//   constructor(
//     @InjectRepository(Event)
//     private readonly eventRepository: Repository<Event>,
//   ) {
//     super(eventRepository);
//   }
// }
