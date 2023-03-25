const express=require('express');
const routes=express.Router();
const DeviceController=require('../Controller/device-controller');
const auth=require('../Middleware/auth');
routes.get('/devices',auth.AuthenticateUser,DeviceController.GetDevices);
routes.get('/devices/:id',auth.AuthenticateUser,DeviceController.GetDeviceById);

module.exports=routes