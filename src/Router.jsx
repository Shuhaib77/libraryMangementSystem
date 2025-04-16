import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Rregister from "./pages/auth/register/Rregister";
import AuthLayOut from "./pages/auth/AuthLayOut";

import HomeLayOut from "./pages/nonauth/home/HomeLayOut";
import AdminLayOut from "./pages/nonauth/admin/AdminLayOut";
import ViewBooks from "./pages/nonauth/admin/handleBook/viewbook/ViewBooks";
import HandleBook from "./pages/nonauth/admin/handleBook/HandleBook";

function UserRoute() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<AuthLayOut />}>
          <Route index element={<Login />}></Route>
          <Route path="register" element={<Rregister />}></Route>
        </Route>
        <Route path="/home" element={<HomeLayOut />}></Route>
        <Route path="/admin" element={<AdminLayOut />}>
          <Route path="view" element={<ViewBooks />}></Route>
          <Route path="update" element={<HandleBook />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default UserRoute;
