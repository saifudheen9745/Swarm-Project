"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authControllers_1 = require("../../Controllers/UserControllers/authControllers");
const jwtConfig_1 = require("../../JwtConfig/jwtConfig");
const jwt = new jwtConfig_1.jwtOptions();
const { verifyJwtToken } = jwt;
const Router = express_1.default.Router();
//LoginRoutes
Router.post("/", authControllers_1.userLogin);
Router.post("/googlelogin", authControllers_1.userLoginWithGoogle);
//RegisterRoutes
Router.post("/register", authControllers_1.userRegistration);
Router.post("/googleregister", authControllers_1.userRegistrationWithGoogle);
//jwtNewAceesTokenRoute
Router.get("/token", authControllers_1.getNewAcessToken);
//EmailVerification
Router.post("/confirmation", authControllers_1.emailVerification);
Router.post("/resendconfirmationmail", authControllers_1.resentConfirmationMail);
//CreateJwtTokenForOtpRoute
Router.post("/otptoken", authControllers_1.createTokenForOtpAuth);
//UserForgotPasswordRoute
Router.post("/getotpforpasswordchange", authControllers_1.sentOtpMailForPasswordChange);
Router.post("/verifyotpforpasswordchange", authControllers_1.verifyOtpForPasswordChange);
Router.post("/updatepassword", authControllers_1.updateUserPassword);
//Number check
Router.post("/checkmobilenumber", authControllers_1.checkIsValidNumber);
Router.get('/getuser/:userId', authControllers_1.getUserDetails);
Router.post("/checking", verifyJwtToken, (req, res) => {
    console.log("entering request");
    res.status(200).json({ msg: "working" });
});
Router.post('/edituser', authControllers_1.editUserDetails);
Router.post('/updateuserpassword', authControllers_1.updateUserPasswordWithoutOtp);
exports.default = Router;
//# sourceMappingURL=authRoute.js.map