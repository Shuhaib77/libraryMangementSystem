import React, { useState } from "react";
import BookView from "./layOut/BookView";
import Sidebar from "../../../common/layOut/Sidebar";
import Header from "../../../common/layOut/Header";

function HomeLayOut() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>
        <Header setOpen={setOpen} open={open} />
      </div>
      <div className="lg:flex-row sm:flex flex-col   ">
        {open && (
          <div className="">
            <Sidebar />
          </div>
        )}
        <div className="w-full p-10 ">
          <BookView />
        </div>
      </div>
    </div>
  );
}

export default HomeLayOut;
