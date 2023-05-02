import { taskInterface, taskUpdateDetails } from "../../Types/task.types";

import { TaskService } from "../../Repostory/UserRepository/taskRepository.service";
const taskClass = new TaskService();
const { createTask,findDuplicate,getAllTaskFromDb,updateTaskInDb,addCommentInDb,getCommentFromDb,deleteTaskFromDb } = taskClass;

export class taskHelper {
  async createNewTask(details: taskInterface) {
    try {
       const taskDetails =  await findDuplicate({name:details.name,reporter:details.reporter,projectId:details.projectId}) ;       
       if(!taskDetails.length){
              return await createTask(details);
       }else{
        throw {msg:'Task name already exist'}
       }
    } catch (error:any) {
      throw { error };
    }
  }

  async getAllTaskOfAProject(projectId:string){
    try {
      return getAllTaskFromDb(projectId)
    } catch (error) {
      throw{error}
    }
  }

  async getATaskStatusUpdated(taskDetails:taskUpdateDetails){
    try {
      return updateTaskInDb(taskDetails)
    } catch (error) {
      throw{error}
    }
  }

  async addAComment(commentDetails:any){
    try {
      return addCommentInDb(commentDetails)
    } catch (error) {
      throw{error}
    }
  }

  async getComments(taskId:string){
    try {
      return getCommentFromDb(taskId)
    } catch (error) {
      throw{error}
    }
  }

  async deleteATask(taskId:string){
    try {
      return deleteTaskFromDb(taskId)
    } catch (error) {
      throw{error}
    }
  }
}