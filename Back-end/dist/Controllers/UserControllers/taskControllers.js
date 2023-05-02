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
exports.deleteTask = exports.getAllComments = exports.addComments = exports.updateTaskStatus = exports.getAllTask = exports.addNewTask = void 0;
const taskHelpers_1 = require("../../Helpers/User/taskHelpers");
const tasks = new taskHelpers_1.taskHelper();
const { createNewTask, getAllTaskOfAProject, getATaskStatusUpdated, addAComment, getComments, deleteATask } = tasks;
//--------adding new task-------------
const addNewTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const response = yield createNewTask(req.body);
        res.status(201).json(response);
    }
    catch (error) {
        res.status(402).json(error);
    }
});
exports.addNewTask = addNewTask;
const getAllTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbResponse = yield getAllTaskOfAProject(req.params.projectId);
        res.status(201).json(dbResponse);
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.getAllTask = getAllTask;
const updateTaskStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbResponse = yield getATaskStatusUpdated(req.body);
        res.status(201).json({ updated: true });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.updateTaskStatus = updateTaskStatus;
const addComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbResponse = yield addAComment(req.body);
        res.status(201).json({ updated: true });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.addComments = addComments;
const getAllComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbResponse = yield getComments(req.params.taskId);
        res.status(201).json(dbResponse);
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.getAllComments = getAllComments;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbResponse = yield deleteATask(req.params.taskId);
        res.status(201).json({ deleted: true });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.deleteTask = deleteTask;
//# sourceMappingURL=taskControllers.js.map