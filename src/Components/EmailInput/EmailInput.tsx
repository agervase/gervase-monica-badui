import React, { useState } from "react";
import {
  EmailInputBox,
  EmailFakeInput,
  EmailInputContainer,
  EmailLabel,
} from "./EmailInput.css";

// upside down and backwards
export const EmailInput = () => {
  const [email, setEmail] = useState("");
  const reverseString = (str: string) => {
    console.log(str.slice(-1));
    let last = str.slice(-1);
    let rest = str.slice(0, -1);
    return last + rest;
  };
  return (
    <EmailInputContainer>
      <EmailFakeInput />
      <div>
        <EmailLabel>Email:</EmailLabel>
        <EmailInputBox
          value={email}
          type="email"
          id="email"
          name="email"
          tabIndex={-1}
          onChange={(event: { target: { value: string } }) =>
            setEmail(reverseString(event.target.value))
          }
        />
      </div>
    </EmailInputContainer>
  );
};
