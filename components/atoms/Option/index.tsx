import React from "react";
import styled from "styled-components";

export interface Props {
  children: React.ReactNode;
}

const Option = ({ children }: Props) => {
  return <StyledOption>{children}</StyledOption>;
};

const StyledOption = styled.option``;

export default Option;
