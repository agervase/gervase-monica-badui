import { CommentInput } from "../CommentInput/CommentInput";
import { AddressInput } from "../AddressInput/AddressInput";
import { PhoneInput } from "../PhoneInput/PhoneInput";
import { EmailInput } from "../EmailInput/EmailInput";
import { DobInput } from "./../DobInput/DobInput";
import { LastNameInput } from "./../LastNameInput/LastNameInput";
import React from "react";
import { FirstNameInput } from "../FirstNameInput/FirstNameInput";
import { FormTitle } from "../FormTitle/FormTitle";
import { FormContainer } from "./Form.css";
import { SubmitButton } from "../SubmitButton/SubmitButton";

export const Form = () => {
  return (
    <FormContainer>
      <form id="resume-box" action="">
        <FormTitle />
        <FirstNameInput />
        <LastNameInput />
        <DobInput />
        <EmailInput />
        <PhoneInput />
        <AddressInput />
        <CommentInput />
        <SubmitButton />
      </form>
    </FormContainer>
  );
};
