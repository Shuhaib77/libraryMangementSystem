import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../redux/bookSlice";
import borrowSlice from "../redux/borrowSlice";
export const store = configureStore({
  reducer: {
    bookData: bookSlice,
    borrowData: borrowSlice,
  },
});

export default store;
