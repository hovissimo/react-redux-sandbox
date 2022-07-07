import React from "react";
import * as fromFishSlice from "./fishSlice";
import { useSelector } from "react-redux";
import styled from "styled-components";

export function FishesByLetter({ startsWith }) {
  const fishes = useSelector(
    fromFishSlice.selectFishesByStartsWith(startsWith)
  );

  return (
    <ul>
      {fishes.map((fish) => (
        <li key={fish.id}>{fish.name}</li>
      ))}
    </ul>
  );
}
