// const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESSKEY;
const BASE_URL = "https://api.unsplash.com/photos/";

const initialState = {
  photos: [],
  isLoading: true,
};

export const getUnsplash = createAsyncThunk("unsplash/getUnsplash", () => {
  return axios
    .get(`${BASE_URL}?page=1&per_page=30&client_id=${ACCESS_KEY}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
});

const unsplashSlice = createSlice({
  name: "unsplash",
  initialState,
  extraReducers: {
    [getUnsplash.pending]: (state) => {
      state.isLoading = true;
    },
    [getUnsplash.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.photos = action.payload;
    },
    [getUnsplash.rejected]: (state) => {
      state.isLoading = false;
      console.log(state);
    },
  },
});

export default unsplashSlice.reducer;
