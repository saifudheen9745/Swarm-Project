import React from "react";
import { useSelector } from "react-redux";
import useGreeting from "../../Hooks/useGreetings";
import  {userReducer}  from "../../Redux/Slices/userSlice";


function  MainSide() {
  const {name} = useSelector(userReducer)

  const {formattedDate,greeting} = useGreeting()
  return (
    <div className="h-screen  overflow-scroll p-5 bg-gray-100 dark:bg-slate-800">
      <div className="block text-center ">
        <h1 className="text-center dark:text-white text-lg md:text-2xl font-semibold">{formattedDate}</h1>
        <p className=" text-xl dark:text-white md:text-3xl font-serif mt-2">{greeting}  {name}</p>
      </div>
      <div className="dark:bg-slate-900 w-full h-24 rounded mt-5 bg-white">

      </div>
    </div>
  );
}

export default MainSide;
