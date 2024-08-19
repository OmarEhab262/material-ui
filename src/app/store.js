import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"; // Adjust the path to where userSlice is located

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
