import type { Knex } from 'knex'
import { IRead } from './IRead';
const knex = require('../Config/connect')


export abstract class KnexRepository<T> implements IRead<T> {
    constructor(
        public readonly tableName: string
    ) { }



    delete(id: string): Promise<boolean> {
        return knex(this.tableName)
            .where('id', id)
            .del()
    }
    fillAll(): Promise<boolean> {
        return knex(this.tableName)
            .select()
    }
    create(item: T[]): Promise<T[]> {
        return knex(this.tableName)
            .insert(item)
    }
    update(id: string, item: T[]): Promise<T[]> {
        return knex(this.tableName)
            .where('id', '=', id)
            .update(item)
    }
    findOne(id: string): Promise<boolean> {
        return knex(this.tableName)
            .where({
                id: id
            })
            .select()
    }
    findItem(item: Partial<T>): Promise<T[]> {
        return knex(this.tableName)
            .where(item)
            .select()
    }
}