import mongoose, { Types } from "mongoose";

const workspaceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    theme:{
        type:String,
        required:true
    },
    master:{
        type:Types.ObjectId,
        required:true
    },
    members:{
        type:Array,
        default:[]
    },
    projects:{
        type:Array,
        default:[]
    }
})

interface workspaceSchema{
    name:String,
    theme:String,
    master:mongoose.Types.ObjectId,
    members:Array<any>,
    projects:Array<any>

}

export default workspaceSchema