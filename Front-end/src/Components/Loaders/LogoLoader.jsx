import React from 'react'

const LogoLoader = () => {
  return (
    <div className=' h-screen w-full  bg-slate-900'> 
        <div className='h-screen flex justify-center items-center'>
            <img className='w-28 animate-bounce' src="./Images/LOGO.png" alt="" />
        </div> 
    </div>
  )
}

export default LogoLoader