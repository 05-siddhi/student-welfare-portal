const mongoose=require('mongoose');
const express=require('express')
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');
const app=express();
console.log('INSIDE UserSchema.js');
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    }
    
    ,
    phone:{
        type:Number,
        required:true
    }
    ,
    batch:{
        type:String,
        required:true
    }
    ,
    branch:{
        type:String,
        required:true
    }
    ,
    year:{
        type:Number,
        required:true
    }
    ,
    password:{
        type:String,
        required:true,
        trim:true
    }
    ,
    cpassword:{
        type:String,
        required:true,
        trim:true

    },
    coins:{
        type:Number,
        default:200
    },
    person:
    {
        type:String,
        default:"S"
    },
    photo:
    {
        data: Buffer, 
        contentType: String
    },
    // ye cheez nhi show hori
    
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})
//--------we are generating auth token-------
userSchema.methods.generateAuthToken = async function(){
    console.log('Inside Token User');
    try {
        let token_add =jwt.sign({_id:this._id}, process.env.SECRET_KEY)
        this.tokens=this.tokens.concat({token:token_add});
        await this.save();
        console.log('token created for student');
        return token_add;
    } catch (err) {
        console.log(err);
    }
}
const User = mongoose.model('MERNCOLLECTION',userSchema);
console.log(User);
module.exports=User;
