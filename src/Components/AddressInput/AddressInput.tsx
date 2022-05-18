import React, { useState } from "react";
import { AddressInputBox } from "./AddressInput.css";

export const AddressInput = () => {
  const [degrees, setDegrees] = useState(20);
  const handleChange = () => {
    setDegrees((degrees + 20) % 360);
  };
  return (
    <div>
      {" "}
      <label>Address:</label>
      <AddressInputBox
        degrees={degrees}
        type="text"
        id="address"
        name="address"
        tabIndex={-1}
        onChange={handleChange}
      />
    </div>
  );
};
