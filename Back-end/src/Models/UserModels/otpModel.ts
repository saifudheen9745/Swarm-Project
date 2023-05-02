import mongoose from "mongoose";


const otpAuth = new mongoose.Schema({
    otp:{
        type:String
    },
    email:{
        type:String,
        ref:"users"
    }
})

export const userOtpSchema = mongoose.model('userResetPassOtp',otpAuth,'otp')