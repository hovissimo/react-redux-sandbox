import React from 'react';
import * as fromPlantSlice from './plantSlice';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export function PlantsByLetter({ startsWith }) {
  const sPlants = useSelector(
    fromPlantSlice.selectPlantsByStartsWith(startsWith)
  );

  return (
    <ul>
      {sPlants.map((plant) => (
        <li key={plant.id}>{plant.name}</li>
      ))}
    </ul>
  );
}
