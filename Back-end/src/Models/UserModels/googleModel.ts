import mongoose from "mongoose";
import validator from 'validator'

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


export const userGoogleSchema = mongoose.model('userGoogleReg',googleSchema,'users')