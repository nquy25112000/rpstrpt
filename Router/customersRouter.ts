import { Router } from "express";
// import bodyParser from 'body-parser';
const bodyParser = require('body-parser')
import { customersController } from '../Controller/customersController'


export class CustomersRouter {
    public CustomersRouter: Router;

    constructor() {
        this.CustomersRouter = Router();
        this.routers();
        this.config();

    }
    routers() {
        this.CustomersRouter.get('/', new customersController().findAll);
        this.CustomersRouter.get('/:id', new customersController().findOne);
        this.CustomersRouter.get('/find/item/item-customers', new customersController().findItem);


        this.CustomersRouter.post('/', new customersController().create);


        this.CustomersRouter.put('/:id', new customersController().update);



        this.CustomersRouter.delete('/delete/:id', new customersController().delete);
        this.CustomersRouter.delete('/delete-name', new customersController().deleteName);


    }
    public config(): void {
        this.CustomersRouter.use(bodyParser.urlencoded({ extended: true }));
    }
}