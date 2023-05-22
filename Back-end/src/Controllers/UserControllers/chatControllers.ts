import { Request, Response } from "express";
import { chatHelpers } from "../../Helpers/User/chatHelpers";
const {createAChat,sendAChat} = new chatHelpers()

export const  createChat = async(req: Request, res: Response)=>{
    try {
        const dbResponse = await createAChat(req.params.projectId)
       
        
        res.status(200).json(dbResponse?.[0])
    } catch (error) {
        res.status(401).json(error)
    }
}

export const sendMessage = async(req: Request, res: Response)=>{
    try {
       
        const dbResponse = await sendAChat(req.body)
        res.status(200).json(dbResponse)
    } catch (error) {
        console.log(error);
        
        res.status(401).json(error)
    }
}