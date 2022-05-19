import React from 'react';
import * as plantSlice from './plantSlice';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Pre = styled.pre`
  background: #ddd;
  border: thin solid #bbb;
  border-radius: 2px;
  padding: 8px;
`;

export function PlantDebug() {
  const plants = useSelector(plantSlice.selectAll);
  return <Pre>{JSON.stringify(plants, null, 2)}</Pre>;
}
