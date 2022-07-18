import React from 'react'
import * as fromFishSlice from './fishSlice'
import { FishForm } from './FishForm'
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

const Wrapper = styled.div`
  background-color: #b8e6ff;
  display: float;
  padding: 1rem;
`

function Fish({ fish }) {
  const removeFish = fromFishSlice.useRemoveFish()
  const [isEditing, setIsEditing] = React.useState(false)
  return (
    <Wrapper>
      {!isEditing && (
        <>
          <DL>
            <Line>
              <DT>{fish.name}</DT>
              <DD>{fish.id}</DD>
            </Line>
          </DL>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => removeFish(fish)}>Remove</button>
        </>
      )}
      {isEditing && (
        <FishForm fish={fish} onClose={() => setIsEditing(false)} />
      )}
    </Wrapper>
  )
}
Fish.propTypes = {
  fish: fromFishSlice.fishShape.isRequired,
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
