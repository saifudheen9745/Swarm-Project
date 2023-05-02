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
const authRepository_service_1 = require("../../Repostory/UserRepository/authRepository.service");
const projectRepository_service_1 = __importDefault(require("../../Repostory/UserRepository/projectRepository.service"));
const { findUserByMobileOrEmail } = new authRepository_service_1.authRepository();
const { createAProjectInDb, fetchAllProjectsFromDb, fetchAProjectDetailsFromDb, getMembersDetails } = new projectRepository_service_1.default();
class projectHelpers {
    createAProject(projectDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield createAProjectInDb(projectDetails);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    fetchAllProjects(workspaceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield fetchAllProjectsFromDb(workspaceId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    fetchAProjectDetails(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield fetchAProjectDetailsFromDb(projectId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getAllMembers(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield getMembersDetails(projectId);
                const registeredUsers = yield Promise.all(response === null || response === void 0 ? void 0 : response.members.map((member) => findUserByMobileOrEmail(member)));
                const filteredUsers = registeredUsers.filter((user) => user);
                const userDetails = filteredUsers.map((user) => ({
                    _id: user._id,
                    name: user.fname,
                    email: user.email,
                    mobile: user.mobile,
                }));
                return { members: response === null || response === void 0 ? void 0 : response.members, registerdMembers: userDetails };
            }
            catch (error) {
                throw { error };
            }
        });
    }
}
exports.default = projectHelpers;
//# sourceMappingURL=projectHelpers.js.map