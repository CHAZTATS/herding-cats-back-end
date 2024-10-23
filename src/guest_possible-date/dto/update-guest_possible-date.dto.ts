import { PartialType } from '@nestjs/swagger';
import { CreateGuestPossibleDateDto } from './create-guest_possible-date.dto';

export class UpdateGuestPossibleDateDto extends PartialType(CreateGuestPossibleDateDto) {}
