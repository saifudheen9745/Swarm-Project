import React, { useEffect, useState } from "react";
import projectApi from "../../Api/projectApi";
import { IoPersonRemove } from "react-icons/io5";
import { CircularProgressbar } from "react-circular-progressbar";
import { VscTarget } from "react-icons/vsc";
import "react-circular-progressbar/dist/styles.css";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import { ToastContainer } from "react-toastify";
import TaskComponent from "../TaskComponent/TaskComponent";
import { useLocation } from "react-router-dom";
import taskApi from "../../Api/taskApi";

function ViewProjectComponent() {
  const location = useLocation();
  const projectId = location.state?.projectId;
  const workspaceType = location.state?.workspaceType;
  const { fetchAProjectDetails } = projectApi();
  const { getAllTaskOfAProject } = taskApi();
  const [projectDetails, setProjectDetails] = useState("");
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const [nav, setNav] = useState("overview");

  const getProjectDetails = async () => {
    try {
      const response = await fetchAProjectDetails(projectId);
      if (response.data) {
        setProjectDetails(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };


  console.log(projectDetails);

  useEffect(() => {
    getProjectDetails();
  }, []);

  return (
    <div className="dark:bg-slate-800 bg-gray-200  lg:p-8 p-3  overflow-y-auto h-screen scrollbar-thumb-gray-900  scrollbar-thin">
      <div className="Header flex justify-center items-center">
        <div className="md:flex justify-center items-center w-full gap-5 ">
          <VscTarget
            className="hidden md:block text-2xl md:text-6xl w-fit rounded backdrop-blur-md dark:bg-slate-700 bg-gray-300 p-1 h-12"
            style={{ color: projectDetails?.theme }}
          />
          <h1 className="text-4xl font-extrabold dark:text-gray-200 text-slate-700 break-words ">
            {projectDetails.name}
          </h1>
        </div>
        <div className="text-xl dark:text-white text-slate-900 font-extrabold dark:bg-slate-700 bg-gray-300 p-4 rounded-xl md:block hidden  ">
          {workspaceType}
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className=" md:m-5 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {
            setMobileDropdown(!mobileDropdown);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div className="Navigator md:mt-10 ">
        <nav className="text-end">
          <div className="max-w-screen-xl  items-center justify-between mx-auto p-4 ">
            <div
              className={`${
                mobileDropdown ? "block" : "hidden"
              } w-full md:block md:w-auto h-full md:h-8 `}
              id="navbar-default "
            >
              <ul className="font-medium flex flex-col p-4 md:p-3 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
                <li>
                  <button
                    className={`block w-full text-start py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white ${
                      nav === "overview"
                        ? "md:dark:text-blue-500 md:text-blue-700 bg-blue-700"
                        : "md:text-slate-700"
                    }`}
                    aria-current="page"
                    onClick={() => {
                      setNav("overview");
                      setMobileDropdown(!mobileDropdown);
                    }}
                  >
                    Overview
                  </button>
                </li>

                <li>
                  <button
                    className={`block w-full text-start py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white ${
                      nav === "task"
                        ? "md:dark:text-blue-500 md:text-blue-700 bg-blue-700"
                        : "md:text-slate-700"
                    }`}
                    aria-current="page"
                    onClick={() => {
                      setNav("task");
                      setMobileDropdown(!mobileDropdown);
                    }}
                  >
                    Task
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="contents overflow-scroll  ">
        {nav === "overview" && <ProjectDetails details={projectDetails} />}
        {nav === "task" && <TaskComponent projectId={projectDetails._id} />}
      </div>
      <ToastContainer />
    </div>
  );
}

export default ViewProjectComponent;
