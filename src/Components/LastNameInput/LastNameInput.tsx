import { Slider } from "@material-ui/core";
import React, { useState } from "react";
import { LastNameSelectors } from "./LastNameSelectors";

// select each letter via slot machine mechanic
// slider to set length

export const LastNameInput = () => {
  const [characters, setCharacters] = useState(0);
  const [charactersArray, setCharactersArray] = useState<number[]>([]);
  const [lastName, setLastName] = useState("");
  const handleChange = (event: any, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setCharacters(newValue);
      let newArray = new Array(newValue).fill(0);
      setCharactersArray(newArray);
    }
  };
  return (
    <div>
      <label>Last Name: {lastName}</label>
      <Slider value={characters} min={0} max={15} onChange={handleChange} />
      <LastNameSelectors selectorArray={charactersArray} />
    </div>
  );
};
