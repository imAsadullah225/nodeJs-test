const express = require('express');
const app = express();
const router = require("./router")
const port = 3000;

const bodyparser = require('body-parser')

var urlencodedParser = bodyparser.urlencoded({ extended: false })

app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded(urlencodedParser))

app.use(router);

app.listen(port, () => {
    console.log("connect")
});