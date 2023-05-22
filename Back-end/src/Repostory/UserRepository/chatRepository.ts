import { userProjectSchema } from "../../Models/UserModels/projectModel";
import { userChatModel } from "../../Models/UserModels/userChatModel";
import { userMessageModal } from "../../Models/UserModels/userMessageModel";

export class chatRepository {
  async createAChatInDb(projectId: string) {
    try {
      const isProjectExist = await userProjectSchema.find({ _id: projectId });
      if (isProjectExist) {
        const isChatExist = await userChatModel.findOne({
          projectId: projectId,
        });

        if (!isChatExist) {
          var chat = await userChatModel.create({
            chatName: isProjectExist?.[0]?.name,
            projectId: isProjectExist?.[0]?._id,
            members: isProjectExist?.[0]?.members,
          });
        }

        

        // return await userChatModel.aggregate([
        //   {
        //     $match: {
        //       $or: [{ _id: chat?._id }, { _id: isChatExist?._id }],
        //     },
        //   },
        //   {
        //     $lookup: {
        //       from: "users",
        //       localField: "members",
        //       foreignField: "email",
        //       as: "members",
        //     },
        //   },
        //   {
        //     $lookup: {
        //       from: "messages",
        //       let: { chatId: "$_id" },
        //       pipeline: [
        //         {
        //           $match: {
        //             $expr: {
        //               $eq: ["$chatId", "$$chatId"],
        //             },
        //           },
        //         },
        //       ],
        //       as: "messages",
        //     },
        //   },
        // ]);

        return await userChatModel.aggregate([
          {
            $match: {
              $or: [{ _id: chat?._id }, { _id: isChatExist?._id }],
            },
          },
          {
            $lookup: {
              from: "users",
              localField: "members",
              foreignField: "email",
              as: "members",
            },
          },
          {
            $lookup: {
              from: "messages",
              let: { chatId: "$_id" },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $eq: ["$chatId", "$$chatId"],
                    },
                  },
                },
                {
                  $lookup: {
                    from: "users",
                    localField: "sender",
                    foreignField: "_id",
                    as: "senderDetails"
                  }
                },
                {
                  $addFields: {
                    sender: { $arrayElemAt: [ "$senderDetails", 0 ] }
                  }
                },
                {
                  $project: {
                    senderDetails: 0
                  }
                }
              ],
              as: "messages",
            },
          },
        ]);
        

      } else {
        throw { msg: "Project not found" };
      }
    } catch (error) {
      throw { error };
    }
  }

  async saveAMessageInDb(messageObj: any) {
    try {
      let dbResponse = await userMessageModal.create(messageObj);
      dbResponse = await dbResponse.populate("sender")
      await userChatModel.updateOne(
        { _id: dbResponse?.chatId },
        { $set: { latestMessage: dbResponse._id } }
      );
      return dbResponse;
    } catch (error) {
      throw { error };
    }
  }
}
