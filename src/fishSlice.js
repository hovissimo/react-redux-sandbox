import { createDraftSafeSelector, createSlice } from '@reduxjs/toolkit'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
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
                Object.merge(foundFish, updatedFish)
            }
        },
        removeFish(state, action) {
            return state.filter((fish) => fish.id !== action.payload.id)
        },
    },
})

export const selectAll = (state) => state[fishSlice.name]
export const selectFishesByStartsWith = (s) =>
    createDraftSafeSelector([selectAll], (state) =>
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

export function useRemoveFish() {
    const dispatch = useDispatch()
    return function removeFish(fish) {
        dispatch(fishSlice.actions.removeFish(fish))
    }
}
