import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: Props) => {
  return <StyledInput {...props} {...props} />;
};

const StyledInput = styled.input`
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 3px;
  outline: none;
  color: #888888;

  &::placeholder {
    color: #9ca3af;
  }

  &:not(:placeholder-shown) {
    color: #6b7280;
    border: 1px solid ${({ theme }) => theme.color.gray};
  }
`;

export default Input;
