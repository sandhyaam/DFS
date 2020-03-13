import mongoose from 'mongoose'

const registerSchema=new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    phoneNo:{
        type:Number
    },
    address:{
        type:String
    },
    status:{
        type:String
    }
},{
    timestamps:true
})

const userRegister=mongoose.model('users',registerSchema)

export default userRegister