"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectControllers_1 = require("../../Controllers/UserControllers/projectControllers");
const Router = express_1.default.Router();
Router.get('/:workspaceId', projectControllers_1.getAllProjects);
Router.post('/create', projectControllers_1.createProject);
Router.get('/details/:projectId', projectControllers_1.getAProjectDetails);
Router.get("/members/:projectId", projectControllers_1.getAllregisterdProjectMembers);
exports.default = Router;
//# sourceMappingURL=projectRoute.js.map