import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PossibleDateService } from './possible-date.service';
import { CreatePossibleDateDto } from './dto/create-possible-date.dto';
import { UpdatePossibleDateDto } from './dto/update-possible-date.dto';

@Controller('possible-date')
export class PossibleDateController {
  constructor(private readonly possibleDateService: PossibleDateService) {}

  @Post()
  create(@Body() createPossibleDateDto: CreatePossibleDateDto) {
    return this.possibleDateService.create(createPossibleDateDto);
  }

  @Get()
  findAll() {
    return this.possibleDateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.possibleDateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePossibleDateDto: UpdatePossibleDateDto) {
    return this.possibleDateService.update(+id, updatePossibleDateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.possibleDateService.remove(+id);
  }
}
