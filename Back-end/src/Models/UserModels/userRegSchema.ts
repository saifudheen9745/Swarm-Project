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

interface userRegSchema{
    fname:string,
    email:string,
    mobile:string,
    password:string,
    isActive:Boolean,
    isVerified:Boolean
}

export default userRegSchema