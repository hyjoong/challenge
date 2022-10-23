import React from "react";
import styled from "styled-components";
import Chip from "components/atoms/Chip";
import Text from "components/atoms/Text";
import useDate from "hooks/useDate";

interface Props {
  title: string;
  number: number;
  createdAt: string;
  onClick: (id: number) => void;
}

const DiaryItem = ({ title, number, createdAt, onClick }: Props) => {
  const { newDate, dateConvert } = useDate();
  const convertDate = dateConvert(createdAt);
  const isNew = newDate(createdAt);

  return (
    <StyledDiaryItem>
      <ItemTitle>
        <FlexBox>
          <Chip type="date">{convertDate}</Chip>
          {isNew && <Chip type="new">N</Chip>}
        </FlexBox>
        <FlexBox>
          <Text isBold={true}>제목 : {title}</Text>
        </FlexBox>
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
  margin: 0 3px 9px 0;
`;

const ItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > p {
    color: ${({ theme }) => theme.color.gray};
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  div {
    :first-child {
      margin-right:2px;
    }
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
