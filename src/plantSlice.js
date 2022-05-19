import { createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid';

export const plantSlice = createSlice({
  name: 'plantSlice',
  initialState: [],
  reducers: {
    addPlant(state, action) {
      state.push(action.payload);
    },
    removePlant(state, action) {
      return state.filter((plant) => plant.id !== action.payload.id);
    },
  },
});

export const selectAll = (state) => state[plantSlice.name];
export const selectPlantsByStartsWith = (s) =>
  createDraftSafeSelector([selectAll], (state) =>
    state.filter((plant) => plant.name.startsWith(s))
  );

export function useAddRandomPlant() {
  const dispatch = useDispatch();
  return function addRandomPlant() {
    const plant = {
      id: uuid(),
      name: faker.animal.fish(),
    };
    dispatch(plantSlice.actions.addPlant(plant));
  };
}

export function useRemovePlant() {
  const dispatch = useDispatch();
  return function removePlant(plant) {
    dispatch(plantSlice.actions.removePlant(plant));
  };
}
