import React from 'react'
import * as fromFishSlice from './fishSlice'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const DL = styled.dl`
  width: 600px;
`
const Line = styled.div`
  display: table-row;
`
const DT = styled.dt`
  font-weight: 700;
  display: table-cell;
  padding-right: 1rem;
`
const DD = styled.dd`
  display: table-cell;
`

function Field({ property, value }) {
    return (
        <Line>
            <DT>{property}</DT>
            <DD>{value}</DD>
        </Line>
    )
}

const Wrapper = styled.div`
  background-color: #b8e6ff;
  display: float;
  padding: 1rem;
`

function Fish({ fish }) {
    const removeFish = fromFishSlice.useRemoveFish()
    return (
        <Wrapper>
            <DL>
                <Field property="id" value={fish.id} />
                <Field property="name" value={fish.name} />
            </DL>
            <button onClick={() => removeFish(fish)}>Remove</button>
        </Wrapper>
    )
}

export function Fishes() {
    const fishes = useSelector(fromFishSlice.selectAll)
    const addRandomFish = fromFishSlice.useAddRandomFish()
    return (
        <div>
            <button onClick={addRandomFish}>Add fish</button>
            {fishes.map((fish) => (
                <Fish key={fish.id} fish={fish} />
            ))}
        </div>
    )
}
