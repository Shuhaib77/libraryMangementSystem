import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Rregister from "./pages/auth/register/Rregister";
import AuthLayOut from "./pages/auth/AuthLayOut";

import HomeLayOut from "./pages/nonauth/home/HomeLayOut";

function UserRoute() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<AuthLayOut />}>
          <Route index  element={<Login />}></Route>
          <Route path="register" element={<Rregister />}></Route>
        </Route>
        <Route path="/home" element={<HomeLayOut />}></Route>
      </Routes>
     
    </div>
  );
}

export default UserRoute;
