import { useState } from "react"

const useLoginValidation = ()=>{

    const [loginFormData,setLoginFormData] = useState({
        email:"",
        password:""
    })

    const handleInputChange = (e)=>{
        const {name,value} = e.target

        setLoginFormData({...loginFormData,[name]:value})
    }
    
    const isValidForm = (e)=>{
        e.preventDefault()
        let status = true
        for(const keys in loginFormData){
            if(!loginFormData[keys].trim()){
                status = false
            }
        }
        return status
    }

    return {handleInputChange,isValidForm,loginFormData}

}

export default useLoginValidation