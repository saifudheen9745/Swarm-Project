"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const workspaceControllers_1 = require("../../Controllers/UserControllers/workspaceControllers");
const Router = express_1.default.Router();
Router.post("/", workspaceControllers_1.fetchAllWorkspace);
Router.get("/selectedone/:workspaceId", workspaceControllers_1.fetchSelectedWorkspace);
Router.post("/create", workspaceControllers_1.createWorkspace);
Router.delete("/delete/:id", workspaceControllers_1.deleteWorkspace);
Router.patch("/edit/:id", workspaceControllers_1.editWorkspace);
Router.post("/sentverifymail", workspaceControllers_1.sentMailToVerifyMembers);
Router.get("/verifyinvitationmail/:workspace/:encemail/:choise", workspaceControllers_1.verifyWorkspaceInvitationLink);
exports.default = Router;
//# sourceMappingURL=workspaceRoute.js.map