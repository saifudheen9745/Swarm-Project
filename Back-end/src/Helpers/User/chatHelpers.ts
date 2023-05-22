import { chatRepository } from "../../Repostory/UserRepository/chatRepository";

const {createAChatInDb,saveAMessageInDb} = new chatRepository()


export class chatHelpers{
    async createAChat(projectId:string){
        try {
            return await createAChatInDb(projectId)
        } catch (error) {
            throw{error}
        }
    }

    async sendAChat(messageObj:any){
        try {
            return await saveAMessageInDb(messageObj)
        } catch (error) {
            throw{error}
        }
    }
}