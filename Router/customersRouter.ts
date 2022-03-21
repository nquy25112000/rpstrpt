import { Router } from "express";
const bodyParser = require('body-parser')
import { customersController } from '../Controller/customersController'

const CustomersController = new customersController();

export class CustomersRouter {
    public CustomersRouter: Router;

    constructor() {
        this.CustomersRouter = Router();
        this.routers();
        this.config();

    }
    routers() {
        this.CustomersRouter.get('/', CustomersController.findAll);
        this.CustomersRouter.get('/:id', CustomersController.findOne);
        this.CustomersRouter.get('/find/item/item-customers', CustomersController.findItem);


        this.CustomersRouter.post('/', CustomersController.create);


        this.CustomersRouter.put('/:id', CustomersController.update);



        this.CustomersRouter.delete('/delete/:id', CustomersController.delete);
        this.CustomersRouter.delete('/delete-name', CustomersController.deleteName);


    }
    public config(): void {
        this.CustomersRouter.use(bodyParser.urlencoded({ extended: true }));
    }
}