import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";

interface Props {
  wordInput: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const SearchBox = ({ onChange, onClick, wordInput }: Props) => {
  return (
    <StyledSearchBox>
      <Input
        placeholder="단어를 입력하세요."
        onChange={onChange}
        value={wordInput}
      />
      <Button onClick={onClick}>검색</Button>
    </StyledSearchBox>
  );
};

const StyledSearchBox = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    border-radius: 5px;
    width: 68%;
  }
`;

export default SearchBox;
