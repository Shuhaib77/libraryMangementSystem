import React from "react";
import Input from "../../../common/components/input/Input";
import Button from "../../../common/components/button/Button";
import UseAuth from "../../../hooks/authHook";
import { useNavigate } from "react-router-dom";

function Auth({ name }) {
  const navigate = useNavigate();
  const initialvalues =
    name === "Register"
      ? { email: "", name: "", password: "" }
      : { email: "", password: "" };

  const reg = [
    {
      name: "name",
      type: "text",
    },
    {
      name: "email",
      type: "text",
    },
    {
      name: "password",
      type: "password",
    },
  ];
  const log = [
    {
      name: "email",
      type: "text",
    },
    {
      name: "password",
      type: "password",
    },
  ];
  const { formik } = UseAuth(
    initialvalues,
    (values) => {
      console.log(formik.values);
    },
    name
  );

  const field = name === "Register" ? reg : log;
  return (
    <>
      <form
        action=""
        className="grid grid-cols-1 gap-y-3 "
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-2xl text-gray-700 font-semibold ">{name}</h1>
        {field.map((item, i) => (
          <Input
            key={i + 1}
            placeholder={item.name}
            type={item.type}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            name={item.name}
            value={formik.values[item.name]}
          />
        ))}
        <Button
          name={name}
          type={"submit"}
          className={
            name === "Register"
              ? "bg-green-700 text-white"
              : "bg-blue-500 text-white"
          }
        />
        <h1 className=" cursor-pointer text-blue-800 underline   ">
          {" "}
          {name === "Login" ? (
            <h1
              onClick={() => {
                navigate("/auth/register");
              }}
              className=""
            >
              {" "}
              register?
            </h1>
          ) : (
            <h1
              className=""
              onClick={() => {
                navigate("/auth");
              }}
            >
              {" "}
              Login?
            </h1>
          )}
        </h1>
      </form>
    </>
  );
}

export default Auth;
