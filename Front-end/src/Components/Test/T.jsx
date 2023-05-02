import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import apiCall from "../../Api/api";
import { userReducer } from "../../Redux/Slices/userSlice";

function T() {
  let a = useSelector(userReducer);
  console.log("from test",a);
  const [sample,setSample] = useState('noData')
  const { check,createNewAccessToken } = apiCall();
  const handleTestButton = async () => {
    try {
      const res = await check();
      setSample(res.data.msg);
    } catch (error) {
      console.log("error from axios", error);
    }
  };

  const handleCokkie = async () => {
    try {
      const res = await createNewAccessToken();
    } catch (error) {
      console.log("error from axios", error);
    }
  };
  return (
    <div>
      {Object.keys(a).map((item, i) => {
        return <p key={i}>{item + ":" + a[item]}</p>;
      })}
      <div>{sample}</div>
      <div>
        <button onClick={handleTestButton}>TestButton</button>
        <button onClick={handleCokkie}>Coo</button>
      </div>
    </div>
  );
}

export default T;
