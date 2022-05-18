import React from "react";
import { CharacterSlotMachine } from "./CharacterSlotMachine";
import { SelectorsContainer } from "./LastNameInput.css";
interface Props {
  selectorArray: number[];
}
export const LastNameSelectors = ({ selectorArray }: Props) => {
  return (
    <SelectorsContainer>
      {selectorArray.map((key, index) => {
        return <CharacterSlotMachine key={key} />;
      })}
    </SelectorsContainer>
  );
};
