import { Request, Response } from "express";
import { authHelpers } from "../../Helpers/User/authHelpers";
import { jwtOptions } from "../../JwtConfig/jwtConfig";
import { sentResetPasswordMail } from "../../Verification/Email/passwordResetMailer";

const jwt = new jwtOptions();
const { createJwtAccessToken, createJwtRefreshToken, createNewAccessToken } =
  jwt;

const userAuthHelpers = new authHelpers();
const {
  doSignUp,
  doLogin,
  sentVerifyEmail,
  generateLink,
  verifyEmail,
  confirmUserWithNumber,
  doSignUpWithGoogle,
  doLoginWithGoogle,
  generateOtp,
  verifyOtp,
  updatePassword,
  checkEmailValidity,
  getEmailWithId,
  getUserWithNumber,
  getUserDetailsWithId,
  editUserDetailsHelpers,
  updateUserPasswordHelper
} = userAuthHelpers;

export const userRegistration = async (req: Request, res: Response) => {
  try {
    const response = await doSignUp(req.body);
    const verifyLink: string = await generateLink({
      id: response._id.toString(),
    });
    const mailResponse = sentVerifyEmail({
      email: response.email,
      link: verifyLink,
    });
    res.status(200).json({ UserCreated: true, Mail: mailResponse });
  } catch (error: any) {
    console.log(error);
    
    res.status(401).json(error);
  }
};

export const userRegistrationWithGoogle = async (
  req: Request,
  res: Response
) => {
  try {
    const response: any = await doSignUpWithGoogle(req.body);
    const accessToken: string = await createJwtAccessToken(
      response._id.toString()
    );
    const refreshToken: string = await createJwtRefreshToken(
      response._id.toString()
    );
    res.cookie("jwtRefreshToken", refreshToken, { httpOnly: true });

    res.status(200).json({
      accessToken,
      userId: response._id.toString(),
      name: response.fname,
      email: response.email,
    });
  } catch (error) {
    console.log(error);
    
    res.status(401).json(error);
  }
};

export const userLogin = async (req: Request, res: Response) => {
  try {
    const response: any = await doLogin(req.body);
    const accessToken: string = await createJwtAccessToken(
      response._id.toString()
    );

    const refreshToken: string = await createJwtRefreshToken(
      response._id.toString()
    );
    
    res.cookie("jwtRefreshToken", refreshToken, {
      httpOnly: true,
    
    });

    res.status(200).json({
      accessToken,
      userId: response._id.toString(),
      name: response.fname,
      email: response.email,
    });
  } catch (error: any) {
    console.log(error);
    
    res.status(401).json(error);
  }
};

export const userLoginWithGoogle = async (req: Request, res: Response) => {
  try {
    const response: any = await doLoginWithGoogle(req.body);
    const accessToken: string = await createJwtAccessToken(
      response._id.toString()
    );
    const refreshToken: string = await createJwtRefreshToken(
      response._id.toString()
    );
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
  } catch (error) {
    res.status(401).json(error);
  }
};

export const getNewAcessToken = async (req: Request, res: Response) => {
  try {
    let newAccessToken = await createNewAccessToken(
      req.cookies.jwtRefreshToken
    );
   
    res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    res.status(401).json(error);
  }
};

export const emailVerification = async (req: Request, res: Response) => {
  try {

    const response = await verifyEmail(req.body.id, req.body.token);
    const accessToken: string = await createJwtAccessToken(
      response._id.toString()
    );

    const refreshToken: string = await createJwtRefreshToken(
      response._id.toString()
    );
    
    res.cookie("jwtRefreshToken", refreshToken, {
      httpOnly: true
    });

    res.status(200).json({
      verified:true,
      accessToken,
      userId: response._id.toString(),
      name: response.fname,
      email: response.email,
    });
  } catch (error) {
    res.status(401).json(error);
  }
};

export const createTokenForOtpAuth = async (req: Request, res: Response) => {
  try {
    const response: any = await confirmUserWithNumber(req.body);
    const accessToken: string = await createJwtAccessToken(
      response._id.toString()
    );
    const refreshToken: string = await createJwtRefreshToken(
      response._id.toString()
    );
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
  } catch (error) {
    res.status(401).json(error);
  }
};

export const sentOtpMailForPasswordChange = async (
  req: Request,
  res: Response
) => {
  try {
    const response: any = await checkEmailValidity(req.body.email);
    const otp: any = await generateOtp(req.body.email);
    const mailResponse = await sentResetPasswordMail(req.body.email, otp.otp);
    res.status(200).json(mailResponse);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const verifyOtpForPasswordChange = async (
  req: Request,
  res: Response
) => {
  try {
    const response: any = verifyOtp(req.body.otp);
    res.status(200).json({ otpVerified: true });
  } catch (error) {
    res.status(401).json(error);
  }
};

export const updateUserPassword = async (req: Request, res: Response) => {
  try {
    const response: any = await updatePassword(req.body);
    res.status(200).json({ passwordChanged: true });
  } catch (error) {
    res.status(401).json(error);
  }
};

export const resentConfirmationMail = async (req: Request, res: Response) => {
  try {
    const response: any = await getEmailWithId(req.body.userId);
    if (response) {
      const verifyLink: string = await generateLink({
        id: req.body.userId,
      });
      const mailResponse = await sentVerifyEmail({
        email: response.email,
        link: verifyLink,
      });
      res.status(200).json({ Mail: mailResponse });
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

export const checkIsValidNumber = async (req: Request, res: Response) => {
  try {
    const response: any = await getUserWithNumber(req.body.number);
    res.status(200).json({ numberVerified: true, user: response });
  } catch (error) {
    console.log(error);

    res.status(401).json(error);
  }
};

export const getUserDetails = async (req: Request, res: Response)=>{
  try {
    const dbResponse = await getUserDetailsWithId(req.params.userId)
    res.status(200).json(dbResponse)
  } catch (error) {
    res.status(401).json(error)
  }
}

export const editUserDetails = async (req: Request, res: Response)=>{
  try {
    const dbResponse = await editUserDetailsHelpers(req.body.userDetails)
    res.status(200).json({updated:true})
  } catch (error) {
    res.status(401).json(error)
  }
}

export const updateUserPasswordWithoutOtp = async(req: Request, res: Response)=>{
  try {
    const dbResponse = await updateUserPasswordHelper(req.body.passDetails)
    res.status(200).json({updated:true})
  } catch (error) {
    res.status(401).json(error)
  }
}
