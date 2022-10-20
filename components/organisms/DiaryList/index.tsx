import React, { useEffect } from "react";
import styled from "styled-components";
import {
  GetDiarysQueryResult,
  GetDiarysQueryVariables,
  useGetDiarysQuery,
} from "lib/graphql/queries/schema";
import { useRouter } from "next/router";
import Divider from "components/atoms/Divider";
import Text from "components/atoms/Text";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import DiaryItem from "components/molecules/DiaryItem";
import Contents from "../Contents/index";

const DirayList = () => {
  const router = useRouter();
  const { data: diarysData, refetch } = useGetDiarysQuery({
    variables: { input: 0 } as GetDiarysQueryVariables,
  }) as GetDiarysQueryResult;

  const slicedData = diarysData?.fetchBoards?.slice(0, 5);

  const handleCreateDiary = () => {
    router.push(`/diary/new`);
  };

  const handleDiaryClick = (id: number) => {
    router.push(`/diary/${id}`);
  };

  useEffect(() => {
    refetch();
  }, [router]);

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
        {slicedData?.map((item, index) => (
          <DiaryItem
            key={index}
            title={item.title}
            number={item.number}
            createdAt={item.createdAt}
            onClick={() => handleDiaryClick(item.number)}
          />
        ))}
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

export default DirayList;
