import React, { useState } from "react";
// import BookView from "./layOut/BookView";
import Sidebar from "../../../common/layOut/Sidebar";
import Header from "../../../common/layOut/Header";
import { Outlet } from "react-router-dom";

function HomeLayOut() {
  const [open, setOpen] = useState(false);
  const data = [
    {
      name: "Library",
      icon: "icon",
      url: "bookview",
    },
    {
      name: "borrowList",
      icon: "icon",
      url: "boorrow",
    },
  ];
  return (
    <div>
      <div>
        <Header setOpen={setOpen} open={open} />
      </div>
      <div className="lg:flex-row sm:flex flex-col   ">
        {open && (
          <div className="sticky">
            <Sidebar data={data} />
          </div>
        )}
        <div className="w-full  p-10 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeLayOut;
