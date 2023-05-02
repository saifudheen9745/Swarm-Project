import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userReducer } from "../../Redux/Slices/userSlice";
import apiCall from "../../Api/api";
import {
  confirmPassToast,
  invalidLoginCred,
  passwordUpdated,
} from "../ToastifyAlerts/ToastifyAlerts";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function UserAccount() {
  const navigate = useNavigate();
  const { userId } = useSelector(userReducer);
  const [resetPass, setResetPass] = useState(false);
  const [resetPassForm, setResetPassForm] = useState({
    userId,
    currentPass: "",
    newPass: "",
    confNewPass: "",
  });
  const [userDetails, setUserDetails] = useState({});

  const { getUser, editUserDetails, updateUserPassword } = apiCall();

  const getUserDetails = async () => {
    try {
      const response = await getUser(userId);
      setUserDetails({
        userId,
        fname: response.data?.fname ? response.data?.fname : "",
        email: response.data?.email ? response.data?.email : "",
        mobile: response.data?.mobile ? response.data?.mobile : "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update state with new values
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePassChange = (e) => {
    const { name, value } = e.target;
    // Update state with new values
    setResetPassForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUserDetailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await editUserDetails(userDetails);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePassSubmit = async (e) => {
    e.preventDefault();
    try {
      if (resetPassForm?.confNewPass !== resetPassForm?.newPass) {
        confirmPassToast();
        return;
      }
      const response = await updateUserPassword(resetPassForm);
      if (response.data) {
        passwordUpdated();
      }
    } catch (error) {
      invalidLoginCred(error.err);
    }
  };

  return (
    <div className="dark:bg-slate-800 bg-gray-100 lg:p-4 h-screen overflow-y-auto w-full">
      <div className="flex flex-col md:flex-row gap-3 p-5 h-full rounded-3xl md:mx-16 full md:h-5/6 bottom-20 bg-gray-200 dark:bg-slate-800 shadow-2xl">
        <div className="w-full md:w-1/3 flex items-center flex-col justify-center  md:h-full rounded-2xl bg-gray-200 dark:bg-slate-800 dark:text-white">
          <div className="h-2/5 flex items-center"></div>
          <div className="h-3/5 p-3">
            <p className="font-thin text-4xl text-center">
              Experience hassle-free account management
            </p>
          </div>
        </div>
        <div className="p-5 w-full  md:w-2/3 shadow-xl h-full rounded-2xl dark:bg-slate-800 dark:text-white bg-gray-200">
          <div className="flex  flex-col justify-center items-center gap-3 h-20 md:h-1/4">
            <span>
              <img className="h-24" src="./Images/LOGO.png" alt="" />
            </span>
            <span>
              <p className="text-3xl">Swarm Account Management</p>
            </span>
          </div>
          {!resetPass && (
            <form className="md:mt-16" onSubmit={handleUserDetailSubmit}>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    value={userDetails?.fname}
                    onChange={handleChange}
                    type="text"
                    name="fname"
                    id="floating_first_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Full name
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    value={userDetails.mobile}
                    onChange={handleChange}
                    type="tel"
                    name="mobile"
                    id="floating_phone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_phone"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  onChange={handleChange}
                  value={userDetails.email}
                  type="email"
                  name="email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>

              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>

              <p
                onClick={() => setResetPass(!resetPass)}
                className="text-blue-500 cursor-pointer mt-10"
              >
                Manage password
              </p>
            </form>
          )}

          {resetPass && (
            <form className="md:mt-16" onSubmit={handlePassSubmit}>
              <div class={` grid md:grid-cols-1 md:gap-6`}>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    onChange={handlePassChange}
                    type="text"
                    name="currentPass"
                    id="currentPass"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Current Password (If you have not set a password yet, Ignore this field)"
                  />
                  <label
                    for="floating_first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  ></label>
                </div>
              </div>

              <div class="grid md:grid-cols-1 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    onChange={handlePassChange}
                    type="text"
                    name="newPass"
                    id=""
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    New Password
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  onChange={handlePassChange}
                  type="password"
                  name="confNewPass"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="confNewPass"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm new password
                </label>
              </div>

              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>

              <p
                onClick={() => setResetPass(!resetPass)}
                className="text-blue-500 cursor-pointer mt-10"
              >
                Go back
              </p>
            </form>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UserAccount;
