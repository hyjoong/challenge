import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  song?: string;
  checked?: boolean;
}

const Input = ({ type = "text", song, checked, ...props }: Props) => {
  return <StyledInput type={type} id={song} {...props} checked={checked} />;
};

const StyledInput = styled.input``;

export default Input;
