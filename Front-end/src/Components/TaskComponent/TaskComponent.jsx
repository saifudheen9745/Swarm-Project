/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import CreateNewTask from "../Modal/CreateNewTask";
import taskApi from "../../Api/taskApi";
import TaskDetailsModal from "../Modal/TaskDetailsModal";

const TaskComponent = ({ projectId }) => {
  const { getAllTaskOfAProject, getDetailsOfATask } = taskApi();
  const [tasks, setTasks] = useState();
  const [rerender, setRerender] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState();

  //Function to get all the task to list
  const getAllTask = async () => {
    try {
      const response = await getAllTaskOfAProject(projectId);
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getAllTask();
  }, []);

  //Function to spawn the modal contains teh details of a task
  const handleTaskClick = async (taskId) => {
    try {
      const response = await getDetailsOfATask(taskId)
      setSelectedTask(response.data);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" dark:bg-slate-800 bg-gray-200  lg:p-8  overflow-y-auto ">
        <div className="flex justify-end">
          {projectId ? (
            <CreateNewTask data={{ projectId, rerender, setRerender, setTasks }} />
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex-col md:flex-row flex gap-3 md:mt-10">
          <div className="w-full md:w-1/3 shadow-2xl rounded-lg  dark:bg-slate-900">
            <div className="text-center font-bold text-xl md:text-3xl dark:text-white">
              <p className="my-5">INITIALISED</p>
            </div>
            <div className="max-h-96  overflow-y-scroll  scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 ">
              {tasks &&
                tasks
                  ?.filter((tsk) => tsk.status == "Initiated")
                  .map((task) => {
                    return (
                      <p
                        onClick={() => handleTaskClick(task._id)}
                        key={task._id}
                        className="font-semibold text-lg md:text-2xl mx-4 mb-2 rounded-xl cursor-pointer bg-gradient-to-r from-green-300 text-gray-7800 to-blue-300 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-800  p-2 dark:text-gray-300"
                      >
                        {task.name}
                      </p>
                    );
                  })}
            </div>
          </div>
          <div className="w-full md:w-1/3 shadow-2xl rounded-lg  dark:bg-slate-900">
          <div className="text-center font-bold text-xl md:text-3xl dark:text-white">
              <p className="my-5">PENDING</p>
            </div>
            <div className="max-h-96  overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400  dark:scrollbar-thumb-gray-600 ">
              {tasks &&
                tasks
                  ?.filter((tsk) => tsk.status == "Pending")
                  .map((task) => {
                    return (
                      <p
                      onClick={() => handleTaskClick(task._id)}
                        key={task._id}
                        className="font-semibold text-lg md:text-2xl mx-4 mb-2 rounded-xl cursor-pointer bg-gradient-to-r from-green-300 text-gray-7800 to-blue-300 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-800  p-2 dark:text-gray-300"
                      >
                        {task.name}
                      </p>
                    );
                  })}
            </div>
          </div>
          <div className="w-full md:w-1/3 shadow-2xl rounded-lg  dark:bg-slate-900">
          <div className="text-center font-bold text-xl md:text-3xl dark:text-white">
              <p className="my-5">COMPLETED</p>
            </div>
            <div className="max-h-96  overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 ">
              {tasks &&
                tasks
                  ?.filter((tsk) => tsk.status == "Completed")
                  .map((task) => {
                    return (
                      <p
                      onClick={() => handleTaskClick(task._id)}
                        key={task._id}
                        className="font-semibold text-lg md:text-2xl mx-4 mb-2 rounded-xl cursor-pointer bg-gradient-to-r from-green-300 text-gray-7800 to-blue-300 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-800  p-2 dark:text-gray-300"
                      >
                        {task.name}
                      </p>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
      {showModal && <TaskDetailsModal data={{setSelectedTask, showModal, setShowModal, selectedTask ,getAllTask }} />}
    </>
  );
};

export default TaskComponent;
