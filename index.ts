import express from 'express';
var app = express();
const CustomersRouter = require('./Router/customersRouter')



app.use('/customers', CustomersRouter)

app.listen(3000, () => {
    console.log("sv dang chay")
})
