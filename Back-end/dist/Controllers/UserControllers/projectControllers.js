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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllregisterdProjectMembers = exports.getAProjectDetails = exports.getAllProjects = exports.createProject = void 0;
const projectHelpers_1 = __importDefault(require("../../Helpers/User/projectHelpers"));
const { createAProject, fetchAllProjects, fetchAProjectDetails, getAllMembers } = new projectHelpers_1.default();
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield createAProject(req.body);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.createProject = createProject;
const getAllProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workspaceId = req.params.workspaceId;
        const response = yield fetchAllProjects(workspaceId);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.getAllProjects = getAllProjects;
const getAProjectDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectId = req.params.projectId;
        const response = yield fetchAProjectDetails(projectId);
        console.log("from project", response);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.getAProjectDetails = getAProjectDetails;
const getAllregisterdProjectMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectId } = req.params;
        const response = yield getAllMembers(projectId);
        console.log("from project", response);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(402).json(error);
    }
});
exports.getAllregisterdProjectMembers = getAllregisterdProjectMembers;
//# sourceMappingURL=projectControllers.js.map