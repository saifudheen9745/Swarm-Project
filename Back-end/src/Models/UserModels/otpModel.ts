import mongoose from "mongoose";
import otpAuth from "./otpAuth";


export default mongoose.model('userResetPassOtp',otpAuth,'otp')