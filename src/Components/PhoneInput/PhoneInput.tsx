import React from "react";
import Select from "react-select";
import { Container, NumbersContainer } from "./PhoneInput.css";

// dropdowns for each number
export const PhoneInput = () => {
  const numberOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "0", label: "0" },
  ];

  return (
    <Container>
      <label>Phone Number:</label>
      <NumbersContainer>
        <div>{`(`}</div>
        <Select
          className="number"
          defaultValue={numberOptions[0]}
          name="first"
          options={numberOptions}
        />
        <Select
          className="number"
          defaultValue={numberOptions[0]}
          name="second"
          options={numberOptions}
        />
        <Select
          className="number"
          defaultValue={numberOptions[0]}
          name="third"
          options={numberOptions}
        />
        <div>{`)`}</div>
        <Select
          className="number"
          defaultValue={numberOptions[0]}
          name="fourth"
          options={numberOptions}
        />
        <Select
          className="number"
          defaultValue={numberOptions[0]}
          name="fifth"
          options={numberOptions}
        />
        <Select
          className="number"
          defaultValue={numberOptions[0]}
          name="sixth"
          options={numberOptions}
        />
        <div>{`-`}</div>
        <Select
          className="number"
          defaultValue={numberOptions[0]}
          name="seventh"
          options={numberOptions}
        />
        <Select
          className="number"
          defaultValue={numberOptions[0]}
          name="eighth"
          options={numberOptions}
        />
        <Select
          className="number"
          defaultValue={numberOptions[0]}
          name="ninth"
          options={numberOptions}
        />
        <Select
          className="number"
          defaultValue={numberOptions[0]}
          name="tenth"
          options={numberOptions}
        />
      </NumbersContainer>
    </Container>
  );
};
