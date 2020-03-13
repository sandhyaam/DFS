import mongoose from 'mongoose'

const paymentSchema =new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    upload: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "uploadPhotos"
    },
    totalAmount:{
        type:String
    },
    cardType: {
        type: String
    },
    cardHolderName: {
        type: String
    },
    cardNumber: {
        type: String
    },
    cvv: {
        type: Number
    },
    date: {
        type: String
    }
},{
    timestamps:true
})

const payment=mongoose.model('payments',paymentSchema)

export default payment