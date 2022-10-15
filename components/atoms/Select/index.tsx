import React from "react";
import styled from "styled-components";

export interface Props {
  children: React.ReactNode;
}

const Select = ({ children }: Props) => {
  return <StyledSelect>{children}</StyledSelect>;
};

const StyledSelect = styled.select`
  height: 22px;
  background-color: ${({ theme }) => theme.color.lightGray};
`;

export default Select;
