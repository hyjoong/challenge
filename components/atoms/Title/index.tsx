import React from "react";
import styled from "styled-components";

export interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.p`
  font-size: 15px;
  height: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.skyBlue};
`;

export default Title;
