import React from "react";
import styled from "styled-components";
import Chip from "components/atoms/Chip";
import Text from "components/atoms/Text";
import { DateConvert } from "utils/DateConvert";

interface Props {
  title: string;
  number: number;
  createdAt: string;
  onClick: (id: number) => void;
}

const DiaryItem = ({ title, number, createdAt, onClick }: Props) => {
  const convertDate = DateConvert(createdAt);

  return (
    <StyledDiaryItem>
      <ItemTitle>
        <Chip type="date">{convertDate}</Chip>
        <Text isBold={true}>제목 : {title}</Text>
      </ItemTitle>
      <LinkButton value={number} onClick={() => onClick(number)}>
        자세히 보러가기 {">"}
      </LinkButton>
    </StyledDiaryItem>
  );
};

const StyledDiaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  height: 34px;
  padding: 13px 20px;
  border: 1.5px solid ${({ theme }) => theme.color.normalGray};
  margin-bottom: 9px;
`;

const ItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    width: 52px;
    font-size: 10px;
    font-weight: 600;
    border-radius: 3px;
    padding: 2px;
  }

  > p {
    color: ${({ theme }) => theme.color.gray};
  }
`;

const LinkButton = styled.button`
  display: flex;
  align-items: center;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.gray};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.color.black};
  }
`;
export default DiaryItem;
