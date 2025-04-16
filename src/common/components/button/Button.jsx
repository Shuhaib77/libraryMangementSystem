import { button } from "@material-tailwind/react";
import React from "react";

function Button({ name, className, type, onClick }) {
  const basicStyle = "w-full p-2 rounded cursor-pointer";
  return (
    <button
      onClick={onClick}
      className={`${basicStyle} ${className}`}
      type={type}
    >
      {name}
    </button>
  );
}

export default Button;
