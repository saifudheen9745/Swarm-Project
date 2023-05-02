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
exports.updateUserPasswordWithoutOtp = exports.editUserDetails = exports.getUserDetails = exports.checkIsValidNumber = exports.resentConfirmationMail = exports.updateUserPassword = exports.verifyOtpForPasswordChange = exports.sentOtpMailForPasswordChange = exports.createTokenForOtpAuth = exports.emailVerification = exports.getNewAcessToken = exports.userLoginWithGoogle = exports.userLogin = exports.userRegistrationWithGoogle = exports.userRegistration = void 0;
const authHelpers_1 = require("../../Helpers/User/authHelpers");
const jwtConfig_1 = require("../../JwtConfig/jwtConfig");
const passwordResetMailer_1 = require("../../Verification/Email/passwordResetMailer");
const jwt = new jwtConfig_1.jwtOptions();
const { createJwtAccessToken, createJwtRefreshToken, createNewAccessToken } = jwt;
const userAuthHelpers = new authHelpers_1.authHelpers();
const { doSignUp, doLogin, sentVerifyEmail, generateLink, verifyEmail, confirmUserWithNumber, doSignUpWithGoogle, doLoginWithGoogle, generateOtp, verifyOtp, updatePassword, checkEmailValidity, getEmailWithId, getUserWithNumber, getUserDetailsWithId, editUserDetailsHelpers, updateUserPasswordHelper } = userAuthHelpers;
const userRegistration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield doSignUp(req.body);
        const verifyLink = yield generateLink({
            id: response._id.toString(),
        });
        const mailResponse = sentVerifyEmail({
            email: response.email,
            link: verifyLink,
        });
        res.status(200).json({ UserCreated: true, Mail: mailResponse });
    }
    catch (error) {
        console.log(error);
        res.status(401).json(error);
    }
});
exports.userRegistration = userRegistration;
const userRegistrationWithGoogle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield doSignUpWithGoogle(req.body);
        const accessToken = yield createJwtAccessToken(response._id.toString());
        const refreshToken = yield createJwtRefreshToken(response._id.toString());
        res.cookie("jwtRefreshToken", refreshToken, { httpOnly: true });
        res.status(200).json({
            accessToken,
            userId: response._id.toString(),
            name: response.fname,
            email: response.email,
        });
    }
    catch (error) {
        console.log(error);
        res.status(401).json(error);
    }
});
exports.userRegistrationWithGoogle = userRegistrationWithGoogle;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield doLogin(req.body);
        const accessToken = yield createJwtAccessToken(response._id.toString());
        const refreshToken = yield createJwtRefreshToken(response._id.toString());
        res.cookie("jwtRefreshToken", refreshToken, {
            httpOnly: true,
        });
        res.status(200).json({
            accessToken,
            userId: response._id.toString(),
            name: response.fname,
            email: response.email,
        });
    }
    catch (error) {
        console.log(error);
        res.status(401).json(error);
    }
});
exports.userLogin = userLogin;
const userLoginWithGoogle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield doLoginWithGoogle(req.body);
        const accessToken = yield createJwtAccessToken(response._id.toString());
        const refreshToken = yield createJwtRefreshToken(response._id.toString());
        res.cookie("jwtRefreshToken", refreshToken, {
            httpOnly: true,
        });
        //res.cookie("jwtAccessToken",accessToken,{httpOnly:false})
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
exports.userLoginWithGoogle = userLoginWithGoogle;
const getNewAcessToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newAccessToken = yield createNewAccessToken(req.cookies.jwtRefreshToken);
        res.status(200).json({ accessToken: newAccessToken });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.getNewAcessToken = getNewAcessToken;
const emailVerification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield verifyEmail(req.body.id, req.body.token);
        const accessToken = yield createJwtAccessToken(response._id.toString());
        const refreshToken = yield createJwtRefreshToken(response._id.toString());
        res.cookie("jwtRefreshToken", refreshToken, {
            httpOnly: true
        });
        res.status(200).json({
            verified: true,
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
exports.emailVerification = emailVerification;
const createTokenForOtpAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield confirmUserWithNumber(req.body);
        const accessToken = yield createJwtAccessToken(response._id.toString());
        const refreshToken = yield createJwtRefreshToken(response._id.toString());
        res.cookie("jwtRefreshToken", refreshToken, {
            httpOnly: true,
        });
        // res.cookie("jwtAccessToken",accessToken,{httpOnly:false})
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
exports.createTokenForOtpAuth = createTokenForOtpAuth;
const sentOtpMailForPasswordChange = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield checkEmailValidity(req.body.email);
        const otp = yield generateOtp(req.body.email);
        const mailResponse = yield (0, passwordResetMailer_1.sentResetPasswordMail)(req.body.email, otp.otp);
        res.status(200).json(mailResponse);
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.sentOtpMailForPasswordChange = sentOtpMailForPasswordChange;
const verifyOtpForPasswordChange = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = verifyOtp(req.body.otp);
        res.status(200).json({ otpVerified: true });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.verifyOtpForPasswordChange = verifyOtpForPasswordChange;
const updateUserPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield updatePassword(req.body);
        res.status(200).json({ passwordChanged: true });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.updateUserPassword = updateUserPassword;
const resentConfirmationMail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield getEmailWithId(req.body.userId);
        if (response) {
            const verifyLink = yield generateLink({
                id: req.body.userId,
            });
            const mailResponse = yield sentVerifyEmail({
                email: response.email,
                link: verifyLink,
            });
            res.status(200).json({ Mail: mailResponse });
        }
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.resentConfirmationMail = resentConfirmationMail;
const checkIsValidNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield getUserWithNumber(req.body.number);
        res.status(200).json({ numberVerified: true, user: response });
    }
    catch (error) {
        console.log(error);
        res.status(401).json(error);
    }
});
exports.checkIsValidNumber = checkIsValidNumber;
const getUserDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbResponse = yield getUserDetailsWithId(req.params.userId);
        res.status(200).json(dbResponse);
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.getUserDetails = getUserDetails;
const editUserDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbResponse = yield editUserDetailsHelpers(req.body.userDetails);
        res.status(200).json({ updated: true });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.editUserDetails = editUserDetails;
const updateUserPasswordWithoutOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbResponse = yield updateUserPasswordHelper(req.body.passDetails);
        res.status(200).json({ updated: true });
    }
    catch (error) {
        res.status(401).json(error);
    }
});
exports.updateUserPasswordWithoutOtp = updateUserPasswordWithoutOtp;
//# sourceMappingURL=authControllers.js.map