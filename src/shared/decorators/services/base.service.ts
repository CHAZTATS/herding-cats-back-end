import { FindOneOptions, FindOptionsRelations, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { BaseEntity } from '../entities/base.entity';

export abstract class BaseService<T extends BaseEntity> {
    protected constructor(protected readonly repository: Repository<T>) { }

    async create(entity: T): Promise<T> {
        return await this.repository.save(entity);
    }

    async findOneById(id: string, relations?: FindOptionsRelations<T>): Promise<T> {
        return this.repository.findOne({
            where: [{ id: id }],
            relations: relations,
        } as FindOneOptions);
    }

    async findOne(options: FindOneOptions<T>): Promise<T> {
        return this.repository.findOne(options);
    }

    async findAll(): Promise<T[]> {
        return this.repository.find();
    }

    async update(id: string, entity: Partial<T>): Promise<T> {
        await this.repository.update(id, entity as QueryDeepPartialEntity<T>);
        return this.findOneById(id);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}