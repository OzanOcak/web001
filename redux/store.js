import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./reducers/profileReducer";

const store = configureStore({
  reducer: {
    blog: blogSlice.reducer,
  },
});
export default store;
