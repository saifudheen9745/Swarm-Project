"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const mongoose_1 = require("mongoose");
const taskModel_1 = require("../../Models/UserModels/taskModel");
class TaskService {
    createTask(details) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newArray = (_a = details.assignee) === null || _a === void 0 ? void 0 : _a.map((member) => new mongoose_1.Types.ObjectId(member));
                details.assignee = newArray; // Add explicit type assertion
                return yield taskModel_1.userTaskSchema.create(details);
            }
            catch (error) {
                console.log("its the error from where we add new task Service", error);
                throw { error };
            }
        });
    }
    findDuplicate({ name, reporter, projectId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield taskModel_1.userTaskSchema.find({ reporter, name, projectId });
            }
            catch (error) {
                console.log("its the error from where find duplicate task service", error);
                throw { msg: "something went wrong" };
            }
        });
    }
    getAllTaskFromDb(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield taskModel_1.userTaskSchema.aggregate([
                    {
                        $match: {
                            projectId,
                        },
                    },
                    {
                        $lookup: {
                            from: "users",
                            localField: "assignee",
                            foreignField: "_id",
                            as: "member",
                        },
                    },
                ]);
            }
            catch (error) {
                console.log("its the error from where we fetch tasks ", error);
                throw { msg: "something went wrong" };
            }
        });
    }
    updateTaskInDb(taskDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskId = new mongoose_1.Types.ObjectId(taskDetails.taskId);
                const userId = new mongoose_1.Types.ObjectId(taskDetails.userId);
                console.log(taskId);
                const a = yield taskModel_1.userTaskSchema.updateOne({
                    $and: [
                        { _id: taskId },
                        { $or: [{ assignee: userId }, { reporter: taskDetails.userId }] },
                    ],
                }, { $set: { status: taskDetails.status } });
                console.log(a);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    addCommentInDb(commentDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userObjId = new mongoose_1.Types.ObjectId(commentDetails.userId);
                const commentObj = {
                    createdBy: userObjId,
                    creatorName: commentDetails.name,
                    comment: commentDetails.comment,
                    createdAt: new Date()
                };
                const response = yield taskModel_1.userTaskSchema.updateOne({ _id: commentDetails.taskId }, { $push: { comments: commentObj } });
                return response;
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getCommentFromDb(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objtaskId = new mongoose_1.Types.ObjectId(taskId);
                const taskDetails = yield taskModel_1.userTaskSchema.aggregate([
                    {
                        $match: {
                            _id: objtaskId,
                        },
                    },
                    {
                        $lookup: {
                            from: "users",
                            localField: "assignee",
                            foreignField: "_id",
                            as: "member",
                        },
                    },
                ]);
                return taskDetails === null || taskDetails === void 0 ? void 0 : taskDetails[0];
            }
            catch (error) {
                throw { error };
            }
        });
    }
    deleteTaskFromDb(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objtaskId = new mongoose_1.Types.ObjectId(taskId);
                return yield taskModel_1.userTaskSchema.deleteOne({ _id: objtaskId });
            }
            catch (error) {
                throw { error };
            }
        });
    }
}
exports.TaskService = TaskService;
//# sourceMappingURL=taskRepository.service.js.map