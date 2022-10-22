import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import Image from "components/atoms/Image";
import Text from "components/atoms/Text";
import useDate from "hooks/useDate";
import Chip from "components/atoms/Chip";

interface Props {
  id: string;
  createdAt: string;
  name: string;
  detail: string;
  onClick: (id: string) => void;
}

const GuestItem = ({ id, createdAt, name, detail, onClick }: Props) => {
  const { dateConvert, newDate } = useDate();
  const date = dateConvert(createdAt, "DATETIME");
  const isNew = newDate(createdAt);

  return (
    <StyledGuestItem>
      <GuestHeader>
        <HeaderTitle>
          <Text>{name}</Text>
          <Text>({date})</Text>
          {isNew && <Chip type="new">N</Chip>}
        </HeaderTitle>
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

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;

  p {
    :nth-child(2) {
      font-size: 10px;
      margin: 0 3px 0 5px;
      letter-spacing: -0.5px;
      color: ${({ theme }) => theme.color.darkGray};
    }
  }
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
