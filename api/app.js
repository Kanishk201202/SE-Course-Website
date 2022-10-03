const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express(); 

dotenv.config({ path: './config.env'});
require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'));
app.use(require('./router/auth1'));
app.use(require('./router/auth2'));
app.use(require('./router/auth3'));
app.use(require('./router/auth4'));
app.use(require('./router/auth5'));
app.use(require('./router/auth6'));

const PORT = process.env.PORT;


app.get('/', (req, res) => {
    res.send('Hello world from the server');
});

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`)
})