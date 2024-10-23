import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GuestPossibleDateService } from './guest_possible-date.service';
import { CreateGuestPossibleDateDto } from './dto/create-guest_possible-date.dto';
import { UpdateGuestPossibleDateDto } from './dto/update-guest_possible-date.dto';

@Controller('guest-possible-date')
export class GuestPossibleDateController {
  constructor(private readonly guestPossibleDateService: GuestPossibleDateService) {}

  @Post()
  create(@Body() createGuestPossibleDateDto: CreateGuestPossibleDateDto) {
    return this.guestPossibleDateService.create(createGuestPossibleDateDto);
  }

  @Get()
  findAll() {
    return this.guestPossibleDateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guestPossibleDateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuestPossibleDateDto: UpdateGuestPossibleDateDto) {
    return this.guestPossibleDateService.update(+id, updateGuestPossibleDateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guestPossibleDateService.remove(+id);
  }
}
