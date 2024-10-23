import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { Guest } from "src/guest/entities/guest.entity";
import { PossibleDate } from "src/possible-date/entities/possible-date.entity";
import { BaseEntity } from "src/shared/decorators/entities/base.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity('event')
export class Event extends BaseEntity {


    @IsNotEmpty()
    @Column()
    @IsString()
    name: string;

    @Column()
    @IsString()
    description: string;

    @Column({ nullable: true })
    password: string;


    @Column({ nullable: true })
    @IsDate()
    startDate: Date;

    @Column({ nullable: true })
    @IsDate()
    endDate: Date;

    @ManyToOne(() => User, (user) => user.events)
    @JoinColumn({ name: "user_id" })
    user: User

    @OneToMany(() => PossibleDate, (possibleDate) => possibleDate.event, { cascade: true })
    possibleDates: PossibleDate[]

    @OneToMany(() => Guest, (guest) => guest.event)
    guests: Guest[]
}
