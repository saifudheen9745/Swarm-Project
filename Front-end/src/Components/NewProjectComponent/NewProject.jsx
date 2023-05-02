import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { SlRefresh } from "react-icons/sl";
import CreateWorkspace from "../Modal/CreateWorkspace";
import { CirclePicker } from "react-color";
import { themeReducer } from "../../Redux/Slices/themeSlice";
import workspaceApi from "../../Api/workspaceApi";
import { userReducer } from "../../Redux/Slices/userSlice";
import projectApi from "../../Api/projectApi";
import AddMembersToWorkspace from "../Modal/AddMembersToWorkspace";
import { invalidProjectForm } from "../ToastifyAlerts/ToastifyAlerts";
import { ToastContainer } from "react-toastify";
import swalAlerts from "../SwalAlerts/SwalAlerts";
// import useRealtimeDb from "../../Hooks/useRealtimeDb";

const NewProject = () => {
  // const {data} = useRealtimeDb()
  const { projectCreationSuccess } = swalAlerts();
  const { getWorkspaces ,getSelectedWorkspace } = workspaceApi();
  const { createProject } = projectApi();
  const dark = useSelector(themeReducer);
  const { userId } = useSelector(userReducer);
  const [toggleName, setToggleName] = useState("workspace");
  const [workspaces, setWorkSpaces] = useState();
  const [selectedWorkspaces, setSelectedWorkSpaces] = useState();
  const [rerender, setRerender] = useState(false);
  const navigate = useNavigate();
  const [projectDetails, setProjectDetails] = useState({
    workspace: "",
    name: "",
    description: "",
    theme: "",
    from: "",
    to: "",
    members: [],
  });

  const handleCheckboxClick = (e) => {
    const email = e.target.value;
    const index = projectDetails.members.indexOf(email);
    if (index === -1) {
      setProjectDetails((prevState) => ({
        ...prevState,
        members: [...prevState.members, email],
      }));
    } else {
      setProjectDetails((prevState) => ({
        ...prevState,
        members: [
          ...prevState.members.slice(0, index),
          ...prevState.members.slice(index + 1),
        ],
      }));
    }
  };

  const getAllWorkspaces = async () => {
    try {
      const response = await getWorkspaces(userId);
      setWorkSpaces(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMembersOfSelectedWorkspace = async(workspaceId)=>{
    try {
      const response = await getSelectedWorkspace(workspaceId)
      setSelectedWorkSpaces(response?.data?.members)
    } catch (error) {
      
    }
  }


  useEffect(() => {
    getAllWorkspaces();
  }, [rerender]);

  useEffect(() => {
    if (dark.dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const onFinish = async () => {
    try {
      const response = await createProject(projectDetails);
      projectCreationSuccess();
    } catch (error) {
      invalidProjectForm(error.msg)
    }
  };

  const [details, setDetails] = useState({
    color: "#fff",
  });

  const handleColorChange = (newColor) => {
    setDetails({ ...details, color: newColor.hex });
    setProjectDetails({ ...projectDetails, theme: newColor.hex });
  };

  return (
    <div className="dark:bg-slate-900 min-h-screen  dark:text-white text-slate-900 md:p-8 p-5 w-full">
      <div>
        <BsFillArrowLeftCircleFill
          className="text-4xl hover:text-slate-900  hover:bg-white hover:rounded-full cursor-pointer "
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
      <div className="text-center">
        <h1 className="mb-1 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-slate-200 text-center">
        From Idea to Reality
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 mt-3 dark:text-gray-400">
          {" "}
          Crafting a  {" "}
          <span className="text-orange-400 font-extrabold">Revolutionary </span> 
          Project That Will Change the Game
        </p>
      </div>

      <div className="flex justify-center items center ">
        <div className="w-5/6 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select tab
            </label>
            <select
              id="tabs"
              className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Select a workspace</option>
              <option>Add Project</option>
              <option>Enlist</option>
            </select>
          </div>
          <ul
            className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
            id="fullWidthTab"
            data-tabs-toggle="#fullWidthTabContent"
            role="tablist"
          >
            <li className="w-full">
              <button
                id="stats-tab"
                data-tabs-target="#stats"
                type="button"
                role="tab"
                aria-controls="stats"
                aria-selected="true"
                className={`inline-block w-full p-4 rounded-tl-lg  hover:bg-gray-100 focus:outline-none text-lg  dark:hover:bg-gray-600 ${
                  toggleName === "workspace"
                    ? "dark:bg-gray-900 bg-gray-300 "
                    : "dark:bg-gray-700 bg-gray-50"
                }`}
                value="workspace"
              >
                Select a workspace
              </button>
            </li>
            <li className="w-full">
              <button
                id="about-tab"
                data-tabs-target="#about"
                type="button"
                role="tab"
                aria-controls="about"
                aria-selected="false"
                className={`inline-block w-full p-4    hover:bg-gray-100 focus:outline-none text-lg  dark:hover:bg-gray-600 ${
                  toggleName === "project"
                    ? "dark:bg-gray-900 bg-gray-300 "
                    : "dark:bg-gray-700 bg-gray-50"
                }`}
              >
                Add Project
              </button>
            </li>
            <li className="w-full">
              <button
                id="faq-tab"
                data-tabs-target="#faq"
                type="button"
                role="tab"
                aria-controls="faq"
                aria-selected="false"
                className={`inline-block w-full p-4 rounded-tr-lg  hover:bg-gray-100 focus:outline-none text-lg  dark:hover:bg-gray-600 ${
                  toggleName === "enlist"
                    ? "dark:bg-gray-900 bg-gray-300 "
                    : "dark:bg-gray-700 bg-gray-50"
                }`}
              >
                Enlist
              </button>
            </li>
          </ul>
          <div
            id="fullWidthTabContent"
            className="border-t border-gray-300 dark:border-gray-600"
          >
            {/*Workspace ----------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <div
              className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800  ${
                toggleName === "workspace" ? "block" : "hidden"
              }`}
              id="stats"
              role="tabpanel"
              aria-labelledby="stats-tab"
            >
              {/* its the content of select a workspace */}
              <form action="" className="md:flex  justify-center">
                <div className="grid grid-cols-3 gap-10">
                  <div className="col-span-2">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      select a workspace
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) =>
                        setProjectDetails({
                          ...projectDetails,
                          workspace: e.target.value,
                        })
                      }
                    >
                      <option selected disabled>
                        Choose a Workspace
                      </option>
                      {workspaces?.ownedWorkspaces.map((item, index) => {
                        return (
                          <option value={item._id} key={index}>
                            {item?.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="">
                    <CreateWorkspace data={[rerender, setRerender]} />
                  </div>
                </div>
              </form>
              {/*Project -------------------------------------------------------------------------------------------------------------------------------------------------------*/}
              <div className="text-center mt-10">
                <button
                  type="button"
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border   hover:bg-gray-300 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 border-slate-900 "
                  onClick={() => {
                    if (projectDetails.workspace == "") {
                      invalidProjectForm("Please choose a workspace");
                    } else {
                      setToggleName("project");
                    }
                  }}
                >
                  Next
                </button>
              </div>
            </div>

            {/* its the content of add project */}
            <div
              className={`p-4 h-2/4 rounded-lg md:p-8 dark:bg-gray-800   ${
                toggleName === "project"
                  ? "block  transition delay-300"
                  : "hidden"
              }`}
              id="about"
              role="tabpanel"
              aria-labelledby="about-tab"
            >
              <div className="md:mx-44 transition duration-700 ease-in-out ">
                <form>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={(e) =>
                        setProjectDetails({
                          ...projectDetails,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Project Name
                    </label>
                  </div>

                  <div className="">
                    <div className="relative z-0 w-full mb-6 group">
                      <textarea
                        type="text"
                        name="floating_first_name"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={(e) =>
                          setProjectDetails({
                            ...projectDetails,
                            description: e.target.value,
                          })
                        }
                      />
                      <label
                        htmlFor="floating_first_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Project discription
                      </label>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-4 md:m1 ">
                      <div>
                        <p className="text-lg font-semibold m-1 text-blue-900 dark:text-white">
                          Select a theme
                        </p>

                        <div>
                          {details.color ? (
                            <p
                              className="h-5  w-2/3 my-5"
                              style={{ background: `${details.color}` }}
                            ></p>
                          ) : (
                            ""
                          )}
                          <CirclePicker
                            color={details.color}
                            onChange={handleColorChange}
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-semibold m-0 text-blue-900 dark:text-white mt-0 md:mt-0">
                          Add a due date
                        </p>
                        <div className=" md:flex gap-5 text-center">
                          <input
                            type="date"
                            className="dark:bg-gray-800 border h-12 p-3 border-slate-900"
                            onChange={(e) =>
                              setProjectDetails({
                                ...projectDetails,
                                from: e.target.value,
                              })
                            }
                          />
                          <h1 className="font-extrabold mt-4 ">To </h1>
                          <input
                            type="date"
                            className="dark:bg-gray-800 border border-slate-900 h-12 p-3"
                            onChange={(e) =>
                              setProjectDetails({
                                ...projectDetails,
                                to: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className={`text-center ${
                toggleName == "project" ? "block" : "hidden"
              }`}
            >
              <button
                type="button"
                className="border-slate-900  py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border 0 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  setToggleName("workspace");
                }}
              >
                Prev
              </button>
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg  border-slate-900 border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  if (
                    projectDetails.name == "" ||
                    projectDetails.description == "" ||
                    projectDetails.theme == "" ||
                    projectDetails.to == "" ||
                    projectDetails.from == ""
                  ) {
                    invalidProjectForm("All fields must be filled");
                  } else {
                    setToggleName("enlist");
                  }
                }}
              >
                Next
              </button>
            </div>
            {/*Enlist -------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <div
              className={`p-4 bg-white rounded-lg md:p-4 dark:bg-gray-800  overflow-hidden ${
                toggleName === "enlist"
                  ? "block transition-all duration-1000 delay-500"
                  : "hidden"
              }`}
              id="enlist"
              role="tabpanel"
              aria-labelledby="faq-tab"
            >
              <div>
                <AddMembersToWorkspace data={projectDetails.workspace} />
                <p className="text-end my-4 ">
                  <button
                    type="button"
                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    onClick={()=>getMembersOfSelectedWorkspace(projectDetails.workspace)}
                  >
                    <div className="flex justify-center items-center gap-2">
                      <span>
                        <SlRefresh />
                      </span>
                      <span>Refresh</span>
                    </div>
                  </button>
                </p>
                {/*  */}
                <div
                  id=""
                  className="  bg-white rounded-lg shadow  dark:bg-gray-700 border border-gray-300"
                >
                  <div className="p-3">
                    <label htmlFor="input-group-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="input-group-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search user"
                      />
                    </div>
                  </div>
                  <ul
                    className="h-48 overflow-y-scroll px-3 pb-3 text-sm text-gray-700 dark:text-gray-200 grid md:grid-cols-2 lg:grid-cols-3 md:gap-5"
                    aria-labelledby="dropdownSearchButton "
                  >
                    {selectedWorkspaces?.map((member) => {
                      return (
                        <li key={member.email} className="">
                          {member.status == "pending" ||
                          member?.status == "declined" ? (
                            <input
                              disabled
                              type="checkbox"
                              id={member.email}
                              value={member.email}
                              className="hidden peer "
                              required=""
                              onClick={handleCheckboxClick}
                            />
                          ) : (
                            <input
                              type="checkbox"
                              id={member.email}
                              value={member.email}
                              className="hidden peer"
                              required=""
                              onClick={handleCheckboxClick}
                            />
                          )}

                          <label
                            htmlFor={member.email}
                            className="break-all inline-flex items-center justify-between w-full p-3 text-gray-500 bg-gray-200 border-2 border-gray-300  cursor-pointer dark:hover:text-gray-200 dark:border-gray-600 peer-checked:border-green-600 hover:text-gray-600 dark:peer-checked:text-green-400 peer-checked:text-gray-900 hover:bg-gray-300 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-900"
                          >
                            <div className="flex items-center justify-center gap-3">
                              
                              <div className="md:text-lg font-semibold">
                                {member.email}
                              </div>
                            </div>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                  {/* <Link className="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-400 rounded-b-lg bg-gray-100 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
                    <svg
                      className="w-5 h-5 mr-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"></path>
                    </svg>
                    Finalise the Users
                  </Link> */}
                
                </div>
                <div className="text-center mt-4">
                  <button
                    type="button"
                    className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={() => {
                      setToggleName("project");
                    }}
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={onFinish}
                  >
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewProject;
