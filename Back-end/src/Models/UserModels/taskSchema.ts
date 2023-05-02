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

interface taskSchema{
    name:string,
    priority:string,
    description:string,
    from:string,
    to:string,
    images:Array<any>,
    assignee:Array<any>,
    reporter:string,
    projectId:string,
    comments:Array<any>,
    status:string
}

export default taskSchema