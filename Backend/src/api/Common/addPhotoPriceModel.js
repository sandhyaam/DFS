import mongoose from 'mongoose'

const addPhotoSchema=new mongoose.Schema({
    photoSize:{
        type:String
    },
    price:{
        type:String
    }
},{
    timestamps:true
})

const addPhotoPrice=mongoose.model('PhotoPrices',addPhotoSchema)

export default addPhotoPrice