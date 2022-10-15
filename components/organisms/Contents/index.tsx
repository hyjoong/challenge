import React from "react";
import styled from "styled-components";

const Contents = () => {
  return <StyledContents></StyledContents>;
};

const StyledContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 464px;
  padding: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
`;

export default Contents;
