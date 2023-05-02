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
exports.authHelpers = void 0;
const bcrypt_1 = require("bcrypt");
const authRepository_service_1 = require("../../Repostory/UserRepository/authRepository.service");
const nodemailer_1 = require("../../Verification/Email/nodemailer");
const jwtConfig_1 = require("../../JwtConfig/jwtConfig");
const otp_generator_1 = require("otp-generator");
const jwt = new jwtConfig_1.jwtOptions();
const { createConfirmLinkToken, verifyConfirmLinkToken } = jwt;
const authRepo = new authRepository_service_1.authRepository();
const { registerUser, loginUser, loginUserWithNumber, findUserById, findUserByIdForEmailVerification, registerGoogleUser, loginGoogleUser, saveOtpInDb, checkOtp, updatePasswordDb, findUserByEmail, findUserByNumber, getUserDetailsFromDb, editUserDetailsInDb, updateUserPassInDb } = authRepo;
class authHelpers {
    doSignUp(regDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (regDetails.password) {
                    regDetails.password = yield (0, bcrypt_1.hash)(regDetails.password, 10);
                }
                return yield registerUser(regDetails);
            }
            catch (error) {
                if (error.error.code === 11000) {
                    const value = Object.keys(error.error.keyValue)[0];
                    throw { error, message: `${value} already exist` };
                }
                else if (error.error.message)
                    throw { error, message: error.error.message };
                else
                    throw { error };
            }
        });
    }
    doSignUpWithGoogle(googleDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield registerGoogleUser(googleDetails);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    doLogin(loginDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield loginUser(loginDetails);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    doLoginWithGoogle(googleLoginDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield loginGoogleUser(googleLoginDetails);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    confirmUserWithNumber(loginDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield loginUserWithNumber(loginDetails);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    sentVerifyEmail(verificationDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, link } = verificationDetails;
                return (0, nodemailer_1.sentMail)(email, link);
            }
            catch (error) {
                throw error;
            }
        });
    }
    generateLink(linkDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield createConfirmLinkToken(linkDetails.id);
                return `${process.env.BASE_URL}/verifyMail/${linkDetails.id}/${token}`;
            }
            catch (error) {
                throw { error };
            }
        });
    }
    verifyEmail(id, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield findUserByIdForEmailVerification(id);
                return yield verifyConfirmLinkToken(token, user.id);
            }
            catch (error) {
                console.log(error);
                throw { error };
            }
        });
    }
    checkEmailValidity(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield findUserByEmail(email);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    generateOtp(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const otp = yield (0, otp_generator_1.generate)(6, {
                    upperCaseAlphabets: false,
                    specialChars: false,
                });
                return yield saveOtpInDb(otp, email);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    verifyOtp(otp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield checkOtp(otp);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    updatePassword(updatePassDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (updatePassDetails.password) {
                    updatePassDetails.password = yield (0, bcrypt_1.hash)(updatePassDetails.password, 10);
                    return yield updatePasswordDb(updatePassDetails);
                }
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getEmailWithId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield findUserById(userId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getUserWithNumber(number) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield findUserByNumber(number);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getUserDetailsWithId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield getUserDetailsFromDb(userId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    editUserDetailsHelpers(userDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield editUserDetailsInDb(userDetails);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    updateUserPasswordHelper(passDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userDetails = yield findUserById(passDetails.userId);
                if (userDetails.password) {
                    const isValidUser = yield (0, bcrypt_1.compare)(passDetails.currentPass, userDetails.password);
                    if (!isValidUser) {
                        throw { msg: "Incorrect current password" };
                    }
                }
                passDetails.newPass = yield (0, bcrypt_1.hash)(passDetails.newPass, 10);
                return yield updateUserPassInDb(passDetails);
            }
            catch (error) {
                throw { error };
            }
        });
    }
}
exports.authHelpers = authHelpers;
//# sourceMappingURL=authHelpers.js.map