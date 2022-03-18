import { Customers, CustomersRepository } from '../Models/customerModels'
import { Router, Request, Response, NextFunction } from 'express';


const repository = new CustomersRepository()






exports.delete = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const customers = await new CustomersRepository().delete(id);
    if (customers) {
        res.status(200).json('thanh cong')
    }
    {
        res.status(400).json('khong ton tai')
    }

}




exports.deleteName = async (req: Request, res: Response, next: NextFunction) => {
    const name = req.body.name;
    const customers = await repository.delName(name);
    if (customers) {
        res.status(200).json('thanh cong')
    }
    {
        res.status(400).json('khong ton tai')
    }

}


exports.findAll = async (req: Request, res: Response, next: NextFunction) => {
    const product = await repository.fillAll();
    res.json(product)
}


exports.create = async (req: Request, res: Response, next: NextFunction) => {
    const item = req.body
    const product = await repository.create(item);
    if (!product) {
        res.status(500)
    }
    res.status(201).json({ messager: "sucsess" })
}

exports.update = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const item = req.body
    const product = await repository.update(id, item);
    if (!product) {
        res.status(500)
    }
    res.status(201).json({ messager: "sucsess" })
}


exports.findOne = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const product = await repository.findOne(id);
    if (product == null) {
        res.status(500)
    }
    res.status(201).json({ messager: product })
}



exports.findItem = async (req: Request, res: Response, next: NextFunction) => {
    const item = req.query
    console.log(item)
    const repository = new CustomersRepository()
    const product = await repository.findItem(item);
    console.log(item)
    if (product == null) {
        res.status(500)
    }
    res.status(201).json({ messager: product })
}

