import { toast } from "sonner";
import api from "./api";

export const register = async (values, navigate) => {
  const res = await api.post("/register", values);
  navigate("/auth");
};
export const login = async (values, navigate) => {
  try {
    const res = await api.post("/login", values);
    sessionStorage.setItem("id", res.data.data._id);
    sessionStorage.setItem("token", res.data.token);
    toast.success(res.data.message || "Login successful");
    navigate("/home");
  } catch (error) {
    toast.error(error?.response?.data?.message || "Login failed");
  }
};
