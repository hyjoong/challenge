import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Divider from "components/atoms/Divider";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import Loading from "components/atoms/Loading";
import DiaryPostBoard from "components/molecules/DiaryPostBoard";
import Contents from "../Contents";
import { defaultWritter } from "constants/index";
import useFetchingInput from "hooks/useFetchingInput";

interface Props {
  useLazyQuery: Function;
  id?: string;
  loading?: boolean;
  editTitle?: string;
  editContents?: string;
}

const DiaryNewWrapper = ({
  useLazyQuery,
  id,
  loading,
  editTitle,
  editContents,
}: Props) => {
  // 수정하기 or 게시글 등록 mutation
  const [mutationQuery] = useLazyQuery();

  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const router = useRouter();

  const { setFetchingOption } = useFetchingInput();
  const option = setFetchingOption({ id, title, contents });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    if (name === "title") {
      setTitle(value);
    } else {
      setContents(value);
    }
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
    const res = await mutationQuery(option);
    if (res == null) {
      throw new Error("post registration error");
    }

    // id가 있으면 게시글 수정페이지
    const alertMessage = id
      ? res?.data?.updateBoard?.message
      : res?.data?.createBoard?.message;
    alert(alertMessage);

    const resNumber = id
      ? res?.data?.updateBoard?.number
      : res?.data?.createBoard?.number;

    router.push(`/diary/${resNumber}`);
  };
  const handleCancel = () => {
    router.back();
  };

  useEffect(() => {
    if (editTitle || editContents) {
      setTitle(editTitle ?? "");
      setContents(editContents ?? "");
    }
  }, [editTitle, editContents]);

  return (
    <Contents>
      <StyledNewWrapper>
        <Title>Diary | 글 등록</Title>
        <Divider />
        {loading ? (
          <Loading />
        ) : (
          <>
            <DiaryPostBoard
              title={title}
              contents={contents}
              handleChange={handleChange}
            />
            <ButtonContainer>
              <Button styleType="gray" onClick={handleApply}>
                {id ? "수정" : "등록"}하기
              </Button>
              <Button styleType="gray" onClick={handleCancel}>
                취소하기
              </Button>
            </ButtonContainer>
          </>
        )}
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
