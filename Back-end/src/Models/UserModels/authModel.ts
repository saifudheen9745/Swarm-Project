import mongoose from "mongoose";
import validator from 'validator'

const userRegSchema = new mongoose.Schema({
    fname: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, "Invalid Email"],
    },
    mobile: {
        type: String,
        // validate: [
        //     {
        //         validator: function (value: string) {
        //             return /^\d{10}$/.test(value);
        //         },
        //         message: "Invalid mobile number",
        //     },
        // ]
    },
    password:{
        required:true,
        type:String,
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isVerified:{
        type:Boolean,
        default:false
    }
});

const otpAuth = new mongoose.Schema({
    otp:{
        type:String
    },
    email:{
        type:String
    }
})

const googleSchema = new mongoose.Schema({
    fname: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, "Invalid Email"],
    },
    isVerified:{
        type:Boolean,
        default:true
    }
})

export const userOtpSchema = mongoose.model('userResetPassOtp',otpAuth,'otp')
export const userRegisterSchema =  mongoose.model('users',userRegSchema,'users')
export const userGoogleSchema = mongoose.model('userGoogleReg',googleSchema,'users')