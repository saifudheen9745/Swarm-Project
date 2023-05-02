import { Request, Response } from "express";
import projectHelpers from "../../Helpers/User/projectHelpers";
const { createAProject, fetchAllProjects, fetchAProjectDetails, getAllMembers } =
  new projectHelpers();
export const createProject = async (req: Request, res: Response) => {
  try {
    const response = await createAProject(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const workspaceId = req.params.workspaceId;
    const response = await fetchAllProjects(workspaceId);
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const getAProjectDetails = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.projectId;
    const response = await fetchAProjectDetails(projectId);
    console.log("from project",response);
    
    res.status(200).json(response)
  } catch (error) {
    res.status(401).json(error);
  }
};

export const getAllregisterdProjectMembers = async (req:Request,res:Response) => {
  try {
      const {projectId} = req.params ; 
      const response = await getAllMembers(projectId);
      console.log("from project",response);
      res.status(200).json(response);     
  } catch (error) {
      res.status(402).json(error)
  }
};