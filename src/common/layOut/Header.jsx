import React from "react";

function Header({ setOpen, open }) {
  return (
    <>
      <div className="flex w-[100vw]   h-[54px] items-center ">
        {console.log(open)}
        
        <div className="w-1/4 flex  items-center mr-4 ">
          <h1
            className="cursor-pointer ml-10"
            onClick={() => {
              open === false ? setOpen(true) : setOpen(false);
            }}
          >
            <i class="fa-solid fa-bars fa-xl"></i>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Header;
