const app= require('../app.js');
const request= require( 'supertest');
const token=process.env.ACCESS_TOKEN;
describe('login without username or password', ()=>{
    it('should not return a token',async ()=>{
        const response= await request(app).post('/login');
        
        expect(response.statusCode).toBe(404);
    })
})
describe('login with Wrong User name or password', ()=>{
    it('should not return a token',async ()=>{
        const response= await request(app).post('/login').send({username:'Mark',password:'Mark'});
        
        expect(response.statusCode).toBe(403);
    })
})
describe('login with correct username and password', ()=>{
    it('should return a token',async ()=>{
        const response= await request(app).post('/login').send({username:'Markwagdy@gmail.com',password:'p@s$w0rd'});
        
        expect(response.statusCode).toBe(200);
        expect(response.body.role).toBe('Admin');
    })
})
describe('Get All Devices', ()=>{
    it('should return all devices',async ()=>{
        const responselogin= await request(app).post('/login').send({username:'Markwagdy@gmail.com',password:'p@s$w0rd'});
        
        const response= await  request(app).get('/devices').set('Authorization',`Bearer ${responselogin.body.token}`);
       
        
        expect(response.statusCode).toBe(200);
        expect(response.body.data.length).toBeGreaterThan(0);
    })
})
describe('Get All Devices', ()=>{
    it('should return 401',async ()=>{
        const responselogin= await request(app).post('/login').send({username:'Markwagdy@gmail.com',password:'p@s$w0rd'});
        
        const response= await  request(app).get('/devices');
       
        
        expect(response.statusCode).toBe(401);
        
    })
})
describe('Get Device with Id', ()=>{
    it('should return the device with the exact id',async ()=>{
        const responselogin= await request(app).post('/login').send({username:'Markwagdy@gmail.com',password:'p@s$w0rd'});
        
        const response= await  request(app).get('/devices/1').set('Authorization',`Bearer ${responselogin.body.token}`);
       
       
        
        expect(response.statusCode).toBe(200);
        expect(response.data).not.toBe(null);
        
    })
})
