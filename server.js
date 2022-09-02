const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const { connectDB } = require("./db");
const dotenv = require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

//connecting to DB
connectDB();

// Routes 
require('./src/routes/example.routes')(app);
app.get('/', (req,res)=>{
    res.send('Welcome to nodejs starter')
})


app.listen(port, () => console.log(`listening on ${port}`));