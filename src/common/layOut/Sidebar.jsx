import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ data }) {
    const navigate=useNavigate()
  return (
    <div className="sticky top-0">
      <div className="lg:w-[20vw] h-[94vh] bg-blue-300 rounded-b-sm shadow-xl p-4 flex flex-col gap-4 overflow-auto sm:w-full" >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-start p-2 bg-white rounded-md shadow-sm hover:bg-gray-100 transition-all duration-200 cursor-pointer"
            onClick={()=>{
                navigate(`${item.url}`)
              }}
          >
            <span className="text-xl mr-3">{item.icon}</span>
            <h1 className="text-base font-medium">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
