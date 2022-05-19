import React from 'react';
import * as fromPlantSlice from './plantSlice';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DL = styled.dl`
  width: 600px;
`;
const Line = styled.div`
  display: table-row;
`;
const DT = styled.dt`
font-weight: 700;
display: table-cell;
padding-right: 1rem;
`;
const DD = styled.dd`
display: table-cell;
`;

function Field({ property, value }) {
  return (
    <Line>
      <DT>{property}</DT>
      <DD>{value}</DD>
    </Line>
  );
}

const Wrapper = styled.div`
background-color: #b8e6ff;
display: float;
padding: 1rem;
`;

function Plant({ plant }) {
  const removePlant = fromPlantSlice.useRemovePlant();
  return (
    <Wrapper>
      <DL>
        <Field property="id" value={plant.id} />
        <Field property="name" value={plant.name} />
      </DL>
      <button onClick={() => removePlant(plant)}>Remove</button>
    </Wrapper>
  );
}

export function Plants() {
  const plants = useSelector(fromPlantSlice.selectAll);
  const addRandomPlant = fromPlantSlice.useAddRandomPlant();
  return (
    <div>
      <button onClick={addRandomPlant}>Add plant</button>
      {plants.map((plant) => (
        <Plant key={plant.id} plant={plant} />
      ))}
    </div>
  );
}
