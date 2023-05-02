import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { userReducer } from "../Redux/Slices/userSlice";
import useRefreshToken from "./useRefreshToken";

function useAxiosPrivate() {
  const accessToken = useSelector(userReducer)?.accessToken;
  const refresh = useRefreshToken();

  const axiosPrivate = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
  });

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config?.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error.response.status === 403 && !prevRequest.sent ) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
    
  }, [accessToken, refresh]);

  return axiosPrivate;
}

export default useAxiosPrivate;
