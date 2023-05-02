import React, { useState } from "react";
import EmailInput from "../EmailInput/EmailInput";
import { BsClipboardPlus, BsSearch } from "react-icons/bs";
import workspaceApi from "../../Api/workspaceApi";
import { userReducer } from "../../Redux/Slices/userSlice";
import { useSelector } from "react-redux";
import swalAlerts from "../SwalAlerts/SwalAlerts";
import ModalLoader from "../ModalLoader/ModalLoader";

function AddMembersToWorkspace(props) {
  const {emailSentSuccessfully} = swalAlerts()
  const { sentVerificationMailToMembers } = workspaceApi();

  const [showModal, setShowModal] = useState(false);

  const [loader,setLoader] = useState(false)
  const {data} = props
  const handleSubmit =async(tags) => {
    setLoader(true)
    await sentVerificationMailToMembers(tags, data);
    setLoader(false)
    emailSentSuccessfully()
  };
  return (
    <>
      <div className="flex justify-end">
        <button
          className="text-gray-900  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 flex gap-5"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <BsClipboardPlus className="text-2xl " />
          <span className="hidden md:block">Invite members to Workspace</span>
        </button>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg  relative flex flex-col  bg-white dark:bg-slate-800 outline-none focus:outline-none shadow-lg shadow-slate-300 dark:shadow-slate-900 w-full">
                {/*header*/}
                <div className="flex  items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white ">
                    Invite to Workspace{" "}
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
                  <div
                    className={`p-4  rounded-lg md:p-8 dark:bg-gray-800  overflow-hidden`}
                    id="enlist"
                    role="tabpanel"
                    aria-labelledby="faq-tab"
                  >
                    <div>
                      <h1 className="text-xl text-center font-extrabold my-5">
                        Invite Members to workspace{" "}
                      </h1>
                      {loader && <ModalLoader/>}
                      <EmailInput onSubmit={handleSubmit} />
                    </div>
                  </div>
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

export default AddMembersToWorkspace;
