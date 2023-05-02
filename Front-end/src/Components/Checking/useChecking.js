import React, { useEffect } from 'react'
import apiCall from '../../Api/api'
import {useDispatch, useSelector} from 'react-redux'
import { setDetails, userReducer } from '../../Redux/Slices/userSlice'
import axios from 'axios'
import { privateApi } from '../../Api/axiosPrivateInstance'

const useChecking = async()=>{
    
    const gettoken = async()=>{

        const response = await axios.post('http://localhost:3000/checking')
        //console.log(response.data);
        return response.data
    }
    

    return await gettoken() 

  
}

export default useChecking