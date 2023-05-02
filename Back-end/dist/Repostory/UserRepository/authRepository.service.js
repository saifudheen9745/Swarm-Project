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
exports.authRepository = void 0;
const bcrypt_1 = require("bcrypt");
const otpModel_1 = __importDefault(require("../../Models/UserModels/otpModel"));
const googleModel_1 = __importDefault(require("../../Models/UserModels/googleModel"));
const userRegModel_1 = __importDefault(require("../../Models/UserModels/userRegModel"));
class authRepository {
    registerUser(regDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { fname, lname, email, mobile, password } = regDetails;
                let userRegisteredAlready = yield userRegModel_1.default.find({
                    email: email,
                });
                if (userRegisteredAlready.length != 0) {
                    throw { msg: "User is already regitered" };
                }
                return yield userRegModel_1.default.create({
                    fname,
                    lname,
                    email,
                    mobile,
                    password,
                });
            }
            catch (error) {
                throw { error };
            }
        });
    }
    loginUser(reqDetails) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = reqDetails;
                const userFound = yield userRegModel_1.default.find({
                    $or: [{ email: { $eq: email } }, { mobile: { $eq: email } }],
                });
                if (userFound.length == 0)
                    throw { msg: "Invalid credentials" };
                const passwordFromDb = (_a = userFound[0]) === null || _a === void 0 ? void 0 : _a.password;
                const isValidUser = yield (0, bcrypt_1.compare)(password, passwordFromDb);
                if (isValidUser) {
                    if (!userFound[0].isVerified) {
                        throw { msg: "Please verify email to login", userVerified: false };
                    }
                    else {
                        return userFound[0];
                    }
                }
                else {
                    throw { msg: "Invalid credentials" };
                }
            }
            catch (error) {
                throw { error };
            }
        });
    }
    loginUserWithNumber(loginDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userFound = yield userRegModel_1.default.find({
                    mobile: loginDetails.mobile,
                });
                if (userFound.length == 0) {
                    throw { msg: "Mobile number is not registered" };
                }
                else {
                    return userFound[0];
                }
            }
            catch (error) {
                throw { error };
            }
        });
    }
    findUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userRegModel_1.default.findById({ _id: id });
                return user;
            }
            catch (error) {
                if (error.kind == "ObjectId") {
                    throw { error: { msg: "Invalid Link" } };
                }
                else {
                    throw { error };
                }
            }
        });
    }
    findUserByIdForEmailVerification(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(id);
                const user = yield userRegModel_1.default.findById({ _id: id });
                console.log("user from comfirm", user);
                if (!user) {
                    throw { msg: "Invalid Link" };
                }
                else if (user === null || user === void 0 ? void 0 : user.isVerified) {
                    throw { msg: "User already verified" };
                }
                else {
                    return user;
                }
            }
            catch (error) {
                if (error.kind == "ObjectId") {
                    throw { error: { msg: "Invalid Link" } };
                }
                else {
                    throw { error };
                }
            }
        });
    }
    setIsVerifiedTrue(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return userRegModel_1.default.updateOne({ _id: id }, { $set: { isVerified: true } });
            }
            catch (error) {
                throw { error };
            }
        });
    }
    registerGoogleUser({ fname, email }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const duplicateUser = yield googleModel_1.default.find({ email: email });
                if (duplicateUser.length != 0) {
                    throw {
                        msg: "This email is already registered, Please use another email",
                    };
                }
                else {
                    return yield googleModel_1.default.create({ fname, email });
                }
            }
            catch (error) {
                throw { error };
            }
        });
    }
    loginGoogleUser({ email }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userRegModel_1.default.find({ email: email });
                if (user.length == 0) {
                    throw { msg: "Please register with google first" };
                }
                return user[0];
            }
            catch (error) {
                throw { error };
            }
        });
    }
    saveOtpInDb(otp, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield otpModel_1.default.create({ otp, email });
            }
            catch (error) {
                throw { error };
            }
        });
    }
    checkOtp(otp) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validOtp = yield otpModel_1.default.find({ otp: otp });
                if (validOtp.length == 0) {
                    throw { msg: "Invalid otp" };
                }
                else {
                    yield otpModel_1.default.deleteOne({ otp: otp });
                }
                return (_a = validOtp[0]) === null || _a === void 0 ? void 0 : _a.otp;
            }
            catch (error) {
                throw { error };
            }
        });
    }
    updatePasswordDb(updatePasswordDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = updatePasswordDetails;
                return yield userRegModel_1.default.updateOne({ email: email }, { $set: { password: password } });
            }
            catch (error) {
                throw { error };
            }
        });
    }
    findUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userRegModel_1.default.find({ email: email });
                if (user.length === 0) {
                    throw { msg: "Email is not registered" };
                }
                if (!user[0].isVerified) {
                    throw { msg: "You cannot change password before verifying your email" };
                }
                return { emailVerified: true };
            }
            catch (error) {
                throw { error };
            }
        });
    }
    findUserByNumber(number) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(number);
                const user = yield userRegModel_1.default.find({ mobile: number });
                if (user.length === 0) {
                    throw { msg: "Mobile is not registered" };
                }
                else {
                    return user[0];
                }
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getUserDetailsFromDb(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userRegModel_1.default.find({ _id: userId });
                return user === null || user === void 0 ? void 0 : user[0];
            }
            catch (error) {
                throw { error };
            }
        });
    }
    findUserByMobileOrEmail(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield userRegModel_1.default.findOne({
                    $or: [{ email: identifier }, { mobile: identifier }],
                });
            }
            catch (error) {
                throw { error };
            }
        });
    }
    editUserDetailsInDb(userDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield userRegModel_1.default.updateOne({ _id: userDetails.userId }, // filter for the document to update
                {
                    $set: {
                        fname: userDetails.fname,
                        email: userDetails.email,
                        mobile: userDetails.mobile,
                    },
                } // update operation to perform
                );
            }
            catch (error) {
                throw { error };
            }
        });
    }
    updateUserPassInDb(passDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield userRegModel_1.default.updateOne({ _id: passDetails.userId }, { $set: { password: passDetails.newPass } });
            }
            catch (error) {
                throw { error };
            }
        });
    }
}
exports.authRepository = authRepository;
//# sourceMappingURL=authRepository.service.js.map