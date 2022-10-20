import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const GameBox = ({ children }: Props) => {
  return <StyledGameBox>{children}</StyledGameBox>;
};

const StyledGameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 182px;
  height: 124px;
  padding: 17px 20px;
  margin: 10px auto;
  background-color: ${({ theme }) => theme.color.softGray};
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 10px;
`;

export default GameBox;
