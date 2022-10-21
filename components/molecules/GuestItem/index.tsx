import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import Image from "components/atoms/Image";
import Text from "components/atoms/Text";

interface Props {
  id: string;
  name: string;
  detail: string;
  onClick: (id: string) => void;
}

const GuestItem = ({ id, name, detail, onClick }: Props) => {
  return (
    <StyledGuestItem>
      <GuestHeader>
        <Text>{name}</Text>
        <Button styleType="arrow" onClick={() => onClick(id)}>
          삭제
        </Button>
      </GuestHeader>
      <GuestContent>
        <Image name="profile" />
        <Text>{detail}</Text>
      </GuestContent>
    </StyledGuestItem>
  );
};

const StyledGuestItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1.5px solid ${({ theme }) => theme.color.normalGray};
`;

const GuestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 18px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.color.normalGray};
`;

const GuestContent = styled.div`
  display: flex;
  height: 60px;
  padding: 13px 20px;

  > p {
    margin-left: 20px;
  }
  img {
    width: 70px;
  }
`;

export default GuestItem;
