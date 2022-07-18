import { createSelector, createSlice } from '@reduxjs/toolkit'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { faker } from '@faker-js/faker'
import { v4 as uuid } from 'uuid'

export const fishShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
})

export const fishSlice = createSlice({
  name: 'fishSlice',
  initialState: [],
  reducers: {
    addFish(state, action) {
      state.push(action.payload)
    },
    updateFish(state, action) {
      const updatedFish = action.payload
      const foundFish = state.find(
        (existingFish) => existingFish.id === action.payload.id
      )
      if (foundFish) {
        Object.assign(foundFish, updatedFish)
      }
    },
    removeFish(state, action) {
      return state.filter((fish) => fish.id !== action.payload.id)
    },
  },
})

export const selectAll = (state) => state[fishSlice.name]
export const makeSelectById = () =>
  /* We use a selector creator here because the selector has its own internal memoization state
   * and we need each component that invokes the slice hook to get its own instance of the selector.
   * See https://github.com/reduxjs/reselect#q-can-i-share-a-selector-across-multiple-component-instances
   */
  createSelector([selectAll, (_, id) => id], (allFish, id) =>
    allFish.find((fish) => fish.id === id)
  )
export const selectFishesByStartsWith = (s) =>
  createSelector([selectAll], (state) =>
    state.filter((fish) => fish.name.startsWith(s))
  )

export function useAddRandomFish() {
  const dispatch = useDispatch()
  return function addRandomFish() {
    const fish = {
      id: uuid(),
      name: faker.animal.fish(),
      metadata: {
        updatedAt: new Date().toISOString(),
      },
    }
    dispatch(fishSlice.actions.addFish(fish))
  }
}

export function useFish({ id }) {
  const dispatch = useDispatch()
  // Make our very own instance of selectById because it has internal state just for our id.
  const selectById = React.useMemo(makeSelectById, [])
  return {
    value: useSelector((state) => selectById(state, id)),
    update: (fish) => dispatch(fishSlice.actions.updateFish(fish)),
  }
}

export function useRemoveFish() {
  const dispatch = useDispatch()
  return function removeFish(fish) {
    dispatch(fishSlice.actions.removeFish(fish))
  }
}
