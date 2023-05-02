import { Types } from "mongoose";

export interface taskInterface {
    name: string;
    priority: string;
    discription: string;
    from: string;
    to: string;
    image?: [];
    assignee?: any[];
    reporter: string;
    projectId: string;
    comments?: [];
}

const details:any = {
    assignee: ['123', '456', '789'].map(member => new Types.ObjectId(member))
    
}

export interface taskUpdateDetails {
    userId:string,
    taskId:string,
    status:string,
}