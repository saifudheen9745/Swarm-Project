"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const googleSchema = new mongoose_1.default.Schema({
    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator_1.default.isEmail, "Invalid Email"],
    },
    isVerified: {
        type: Boolean,
        default: true
    }
});
exports.default = mongoose_1.default.model('userGoogleReg', googleSchema, 'users');
//# sourceMappingURL=googleModel.js.map