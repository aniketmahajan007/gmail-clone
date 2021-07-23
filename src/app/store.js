import { configureStore } from '@reduxjs/toolkit';
import gmailReducer from "../features/gmail/gmailSlice";

export const store = configureStore({
  reducer: {
    gmail: gmailReducer
  },
});
