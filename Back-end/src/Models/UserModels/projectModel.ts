import mongoose, { Types } from "mongoose";

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    theme:{
        type:String,
        required:true
    },
    workspace:{
        type:Types.ObjectId,
        required:true
    },
    members:{
        type:Array,
        default:[]
    },
    to:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:false
    },
    pending:{
        type:Boolean,
        default:false
    }
})

export const userProjectSchema:any = mongoose.model("projectSchema",projectSchema,'projects')