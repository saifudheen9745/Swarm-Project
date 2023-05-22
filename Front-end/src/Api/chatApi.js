import useAxiosPrivate from "../Hooks/useAxiosPrivate";

const chatApi = ()=>{
    const axiosPrivate = useAxiosPrivate()
    const getAChat = async (projectId)=>{
        try {
           
            return axiosPrivate.get(`/chat/create/${projectId}`)
        } catch (error) {
            throw{error}
        }
    }

    const sentMessage = async (messageObj)=>{
        try {
            return axiosPrivate.post('/chat/send',messageObj)
        } catch (error) {
            throw{error}
        }
    }

    return {getAChat,sentMessage}
}

export default chatApi