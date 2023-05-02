import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { auth } from "./axiosAuthInstance";

const apiCall = () => {
  const axiosPrivate = useAxiosPrivate()
  
  const doRegister = async (signupFormData) => {
    try {
      const response = await auth.post("/register", signupFormData);
      return response.data;
    } catch (error) {
      throw { msg: error.response.data.error.error.msg };
    }
  };

  const check = async () => {
    try {
      const response = await axiosPrivate.post("/checking");
      return response;
    } catch (error) {
      throw { error };
    }
  };

  const createNewAccessToken = async () => {
    try {
      const response = await auth.get("/token");
      return response.data;
    } catch (error) {
      throw { msg: error.response.data.message };
    }
  };

  const doLogin = async (loginFormData) => {
    try {
      //const response = await check()
      const response = await auth.post("/", loginFormData);
      return response.data;
    } catch (error) {
      throw { msg: error.response.data.error.error.msg };
    }
  };

  const verifyMail = async (urlData) => {
    try {
      const response = await auth.post("/confirmation", urlData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw { msg: error.response.data.error.error };
    }
  };

  const resendVerifyMail = async (userId) => {
    try {
      const response = await auth.post("/resendconfirmationmail", userId);
      return response.data;
    } catch (error) {
      console.log(error.response.data.error.error);
      throw { msg: error.response.data.error.error.msg };
    }
  };

  const createJwtToken = async (tokenData) => {
    try {
      const response = await auth.post("/otptoken", tokenData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw { msg: error.response.data.error.error.msg };
    }
  };

  const doRgisterWithGoogle = async (googleData) => {
    try {
      const response = await auth.post("/googleregister", googleData);
      return response.data;
    } catch (error) {
      throw { msg: error.response.data.error.error.msg };
    }
  };

  const doSignInWithGoogle = async (googleData) => {
    try {
      const response = await auth.post("/googlelogin", googleData);
      return response.data;
    } catch (error) {
      throw { msg: error.response.data.error.error.msg };
    }
  };

  const sentOtpForPasswordChange = async (email) => {
    try {
      const response = await auth.post("/getotpforpasswordchange", email);
      return response.data;
    } catch (error) {
      throw { msg: error.response.data.error.error.msg };
    }
  };

  const verifyOtpForPasswordChange = async (email) => {
    try {
      const response = await auth.post("/verifyotpforpasswordchange", email);
      return response.data;
    } catch (error) {
      throw { msg: error.response.data.error.error.msg };
    }
  };

  const updatePassword = async (passwords) => {
    try {
      const response = await auth.post("/updatepassword", passwords);
      return response.data;
    } catch (error) {
      throw { msg: error.response.data.error.error.msg };
    }
  };

  const checkNumber = async (number) => {
    try {
      console.log(number);
      const response = await auth.post("/checkmobilenumber", number);
      return response.data;
    } catch (error) {
      throw { msg: error.response.data.error.error.msg };
    }
  };

  const getUser = async(userId)=>{
    try {
      const response = await axiosPrivate.get(`/getuser/${userId}`)
      return response
    } catch (error) {
      throw{error}
    }
  }

  const editUserDetails = async(userDetails)=>{
    try {
      const response = await axiosPrivate.post('/edituser',{userDetails})
      return response
    } catch (error) {
      
      throw{error}
    }
  }

  const updateUserPassword = async (passDetails)=>{
    try {
      const response = await axiosPrivate.post('/updateuserpassword',{passDetails})
      return response
    } catch (error) {
      throw{err:error.response.data.error.msg}
    }
  }



  return {
    updateUserPassword,
    editUserDetails,
    check,
    createNewAccessToken,
    doRegister,
    doLogin,
    checkNumber,
    verifyMail,
    createJwtToken,
    doRgisterWithGoogle,
    doSignInWithGoogle,
    resendVerifyMail,
    sentOtpForPasswordChange,
    verifyOtpForPasswordChange,
    updatePassword,
    getUser
  };
};

export default apiCall;
