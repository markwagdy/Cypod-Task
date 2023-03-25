const express=require('express');
const routes=express.Router();
const UserController=require('../Controller/user-controller');

routes.post('/login',UserController.login);
module.exports=routes