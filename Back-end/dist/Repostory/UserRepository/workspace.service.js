"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const workspaceModel_1 = require("../../Models/UserModels/workspaceModel");
const userRegModel_1 = __importDefault(require("../../Models/UserModels/userRegModel"));
class workspaceRepository {
    createNewWorkspaceInDb(workspaceDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(workspaceDetails);
                const masterId = new mongoose_1.default.Types.ObjectId(workspaceDetails.master);
                workspaceDetails.master = masterId;
                const newWorkspace = yield workspaceModel_1.userWorkspaceSchema.create(workspaceDetails);
                console.log("new workspace", newWorkspace);
                // const insertWorkspaceIdInUserDetails = await userRegisterSchema.updateOne(
                //   { _id: workspaceDetails.master },
                //   { $push: { myWorkspaces: newWorkspace?._id } }
                // );
                return newWorkspace;
            }
            catch (error) {
                throw { error };
            }
        });
    }
    deleteWorkspaceFromDb(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = new mongoose_1.default.Types.ObjectId(id);
                return yield workspaceModel_1.userWorkspaceSchema.deleteOne({ _id: userId });
            }
            catch (error) {
                throw { error };
            }
        });
    }
    editWorkspaceInDb(userId, updateObj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield workspaceModel_1.userWorkspaceSchema.updateOne({ _id: userId }, { $set: updateObj });
            }
            catch (error) {
                throw { error };
            }
        });
    }
    findWorkspacesById(userId, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userObjId = new mongoose_1.Types.ObjectId(userId);
                const response = yield workspaceModel_1.userWorkspaceSchema.aggregate([
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
            }
            catch (error) {
                console.log("its the error from fetching My workspaces by Id shared and owned ", error);
                throw { msg: "Workspace not found" };
            }
        });
    }
    saveMembersInDbbyId(workspaceId, updateObj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const workspaceObj = yield workspaceModel_1.userWorkspaceSchema.findById(workspaceId);
                const emailsInDb = workspaceObj === null || workspaceObj === void 0 ? void 0 : workspaceObj.members.map((obj) => {
                    return obj === null || obj === void 0 ? void 0 : obj.email;
                });
                const newUpdatedObj = updateObj.filter((obj) => {
                    if (!(emailsInDb === null || emailsInDb === void 0 ? void 0 : emailsInDb.includes(obj === null || obj === void 0 ? void 0 : obj.email))) {
                        return obj;
                    }
                });
                const objId = new mongoose_1.Types.ObjectId(workspaceId);
                yield workspaceModel_1.userWorkspaceSchema.updateOne({ _id: objId }, { $push: { members: { $each: [...newUpdatedObj] } } });
                return newUpdatedObj;
            }
            catch (error) {
                throw { error };
            }
        });
    }
    updateWorkspaceMembersList(workspaceId, choise, decryptedEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const workspaceObjId = new mongoose_1.Types.ObjectId(workspaceId);
                const user = yield userRegModel_1.default.findOne({ email: decryptedEmail });
                const updateSenderWorkspaceDb = yield workspaceModel_1.userWorkspaceSchema.updateOne({ _id: workspaceId, "members.email": decryptedEmail }, { $set: { "members.$.status": choise } });
                // const updateInviteesWorkspaceDb = await userRegisterSchema.updateOne(
                //   { email: decryptedEmail },
                //   { $push: { SharedWorkspaces: workspaceObjId } }
                // );
                if (user === null) {
                    throw { msg: "user is not registered" };
                }
                console.log(user);
                return user;
            }
            catch (error) {
                throw { error };
            }
        });
    }
    findOneWorkspaceFromDbById(workspaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return workspaceModel_1.userWorkspaceSchema.findById(workspaceId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
}
exports.default = workspaceRepository;
//# sourceMappingURL=workspace.service.js.map