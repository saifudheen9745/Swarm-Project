/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import useImageUpload from "../../Hooks/useImageUpload";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useSelector } from "react-redux";
import ModalLoader from "../Modal/ModalLoader";

import projectApi from "../../Api/projectApi";
import { userReducer } from "../../Redux/Slices/userSlice";
import taskApi from "../../Api/taskApi";
import swalAlerts from "../SwalAlerts/SwalAlerts";

const CreateNewTask = ({data}) => {
  
  const {projectId,rerender,setRerender,setTasks,setAddTaskModal,addTaskModal} = data

  const { successAlert } = swalAlerts();
  const userDetails = useSelector(userReducer);
  const { addTask, getAllTaskOfAProject } = taskApi();
  const [uploadImages, uploadProgress] = useImageUpload();
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);
  const [stepper, setStepper] = useState("firstStep");
  const [members, setMembers] = useState({});
  const [task, setTask] = useState({
    name: "",
    priority: "Low",
    description: "",
    from: "",
    to: "",
    images: [],
    assignee: [],
    reporter: userDetails.userId,
    projectId: projectId,
  });

  const { getRegisterdProjectMembers } = projectApi();

  const handleChange = async (e) => {
    const { value, name } = e.target;
    setTask({ ...task, [name]: value });
  };
  const handleImageChange = async (event) => {
    const files = event.target.files;
    const selectedImages = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file && file.type.includes("image/")) {
        selectedImages.push(file);
      } else {
        toast.error("Only Images are allowed");
      }
    }

    setImages((prevImages) => [...prevImages, ...selectedImages]);
  };

  const handleClose = () => {
    setShowModal(false);
    setStepper("firstStep");
    setTask({
      name: "",
      priority: "Low",
      description: "",
      from: "",
      to: "",
      images: [],
      assignee: [],
      reporter: userDetails.userId,
      projectId: projectId,
    });
    setImages([]);
  };

  const fetchDetailsOfMembers = async (projectId) => {
    try {
      const response = await getRegisterdProjectMembers(projectId);
      setMembers(response);
     
    } catch (error) {
      console.log(error);
      toast.error(error?.msg);
    }
  };

  useEffect(() => {
    fetchDetailsOfMembers(projectId);
    return () => {
      fetchDetailsOfMembers(projectId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckboxClick = (e) => {
    const userId = e.target.value;
    const index = task.assignee.indexOf(userId);
    if (index === -1) {
      setTask((prevState) => ({
        ...prevState,
        assignee: [...prevState.assignee, userId],
      }));
    } else {
      setTask((prevState) => ({
        ...prevState,
        assignee: [
          ...prevState.assignee.slice(0, index),
          ...prevState.assignee.slice(index + 1),
        ],
      }));
    }
  };

  const handleSubmit = async () => {
    setLoader(true);
    try {
      if (images.length) {
        const imagesArray = Object.values(images);
        const urls = await uploadImages(imagesArray, 'taskFiles')
        setTask((prevState)=>{
          prevState.images = urls
        })
      }
      addTask(task).then(async() => {
        setLoader(false);
        setRerender(!rerender)
        const response = await getAllTaskOfAProject(projectId)
        setTasks(response.data)
        setShowModal(false)
      }).catch((error)=>{
        console.log(error);
      })
    } catch (error) {
      console.log(error);
      setLoader(false);
      toast.error(error);
    }
  };
  return (
    <div>
      <>
        <button
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2 md:px-5 md:py-2.5 text-center mr-2 mb-2 flex flex-row justify-center items-center gap-2"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <BsFillBookmarkPlusFill className="text-lg md:text-xl" />
          <span className="md:hidden">TASK</span>
          <span className="hidden md:block">NEW TASK</span>
        </button>
      </>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg  relative flex flex-col  bg-white dark:bg-gray-700 outline-none focus:outline-none shadow-lg shadow-slate-300 dark:shadow-slate-900 w-full">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white text-center">
                    Add Task{" "}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                  {stepper === "firstStep" && (
                    <div className="grid gap-4">
                      <section className="grid grid-cols-2 gap-3">
                        <div>
                          <label
                            htmlFor="helper-text"
                            className="block  text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Task Name
                          </label>
                          <input
                            type="text"
                            id="helper-text"
                            name="name"
                            value={task.name}
                            ariaDescribedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50 0"
                            placeholder="Eg: Complete wireframe"
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="helper-text"
                            className="block  text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Priority &#128681;
                          </label>
                          <select
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm round focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={task.priority}
                            name="priority"
                            onChange={handleChange}
                          >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium </option>
                            <option value="High"> High </option>
                          </select>
                        </div>
                      </section>
                      <div>
                        <label
                          htmlFor="helper-text"
                          className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Task Description
                        </label>
                        <textarea
                          type="email"
                          id="helper-text"
                          name="description"
                          ariaDescribedby="helper-text-explanation"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50 0"
                          placeholder="eg : Complete the wirefram with figma "
                          value={task.description}
                          onChange={handleChange}
                        />
                      </div>
                      <section className="grid grid-cols-2 gap-3">
                        <div className="fromDate">
                          <label
                            htmlFor="helper-text"
                            className="block  text-sm font-medium text-gray-900 dark:text-white"
                          >
                            From
                          </label>
                          <input
                            type="date"
                            id="helper-text"
                            name="from"
                            ariaDescribedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50 0"
                            placeholder="Eg: Complete wireframe"
                            value={task.from}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="fromDate">
                          <label
                            htmlFor="helper-text"
                            className="block  text-sm font-medium text-gray-900 dark:text-white"
                          >
                            To
                          </label>
                          <input
                            type="date"
                            id="helper-text"
                            ariaDescribedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50 0"
                            placeholder="Eg: Complete wireframe"
                            name="to"
                            value={task.to}
                            onChange={handleChange}
                          />
                        </div>
                      </section>
                    </div>
                  )}
                  {stepper === "secondStep" && (
                    <div>
                      <section>
                        <div>
                          <label
                            htmlFor="helper-text"
                            className="block  text-sm font-medium text-gray-900 dark:text-white "
                          >
                            Add Task images
                          </label>
                          <input
                            type="file"
                            id="helper-text"
                            name="image"
                            accept="image/*"
                            ariaDescribedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50 0"
                            placeholder="Eg: Complete wireframe"
                            multiple
                            onChange={handleImageChange}
                          />
                          <p className=" text-sm font-medium text-gray-900 dark:text-slate-400 flex justify-end">
                            *not mandatory
                          </p>
                        </div>
                        {images.length && (
                          <div className="grid grid-cols-2 gap-3  w-96 max-h-36 m-5 overflow-scroll  scrollbar-thumb-gray-400  scrollbar-thin ">
                            {images.length &&
                              images.map((image, index) => (
                                <div key={index}>
                                  <img
                                    src={URL.createObjectURL(image)}
                                    alt={image.name}
                                  />
                                  <p>{image.name}</p>
                                </div>
                              ))}
                          </div>
                        )}
                        {uploadProgress > 0 && (
                          <div className="font-extrabold text-xl dark:text-white text-black">
                            Upload Progress: {uploadProgress}%
                          </div>
                        )}
                      </section>
                    </div>
                  )}

                  {stepper === "thirdStep" && (
                    <div>
                      <section>
                        <p className="block  text-lg font-bold text-gray-900 dark:text-white">
                          Assign task to Members
                        </p>
                        <p className="block  text-sm font-medium text-gray-400 dark:text-gray-500 text-end">
                          *can only assign to registerd members
                        </p>
                        <div className="max-h-40 overflow-y-scroll">
                          {members.registerdMembers.length ? (
                            members.registerdMembers.map((member) => {
                              return (
                                
                                  <div
                                    key={member._id}
                                    className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700"
                                  >
                                    <input
                                      id="bordered-checkbox-1"
                                      type="checkbox"
                                      value={member._id}
                                      name="bordered-checkbox"
                                      className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                                      onClick={handleCheckboxClick}
                                    />
                                    <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                      {member.name} <br />
                                      <span className="dark:text-slate-400 text-slate-600">
                                        {member.email}
                                      </span>
                                    </label>
                                  </div>
                                
                              );
                            })
                          ) : (
                            <p className="dark:text-white text-gray-500">
                              No members are present
                            </p>
                          )}
                        </div>
                      </section>
                    </div>
                  )}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  {stepper === "firstStep" && (
                    <button
                      className="bg-emerald-500 text-white rounded-full active:bg-emerald-600 font-bold uppercase text-3xl p-1  shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        {
                          task.name &&
                          task.description &&
                          task.from &&
                          task.to &&
                          task.priority
                            ? setStepper("secondStep")
                            : toast.error("All credentials required");
                        }
                      }}
                    >
                      <GrLinkNext />
                    </button>
                  )}

                  {stepper === "secondStep" && (
                    <div className="flex gap-4">
                      <button
                        className="bg-blue-500  text-white rounded-full active:bg-emerald-600 font-bold uppercase text-3xl p-1  shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setStepper("firstStep");
                        }}
                      >
                        <GrLinkPrevious />
                      </button>

                      <button
                        className="bg-emerald-500 text-white rounded-full active:bg-emerald-600 font-bold uppercase text-3xl p-1  shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setStepper("thirdStep");
                        }}
                      >
                        <GrLinkNext />
                      </button>
                    </div>
                  )}
                  {stepper === "thirdStep" && (
                    <div className=" flex gap-2">
                      <button
                        className="bg-blue-500 h-10 first-letter:  text-white rounded-full active:bg-emerald-600 font-bold uppercase text-3xl p-1  shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setStepper("secondStep");
                        }}
                      >
                        <GrLinkPrevious />
                      </button>
                      <button
                        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Create Task
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {loader && <ModalLoader />}
          </div>
          <ToastContainer />
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default CreateNewTask;
