import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Contents = ({ children }: Props) => {
  return <StyledContents>{children}</StyledContents>;
};

const StyledContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 464px;
  padding: 30px 30px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
`;

export default Contents;
