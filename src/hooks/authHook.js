// UseAuth.js
import { useFormik } from "formik";
import { bookUpdate, login, register } from "../service/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function UseAuth(initialvalues, onsubmit, name, validationSchema, id) {
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values, "pop");
      name === "Register"
        ? await register(values, navigate)
        : name === "Update"
        ? await bookUpdate(id,values,navigate,dispatch)
        :name==="addbook"?bookUpdate(null,values,navigate,dispatch): await login(values, navigate);
    },
  });
 console.log(name,"jj");
 
  return { formik };
}

export default UseAuth;
