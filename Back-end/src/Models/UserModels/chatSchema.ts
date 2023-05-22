import { Schema,Types,model } from "mongoose";

const chatSchema = new Schema({
    chatName:{
        type:String,
        trim:true
    },
    members:[{
        type:String,
    }],
    projectId:{
        type:Types.ObjectId,
       
    },
    latestMessage:{
        type:Types.ObjectId,
        ref:"messages",
        default:null
    }
    
},{
    timestamps:true
})

interface chatSchema {
    chatName:string,
    members:Array<any>,
    latestMessage:any,
}

export default chatSchema