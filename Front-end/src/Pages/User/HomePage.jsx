import React, { useEffect, useLayoutEffect, useState } from "react";
import AsideNavbar from "../../Components/AsideComponent/AsideNav";
import Navbar from "../../Components/Navbar/Navbar";
import MainSide from "../../Components/MainSide/MainSide";
import { useSelector } from "react-redux";
import { userReducer } from "../../Redux/Slices/userSlice";
import { useNavigate } from "react-router-dom";


function HomePage() {
  const {accessToken} = useSelector(userReducer)
  const navigate = useNavigate()
  useEffect(()=>{
    if(accessToken == undefined || accessToken == ""){
      navigate('/login')
    }
  })
  return (
    <div className="flex h-screen overflow-hidden">
      <AsideNavbar />
      <div className="w-full">
        <Navbar />
        <MainSide />
      </div>
    </div>
  );
}

export default HomePage;
