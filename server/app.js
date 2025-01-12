const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express= require('express');
const cookieParser = require('cookie-parser');
// const multer=require('multer')
const app = express();
app.use(cookieParser())
//----------HIDING PASSWORD FROM DB URL-------
dotenv.config({path:'./config.env'});
//this is connection to the database
console.log('--before connection--');
require('./db/conn');
console.log('--after connection--');
//thru this line we are converting json format to object format
app.use(express.json());
//--------------------------------------------
//-WE LINK THE ROUTER FILE TO MAKE ROUTE EASY-
app.use(require('./router/auth'));
//---------CONNECTING DATABASE----------------
const PORT=process.env.PORT;
//--------IMPORTING-USER-SCHEMA---------------
const User = require('./model/userSchema.js');
const Teacher =require('./model/teacherSchema.js');
//-------------MIDDLEWARE---------------------
//iski jarurt nhi ahi na?
// const middleware=(req,res,next)=>{
//     console.log('INSIDE MIDDLEWARE in app.js');
//     console.log(`middleware is working`);
//     // jab user login kardega fir usko vo page dikhega
//     next();
// }
// app.use(middleware);
//-------------EXPRESS------------------------
// app.use(multer({dest:'./Uploads/',
// rename:function(fieldname,filename){return filename}}))


app.post('/api/photo',function(req,res){
    var newItem = new Item();
    newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
    newItem.img.contentType = 'image/png,jpg';
    newItem.save();
  });

app.get('/',(req,res)=>{
    res.send(`hello from server`);
});
// app.get('/about',middleware,(req,res)=>{
//     console.log(`hello  about`);
//     res.send(`hello from about server`);
// })
app.get('/contact',(req,res)=>{
    //(cookie ka naam , uski value)
    res.cookie("Test","aditi");
    res.send(`hello from contact server`);
})
app.get('/login',(req,res)=>{
    res.send(`hello from login server`);
})

app.get('/signup',(req,res)=>{
    res.send(`hello from registration server`);
})
app.get('/signupTeacher',(req,res)=>{
    res.send(`hello from Teacher registration server`);
})
app.listen(PORT,()=>{
    console.log(`server ${PORT} is running`);
    
})
//--------------------------------------------

