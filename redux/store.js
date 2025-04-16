import { configureStore } from "@reduxjs/toolkit";
// import productslice from '../redux/productSlice'
// import filterSlice from '../redux/filterSlice'
// import sorteSlice from '../redux/sorteSlice'
// import searchSlice from '../redux/searchSlice'
import  bookSlice from '../redux/bookSlice'

export const store = configureStore({
  reducer: {
    bookData: bookSlice,
  },
});

export default store;
