import { Bars } from "react-loader-spinner";

import React from "react";

function Bar() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Bars
        height="80"
        width="80"
        color="orange"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Bar;
