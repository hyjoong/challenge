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
  margin-right: 3px;
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

  button {
    color: ${({ theme }) => theme.color.darkGray};
  }
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
  height: 70px;
  padding: 10px 0 0 20px;

  > p {
    margin-left: 20px;
    overflow-y: auto;
    white-space: pre-wrap;
    ::-webkit-scrollbar {
      width: 3px;
      background-color: #e9e9e9;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #c5c2c2;
    }
  }
  img {
    width: 70px;
    padding-bottom: 10px;
  }
`;

export default GuestItem;
