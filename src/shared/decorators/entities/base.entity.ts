import { IsNotEmpty, IsString } from 'class-validator';
import { CreateDateColumn, PrimaryGeneratedColumn, BaseEntity as TypeOrmBaseEntity, UpdateDateColumn } from 'typeorm';

export class BaseEntity extends TypeOrmBaseEntity {

    @IsNotEmpty()
    @PrimaryGeneratedColumn('uuid')
    @IsString()
    id: string;

    @CreateDateColumn({ name: 'created_date', nullable: true })
    createdDate: Date;


    @UpdateDateColumn({ name: 'updated_date', nullable: true })
    updatedDate: Date;

}