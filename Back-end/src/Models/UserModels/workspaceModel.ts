import mongoose, { Types } from "mongoose";
import workspaceSchema from "./workspaceSchema";

export const userWorkspaceSchema = mongoose.model<workspaceSchema>("workspaceSchema",workspaceSchema,'workspace')