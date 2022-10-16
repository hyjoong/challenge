import Divider from "components/atoms/Divider";
import Title from "components/atoms/Title";
import React from "react";
import styled from "styled-components";
import Contents from "../Contents";

const DiaryBoard = () => {
  return (
    <Contents>
      <StyledDiaryBoard>
        <Title>Diary</Title>
        <Divider />
      </StyledDiaryBoard>
    </Contents>
  );
};

const StyledDiaryBoard = styled.div`
  display: flex;
  flex-direction: column;
`;

export default DiaryBoard;
