import express from 'express'
import { createProject,getAllProjects,getAProjectDetails,getAllregisterdProjectMembers } from '../../Controllers/UserControllers/projectControllers'

const Router = express.Router()

Router.get('/:workspaceId',getAllProjects)

Router.post('/create', createProject)

Router.get('/details/:projectId',getAProjectDetails)

Router.get("/members/:projectId", getAllregisterdProjectMembers);

export default Router