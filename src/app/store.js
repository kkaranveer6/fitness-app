import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./exerciseSlice";

export default configureStore({
  reducer: {
    exercise: exerciseReducer,
  },
});
