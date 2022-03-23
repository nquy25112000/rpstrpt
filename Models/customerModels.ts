import { KnexRepository } from '../Repository/KnexRepository'
import { Connect } from '../Config/connect'

const knex = new Connect().knex;
import Bookshelf from 'bookshelf';



const bookshelf = Bookshelf(knex)


export class Customers extends bookshelf.Model<Customers> {
    get tableName() { return 'customers'; }
    get hasTimestamps() { return false; }
}


export class CustomersRepository extends KnexRepository<Customers> {

    constructor() {
        super('customers')
    }

    delName(name: string): Promise<boolean> {
        return knex('customers')
            .whereLike('name', '%' + name + '%')
            .del()
    };
    delType_guestVIP(type: string): Promise<boolean> {
        return knex('customers')
            .whereLike('type_guest', '%' + type + '%')
            .del()
    };


}
