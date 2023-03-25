require('dotenv').config();
const fs=require('fs');
const jwt=require('jsonwebtoken');
const userData=fs.readFileSync('./data/user-data.json','utf-8');
const userDataObj=JSON.parse(userData);

login=(req,res)=>{
    
    const {username,password}=req.body;
    if(username ==null || password==null)
    {
        return res.status(404).json({success:false,error:'missing username and password'})
    }
    var user=userDataObj.filter((element)=>{
        return element.username==username && element.password==password;
    })
    if(!user[0])
    {
        return res.status(403).json({success:false,error:'Wrong Username or Password'})
    }
    var Role=user[0].role;
    const accessToken=jwt.sign({role:Role,role:Role},process.env.ACCESS_TOKEN)
    
    return res.status(200).json({success:true,token:accessToken,role:Role});
}

module.exports={
    login
}