import { Guest } from "src/guest/entities/guest.entity";
import { PossibleDate } from "src/possible-date/entities/possible-date.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('guest-possible_date')
export class GuestPossibleDate {
    @PrimaryColumn({ name: 'guest_id' })
    guestId: string;

    @PrimaryColumn({ name: 'possible_date_id' })
    possibleDateId: string;

    @ManyToOne(() => Guest, guest => guest.guestPossibleDates)
    @JoinColumn([{ name: 'guest_id', referencedColumnName: 'id' }])
    guest: Guest;

    @ManyToOne(() => PossibleDate, possibleDate => possibleDate.guestPossibleDates)
    @JoinColumn([{ name: 'possible_date_id', referencedColumnName: 'id' }])
    possibleDate: PossibleDate;
}
