import { Exclude } from "class-transformer";
import { IsString } from "class-validator";
import { Event } from "src/event/entities/event.entity";
import { BaseEntity } from "src/shared/decorators/entities/base.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({ name: 'user' })
export class User extends BaseEntity {

    @Column({ length: 255, nullable: false, unique: true })
    username: string;

    @Exclude()
    @IsString()
    @Column({ length: 255, nullable: false })
    password: string;

    @OneToMany(() => Event, (event) => event.user)
    events: Event[]
}
