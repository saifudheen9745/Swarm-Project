"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
    },
    assignee: {
        type: Array,
    },
    reporter: {
        type: String,
        required: true,
    },
    projectId: {
        type: String,
        required: true,
    },
    comments: {
        type: Array,
    },
    status: {
        type: String,
        default: "Initiated"
    }
});
exports.default = taskSchema;
//# sourceMappingURL=taskSchema.js.map