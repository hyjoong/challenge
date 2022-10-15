import React from "react";
import styled from "styled-components";

export interface Props {
  children: React.ReactNode;
}

const Text = ({ children }: Props) => {
  return <StyledText>{children}</StyledText>;
};

const StyledText = styled.p`
  font-size: 11px;
`;

export default Text;
