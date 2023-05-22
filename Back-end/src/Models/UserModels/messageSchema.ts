import { Schema,Types,model } from "mongoose";

const messageSchema = new Schema({
    chatId:{
        type:Types.ObjectId
    },
    sender:{
        type:Types.ObjectId,
        ref:'users'
    },
    message:{
        type:String,
        required:true
    },

},{timestamps:true})

interface messageSchema{
    chatId:Types.ObjectId,
    sender:Types.ObjectId,
    message:string
}

export default messageSchema