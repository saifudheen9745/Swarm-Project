import React, { useState } from "react";
import { BsClipboardPlus } from "react-icons/bs";
import { TwitterPicker } from "react-color";
import { useSelector } from "react-redux";
import { userReducer } from "../../Redux/Slices/userSlice";
import workspaceApi from "../../Api/workspaceApi";

export default function CreateWorkspace(props) {
  const [rerender,setRerender] = props.data
  const {createWorkspace} = workspaceApi()
  const {userId} = useSelector(userReducer)
  const [showModal, setShowModal] = useState(false);
  const [error,setError] = useState('')
  const [details,setDetails] = useState({
    theme:"#fff",
    name:'',
    master:userId
  })

  const handleColorChange = (newColor) => {
    setDetails({...details,theme:newColor.hex});
  };
  const handleNameChange = (e) => {
    setDetails({...details,name:e.target.value})
  }

  const handleSubmit  = async() =>{
    if(!details.name.trim()){
      setError("Provide a name for workspace")
      return
    }
    try {
      const response = await createWorkspace(details)
      if(response){
        setRerender(!rerender)
        setShowModal(false)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button
        className="text-gray-900 mt-7 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex gap-5"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <BsClipboardPlus className="text-2xl " />
        <span className="hidden md:block">Create Workspace</span>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg  relative flex flex-col  bg-white dark:bg-slate-800 outline-none focus:outline-none shadow-lg shadow-slate-300 dark:shadow-slate-900 w-full">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white ">Create a Workspace </h3>
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
                <div className="relative p-6 flex-auto">
                    {/* <form action='' className="grid gap-6" > */}
                      <div>
                      <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Workspace Name</label>
                      <input type="email" id="helper-text" name="workspaceName" value={details.name} aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50 0" placeholder="Eg: cross-origin-platform" onChange={handleNameChange} />
                      <p className="text-red-700 h-5">{error}</p>
                      </div>
                      <div >
                      <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a theme</label>
                      {details.color !== '#fff' ?                      
                       <div className="flex gap-5">
                      <p className="p-5 h-16 w-16 rounded-full" style={{background:`${details.color}`}}></p> 
                      <p className="text-xl font-bold mt-3" style={{color:`${details.theme}`}}>selected Colour</p>
                        </div> :""} 
                      <TwitterPicker color={details.color} onChange={handleColorChange}/>
                      </div>
                    {/* </form> */}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Create Workspace
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}