const bodyParser = require('body-parser')
import express from 'express';
import { CustomersRouter } from './Router/customersRouter';

class Server {
    public app: express.Application
    constructor() {
        this.app = express();
        this.config();
        this.router();
        this.start();

    }

    public config(): void {
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    public router(): void {
        this.app.use('/customers', new CustomersRouter().CustomersRouter)

    }

    public start(): void {
        this.app.listen(3000, () => {
            console.log("app dang chay tren port 3000");
        });
    }
}

new Server();
