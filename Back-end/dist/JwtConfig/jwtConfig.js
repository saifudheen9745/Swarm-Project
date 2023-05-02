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
exports.jwtOptions = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const authRepository_service_1 = require("../Repostory/UserRepository/authRepository.service");
const authRepo = new authRepository_service_1.authRepository();
class jwtOptions {
    constructor() {
        // create access token with 30 seconds validity
        this.createJwtAccessToken = (user) => __awaiter(this, void 0, void 0, function* () {
            return (0, jsonwebtoken_1.sign)({ user }, process.env.JWT_ACCESS_TOKEN_SECRET, {
                expiresIn: "30s",
            });
        });
        // create confirm email link token with 1 minute validity
        this.createConfirmLinkToken = (user) => __awaiter(this, void 0, void 0, function* () {
            return (0, jsonwebtoken_1.sign)({ user }, process.env.CONFIRM_EMAIL_TOKEN, {
                expiresIn: "2m",
            });
        });
        // verify confirm email link token
        this.verifyConfirmLinkToken = (token, id) => __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, jsonwebtoken_1.verify)(token, process.env.CONFIRM_EMAIL_TOKEN);
            // find user by id and set isVerified to true
            const user = yield authRepo.findUserById(data.user);
            console.log(user._id, "=", id);
            if ((user === null || user === void 0 ? void 0 : user._id.toString()) !== id)
                throw { msg: "invalid link" };
            yield authRepo.setIsVerifiedTrue(id);
            return user;
        });
        // create refresh token with 1 day validity
        this.createJwtRefreshToken = (user) => __awaiter(this, void 0, void 0, function* () {
            return (0, jsonwebtoken_1.sign)({ user }, process.env.JWT_REFRESH_TOKEN_SECRET, {
                expiresIn: "1d",
            });
        });
        // middleware function to verify access token
        this.verifyJwtToken = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const accessToken = (_a = req.headers["authorization"]) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
            console.log(accessToken);
            if (accessToken) {
                try {
                    (0, jsonwebtoken_1.verify)(accessToken, process.env.JWT_ACCESS_TOKEN_SECRET, (err, data) => {
                        if (err) {
                            res.status(403).json({ msg: "forbidden" });
                        }
                        else {
                            next();
                        }
                    });
                }
                catch (error) {
                    console.log(error);
                    throw { error };
                }
            }
        });
        // create new access token using refresh token
        this.createNewAccessToken = (data) => __awaiter(this, void 0, void 0, function* () {
            if (!data)
                return "RefreshToken not found";
            try {
                const isValidToken = yield (0, jsonwebtoken_1.verify)(data, process.env.JWT_REFRESH_TOKEN_SECRET);
                const user = yield authRepo.findUserById(isValidToken.user);
                if (!user)
                    return "Unauthorized";
                const id = user === null || user === void 0 ? void 0 : user._id.toString();
                return (0, jsonwebtoken_1.sign)({ id }, process.env.JWT_ACCESS_TOKEN_SECRET, {
                    expiresIn: "30s",
                });
            }
            catch (error) {
                throw { error };
            }
        });
    }
}
exports.jwtOptions = jwtOptions;
//# sourceMappingURL=jwtConfig.js.map