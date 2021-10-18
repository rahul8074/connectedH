require('./Database_connection.js')  //importing database
var express = require('express');
var bodyParser = require('body-parser');
 
var cors = require('cors');

 
var Login  =require("./login/Login");
var products = require("./fetchProducts");

const PORT = 4000;
var app = express();
app.use(cors({origin:true}));   //enabling cors for cross origin
app.use(bodyParser.json());

 
 
app.use("/login",Login);
app.use('/products',products);
 


app.listen(PORT, () => console.log(`server is Running on port : ${PORT}`))

