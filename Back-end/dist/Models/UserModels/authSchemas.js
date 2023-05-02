"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const userRegSchema = new mongoose_1.default.Schema({
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
    password: {
        required: true,
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isVerified: {
        type: Boolean,
        default: false
    }
});
exports.default = userRegSchema;
//# sourceMappingURL=authSchemas.js.map