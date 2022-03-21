import { KnexRepository } from '../Repository/KnexRepository'
import { Connect } from '../Config/connect'
const knex = new Connect().knex;


export interface Customers {
    id: string
    name: string
}

export class CustomersRepository extends KnexRepository<Customers> {

    constructor() {
        super('customers')
    }

    delName(name: string): Promise<boolean> {
        return knex('customers')
            .whereLike('name', '%' + name + '%')
            .del()
    }
    delType_guestVIP(type: string): Promise<boolean> {
        return knex('customers')
            .whereLike('type_guest', '%' + type + '%')
            .del()
    }

}
