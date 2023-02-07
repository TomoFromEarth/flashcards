import { configureStore } from "@reduxjs/toolkit";
import topicsSlice from "../features/topics/Topics";

export default configureStore({
  reducer: {
    topics: topicsSlice.reducer,
  },
});
