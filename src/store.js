import { configureStore } from "@reduxjs/toolkit";

import * as fromFishSlice from "./fishSlice";
console.log({ fromFishSlice });

const { fishSlice } = fromFishSlice;
const reducer = {
  [fishSlice.name]: fishSlice.reducer,
};

const middleware = (getDefault) => [...getDefault()];

export const store = configureStore({ reducer, middleware });
