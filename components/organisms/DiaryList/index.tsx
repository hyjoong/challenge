import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  GetDiarysQueryResult,
  GetDiarysQueryVariables,
  useGetBoardsCountQuery,
  useGetDiarysQuery,
} from "lib/graphql/queries/schema";
import { useRouter } from "next/router";
import Divider from "components/atoms/Divider";
import Text from "components/atoms/Text";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import DiaryItem from "components/molecules/DiaryItem";
import Contents from "../Contents/index";
import Pagination from "components/molecules/Pagination";

const DirayList = () => {
  const SIZE = 10;
  const router = useRouter();
  const [page, setPage] = useState<number>(1);

  const { data: diarysData, refetch: refetchDiarysData } = useGetDiarysQuery({
    variables: { input: page } as GetDiarysQueryVariables,
  }) as GetDiarysQueryResult;

  const { data: diarysCount, refetch: refetchDiarysCount } =
    useGetBoardsCountQuery();

  const handleCreateDiary = () => {
    router.push(`/diary/new`);
  };

  const handleDiaryClick = (id: number | null) => {
    if (!id) {
      alert("There is no id value in the diary");
      return;
    }
    router.push(`/diary/${id}`);
  };

  const handlePrevPage = () => {
    if (page === 1) {
      return;
    }
    setPage((prev) => prev - 1);
  };
  const handleNextPage = (): void => {
    setPage((prev) => prev + 1);
  };

  const isEndPage =
    (diarysCount?.fetchBoardsCount as number) - ((page - 1) * SIZE + SIZE) <= 0;

  useEffect(() => {
    refetchDiarysData();
    refetchDiarysCount();
  }, [router, page]);

  return (
    <Contents>
      <StyledDiaryList>
        <DiaryHeader>
          <DiaryTitle>
            <Title>Diary</Title>
            <Text>TODAY STORY</Text>
          </DiaryTitle>
          <Button onClick={handleCreateDiary}>다이어리 작성</Button>
        </DiaryHeader>
        <Divider />
        <DiaryItemList>
          {diarysData?.fetchBoards?.map((item, index) => (
            <DiaryItem
              key={index}
              title={item.title ?? ""}
              number={item.number ?? null}
              createdAt={item.createdAt}
              onClick={() => handleDiaryClick(item.number ?? null)}
            />
          ))}
        </DiaryItemList>
        <Pagination
          page={page}
          isEndPage={isEndPage}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      </StyledDiaryList>
    </Contents>
  );
};

const StyledDiaryList = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    margin-bottom: 11px;
  }
`;

const DiaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DiaryTitle = styled.div`
  display: flex;
  p {
    :nth-child(2) {
      display: flex;
      align-items: center;
      font-size: 8px;
      margin-left: 5px;
    }
  }
`;

const DiaryItemList = styled.div`
  height: 320px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #e9e9e9;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c5c2c2;
  }
`;

export default DirayList;
