import styled from "@emotion/styled";

interface ButtonProps {
  marginLeft: string;
  marginTop: string;
}

export const SubmitButtonStyle = styled.input<ButtonProps>`
  margin-left: ${(props) => props.marginLeft}px;
  margin-top: ${(props) => props.marginTop}px;
`;

export const ButtonContainer = styled.div`
  padding: 20px;
`;

export const FormContainer = styled.div`
  padding: 40px;
`;
