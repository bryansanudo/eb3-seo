import { configureStore } from "@reduxjs/toolkit";
import { Slice } from "@/store/slice";

export default configureStore({
  reducer: {
    values: Slice.reducer,
  },
});
