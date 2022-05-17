import React from "react";

// dropdowns for each number
export const PhoneInput = () => {
  return (
    <div>
      {" "}
      <label>Phone Number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value="111-222-3333"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />
    </div>
  );
};
