import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  GetBoardQueryResult,
  GetBoardQueryVariables,
  useGetBoardQuery,
} from "lib/graphql/queries/schema";
import Text from "components/atoms/Text";
import { DiaryDetailProps } from "types";
import useDate from "hooks/useDate";

const DiaryBoard = ({ id }: DiaryDetailProps) => {
  const router = useRouter();
  const { dateConvert } = useDate();

  const { data: boardData, refetch } = useGetBoardQuery({
    variables: {
      number: Number(id),
      fetchPolicy: "network-only",
    } as GetBoardQueryVariables,
  }) as GetBoardQueryResult;

  useEffect(() => {
    refetch();
  }, [router]);

  return (
    <StyledDiaryPost>
      <BoardDate>{dateConvert(boardData?.fetchBoard?.createdAt)}</BoardDate>
      <Text isBold={true}>{boardData?.fetchBoard?.title} </Text>
      <Text>작성자: {boardData?.fetchBoard?.writer}</Text>
      <Text>{boardData?.fetchBoard?.contents}</Text>
    </StyledDiaryPost>
  );
};

const StyledDiaryPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 266px;
  outline: 1px solid ${({ theme }) => theme.color.normalGray};
  margin: 10px 0 15px;

  > p {
    :nth-child(2) {
      margin: 30px 39px;
      text-align: center;
      font-size: 15px;
      letter-spacing: -1px;
    }

    :nth-child(3) {
      display: flex;
      justify-content: flex-end;
      margin: 0px 39px;
      font-size: 12px;
      color: ${({ theme }) => theme.color.darkGray};
    }

    :nth-child(4) {
      margin: 0px 39px;
      font-size: 11px;
      line-height: 15px;
      color: ${({ theme }) => theme.color.darkGray};
    }
  }
`;

const BoardDate = styled.div`
  padding: 6px 17px;
  font-size: 13px;
  color: ${({ theme }) => theme.color.darkGray};
  background-color: ${({ theme }) => theme.color.normalGray};
`;

export default DiaryBoard;
