/** @format */

import { configureStore } from "@reduxjs/toolkit";
import flowReducer from "./storeController";

export const store = configureStore({
  reducer: {
    flow: flowReducer,
  },
});
