import express from "express";
const CustomersRouter = express.Router();
const customerController = require('../Controller/customersController')
const bodyParser = require('body-parser');

CustomersRouter.use(bodyParser.urlencoded({ extended: true }));


//get all customers
CustomersRouter.get('/', customerController.findAll)
//get customers with id
CustomersRouter.get('/:id', customerController.findOne)
//get customers with item
CustomersRouter.get('/find/item/item-customers', customerController.findItem)




//create customers
CustomersRouter.post('/', customerController.create)



//update customers with id  
CustomersRouter.put('/:id', customerController.update)



//delete customers with id
CustomersRouter.delete('/delete/:id', customerController.delete)
//delete customers with name
CustomersRouter.delete('/delete-name', customerController.deleteName)



module.exports = CustomersRouter