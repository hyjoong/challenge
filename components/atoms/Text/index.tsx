import React from "react";
import styled from "styled-components";

export interface Props {
  children: React.ReactNode;
  isBold?: boolean;
}

type TextType = Pick<Props, "isBold">;

const Text = ({ children, isBold = false }: Props) => {
  return <StyledText isBold={isBold}>{children}</StyledText>;
};

const StyledText = styled.p<TextType>`
  font-size: 11px;
  font-weight: ${({ isBold }) => isBold && "600"};
`;

export default Text;
