import { useState } from "react";
import { CharacterSlot } from "./CharacterSlot";
import { SlotMachineContainer } from "./LastNameInput.css";

export const CharacterSlotMachine = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <SlotMachineContainer>
      <CharacterSlot selected={selected} />
      <button type="button" onClick={handleClick}>
        {selected ? "Reselect" : "Confirm"}
      </button>
    </SlotMachineContainer>
  );
};
