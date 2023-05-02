import { useDispatch } from "react-redux";
import { auth } from "../Api/axiosAuthInstance";
import { setDetails } from "../Redux/Slices/userSlice";

function useRefreshToken() {
  const dispatch = useDispatch();
  const refresh = async () => {
    try {
      const response = await auth.get("/token");
      const accessToken = response.data.accessToken;
      dispatch(setDetails({ accessToken: accessToken }));
      return accessToken;
    } catch (error) {
       console.log("From useRefreshtoken",error);
    }
  };
  return refresh;
}

export default useRefreshToken;
