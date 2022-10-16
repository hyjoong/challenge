import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  song?: string;
  checked?: boolean;
}

const CheckboxInput = ({ type = "text", song, checked, ...props }: Props) => {
  return (
    <StyledCheckboxInput type={type} id={song} {...props} checked={checked} />
  );
};

const StyledCheckboxInput = styled.input``;

export default CheckboxInput;
