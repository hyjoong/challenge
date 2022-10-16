import React from "react";
import styled from "styled-components";

interface Props {
  type?: "line" | "dashed";
}

const Divider = ({ type = "line" }: Props) => {
  return <StyledText type={type}></StyledText>;
};

const StyledText = styled.p<Props>`
  width: 100%;
  margin: 3px 0;
  border-width: 1px 0px 0px 0px;
  border-style: ${({ type }) => (type === "line" ? "solid" : "dashed")};
  border-color: ${({ theme }) => theme.color.gray};
  color: ${({ theme }) => theme.color.gray};
`;

export default Divider;
