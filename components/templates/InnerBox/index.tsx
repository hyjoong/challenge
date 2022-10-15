import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const InnerBox = ({ children }: Props) => {
  return <Root>{children}</Root>;
};

const Root = styled.div`
  width: 808px;
  height: 544px;
  background-image: url(./image/innerBox.png);
`;
export default InnerBox;
