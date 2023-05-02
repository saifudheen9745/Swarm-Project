import { Types } from "mongoose";
import { userProjectSchema } from "../../Models/UserModels/projectModel";
import { userWorkspaceSchema } from "../../Models/UserModels/workspaceModel";

class projectRepository {
  async createAProjectInDb(projectDetails: any) {
    try {
      const projectList = await userProjectSchema.find({
        workspace: projectDetails.workspace,
      });
      projectList.map((project: any) => {
        if (project.name == projectDetails.name) {
          throw { msg: "Project already exist" };
        }
      });


      const projectResponse = await userProjectSchema.create(projectDetails);
      const insertProjectToWorkspace = await userWorkspaceSchema.updateOne(
        { _id: projectDetails.workspace },
        { $push: { projects: projectResponse._id } }
      );
      return projectResponse;
    } catch (error) {
      console.log(error);

      throw { error };
    }
  }

  async fetchAllProjectsFromDb(workspaceId: string) {
    try {
      const response = await userProjectSchema.find({ workspace: workspaceId });
      return response;
    } catch (error) {
      throw { error };
    }
  }

  async fetchAProjectDetailsFromDb(projectId: string) {
    try {
      const projectObjId = new Types.ObjectId(projectId);
      const response = await userProjectSchema.aggregate([
        {
          $match: {
            _id: projectObjId,
          },
        },
        {
          $addFields: {
            workspaceObjId: {
              $toObjectId: "$workspace",
            },
          },
        },
        {
          $lookup: {
            from: "workspace",
            localField: "workspaceObjId",
            foreignField: "_id",
            as: "projectDetails",
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
            description: 1,
            theme: 1,
            workspace: 1,
            members:1,
            to: 1,
            from:1,
            __v: 1,
            workspaceObjId:1,
            workspaceDetails:{$arrayElemAt:["$projectDetails",0]}
          }
        },
        {
            $addFields: {
              userObjId: {
                $toObjectId: "$workspaceDetails.master",
              },
            },
        },
        {
            $lookup: {
              from: "users",
              localField: "userObjId",
              foreignField: "_id",
              as: "masterDetails",
            },
        },
        {
            $project: {
              _id: 1,
              name: 1,
              description: 1,
              theme: 1,
              workspace: 1,
              members:1,
              to: 1,
              from:1,
              __v: 1,
              workspaceObjId:1,
              workspaceDetails:1,
              master:{$arrayElemAt:["$masterDetails",0]}
            }
            
          }
      ]);
      return response[0]
    } catch (error) {
      throw { error };
    }
  }

  async getMembersDetails(projectId:string){
    try {
        return await userProjectSchema.findById({_id:projectId});
    } catch (error) {
        console.log("Error from getting  registerd project members", error);
        throw { msg: "Somehting went wrong" };
    }
  }
}

export default projectRepository;
