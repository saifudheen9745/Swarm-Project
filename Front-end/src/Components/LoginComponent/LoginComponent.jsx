import React from 'react'
//Axios api call
import apiCall from '../../Api/api'
//Custom login validation hook
import useLoginValidation from '../../Hooks/useLoginValidation'
//Toastify alerts
import {ToastContainer} from 'react-toastify'
import { invalidFormToast, invalidLoginCred, } from '../ToastifyAlerts/ToastifyAlerts'
import { useNavigate } from 'react-router-dom'
//Redux hooks
import {useDispatch} from 'react-redux'

import {setDetails} from '../../Redux/Slices/userSlice'
import userAuthentications from '../../Firebase/UserAuthentications'






function LoginComponent() {
    
    const {userSignInGoogleAuth} = userAuthentications()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {doLogin} = apiCall()

    const {handleInputChange,isValidForm,loginFormData} = useLoginValidation()

    

    const handleSubmitForm = async(e)=>{
        const formStatus = isValidForm(e)
        if(!formStatus){
            invalidFormToast()
            return
        }
        try {
            const loginResponse = await doLogin(loginFormData)
            const {userId,name,email,accessToken} = loginResponse
            dispatch(setDetails({userId,name,email,accessToken}))
            navigate('/home')
        } catch (error) {
            invalidLoginCred(error.msg)
        }
        
    }

    const handleGoogleSignIn = async()=>{
        userSignInGoogleAuth()
    }

  return (
    <>
        <div className='h-screen flex justify-center items-center bg-gradient-to-r from-green-300 to-blue-400'>
            <div className='drop-shadow-2xl pt-5 lg:flex bg-gradient-to-r w-full lg:w-4/5 shadow-lg h-screen lg:h-4/5 lg:rounded-2xl from-green-300 to-blue-400'>
                <div className='flex flex-col lg:w-2/5 mx-4 justify-center'>
                    <div className='flex p-4 justify-center items-center '>
                        <img className="lg:w-1/5 w-1/5 mb-6"  src="./Images/LOGO.png" alt="LOGO"/>
                        <p className='text-5xl ml-2 font-bold text-green-900 drop-shadow-lg'>SWARM</p>
                    </div>
                    <div className='flex justify-center lg:mb-32 lg:ml-16'>
                        <p className='font-bold text-xl'>Join the hive mind of productivity. <br /> Swarm in and get things done</p>
                    </div>

                </div>
                <div className='lg:mx-16 lg:w-3/5 p-4'>
                    <div className='flex flex-col justify-center p-4 lg:mt-5 text-center'>
                        <p className='font-bold text-xl lg:text-6xl mb-3 text-indigo-900'>Login</p>
                        <p className='font-bold text-xl lg:text-2xl mt-2 text-gray-700'>Together we acheive</p>
                    </div>
                    <div className='flex flex-col justify-center mt-5'>
                        <div className='text-center'>
                            <div className='flex justify-center'>
                            <button onClick={handleGoogleSignIn} type="button" className="text-white w-auto bg-[#4285F4] hover:bg-[#4285F4]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                            <svg className="w-auto h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                            Sign in with Google
                            </button>
                            <button onClick={()=>navigate('/otp')} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                            Sign in with OTP
                            </button>
                        </div>
                        </div>
                        
                        <div className='flex mt-2 px-6'>
                            <hr className='w-full dark:bg-black mt-3 mr-2' /> 
                            <p className='text-gray-600'>OR</p>
                            <hr className='w-full text-blue-50  mt-3 ml-2' />
                        </div>

                    </div>
                    <form onSubmit={handleSubmitForm}>
                        <div className='mt-5 px-6'>
                            <input name='email' onChange={handleInputChange} value={loginFormData.email} type="text" placeholder='Email,Mobile' className='rounded-lg p-2  w-full '/><br />  
                        </div>
                        <div className='mt-5 px-6'>
                            <input name='password' onChange={handleInputChange} value={loginFormData.password} type="text" placeholder='Password' className='rounded-lg p-2  w-full '/><br />
                        </div>
                        <div className='mt-5 px-5 text-white hover:text-green-900'>
                            <p onClick={()=>navigate('/resetpassword')}>Forgot Password?</p>
                        </div>
                        <div className='mt-5 flex justify-center'>
                            <button type="submit" className="text-white lg:w-2/6 bg-gradient-to-br to-green-800 from-blue-600 hover:bg-gradient-to-bl  shadow-lg  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><span className='text-lg'>Sign Up</span></button>
                        </div>
                    </form>
                    <div className='mt-2'>
                        <p className='text-blue-900 text-right text-lg'>Dont have an account yet?<span onClick={()=>{navigate('/register')}} className='text-white underline ml-4 hover:text-green-900 hover:cursor-pointer'>Register</span></p>
                    </div>
                </div>
                
            </div>
        </div>
        <ToastContainer/>
    </>
  )
}

export default LoginComponent