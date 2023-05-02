import express from "express";
import {
  createWorkspace,
  deleteWorkspace,
  editWorkspace,
  fetchAllWorkspace,
  sentMailToVerifyMembers,
  verifyWorkspaceInvitationLink,
  fetchSelectedWorkspace
} from "../../Controllers/UserControllers/workspaceControllers";

const Router = express.Router();

Router.post("/",fetchAllWorkspace)

Router.get("/selectedone/:workspaceId",fetchSelectedWorkspace)

Router.post("/create", createWorkspace);

Router.delete("/delete/:id", deleteWorkspace);

Router.patch("/edit/:id", editWorkspace);

Router.post("/sentverifymail",sentMailToVerifyMembers)

Router.get("/verifyinvitationmail/:workspace/:encemail/:choise",verifyWorkspaceInvitationLink)



export default Router;
