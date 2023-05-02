import React, { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from "react-router-dom";
import {RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../Firebase/config";
//Redux hooks
import {useDispatch} from 'react-redux'
import {setDetails} from '../../Redux/Slices/userSlice'
import apiCall from "../../Api/api";
import { invalidLoginCred } from "../ToastifyAlerts/ToastifyAlerts";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";


function OtpLogin() {

    const dispatch = useDispatch()
    const {createJwtToken,checkNumber} = apiCall()

    const [number,setNumber] = useState("") // to store the mobile number
    const [confirmObj,setConfirmObj] = useState("") // to store the recaptcha response obj
    const [flag,setflag] = useState(false) // to manage what to show when number/verifyOtp
    const [otp,setOtp] = useState("") // to store the received otp
    const [error,setError] = useState("") // to store the errors 

    const navigate = useNavigate()

    const setUpRecaptcha = async(number)=>{
        console.log(number);
        const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container',
        {}, 
        auth
        );
        recaptchaVerifier.render()
        return signInWithPhoneNumber(auth,number,recaptchaVerifier)
    }

    const getOtp = async (e)=>{
        console.log("getotp");
        e.preventDefault()
        setError("")
        if(number == ""|| number === undefined){
            return setError("Please enter a valid phone number")
        }
        try {
            const isRegisteredNumber = await checkNumber({number})
            const response = await setUpRecaptcha(number)
            setConfirmObj(response)
            setflag(true)
        } catch (error) {
          console.log(error);
            console.log(error.msg);
            if(error.msg == "Mobile is not registered" ){
              invalidLoginCred(error.msg)
            }else{
              setError(error.message)
              console.log(error.message);
              Swal.fire({
                title:"Firebase otp error"
              })
            }
        }
        
    }

    const verifyOtp = async(e)=>{
        e.preventDefault()
        if(otp === "" || otp === null) return;
        try {
            setError("")
            let response  = await confirmObj.confirm(otp);
            createJwtAuthToken(number)
        } catch (error) {
            setError(error.message)
            
        }

    }

    const createJwtAuthToken = async(number)=>{
      try {
        const loginResponse = await createJwtToken({mobile:number})
        dispatch(setDetails({userId:loginResponse.userId,name:loginResponse.name,email:loginResponse.email,accesToken:loginResponse.accessToken}))
        navigate('/home')
      } catch (error) {
          invalidLoginCred(error.msg)
      }
    }

  return (
    
    <div className="p-10 md:p-0" >
      <div className="relative flex min-h-screen flex-col justify-center items-center overflow-hidden bg-gray-50 py-12" style={{display: !flag ? "block" : "none"}}>
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>OTP Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your number</p>
              </div>
            </div>

            <div>
              <form onSubmit={getOtp}>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-full h-11">
                        <PhoneInput 
                            className="w-full h-full flex items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                            defaultCountry="IN"
                            value={number}
                            onChange={setNumber}
                            placeholder="Enter the number"
                        />
                      
                    </div>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button type="submit" className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                        Sent Otp
                      </button>
                    </div>
                    <div>
                      <button onClick={()=>navigate('/login')} className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                        Cancel
                      </button>
                    </div>
                    <div className="flex justify-center items-center text-center" id="recaptcha-container"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>




      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12" style={{display: flag ? "block" : "none"}}>
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>OTP Verification</p>
              </div>

              <div className="flex flex-col text-sm font-medium text-gray-400">
                <p>We have sent a code to your number</p>
                <div>
                    <p>{error ? "Invalid Otp" : ""}</p>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={verifyOtp}>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-full h-11">
                        <input 
                            className="w-full h-full flex items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                            value={otp}
                            onChange={(e)=>setOtp(e.target.value)}
                            placeholder="Enter the Otp"
                        />
                      
                    </div>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button type="submit" className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                        verify Otp
                      </button>
                    </div>
                    <div>
                      <button onClick={()=>navigate('/login')} className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                        Cancel
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{" "}
                      <button
                        className="flex flex-row items-center text-blue-600"
                        onClick={()=>getOtp}
                      >
                        Resend
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  
  );
}

export default OtpLogin;
