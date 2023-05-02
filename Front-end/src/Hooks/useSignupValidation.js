import { useState } from "react"


const useSignupValidation = ()=>{

    const [errors,setErrors] = useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cnfpassword:""
    })

    const [signupFormData,setSignupFormData] = useState({
        fname:'',
        email:'',
        mobile:'',
        password:'',
        cnfpassword:''
    })
    
    const containsNumber = (string)=>{
        return /\d/.test(string)
    }
        
    const length = (string)=>{
        return string.length >= 3
    }

    const containSpecialCharacters = (string)=>{
        return !/^[a-zA-Z\s]+$/.test(string)
    }

    const isValidEmail = (string)=>{
        return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(string)
    }

    const isValidMobile = (string)=>{
        return /^[6-9]\d{9}$/.test(string)
    }

    const passLength = (string)=>{
        return string.length >= 6
    }   

    const handleInputChange = (e)=>{
        let error;
        const {name, value} = e.target
        
        if(!value.trim()){
            error = `${name} is required`
        }else if(name === 'fname'){
            if(containsNumber(value)) error = "Should only contains alphabets";
            if(!length(value)) error = "Should contain atleast 3 alphabets";
        }else if(name === 'email'){
            if(!isValidEmail(value)) error = "Invalid email address"
        }else if(name === 'mobile'){
            if(!isValidMobile(value)) error = "Invalid mobile number"
        }else if(name === 'password'){
            ClipboardEvent
            if(!passLength(value)) error = "Should contain atlest 6 character"
        }else if(name === 'cnfpassword'){
            if(signupFormData.password !== value) error = "Password does not match"
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error,
        }));
        
        setSignupFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        //console.log(signupFormData);
    }


    const isValidForm = async(e)=>{
        e.preventDefault()
        let status = true
            for(const keys in errors){
                if(signupFormData[keys].length == 0 || errors[keys]!=undefined){
                    status = false
                }
            }
        if(signupFormData.password !== signupFormData.cnfpassword) status = false 
        return status
    }

    return {errors,signupFormData,handleInputChange,isValidForm}
}

export default useSignupValidation