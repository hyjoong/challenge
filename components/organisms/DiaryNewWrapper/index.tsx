import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import {
  CreateBoardMutationResult,
  CreateBoardMutationVariables,
  useCreateBoardMutation,
} from "lib/graphql/queries/schema";
import Divider from "components/atoms/Divider";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import DiaryPostBoard from "components/molecules/DiaryPostBoard";
import Contents from "../Contents";
import { defaultWritter } from "constants/index";

interface Props {
  isEdit?: boolean;
}

const DiaryNewWrapper = () => {
  const [createDiary] = useCreateBoardMutation();
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const router = useRouter();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    if (name === "title") {
      setTitle(value);
    } else {
      setContents(value);
    }
    console.log("title ", title, contents);
  };

  const handleApply = async () => {
    if (title === "") {
      alert("제목을 입력해 주세요");
      return;
    }
    if (contents === "") {
      alert("내용을 입력해 주세요");
      return;
    }

    const res = (await createDiary({
      variables: {
        writer: defaultWritter,
        title,
        contents,
      } as CreateBoardMutationVariables,
    })) as CreateBoardMutationResult;
    if (res == null) {
      throw new Error("post registration error");
    }
    alert(res?.data?.createBoard?.message);

    router.push(`/diary/${res?.data?.createBoard?.number}`);
  };
  const handleCancel = () => {
    router.push(`/diary`);
  };

  return (
    <Contents>
      <StyledNewWrapper>
        <Title>Diary | 글 등록</Title>
        <Divider />
        <DiaryPostBoard handleChange={handleChange} />
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
