import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventService } from './event.service';

@ApiTags('Event')
@ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@Controller('events')
export class EventController {
  constructor(
    private readonly eventService: EventService
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Request() req, @Body() createEventDto: CreateEventDto) {
    return this.eventService.create(req.user.id, createEventDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req) {
    const userId = req?.user?.id;
    if (!userId) {
      throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
    }
    console.log(userId);
    return this.eventService.findAllByUserId(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //If using Base Service
    // const relations = {
    //   guests: true
    // } as FindOptionsRelations<Event>;
    // return this.eventService.findOneById(id, relations);


    return this.eventService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.delete(id);
  }


}
