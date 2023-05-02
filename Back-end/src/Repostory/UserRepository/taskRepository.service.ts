import mongoose, { Types } from "mongoose";
import { taskInterface, taskUpdateDetails } from "../../Types/task.types";
import { userTaskSchema } from "../../Models/UserModels/taskModel";

export class TaskService {
  async createTask(details: taskInterface) {
    try {
      const newArray = details.assignee?.map(
        (member) => new Types.ObjectId(member)
      );
      details.assignee = newArray as Types.ObjectId[]; // Add explicit type assertion
      return await userTaskSchema.create(details);
    } catch (error) {
      console.log("its the error from where we add new task Service", error);
      throw { error };
    }
  }

  async findDuplicate({
    name,
    reporter,
    projectId,
  }: {
    name: string;
    reporter: string;
    projectId: string;
  }) {
    try {
      return await userTaskSchema.find({ reporter, name, projectId });
    } catch (error) {
      console.log(
        "its the error from where find duplicate task service",
        error
      );
      throw { msg: "something went wrong" };
    }
  }

  async getAllTaskFromDb(projectId: string) {
    try {
      return await userTaskSchema.aggregate([
        {
          $match: {
            projectId,
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "assignee",
            foreignField: "_id",
            as: "member",
          },
        },
      ]);
    } catch (error) {
      console.log("its the error from where we fetch tasks ", error);
      throw { msg: "something went wrong" };
    }
  }

  async updateTaskInDb(taskDetails:taskUpdateDetails){
    try {
        const taskId = new Types.ObjectId(taskDetails.taskId)
        const userId = new Types.ObjectId(taskDetails.userId)
        console.log(taskId);
        
        const a = await  userTaskSchema.updateOne({
            $and: [
              { _id: taskId },
              { $or: [{ assignee: userId  }, { reporter: taskDetails.userId }] },
            ],
          },{ $set: { status: taskDetails.status }}) 
        console.log(a);
        
    } catch (error) {
        throw{error}
    }
  }

  async addCommentInDb(commentDetails:any){
    try {
      const userObjId = new Types.ObjectId(commentDetails.userId)
      const commentObj = {
        createdBy:userObjId,
        creatorName:commentDetails.name,
        comment:commentDetails.comment,
        createdAt:new Date()
      }
      const response = await userTaskSchema.updateOne(
        {_id:commentDetails.taskId},
        {$push:{comments:commentObj}}
      )
      return response
    } catch (error) {
      throw{error}
    }
  }

  async getCommentFromDb(taskId:string){
    try {
      const objtaskId = new Types.ObjectId(taskId)
      const taskDetails = await userTaskSchema.aggregate([
        {
          $match: {
            _id:objtaskId,
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "assignee",
            foreignField: "_id",
            as: "member",
          },
        },
      ]);
      return taskDetails?.[0]
    } catch (error) {
      throw{error}
    }
  }

  async deleteTaskFromDb(taskId:string){
    try {
      const objtaskId = new Types.ObjectId(taskId)
      return await userTaskSchema.deleteOne({_id:objtaskId})
    } catch (error) {
      throw{error}
    }
  }
}

