const express=require('express');
const cookieParser = require('cookie-parser');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser());
app.use(cors());
//routes
const deviceRouter=require('./routes/device-route');
app.use('',deviceRouter);

const userRouter=require('./routes/user-route');
app.use('',userRouter);

module.exports =app