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
exports.taskHelper = void 0;
const taskRepository_service_1 = require("../../Repostory/UserRepository/taskRepository.service");
const taskClass = new taskRepository_service_1.TaskService();
const { createTask, findDuplicate, getAllTaskFromDb, updateTaskInDb, addCommentInDb, getCommentFromDb, deleteTaskFromDb } = taskClass;
class taskHelper {
    createNewTask(details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskDetails = yield findDuplicate({ name: details.name, reporter: details.reporter, projectId: details.projectId });
                if (!taskDetails.length) {
                    return yield createTask(details);
                }
                else {
                    throw { msg: 'Task name already exist' };
                }
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getAllTaskOfAProject(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return getAllTaskFromDb(projectId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getATaskStatusUpdated(taskDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return updateTaskInDb(taskDetails);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    addAComment(commentDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return addCommentInDb(commentDetails);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getComments(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return getCommentFromDb(taskId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    deleteATask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return deleteTaskFromDb(taskId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
}
exports.taskHelper = taskHelper;
//# sourceMappingURL=taskHelpers.js.map