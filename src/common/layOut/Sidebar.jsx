import React from "react";

function Sidebar({ data }) {
  return (
    <div>
      <div className="sticky top-0  ">
        <div className="lg:w-[20vw] h-[94vh] bg-blue-300 rounded-b-sm shadow-xl p-10 flex flex-col gap-y-15 overflow-auto  sm:w-full">
          {data.map((item) => (
           <div className="flex justify-around items-center">
             <h1>{item.name}</h1>
             <h1>{item.icon}</h1>
           </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
