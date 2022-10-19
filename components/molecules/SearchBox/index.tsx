import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";

const SearchBox = () => {
  return (
    <StyledSearchBox>
      <Input />
      <Button>검색</Button>
    </StyledSearchBox>
  );
};

const StyledSearchBox = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    border-radius: 5px;
    width: 65%;
  }
`;

export default SearchBox;
