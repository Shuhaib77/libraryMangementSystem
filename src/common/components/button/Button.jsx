import { button } from "@material-tailwind/react";
import React from "react";

function Button({ name,className,type }) {
    const basicStyle="w-full p-2 rounded"
  return <button className={`${basicStyle} ${className}`} type={type}>{name}</button>;
}

export default Button;
