import React, { useEffect, useState } from "react";
import CommentBox from "../CommentBox/CommentBox";
import { TfiCommentAlt } from "react-icons/tfi";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import taskApi from "../../Api/taskApi";
import { useSelector } from "react-redux";
import { userReducer } from "../../Redux/Slices/userSlice";
import { format} from 'timeago.js'
function TaskCommentSection({ data }) {
  const {
    comments,
    setComments,
    showComment,
    setShowComment,
    taskId,
  } = data;

  const { addComment, getDetailsOfATask } = taskApi();
  const { userId, name } = useSelector(userReducer);

  //Function to get all the updated comments after submitting a comment
  const getAllComments = async (taskId) => {
    try {
      const response = await getDetailsOfATask(taskId);
      setComments(response?.data?.comments);
    } catch (error) {
      console.log(error);
    }
  };

  //Function to submit the comment
  const handleCommentSubmit = async (comment) => {
    try {
      const response = await addComment({ name, comment, userId, taskId });
      if (response) {
        getAllComments(taskId);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={``}>
      <p className="flex md:pr-5 justify-between items-center gap-2 text-lg md:text-2xl dark:text-white font-semibold">
        <div className="flex gap-2 items-center">
          <span>
            <TfiCommentAlt />
          </span>
          <span>Comments</span>
        </div>
        <BsFillArrowDownCircleFill
          className={`text-3xl ${
            showComment ? "rotate-180 " : ""
          }  duration-300`}
          onClick={() => setShowComment(!showComment)}
        />
      </p>

      <div
        className={`${
          showComment ? "max-h-72   duration-300 " : "hidden    duration-300"
        } overflow-y-scroll border border-slate-600 rounded-lg mt-5 scrollbar-thin scrollbar-thumb-gray-400 md:p-5 grid gap-3`}
      >
        {comments &&
          comments?.map((comment, index) => {
            return (
              <div
                key={index}
                className=" dark:border-slate-500 border-gray-400 grid gap-1 p-3"
              >
                <section className="header flex gap-5 ">
                  <div className="rounded-full bg-slate-900 w-8 h-8 flex justify-center items-center text-white  ">
                    C
                  </div>
                  <h1 className="text-gray-100">{comment?.name}</h1>
                  <h1 className="text-gray-100">{format(comment.createdAt)}</h1>
                </section>
                <section className="text-left px-5 dark:text-slate-400">
                  <p dangerouslySetInnerHTML={{ __html: comment.comment }}></p>
                </section>
                <hr />
              </div>
            );
          })}
        <div className="block  h-fit sticky  z-10 -bottom-5 bg-gray-100 dark:bg-gray-700 pt-2">
          <div className="flex gap-5 ">
            <div className="md:flex justify-center items-center hidden">
            </div>
            <CommentBox
              props={{
                comments,
                setComments,
                handleCommentSubmit,
                taskId,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCommentSection;
