import React from 'react'
import PropTypes from 'prop-types'
import * as fromFishSlice from './fishSlice'
import { useSelector } from 'react-redux'

export function FishesByLetter({ startsWith }) {
  const fishes = useSelector(
    fromFishSlice.selectFishesByStartsWith(startsWith)
  )

  return (
    <ul>
      {fishes.map((fish) => (
        <li key={fish.id}>{fish.name}</li>
      ))}
    </ul>
  )
}

FishesByLetter.propTypes = {
  startsWith: PropTypes.string.isRequired,
}
