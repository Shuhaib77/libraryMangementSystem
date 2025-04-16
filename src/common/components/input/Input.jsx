import React from "react";

function Input({ placeholder, type, handleChange, handleBlur, value, name }) {
  const basicStyle = "w-full p-3 border rounded";
  return (
    <input
      className={`${basicStyle}`}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      name={name}
      type={type}
    ></input>
  );
}

export default Input;
