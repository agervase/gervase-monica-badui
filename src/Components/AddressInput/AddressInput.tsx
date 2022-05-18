import React from "react";

// hidden input (like password)
export const AddressInput = () => {
  return (
    <div>
      {" "}
      <label>Address:</label>
      <input type="text" id="address" name="address" tabIndex={-1} />
    </div>
  );
};
