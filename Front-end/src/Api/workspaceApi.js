import useAxiosPrivate from "../Hooks/useAxiosPrivate";

const workspaceApi = () => {
  const axiosPrivate = useAxiosPrivate();

  const createWorkspace = async (workspaceData) => {
    try {
      return await axiosPrivate.post("/workspace/create", workspaceData);
    } catch (error) {
      throw{error}
    }
  };

  const getWorkspaces = async (userId,email) => {
    try {
        return await axiosPrivate.post(`/workspace`,{userId,email})
    } catch (error) {
        throw{error}
    }
  }

  const getSelectedWorkspace = async(workspaceId)=>{
    try {
      return await axiosPrivate.get(`/workspace/selectedone/${workspaceId}`)
    } catch (error) {
      throw{error}
    }
  }

  const sentVerificationMailToMembers = async(userEmails,workspaceId) => {
    try {
      console.log(userEmails,workspaceId);
      return await axiosPrivate.post('/workspace/sentverifymail',{userEmails,workspaceId},)
    } catch (error) {
      throw{error}
    }
  }

  const verifyWorkspaceInvitationMail = async(wokspaceId,encMail,choise) => {
    try {
      console.log("from api",wokspaceId,encMail,choise);
      const {data} = await axiosPrivate.get(`workspace/verifyinvitationmail/${wokspaceId}/${encMail}/${choise}`)
      return data
    } catch (error) {
      throw{msg:error.response.data.error.error.msg}
    }
  }
  

  return { createWorkspace, getWorkspaces, sentVerificationMailToMembers, verifyWorkspaceInvitationMail, getSelectedWorkspace };
};

export default workspaceApi;
