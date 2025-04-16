import React, { useState } from "react";
import Sidebar from "../../../common/layOut/Sidebar";
import { Outlet } from "react-router-dom";
// import ViewBooks from "./handleBook/viewbook/ViewBooks";
import Header from "../../../common/layOut/Header";

function AdminLayOut() {
  const [open, setOpen] = useState(false);
  const data = [
    {
      name: "ViewBook",
      icaon: "icon",
    },
  ];

  return (
    <div>
      <div>
        <Header open={open} setOpen={setOpen} />
      </div>
      <div className="flex justify-between">
        {open && (
          <div>
            <Sidebar data={data} />
          </div>
        )}
        <div className="w-full p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayOut;
