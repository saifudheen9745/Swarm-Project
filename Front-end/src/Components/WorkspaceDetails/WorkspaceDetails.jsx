import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { useSelector } from "react-redux";
import { userReducer } from "../../Redux/Slices/userSlice";
import workspaceApi from "../../Api/workspaceApi";
import projectApi from "../../Api/projectApi";
import { IoPersonRemove } from "react-icons/io5";
import CountUp from "react-countup";
import CreateWorkspace from "../Modal/CreateWorkspace";
import AddMembersToWorkspace from "../Modal/AddMembersToWorkspace";
import { useNavigate } from "react-router-dom";

function WorkspaceDetails() {
  const navigate = useNavigate();
  const { getWorkspaces, getSelectedWorkspace } = workspaceApi();
  const { userId, email } = useSelector(userReducer);
  const { fetchAllProjects, fetchAProjectDetails } = projectApi();

  const [searchedProjects,setSearchedProjects] = useState()
  const [searchedMembers,setSearchedMembers] = useState()

  const [workspaceList, setWorkspaceList] = useState(false);
  const [workspaces, setWorkspaces] = useState();
  const [selectedWorkspaces, setSelectedWorkspaces] = useState();
  const [workspaceType, setWorkspaceType] = useState();
  const [projects, setProjects] = useState();
  const [selectedWorkspace, setSelectedWorkspace] = useState();
  const [showModal, setShowModal] = React.useState(false);
  const [workspaceAccordion, setWorkspaceAccordion] = useState({
    shared: false,
    owned: false,
  });

  const getAllWorkspaces = async () => {
    try {
      const response = await getWorkspaces(userId, email);
      setWorkspaces(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllWorkspaces();
  }, []);

  const handleProjectClick = async (projectId) => {
    try {
      navigate("/project", {
        state: { projectId, workspaceType },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleWorkspaceList = () => {
    setWorkspaceList(!workspaceList);
    workspaceAccordion.owned = false;
    workspaceAccordion.shared = false;
  };

  

  const handleWorkspaceClick = async (workspaceId,type) => {
    try {
      const workspace = await getSelectedWorkspace(workspaceId);
      setSelectedWorkspace(workspace.data);
      setWorkspaceType(type);
      setSearchedMembers(workspace?.data?.members);
      const projects = await fetchAllProjects(workspaceId);
      setProjects(projects.data);
      setSearchedProjects(projects.data)
      setWorkspaceList(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProjectSearch = (e)=>{
    let projectRegex = new RegExp(e.target.value)
    const response = projects.filter((project)=>projectRegex.test(project.name))
    setSearchedProjects(response)
  }

  const handleMemberSearch = (e)=>{
    let memberRegex = new RegExp(e.target.value)
    const response = selectedWorkspace?.members?.filter((member)=>memberRegex.test(member?.email))
    console.log(response);
    setSearchedMembers(response)
  }

  return (
    <div className="dark:bg-slate-800 bg-gray-100 lg:p-4 h-screen overflow-y-auto w-full">
      <div className="flex flex-col lg:flex-row p-5 bg-gray-50  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div className="w-full flex md:flex-row flex-col  items-center">
          {selectedWorkspace ? (
            <>
              <p className="flex items-end gap-3">
                <span className="dark:text-white text-4xl">
                  {selectedWorkspace.name}
                </span>{" "}
                <span
                  onClick={handleWorkspaceList}
                  className="hover:cursor-pointer dark:text-white"
                >
                  <AiFillEdit />
                </span>
              </p>
            </>
          ) : (
            <p
              onClick={handleWorkspaceList}
              className="dark:text-gray-100 cursor-pointer text-xl md:text-4xl shadow-2xl font-extrabold"
            >
              Choose a Workspace
            </p>
          )}
        </div>

        {!workspaceList && (
          <div
            className={`${
              projects
                ? "flex flex-col md:flex-row mt-5 gap-3 lg:gap-5 lg:mt-0 w-full  justify-around lg:w-4/6"
                : "hidden"
            }`}
          >
            <div className="p-2 mt-2 md:mt-0 md:p-6 gap-3 dark:text-white bg-white dark:bg-transparent w-auto shadow-xl dark:shadow-md dark:shadow-blue-700  flex justify-center items-center  ">
              <h1 className="text-lg font-thin md:text-xl md:font-semibold">
                Total
              </h1>
              <h1 className="text-blue-500 md:text-4xl md:font-bold">
                <CountUp end={projects ? projects.length : ""} duration={3} />
              </h1>
            </div>
            <div className="dark:text-white md:p-6 bg-white dark:bg-transparent flex justify-center items-center gap-3  p-2 w-auto shadow-xl dark:shadow-md dark:shadow-yellow-300">
              <h1 className="text-lg font-thin md:text-xl md:font-semibold">
                Pending
              </h1>
              <h1 className="text-yellow-300 md:text-4xl md:font-bold">30</h1>
            </div>
            <div className="dark:text-white md:p-6 bg-white dark:bg-transparent flex justify-center items-center gap-3  p-2 w-auto shadow-xl dark:shadow-md dark:shadow-green-500">
              <h1 className="text-lg font-thin md:text-xl md:font-semibold">
                Completed
              </h1>
              <h1 className="text-green-500 md:text-4xl md:font-bold">30</h1>
            </div>
          </div>
        )}
      </div>
      {workspaceList && (
        <div className="w-full flex mt-10 flex-col gap-4 justify-center items-center ">
          <div className="w-full md:w-1/2  rounded-t-xl border-black bg-gradient-to-tr from-blue-300 to-green-400 dark:border-white">
            <div
              className="w-full flex justify-center hover:cursor-pointer py-2"
              onClick={() =>
                setWorkspaceAccordion({
                  owned: false,
                  shared: !workspaceAccordion.shared,
                })
              }
            >
              <p className="text-lg md:text-2xl dark:text-white font-semibold ">
                SHARED WORKSPACE
              </p>
            </div>
            {workspaceAccordion.shared && (
              <div
                className={` flex flex-col justify-center mt-5 max-h-72 px-5 pb-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-600`}
              >
                {workspaces?.sharedWorkspaces?.map((shared) => {
                  return (
                    <div className="border text-center dark:border-black rounded-lg py-3 hover:cursor-pointer hover:bg-gray-800">
                      <p
                        key={shared._id}
                        onClick={() => handleWorkspaceClick(shared._id,"Shared")}
                        className="dark:text-gray-50000 md:text-2xl"
                      >
                        {shared.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 rounded-t-xl border-black bg-gradient-to-tr from-blue-300 to-green-400 dark:border-white">
            <div
              className="w-full flex justify-center hover:cursor-pointer py-2"
              onClick={() =>
                setWorkspaceAccordion({
                  shared: false,
                  owned: !workspaceAccordion.owned,
                })
              }
            >
              <p className="text-lg md:text-3xl dark:text-white font-semibold ">
                OWNED WORKSPACE
              </p>
            </div>
            {workspaceAccordion.owned && (
              <div
                className={` flex flex-col gap-2 justify-center mt-5 max-h-72 px-5 pb-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-600`}
              >
                {workspaces?.ownedWorkspaces?.map((owned) => {
                  return (
                    <div className="border text-center border-white rounded-lg py-3 hover:cursor-pointer hover:bg-gray-800">
                      <p
                        onClick={() => handleWorkspaceClick(owned._id,"Owned")}
                        key={owned._id}
                        className="dark:text-gray-200 md:text-2xl"
                      >
                        {owned.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
      {
        <div
          className={`${
            projects
              ? "hidden"
              : workspaceList
              ? "hidden"
              : "w-full h-96 flex justify-center items-center"
          }`}
        >
          <div className="">
            <img
              className="w-20 md:w-28 md:mt-24 animate-bounce"
              src="./Images/LOGO.png"
              alt=""
            />
          </div>
        </div>
      }
      {!workspaceList && (
        <div className={`${projects ? "" : "hidden"}`}>
          <div
            className={`${
              selectedWorkspace
                ? "flex justify-end items-center  mt-5"
                : "hidden"
            }`}
          >
            <AddMembersToWorkspace data={selectedWorkspace?._id} />
          </div>
          <div className="p-3 mt-0 w-full lg:flex lg:gap-3 lg:justify-between">
            <div className=" lg:w-2/5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mb-5  lg:mb-0 ">
              <div className="p-2">
                <form>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                    onChange={handleProjectSearch}
                      type="search"
                      id="default-search"
                      class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Mockups, Logos..."
                      required
                    />
                    {/* <button
                      type="submit"
                      class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button> */}
                  </div>
                </form>
              </div>
              <p className="mb-4 mt-4 border rounded-xl dark:bg-transparent dark:from-transparent dark:to-transparent bg-gradient-to-r from-gray-200 to-blue-300 border-blue-200 p-3 text-center text-xl font-semibold md:font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
                PROJECTS
              </p>

              <div className=" lg:my-4 shadow-2xl rounded-lg p-5 overflow-y-auto scrollbar-hide max-h-80 lg:max-h-96">
                <ul className="max-w-full">
                  {searchedProjects?.map((project) => {
                    return (
                      <li
                        key={project._id}
                        className="pb-3 dark:bg-transparent dark:from-transparent dark:to-transparent bg-gradient-to-tr from-green-200 to-blue-200 rounded-2xl  border-cyan-900 mb-2 sm:pb-4 hover:dark:bg-slate-700 p-2 hover:bg-gray-300"
                      >
                        <div className="flex items-center space-x-4 hover:transform hover:-translate-y-1 transition duration-300">
                          <div className="flex-shrink-0">
                            <div
                              style={{ background: project?.theme }}
                              className={`w-8 h-8 rounded-full flex items-center justify-center`}
                            >
                              {project?.name?.[0]}
                            </div>
                          </div>
                          <button
                            className=""
                            onClick={() => handleProjectClick(project._id)}
                          >
                            <p className="lg:text-lg font-medium text-gray-900 truncate dark:text-white">
                              {project.name}
                            </p>
                          </button>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            {project?.status}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className=" lg:w-3/5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:mt-5 mb-36  lg:mb-0 ">
              <div className="p-2">
                <form>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                    onChange={handleMemberSearch}
                      type="search"
                      id="default-search"
                      class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Mockups, Logos..."
                      required
                    />
                    {/* <button
                      type="submit"
                      class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button> */}
                  </div>
                </form>
              </div>
              <p className="mb-4 mt-4 border rounded-xl dark:bg-transparent dark:from-transparent dark:to-transparent bg-gradient-to-r from-gray-200 to-blue-300 border-blue-200 p-3 text-center text-xl font-semibold md:font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
                MEMBERS
              </p>
              <div className="lg:my-4 shadow-2xl rounded-lg p-5 overflow-y-auto scrollbar-hide max-h-80 lg:max-h-96">
                <ul className=" divide-gray-200 dark:divide-gray-700 p-5">
                  {searchedMembers?.map((member) => {
                    return (
                      <li
                        key={member.email}
                        className="pb-3 mb-3 sm:pb-4 dark:bg-transparent dark:from-transparent dark:to-transparent bg-gradient-to-tr from-green-200 to-blue-200 rounded-2xl hover:dark:bg-slate-700 p-2 hover:bg-gray-300"
                      >
                        <div className="flex items-center space-x-4 hover:transform hover:-translate-y-1 transition duration-300">
                          <div className="flex-shrink-0">
                            <div
                              className={`${
                                member.status == "accepted"
                                  ? "bg-green-500"
                                  : member.status == "pending"
                                  ? "bg-yellow-400"
                                  : member.status == "declined"
                                  ? "bg-red-400"
                                  : ""
                              } w-8 h-8 rounded-full flex items-center  justify-center`}
                            >
                              {member.email[0]}
                            </div>
                          </div>
                          <div className="flex justify-between w-full text-sm">
                            <p className=" text-xl text-gray-900 truncate dark:text-white">
                              {member.email}
                            </p>
                            <button>
                              <IoPersonRemove className="text-red-900 text-xl hidden" />
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
          
    </div>
  );
}

export default WorkspaceDetails;
