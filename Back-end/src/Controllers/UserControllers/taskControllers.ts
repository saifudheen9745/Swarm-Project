import { Request, Response } from "express";
import { taskHelper } from "../../Helpers/User/taskHelpers";
const tasks = new taskHelper();
const { createNewTask,getAllTaskOfAProject,getATaskStatusUpdated,addAComment,getComments,deleteATask } = tasks;

//--------adding new task-------------
export const addNewTask = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    
    const response = await createNewTask(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(402).json(error);
  }
};

export const getAllTask = async (req: Request, res: Response) => {
  try {
    const dbResponse = await getAllTaskOfAProject(req.params.projectId)
    res.status(201).json(dbResponse)
  } catch (error) {
    res.status(401).json(error)
  }
};

export const updateTaskStatus = async (req: Request, res: Response)=>{
  try {
    const dbResponse = await getATaskStatusUpdated(req.body)
    res.status(201).json({updated:true})
    
  } catch (error) {
    res.status(401).json(error)
  }
}

export const addComments = async (req: Request, res: Response)=>{
  try {
    const dbResponse = await addAComment(req.body)
    res.status(201).json({updated:true})
    
  } catch (error) {
    res.status(401).json(error)
  }
}

export const getAllComments = async (req: Request, res: Response)=>{
  try {
    const dbResponse = await getComments(req.params.taskId)
    res.status(201).json(dbResponse)
    
  } catch (error) {
    res.status(401).json(error)
  }
}

export const deleteTask = async (req: Request, res: Response)=>{
  try {
    const dbResponse = await deleteATask(req.params.taskId)
    res.status(201).json({deleted:true})
    
  } catch (error) {
    res.status(401).json(error)
  }
}