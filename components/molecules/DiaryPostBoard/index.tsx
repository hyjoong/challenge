import React from "react";
import styled from "styled-components";
import Input from "components/atoms/Input";
import TextArea from "components/atoms/TextArea";

interface Props {
  title: string;
  contents: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const DiaryPostBoard = ({ title, contents, handleChange }: Props) => {
  return (
    <StyledDiaryPostBoard>
      <PostBoardWrapper>
        <Input
          placeholder="제목을 입력해 주세요"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <TextArea
          placeholder="내용을 입력해 주세요"
          name="contents"
          value={contents}
          onChange={handleChange}
        />
      </PostBoardWrapper>
    </StyledDiaryPostBoard>
  );
};

const StyledDiaryPostBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 266px;
  outline: 1px solid ${({ theme }) => theme.color.normalGray};
  margin: 10px 0 15px;
`;

const PostBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 18px 19px;

  > input {
    margin: 0 0 14px;

    :focus {
      outline: 1px solid ${({ theme }) => theme.color.lightGray};
    }
  }

  > textarea {
    height: 165px;

    :focus {
      outline: 1px solid ${({ theme }) => theme.color.lightGray};
    }
  }
`;

export default DiaryPostBoard;
