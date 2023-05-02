import useAxiosPrivate from "../Hooks/useAxiosPrivate";

const taskApi = () => {
  const axiosPrivate = useAxiosPrivate();
  const addTask = async (details) => {
    try {
      console.log("insideapi", details);
      
      return await axiosPrivate.post("/task/create", details);
    } catch (error) {
      console.log("Error while adding new Task");
      if (error.response.data.error.msg) throw error.response.data.error.msg;
      throw { error };
    }
  };
  

  const getAllTaskOfAProject = async(projectId)=>{
    try {
      return await axiosPrivate.get(`/task/${projectId}`)
    } catch (error) {
      console.log(error);
    }
  }


  const updateTaskStatus = async (userId,taskId,status)=>{
    try {
      return await axiosPrivate.patch(`/task/updatestatus`,{userId,taskId,status})
    } catch (error) {
      throw{error}
    }
  }

  const addComment = async (commentDetails)=>{
    try {
      return await axiosPrivate.post('/task/addcomments',commentDetails)
    } catch (error) {
      throw{error}
    }
  }

  const getDetailsOfATask = async (taskId)=>{
    try {
      return await axiosPrivate.get(`/task/comments/${taskId}`)
    } catch (error) {
      throw{error}
    }
  }

  const deleteTaskFromDb = async (taskId)=>{
    try {
      return await axiosPrivate.delete(`/task/${taskId}`)
    } catch (error) {
      throw{error}
    }
  }
  return {
    deleteTaskFromDb,
    addComment,
    updateTaskStatus,
    getDetailsOfATask,
    addTask,
    getAllTaskOfAProject
  };
};

export default taskApi;
