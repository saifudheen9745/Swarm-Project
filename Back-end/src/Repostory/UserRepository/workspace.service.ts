import mongoose, { Types } from "mongoose";
import { userWorkspaceSchema } from "../../Models/UserModels/workspaceModel";
import { workspaceDetailsInterface } from "../../Types/workspace.types";
import { userRegisterSchema } from "../../Models/UserModels/authModel";

class workspaceRepository {
  async createNewWorkspaceInDb(workspaceDetails: workspaceDetailsInterface) {
    try {
      console.log(workspaceDetails);
      const masterId: Types.ObjectId = new mongoose.Types.ObjectId(
        workspaceDetails.master
      );
      workspaceDetails.master = masterId;
      const newWorkspace = await userWorkspaceSchema.create(workspaceDetails);
      console.log("new workspace", newWorkspace);

      // const insertWorkspaceIdInUserDetails = await userRegisterSchema.updateOne(
      //   { _id: workspaceDetails.master },
      //   { $push: { myWorkspaces: newWorkspace?._id } }
      // );

      return newWorkspace;
    } catch (error) {
      throw { error };
    }
  }

  async deleteWorkspaceFromDb(id: string) {
    try {
      const userId: Types.ObjectId = new mongoose.Types.ObjectId(id);
      return await userWorkspaceSchema.deleteOne({ _id: userId });
    } catch (error) {
      throw { error };
    }
  }

  async editWorkspaceInDb(userId: Types.ObjectId, updateObj: any) {
    try {
      const result = await userWorkspaceSchema.updateOne(
        { _id: userId },
        { $set: updateObj }
      );
    } catch (error) {
      throw { error };
    }
  }

  async findWorkspacesById(userId:string,email:string) {

    try {
      const userObjId = new Types.ObjectId(userId)
      const response = await userWorkspaceSchema.aggregate([
        {
          $facet: {
            ownedWorkspaces: [
              {
                $match: {
                  master: userObjId,
                },
              },
            ],
            sharedWorkspaces: [
              {
                $match: {
                  members: {
                    $elemMatch: {
                      email: email,
                      status: "accepted",
                    },
                  },
                },
              },
              {
                $lookup: {
                  from: "users",
                  let: { master: "$master" },
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $eq: ["$_id", { $toObjectId: "$$master" }],
                        },
                      },
                    },
                    {
                      $project: {
                        _id: 1,
                        name: 1,
                        email: 1,
                      },
                    },
                  ],
                  as: "masterDetails",
                },
              },
            ],
          },
        },
      ]);
      console.log(response[0]);
      
      return response[0];
    } catch (error) {
      console.log(
        "its the error from fetching My workspaces by Id shared and owned ",
        error
      );
      throw { msg: "Workspace not found" };
    }
  }

  async saveMembersInDbbyId(workspaceId: string, updateObj: any) {
    try {
      const workspaceObj = await userWorkspaceSchema.findById(workspaceId);

      const emailsInDb = workspaceObj?.members.map((obj) => {
        return obj?.email;
      });

      const newUpdatedObj = updateObj.filter((obj: any) => {
        if (!emailsInDb?.includes(obj?.email)) {
          return obj;
        }
      });

      const objId = new Types.ObjectId(workspaceId);
      await userWorkspaceSchema.updateOne(
        { _id: objId },
        { $push: { members: { $each: [...newUpdatedObj] } } }
      );

      return newUpdatedObj;
    } catch (error) {
      throw { error };
    }
  }

  async updateWorkspaceMembersList(
    workspaceId: string,
    choise: string,
    decryptedEmail: string
  ) {
    try {
      const workspaceObjId = new Types.ObjectId(workspaceId);
      const user = await userRegisterSchema.findOne({ email: decryptedEmail });
      const updateSenderWorkspaceDb = await userWorkspaceSchema.updateOne(
        { _id: workspaceId, "members.email": decryptedEmail },
        { $set: { "members.$.status": choise } }
      );
      // const updateInviteesWorkspaceDb = await userRegisterSchema.updateOne(
      //   { email: decryptedEmail },
      //   { $push: { SharedWorkspaces: workspaceObjId } }
      // );
      if (user === null) {
        throw { msg: "user is not registered" };
      }
      console.log(user);

      return user;
    } catch (error) {
      throw { error };
    }
  }

  async findOneWorkspaceFromDbById(workspaceId: string) {
    try {
      return userWorkspaceSchema.findById(workspaceId);
    } catch (error) {
      throw { error };
    }
  }
}

export default workspaceRepository;
