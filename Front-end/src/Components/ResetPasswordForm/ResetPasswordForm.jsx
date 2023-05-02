import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import apiCall from "../../Api/api";
import { invalidLoginCred } from "../ToastifyAlerts/ToastifyAlerts";

function ResetPasswordForm() {

  const {sentOtpForPasswordChange,verifyOtpForPasswordChange,updatePassword} = apiCall()
  const navigate = useNavigate()
  const [viewOtp, setViewOtp] = useState(false);
  const [mailSent, setMailSent] = useState(false);

  const [mail, setMail] = useState("");
  const [otp, setOtp] = useState("");
  const [passwords, setPassword] = useState({ password: "", confPassword: "" });

  const handleSentOtp = async(e) => {
    e.preventDefault()
    try {
        const response = await sentOtpForPasswordChange({email:mail})
        setViewOtp(!viewOtp)
    } catch (error) {
      invalidLoginCred(error.msg)
    }
  };

  const handleVerifyOtp = async(e) => {
    e.preventDefault()
    try {
        const response = await verifyOtpForPasswordChange({otp:otp})

        setMailSent(!mailSent)
    } catch (error) {
      invalidLoginCred(error.msg)
    }
  };

  const handleSubmitPassword = async(e) => {
    e.preventDefault()
    try {
      passwords.email = mail
      const response = await updatePassword(passwords)
      Swal.fire({
        title: "Password changed successfully ",
        text: "To continue, please login with the new password",
        icon: "success",
        height: "200",
        width: "300",
        confirmButtonText: "Login",
        showCancelButton: false,
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to login page
          navigate("/login");
        }
      });
    } catch (error) {
      invalidLoginCred(error.msg)
    }
  }

  return (
    <div className="h-screen bg-gradient-to-r from-green-300 to-blue-400 flex flex-col justify-center items-center">
      <section
        className="w-full h-full"
        style={{ display: mailSent ? "none" : "block" }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
            <img className="w-9 h-8 mr-2" src="./Images/LOGO.png" alt="logo" />
            <p className="text-5xl">Swarm</p>
          </div>
          <div className="w-full p-6 bg-white rounded-lg shadow  md:mt-0 sm:max-w-md sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Change Password
            </h2>
            <form onSubmit={viewOtp ? handleVerifyOtp : handleSentOtp} className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
              <div style={{ display: viewOtp ? "none" : "block" }}>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  type=""
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div style={{ display: viewOtp ? "block" : "none" }}>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Otp
                </label>
                <input
                  type="text"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  id="otp"
                  placeholder="Enter the otp"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                />
              </div>

              <div className="flex justify-center">
                {viewOtp ? (
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Verify Otp
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Sent Otp
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <section
        className="w-full h-full"
        style={{ display: mailSent ? "block" : "none" }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
            <img className="w-9 h-8 mr-2" src="./Images/LOGO.png" alt="logo" />
            <p className="text-5xl">Swarm</p>
          </p>
          <div className="w-full p-6 bg-white rounded-lg shadow  md:mt-0 sm:max-w-md sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Change Password
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmitPassword}>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  New Password
                </label>
                <input
                  value={passwords.password}
                  onChange={(e) =>
                    setPassword({...passwords, [e.target.name]: e.target.value })
                  }
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input
                  value={passwords.confPassword}
                  onChange={(e) =>
                    setPassword({...passwords, [e.target.name]: e.target.value })
                  }
                  type="confirm-password"
                  name="confPassword"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </div>
  );
}
export default ResetPasswordForm;
