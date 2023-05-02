import { Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";
import { authRepository } from "../Repostory/UserRepository/authRepository.service";
import { jwtPayloadInterface } from "../Types/user.types";

const authRepo = new authRepository();

export class jwtOptions {
  // create access token with 30 seconds validity
  createJwtAccessToken = async (user: string) =>
    sign({ user }, process.env.JWT_ACCESS_TOKEN_SECRET as string, {
      expiresIn: "30s",
    });

  // create confirm email link token with 1 minute validity
  createConfirmLinkToken = async (user: string) =>
    sign({ user }, process.env.CONFIRM_EMAIL_TOKEN as string, {
      expiresIn: "2m",
    });

  // verify confirm email link token
  verifyConfirmLinkToken = async (token: string, id: string) => {
    const data: any = await verify(
      token,
      process.env.CONFIRM_EMAIL_TOKEN as string
    );

    // find user by id and set isVerified to true
    const user = await authRepo.findUserById(data.user);
    console.log(user._id ,"=", id);
    
    if (user?._id.toString() !== id) throw { msg: "invalid link" };
    await authRepo.setIsVerifiedTrue(id);
    return user;
  };

  // create refresh token with 1 day validity
  createJwtRefreshToken = async (user: jwtPayloadInterface) =>
    sign({ user }, process.env.JWT_REFRESH_TOKEN_SECRET as string, {
      expiresIn: "1d",
    });

  // middleware function to verify access token
  verifyJwtToken = async (req: Request, res: Response, next: any) => {
    const accessToken = req.headers["authorization"]?.split(" ")[1];
    console.log(accessToken);
    
    if (accessToken) {
      try {
        verify(
          accessToken,
          process.env.JWT_ACCESS_TOKEN_SECRET as string,
          (err: any, data: any) => {
            if (err) {
              res.status(403).json({ msg: "forbidden" });
            } else {

              next();
            }
          }
        );
      } catch (error) {
        console.log(error);
        
        throw { error };
      }
    }
  };

  // create new access token using refresh token
  createNewAccessToken = async (data: string) => {
    if (!data) return "RefreshToken not found";
    try {
      const isValidToken: any = await verify(
        data,
        process.env.JWT_REFRESH_TOKEN_SECRET as string
      );
      const user = await authRepo.findUserById(isValidToken.user);
      if (!user) return "Unauthorized";
      const id: string = user?._id.toString();
      return sign({ id }, process.env.JWT_ACCESS_TOKEN_SECRET as string, {
        expiresIn: "30s",
      });
    } catch (error) {
      throw { error };
    }
  };
}
