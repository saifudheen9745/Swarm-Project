import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import { useEffect } from "react";
import {BiMessageSquareAdd} from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, themeReducer } from "../../Redux/Slices/themeSlice";
import { resetDetails } from "../../Redux/Slices/userSlice";


function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [hamBurger,setHamBurger] = useState({
    mainMenu : false
  })

  const theme = useSelector(themeReducer)

  useEffect(() => {
    if (theme.dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme.dark]);

  const handleThemeButton = async()=>{
    dispatch(toggleTheme())
  }

  return (
    <div>
      <nav className=" bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900  w-full z-20 top-0 left-0 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link className="flex items-center">
            <img
              src="./Images/LOGO.png"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Swarm
            </span>
          </Link>
          <div className="flex md:order-2 gap-4">
            <div className="bg-gray-700 rounded-lg mt-0.5 hover:cursor-pointer h-9 w-9 flex justify-center items-center" onClick={handleThemeButton}>
              {theme.dark ? (
                <BsSunFill
                  
                  className="text-white"
                />
              ) : (
                <BsFillMoonFill
                  className="text-white"
                />
              )}
            </div>
            
            <Link
              type="button"
              className="hidden md:flex text-white gap-1 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-700 dark:hover:bg-green-900 dark:focus:ring-green-800"
              to={'/project/create'}
            >
              <BiMessageSquareAdd className="text-xl"/>
              Create
            </Link>
          </div>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
