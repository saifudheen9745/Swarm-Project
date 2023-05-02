"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userWorkspaceSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const workspaceSchema_1 = __importDefault(require("./workspaceSchema"));
exports.userWorkspaceSchema = mongoose_1.default.model("workspaceSchema", workspaceSchema_1.default, 'workspace');
//# sourceMappingURL=workspaceModel.js.map