import { authRepository } from "../../Repostory/UserRepository/authRepository.service";
import projectRepository from "../../Repostory/UserRepository/projectRepository.service";
const {findUserByMobileOrEmail} = new authRepository()
const {
  createAProjectInDb,
  fetchAllProjectsFromDb,
  fetchAProjectDetailsFromDb,
  getMembersDetails
} = new projectRepository();
class projectHelpers {
  async createAProject(projectDetails: any) {
    try {
      return await createAProjectInDb(projectDetails);
    } catch (error) {
      throw { error };
    }
  }

  async fetchAllProjects(workspaceId: string) {
    try {
      return await fetchAllProjectsFromDb(workspaceId);
    } catch (error) {
      throw { error };
    }
  }

  async fetchAProjectDetails(projectId: string) {
    try {
      return await fetchAProjectDetailsFromDb(projectId);
    } catch (error) {
      throw { error };
    }
  }

  async getAllMembers(projectId: string) {
    try {
      const response = await getMembersDetails(projectId);
      const registeredUsers: any[] = await Promise.all(
        response?.members.map((member: any) => findUserByMobileOrEmail(member))
      );
      const filteredUsers = registeredUsers.filter((user) => user);
      const userDetails = filteredUsers.map((user) => ({
        _id: user._id,
        name: user.fname,
        email: user.email,
        mobile: user.mobile,
      }));
      return { members: response?.members, registerdMembers: userDetails };
    } catch (error) {
      throw { error };
    }
  }
}

export default projectHelpers;
