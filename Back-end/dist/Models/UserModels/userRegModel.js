"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userRegSchema_1 = __importDefault(require("./userRegSchema"));
exports.default = mongoose_1.default.model("users", userRegSchema_1.default, "users");
//# sourceMappingURL=userRegModel.js.map