import { configureStore } from '@reduxjs/toolkit';

import * as fromPlantSlice from './plantSlice';
console.log({ fromPlantSlice });

const { plantSlice } = fromPlantSlice;
const reducer = {
  [plantSlice.name]: plantSlice.reducer,
};

const middleware = (getDefault) => [...getDefault()];

export const store = configureStore({ reducer, middleware });
