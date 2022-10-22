import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import Image from "components/atoms/Image";
import TextArea from "components/atoms/TextArea";

interface Props {
  onClick: () => void;
  detail: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const GuestPost = ({ onClick, handleChange, detail }: Props) => {
  return (
    <StyledGuestPost>
      <GuestPostMain>
        <Image name="profile" />
        <TextArea
          placeholder="내용을 입력해 주세요"
          name="detail"
          value={detail}
          onChange={handleChange}
        />
      </GuestPostMain>
      <GuestSubmit>
        <Button onClick={onClick}>확인</Button>
      </GuestSubmit>
    </StyledGuestPost>
  );
};

const StyledGuestPost = styled.div`
  display: flex;
  flex-direction: column;
  padding: 13px 40px 6px 20px;
  background-color: ${({ theme }) => theme.color.softGray};
`;

const GuestPostMain = styled.div`
  display: flex;
  height: 60px;

  img {
    width: 70px;
  }

  > textarea {
    margin-left: 30px;
    width: 100%;
    font-size: 12px;

    :focus {
      outline: 1px solid ${({ theme }) => theme.color.lightGray};
    }
  }
`;

const GuestSubmit = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`;

export default GuestPost;
