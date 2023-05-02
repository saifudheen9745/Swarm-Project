import { Types } from "mongoose";
import {
  userGoogleSchema,
  userOtpSchema,
  userRegisterSchema,
} from "../../Models/UserModels/authModel";
import {
  updatePasswordDetails,
  userGoogleLoginInterface,
  userGoogleRegInterface,
  userLoginInterface,
  userRegInterface,
} from "../../Types/user.types";
import { compare } from "bcrypt";

export class authRepository {
  async registerUser(regDetails: userRegInterface) {
    try {
      let { fname, lname, email, mobile, password } = regDetails;
      let userRegisteredAlready = await userRegisterSchema.find({
        email: email,
      });
      if (userRegisteredAlready.length != 0) {
        throw { msg: "User is already regitered" };
      }
      return await userRegisterSchema.create({
        fname,
        lname,
        email,
        mobile,
        password,
      });
    } catch (error) {
      throw { error };
    }
  }

  async loginUser(reqDetails: userLoginInterface) {
    try {
      const { email, password } = reqDetails;
      const userFound = await userRegisterSchema.find({
        $or: [{ email: { $eq: email } }, { mobile: { $eq: email } }],
      });
      if (userFound.length == 0) throw { msg: "Invalid credentials" };
      const passwordFromDb: any = userFound[0]?.password;
      const isValidUser: any = await compare(password, passwordFromDb);
      if (isValidUser) {
        if (!userFound[0].isVerified) {
          throw { msg: "Please verify email to login", userVerified: false };
        } else {
          return userFound[0];
        }
      } else {
        throw { msg: "Invalid credentials" };
      }
    } catch (error) {
      throw { error };
    }
  }

  async loginUserWithNumber(loginDetails: any) {
    try {
      const userFound = await userRegisterSchema.find({
        mobile: loginDetails.mobile,
      });
      if (userFound.length == 0) {
        throw { msg: "Mobile number is not registered" };
      } else {
        return userFound[0];
      }
    } catch (error) {
      throw { error };
    }
  }

  async findUserById(id: string) {
    try {
      const user: any = await userRegisterSchema.findById({ _id: id });

      return user;
    } catch (error: any) {
      if (error.kind == "ObjectId") {
        throw { error: { msg: "Invalid Link" } };
      } else {
        throw { error };
      }
    }
  }

  async findUserByIdForEmailVerification(id: string) {
    try {
      console.log(id);
      
      const user: any = await userRegisterSchema.findById({ _id: id });
      console.log("user from comfirm", user);

      if (!user) {
        throw { msg: "Invalid Link" };
      } else if (user?.isVerified) {
        throw { msg: "User already verified" };
      } else {
        return user;
      }
    } catch (error: any) {
      if (error.kind == "ObjectId") {
        throw { error: { msg: "Invalid Link" } };
      } else {
        throw { error };
      }
    }
  }

  async setIsVerifiedTrue(id: string) {
    try {
      return userRegisterSchema.updateOne(
        { _id: id },
        { $set: { isVerified: true } }
      );
    } catch (error) {
      throw { error };
    }
  }

  async registerGoogleUser({ fname, email }: userGoogleRegInterface) {
    try {
      const duplicateUser = await userGoogleSchema.find({ email: email });
      if (duplicateUser.length != 0) {
        throw {
          msg: "This email is already registered, Please use another email",
        };
      } else {
        return await userGoogleSchema.create({ fname, email });
      }
    } catch (error) {
      throw { error };
    }
  }

  async loginGoogleUser({ email }: userGoogleLoginInterface) {
    try {
      const user = await userRegisterSchema.find({ email: email });
      if (user.length == 0) {
        throw { msg: "Please register with google first" };
      }
      return user[0];
    } catch (error) {
      throw { error };
    }
  }

  async saveOtpInDb(otp: string, email: string) {
    try {
      return await userOtpSchema.create({ otp, email });
    } catch (error) {
      throw { error };
    }
  }

  async checkOtp(otp: string) {
    try {
      const validOtp = await userOtpSchema.find({ otp: otp });
      if (validOtp.length == 0) {
        throw { msg: "Invalid otp" };
      } else {
        await userOtpSchema.deleteOne({ otp: otp });
      }
      return validOtp[0]?.otp;
    } catch (error) {
      throw { error };
    }
  }

  async updatePasswordDb(updatePasswordDetails: updatePasswordDetails) {
    try {
      const { email, password } = updatePasswordDetails;
      return await userRegisterSchema.updateOne(
        { email: email },
        { $set: { password: password } }
      );
    } catch (error) {
      throw { error };
    }
  }

  async findUserByEmail(email: string) {
    try {
      const user = await userRegisterSchema.find({ email: email });
      if (user.length === 0) {
        throw { msg: "Email is not registered" };
      }
      if (!user[0].isVerified) {
        throw { msg: "You cannot change password before verifying your email" };
      }
      return { emailVerified: true };
    } catch (error) {
      throw { error };
    }
  }

  async findUserByNumber(number: string) {
    try {
      console.log(number);

      const user = await userRegisterSchema.find({ mobile: number });
      if (user.length === 0) {
        throw { msg: "Mobile is not registered" };
      } else {
        return user[0];
      }
    } catch (error) {
      throw { error };
    }
  }

  async getUserDetailsFromDb(userId:string){
    try {
      const user = await userRegisterSchema.find({_id:userId})
      return user?.[0]
    } catch (error) {
      throw{error}
    }
  }

  async findUserByMobileOrEmail(identifier:string){
    try {        
      
      return  await userRegisterSchema.findOne({$or: [{ email: identifier }, { mobile: identifier }],});
    } catch (error) {        
      throw {error}
    }
  }

  async editUserDetailsInDb(userDetails:any){
    try {

      return await userRegisterSchema.updateOne(
        { _id: userDetails.userId }, // filter for the document to update
        { $set: { fname:userDetails.fname, email:userDetails.email, mobile:userDetails.mobile } } // update operation to perform
      )
      
    } catch (error) {
      throw{error}
    }
  }

  async updateUserPassInDb(passDetails:any){
    try {
      return await userRegisterSchema.updateOne(
        {_id:passDetails.userId},
        {$set:{password:passDetails.newPass}}
      )
      
    } catch (error) {
      throw{error}
    }
  }
}
