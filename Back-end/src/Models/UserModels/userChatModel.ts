import { model } from "mongoose";
import chatSchema from "./chatSchema";


export const userChatModel:any = model<chatSchema>("chatSchema",chatSchema,'chats')