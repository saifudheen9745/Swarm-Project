import mongoose from "mongoose";
import userRegSchema from "./userRegSchema";

export default mongoose.model<userRegSchema>("users", userRegSchema, "users");
