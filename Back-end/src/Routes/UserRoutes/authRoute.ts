import express, { Request, Response } from "express";
import {
  userLogin,
  userRegistration,
  getNewAcessToken,
  emailVerification,
  createTokenForOtpAuth,
  userRegistrationWithGoogle,
  userLoginWithGoogle,
  sentOtpMailForPasswordChange,
  verifyOtpForPasswordChange,
  updateUserPassword,
  resentConfirmationMail,
  checkIsValidNumber,
  getUserDetails,
  editUserDetails,
  updateUserPasswordWithoutOtp
} from "../../Controllers/UserControllers/authControllers";

import { jwtOptions } from "../../JwtConfig/jwtConfig";

const jwt = new jwtOptions();
const { verifyJwtToken } = jwt;

const Router = express.Router();

//LoginRoutes
Router.post("/", userLogin);
Router.post("/googlelogin", userLoginWithGoogle);
//RegisterRoutes
Router.post("/register", userRegistration);
Router.post("/googleregister", userRegistrationWithGoogle);
//jwtNewAceesTokenRoute
Router.get("/token", getNewAcessToken);
//EmailVerification
Router.post("/confirmation", emailVerification);
Router.post("/resendconfirmationmail", resentConfirmationMail);
//CreateJwtTokenForOtpRoute
Router.post("/otptoken", createTokenForOtpAuth);
//UserForgotPasswordRoute
Router.post("/getotpforpasswordchange", sentOtpMailForPasswordChange);
Router.post("/verifyotpforpasswordchange", verifyOtpForPasswordChange);
Router.post("/updatepassword", updateUserPassword);
//Number check
Router.post("/checkmobilenumber", checkIsValidNumber);
Router.get('/getuser/:userId',getUserDetails)

Router.post("/checking", verifyJwtToken, (req: Request, res: Response) => {
  console.log("entering request");

  res.status(200).json({ msg: "working" });
});

Router.post('/edituser',editUserDetails)

Router.post('/updateuserpassword',updateUserPasswordWithoutOtp)

export default Router;
