import { toast } from "sonner";
import api from "./api";
import { addBook, listBook, updateBook } from "../../redux/bookSlice";

export const register = async (values, navigate) => {
  const res = await api.post("/register", values);
  navigate("/");
};
export const login = async (values, navigate) => {
  try {
    const res = await api.post("/login", values);
    sessionStorage.setItem("id", res.data.data._id);
    sessionStorage.setItem("token", res.data.token);
    toast.success(res.data.message || "Login successful");
    res.data.data?.role === "admin" ? navigate("/admin/view") : navigate("/home/bookview");
  } catch (error) {
    toast.error(error?.response?.data?.message || "Login failed");
  }
};

export const bookUpdate = async (id, values, navigate, dispatch) => {
  const formData = new FormData();
  formData.append("author", values.author);
  formData.append("title", values.title);
  formData.append("isbn", values.isbn);
  formData.append("published", values.published);
  formData.append("availableCopie", values.availableCopie);
  formData.append("image", values.image);

  console.log(formData, "grgr");

  try {
    if (id) {
      console.log("idd:", id);
      console.log("value", values);
      await dispatch(updateBook({ id, values }));
      dispatch(listBook(""));
      navigate("/admin/view");
    } else {
      await dispatch(addBook(values));
      dispatch(listBook(""));
      navigate("/admin/view");
    }
  } catch (error) {}
};
