import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { Guest } from "src/guest/entities/guest.entity";
import { PossibleDate } from "src/possible-date/entities/possible-date.entity";
import { BaseEntity } from "src/shared/decorators/entities/base.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity('activity')
export class Activity extends BaseEntity {


    @IsNotEmpty()
    @Column()
    @IsString()
    name: string;

    @Column()
    @IsString()
    description: string;

    @Column({ nullable: true })
    @IsDate()
    startDate: Date;

    @Column({ nullable: true })
    @IsDate()
    endDate: Date;

    @OneToMany(() => PossibleDate, (possibleDate) => possibleDate.event, { cascade: true })
    possibleDates: PossibleDate[]

    @OneToMany(() => Guest, (guest) => guest.event)
    guests: Guest[]
}