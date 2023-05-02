import React, { useState } from 'react'

//Custom hook for validation
import useSignupValidation from '../../Hooks/useSignupValidation'
//Toastify
import {ToastContainer} from 'react-toastify'
import { invalidFormToast, invalidRegisterCred } from '../ToastifyAlerts/ToastifyAlerts'
//Axios api call
import apiCall from '../../Api/api'
//SweetAlert
import swalAlerts from '../SwalAlerts/SwalAlerts'
import { useNavigate } from 'react-router-dom'
//

import userAuthentications from '../../Firebase/UserAuthentications'

function SignUpPage() {

    const {userSignUpGoogleAuth} = userAuthentications()

    const navigate = useNavigate()

    const {successRegistration} = swalAlerts()

    const {doRegister} = apiCall()

    const {handleInputChange,isValidForm,errors,signupFormData} = useSignupValidation()

    const handleSubmit = async(e)=>{
        let formStatus = await isValidForm(e)
        if(!formStatus){
            invalidFormToast()
            return 
        }
        try {
            const signupResponse = await doRegister(signupFormData) //api call to register user
  
            successRegistration()
        } catch (error) {
       
            invalidRegisterCred(error)
        }
        
    }

    const handleGoogleSignUp = ()=>{
        userSignUpGoogleAuth()
    }

  return (
    <>
        <div className='h-screen flex justify-center items-center bg-gradient-to-r from-green-300 to-blue-400'>
            <div className='drop-shadow-2xl lg:flex bg-gradient-to-r w-full lg:w-4/5 shadow-lg  lg:h-4/5 lg:rounded-2xl from-green-300 to-blue-400'>
                <div className='flex flex-col lg:w-2/5 mx-4 justify-center'>
                    <div className='flex p-4 justify-center items-center '>
                        <img className="lg:w-1/5 w-1/5 mb-6"  src="./Images/LOGO.png" alt="LOGO"/>
                        <p className='text-5xl ml-2 font-bold text-green-900 drop-shadow-lg'>SWARM</p>
                    </div>
                    <div className='flex justify-center lg:mb-32 lg:ml-16'>
                        <p className='font-bold text-xl'>Join the hive mind of productivity. <br /> Swarm in and get things done</p>
                    </div>

                </div>
                <div className='lg:mx-16 lg:w-3/5 p-5'>
                    <div className=' flex justify-center p-4 lg:mt-2'>
                        <p className='font-bold text-xl lg:text-4xl text-indigo-900'>Register to explore the world</p>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='text-center'>
                            <button onClick={handleGoogleSignUp} type="button" className="text-white w-auto bg-[#4285F4] hover:bg-[#4285F4]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                            <svg className="w-auto h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                            Sign in with Google
                            </button>
                        </div>
                        <div className='flex'>
                            <hr className='w-full dark:bg-black mt-3 mr-2' /> 
                            <p className='text-gray-600'>OR</p>
                            <hr className='w-full text-blue-50  mt-3 ml-2' />
                        </div>

                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className='mt-5'>
                            <input name='fname' onChange={handleInputChange} value={signupFormData.fname} type="text" placeholder='Full Name' className='rounded-lg p-2  w-full '/><br />
                            <p className='text-red-600'>{errors.fname}</p> 
                        </div>

                        <div className='mt-5 '>
                            
                            <div>
                                <input name='email' onChange={handleInputChange} value={signupFormData.email} type="text" placeholder='Email' className='rounded-lg p-2  w-full '/><br />
                                <p className='text-red-600'>{errors.email}</p> 
                            </div>
                            <div>
                                <input name='mobile' onChange={handleInputChange} value={signupFormData.mobile} type="text" placeholder='Mobile' className='mt-5 rounded-lg p-2  w-full'/>
                                <p className='text-red-600'>{errors.mobile}</p> 
                            </div>
                        </div>
                        <div className='mt-5 '>
                            <div>
                                <input name='password' onChange={handleInputChange} value={signupFormData.password} type="text" placeholder='Password' className='rounded-lg p-2  w-full '/><br />
                                <p className='text-red-600'>{errors.password}</p> 
                            </div>
                            <div>
                                <input name='cnfpassword' onChange={handleInputChange} value={signupFormData.cnfpassword} type="text" placeholder='Confirm Password' className='mt-5 rounded-lg p-2  w-full'/>
                                <p className='text-red-600'>{errors.cnfpassword}</p> 
                            </div>
                        </div>
                        <div className='mt-5 flex justify-center'>
                            <button type="submit" className="text-white lg:w-2/6 bg-gradient-to-br to-green-800 from-blue-600 hover:bg-gradient-to-bl  shadow-lg  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><span className='text-xl'>Sign Up</span></button>
                        </div>
                    </form>

                    <div className='mt-2'>
                        <p className='text-blue-900 text-right text-lg'>Already have an account?<span onClick={()=>{navigate('/login')}} className='text-white underline ml-4 hover:text-green-900 hover:cursor-pointer'>Login</span></p>
                    </div>
                </div>
                
            </div>
        </div>
        <ToastContainer/>
    </>
  )
}

export default SignUpPage