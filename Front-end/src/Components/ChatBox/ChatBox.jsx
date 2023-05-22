import React, { useEffect, useRef, useState } from "react";
import workspaceApi from "../../Api/workspaceApi";
import { userReducer } from "../../Redux/Slices/userSlice";
import { useSelector } from "react-redux";
import projectApi from "../../Api/projectApi";
import chatApi from "../../Api/chatApi";
import { useNavigate } from "react-router-dom";
import ChatInputBox from "../ChatInputBox/ChatInputBox";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { format } from "date-fns";
import { asideReducer } from "../../Redux/Slices/asideSlice";
import io from "socket.io-client";
import ScrollableFeed from "react-scrollable-feed";

function ChatBox() {
  
  const endPoint = "http://localhost:4000";

  let socket = io.connect(endPoint);

  const navigate = useNavigate();
  const { fetchAllProjects } = projectApi();
  const { getAChat, sentMessage } = chatApi();
  const { getWorkspaces } = workspaceApi();
  const [chat, setChat] = useState(""); //To get details of a single chat
  const [messages, setMessages] = useState(); //To get details of a single chat
  const [workspaces, setWorkspaces] = useState(); // Selected workspace
  const [projects, setProjects] = useState(); //Selected project
  const [mobileView, setMobileView] = useState(false);
  const { userId, email } = useSelector(userReducer);
  const { aside } = useSelector(asideReducer);
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    getAllWorkspaces();
  }, []);

  const getAllWorkspaces = async () => {
    try {
      const response = await getWorkspaces(userId, email);
      setWorkspaces([
        ...response.data.ownedWorkspaces,
        ...response.data.sharedWorkspaces,
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleWorkspaceClick = async (e) => {
    try {
      //const workspace = await getSelectedWorkspace(workspaceId)
      if (e.target.value === "undefined") {
        return;
      }
      const projects = await fetchAllProjects(e.target.value);
      setProjects(projects.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProjectClick = async (projectId) => {
    try {
      const response = await getAChat(projectId);
      socket.emit("joinChat", response?.data?._id);
      setChat(response.data);
      console.log(response.data);
      setMobileView(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("jjjjjjjj");
    socket.on("rm", (data) => {
      console.log(data.sender._id !== userId);
      if (data.sender._id !== userId) {
        setChat((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, data],
        }));
      }
      //chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    });
  });



  return (
    <div className="h-full md:p-3 pb-20 overflow-y-hidden md:flex gap-3 bg-gray-100 dark:bg-slate-800 w-full">
      <div
        className={`${
          mobileView ? "hidden md:block" : "block"
        } dark:bg-slate-800 h-full md:w-1/4 rounded-md p-2`}
      >
        <div className="w-full  dark:shadow-md shadow-2xl shadow-gray-300 rounded-xl flex justify-center items-center h-16">
          <p className="dark:text-white  text-4xl">Chats</p>
        </div>
        <div className="w-full mt-4">
          <select
            id="countries"
            className="bg-gray-50 border-transparent text-gray-900 dark:shadow-sm shadow-lg text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white"
            onChange={handleWorkspaceClick}
          >
            <option value="undefined">Choose a workpspace</option>
            {workspaces?.map((workspace) => {
              return <option value={workspace._id}>{workspace.name}</option>;
            })}
          </select>
        </div>
        <div className="dark:bg-slate-800 dark:shadow-xl dark:shadow-gray-700 shadow-xl shadow-gray-300 rounded-2xl px-3 w-full mt-4 h-3/4 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-500 ">
          {projects &&
            projects.map((project) => {
              return (
                <div
                  key={project._id}
                  className="hover:transform hover:scale-105 bg-gray-500 dark:hover:bg-gray-700   text-dark border-slate-700  p-3 flex justify-center rounded-md bg-transparent dark:bg-gray-600 text-white hover:cursor-pointer m-2"
                >
                  <p
                    className="text-sm md:text-xl"
                    onClick={() => handleProjectClick(project._id)}
                  >
                    {project.name}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div
        className={`w-full md:w-3/4 h-[92%]  shadow-2xl  dark:shadow-gray-700 rounded-md mb-20`}
      >
        <div className="w-full dark:bg-slate-800 bg-slate-300 rounded-t-lg hover:cursor-pointer h-16 flex items-center justify-between">
          <p className="ml-6 text-lg dark:text-white flex justify-center items-center gap-4">
            <span
              onClick={() => setMobileView(false)}
              className="text-2xl md:hidden hover:cursor-pointer"
            >
              <IoArrowBackCircleOutline />
            </span>
            {chat?.chatName}
          </p>
          <p className="mr-5 dark:text-white">dot</p>
        </div>
        <hr className="dark:text-white" />
        <ScrollableFeed forceScroll={true}>
          <div  className="h-[87%] overflow-y-scroll  scrollbar-thin md:pb-10 pt-3 px-2 ">
            {chat?.messages?.map((msg) => {
              return (
                <div
                  key={msg._id}
                  className={`flex ${
                    msg.sender._id == userId ? "justify-end" : ""
                  }`}
                >
                  <div
                    className={`rounded block  w-fit md:max-w-[40%]   p-2 mb-10 ${
                      msg.sender._id == userId
                        ? "dark:bg-green-900 text-end bg-green-500  "
                        : "dark:bg-gray-600 bg-gray-400"
                    }`}
                  >
                    {msg.sender._id !== userId && (
                      <p className="text-sm dark:text-yellow-400 text-yellow-200 font-semibold">
                        {msg?.sender.fname}
                      </p>
                    )}
                    <p className="max-w-[100%] truncate dark:text-slate-50 text-gray-200  font-semibold">
                      {msg.message}
                    </p>
                    <p className="text-[.80rem] text-end font-semibold dark:text-gray-300">
                      {format(new Date(msg.createdAt), "h:mm a")}
                    </p>
                  </div>
                            
                </div>
              );
            })}
          </div>
        </ScrollableFeed>
        <div
          className={`${mobileView ? "z-50" : "z-0"} ${
            aside ? "w-[62%]"  : "w-full md:w-[70.5%]"
          } absolute md:block bottom-2.5 pt-3 pr-3 bg-white  dark:bg-slate-800`}
        >
          <ChatInputBox
            data={{ chatId: chat?._id, userId, socket, setChat, chat }}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
