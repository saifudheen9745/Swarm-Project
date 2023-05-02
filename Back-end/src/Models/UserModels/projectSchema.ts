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

interface projectSchema{
    name:String,
    description:String,
    theme:String,
    workspace:Types.ObjectId,
    members:Array<any>,
    to:String,
    from:String,
    status:Boolean,
    pending:Boolean,
    createdAt:Date,
    updatedAt:Date,
    createdBy:String,
    updatedBy:String

}

export default projectSchema