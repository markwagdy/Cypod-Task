const fs=require('fs');

const data=fs.readFileSync('./data/device-data.json','utf-8');
const dataObj=JSON.parse(data);

const deviceData=fs.readFileSync('./data/device-details-data.json','utf-8');
const dataDeviceObj=JSON.parse(deviceData);

GetDevices=(req,res)=>{
   
    return res.status(200).json({success:true,data:dataObj});
}

GetDeviceById=(req,res)=>{
    
    const id = req.params.id;
    if(id >10)
    return res.status(403);

    const {role}=req.user;
    if(role!='Admin')
    {
        return res.status(403).json({success:false});
    }
    var fDeviceData=dataDeviceObj.filter((element)=>{
        return element.id==id;
    });
    
    
    return res.status(200).json({success:true,data:fDeviceData});
}

module.exports={
    GetDevices,
    GetDeviceById
}