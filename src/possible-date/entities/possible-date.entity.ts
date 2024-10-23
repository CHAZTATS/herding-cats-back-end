import { IsDate } from "class-validator";
import { Event } from "src/event/entities/event.entity";
import { GuestPossibleDate } from "src/guest_possible-date/entities/guest_possible-date.entity";
import { BaseEntity } from "src/shared/decorators/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity('possible-date')
export class PossibleDate extends BaseEntity {
    @Column()
    @IsDate()
    startDate: Date;

    @Column()
    @IsDate()
    endDate: Date;

    @ManyToOne(() => Event, (event) => event.possibleDates)
    @JoinColumn({ name: "event_id" })
    event: Event

    @OneToMany(() => GuestPossibleDate, guestPossibleDate => guestPossibleDate.possibleDate)
    @JoinColumn([{ name: 'id', referencedColumnName: 'possible_date_id' }])
    guestPossibleDates: GuestPossibleDate[];
}
