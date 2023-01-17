import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: { blogList: [] },
  reducers: {
    addToBox: (state, action) => {
      state.blogList = [action.payload, ...state.blogList];
    },
  },
});
//export const { addToBox } = blogSlice.actions;

export default blogSlice;
