import mongoose from 'mongoose'

const uploadPhotoSchema=new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    photoSize:{
        type:String
    },
    price:{
        type:Number
    },
    noOfCopies:{
        type:Number
    } ,
    totalAmount:{
        type:Number
    },
    photo:{
        type:String
    },
    status:{
        type:String
    }
},{
    timestamps:true
})

const uploadData=mongoose.model('uploadPhotos',uploadPhotoSchema)

export default uploadData