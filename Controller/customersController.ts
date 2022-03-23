import { Customers, CustomersRepository } from '../Models/customerModels'
import { Request, Response, NextFunction } from 'express';

const repository = new CustomersRepository()

export class customersController {

    public delete = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
        const customers = await repository.delete(id);
        if (customers) {
            res.status(200).json('thanh cong')
        }
        else {
            res.status(400).json('khong ton tai')
        }

    }
    public deleteName = async (req: Request, res: Response, next: NextFunction) => {
        const name = req.body.name;
        const customers = await repository.delName(name);
        if (customers) {
            res.status(200).json('thanh cong')
        }
        else {
            res.status(400).json('khong ton tai')
        }
    }


    public findAll = async (req: Request, res: Response, next: NextFunction) => {
        const product = await repository.fillAll();
        res.status(200).json(product)
    }


    public create = async (req: Request, res: Response, next: NextFunction) => {
        const item = req.body
        const product = await repository.create(item);
        if (!product) {
            res.status(500)
        }
        res.status(201).json({ messager: "sucsess" })
    }



    public create2 = async (req: Request, res: Response, next: NextFunction) => {
        const item = req.body
        const product = new Customers(item).save();

        if (!product) {
            res.status(500)
        }
        res.status(201).json({ messager: "sucsess" })
    }




    public update = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id
        const item = req.body
        const product = await repository.update(id, item);
        if (!product) {
            res.status(500)
        }
        res.status(201).json({ messager: "sucsess" })
    }


    public findOne = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id
        const product = await repository.findOne(id);
        if (product == null) {
            res.status(500)
        }
        res.status(201).json({ messager: product })
    }

    public findItem = async (req: Request, res: Response, next: NextFunction) => {
        const item = req.query
        console.log(item)
        const product = await repository.findItem(item);
        console.log(item)
        if (product == null) {
            res.status(500)
        }
        res.status(201).json({ messager: product })
    }
}


