import mongoose from "mongoose";
import otpAuth from "./otpAuth";

const userOtpSchema = mongoose.model<otpAuth>('userResetPassOtp', otpAuth, 'otp');
export default userOtpSchema;
