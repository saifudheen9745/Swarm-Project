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

interface googleTypes {
    fname:string,
    email:string,
    isVerified:Boolean
}

export default mongoose.model<googleTypes>('userGoogleReg',googleSchema,'users')