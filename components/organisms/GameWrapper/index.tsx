import React from "react";
import styled from "styled-components";
import Title from "components/atoms/Title";
import Text from "components/atoms/Text";
import Divider from "components/atoms/Divider";
import Contents from "../Contents";
import Image from "components/atoms/Image";
import SearchBox from "components/molecules/SearchBox";
import GameBox from "components/molecules/GameBox";
import Button from "components/atoms/Button";
import LottoNumbers from "components/molecules/LottoNumbers";

const GameWrapper = () => {
  return (
    <Contents>
      <GameTitle>
        <Title>GAME </Title>
        <Text>TODAY CHOICE</Text>
      </GameTitle>
      <Divider />
      <GameListBox>
        <GameBox>
          <Image name="train" />
          <Text>제시어:</Text>
          <SearchBox />
          <Text>결과</Text>
        </GameBox>
        <GameBox>
          <Image name="lotto" />
          <Text>버튼을 누르세요.</Text>
          <LottoNumbers lottoNumbers={["1", "2", "3", "23", "52", "6"]} />
          <Button>BUTTON</Button>
        </GameBox>
      </GameListBox>
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

const GameListBox = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    :first-child {
      img {
        width: 50px;
        height: 47px;
      }
    }
    :nth-child(2) {
      img {
        width: 45px;
        height: 48px;
      }
    }
  }
`;

export default GameWrapper;
