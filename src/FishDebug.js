import React from 'react'
import * as fishSlice from './fishSlice'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Pre = styled.pre`
  background: #ddd;
  border: thin solid #bbb;
  border-radius: 2px;
  padding: 8px;
`

export function FishDebug() {
  const fishes = useSelector(fishSlice.selectAll)
  return <Pre>{JSON.stringify(fishes, null, 2)}</Pre>
}
