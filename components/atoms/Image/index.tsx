import React from "react";
import styled from "styled-components";

export interface Props {
  name: string;
}

const Image = ({ name }: Props) => {
  return <StyledImage src={`./image/${name}.png`} alt="icon" />;
};

const StyledImage = styled.img``;

export default Image;
