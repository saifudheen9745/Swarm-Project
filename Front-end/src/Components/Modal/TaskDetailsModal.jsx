import React, { useEffect, useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { TbFileDescription } from "react-icons/tb";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { ImImages } from "react-icons/im";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { TfiCommentAlt } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { userReducer } from "../../Redux/Slices/userSlice";
import taskApi from "../../Api/taskApi";
import TaskCommentSection from "../TaskCommentSection/TaskCommentSection";
import swalAlerts from "../SwalAlerts/SwalAlerts";
function TaskDetailsModal({ data }) {
  const [showComment, setShowComment] = useState(false);
  const [showImgs, setShowImgs] = useState(false);
  const { deleteConfirmation } = swalAlerts();
  const { updateTaskStatus, getDetailsOfATask, deleteTaskFromDb } = taskApi();
  const { setSelectedTask, setShowModal, showModal, selectedTask, getAllTask } =
  data;
  const { userId } = useSelector(userReducer);
  const [comments, setComments] = useState(selectedTask?.comments);

  //Function to change the status of the task
  const handleTaskStatus = async (e) => {
    if (userId && selectedTask?._id && e.target.value) {
      try {
        const response = await updateTaskStatus(
          userId,
          selectedTask?._id,
          e.target.value
        );
        if (response) {
          getAllTask();
          setShowModal(!showModal);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  //Function to set the comments of a task in the comment state
  const setCommentsInState = async () => {
    try {
      const response = await getDetailsOfATask(selectedTask?._id);
      setComments(response?.data?.comments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCommentsInState();
  }, []);

  //Function to delete a task
  const deleteATask = async (taskId) => {
    try {
      const response = await deleteTaskFromDb(taskId);
      if (response) {
        getAllTask();
        setShowModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Passing delete function to the swal
  const deleteTask = async (taskId) => {
    deleteConfirmation(deleteATask, taskId);
  };


  return (
    <div
      id="staticModal"
      data-modal-backdrop="static"
      tabIndex="-1"
      aria-hidden="true"
      className={`mb-20 ${
        showModal ? "flex" : "hidden"
      } fixed backdrop-blur-sm   justify-center items-center   w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative w-full max-w-6xl max-h-4xl">
        {/* <!-- Modal content --> */}
        <div className="relative bg-gray-100 rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-6  rounded-t dark:border-gray-600">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Task Details
            </h3>
            <button
              onClick={() => {
                setShowModal(!showModal);
                setSelectedTask("");
              }}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="staticModal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="w-full flex justify-center">
            <div className="px-7 py-5 w-[97%] bg-gray-200 flex justify-between items-center shadow-lg dark:bg-gray-600 rounded-xl">
              <p className="dark:text-white text-lg md:text-2xl flex justify-center items-center gap-2">
                <span> {selectedTask?.name}</span>{" "}
                <span className="md:block hidden">
                  <GiConfirmed />
                </span>
              </p>
              <p className="dark:text-white flex text-lg md:text-2xl">
                {selectedTask?.priority}
                {selectedTask?.priority == "High" ? <p>&#128681;</p> : ""}
              </p>
              <div>
                <button
                  onClick={() => deleteTask(selectedTask?._id)}
                  type="button"
                  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Delete Task
                </button>
                <button
                  value="Completed"
                  onClick={handleTaskStatus}
                  type="button"
                  class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  Complete
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Modal body --> */}
          <div className="p-6  w-full flex-col flex md:flex-row">
            <div className="w-full md:w-3/5 ">
              <div>
                <p className="flex justify-start items-center text-lg md:text-2xl gap-2 dark:text-white font-semibold">
                  <span>
                    <TbFileDescription />
                  </span>
                  <span>Description</span>
                </p>
                <div className="px-4">
                  <p className="dark:text-gray-200 text-sm md:text-xl my-3">
                    {selectedTask?.description}
                  </p>
                </div>
              </div>
              <div>
                <p className="flex md:pr-5 justify-between items-center gap-2 text-lg md:text-2xl dark:text-white font-semibold">
                  <div className="flex gap-2 items-center">
                    <span>
                      <ImImages />
                    </span>
                    <span>Images</span>
                  </div>
                  <BsFillArrowDownCircleFill
                    className={`text-3xl ${
                      showImgs ? "rotate-180 " : ""
                    }  duration-300`}
                    onClick={() => {
                      setShowImgs(!showImgs);
                    }}
                  />
                </p>
                <div
                  className={` ${
                    showImgs ? "block" : "hidden"
                  }  px-4 flex w-[97%] overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300`}
                >
                  {selectedTask?.images?.map((img) => {
                    return <img className="w-60 m-2" src={img} alt="taskImg" />;
                  })}
                </div>
              </div>
              <TaskCommentSection
                data={{
                  taskId: selectedTask?._id,
                  showComment,
                  setShowComment,
                  comments,
                  setComments,
                }}
              />
            </div>
            <div className="w-full md:w-2/5 rounded-lg p-3">
              <div className="shadow-lg bg-gray-200 dark:bg-gray-600 md:p-2 md:mt-2 md:rounded-md">
                <p className="flex justify-between items-center text-lg md:text-2xl gap-2 dark:text-white font-semibold">
                  <div className="flex">
                    <span>
                      <AiOutlineUsergroupAdd />
                    </span>
                    <span>Assignees</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="hidden w-12 h-6 flex justify-center items-center cursor-pointer text-white bg-gradient-to-r  from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Add
                    </button>
                  </div>
                </p>
                <div className="px-4  max-h-36 overflow-y-scroll scrollbar-thin">
                  {selectedTask?.member?.map((member) => {
                    return (
                      <p className="dark:text-gray-200 text-sm md:text-xl my-3">
                        {member?.email}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="shadow-lg bg-gray-200 dark:bg-gray-600 md:p-2 md:mt-2 md:rounded-md">
                <p className="flex justify-start items-center text-lg md:text-2xl gap-2 dark:text-white font-semibold">
                  <span>
                    <BsCalendarDate />
                  </span>
                  <span>Date</span>
                </p>
                <div className="flex md:block px-4 pt-3">
                  <p className="md:flex items-center">
                    <span className="hidden md:block text-lg md:text-2xl dark:text-white">
                      From :
                    </span>
                    <span className="dark:text-gray-300 text-sm md:text-xl mx-4">
                      {selectedTask?.from}
                    </span>
                  </p>
                  <p className="block md:hidden text-white">-</p>
                  <p className="md:flex items-center">
                    <span className="hidden md:block text-lg md:text-2xl dark:text-white">
                      To :
                    </span>
                    <span className="dark:text-gray-300 text-sm md:text-xl mx-4">
                      {selectedTask?.to}
                    </span>
                  </p>
                </div>
              </div>
              <div className="shadow-lg bg-gray-200 dark:bg-gray-600 md:p-2 md:mt-2 md:rounded-md">
                <p className="flex justify-start mt-2 items-center text-lg md:text-2xl gap-2 dark:text-white font-semibold">
                  <span>
                    <HiOutlineStatusOnline />
                  </span>
                  <span>Status</span>
                </p>
                <div className="px-4 ">
                  <p
                    className={`${
                      selectedTask?.status == "Initiated"
                        ? "text-gray-100"
                        : selectedTask?.status == "Completed"
                        ? "text-green-500"
                        : selectedTask?.status == "Pending"
                        ? "text-red-600 "
                        : ""
                    } 
                    hidden
                    md:block
                    text-sm
                    md:text-2xl
                    mt-2
                    `}
                  >
                    {selectedTask?.status}
                  </p>
                  <div className="mt-2">
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleTaskStatus}
                    >
                      <option selected>{selectedTask?.status}</option>
                      {selectedTask?.status != "Pending" && (
                        <option value="Pending">Pending</option>
                      )}
                      {selectedTask?.status != "Completed" && (
                        <option value="Completed">Completed</option>
                      )}
                      {selectedTask?.status != "Initiated" && (
                        <option value="Initiated">Initiated</option>
                      )}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal footer --> */}
          {/* <div className="flex justify-center items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={() => setShowModal(false)}
              data-modal-hide="staticModal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              submit
            </button>
            <button
              data-modal-hide="staticModal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              close
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsModal;
