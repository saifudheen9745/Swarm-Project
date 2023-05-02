import { Schema } from "mongoose";

const otpAuth = new Schema({
    otp:{
        type:String
    },
    email:{
        type:String,
    }
});

interface otpAuth{
    otp:string;
    email:string;
}

export default otpAuth;
