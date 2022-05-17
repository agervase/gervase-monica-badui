import React from "react";
export const PhoneInput = () => {
  return (
    <>
      {" "}
      <label>Phone Number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value="111-222-3333"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />
    </>
  );
};
