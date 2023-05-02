"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTaskSchema = void 0;
const mongoose_1 = require("mongoose");
const taskSchema_1 = __importDefault(require("./taskSchema"));
//export const userTaskSchema:any = model("taskSchema",taskSchema,'tasks');
exports.userTaskSchema = (0, mongoose_1.model)('tasks', taskSchema_1.default);
//# sourceMappingURL=taskModel.js.map