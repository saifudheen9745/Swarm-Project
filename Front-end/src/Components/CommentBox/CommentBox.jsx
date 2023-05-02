import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import ReactQuill from "react-quill";
import "./CommentBox.css"
import "react-quill/dist/quill.snow.css";
const CommentBox = ({props}) => {
  const {handleCommentSubmit} = props
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      [{ header: [true] }],
      ["bold"],
      ["underline"],
      ["italic"],
      ["link"],
      ["code"],
    ],
  };

 
  
  return (
    <div className="flex gap-3">
      <div className="max-w-full md:w-[28rem] ">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          className=" dark:bg-gray-800 dark:text-slate-400 "
        />
        
      </div>
      <div className="flex justify-center items-center ">
      <button onClick={()=>handleCommentSubmit(value)} className=" bg-slate-500   h-fit md:w-16 p-2 md:rounded-xl  rounded-full">
        <span className="hidden md:block text-xl font-semibold">Post</span>
        <span className="text-2xl md:hidden block  "><BsFillSendFill/></span>
        </button>
      </div>
    </div>
  );
};

export default CommentBox;