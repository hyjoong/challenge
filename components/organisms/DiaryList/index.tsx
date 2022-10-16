import React from "react";
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
import DiaryItem from "components/molecules/DiaryItem";
import Contents from "../Contents/index";

const DirayList = () => {
  const router = useRouter();
  const { data: diarysData } = useGetDiarysQuery({
    variables: { input: 0 } as GetDiarysQueryVariables,
  }) as GetDiarysQueryResult;

  if (!diarysData) {
    return <div>network Error</div>;
  }
  const slicedData = diarysData?.fetchBoards?.slice(0, 5);

  const handleDiaryClick = (id: number) => {
    router.push(`/diary/${id}`);
  };
  return (
    <Contents>
      <StyledDiaryList>
        <DiaryTitle>
          <Title>Diary</Title>
          <Text>TODAY STORY</Text>
        </DiaryTitle>
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

const DiaryTitle = styled.div`
  display: flex;
  align-items: bottom;

  p {
    :nth-child(2) {
      display: flex;
      align-items: flex-end;
      font-size: 8px;
      margin-left: 5px;
    }
  }
`;

export default DirayList;
