import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}
const Input = ({ placeholder, ...props }: Props) => {
  return <StyledInput placeholder={placeholder} {...props} />;
};

const StyledInput = styled.input`
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 3px;
  outline: none;
`;

export default Input;
