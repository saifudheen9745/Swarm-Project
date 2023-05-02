import mongoose from "mongoose";
import validator from 'validator'

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