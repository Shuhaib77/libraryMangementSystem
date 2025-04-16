// UseAuth.js
import { useFormik } from "formik";
import { login, register } from "../service/auth";
import { useNavigate } from "react-router-dom";

function UseAuth(initialvalues, onsubmit, name, validationSchema) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values, "pop");
      name === "Register"
        ? await register(values, navigate)
        : await login(values, navigate);
    },
  });

  return { formik };
}

export default UseAuth;
