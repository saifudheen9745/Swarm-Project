"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const otpAuth = new mongoose_1.Schema({
    otp: {
        type: String
    },
    email: {
        type: String,
    }
});
exports.default = otpAuth;
//# sourceMappingURL=otpAuth.js.map