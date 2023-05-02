import useAxiosPrivate from "../Hooks/useAxiosPrivate";

const projectApi = () => {

  const axiosPrivate = useAxiosPrivate()

  const createProject = async (projectDetails) => {
    try {
      return await axiosPrivate.post("/project/create", projectDetails);
    } catch (error) {
      throw{msg:error.response.data.error.error.msg}
    }
  };

  const fetchAProjectDetails = async (projectId) => {
    try {
      return await axiosPrivate.get(`/project/details/${projectId}`);
    } catch (error) {
      throw{msg:error.response.data.error.error.msg}
    }
  };

  const fetchAllProjects = async (workspaceId) => {
    try {
      return await axiosPrivate.get(`/project/${workspaceId}`);
    } catch (error) {
      throw{msg:error.response.data.error.error.msg}
    }
  };

  const getRegisterdProjectMembers = async (projectId) => {
    try {
      const {data} = await axiosPrivate.get(`/project/members/${projectId}`);
      return data
    } catch (error) {
      console.error("Error from getRegisterdProjectMembers api ",error);
      throw {error}
    }
  }

  return {createProject,fetchAllProjects,fetchAProjectDetails,getRegisterdProjectMembers};
};

export default projectApi;
