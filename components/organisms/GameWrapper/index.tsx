import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Title from "components/atoms/Title";
import Text from "components/atoms/Text";
import Divider from "components/atoms/Divider";
import Contents from "../Contents";
import SearchBox from "components/molecules/SearchBox";
import GameBox from "components/molecules/GameBox";
import Button from "components/atoms/Button";
import LottoNumbers from "components/molecules/LottoNumbers";
import { defaultLottoNumbers } from "constants/index";

const GameWrapper = () => {
  const [result, setResult] = useState<string>("결과");
  const [word, setWord] = useState<string>("선풍기");
  const [wordInput, setWordInput] = useState<string>("");
  const [lottoList, setLottoList] = useState<string[]>(defaultLottoNumbers);

  const handleword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setWordInput(value);
  };

  const regexWord = (wordInput: string) => {
    let pattern = /([^가-힣\x20])/i;
    return pattern.test(wordInput);
  };

  const handleSearch = () => {
    if (wordInput.length === 1) {
      setResult("2글자 이상 입력해 주세요!");
      setWordInput("");
      return;
    }
    if (regexWord(wordInput)) {
      setResult("단어로 입력해 주세요!");
      setWordInput("");
      return;
    }
    if (word[word.length - 1] === wordInput[0]) {
      setWord(wordInput);
      setResult("정답입니다!");
      setWordInput("");
    } else {
      setResult("오답입니다!");
      setWordInput("");
    }
  };

  const handleOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const { value } = e.target as HTMLInputElement;
    if (e.key === "Enter" && value.trim() !== "") {
      handleSearch();
    }
  };

  const handleMakeLottos = () => {
    const lottos = new Array();
    while (lottos.length < 6) {
      const num = Math.floor(Math.random() * 45 + 1);
      if (lottos.indexOf(num) == -1) {
        lottos.push(num);
      }
      lottos.push();
    }
    const sortedLottos = lottos.sort((a, b) => a - b);
    setLottoList(sortedLottos);
  };

  return (
    <Contents>
      <GameTitle>
        <Title>GAME </Title>
        <Text>TODAY CHOICE</Text>
      </GameTitle>
      <Divider />
      <GameListBox>
        <GameBox>
          <Image src={`/image/train.png`} width={50} height={50} alt="train" />
          <Text isBold={true}>제시어: {word}</Text>
          <SearchBox
            onChange={handleword}
            wordInput={wordInput}
            onClick={handleSearch}
            onKeyUp={handleOnKeyUp}
          />
          <Text>{result}</Text>
        </GameBox>
        <GameBox>
          <Image src={`/image/lotto.png`} width={45} height={48} alt="lotto" />
          <Text>버튼을 누르세요.</Text>
          <LottoNumbers lottoNumbers={lottoList} />
          <Button onClick={handleMakeLottos}>추첨</Button>
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

      p {
        font-size: 13px;
      }
    }
    :nth-child(2) {
      img {
        width: 45px;
        height: 48px;
      }
      p {
        font-size: 12px;
      }
    }
  }
`;

export default GameWrapper;
