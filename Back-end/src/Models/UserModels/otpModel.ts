import mongoose from "mongoose";


const otpAuth = new mongoose.Schema({
    otp:{
        type:String
    },
    email:{
        type:String,
    }
})

export default mongoose.model('userResetPassOtp',otpAuth,'otp')