import { CommentInput } from "../CommentInput/CommentInput";
import { AddressInput } from "../AddressInput/AddressInput";
import { PhoneInput } from "../PhoneInput/PhoneInput";
import { EmailInput } from "../EmailInput/EmailInput";
import { DobInput } from "./../DobInput/DobInput";
import { LastNameInput } from "./../LastNameInput/LastNameInput";
import React from "react";
import { FirstNameInput } from "../FirstNameInput/FirstNameInput";
import { FormTitle } from "../FormTitle/FormTitle";
import { SubmitButton } from "./Form.css";

export const Form = () => {
  return (
    <form id="resume-box" action="">
      <FormTitle />
      <FirstNameInput />
      <LastNameInput />
      <DobInput />
      <EmailInput />
      <PhoneInput />
      <AddressInput />
      <CommentInput />
      <SubmitButton id="submit" type="submit" value="Submit" />
    </form>
  );
};
