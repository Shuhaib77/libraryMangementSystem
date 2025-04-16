// redux/bookSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../src/service/api";

export const listBook = createAsyncThunk("viewBook", async (search = "") => {
  try {
    console.log("Filter Params:", search);
    const res = await api.get(`books?search=${search}`);
    console.log("Response Data:", res.data);
    return res.data.data;
  } catch (error) {
    console.error("Error fetching filtered data:", error);
    throw error;
  }
});

const initialState = {
  search: "",
  data: [],
  error: "",
  loading: false,
};

const bookSlice = createSlice({
  name: "bookSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listBook.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(listBook.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(listBook.rejected, (state) => {
        state.loading = false;
        state.data=""
        state.error = "Error occurred while fetching data";
      });
  },
});

export default bookSlice.reducer;
