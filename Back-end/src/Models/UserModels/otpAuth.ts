import { Schema } from "mongoose";

const otpAuth = new Schema({
    otp:{
        type:String
    },
    email:{
        type:String,
    }
});

export default otpAuth;
