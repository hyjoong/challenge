import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Divider from "components/atoms/Divider";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import DiaryPostBoard from "components/molecules/DiaryPostBoard";
import Contents from "../Contents";

const DiaryNewWrapper = () => {
  const router = useRouter();
  const handleApply = () => {};
  const handleCancel = () => {
    router.push(`/diary`);
  };

  return (
    <Contents>
      <StyledNewWrapper>
        <Title>Diary | 글 등록</Title>
        <Divider />
        <DiaryPostBoard />
        <ButtonContainer>
          <Button styleType="gray" onClick={handleApply}>
            등록하기
          </Button>
          <Button styleType="gray" onClick={handleCancel}>
            취소하기
          </Button>
        </ButtonContainer>
      </StyledNewWrapper>
    </Contents>
  );
};

const StyledNewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 0 auto 10px;

  > button {
    margin: 0 14px;
  }
`;
export default DiaryNewWrapper;
