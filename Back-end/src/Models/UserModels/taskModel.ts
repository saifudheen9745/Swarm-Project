import {model } from "mongoose";
import taskSchema from "./taskSchema";

//export const userTaskSchema:any = model("taskSchema",taskSchema,'tasks');
export const  userTaskSchema =  model <taskSchema>('tasks',taskSchema);