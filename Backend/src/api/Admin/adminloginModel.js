import mongoose from 'mongoose'

const adminSchema=new mongoose.Schema({
    userName:{
        type:String
    },
    password:{
        type:String
    }
},{
    timestamps:true

})

const admin=mongoose.model('admins',adminSchema)

export default admin