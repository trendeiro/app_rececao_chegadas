import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./Slice/Form/Form-slice";

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});

export default store;
