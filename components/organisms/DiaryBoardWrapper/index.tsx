import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useDeleteBoardMutation } from "lib/graphql/queries/schema";

import Button from "components/atoms/Button";
import Divider from "components/atoms/Divider";
import Title from "components/atoms/Title";
import DiaryBoard from "components/molecules/DiaryBoard/inedx";
import Contents from "../Contents";
import { DiaryDetailProps } from "types";

const DiaryBoardContainer = ({ id }: DiaryDetailProps) => {
  const router = useRouter();
  const [deleteBoard] = useDeleteBoardMutation();

  const handleEditBoard = () => {
    router.push(`/diary/${id}/edit`);
  };

  const handleDeleteBoard = async () => {
    const res = await deleteBoard({
      variables: { number: Number(id) },
    });

    const { data } = res;
    if (!data) {
      alert("데이터 삭제에 실패하였습니다.");
      return;
    }
    alert(data.deleteBoard?.message);
    router.push(`/diary`);
  };

  const handleDiaryList = () => {
    router.push(`/diary`);
  };

  return (
    <Contents>
      <StyledDiaryBoard>
        <Title>Diary</Title>
        <Divider />
        <DiaryBoard id={id} />
        <ButtonContainer>
          <Button styleType="gray" onClick={handleEditBoard}>
            수정하기
          </Button>
          <Button styleType="gray" onClick={handleDeleteBoard}>
            삭제하기
          </Button>
        </ButtonContainer>
        <ButtonUnderContainer>
          <Button styleType="text" onClick={handleDiaryList}>
            {"<"} 다이어리 리스트 바로가기
          </Button>
        </ButtonUnderContainer>
      </StyledDiaryBoard>
    </Contents>
  );
};

const StyledDiaryBoard = styled.div`
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

const ButtonUnderContainer = styled.div``;

export default DiaryBoardContainer;
