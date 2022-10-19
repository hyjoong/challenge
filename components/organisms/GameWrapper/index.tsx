import React from "react";
import styled from "styled-components";
import Title from "components/atoms/Title";
import Text from "components/atoms/Text";
import Divider from "components/atoms/Divider";
import Contents from "../Contents";

const GameWrapper = () => {
  return (
    <Contents>
      <GameTitle>
        <Title>GAME </Title>
        <Text>TODAY CHOICE</Text>
      </GameTitle>
      <Divider />
    </Contents>
  );
};

const GameTitle = styled.div`
  display: flex;

  p {
    :nth-child(2) {
      display: flex;
      align-items: center;
      font-size: 8px;
      margin-left: 5px;
    }
  }
`;

export default GameWrapper;
