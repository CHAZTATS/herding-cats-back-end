import { GuestPossibleDate } from "src/guest_possible-date/entities/guest_possible-date.entity";

export class CreateGuestDto {
    eventId: string;
    firstName: string;
    surname: string;
    isComing: boolean;
    guestPossibleDates?: GuestPossibleDate[];
}
