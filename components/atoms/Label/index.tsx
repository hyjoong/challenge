import React from "react";
import styled from "styled-components";

interface Props {
  htmlFor?: string;
  children?: React.ReactNode;
}

const Label = ({ htmlFor, children }: Props) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`;

export default Label;
