const bodyParser = require('body-parser');
const express = require('express')
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const hoten = req.body


    res.json(hoten)
})
app.listen(3000, () => {
    console.log("sv dang chay")
})
