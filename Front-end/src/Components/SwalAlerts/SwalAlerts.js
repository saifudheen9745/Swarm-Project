import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import apiCall from "../../Api/api";

const swalAlerts = () => {
  const { resendVerifyMail } = apiCall();
  const navigate = useNavigate();
  const successRegistration = () => {
    Swal.fire({
      title: "Confirm your email to complete the registration ",
      text: "To verify, Click on the link sent to your email",
      icon: "success",
      height: "200",
      width: "300",
      confirmButtonText: "Login",
      showCancelButton: false,
      allowOutsideClick: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect to login page
        navigate("/login");
      }
    });
  };

  const verifyEmailSwal = (email) => {
    Swal.fire({
      title: "Please confirm your email to Login ",
      text: "To verify, Click on the link sent to your email, if not",
      icon: "success",
      height: "200",
      width: "300",
      confirmButtonText: "Resent verify mail",
      allowOutsideClick: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect to login page
        navigate("/login");
      }
    });
  };

  const successAlert = (data, heading) => {
    Swal.fire({
      icon: "success",
      title: `${heading}`,
      text: `${data}`,
    });
  };

  const emailSentSuccessfully = (email) => {
    Swal.fire({
      title: "Invitation sent successfully",
      icon: "success",
      height: "200",
      width: "300",
      confirmButtonText: "Close",
      allowOutsideClick: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect to login page
        navigate("/login");
      }
    });
  };

  const projectCreationSuccess = (email) => {
    Swal.fire({
      title: "Project created successfully",
      icon: "success",
      height: "200",
      width: "300",
      confirmButtonText: "Go to home",
      allowOutsideClick: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect to login page
        navigate("/home");
      }
    });
  };

  const deleteConfirmation = (deleteTask,taskId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(taskId)
      }
    })
  };

  return {
    deleteConfirmation,
    successRegistration,
    verifyEmailSwal,
    emailSentSuccessfully,
    projectCreationSuccess,
    successAlert,
  };
};

export default swalAlerts;
