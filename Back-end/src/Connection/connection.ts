import mongoose from "mongoose";
import { MyConnectOptions } from "../Types/dbConnection.types";

const dbOptions:MyConnectOptions = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}


export const ConnectToDatabase = ()=>{
    mongoose.connect('mongodb+srv://saifudheen:saifu123@cluster0.ddiqrrn.mongodb.net/SWARM?retryWrites=true&w=majority',dbOptions).then(()=>{
        console.log("Database Swarm connection success");
    }).catch((err)=>{
        console.log(`Database error: ${err}`);
    })
}
