const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();


dotenv.config({ path: './config.env'});
require('./database/connect');
app.use(express.json());

app.use(require('./router/auth'));
// require('./router/auth')
// const User = require('./model/userSchema');
const PORT = 3100;


if ( process.env.NODE_ENV == "production"){
    app.use(express.static("frontend/build"));
}

// console.log("OK_BYE");
app.listen(PORT, () => {
    console.log("All Best");
})