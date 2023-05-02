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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const workspace_service_1 = __importDefault(require("../../Repostory/UserRepository/workspace.service"));
const mongoose_1 = __importDefault(require("mongoose"));
const userWorkspaceInvitationMail_1 = require("../../Verification/Email/userWorkspaceInvitationMail");
const workspaceDbOptions = new workspace_service_1.default();
const { createNewWorkspaceInDb, deleteWorkspaceFromDb, editWorkspaceInDb, findWorkspacesById, saveMembersInDbbyId, updateWorkspaceMembersList, findOneWorkspaceFromDbById } = workspaceDbOptions;
class workspaceHelpers {
    createNewWorkspace(wokrspaceDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield createNewWorkspaceInDb(wokrspaceDetails);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    deleteAWorkspace(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield deleteWorkspaceFromDb(id);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    editWokspace(id, reqObj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = new mongoose_1.default.Types.ObjectId(id);
                const updateObj = {};
                Object.keys(reqObj).forEach((key) => {
                    updateObj[key] = reqObj[key];
                });
                return yield editWorkspaceInDb(userId, updateObj);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getWokspace(id, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield findWorkspacesById(id, email);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    sentMailToAllMembers(emails, workspaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(emails, "form helpers");
            try {
                return yield (0, userWorkspaceInvitationMail_1.sentMail)(emails, workspaceId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    insertMembers(workspaceId, emails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateObj = emails.map((email) => {
                    return { email: email, status: "pending" };
                });
                const updatedObj = yield saveMembersInDbbyId(workspaceId, updateObj);
                return updatedObj;
            }
            catch (error) { }
        });
    }
    updateDb(workspaceId, choise, decryptedEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield updateWorkspaceMembersList(workspaceId, choise, decryptedEmail);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    findOneWorkspace(workspaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield findOneWorkspaceFromDbById(workspaceId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
}
exports.default = workspaceHelpers;
//# sourceMappingURL=workspaceHelpers.js.map