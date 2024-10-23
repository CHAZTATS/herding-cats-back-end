import { PartialType } from '@nestjs/swagger';
import { CreatePossibleDateDto } from './create-possible-date.dto';

export class UpdatePossibleDateDto extends PartialType(CreatePossibleDateDto) {}
