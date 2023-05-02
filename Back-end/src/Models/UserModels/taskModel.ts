import { Schema,model } from "mongoose";

const taskSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    priority:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    images:{
        type:Array,
    },    
    assignee:{
        type:Array,
    },  
    reporter:{
        type:String,
        required:true,
    },
    projectId:{
        type:String,
        required:true,    
    },   
    comments:{
        type:Array,
    },
    status:{
        type:String,
        default:"Initiated"
    }    
})

//export const userTaskSchema:any = model("taskSchema",taskSchema,'tasks');
export const  userTaskSchema =  model ('tasks',taskSchema);