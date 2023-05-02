"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectModel_1 = require("../../Models/UserModels/projectModel");
const workspaceModel_1 = require("../../Models/UserModels/workspaceModel");
class projectRepository {
    createAProjectInDb(projectDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projectList = yield projectModel_1.userProjectSchema.find({
                    workspace: projectDetails.workspace,
                });
                projectList.map((project) => {
                    if (project.name == projectDetails.name) {
                        throw { msg: "Project already exist" };
                    }
                });
                const projectResponse = yield projectModel_1.userProjectSchema.create(projectDetails);
                const insertProjectToWorkspace = yield workspaceModel_1.userWorkspaceSchema.updateOne({ _id: projectDetails.workspace }, { $push: { projects: projectResponse._id } });
                return projectResponse;
            }
            catch (error) {
                console.log(error);
                throw { error };
            }
        });
    }
    fetchAllProjectsFromDb(workspaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield projectModel_1.userProjectSchema.find({ workspace: workspaceId });
                return response;
            }
            catch (error) {
                throw { error };
            }
        });
    }
    fetchAProjectDetailsFromDb(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projectObjId = new mongoose_1.Types.ObjectId(projectId);
                const response = yield projectModel_1.userProjectSchema.aggregate([
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
                            members: 1,
                            to: 1,
                            from: 1,
                            __v: 1,
                            workspaceObjId: 1,
                            workspaceDetails: { $arrayElemAt: ["$projectDetails", 0] }
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
                            members: 1,
                            to: 1,
                            from: 1,
                            __v: 1,
                            workspaceObjId: 1,
                            workspaceDetails: 1,
                            master: { $arrayElemAt: ["$masterDetails", 0] }
                        }
                    }
                ]);
                return response[0];
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getMembersDetails(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield projectModel_1.userProjectSchema.findById({ _id: projectId });
            }
            catch (error) {
                console.log("Error from getting  registerd project members", error);
                throw { msg: "Somehting went wrong" };
            }
        });
    }
}
exports.default = projectRepository;
//# sourceMappingURL=projectRepository.service.js.map