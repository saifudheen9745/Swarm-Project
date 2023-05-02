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
exports.fetchSelectedWorkspace = exports.verifyWorkspaceInvitationLink = exports.sentMailToVerifyMembers = exports.fetchAllWorkspace = exports.editWorkspace = exports.deleteWorkspace = exports.createWorkspace = void 0;
const workspaceHelpers_1 = __importDefault(require("../../Helpers/User/workspaceHelpers"));
const workspaceOptions = new workspaceHelpers_1.default();
const { createNewWorkspace, deleteAWorkspace, editWokspace, getWokspace, sentMailToAllMembers, insertMembers, updateDb, findOneWorkspace } = workspaceOptions;
const crypto_1 = __importDefault(require("../../encryption/crypto"));
const jwtConfig_1 = require("../../JwtConfig/jwtConfig");
const { decryptEmail } = (0, crypto_1.default)();
const jwt = new jwtConfig_1.jwtOptions();
const { createJwtAccessToken, createJwtRefreshToken } = jwt;
const createWorkspace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const workspace = yield createNewWorkspace(req.body);
        console.log(workspace);
        res.status(200).json({ msg: "created" });
    }
    catch (error) {
        console.log(error);
        res.status(401).json(error);
    }
});
exports.createWorkspace = createWorkspace;
const deleteWorkspace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workspace = yield deleteAWorkspace(req.params.id);
        console.log(workspace);
        res.status(200).json({ msg: "deleted" });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.deleteWorkspace = deleteWorkspace;
const editWorkspace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield editWokspace(req.params.id, req.body);
        res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(401).json({ error: "Something went wrong" });
    }
});
exports.editWorkspace = editWorkspace;
const fetchAllWorkspace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.body.userId;
        const email = req.body.email;
        const response = yield getWokspace(userId, email);
        res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(401).json({ error: "Something went wrong" });
    }
});
exports.fetchAllWorkspace = fetchAllWorkspace;
const sentMailToVerifyMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emails = req.body.userEmails;
        const workspaceId = req.body.workspaceId;
        const dbResponse = yield insertMembers(workspaceId, emails);
        const mailResponse = yield sentMailToAllMembers(dbResponse, workspaceId);
        res.status(200).json({ sent: true });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.sentMailToVerifyMembers = sentMailToVerifyMembers;
const verifyWorkspaceInvitationLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workspaceId = req.params.workspace;
        const choise = req.params.choise;
        const decryptedEmail = yield decryptEmail(req.params.encemail);
        const response = yield updateDb(workspaceId, choise, decryptedEmail);
        const accessToken = yield createJwtAccessToken(response._id.toString());
        const refreshToken = yield createJwtRefreshToken(response.id.toString());
        res.cookie("jwtRefreshToken", refreshToken, {
            httpOnly: true,
            //sameSite: "strict",
        });
        res.status(200).json({
            accessToken,
            userId: response._id.toString(),
            name: response.fname,
            email: response.email,
        });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.verifyWorkspaceInvitationLink = verifyWorkspaceInvitationLink;
const fetchSelectedWorkspace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workspaceId = req.params.workspaceId;
        const dbResponse = yield findOneWorkspace(workspaceId);
        console.log(dbResponse);
        res.status(200).json(dbResponse);
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.fetchSelectedWorkspace = fetchSelectedWorkspace;
//# sourceMappingURL=workspaceControllers.js.map