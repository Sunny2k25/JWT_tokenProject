const express = require('express')
var app = express()
var dotenv = require('dotenv');
const router = require('./Routes/userRoute');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://sunny:123Sunny@cluster0.qcpfggd.mongodb.net/', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true }).then(()=>{
    console.log("Connected to DataBase");
})
app.use('/api/v1/user',router)  //router middleware

app.listen(process.env.PORT,()=>{
    console.log(`listening to port ${process.env.PORT}`);
})



//http://localhost:5002/api/v1/user/signUp