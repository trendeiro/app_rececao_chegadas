import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    resetForm: null,
    form: {
      formValid: false,
      sendForm: false,
    },
  },
  reducers: {
    resetState(state, action) {
      state.resetForm = null;
      state.sendForm = false;
      state.form = {
        formValid: false,
        sendForm: false,
      };
    },
    createResetFunction(state, action) {
      state.resetForm = action.payload;
    },
    validateForm(state, action) {
      state.form.formValid = action.payload;
    },
    sendForm(state, action) {
      state.form.sendForm = action.payload;
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice;
