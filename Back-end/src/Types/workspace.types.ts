import { Types } from "mongoose";

export interface workspaceDetailsInterface{
    name:string,
    theme:string,
    master:Types.ObjectId,
    members:[],
    projects:[]
}