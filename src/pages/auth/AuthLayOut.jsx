import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayOut() {
  return (
    <>
      <div className="flex justify-around h-screen items-center">
        <div className="w-1/2 h-full ">
          <img
            className="w-full h-full "
            src="https://png.pngtree.com/background/20211215/original/pngtree-photographs-of-unmanned-bookstores-in-the-library-picture-image_1474801.jpg"
            alt=""
          />
        </div>
        <div className="w-1/3 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AuthLayOut;
