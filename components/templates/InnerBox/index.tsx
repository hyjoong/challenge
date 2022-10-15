import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const InnerBox = ({ children }: Props) => {
  return (
    <StyledInnerBox>
      <Container>{children}</Container>
    </StyledInnerBox>
  );
};

const StyledInnerBox = styled.div`
  display: flex;
  width: 748px;
  height: 484px;
  padding: 30px;
  background-image: url(./image/innerBox.png);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 44px 12px 10px 6px;
`;

export default InnerBox;
