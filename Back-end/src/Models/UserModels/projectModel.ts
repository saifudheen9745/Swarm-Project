import mongoose from "mongoose";
import projectSchema from "./projectSchema";

export const userProjectSchema:any = mongoose.model<projectSchema>("projectSchema",projectSchema,'projects')