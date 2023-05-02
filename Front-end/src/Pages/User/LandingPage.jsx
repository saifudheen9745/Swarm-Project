import React from 'react'
import apiCall from '../../Api/api'
import LandingComponent from '../../Components/LandingPage/LandingComponent'


function LandingPage() {

  const {check} = apiCall()


  return (

    <div><LandingComponent/></div>
  )
}

export default LandingPage