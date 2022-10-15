import React from "react";
import styled from "styled-components";
import Header from "components/molecules/Header";

interface Props {
  children?: React.ReactNode;
}

const InnerBox = ({ children }: Props) => {
  return (
    <StyledInnerBox>
      <Header />
      <Container>{children}</Container>
    </StyledInnerBox>
  );
};

const StyledInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 748px;
  height: 484px;
  padding: 30px;
  background-image: url(./image/innerBox.png);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0px 12px 10px 6px;
`;

export default InnerBox;
