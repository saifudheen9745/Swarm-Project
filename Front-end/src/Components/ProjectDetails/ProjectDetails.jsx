/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ProgressCircleChart from "../Chart/ProgressCircleChart";
import AddMembersToProject from "../Modal/AddMembersToProject";
import taskApi from "../../Api/taskApi";

// import AddMembersToProject from "../Modal/AddMembersToProject";

const ProjectDetails = ({ details }) => {
  const {getAllTaskOfAProject} = taskApi()
  const [percent,setPercent] = useState()
  const [showAddMemberModal,setShowAddMemberModal] = useState(false)


  const getTaskDetails = async () => {
    try {
      const response = await getAllTaskOfAProject(details?._id);
      if (response) {
        const completedTask = response?.data?.filter((task) => {
          return task.status === "Completed";
        });
        const percentage = (completedTask.length/response?.data.length) * 100;
        if(isNaN(percentage)){
          console.log("asdf");
          setPercent(0)
        }else{
          setPercent(Math.round(percentage));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getTaskDetails();
  }, []);


  return (
    <>
      {/* <div className="justify-end flex">
          <AddMembersToProject />
        </div> */}
      <div className=" dark:bg-slate-800 bg-gray-200  lg:p-8 p-3  overflow-y-auto grid md:grid-cols-2 gap-4">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h1 className=" text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white text-center mb-5">
            PROJECT OVERVIEW
          </h1>
          <div className="flex justify-center items-center ">
            <ProgressCircleChart percentage={percent} />
          </div>
        </div>

        <div className="gap-6 grid">
          <div className="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <h1 className="dark:text-slate-200 font-extrabold md:text-4xl text-2xl">
              {details.name}
            </h1>
            <p className="dark:text-slate-400 font-semibold  text-xl max-h-32 overflow-y-scroll p-5 m-5  scrollbar-thumb-gray-900  scrollbar-thin ">
              {details.description}
            </p>
            <div className="text-sm md:text-lg dark:text-slate-300 font-bold">
              <span className="text-green-400">{details.from}</span> to{" "}
              <span className="text-red-500">{details.to}</span>
            </div>
          </div>
          <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700   lg:mb-0 mb-36  max-h-72 overflow-y-auto ">
            <div className="flex justify-between sticky z-40 -top-7 p-2   backdrop-blur-2xl">
              <h1 className=" text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
                MEMBERS ON PROJECT
              </h1>
              <button
                onClick={()=>setShowAddMemberModal(!showAddMemberModal)}
                type="button"
                class="hidden flex justify-center items-center cursor-pointer text-white bg-gradient-to-r  from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-2 mb-2"
              >
                Add Members
              </button>
            </div>
            <div className="lg:mx-10 my-5 overflow-y-auto max-h-60">
              {!details?.members?.length ? (
                <h1 className="dark:text-white text-slate-800 font-extrabold">
                  NO MEMBERS ARE PRESENT IN PROJECT
                </h1>
              ) : (
                <div className="max-w-full divide-y divide-gray-200 dark:divide-gray-700 ">
                  {details.members.map((member) => {
                    return (
                      <div
                        key={member}
                        className="pb-3 sm:pb-4 hover:dark:bg-slate-700 p-2 hover:bg-gray-300 hover:transform hover:-translate-y-1 transition duration-300"
                      >
                        <div className="flex items-center space-x-4 ">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full text-center flex justify-center font-semibold text-2xl dark:text-slate-100 ">
                              {member[0].toUpperCase()}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              {member}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        {showAddMemberModal && <AddMembersToProject data={{showAddMemberModal,setShowAddMemberModal}}/>}
      </div>
    </>
  );
};

export default ProjectDetails;
