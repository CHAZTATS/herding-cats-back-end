import { Event } from "src/event/entities/event.entity";
import { GuestPossibleDate } from "src/guest_possible-date/entities/guest_possible-date.entity";
import { BaseEntity } from "src/shared/decorators/entities/base.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";

@Entity({ name: 'guest' })
export class Guest extends BaseEntity {

    @Column({ length: 255, nullable: true })
    firstName: string;

    @Column({ length: 255, nullable: true })
    surname: string;

    @Column({ default: false })
    isComing: boolean;

    @Column({ name: "event_id", nullable: true })
    eventId: string;

    @ManyToOne(() => Event, (event) => event.guests)
    @JoinColumn({ name: "event_id" })
    event: Event

    @OneToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @OneToMany(() => GuestPossibleDate, guestPossibleDate => guestPossibleDate.guest, { cascade: ["insert", "remove"] })
    @JoinColumn([{ name: 'id', referencedColumnName: 'guest_id' }])
    guestPossibleDates: GuestPossibleDate[];

}