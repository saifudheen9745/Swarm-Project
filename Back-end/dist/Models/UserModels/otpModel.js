"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const otpAuth_1 = __importDefault(require("./otpAuth"));
const userOtpSchema = mongoose_1.default.model('userResetPassOtp', otpAuth_1.default, 'otp');
exports.default = userOtpSchema;
//# sourceMappingURL=otpModel.js.map