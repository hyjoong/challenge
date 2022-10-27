import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import Image from "next/image";
import Input from "components/atoms/Input";
import TextArea from "components/atoms/TextArea";

interface Props {
  onClick: () => void;
  name: string;
  detail: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const GuestPost = ({ onClick, name, detail, handleChange }: Props) => {
  return (
    <StyledGuestPost>
      <GuestPostMain>
        <Image
          src={`/image/profile.png`}
          width={100}
          height={60}
          alt="profile"
        />
        <TextArea
          placeholder="내용을 입력해 주세요"
          name="detail"
          value={detail}
          onChange={handleChange}
        />
      </GuestPostMain>
      <GuestSubmit>
        <Input
          placeholder="이름"
          name="name"
          value={name}
          onChange={handleChange}
          maxLength={10}
        ></Input>
        <Button onClick={onClick}>확인</Button>
      </GuestSubmit>
    </StyledGuestPost>
  );
};

const StyledGuestPost = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 5px;
  margin-right: 3px;
  background-color: ${({ theme }) => theme.color.softGray};
`;

const GuestPostMain = styled.div`
  display: flex;
  height: 60px;

  > textarea {
    margin-left: 5px;
    width: 100%;
    font-size: 12px;

    :focus {
      outline: 1px solid ${({ theme }) => theme.color.lightGray};
    }
  }
`;

const GuestSubmit = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  > input {
    width: 60px;
    height: 10px;
    font-size: 5px;
  }
`;

export default GuestPost;
