import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../src/service/api";

export const addBorrow = createAsyncThunk(
  "addBorrow",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.post(`borrow/${id}`);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error_message || "An error occurred"
      );
    }
  }
);

export const getBorrowByUser = createAsyncThunk(
  "getBorrowByUser",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.get(`boorrowbooks/${id}`);
      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error_message || "An error occurred"
      );
    }
  }
);

export const returnBorrow = createAsyncThunk(
    "returnBorrow",
    async (bookId, { rejectWithValue }) => {
        console.log(bookId);
        
      try {
        const res = await api.post(`book/return/${bookId}`);
        return res.data.data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data?.error_message || "An error occurred"
        );
      }
    }
  );

const borrowSlice = createSlice({
  name: "borrowSlice",
  initialState: {
    borrowed: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBorrow.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBorrow.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addBorrow.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getBorrowByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBorrowByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.borrowed = action.payload;
      })
      .addCase(getBorrowByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
  
});

export default borrowSlice.reducer;
